<!-- judge-facing readme = the product page. steps/6-submit.md has the rules and the cold-read check. delete these comments. -->
<!-- open on the question this entry answers first: game → what do i get to do · app → what happens for me · research → what did they find · dev tool → how do i use it -->

<p align="center"><img src="docs/img/banner.png" alt="<name>: <one line>" width="100%"></p>
<!-- banner: the wordmark over a real frame of the product, about 1600×400. not a big standalone logo. -->

<h3 align="center"><the promise in plain words: what the reader gets to do></h3>

<p align="center">
  <a href="<link to a specific, repeatable example, e.g. ?level=1&seed=11>"><b>▶ Try <the example></b></a> ·
  <a href="<youtube url>">Watch the 2-min film</a> ·
  <a href="#judges-start-here">Judges start here</a>
</p>

<p align="center">
  <img src="docs/img/hero.gif" alt="<what happens in the loop, in words>" width="820">
  <br><em><what to try: "try the yellow chest in this room. one of its three drawers holds a key."></em>
</p>
<!-- hero: a short loop of the payoff from the REAL app, under ~2 MB, useful first frame. illegible at that size? two close stills instead. -->

<what the sponsor made possible, in one or two plain sentences. keep a line that rules out work anyone understands: "no furniture joint was rigged by hand.">

<the one deliberate decision that shows you know what you're doing, with its benefit to the user: "the furniture is generated ahead of time, so you can play without an account or api key.">

<the variety in one sentence: modes, levels, sharing.>

<!-- optional second image, only if it answers a different question (e.g. the in-game inspector showing the sponsor's real output) -->

<p align="center">
  <a href="<youtube url>"><img src="docs/img/film-thumb.png" alt="Watch the 2-minute film" width="560"></a>
</p>

## Judges start here

About 90 seconds, no login, works on a phone:

1. Open **[<the example link>](<url>)** → <what you'll see>
2. <the core action> → <the result>
3. <where to see what the sponsor supplied> → <what it proves>

Every claim with its code, test and command: [JUDGES.md](JUDGES.md). Re-check the live claims yourself: `node scripts/check-live.mjs` (Node 20+, nothing to install).

## How it works

<the one journey in 4–6 plain steps; the sponsor product named exactly as its docs name it, at the step where it does the job>

## Built on <sponsor>

| <sponsor> product | what it does here |
|---|---|
| | |

what we added on top: <one or two lines, honest>. what the api really did, with timings: [SPONSOR_NOTES.md](SPONSOR_NOTES.md) <!-- only if it exists -->

## Proof

| claim | evidence |
|---|---|
| <plain sentence> | <live link / run output / tx> |

<details>
<summary><b>Run it yourself</b></summary>

```bash
npm install
npm run dev
```

repo map:

| path | what |
|---|---|
| | |

</details>

## Scope

<short: requirements, tested environments, what's precomputed and why. specifics in JUDGES.md or the report. disclosures that change how a reader sees a claim go next to that claim, above.>

Built for **<event>** · <track and awards> · AI coding assistants used: <…> · license <mit>
