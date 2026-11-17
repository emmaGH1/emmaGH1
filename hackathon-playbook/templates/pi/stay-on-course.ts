// stay-on-course: a pi extension that keeps the build agent on the plan.
// install per project: copy to <repo>/.pi/extensions/stay-on-course.ts (loads once the project is trusted).
//
// 1. every run: puts the "north star" section of AGENTS.md and the next action from docs/STATE.md
//    into the system prompt, so it survives long sessions and compaction.
// 2. blocks agent edits to docs/PLAN.md (edit, write, and obvious shell writes): the idea, journey and
//    cut list change only when the human edits them.
// 3. before the agent stops after changing files: runs scripts/check-live.mjs. if a live claim fails,
//    the agent gets one more turn to fix it, with orders not to mock, skip or delete the check.

import { readFileSync, existsSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { type ExtensionAPI, isToolCallEventType } from "@earendil-works/pi-coding-agent";

const PROTECTED = ["docs/PLAN.md"];

function section(md: string, heading: RegExp): string {
  const lines = md.split("\n");
  const start = lines.findIndex((l) => heading.test(l));
  if (start < 0) return "";
  const out: string[] = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) break;
    out.push(lines[i]);
  }
  return out.join("\n").trim();
}

function read(cwd: string, file: string): string {
  const p = join(cwd, file);
  return existsSync(p) ? readFileSync(p, "utf8") : "";
}

export default function (pi: ExtensionAPI) {
  let changedFiles = false;
  let checkRetried = false;

  pi.on("before_agent_start", async (event, ctx) => {
    if (event.messageType === "user") {
      changedFiles = false;
      checkRetried = false;
    }
    const cwd = event.systemPromptOptions.cwd ?? ctx.cwd;
    const star = section(read(cwd, "AGENTS.md"), /^## north star/i);
    if (!star) return;
    const next = section(read(cwd, "docs/STATE.md"), /^## next action/i);
    event.systemPromptOptions.sections["north-star"] = [
      "THE NORTH STAR (set by the human; it outranks any idea you have mid-build):",
      star,
      next ? `\nNEXT ACTION (docs/STATE.md):\n${next}` : "",
      "\nBefore any task, say which journey step or JUDGES.md claim it moves forward.",
      "If it moves none of them, write it under 'later' in docs/STATE.md and don't do it.",
      "Never mock, stub, skip or swap out the core path or the sponsor's product to make something pass.",
      "Blocked twice on the same thing: stop and report. Don't change the idea, the journey or the cut list.",
    ].join("\n");
  });

  pi.on("tool_call", async (event, ctx) => {
    if (isToolCallEventType("bash", event)) {
      changedFiles = true;
      const cmd = event.input.command;
      if (PROTECTED.some((f) => cmd.includes(f)) && /(>|sed -i|tee |mv |cp |rm )/.test(cmd)) {
        return { block: true, reason: "docs/PLAN.md is the human's plan. propose the change in your reply; the human edits it." };
      }
      return;
    }
    if (!isToolCallEventType("write", event) && !isToolCallEventType("edit", event)) return;
    changedFiles = true;
    const path = relative(ctx.cwd, resolve(ctx.cwd, (event.input as { path: string }).path));
    if (PROTECTED.includes(path)) {
      return {
        block: true,
        reason: `${path} is the human's plan. propose the change in your reply; the human edits it.`,
      };
    }
  });

  pi.on("agent_before_settle", async (event, ctx) => {
    if (!changedFiles || checkRetried) return;
    if (!existsSync(join(ctx.cwd, "scripts/check-live.mjs"))) return;
    const r = await pi.exec("node", ["scripts/check-live.mjs"], { cwd: ctx.cwd, timeout: 120_000 });
    if (r.code === 0) return;
    checkRetried = true;
    return {
      entries: [
        ...event.entries,
        {
          type: "custom_message",
          customType: "stay-on-course",
          content:
            "check-live failed after your changes:\n" +
            `${(r.stdout + r.stderr).slice(-2000)}\n` +
            "fix the real cause. do not mock, skip, loosen or delete a check to make it pass. " +
            "if you can't fix it, stop and report what broke and the smallest honest fallback.",
          display: true,
        },
      ],
      continue: true,
    };
  });
}
