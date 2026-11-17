# AGENTS.md: <name>

> the event spec. every agent session reads this first. keep it true; date every verified fact.

- **event:** <event, track> · **deadline:** <date time UTC> = <WAT>
- **pitch:** <one plain line: who it's for and what it does for them>
- **sponsor wants:** <one sentence from docs/BRIEF.md>

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
- every new claim gets raw output in `evidence/`, a row in `JUDGES.md` and a line in `scripts/check-live.mjs`.
- the landing page renders its content on the server, with no wallet or login gate.

## commands

```bash
node scripts/check-live.mjs   # live claims, pass/fail
npm run typecheck && npm run build
```

## folders and lanes

<who owns what; shared files change in one lane at a time>

## visual direction (locked in step 4)

<fonts, colours, the one look>
