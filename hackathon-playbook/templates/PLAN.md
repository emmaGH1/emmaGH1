# plan: <name>

> the human's. agents never edit this file: they propose one exact change (old line, new line, why), the human says yes, then `node scripts/status.mjs --approve "<why>"`.

## north star

- **singularity:** when <person> <does one action>, they get <result>, and <sponsor> gets <what it wants>.
- **the sponsor's job:** <which sponsor product does which step, live>
- **main prize:** <award> · **extras:** <bounties that fit the same build>
- **not building:** <the cut list, one line>

## the journey

each row has a check in `checks/journey.mjs`. `scripts/status.mjs` reads this table; keep the columns.

| id | step | done means (what a judge sees, on a phone, logged out) | sponsor |
|---|---|---|---|
| J1 | <open it from the public link> | <the real app opens, not the landing page> | |
| J2 | <the sponsor step> | <the sponsor's real answer for this run is in the app> | sponsor |
| J3 | <the payoff> | <the result the user came for is visible> | |
| J3! | <fail-closed> | <with the sponsor blocked, no success is shown> | |

## winners-post lines

<two sentences the sponsor could publish: what someone did, and why it earns this award. underline the claim the demo must prove.>

## proof frame

<the one screenshot you hope to capture at the payoff>

- the viewer's question: <"which drawer would you open?">
- answers they might give: <…>
- the shot that settles it, with no voice or captions: <…>

## clock

`status` reads `start` and `deadline` (ISO with offset, e.g. 2026-11-17T09:00+01:00).

| mark | date and time | must be true |
|---|---|---|
| start | | hardest gate and riskiest sponsor call tried |
| deadline | | |
| 10% | | idea picked, journey + checks approved |
| 25% | | the sponsor step passes in the deployed app |
| 50% | | the whole journey passes on a phone |
| 75% | | freeze: readme, film, judges file |
| 90% | | submitted |

## riskiest assumption

<what> · hour-1 test: <the smallest real call that proves or kills it> · result: <what happened>

## ideas dropped (and why)

-
