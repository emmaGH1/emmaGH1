# hackathon playbook v3: read this first

## why v3

v2 was a careful process: 7 phases, about 10 stop gates, a random-card novelty pass, four ai tools and a six-gate remotion film pipeline. it produced 1 win in 40+ events, and that one win (roux) came from a project built **without** it.

in 8 losses compared side by side with what won (`cases.md`), the losses weren't about effort or talent:

- **the sponsor's core product wasn't doing the main job**: strip's ai was blocked, normandy never paired the wallet, stockup used rabby at a binance web3 wallet event
- **fiction as the proof**: a fictional neighbourhood, seeded comments, fixture travel plans
- **low stakes**: a release-notes comic lost to a medicaid work-hours tool at the same event
- **a missed disqualifier**: coby was never on a store at an event that screens on store urls
- **claims a judge couldn't check**: no evidence folder, no judges file, no command that re-runs the proof

not the cause: time. 7 of 8 losses were built in 1–3 days, but the serial winners also build in 2–5 days and overlap events. what they build in that time is different: an event spec the agent reads every session, the sponsor's own tooling installed, the hard part proven with real money first, and evidence a judge can re-run (`cases.md`).

v3 is built to stop each of those.

## what changed

| v2 | v3 |
|---|---|
| intake and judge analysis, then ideation | **triage first**: a fit score, disqualifiers, and a plan sized to the time left. it never tells you to skip for time unless you ask |
| random cards; novelty gate "however well it fits the rubric" | **sponsor-first ideas**: 5 ideas from 5 angles, scored on sponsor, stakes, next-week use, real data, plainness and buildability |
| about 10 stop gates | **3 human decisions**: enter, which idea, submit |
| phases with no time limits | **a clock**: hour 1 · 10% · 25% · 50% · 75% freeze · 90% submitted |
| about 12 harness docs | **4 docs**: brief, plan, state, readme |
| a remotion film by default | **an agent-recorded capture of the real app, assembled in hyperframes**, by default; the fuller film only with a day to spare |
| honesty tables first | **proof first**, limits at the bottom |
| a generic `AGENTS.md` | **an event spec** in `AGENTS.md`: rubric mapped to features, verified constants, gotchas, winners not to clone |
| a proof list in the readme | **evidence a judge can re-run**: `evidence/`, `JUDGES.md` (claim → code → test → command) and `check-live` |
| a dx report if asked | **`SPONSOR_NOTES.md`** with measured numbers, plus upstream fixes; **`BUILDLOG.md`** in plain words |
| no review of results | **step 7 postmortem** plus `results.md`; a lesson that repeats changes the rules |

kept from v2: the anti-slop design rules (shortened), the logo rules, the build loop, the never-fabricate rule, away mode (was sleep mode), model roles, and the playwright capture script (now `templates/run-demo.ts`).

removed: the novelty decks and `draw.py`, parallel lanes before the 25% mark, the design-reference stack, and the per-phase model routing table. all of it is still in git history.

```
hackathon-playbook/
  SKILL.md          ← core, always loaded: six laws, the clock, 3 decisions
  README.md         ← this file (for you, not the agent)
  cases.md          ← the evidence: the win, 8 losses, what serial winners do
  results.md        ← one row per event, filled in after results
  seeds.md          ← real moments you notice; ideas start here (`seed: …` from your phone)
  lane.md           ← the lane, and what each event added to the core
  steps/
    1-triage.md  2-idea.md  3-build.md  4-design.md
    5-demo.md  6-submit.md  7-postmortem.md
  templates/
    AGENTS.md  BRIEF.md  PLAN.md  STATE.md
    README.md  JUDGES.md  check-live.mjs  run-demo.ts
    pi/stay-on-course.ts   ← pi extension: keeps the build agent on the plan
    core/                  ← reusable parts: guard.ts, evidence.ts, telegram.ts
```

## install on the vps

1. delete the old `hackathon-playbook/` from pi's skills folder (usually `~/.pi/agent/skills/`) so v2 can't load.
2. copy this folder there.
3. per project, copy `templates/pi/stay-on-course.ts` to `<repo>/.pi/extensions/` and trust the project when pi asks. it keeps the north star in every prompt, blocks agent edits to `docs/PLAN.md` and re-runs `check-live` before the agent stops.
4. start a fresh pi session: `/hackathon-playbook`, then `triage <event link>`. it should come back with a fit score, the time left and a plan size, not ideas. if it starts ideating or coding, v2 is still loaded somewhere.

## how to use it

- `triage <link>`: fit score, time left, plan size; you decide enter or skip
- `idea`: 5 ideas, scored, 3 finalists
- `checkpoint`: where are we on the clock, green or red
- `demo`: script or record
- `submit`: disqualifier check, readme, judge audit, checklist
- `postmortem`: compare with the winners, add a row to `results.md`
- `away mode`: lock everything before you step away
- `seed: <what happened>`: save a real moment to `seeds.md`, any day

## the habit that matters most

on every event, before anything else: install the sponsor's own tooling, make the hard part work live, and put that first result in `evidence/` and `check-live`. then every claim you add is something a judge can re-run. that's what jenny, mrnetwork, tim and enoch have in their repos and ours don't.
