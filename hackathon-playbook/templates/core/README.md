# core: the reusable parts for the lane

copy `core/` into a new project in hour 1 (as `src/core/`). each event adds a sponsor adapter and a new person on top; these parts already work.

| file | does | why judges care |
|---|---|---|
| `guard.ts` | checks a money move against limits, recipients and the sponsor's real dry run before signing | refusals are visible safety: "11 that the vault refused" |
| `evidence.ts` | append-only, hash-chained log of real moves, refusals, txs and api runs in `evidence/log.jsonl` | every claim has raw output; editing history breaks `verify()` |
| `telegram.ts` | sends messages and plain receipts | reaches people where they already are |
| `../check-live.mjs` | re-checks live claims | "n of n passed" |

the pattern for every money action:

```ts
const verdict = await check(move, policy, { spentToday, simulate: sponsorDryRun });
record(verdict.ok ? "move" : "refusal", { move, verdict });
if (verdict.ok) { const tx = await sponsorSend(move); record("tx", tx); }
await send(chatId, receipt(move, verdict, verdict.ok ? explorerUrl : undefined));
```

add to `scripts/check-live.mjs`: a check that `verify()` passes on `evidence/log.jsonl`, plus one check per tx it cites.

rules: no dependencies in `core/` (node 20+, typescript). the sponsor's sdk lives in the adapter, never in core. when an event improves a core file, copy it back here and note it in `lane.md`.
