# cases: why v3 says what it says

> the evidence behind the laws. read once per new event. dates are 2026. "built" means first to last commit in the repo.

## the win

### roux · runtime agent week, flynet track · **won**

- built sep 16–19. scaffold at 17:01, landing page at 17:13: coding in the first hour, **without the playbook**. no ideation, primitives or judge-story docs.
- idea: friends each tap once; roux picks a fair blackbird restaurant near the middle, with a live perk. **it sends diners to the sponsor's restaurants**: the sponsor's business, in one sentence.
- real flynet data, with live-versus-sample labels driven by what actually loaded; upstash so meetups survive serverless; tested on two real phones.

## the losses, next to what won

| entry | event and window | when built | what we lacked | what won, or what the bar was |
|---|---|---|---|---|
| **strip** | builder.io agent-native · 2 weeks (oct 27 – nov 9) · usefulness and execution 40% | nov 8–10, the final weekend | low stakes (a comic of release notes). the judged ai drafting was "blocked on an approved connected test account" at submission. 17 docs in `docs/` | **eighty** (jennycruzy, 12x winner): 2nd and best use of agent-native. people on medicaid prove 80 hours of work a month from their phone: a telegram voice note or pay stub photo, "do my month", a proof packet. web, telegram and claude via mcp share the same actions. 1st: muscle memory |
| **city-money** | monad metropolis · 6 weeks (sep 1 – oct 13) · judges verify what was built in the window | oct 13–14, the last day | testnet, a fictional neighbourhood and merchant | **kanmani** (1st, cleanverse bounty): 330 commits from sep 16, monad mainnet, 1,009 tests, read all 10,418 agents in monad's registry and found 123 of 198 payment claims point at missing transactions |
| **normandy** | binance agent os mini · 7 days · track a paid 53 places | sep 8 only, while also building sloth, apilot, directorops, calliope and orville | the agentic wallet was never paired; it used binance's public price api. a travel flow that was a fixture | **leash** (track a winner): guardrails over 316 binance mcp tools, claude code hooks, 217 tests. peers in the same track: rove catalogued 81 agent os tools; deltr placed real mainnet orders through the agentic wallet |
| **mnemo** | creative minds jam #1 · 4 weeks | the longest effort, adapted from an earlier x layer project | ran on localhost; agent verdicts cached; 20 comments written for the demo; its own feed rather than where fans already talk | reported winner of the moderation track (unconfirmed): **keeper**, a telegram community steward that remembers members, flags spam for review and sends welcomes and digests on its own |
| **coby** | revenuecat shipaton · aug 1 – sep 30 · must be live on a public store; judges screen out entries without a valid store url | sep 29 – oct 1, the final two days | sideloaded apk, revenuecat test store: **failed the first screen** | 58 winning apps, all live on a store (except the student next gen award) |
| **stockup** | bnb hack: tokenized stocks · sep 16 – oct 11 · co-hosted with binance web3 wallet · tie-break: depth of web3 wallet api use · dx report 25% | oct 10–11, the final two days | used rabby and pancakeswap v2, not the co-host's wallet. our own `docs/JUDGING.md` listed the agentic wallet and agent studio bounties and we built for neither. (good: a real mainnet swap and a dx report) | moi (1st), **4lpha** (2nd + best use of agentic wallet), redeye, tare, **firstshare** (5th + best use of bnb agent studio) |
| **orville** | aws agents for humans · aug 10 – sep 14 · 1,043 submissions | sep 13–15, the last day and after | two days against five weeks of competition | full winners list not found |
| **gann** | moonpay paybox chapter 1 · 36 hours (oct 16–17) · judged on usefulness, completeness, creativity, technical execution | oct 17–18, on time for a sprint | hypothesis: a test course for developers' agents, not a plugin a paybox user would install for their own money (the event's categories: consumer finance, merchant tools, creative, predictions) | winners not found. ditto (jennycruzy), stripr (mrnetwork) and aislerun (tim) were in it too |

## the patterns

1. **sponsor core not doing the job** (v4 law 3, the sponsor does the job): strip, normandy, stockup, mnemo.
2. **fiction as the proof** (v4 laws 2 and 4: real action, measured proof): city-money, mnemo, normandy.
3. **low stakes** (v4 law 2: one action, two payoffs): strip, mnemo, normandy.
4. **claims a judge couldn't check** (v4 law 4 and step 6): none of the 9 repos has an `evidence/` folder, a judges file or one command that re-checks the live claims. stockup had 17 probe and verify scripts in `scripts/` but nothing pointed a judge at them.
5. **a missed disqualifier** (v4 law 1, qualify first): coby.

**correction (nov 17):** v3 first said the main pattern was starting late. the serial winners' own repos say otherwise. they also build in 2–5 days and overlap several events (below). 7 of 8 losses were built in 1–3 days, but so were most wins. time isn't what separates us; what's built in that time is.

## what serial winners do (from their repos, nov 2026)

### how long they build, and how many at once

first to last commit, recent repos:

| who | project | days | commits |
|---|---|---|---|
| mrnetwork | kestrel · incorpr · reqlab · brokro | 2 · 4 · 4 · 5, all inside nov 6–14 | 144 · 184 · 84 · 73 |
| jenny | ditto · tug · adelanto · unhuntable | 1 · 2 · 5 · 9 (adelanto and unhuntable overlap) | 20 · 70 · 78 · 113 |
| tim | reissue · sidecar | 2 · 2 active days, both in early nov | 91 · 61 |
| enoch | cadence · pavilion · backstop | 3 · 4 · 3 | 102 · 39 · 128 |
| us | roux (won) · strip · stockup · coby | 4 · 3 · 2 · 3 | 35 · 36 · 97 · 64 |

