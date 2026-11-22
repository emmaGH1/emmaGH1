// scripts/status.mjs: the honest progress board. the repo measures progress; the agent never claims it.
// node 20+, no dependencies. copy to <repo>/scripts/status.mjs.
//
//   node scripts/status.mjs                 the phone board (exit 0 only when every step passes and checks are approved)
//   node scripts/status.mjs --json          the same, as json
//   node scripts/status.mjs --approve "why" record the current plan + checks as approved (the human's call only)
//
// it reads:
//   docs/PLAN.md         the journey table (| J1 | step | done means | sponsor |) and the clock (start, deadline)
//   checks/journey.mjs   one check per journey id (templates/journey.mjs). a step with no check is a failure, never a pass.
//   docs/approved.json   the fingerprint of PLAN.md + checks/ when the human approved them
// it writes evidence/status/latest.json and a dated copy, so every board can be traced to a run.

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync, appendFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(process.env.STATUS_ROOT ?? process.cwd());
const PLAN = join(ROOT, "docs/PLAN.md");
const CHECKS_DIR = join(ROOT, "checks");
const JOURNEY = join(CHECKS_DIR, "journey.mjs");
const APPROVED = join(ROOT, "docs/approved.json");
const APPROVALS_LOG = join(ROOT, "docs/approvals.log");
const STEP_TIMEOUT_MS = Number(process.env.STATUS_STEP_TIMEOUT_MS ?? 120_000);

const args = process.argv.slice(2);
const asJson = args.includes("--json");

// ---------- reading the plan ----------

function readPlan() {
  if (!existsSync(PLAN)) return { steps: [], start: null, deadline: null };
  const md = readFileSync(PLAN, "utf8");
  const steps = [];
  for (const line of md.split("\n")) {
    const m = line.match(/^\|\s*(J\d+!?)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|/i);
    if (!m) continue;
    steps.push({
      id: m[1].toUpperCase(),
      step: m[2].trim(),
      done: m[3].trim(),
      sponsor: /sponsor|core|yes|✓/i.test(m[4]),
    });
  }
  const when = (label) => {
    const m = md.match(new RegExp(`^\\|\\s*${label}\\s*\\|\\s*([^|]+?)\\s*\\|`, "im"));
    if (!m) return null;
    const d = new Date(m[1]);
    return Number.isNaN(d.getTime()) ? null : d;
  };
  return { steps, start: when("start"), deadline: when("deadline") };
}

// ---------- fingerprint (tamper-evident, not tamper-proof) ----------

function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? listFiles(p) : [p];
  });
}

function fingerprint() {
  const h = createHash("sha256");
  for (const f of [PLAN, ...listFiles(CHECKS_DIR).sort()]) {
    if (!existsSync(f)) continue;
    h.update(f.slice(ROOT.length));
    h.update("\0");
    h.update(readFileSync(f));
    h.update("\0");
  }
  return h.digest("hex").slice(0, 16);
}

function git(...a) {
  try {
    return execFileSync("git", a, { cwd: ROOT, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

function approvalState() {
  const fp = fingerprint();
  if (!existsSync(APPROVED)) return { ok: false, line: "⚠ plan + checks never approved", fp };
  const a = JSON.parse(readFileSync(APPROVED, "utf8"));
  const count = existsSync(APPROVALS_LOG) ? readFileSync(APPROVALS_LOG, "utf8").trim().split("\n").length : 1;
  const at = new Date(a.at).toLocaleString("en-GB", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "short" });
  if (a.fingerprint === fp) return { ok: true, line: `✓ checks match what you approved (${at} WAT · approvals: ${count})`, fp };
  const changed = a.commit ? git("diff", "--stat", a.commit, "--", "docs/PLAN.md", "checks") : "";
  return {
    ok: false,
    line: `⚠ plan or checks CHANGED since you approved them (${at} WAT)` + (changed ? `\n${changed.split("\n").slice(-4).join("\n")}` : ""),
    fp,
  };
}

if (args[0] === "--approve") {
  const note = args.slice(1).join(" ") || "(no note)";
  const entry = { fingerprint: fingerprint(), at: new Date().toISOString(), commit: git("rev-parse", "HEAD") || null, note };
  mkdirSync(join(ROOT, "docs"), { recursive: true });
  writeFileSync(APPROVED, JSON.stringify(entry, null, 2) + "\n");
  appendFileSync(APPROVALS_LOG, `${entry.at} · ${entry.fingerprint} · ${note}\n`);
  console.log(`approved ${entry.fingerprint}: ${note}`);
  process.exit(0);
}

// ---------- running the journey ----------

const withTimeout = (p, ms) =>
  Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`no result after ${ms / 1000}s`)), ms))]);

