# hackathon playbook v3: read this first

## why v3

v2 was a careful process: 7 phases, about 10 stop gates, a random-card novelty pass, four ai tools and a six-gate remotion film pipeline. it produced 1 win in 40+ events, and that one win (roux) came from a project built **without** it.

in 8 losses compared side by side with what won (`cases.md`), the losses weren't about effort or talent:

- **7 of 8 were built in the last 1–3 days** of windows that ran up to 8 weeks
- **the sponsor's core product wasn't doing the main job**: strip's ai was blocked, normandy never paired the wallet, stockup used rabby at a binance web3 wallet event
- **fiction as the proof**: a fictional neighbourhood, seeded comments, fixture travel plans
- **low stakes**: a release-notes comic lost to a medicaid work-hours tool at the same event
- **a missed disqualifier**: coby was never on a store at an event that screens on store urls

v3 is built to stop each of those.

## what changed

| v2 | v3 |
|---|---|
| intake and judge analysis, then ideation | **triage first: enter or skip**, with a score, hard skips and a cap of 2 live events |
| random cards; novelty gate "however well it fits the rubric" | **sponsor-first ideas**: 5 ideas from 5 angles, scored on sponsor, stakes, next-week use, real data, plainness and buildability |
| about 10 stop gates | **3 human decisions**: enter, which idea, submit |
| phases with no time limits | **a clock**: hour 1 · 10% · 25% · 50% · 75% freeze · 90% submitted |
| about 12 harness docs | **4 docs**: brief, plan, state, readme |
| a remotion film by default | **a recording that proves it works** by default; the film only with a day to spare |
| honesty tables first | **proof first**, limits at the bottom |
| no review of results | **step 7 postmortem** plus `results.md`; a lesson that repeats changes the rules |

kept from v2: the anti-slop design rules (shortened), the logo rules, the build loop, the never-fabricate rule, away mode (was sleep mode), model roles, and the playwright capture script (now `templates/run-demo.ts`).

removed: the novelty decks and `draw.py`, parallel lanes before the 25% mark, the design-reference stack, and the per-phase model routing table. all of it is still in git history.

```
hackathon-playbook/
  SKILL.md          ← core, always loaded: six laws, the clock, 3 decisions
  README.md         ← this file (for you, not the agent)
  cases.md          ← the evidence: the win, 8 losses, what serial winners do
  results.md        ← one row per event, filled in after results
  steps/
    1-triage.md  2-idea.md  3-build.md  4-design.md
    5-demo.md  6-submit.md  7-postmortem.md
  templates/
    BRIEF.md  PLAN.md  STATE.md  README.md  run-demo.ts
```

## install on the vps

1. delete the old `hackathon-playbook/` from pi's skills folder (usually `~/.pi/agent/skills/`) so v2 can't load.
2. copy this folder there.
3. start a fresh pi session: `/hackathon-playbook`, then `triage <event link>`. it should come back with a score and an enter/skip verdict, not ideas. if it starts ideating or coding, v2 is still loaded somewhere.

## how to use it

- `triage <link>`: enter or skip
- `idea`: 5 ideas, scored, 3 finalists
- `checkpoint`: where are we on the clock, green or red
- `demo`: script or record
- `submit`: disqualifier check, readme, judge audit, checklist
- `postmortem`: compare with the winners, add a row to `results.md`
- `away mode`: lock everything before you step away

## the habit that matters most

pick **one** upcoming event that's at least two weeks long. triage it on day 1, have the sponsor's core working live by the 25% mark, and work on it daily. that's how kanmani, incorpr and animr were built.
