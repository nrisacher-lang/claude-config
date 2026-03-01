# Claude Code Toolkit

A quick-reference inventory of everything set up in this Claude Code environment.
When you're disoriented, start here — or run `/start` for a guided session briefing.

---

## Skills (Slash Commands)

Type `/command-name` in any Claude Code session to invoke.

### Daily Workflow

| Command | What it does | Use it when... |
|---|---|---|
| `/start` | Session orientation briefing | You open Claude and need to remember where things stand |
| `/commit` | Structured git commit message | You're ready to commit and want a clean, consistent message |
| `/save` | Save session learnings to CLAUDE.md | End of a productive session — lock in what you learned |

### Planning & Thinking

| Command | What it does | Use it when... |
|---|---|---|
| `/brainstorm` | Explore a problem before writing any code | Starting something new, or when the goal feels fuzzy |
| `/onboard` | Generate a getting-started guide for a project | Returning to a project after time away, or documenting one you built |
| `/new-project` | Walk through the full new project setup checklist | Starting a brand new project |

### Code Quality

| Command | What it does | Use it when... |
|---|---|---|
| `/review` | Self-review code for correctness, security, readability | Before committing significant work |
| `/explain` | Explain a section of code in plain terms | When you need to understand something well enough to describe it |
| `/refactor` | Restructure code for clarity without changing behavior | Code works but feels messy |
| `/debug` | Guided systematic debugging | You have a bug and need a methodical approach |
| `/simplify` | Review changed code for reuse, quality, and efficiency | After finishing a feature — tighten it up |

### Project Hygiene

| Command | What it does | Use it when... |
|---|---|---|
| `/scaffold-clean` | Audit and update project config files | After scaffolding a new project, or when configs feel stale |
| `/env-setup` | Audit environment variables and .env files | Setting up a new environment or checking .env hygiene |
| `/pr-prep` | Pre-PR checklist before opening a pull request | Before submitting code for review |
| `/revise-claude-md` | Audit a CLAUDE.md for accuracy and completeness | When a project's instructions feel outdated |

### Planned (Not Yet Built)

| Command | Purpose | Priority |
|---|---|---|
| `/plan` | Turn a goal into a step-by-step plan with checkpoints | High |
| `/execute-plan` | Work through a plan with structured review after each step | High |
| `/verify` | Checklist before claiming a task complete | High |
| `/finish-branch` | Close out a development branch cleanly (PR, cleanup) | High |
| `/tdd` | Test-driven development cycle (red → green → refactor) | Medium |

---

## MCP Servers

Active connections Claude can use in conversation.

| Server | What it enables | How it's configured |
|---|---|---|
| `github` | Read repos, issues, PRs; create and manage GitHub objects | User-scoped; token fetched dynamically via `gh auth token` — no stored credentials |
| `context7` | Live documentation lookup for any code library | User-scoped; `npx -y @upstash/context7-mcp` |

**Using context7:** Ask Claude to "look up [library name]" or just reference a library — Claude will fetch current docs automatically. Especially useful for fast-moving packages where training data may be outdated.

### MCP Servers to Add Later

| Server | Add when... |
|---|---|
| Gmail | Building personal automation (Phase 3 of life-automation) |
| Sentry | Deploying an app to production |
| Figma | Collaborating with a designer |
| Supabase | Starting a project with a Supabase database |

---

## Hooks

Automatic actions that fire on Claude's tool calls — no manual trigger needed.

| Hook | Trigger | What it does |
|---|---|---|
| Auto-format | After any file Write/Edit | Runs Prettier on the changed file |
| Lint on edit | After any file Write/Edit | Runs ESLint if the project has it configured |
| Log tool usage | After any file Write/Edit | Appends timestamped entry to `~/.claude/logs/` |
| Protect env files | Before any file Write/Edit | **Blocks** writes to `.env`, credential files, key files |
| Protect generated | Before any file Write/Edit | **Blocks** writes to `dist/`, `node_modules/`, lockfiles |
| Notify on complete | When Claude needs attention | Sends a Windows toast notification |

Hooks are defined in `~/.claude/settings.json` and implemented in `~/.claude/hooks/`.

---

## Projects

| Project | Language | Status | CLAUDE.md |
|---|---|---|---|
| `discord-soundbite-bot` | Python | Active | Yes |
| `life-automation` | TBD | Being rebuilt | Yes (will be replaced) |
| `agents` | Unknown | Needs `/onboard` | No |

---

## Key File Locations

| File | Purpose |
|---|---|
| `~/.claude/CLAUDE.md` | Global Claude instructions — loaded every session |
| `~/.claude/toolkit.md` | This file — quick-reference inventory |
| `~/.claude/power-user-setup.md` | Full setup history — what was built, how, and why |
| `~/.claude/peer-reference.md` | Brother's Claude Code setup — for comparison and inspiration |
| `~/.claude/commands/` | All global skill files |
| `~/.claude/hooks/` | All hook scripts |
| `~/.claude/mcp/` | MCP server wrapper scripts |
| `~/.claude/settings.json` | Global settings and hook registration |
| `<project>/CLAUDE.md` | Project-specific Claude instructions |
| `<project>/.claude/commands/` | Project-specific skills (if any) |
