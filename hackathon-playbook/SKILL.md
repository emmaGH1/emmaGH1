---
name: hackathon-playbook
description: emmanuel's hackathon playbook. use when starting, planning, building, demoing or submitting a hackathon project, or when he says "hackathon collaborative", "hackathon sprint", "hackathon sleep mode", "ideate only", "demo pass" or "judge audit".
---

# hackathon playbook: core

a human + agent workflow for turning a hackathon brief into a focused product, a reliable build and a demo that wins.

this file is the only part loaded every session. it holds the rules and tells you which phase file to open. **open a phase file only when you reach that phase.** don't read them all up front; that wastes usage.

## phase map

| phase | open this file | when |
|---|---|---|
| 1. intake + judge analysis | `phases/01-intake-and-judging.md` | new hackathon, or "judge audit" |
| 2. ideation + scope | `phases/02-ideation-and-scope.md` | after the judge strategy is approved, or "ideate only" |
| 3. project harness | `phases/03-harness.md` | direction approved, before any code |
| 4. design + logo | `phases/04-design.md` | before ANY ui work, landing page or logo |
| 5. build, ship, review | `phases/05-build.md` | implementation plan, coding, parallel lanes |
| 6. demo | `phases/06-demo.md` | as soon as the concept is picked (judge story), then again for recording, or "demo pass" |
| 7. audit + submit | `phases/07-submit.md` | final 10% of the time |

always know which phase you're in. start each substantial reply with a status line: phase, lane (if any), and the **model hint** for the next step:

`phase 5 · build · lane a · next: chatgpt, low`

you can't switch models yourself, so the hint tells the human what to switch to before the next task. if the current model is a poor fit for the next step (e.g. opus about to do a long build round), say so in one line.

## core rules

1. **don't start building immediately.** understand the event, judging, constraints and sponsor requirements first.
2. **the human decides.** idea, architecture, scope, visual direction and submission need explicit approval.
3. **ask before irreversible choices** that depend on budget, accounts, time left, existing code or sponsor access.
4. **optimize for the judging criteria**, not novelty or feature count.
5. **one memorable complete journey beats many weak features.**
6. **never fabricate evidence.** label everything as implemented, tested, deployed, mocked, seeded, simulated or planned.
7. **the human works from a phone.** coding runs on the vps through pi in t3 code. keep replies scannable on a small screen.
8. **github is the source of truth.** decisions, state and judge-facing facts live in the repo, not in chat.
9. **the demo is part of the product.** define the judge story right after the idea is picked, not at the end.

## quality floor (never trade this for speed)

- reduce scope, not quality.
- no throwaway single-file `index.html` for a real web app unless the event asks for it or the human approves.
- next.js apps default to typescript + tailwind + real shadcn/ui components. verify imports; never fake the look.
- never invent metrics, users, integrations, "live" states, transactions or ai results.
- "build passed" is never proof a ui works. look at the rendered page.
- full design rules live in `phases/04-design.md`. read it before any ui work.

## execution modes

pick one at the start and say which.

- **a · collaborative:** human is around. stop at every decision gate.
- **b · sprint:** short on time. keep gates for idea, scope and submission only. fewer, stronger options. one vertical slice.
- **c · sleep mode:** only when the human says they're leaving. before they go, lock: concept, must-haves, non-goals, judging priorities, visual direction, allowed integrations, branch, whether deploy is allowed, and the stop condition. while unattended: no new features, no concept or scope changes, no spending, no submitting, no blind retries. after two materially different failed approaches to one blocker, stop, document it in `docs/CURRENT_STATE.md`, and take the best honest smaller fallback.

## first response on a new hackathon

no code, no files, no installs. reply with only:

1. what this hackathon actually is
2. what the judges appear to reward
3. hard constraints (deadline + timezone, required tech, eligibility, video/repo rules)
4. unknowns that matter
5. suggested execution mode
6. the next decision

