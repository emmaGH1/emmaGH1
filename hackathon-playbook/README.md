# hackathon playbook v2: what to do

## what changed

same playbook, same rules. it's restructured, not replaced:

- **`SKILL.md`** is the core (~150 lines). it's the only file loaded every session: rules, quality floor, modes, tool roles, a model routing table, usage rules and a phase map. every substantial reply starts with a status line like `phase 5 · build · lane a · next: chatgpt, low`, so you always know which model and effort to switch to.
- **`phases/`** holds your original detailed text, split by phase. the agent opens a phase file only when it reaches that phase, so you stop paying usage for 1,000 lines on every session.
- **`phases/06-demo.md`** is new: a full demo pipeline that runs on the vps: a product film made in remotion from your real components, plus a live playwright capture as proof. it works in approval gates (paper edit → look stills → rough cut → polish → render) so you never pay for a full rebuild.
- tool roles are updated for t3 code + pi, chatgpt x2, claude and antigravity. devin, bankr, recordly and termux are gone.

```
hackathon-playbook/
  SKILL.md                         ← core, always loaded
  README.md                        ← this file (for you, not the agent)
  phases/
    01-intake-and-judging.md
    02-ideation-and-scope.md
    03-harness.md
    04-design.md                   ← anti-slop + design discovery
    05-build.md
    06-demo.md                     ← new pipeline
    07-submit.md
```

## step 1: swap it in on the vps

1. **remove the old one** from wherever pi currently loads it (its skills folder, or a line in a global `AGENTS.md` pointing at `HACKATHON_PLAYBOOK.md`). the agent must not load both.
2. **copy this whole `hackathon-playbook/` folder** into pi's skills directory, usually `~/.pi/agent/skills/hackathon-playbook/`. if that path doesn't exist on your install, ask pi "where do you load skills from?" and put it there.
3. **start a fresh pi session** and invoke it the same way you did before: `/hackathon-playbook` (the skill keeps the same name), then `hackathon sprint`. it should reply with the 6-part intake and say which phase it's in. if it starts coding, the old playbook is still loaded somewhere.

## step 2: update github

in `emmaGH1/emmaGH1`, delete `HACKATHON_PLAYBOOK.md` and commit this `hackathon-playbook/` folder in its place. git history keeps the old version if you ever want it.

## step 3: tonight's test run (about 1 to 1.5 hours)

goal: a 20-second video of a real app you've built, with a title, one zoom and an end card. if this works, the pipeline works.

1. **setup** (once): run "step 0: vps setup" from `phases/06-demo.md`. if `free -h` shows under 4gb, add swap first.
2. **pick an app** that's already running (any deployed project works).
3. **add 3 `data-demo` attributes**: the entry button, the main action and the result.
4. **capture**: copy the `run-demo.ts` template from `06-demo.md` into `demo/`, swap in your 3 selectors and url, then run `npx tsx demo/run-demo.ts`. check that `demo/out/` has `capture.webm`, `timeline.json` and screenshots.
5. **compose**: in `demo/`, create the remotion project (`npx create-video@latest video`), then ask claude on **sonnet**:
   > using the remotion skills, build a 20s 1080p video: 3s title card with the app name, the capture from the `core-action` mark to the `result` mark inside a browser frame, a slow zoom into `shots/result.png` with a 3-word callout, then a 3s end card with the url. match the app's fonts and colors.
6. **render**: `npx remotion render <composition-id> out/test.mp4`, download it to your phone and watch it.

if a step breaks, fix it tonight. that's the point of testing before the hackathon, not during.

## who does what in the demo

| task | model |
|---|---|
| `run-demo.ts` and `reset-demo.ts` | chatgpt |
| judge story, narration script | claude (opus) |
| paper edit + look stills | claude (opus) |
| remotion build + revision rounds | claude (sonnet) |
| fixing render errors, ffmpeg tweaks | chatgpt |
| final review: watch it as a judge | you (+ claude for one critique pass) |

## how to invoke

same as before: `/hackathon-playbook`, then a mode or shorthand:


- `hackathon collaborative` / `hackathon sprint` / `hackathon sleep mode`
- `ideate only`
- `demo pass`: jump straight to the demo phase
- `judge audit`: final review before submitting

## parallel lanes

on multi-day hackathons, the build runs in up to 3 lanes (core app, design, demo), each in its own t3 code thread and git branch. the agent proposes the lanes, folder ownership and branches when the build phase starts, and waits for your yes. start each lane's thread with:

> /hackathon-playbook lane a: read AGENTS.md and the lane a section of docs/CURRENT_STATE.md, then continue.

with under ~24 hours left, run one lane plus a short design pass.
