# step 3: build on the clock

> the marks are in `SKILL.md`. this file is how to hit them, and how progress stays honest.

## hour 1

- repo with `AGENTS.md` (`templates/AGENTS.md`), `docs/BRIEF.md`, `docs/PLAN.md`, `docs/STATE.md`
- copy into the project: `templates/status.mjs` → `scripts/status.mjs`, `templates/journey.mjs` → `checks/journey.mjs`, `templates/check-live.mjs` → `scripts/check-live.mjs`, `templates/pi/stay-on-course.ts` → `.pi/extensions/`. trust the project in pi.
- in the lane: copy `templates/core/` to `src/core/`; the sponsor's sdk goes in an adapter next to it
- **install the sponsor's own agent tooling**: their official skills (`.agents/skills/`), mcp server (`.mcp.json`), `llms.txt` or docs. verify every address, endpoint and sdk version live and write it in `AGENTS.md` with the date: "verified · do not guess".
- scaffold and deploy a live url. a page with the name on it is enough.
- **the gate and the hard part, for real:** the hardest qualifying step from triage, and the riskiest sponsor call live: one auth, one transaction, one api response. check access, speed, output quality and that the activity is credited to this entry (right network, inside the window, under our project or address). with money, set a test budget and make every test return it (jenny: $8 budget, $1 in and out of aave). save the raw output in `evidence/`.
- start the **friction log** in `docs/STATE.md`.

## honest progress

the agent never says how far along the build is. `node scripts/status.mjs` does:

```
Clock 48% elapsed · 25% sponsor milestone RED
J1 Start the game ✗ No playable game opens from the homepage
J2 Get real Lux3D joints [sponsor] — unreached
J3 Open the drawer with those joints — unreached
Failed at J1 · checked 14:06 WAT · deploy a31f92
✓ checks match what you approved (21/11/2026, 09:12 WAT · approvals: 1)
Next: make J1 pass — a playable room opens from the homepage at phone width
```

how it stays honest:

1. **the journey is the contract.** every step in `docs/PLAN.md` appears on the board. a step with no check is a failure, never a pass. no steps, or no checks file, is a failure.
2. **checks are written at idea time and must bite:** they fail against the landing-page deploy, and the fail-closed row fails when the sponsor is faked. a check that passes on day one is rewritten before approval.
3. **checks run the way a judge arrives:** the public url, logged out, phone width, a fresh input. the sponsor step ties the sponsor's real response to that input. a homepage ping or a separate api call proves nothing about the app.
4. **approved = fingerprinted.** `--approve` records a fingerprint of `docs/PLAN.md` and `checks/`. if either changes afterwards, the board shows **⚠ CHANGED since you approved them**, with what changed. it's tamper-evident, not tamper-proof: the approval count is on every board, so an extra approval the human didn't give is visible.
5. **the board comes from the run.** pi shows it under every reply that changed files (the extension) and on `/status`. any other agent pastes the script's output verbatim. a claim in chat ("it works locally") never moves a step.
6. **every run is kept** in `evidence/status/` with the time and deploy. a new deploy starts unverified; a failed rerun turns the step red at once and keeps the earlier pass for diagnosis.
7. **`status` never spends money.** a paid, destructive or manual-only step shows the last witnessed result (from `evidence/`) and what still needs verifying.

## the order of work

- **until the journey passes, work on the first step that isn't passing.** landing page, polish, design and the film wait, unless that step needs them (a start button is part of J1).
- **25%:** the sponsor step passes in the deployed app. red? send the human one message: what failed, two options (a different sponsor primitive, or a smaller honest promise) and a recommendation. decide within the hour.
- **50%:** the whole journey passes on a phone. red? cut until it's green; nothing new starts.
- **50–75%, better not bigger:** the readme example and hero capture (step 6), the film from the first good run (step 5), the second most important proof, error and empty states, a design pass (step 4), then freeze.

## the build loop (every task)

1. read `AGENTS.md`, `docs/PLAN.md`, `docs/STATE.md`, and the last board
2. name the journey step the task moves (none → "later" in `docs/STATE.md`)
3. touch the fewest files
4. typecheck, lint, test, build; look at the real ui at phone width when visuals matter
5. deploy, then `node scripts/status.mjs`
6. update `docs/STATE.md` (next action, friction, limits) and commit
7. stop. one task per session; a fresh session reads the files, not a long history.

## when stuck or drifting

- **two materially different failed attempts at one blocker:** stop. report the blocker, two honest options and a recommendation. the human approves any change to the journey.
- **never** mock, stub, cache or swap the sponsor's product to make a check pass, and never edit a check to make it pass. a labelled fallback is fine for a flaky optional dependency, never for the core action.
- found a real bug in the sponsor's sdk or docs? draft an issue or small upstream pull request for the human to send (jenny's trueup: the sponsor merged one during the event).

## proof

- mainnet or production when the event allows it and the cost is small.
- **one direct proof per scored claim:** raw output in `evidence/` and a row in `JUDGES.md`; claims a judge can re-run without an account go in `scripts/check-live.mjs`.
- count only what the evidence supports. label cached or sample results. keep your own test runs separate from real use.

## quality floor

- reduce scope, not quality. "build passed" is never proof a ui works.
- next.js apps: typescript + tailwind + real shadcn/ui components; verify imports.
- parallel lanes only on events of a week or more, only after 25% is green, at most 2, with folder ownership in `AGENTS.md`.
