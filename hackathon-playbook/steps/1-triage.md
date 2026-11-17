# step 1: triage (enter or skip)

> output: `docs/BRIEF.md` (from `templates/BRIEF.md`) and a phone-sized verdict. no ideas yet.

read the official sources: the event page, the rules/terms, faq, judging, prizes, sponsor docs, and last edition's winners if there was one. gemini does the reading.

## 1. the facts

- **window:** build start → deadline, converted to lagos time (WAT). note any "ends today at 8pm ET" style traps.
- **disqualifiers:** every hard requirement becomes a checkbox. the usual ones:
  - live in a public store by the deadline (shipaton screens on a valid store url before anything else)
  - a specific chain or mainnet
  - the sponsor sdk must do "a real job" (builder.io)
  - work must be built inside the window; judges check commit history (monad metropolis)
  - video length, host, and whether only the first n minutes get watched
  - public repo, team listed, eligibility, region
  - a required developer-experience or feedback report
- **judging:** criteria with weights, tie-breaks, special awards. copy them word for word.
- **prize slots:** count every paid place: ranked places, honorable mentions, track prizes, bounties. (binance agent os track a paid 53 places; shipaton named 58 winning apps; a single bounty pays one.)
- **judges:** sponsor devrel, engineers, vcs, a panel of 15, a community vote?

## 2. what the sponsor wants more of

write one sentence. find it in the co-host, the special awards, the tie-break, the newest feature in the changelog, the launch blog post and the example apps.

- "binance web3 wallet wants apps built on its wallet api" (stockup missed this)
- "builder.io wants to show agent-native's shared actions across the ui, chat and mcp" (eighty hit this and took 2nd plus best use)
- "flynet wants diners sent to blackbird restaurants" (roux hit this and won)

## 3. the bar

if enoch, tim, mrnetwork or jenny (or anyone with a long winning record) usually enter this kind of event, expect: mainnet or production use, a 2-minute video, a "judges start here" path with no wallet, real numbers in the first paragraph, and a deep sponsor integration. the plan must beat that, not match it.

## 4. the score

| question | points |
|---|---|
| days you will really build vs the window: at least half of it, and at least 5 days for anything over a week | 2 · else 0 |
| paid prize slots | 5+ → 2 · 2–4 → 1 · 1 → 0 |
| the sponsor's core product is reachable in hour 1 (keys, sdk, faucet, access approval) | 2 · partly → 1 · no → 0 |
| you have an edge: domain (geology and mining, nigerian markets and cash habits, crypto communities, webtoon creators, pidgin) or reusable code | 1 |
| events you're already in | none → 2 · one → 1 |

**hard skips** (any one): you can't meet a disqualifier (no store account, no mainnet funds, no api access), you're already in 2 events, or you can't start until the final 25% of a multi-week window.

**enter at 6 or more.**

## 5. the verdict (one screen)

- **enter / skip**, score, and the single biggest risk
- deadline in WAT and the days you'll actually build
- the disqualifier list
- what the sponsor wants, in one sentence
- the bar to beat
- next: step 2

on a skip, say what would change it (e.g. "enter only if you drop event x").

**STOP:** the human says enter or skip.
