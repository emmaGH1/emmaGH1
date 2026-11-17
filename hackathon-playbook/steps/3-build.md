# step 3: build on the clock

> the marks are in `SKILL.md`. this file is how to hit them.

## hour 1 (roux, plus what serial winners do)

- repo with `AGENTS.md` (the event spec, from `templates/AGENTS.md`, north star filled in from the picked idea), `docs/BRIEF.md`, `docs/PLAN.md`, `docs/STATE.md`
- copy `templates/pi/stay-on-course.ts` to `.pi/extensions/` and trust the project in pi
- **install the sponsor's own agent tooling**: their official skills (`.agents/skills/`), mcp server (`.mcp.json`), `llms.txt` or docs. verify every address, endpoint and sdk version live and write it in `AGENTS.md` with the date: "verified · do not guess".
- scaffold and deploy a live url (vercel). a page with the name on it is enough.
- **the hard part, for real:** the riskiest sponsor call, live: one auth, one transaction, one api response. with money, set a test budget and make every test return it (jenny: $8 budget, $1 in and out of aave). save the raw output in `evidence/`.
- create `scripts/check-live.mjs` (`templates/check-live.mjs`) with that first claim in it. every later claim gets a line.
- start the **friction log** in `docs/STATE.md`: every confusing doc, broken endpoint or surprising sdk behaviour, with the time and how you saw it (live read, test, fork). it becomes `SPONSOR_NOTES.md` in step 6.
- write the build as 2–4 staged prompts at the end of `docs/PLAN.md` (backend, frontend, checks), so each agent run is long and self-checking (mrnetwork's `/kickoff`, `/verify-onchain`).

## to 25%: the sponsor's core is live

the sponsor's product does the main job, with real data, on the live url. not a fixture, not a mock, not "detected locally" (normandy only detected the agentic wallet cli and never paired it).

**red?** send the human one message: what failed, two options (a different sponsor primitive, or a smaller idea), and a recommendation. decide within the hour.

## to 50%: the one journey works

end to end on the live url, checked by looking at the rendered page at phone width. ugly is fine.

**red?** cut until it's green. nothing new starts while it's red.

## to 75%: better, not bigger

in this order:

1. **more real proof:** more real transactions, a real dataset, real runs (kanmani read all 10,418 agents in monad's registry; incorpr logged 75 mainnet transactions). each one goes in `evidence/`, `JUDGES.md` and `check-live`.
2. **more of the sponsor:** a second or third sponsor primitive, used for real, where the rubric or tie-break rewards depth
3. error and empty states along the journey
4. design pass (step 4)
5. the judge path: a first look with no login and no wallet
6. freeze

## the build loop (every task)

1. read `AGENTS.md`, `docs/PLAN.md`, `docs/STATE.md`
2. restate the task, its acceptance check, and the journey step or `JUDGES.md` claim it moves forward (none → "later" in `docs/STATE.md`)
3. touch the fewest files
4. typecheck, lint, test, build
5. look at the real ui when visuals matter
6. `node scripts/check-live.mjs` still passes
7. update `docs/STATE.md` (verified facts only) and commit
8. stop

## parallel lanes

only on events of a week or more, and only after the 25% mark is green. at most 2 lanes:

- **lane a:** the app (product routes, `src/lib`, `src/server`)
- **lane b:** design and demo (marketing routes, `public/brand`, `demo/`)

one branch per lane, folder ownership written in `AGENTS.md`, shared files (`package.json`, schema, tokens) change in one lane at a time, lane a merges first.

## proof

- use mainnet or production when the event allows it and the cost is small. a handful of real transactions beats a perfect simulation.
- every claim lives in three places: raw output in `evidence/` (dated json, tx hashes, screenshots), a row in `JUDGES.md` (claim → code → test → command), and a line in `check-live`. the readme is built from `JUDGES.md`.
- a labelled fallback is fine for a flaky dependency, never for the core action.
- found a real bug in the sponsor's sdk or docs? draft an issue or a small upstream pull request for the human to send. a fix the sponsor merges during the event is the strongest sponsor signal there is (jenny's trueup).

## when stuck

after two materially different failed attempts at one blocker, send claude opus the error, the relevant files and what was tried, not the repo. still stuck: take the smallest honest fallback and record it.
