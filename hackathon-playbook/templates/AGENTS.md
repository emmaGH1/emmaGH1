# AGENTS.md: <name>

> the event spec. every agent session reads this first. keep it true; date every verified fact.

- **event:** <event, track> · **deadline:** <date time UTC> = <WAT>
- **singularity:** <copied from docs/PLAN.md when approved>
- **sponsor wants:** <one sentence from docs/BRIEF.md>

## north star and journey

live in `docs/PLAN.md` (the human's). the stay-on-course extension puts them, with the last progress board, into every prompt. don't copy them here.

## the rubric, mapped to what proves it

| criterion | weight | what we build or show for it |
|---|---:|---|
| | | |

tie-breaks and special awards we're going for:

## don't clone

previous winners and close entries (from the collision check): <name: what it did>. our wedge: <one line>.

## verified constants (do not guess)

checked live on <date>. if one fails, stop and re-verify; never invent a replacement.

| thing | value | how verified |
|---|---|---|
| <rpc / endpoint / contract / sdk version> | | <live read / docs link> |

sponsor tooling installed: <.agents/skills/... · .mcp.json · llms.txt>

## gotchas found so far

- <e.g. the rpc returns 403 to default user agents; send a named one>

## invariants

- no mock or seeded data in the core path. a labelled fallback only for a flaky optional dependency.
- simulate before every write; never touch a private key.
- progress is `node scripts/status.mjs`. never state a percentage; paste the board.
- every scored claim gets raw output in `evidence/` and a row in `JUDGES.md`; re-runnable ones a line in `scripts/check-live.mjs`.
- the judge's path (the public link, logged out, phone width) works with no wallet or login gate.

## commands

```bash
node scripts/status.mjs       # the progress board (journey checks on the live url)
node scripts/check-live.mjs   # the judges' live claims, pass/fail
npm run typecheck && npm run build
```

## folders and lanes

<who owns what; shared files change in one lane at a time>

## visual direction (locked in step 4)

<fonts, colours, the one look>
