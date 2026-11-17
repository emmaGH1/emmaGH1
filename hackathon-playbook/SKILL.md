---
name: hackathon-playbook
description: emmanuel's hackathon playbook (v3). use when deciding whether to enter a hackathon, picking an idea, building, demoing, submitting or reviewing a result, or when the human says "triage", "idea", "checkpoint", "demo", "submit", "postmortem", "away mode" or "note:".
---

# hackathon playbook v3

one goal: **place.** not "ship something", not "be original". every rule below comes from a real result. the evidence is in `cases.md`; read it once per new event.

this file is the only one loaded every session. open a step file only when you reach that step.

## the six laws

1. **the hard part first, for real.** before deep planning, make the sponsor's riskiest call work live: one real auth, transaction or api response (jenny put $1 into aave and took it back out before planning ditto). serial winners also build in 2–5 days and overlap events (`cases.md`); what they do in those days is the difference. when time is short the plan shrinks (`steps/1-triage.md` §5); the playbook never says skip for time unless asked.
2. **the rules are a list of ways to be disqualified.** read them before any idea. every hard requirement becomes a checkbox in `docs/BRIEF.md` that must be ticked, with evidence, before submitting. (coby had no store listing at an event that screens on store urls.)
3. **build what the sponsor wants more of, on the sponsor's own tooling.** the sponsor's product does the main job, live. if you can delete it and the app still works, the idea is wrong. the co-host, special awards and tie-breaks say what they want (stockup used rabby at a binance web3 wallet event). install the sponsor's official agent skills, mcp server or docs into the repo in hour 1, so the agent never guesses an endpoint.
4. **a real person with real stakes, using real data.** someone who loses money, health, time or standing without it, and would use it next week, reached where they already are (telegram, whatsapp, the sponsor's app). no fictional neighbourhoods, no seeded communities as the core proof.
5. **every claim has evidence a judge can re-run.** mainnet or production over testnet, live calls over cached output. raw outputs of real runs go in `evidence/`; `JUDGES.md` maps each claim to its code, test and command; one command (`node scripts/check-live.mjs`) re-checks the live claims and prints "n of n passed". write it for human and ai judges. never fabricate anything.
6. **small process for the agent, big proof for the judge.** 4 working docs and 3 human decisions. judge-facing files (`JUDGES.md`, `evidence/`, `BUILDLOG.md`, `SPONSOR_NOTES.md`, `SUBMISSION.md`) are proof, not process. strip had 17 process docs and its judged ai feature didn't run.

## the clock

the clock runs from the moment you start building to the deadline. the marks are percentages, so they shrink with whatever time is left.

| mark | must be true | if not |
|---|---|---|
| hour 1 | brief written, event spec in `AGENTS.md`, sponsor skills/mcp installed, repo live at a url (a blank page is fine), riskiest sponsor call tried for real | nothing else starts until this is done |
| 10% | idea picked, `docs/PLAN.md` written | take the top-scoring idea and move |
| 25% | the sponsor's product does the main job, live, with real data | change the idea now, or shrink it to what the sponsor tech can really do |
| 50% | the one journey works end to end on the live url, checked at phone width; `check-live` passes for it | cut everything outside that journey |
| 75% | **feature freeze.** every claim in `JUDGES.md` has evidence, demo recorded, readme written | stop building; finish the submission |
| 90% | submitted | — |
| 100% | buffer for broken deploys, upload failures and timezones | — |

at each mark the agent reports green or red, the evidence, and the next action. the human only steps in on red.

start every substantial reply with a status line:

`step 3 · build · clock 48% · 25% mark green · next: chatgpt, low`

## the three human decisions

1. **enter or skip** (end of step 1)
2. **which idea** (end of step 2)
3. **submit** (end of step 6)

everything else the agent decides and reports. never spend money, submit, publish, post or contact organizers without the human's explicit yes.

## staying on course (for the build agent)

agents drift in long sessions: they lose the plan after compaction, chase a side feature, or quietly mock the hard part to make something pass. so:

1. **the north star** (top of `AGENTS.md`: the person, the one journey, the sponsor's job, what done means, the cut list) is the human's. the `stay-on-course` pi extension puts it, plus the next action from `docs/STATE.md`, into every prompt, so compaction can't drop it.
2. **every task names what it moves forward:** a journey step or a `JUDGES.md` claim. if it moves neither, it goes under "later" in `docs/STATE.md` and isn't done now.
3. **the core path is protected.** never mock, stub, skip, loosen a check or swap the sponsor's product for another to make something pass. blocked twice on the same thing: stop and report with the smallest honest fallback.
4. **the plan changes only by the human.** `docs/PLAN.md` (idea, journey, cut list) is blocked to agent edits; an agent proposes, the human edits.
5. **done is executable.** before the agent stops after changing files, the extension runs `check-live`; a failure gets one turn to fix the real cause.
6. **one task per session.** a fresh session reads `AGENTS.md` and `docs/STATE.md` instead of carrying a long history.
7. **drift check at every clock mark:** compare the commits since the last mark to the north star and report "on course" or "drifted: <what>, back by <how>".

## steps

| step | file | when |
|---|---|---|
| 1 · triage | `steps/1-triage.md` | a new event link, or "triage" |
| 2 · idea | `steps/2-idea.md` | after "enter", or "idea" |
| 3 · build | `steps/3-build.md` | idea picked; also "checkpoint" |
| 4 · design | `steps/4-design.md` | before any ui beyond the bare journey |
| 5 · demo | `steps/5-demo.md` | script at the 50% mark, record at 75%, or "demo" |
| 6 · submit | `steps/6-submit.md` | the 75% mark, or "submit" |
| 7 · postmortem | `steps/7-postmortem.md` | results are out, or "postmortem" |

## project files

working docs (for the agent; only these):

- `AGENTS.md`: the event spec (`templates/AGENTS.md`): rubric mapped to features, verified constants, gotchas, invariants, folder ownership, the locked visual direction
- `docs/BRIEF.md`: event facts, disqualifier checklist, judging weights, what the sponsor wants (`templates/BRIEF.md`)
- `docs/PLAN.md`: the idea, the person, the one journey, the cut list, ideas dropped, clock dates (`templates/PLAN.md`)
- `docs/STATE.md`: what works now (verified), friction log, next action, later (`templates/STATE.md`)
- `.pi/extensions/stay-on-course.ts` (`templates/pi/stay-on-course.ts`): keeps the agent on the north star

judge-facing (proof; grow them as you build):

- `README.md` (`templates/README.md`) · `JUDGES.md` (`templates/JUDGES.md`) · `evidence/` (raw outputs of real runs, dated) · `scripts/check-live.mjs` (`templates/check-live.mjs`)
- at submit: `BUILDLOG.md`, `SPONSOR_NOTES.md` (the dx report), `SUBMISSION.md` (the form answers)

## quality floor

- reduce scope, not quality.
- next.js apps: typescript + tailwind + real shadcn/ui components. verify imports; never fake the look.
- "build passed" is never proof a ui works. look at the rendered page at phone width.
- never invent metrics, users, integrations, "live" states, transactions or ai results.
- the human works from a phone; coding runs on the vps through pi in t3 code. keep replies scannable on a small screen.
- github is the source of truth: decisions and state live in the repo, not in chat.

## tools

| job | tool |
|---|---|
| reading rules, sponsor docs, research | gemini / antigravity |
| bulk coding, scripts, routine fixes, copy | chatgpt (2 accounts; switch when one runs out) |
| idea critique, architecture review, hard bug after 2 failed tries, final judge audit | claude opus, short turns only |
| landing page, ui polish, video build | claude sonnet |
| where agents run | pi on the vps, via t3 code |
| hosting | vercel (frontend), vps + coolify (backend, workers) |

one model drafts, another critiques **once**, the human decides. fresh session per task; read `docs/STATE.md` instead of re-deriving context. high effort only for decisions and hard bugs.

## away mode

when the human says they're leaving: lock the idea, the journey, the cut list, allowed integrations, whether deploying is allowed, and the stop condition in `docs/STATE.md`. while away: no new features, no idea change, no spending, no submitting, no blind retries. after two materially different failed approaches to one blocker, stop, write it down, and take the best honest smaller fallback.

## between events

- **`note: <what happened>`**: append a row to `problems.md` (date, who, what happened, where). no ideation, no reply beyond "saved".
- **`lane.md`** holds the optional lane (for money, payments and agent events) and the lane log; **`templates/core/`** holds the reusable parts (guard, evidence, receipts, telegram). after each event, copy improvements back and add a lane-log line.

## shorthand

`triage <link>` · `idea` · `checkpoint` (report the clock mark) · `demo` · `submit` · `postmortem` · `away mode` · `note: <…>`
