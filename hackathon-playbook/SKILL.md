---
name: hackathon-playbook
description: emmanuel's hackathon playbook (v3). use when deciding whether to enter a hackathon, picking an idea, building, demoing, submitting or reviewing a result, or when the human says "triage", "idea", "checkpoint", "demo", "submit", "postmortem" or "away mode".
---

# hackathon playbook v3

one goal: **place.** not "ship something", not "be original". every rule below comes from a real result. the evidence is in `cases.md`; read it once per new event.

this file is the only one loaded every session. open a step file only when you reach that step.

## the six laws

1. **enter fewer, start early.** at most 2 live events, and only one of them longer than a week. a long event is won by long work: 7 of the 8 losses in `cases.md` were built in the last 1–3 days of a window that ran from 36 hours to 8 weeks. the winners were there from week one. when deadlines clash, follow `steps/1-triage.md` §5.
2. **the rules are a list of ways to be disqualified.** read them before any idea. every hard requirement becomes a checkbox in `docs/BRIEF.md` that must be ticked, with evidence, before submitting. (coby had no store listing at an event that screens on store urls.)
3. **build what the sponsor wants more of.** the sponsor's own product does the main job, live. if you can delete it and the app still works, the idea is wrong. the co-host, special awards and tie-breaks tell you exactly what they want. (stockup used rabby at an event co-hosted by binance web3 wallet whose tie-break was depth of web3 wallet api use.)
4. **a real person with real stakes, using real data.** someone who loses money, health, time or standing without it, and would use it next week, reached where they already are (telegram, whatsapp, the sponsor's app). no fictional neighbourhoods, no seeded communities as the core proof.
5. **make it real instead of explaining why it isn't.** mainnet or production api over testnet, a live model call over cached output. the readme opens with proof; limits go at the bottom. never fabricate anything.
6. **less process, more product.** roux, the one win, was coding in its first hour with no ideation docs. 4 project docs, 3 human decisions, one builder at a time.

## the clock

the clock runs from the moment you start building to the deadline. step 1 decides whether that start is early enough to enter at all.

| mark | must be true | if not |
|---|---|---|
| hour 1 | brief written, disqualifiers listed, repo deployed to a live url (a blank page is fine), riskiest sponsor call tried | nothing else starts until this is done |
| 10% | idea picked, `docs/PLAN.md` written | take the top-scoring idea and move |
| 25% | the sponsor's product does the main job, live, with real data | change the idea now, or shrink it to what the sponsor tech can really do |
| 50% | the one journey works end to end on the live url, checked at phone width | cut everything outside that journey |
| 75% | **feature freeze.** demo recorded, readme written | stop building; finish the submission |
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

## project files (only these)

- `AGENTS.md`: repo rules, folder ownership, what not to touch, the locked visual direction
- `docs/BRIEF.md`: event facts, disqualifier checklist, judging weights, what the sponsor wants (`templates/BRIEF.md`)
- `docs/PLAN.md`: the idea, the person, the one journey, the cut list, clock dates (`templates/PLAN.md`)
- `docs/STATE.md`: what works now (verified), the proof list, friction log, next action (`templates/STATE.md`)
- `README.md`: judge-facing (`templates/README.md`)

no other docs unless the event asks for them (a dx report, a disclosure). strip had 17 files in `docs/` and the ai feature it was judged on still didn't run.

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

## shorthand

`triage <link>` · `idea` · `checkpoint` (report the clock mark) · `demo` · `submit` · `postmortem` · `away mode`
