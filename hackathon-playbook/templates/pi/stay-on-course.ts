// stay-on-course (v4): a pi extension that keeps the build agent on the plan and makes progress honest.
// install per project: copy to <repo>/.pi/extensions/stay-on-course.ts (loads once the project is trusted).
//
// 1. every run: puts the north star from docs/PLAN.md, the latest progress board and the next action
//    into the system prompt, so they survive long sessions and compaction.
// 2. blocks agent edits to docs/PLAN.md, to the approval files, and (once approved) to checks/.
//    the agent proposes a change; the human says yes; the human runs `node scripts/status.mjs --approve`.
// 3. after the agent changes files: runs scripts/status.mjs and shows the board under the reply, so the
//    progress you see comes from the repo, not from the model. a step that passed before and fails now
//    (a regression) gets one more turn to fix the real cause. a missing status script is reported, never skipped.
// 4. `/status` runs the board on demand.

import { readFileSync, existsSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { type ExtensionAPI, isToolCallEventType } from "@earendil-works/pi-coding-agent";

const PLAN = "docs/PLAN.md";
const APPROVAL_FILES = ["docs/approved.json", "docs/approvals.log"];
const STATUS = "scripts/status.mjs";
const LATEST = "evidence/status/latest.json";

type Step = { id: string; state: string };
type Report = { clock: string; approval: string; next: string; steps: Step[] };

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

function latest(cwd: string): Report | null {
  try {
    return JSON.parse(read(cwd, LATEST)) as Report;
  } catch {
    return null;
  }
}

function isProtected(cwd: string, path: string): string | null {
  if (path === PLAN) return `${PLAN} is the human's plan`;
  if (APPROVAL_FILES.includes(path)) return `${path} records the human's approval`;
  if (path.startsWith("checks/") && existsSync(join(cwd, "docs/approved.json"))) return "checks/ is approved by the human";
  return null;
}

const PROPOSE = "propose the exact change in your reply (old line, new line, why). the human approves it.";

export default function (pi: ExtensionAPI) {
  let changedFiles = false;
  let retried = false;
  let before: Report | null = null;

  async function board(cwd: string) {
    if (!existsSync(join(cwd, STATUS))) return null;
    const r = await pi.exec("node", [STATUS], { cwd, timeout: 600_000 });
    return { text: (r.stdout || r.stderr).trim(), code: r.code, report: latest(cwd) };
  }

  pi.on("before_agent_start", async (event, ctx) => {
    const cwd = event.systemPromptOptions.cwd ?? ctx.cwd;
    if (event.messageType === "user") {
      changedFiles = false;
      retried = false;
      before = latest(cwd);
    }
    const plan = read(cwd, PLAN);
    const star = section(plan, /^## north star/i) || section(read(cwd, "AGENTS.md"), /^## north star/i);
    const journey = section(plan, /^## the journey/i);
    if (!star && !journey) return;
    const last = latest(cwd);
    event.systemPromptOptions.sections["north-star"] = [
      "THE NORTH STAR (the human's plan; it outranks any idea you have mid-build):",
      star,
      journey ? `\nTHE JOURNEY (each step has an approved check in checks/journey.mjs):\n${journey}` : "",
      last ? `\nLAST MEASURED PROGRESS (scripts/status.mjs):\n${last.clock}\n${last.steps.map((s) => `${s.id} ${s.state}`).join(" · ")}\n${last.next}` : "",
      "\nRULES:",
      "- work on the first journey step that isn't passing. landing page, polish and demo wait until the journey passes, unless that step needs them.",
      "- never state a percentage or 'almost done'. progress is the board from scripts/status.mjs; quote it, don't summarise it.",
      "- say a step works only with a status run that shows it passing on the live url. 'works locally' is not a pass.",
      "- never mock, stub, skip, cache or swap out the sponsor's product to make a check pass. never edit checks to make them pass.",
      "- a task that moves no journey step goes under 'later' in docs/STATE.md and isn't done now.",
      "- blocked twice on the same thing with materially different attempts: stop. report the blocker, two honest options and a recommendation.",
    ].join("\n");
  });

  pi.on("tool_call", async (event, ctx) => {
    if (isToolCallEventType("bash", event)) {
      changedFiles = true;
      const cmd = event.input.command;
      if (/status\.mjs\b.*--approve/.test(cmd)) {
        return { block: true, reason: `approving the plan and checks is the human's call. ${PROPOSE}` };
      }
      const writes = /(>|sed -i|tee |mv |cp |rm |perl -i|truncate|git checkout|git restore)/.test(cmd);
      const touched = [PLAN, ...APPROVAL_FILES, "checks/"].find((f) => cmd.includes(f));
      if (writes && touched && isProtected(ctx.cwd, touched === "checks/" ? "checks/journey.mjs" : touched)) {
        return { block: true, reason: `${touched} is protected. ${PROPOSE}` };
      }
      return;
    }
    if (!isToolCallEventType("write", event) && !isToolCallEventType("edit", event)) return;
    changedFiles = true;
    const path = relative(ctx.cwd, resolve(ctx.cwd, (event.input as { path: string }).path));
    const why = isProtected(ctx.cwd, path);
    if (why) return { block: true, reason: `${why}. ${PROPOSE}` };
  });

  pi.on("agent_before_settle", async (event, ctx) => {
    if (!changedFiles) return;
    changedFiles = false;
    const b = await board(ctx.cwd);
    if (!b) {
      if (retried) return;
      retried = true;
      return {
        entries: [
          ...event.entries,
          {
            type: "custom_message",
            customType: "stay-on-course",
            content: `${STATUS} is missing, so nothing measures progress. copy it from the playbook's templates/status.mjs, plus checks/journey.mjs from templates/journey.mjs, then stop and report.`,
            display: true,
          },
        ],
        continue: true,
      };
    }
    const wasPassing = new Set((before?.steps ?? []).filter((s) => s.state === "pass").map((s) => s.id));
    const regressed = (b.report?.steps ?? []).filter((s) => wasPassing.has(s.id) && s.state !== "pass").map((s) => s.id);
    const shown = {
      type: "custom_message" as const,
      customType: "status-board",
      content: "PROGRESS (measured by scripts/status.mjs, not the agent):\n" + b.text,
      display: true,
    };
    if (regressed.length && !retried) {
      retried = true;
      return {
        entries: [
          ...event.entries,
          shown,
          {
            type: "custom_message",
            customType: "stay-on-course",
            content: `your changes broke ${regressed.join(", ")}, which passed before. fix the real cause. don't mock, skip, loosen or delete a check. if you can't, stop and report what broke and the smallest honest fallback.`,
            display: true,
          },
        ],
        continue: true,
      };
    }
    return { entries: [...event.entries, shown] };
  });

  pi.registerCommand("status", {
    description: "the honest progress board (runs scripts/status.mjs)",
    handler: async (_args, ctx) => {
      const b = await board(ctx.cwd);
      pi.sendMessage({
        customType: "status-board",
        content: b ? b.text : `${STATUS} is missing. copy templates/status.mjs and templates/journey.mjs into the project.`,
        display: true,
      });
    },
  });
}