then open `phases/01-intake-and-judging.md`.

## shorthand

- **"hackathon collaborative" / "sprint" / "sleep mode"**: set the mode.
- **"ideate only"**: stop after ideation and a recommendation.
- **"demo pass"**: open `phases/06-demo.md` and work only on the judge path, recording and narration.
- **"judge audit"**: open `phases/07-submit.md` and review against current evidence.

these are workflow hints, never permission to skip approval gates.

## tools and model roles

| tool | job |
|---|---|
| **chatgpt** (2 accounts) | the main builder: bulk coding, capture scripts, routine fixes, render/ffmpeg errors, submission copy. switch accounts when one hits its limit. |
| **claude opus** | judgment and taste: idea critique, architecture review, design probe, logo concepts, demo paper edit and look stills, final judge audit. short, high-value turns only. |
| **claude sonnet** | claude's builder: landing page and ui polish, remotion build and revision rounds. |
| **gemini / antigravity** | cheap work: reading docs and sponsor apis, scanning the codebase, boilerplate, readme, research. |
| **pi on the vps, via t3 code** | where all agents run. |
| **github** | source of truth. |
| **vercel** | frontend hosting. |
| **vps + coolify** | backend, db, workers, and demo rendering. |
| **remotion + playwright + ffmpeg** | demo pipeline: product film from real components + live capture (see `phases/06-demo.md`). |
| **elevenlabs** | final narration only, after the script is locked. a free local tts is the draft voice. |

### model routing (use this for every model hint)

| phase / task | model | effort |
|---|---|---|
| intake, reading the brief and sponsor docs | gemini | medium |
| judge analysis | chatgpt | high |
| ideation: diverge | chatgpt | high |
| ideation: critique + converge | claude opus | high (one pass) |
| scope + implementation plan | chatgpt | high |
| architecture review | claude opus | high (one pass) |
| harness docs, boilerplate, scaffolding | gemini or chatgpt | low |
| riskiest integration proof | chatgpt | medium |
| core app build | chatgpt | low–medium |
| hard bug (after 2 failed attempts) | claude opus | high, minimal context |
| logo concepts + design probe | claude opus | medium |
| landing page + ui polish | claude sonnet | medium |
| capture script, reset script | chatgpt | low |
| demo paper edit + look stills | claude opus | medium |
| remotion build + revision rounds | claude sonnet | medium |
| readme, docs, submission copy | gemini, then chatgpt for the final pass | low |
| judge audit + security review | claude opus | high (one pass) |

rules: high effort only for decisions and hard problems; routine edits go low. opus never does long build loops. when a pool runs low, the hint names the fallback (chatgpt account 2, then gemini).

brainstorming across models: one model drafts, the other critiques **once**, the human decides, and the result goes into `docs/PROJECT.md`. no long back-and-forth debates; they burn both usage pools.

## usage budget rules

- fresh session per task. long sessions are the main drain.
- read `docs/CURRENT_STATE.md` instead of re-deriving context.
- point the agent at specific files; don't scan the whole repo.
- low/medium reasoning for routine edits. high reasoning or opus only for design, architecture and hard bugs.
- for a reviewer: send the error, the relevant files and what was tried, not the repo.
- no tts credits during ideation.

## the build loop (every substantial task)

1. read `AGENTS.md`, `docs/JUDGING.md`, `docs/CURRENT_STATE.md`.
2. restate the task and the acceptance criteria.
3. name the smallest set of files likely to change.
4. implement only that.
5. run typecheck, lint, tests and build.
6. look at the real ui when visuals matter.
7. report evidence, failures and deviations.
8. update `docs/CURRENT_STATE.md` and commit.
9. stop. don't silently start the next phase unless the mode allows it.

## default order

understand → ask → analyze judges → brainstorm together → decide together → refine → define the judge story → plan → approve → build → demo → audit → submit only with approval.
