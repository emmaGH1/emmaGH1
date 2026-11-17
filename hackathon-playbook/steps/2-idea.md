# step 2: idea (60–90 minutes; 30 in a sprint)

> output: `docs/PLAN.md` (from `templates/PLAN.md`). the human picks one idea.

v2 drew random cards and put novelty ahead of the rubric. that produced a release-notes comic, a motion-manga and spoiler blurring. the ideas that won (roux, eighty, kanmani, leash) were ones a sponsor's judge wanted straight away. here an idea is judged on fit, stakes and proof first; freshness only breaks ties.

## 0. what the human has seen (5 minutes)

an agent can't see real people; you can. so ideas start from what you've noticed, when it fits. it often won't, and that's fine.

1. read `problems.md` and `lane.md`. pick the notes that **fit this event** (its theme, its sponsor's product, its judges). a money note doesn't fit a 3d game jam; don't force it.
2. **some fit:** at least 2 of the 5 ideas build on them.
3. **none fit:** ask the human 3 quick questions written **for this event's theme**, answered by voice note or one line each. examples:
   - payments or wallets: "who around you lost money or time on a payment this month?"
   - a 3d or game jam: "what game or toy did you or your friends love, and what would you make if 3d models were free?"
   - dev tools: "what wasted your time in your last build?"
   - health, civic, education: "who do you know that struggles with this, and how?"
   save useful answers to `problems.md`, then ideate.
4. no answers, or nothing real comes up: go straight to the sponsor angles below. an idea with no real person behind it is marked **agent-only**; it can still win on the sponsor and fun tests, but say so.

## 1. five ideas, one from each angle

1. **the sponsor's business:** more users, transactions, merchants, plugins or listings for them (roux sent friend groups to the sponsor's restaurants)
2. **a high-stakes person** the sponsor tech helps (eighty: people on medicaid proving 80 hours of work a month)
3. **the sponsor's newest or least-used feature** doing a real job
4. **what the sponsor's own developers need:** guardrails, testing, migration, observability (leash: guardrails over 316 binance mcp tools)
5. **a world the human knows firsthand:** nigerian traders and cash habits, crypto communities, geology and mining, webtoon creators
6. **the lane** (`lane.md`), only if the event is about money, payments or agents: the sponsor's product doing the money step, with the core doing guard, evidence and receipts

angles overlap; that's fine. the human's notes can feed any angle. on events where people or stakes don't apply (a game jam, an art or 3d challenge), read "stakes" as "someone would really play, share or use it".

each idea, five lines at most:

- **who:** one real kind of person, and what they lose without this
- **action:** the one thing they do, and where (telegram, whatsapp, the sponsor's app, the web)
- **sponsor:** which sponsor product does the main job
- **proof:** what a judge can check (a mainnet tx, a real api result, a real dataset)
- **moment:** the demo moment in one sentence

## 2. score each test 0–2 (out of 12)

| test | 2 means |
|---|---|
| sponsor | delete the sponsor tech and the product dies |
| stakes | someone loses money, health, time or standing without it |
| next week | that person would use it next week, where they already are |
| real | runs on real data / mainnet / production apis inside the window |
| plain | a non-technical friend gets it from one sentence |
| buildable | the one journey works by the 50% mark |

anything scoring 0 on **sponsor** or **real** is out. ties go to the idea built on something the human noticed.

## 3. collision check (10 minutes, top 2 only)

search this event's gallery and past editions (devpost, dorahacks), github and x. on a close match, name the wedge in one line or drop it. check the name isn't taken in the same space. a collision means sharpen the idea, not kill it on reflex. if the event had earlier waves or editions, list their winners: the picked idea must not clone them (kestrel's spec named four wave-1 projects it wouldn't copy). the list goes in `AGENTS.md` → don't clone; dropped ideas go in `docs/PLAN.md`.

## 4. one critique, then the human picks

claude opus critiques the top 3 once, as the sponsor's judge: "would i put this in our winners post? what would make me forget it?"

send the human, phone-sized:

- per finalist: the idea · score · demo moment · what the human noticed behind it (or "agent-only")
- a recommendation, with the trade-off

**STOP:** the human picks.

## 5. write `docs/PLAN.md`

- one sentence: *for [person] who [loses what], [name] lets them [action] in [place], using [sponsor product] for [the main job].*
- the one journey, in 5–7 steps
- must-have (only what the journey needs) and the cut list
- the clock dates for 10 / 25 / 50 / 75 / 90%
- the riskiest assumption and how hour 1 tests it

## don't

- out of ideas? answer the 3 questions; it's faster than reviewing ideas made from nothing.
- don't pick an idea because nobody else would think of it. pick it because the sponsor's judge would want it.
- don't build your own platform for people who live somewhere else (mnemo built its own feed; the reported winner was a telegram bot).
- don't plan seeded or fictional data as the main proof.
- don't hang a feature the judges score on an account or access you don't have yet (strip's ai drafting stayed "blocked" through submission).
