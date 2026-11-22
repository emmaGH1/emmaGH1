---
name: hackathon-playbook
description: emmanuel's hackathon playbook (v4). use when deciding whether to enter a hackathon, picking an idea, building, checking progress, writing the readme, demoing, submitting or reviewing a result, or when the human says "triage", "idea", "status", "checkpoint", "readme", "demo", "submit", "postmortem", "away mode" or "note:".
---

# hackathon playbook v4

one goal: **place.** this file is loaded every session; open a step file only when you reach it.

## the five laws

1. **qualify before you impress.** most losses happened before a judge understood the entry (no store link, the judged feature didn't run, the named wallet unused). try the hardest qualifying step and the riskiest sponsor call for real, in hour 1.
2. **one action, two payoffs.** the idea is one user action whose result also gives the sponsor what it wants: *"when they ___, they get ___, and <sponsor> gets ___."* (roux: friends tap once, get a fair restaurant; flynet gets diners at blackbird.)
3. **the sponsor does the job, visibly.** turn off the sponsor call: a promised result must disappear. show what it supplied where the payoff happens, the way that fits the product.
4. **the repo measures progress, not the agent.** progress is `node scripts/status.mjs`: every journey step has an approved check run on the live url. no percentages, no "almost done".
5. **the readme is the product page.** judges read the readme, not the code. it opens on what the reader gets to do, shows it, and lets them try exactly that.

never fabricate: no invented users, metrics, transactions, "live" states or ai results. no forced "first ever" claims.

## the clock

the clock runs from build start to deadline; marks are percentages of it.

| mark | must be true (measured by `status`) |
|---|---|
| hour 1 | brief written, sponsor tooling installed, live url up, hardest qualifying step and riskiest sponsor call tried for real |
| 10% | idea picked; journey and checks approved (`--approve`) |
| 25% | the sponsor step passes in the deployed app |
| 50% | the whole journey passes on a phone, logged out |
| 75% | **freeze.** readme, film and judges file done |
| 90% | submitted · the rest is buffer |

until the journey passes, the agent only works on the first step that isn't passing.

every build reply starts with one line: `step 3 · build · clock 48% · next: J2 sponsor call`. no completion percentage.

## the human decides (three things, plus approvals)

1. **enter** (end of step 1) · 2. **which idea** (end of step 2) · 3. **submit** (end of step 6)
- **plan changes:** the agent proposes one exact change (old line, new line, why); the human says yes; then `node scripts/status.mjs --approve "<why>"`. agents never edit `docs/PLAN.md` or approved checks.
- never spend money, submit, publish, post or contact organizers without the human's explicit yes.

## steps

| step | file | when |
|---|---|---|
| 1 · triage | `steps/1-triage.md` | a new event link, or "triage" |
| 2 · idea | `steps/2-idea.md` | after "enter", or "idea" |
| 3 · build | `steps/3-build.md` | idea picked; "status" or "checkpoint" |
| 4 · design | `steps/4-design.md` | before any ui beyond the bare journey |
| 5 · demo | `steps/5-demo.md` | first successful run, or "demo" |
| 6 · readme + submit | `steps/6-submit.md` | from 50%; "readme" or "submit" |
| 7 · postmortem | `steps/7-postmortem.md` | results are out, or "postmortem" |

## project files

`AGENTS.md` (event spec) · `docs/BRIEF.md` (rules, prizes, disqualifiers) · `docs/PLAN.md` (north star, journey, clock: the human's) · `docs/STATE.md` (next, later, friction, limits) · `checks/journey.mjs` + `scripts/status.mjs` (progress) · `scripts/check-live.mjs` + `JUDGES.md` + `evidence/` (proof for judges) · `.pi/extensions/stay-on-course.ts`. templates for all of them are in `templates/`.

## shorthand

- `status`: run `node scripts/status.mjs` and paste its output **verbatim**. never summarise it.
- `note: <what happened>`: append a row to `problems.md`; reply "saved", nothing else.
- `away mode`: lock idea, journey, cut list, allowed integrations, deploy yes/no and the stop condition in `docs/STATE.md`. no new features, idea changes, spending or submitting while away; after two materially different failed attempts, stop and write down the blocker.
- `triage <link>` · `idea` · `checkpoint` · `readme` · `demo` · `submit` · `postmortem`

the human works from a phone: short, scannable replies. github is the source of truth.
