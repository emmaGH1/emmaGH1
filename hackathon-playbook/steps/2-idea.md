# step 2: idea (60–90 minutes; 30 in a sprint)

> output: `docs/PLAN.md` (from `templates/PLAN.md`) with the journey, and `checks/journey.mjs`. the human picks one idea and approves its checks.

the ideas that won (roux, eighty, kanmani, leash) were ones a sponsor's judge wanted straight away. an idea is judged on the singularity, the sponsor and proof first; freshness only breaks ties.

## the singularity

**one user action whose result also gives the sponsor what it wants.** every idea is written as:

> **when** <person> **<does one action>**, **they get** <result>, **and <sponsor> gets** <what it wants>.

- roux: when friends each tap once, they get a fair restaurant near the middle, and flynet gets diners sent to blackbird.
- rummage: when a player opens a drawer to hide or seek, they get the game, and lux3d gets its articulated furniture used as something you play with.

if you can't fill in both halves, it isn't an idea yet. the line becomes the north star in `docs/PLAN.md`; features neither half needs go on the cut list.

## 0. what the human has seen (5 minutes)

an agent can't see real people; the human can. ideas start from what they've noticed, when it fits.

1. read `problems.md` and `lane.md`. pick the notes that **fit this event**; don't force a money note onto a 3d jam.
2. **some fit:** at least 2 of the ideas build on them.
3. **none fit:** ask the human 3 quick questions written for this event's theme, one line or a voice note each (payments: "who around you lost money or time on a payment this month?" · a game or 3d jam: "what game or toy did you love, and what would you make if 3d models were free?" · dev tools: "what wasted your time in your last build?"). save useful answers to `problems.md`.
4. nothing real comes up: go to the sponsor angles. such an idea is marked **agent-only**; it can still win, but say so.

## 1. eight one-liners, then three

write 8 singularity lines quickly, from these angles (overlap is fine):

1. **the sponsor's business:** more users, transactions, merchants, listings for them (roux)
2. **a person with real stakes** the sponsor tech helps (eighty: medicaid work-hours proof)
3. **the sponsor's newest or least-shown feature** doing a real job
4. **what the sponsor's own developers need:** guardrails, testing, observability (leash)
5. **a world the human knows:** nigerian traders and cash habits, crypto communities, geology and mining, webtoon creators
6. **the lane** (`lane.md`), only for money, payments and agent events
7. **a mechanic that's fun on its own** (game and creative events: rummage's opening drawers)

pick the best 3. for each, add:

- **the gate:** what a judge must have in hand, and whether we can pass every disqualifier
- **proof:** what a judge can check (a mainnet tx, a real api result, a playable link)
- **the winners-post lines:** the two sentences the sponsor could publish: what someone did, and why that earns this award. underline the claim the demo must prove. (try writing stockup's honestly: "users bought tokenized stocks **with the binance web3 wallet**" — it wasn't true, and that shows before building.)
- **the proof frame:** a sketch of the one screenshot you hope to capture at the payoff

## 2. score each finalist 0–2 (out of 10)

| test | 2 means |
|---|---|
| sponsor | turn off the sponsor call and a promised result disappears |
| both halves | the user's payoff and the sponsor's payoff come from the same action |
| gate | every disqualifier can be passed, and the riskiest call works in hour 1 |
| real | runs on real data / mainnet / production apis inside the window |
| buildable | the one journey passes its checks by the 50% mark |

0 on **sponsor**, **gate** or **real** is out. ties go to the idea built on something the human noticed.

## 3. collision check (10 minutes, top 2 only)

search this event's gallery and past editions (devpost, dorahacks), github and x. on a close match, name the wedge in one line or drop it. list earlier waves' winners; the pick must not clone them. the list goes in `AGENTS.md` → don't clone.

## 4. the cold test, then one critique

1. **cold test (no humans needed):** give a fresh agent with no project context only each finalist's gallery card (name + one line + the proof-frame sketch). ask: "what would you try first, and what do you expect to happen?" a correct guess means the promise lands; a wrong one means rewrite the line.
2. **one critique:** a different model plays the sponsor's judge over the top 3: "would i publish this in our winners post? what would make me forget it?"

send the human, phone-sized: per finalist the singularity line · score · winners-post lines · what the human noticed behind it (or "agent-only") · a recommendation with the trade-off.

**STOP:** the human picks.

## 5. write the plan and the checks

1. `docs/PLAN.md` from `templates/PLAN.md`: the north star (the singularity line, the cut list), the journey table (J1…J5 with "done means: what a judge sees" and the sponsor step marked), the clock with start and deadline.
2. `checks/journey.mjs` from `templates/journey.mjs`: one check per step, run at phone width against the live url. the sponsor step ties the sponsor's real response to a fresh input. add a fail-closed row (`J3!`): with the sponsor blocked, the app must not show success.
3. **prove the checks bite:** run `node scripts/status.mjs` against the landing-page deploy. every step must fail. a check that passes now is worthless; rewrite it.
4. send the human the journey table and the status board. on their yes: `node scripts/status.mjs --approve "idea approved"`, and commit.

## don't

- don't pick an idea because nobody else would think of it. pick it because the sponsor's judge would want it.
- don't build your own platform for people who live somewhere else (mnemo built its own feed; the reported winner was a telegram bot).
- don't plan seeded or fictional data as the main proof.
- don't hang a scored feature on access you don't have yet (strip's ai drafting stayed "blocked").
