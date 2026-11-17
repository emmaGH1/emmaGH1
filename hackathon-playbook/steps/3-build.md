# step 3: build on the clock

> the marks are in `SKILL.md`. this file is how to hit them.

## hour 1 (what roux did)

- repo with `AGENTS.md`, `docs/BRIEF.md`, `docs/PLAN.md`, `docs/STATE.md`
- scaffold and deploy a live url (vercel). a page with the name on it is enough.
- try the riskiest sponsor call for real: one auth, one transaction, one api response. write the result in `docs/STATE.md`.
- start the **friction log** in `docs/STATE.md`: every confusing doc, broken endpoint or missing feature, with the time. it becomes the dx report in step 6.

## to 25%: the sponsor's core is live

the sponsor's product does the main job, with real data, on the live url. not a fixture, not a mock, not "detected locally" (normandy only detected the agentic wallet cli and never paired it).

**red?** send the human one message: what failed, two options (a different sponsor primitive, or a smaller idea), and a recommendation. decide within the hour.

## to 50%: the one journey works

end to end on the live url, checked by looking at the rendered page at phone width. ugly is fine.

**red?** cut until it's green. nothing new starts while it's red.

## to 75%: better, not bigger

in this order:

1. **more real proof:** more real transactions, a real dataset, real runs (kanmani read all 10,418 agents in monad's registry; incorpr logged 75 mainnet transactions)
2. error and empty states along the journey
3. design pass (step 4)
4. the judge path: a first look with no login and no wallet
5. freeze

## the build loop (every task)

1. read `AGENTS.md`, `docs/PLAN.md`, `docs/STATE.md`
2. restate the task and its acceptance check
3. touch the fewest files
4. typecheck, lint, test, build
5. look at the real ui when visuals matter
6. update `docs/STATE.md` (verified facts only) and commit
7. stop

## parallel lanes

only on events of a week or more, and only after the 25% mark is green. at most 2 lanes:

- **lane a:** the app (product routes, `src/lib`, `src/server`)
- **lane b:** design and demo (marketing routes, `public/brand`, `demo/`)

one branch per lane, folder ownership written in `AGENTS.md`, shared files (`package.json`, schema, tokens) change in one lane at a time, lane a merges first.

## proof

- use mainnet or production when the event allows it and the cost is small. a handful of real transactions beats a perfect simulation.
- keep the proof list in `docs/STATE.md`: links to transactions, api runs, live sessions, test counts. the readme is built from it.
- a labelled fallback is fine for a flaky dependency, never for the core action.

## when stuck

after two materially different failed attempts at one blocker, send claude opus the error, the relevant files and what was tried, not the repo. still stuck: take the smallest honest fallback and record it.