short bursts and overlapping events are normal for them. what differs is below.

### 1. an event spec the agent reads every session (mrnetwork)

kestrel's `CLAUDE.md` opens with the event, the deadline in UTC and the one-line pitch, then:

- **the rubric mapped to features**, weight by weight ("execution 30%: 100% real live rpc reads… zero fake mock json")
- **previous winners it must not clone** ("does not clone wave 1 projects: corvo edge, onetoken…")
- **verified constants**: every contract address and rpc "verified live on 2026-11-04 · do not guess"
- **gotchas found by hand** (robinhood chain's firewall returns 403 to default user agents)
- **invariants**: zero mock data, bigint everywhere, simulate before every write
- **how the judges read it**: the event's ai crawler fetches `/` and every internal link, so the landing page is server-rendered with no wallet gate, and there's an `/llms.txt`

then it's built in 2–3 big staged prompts or slash commands (`/kickoff`, `/verify-onchain`, `/audit-fundable`), with the sponsor's live mcp server in `.mcp.json`. truvian's `CLAUDE.md` keeps a "verified facts" list and "open unknowns: do not invent endpoints".

### 2. evidence a judge can re-run (jenny, enoch)

- jenny has an `evidence/` folder in 7 of her 13 recent repos; enoch has one in clarilot, cadence and runva. they hold raw json from real runs: deposits, loans, transactions, evaluations.
- unhuntable's `JUDGES.md`: "every claim, where it lives in the code, the test that checks it, and the command that shows it". one command (`node tools/check-live.mjs`, no install, no account, no money) prints pass/fail for 15 live claims and ends "15 of 15 passed".

### 3. the hard part first, with real money (jenny)

ditto's build log: "before any planning, i put 1 dollar into aave and took it back out. that showed the whole thing could work." a fixed test budget (8 usdc), every test returns the money. showme's log marks each account check observed or unverified before any feature work.

### 4. a plain build log (jenny)

`BUILDLOG.md`, dated, in plain words: the ideas dropped and why, the money rules, every failed test and its fix ("a one-unit shortfall on optimism… we kept the rule and didn't loosen it to make the test pass"). it reads as honest and complete, which is what "completeness" criteria reward.

### 5. sponsor notes and upstream fixes (tim, jenny)

- tim's `SPONSOR_BEHAVIOUR.md` (sidecar): what the sponsor's sdk really did, each item tagged live read, test or fork, with measured p50/p95 latency and gas per transaction. a dx report with numbers.
- jenny's trueup sent pull requests to the tools it found bugs in; the sponsor (neatlogs) merged one and fixed 16 more findings during the event.
- tim's `DECISIONS.md` (rejected products and why) and `REVIEWS.md` (bugs found by adversarial review, each now covered by a test).

### 6. the sponsor's own agent tooling in the repo

jenny's aegis-skills ships okx's official agent skills in `.agents/skills/`; kestrel connects the sponsor's mcp. the agent writes against the sponsor's real docs, not its memory.

### still true from the first pass

- **mainnet and numbers first:** incorpr: "75 mainnet transactions recorded… including 11 that the vault refused."
- **a judge path with no wallet:** animr's "judges, start here: a 2-minute guided tour".
- **a video link in the readme** (enoch about 54%, mrnetwork about 41%, us 17%); mrnetwork keeps a `video/` folder in most repos.
- **submission answers in the repo:** brokro's `SUBMISSION.md` keeps the form answers version-controlled.
- **many prize slots, many losses:** tim's 20 wins over a year include 2nds, 3rds, tracks and categories. the realistic target is about 1 in 5.

## worked examples for v4 (nov 22)

### the singularity: roux

when friends each tap once, they get a fair restaurant near the middle, and flynet gets diners sent to blackbird. the same action pays both sides; that's why a sponsor judge could retell it in one sentence. a cold line for its gallery card: "where's fair for everyone?"

### the readme: rummage (aholo 3d jam, results pending)

the content was strong; the order served a verifier, not a first-time reader.

- **before:** a 420px logo, five links, one wide still of the library, then a bold wall of numbers with a caveat in brackets and "8 of 8 passed". section 2 was "one piece, end to end" with task `8288959` and urdf xml, before "the idea".
- **the fix:** the best readme was already in section 5: the yellow chest, the real motion prompt that made its drawers slide, and a seeded layout where one drawer holds the key. move those to the top.

```markdown
[BANNER: the rummage wordmark over a real frame of the wizard's study]

### The wizard has lost his keys. Open drawers, swing doors and lift lids to find them before time runs out.

▶ Play the Wizard's Study (?level=1&seed=11) · Watch the 2-min film · Judges start here

[HERO: a short loop from that layout: the yellow chest, tap the drawer with the key, hold so you see inside]
*Try the yellow chest in this room. One of its three drawers holds a key.*

Aholo Lux3D made the chest and gave each drawer its sliding motion. Rummage uses that motion when you tap.
All 55 pieces of furniture across the five rooms were made this way. No furniture joint was rigged by hand.

Play by day, search by flashlight at night, or hide a key and send the challenge to a friend.
The furniture is generated ahead of time, so you can play without an account or API key.

Curious how a piece was made? Choose **See how Lux3D built this room** on the title screen.
[SECOND IMAGE: the inspector panel, cropped so its labels read on a phone]
```

what moved down: hinge and slider counts (to proof), task ids and urdf (to "one piece, end to end" under judges start here), the video-staging notes (labelled where they appear in the film, details in the report), the hand-built picture and floorboard (mentioned where room secrets are described).

the repo itself isn't edited until results are out: judges may check commit dates against the window.