async function run() {
  const plan = readPlan();
  const problems = [];
  if (plan.steps.length === 0) problems.push("no journey in docs/PLAN.md (need rows like | J1 | step | done means | sponsor |)");

  let checks = {};
  let mod = {};
  if (existsSync(JOURNEY)) {
    mod = await import(pathToFileURL(JOURNEY).href + `?t=${Date.now()}`);
    checks = mod.default ?? {};
  } else {
    problems.push("checks/journey.mjs is missing: every step counts as unchecked");
  }

  const evidenceDir = join(ROOT, "evidence/status");
  const ctx = {
    url: mod.url ?? process.env.LIVE_URL ?? "",
    save(name, data) {
      mkdirSync(evidenceDir, { recursive: true });
      const f = join(evidenceDir, `${name}.json`);
      writeFileSync(f, JSON.stringify(data, null, 2));
      return f;
    },
  };

  const results = [];
  let blocked = null;
  for (const s of plan.steps) {
    const fn = checks[s.id];
    if (typeof fn !== "function") {
      results.push({ ...s, state: "nocheck", saw: "no check written for this step" });
      blocked ??= s.id;
      continue;
    }
    if (blocked) {
      results.push({ ...s, state: "unreached", saw: "" });
      continue;
    }
    try {
      const saw = await withTimeout(Promise.resolve(fn(ctx)), STEP_TIMEOUT_MS);
      if (!saw || typeof saw !== "string") throw new Error("the check returned nothing it saw; a check must say what it observed");
      results.push({ ...s, state: "pass", saw });
    } catch (e) {
      results.push({ ...s, state: "fail", saw: String(e?.message ?? e).split("\n")[0].slice(0, 160) });
      blocked = s.id;
    }
  }

  let deploy = "";
  if (typeof mod.deployId === "function") {
    try {
      deploy = String(await withTimeout(Promise.resolve(mod.deployId(ctx)), 15_000));
    } catch {
      deploy = "unknown";
    }
  }
  deploy ||= git("rev-parse", "--short", "HEAD") ? `commit ${git("rev-parse", "--short", "HEAD")}` : "unknown";

  // ---------- the clock ----------
  const now = new Date();
  let clock = { line: "Clock unknown (add start and deadline rows to the clock table in docs/PLAN.md)", pct: null, red: [] };
  if (plan.start && plan.deadline && plan.deadline > plan.start) {
    const pct = Math.max(0, Math.round(((now - plan.start) / (plan.deadline - plan.start)) * 100));
    const sponsorSteps = results.filter((r) => r.sponsor);
    const sponsorGreen = sponsorSteps.length > 0 && sponsorSteps.every((r) => r.state === "pass");
    const allGreen = results.length > 0 && results.every((r) => r.state === "pass");
    const red = [];
    if (pct >= 25 && !sponsorGreen) red.push("25% sponsor milestone RED");
    if (pct >= 50 && !allGreen) red.push("50% full-journey milestone RED");
    const marks = [];
    if (pct < 25) marks.push(sponsorGreen ? "25% sponsor milestone already green" : "25% mark: sponsor step must pass");
    else if (pct < 50) marks.push(allGreen ? "50% mark already green" : "50% mark: whole journey must pass");
    clock = { line: `Clock ${pct}% elapsed · ${red.length ? red.join(" · ") : marks[0] ?? (allGreen ? "journey green" : "")}`, pct, red };
  }

  const approval = approvalState();
  const passed = results.filter((r) => r.state === "pass").length;
  const first = results.find((r) => r.state !== "pass");
  const next = first
    ? `Next: make ${first.id} pass — ${first.done || first.step}`
    : "Next: journey green. polish, proof and demo are now allowed.";

  const report = {
    at: now.toISOString(),
    deploy,
    clock: clock.line,
    approval: approval.line,
    approved: approval.ok,
    fingerprint: approval.fp,
    problems,
    steps: results,
    passed,
    total: results.length,
    next,
  };

  mkdirSync(evidenceDir, { recursive: true });
  writeFileSync(join(evidenceDir, "latest.json"), JSON.stringify(report, null, 2));
  writeFileSync(join(evidenceDir, `${now.toISOString().replace(/[:.]/g, "-")}.json`), JSON.stringify(report, null, 2));

  if (asJson) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    const icon = { pass: "✓", fail: "✗", nocheck: "✗", unreached: "—" };
    const time = now.toLocaleTimeString("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });
    const lines = [clock.line];
    for (const r of results) {
      const tag = r.sponsor ? " [sponsor]" : "";
      const detail = r.state === "unreached" ? "unreached" : r.saw;
      lines.push(`${r.id} ${r.step}${tag} ${icon[r.state]} ${detail}`);
    }
    const stop = results.find((r) => r.state === "fail" || r.state === "nocheck");
    lines.push(
      `${stop ? `Failed at ${stop.id}` : results.length ? "Full journey passed" : "No journey"} · checked ${time} WAT · ${deploy}`,
    );
    lines.push(approval.line);
    for (const p of problems) lines.push(`⚠ ${p}`);
    lines.push(next);
    console.log(lines.join("\n"));
  }

  const ok = results.length > 0 && passed === results.length && approval.ok && problems.length === 0;
  process.exit(ok ? 0 : 1);
}

run().catch((e) => {
  console.error(`status crashed: ${e?.stack ?? e}`);
  process.exit(2);
});
