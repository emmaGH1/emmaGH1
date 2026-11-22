# hackathon playbook v4: read this first

## why v4

v3 fixed how we build: triage, sponsor-first ideas, a clock, evidence judges can re-run. a four-round debate between claude and astra (gpt-6.2 astra), nov 21–22, found what it still missed:

- **we lost before the pitch.** coby had no store link, strip's judged feature didn't run, stockup named the wallet bounty then used another wallet. so the gate is tried for real in hour 1.
- **the idea wasn't one thing.** the winners are one action that pays the user and the sponsor at once (roux). v4 writes every idea that way.
- **"80% done" was the agent's opinion.** `check-live` only tested what the agent chose to add, so a landing page passed "1 of 1". v4 measures progress from an approved journey on the live url.
- **judges read the readme, not the code.** rummage's readme served a verifier before a first-time reader. v4 makes it the product page.

## what changed in v4

| v3 | v4 |
|---|---|
| six laws, ~1,700 words always loaded | **five laws on one phone screen** (~700 words); details in the steps |
| fit score; clashes by fit score | **prize map** per host, co-host and award; **try the gate** before the verdict; clashes as a **head-to-head** (never "skip for time") |
| 5 ideas from 5 angles, 6 tests | **the singularity:** "when they ___, they get ___, and the sponsor gets ___"; 8 one-liners → 3; winners-post lines; a cold test by a fresh agent |
| progress in `STATE.md`, written by the agent | **`scripts/status.mjs`**: every journey step has an approved check on the live url; missing check = fail; fingerprint shows if plan or checks changed; no percentages |
| north star in `AGENTS.md`, plan locked | north star + journey in `docs/PLAN.md`; the agent proposes one exact change, the human approves (`--approve`) |
| extension ran `check-live`, skipped if missing | **extension v4** shows the measured board under every reply, retries only on regressions, reports a missing checker, blocks `--approve` and edits to approved checks; `/status` |
| readme: proof first, limits last | **readme = the product page:** opens on what the reader gets to do, a banner, a hero loop, one repeatable example, three links; disclosures where they matter; a 7-point cold read on the rendered github page |
| "craft comes second", four film gates | **a voiced product film around the first successful run** (own voice, captions, splash); one approval |
| every claim in three places; llms.txt always | **one direct proof per scored claim**; llms.txt only when an ai crawler judges; sponsor notes and build log only when scored or required |
| same reason twice → change the skill | **change a rule only on evidence**; one continuation per event, tracked apart from placing |
| a tools table in the skill | removed (model routing lives in your own notes) |

## the habit that matters most

hour 1: the gate and the riskiest sponsor call for real. by 10%: the journey and its checks approved, and proven to fail on the landing page. from then on, `status` is the only answer to "how far are we?".

## the files

```
hackathon-playbook/
  SKILL.md          ← core, always loaded: five laws, the clock, the decisions
  README.md         ← this file (for you, not the agent)
  cases.md          ← the evidence: the win, 8 losses, what serial winners do
  results.md        ← one row per event, filled in after results
  problems.md       ← real problems you notice (`note: …` from your phone); ideas use them when they fit
  lane.md           ← the lane, and what each event added to the core
  steps/
    1-triage.md  2-idea.md  3-build.md  4-design.md
    5-demo.md  6-submit.md  7-postmortem.md
  templates/
    AGENTS.md  BRIEF.md  PLAN.md  STATE.md
    README.md  JUDGES.md  check-live.mjs  run-demo.ts
    status.mjs  journey.mjs ← the honest progress board and its checks
    pi/stay-on-course.ts   ← pi extension: north star in every prompt, measured board under every reply
    core/                  ← reusable parts: guard.ts, evidence.ts, telegram.ts
```

## install on the vps

1. on this vps, pi and codex link to this folder in `/data/workspace/emmaGH1`, so `git pull` there updates both.
2. per project (step 3, hour 1): copy `templates/status.mjs` → `scripts/`, `templates/journey.mjs` → `checks/`, `templates/check-live.mjs` → `scripts/`, `templates/pi/stay-on-course.ts` → `.pi/extensions/`, and trust the project in pi.
3. start a fresh pi session: `/hackathon-playbook`, then `triage <event link>`. it should come back with a prize map, the gate it tried and a plan size. type `status` (or `/status` in pi) any time for the measured board.

## how to use it

- `triage <link>`: prize map, the gate tried, fit, plan size; you decide enter or skip
- `idea`: 8 one-liners, 3 finalists, then the journey and its checks to approve
- `status`: the measured progress board, pasted verbatim
- `checkpoint`: the clock mark, green or red
- `readme`: build or check the readme (step 6)
- `demo`: script or record
- `submit`: disqualifier check, readme, judge audit, checklist
- `postmortem`: compare with the winners, add a row to `results.md`
- `away mode`: lock everything before you step away
- `note: <what happened>`: save something you noticed to `problems.md`, any day
