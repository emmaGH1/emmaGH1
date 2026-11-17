# step 1: triage (fit and plan)

> output: `docs/BRIEF.md` (from `templates/BRIEF.md`) and a phone-sized verdict. no ideas yet.

**time is never a reason to recommend skipping.** triage reports the time left and fits the plan to it. the agent gives a time-based opinion on skipping only when the human asks for one ("should i skip?").

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

## 4. the fit score

how well the event suits you. time and how many events you're in are not part of it.

| question | points |
|---|---|
| paid prize slots | 5+ → 2 · 2–4 → 1 · 1 → 0 |
| the sponsor's core product is reachable in hour 1 (keys, sdk, faucet, access approval) | 2 · partly → 1 · no → 0 |
| you have an edge: the lane (`lane.md`) and its core fit, a seed fits, or domain knowledge (geology and mining, nigerian markets and cash habits, crypto communities, webtoon creators, pidgin) | 1 |
| the judging rewards a working product over a pitch (demo, completeness, sponsor use weigh more than slides) | 1 |

**4–6 strong fit · 2–3 workable · 0–1 weak.**

**hard stops** (only these): a disqualifier you can't meet at all, such as no store account, no mainnet funds, no api access or ineligible region. say so plainly; the human still decides.

## 5. time left and clashes

report the time; don't judge it. the clock marks are percentages, so they shrink with the window. what changes is the size of the plan:

| time left | the plan |
|---|---|
| more than 2 weeks | the full plan; work daily from week one, so the last week is polish |
| 3 days to 2 weeks | one journey, no lanes, demo rung 2 |
| under 3 days | late-start mode: the sponsor's core call in hour 1, one journey, no landing page beyond a header, demo rung 1–2, freeze at 75% no matter what |

**clashes:**

- **keep a calendar** in `results.md` → "upcoming": every event you're in or considering, with its window and deadline in WAT.
- **long events get the early weeks**, so their last week is polish and a sprint can sit beside them.
- **two deadlines within 3 days of each other:** the higher fit score gets the full clock; the other gets the late-start plan. report which gets what; the human can swap them.
- short builds are normal: serial winners also build in 2–5 days and overlap events (`cases.md`). with little time, spend it on the hard part, live, and on evidence, not on breadth.

## 6. the verdict (one screen)

- fit score and the single biggest risk
- deadline in WAT, time left, and which plan size from §5 applies
- clashes with anything in the upcoming calendar
- the disqualifier list, and any hard stop
- what the sponsor wants, in one sentence
- the bar to beat
- next: step 2

**STOP:** the human says enter or skip.
