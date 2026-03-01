# Claude Code Power User Setup

A living document tracking the setup journey — what's been done, how it works, and why.

---

## Step 1 — Audit Your Tools

**Status: Complete**

### What we did

- Created `~/.claude/CLAUDE.md` — the global instruction file Claude reads in every session
- Established global defaults: npm, TypeScript, ESLint + Prettier
- Set communication style to learning-focused (explain steps, define terms, industry standards)
- Set workflow rules: no auto-commit, confirm before push/destructive ops

### Key concepts learned

- **CLAUDE.md** — a markdown file Claude reads automatically; global (`~/.claude/`) applies everywhere, project-level applies per repo
- **Skills** — custom `/commands` stored as markdown files in `~/.claude/commands/`
- **Hooks** — shell commands that fire automatically at lifecycle events (e.g., after a file edit)
- **MCP Servers** — bridges to external services (GitHub, Figma, databases, etc.)
- **Plugins** — installable bundles that combine skills, hooks, and MCP servers

### Files created

- `~/.claude/CLAUDE.md` — global preferences and new project setup checklist

---

## Step 2 — Build Your First Skills

**Status: Complete**

### What is a skill?

A skill is a markdown file saved in `~/.claude/commands/`. When you type `/skill-name` in Claude Code,
it reads that file and follows its instructions. Think of it as a reusable playbook for a task you do repeatedly.

Skills live at:

- `~/.claude/commands/` — global, available in every project
- `.claude/commands/` — project-level, only available in that repo

### Skills we're building

| Skill               | Command             | Purpose                                                                                |
| ------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| New Project Setup   | `/new-project`      | Walks through the full new project checklist from CLAUDE.md                            |
| Git Commit          | `/commit`           | Structured, consistent commit messages                                                 |
| Debug               | `/debug`            | Guided process for investigating a bug methodically                                    |
| Scaffolding Cleanup | `/scaffold-clean`   | Audits and updates project config files (tsconfig, eslint, prettier, package.json)     |
| Code Review         | `/review`           | Self-review of written code for correctness, security, readability, and consistency    |
| Explain Code        | `/explain`          | Explains code section by section with context, so you can describe it to someone else  |
| Environment Setup   | `/env-setup`        | Audits environment variables, updates .env.example, checks .gitignore protection       |
| PR Preparation      | `/pr-prep`          | Pre-PR checklist: clean commits, no debug artifacts, tests pass, drafts PR description |
| Refactor            | `/refactor`         | Restructure code for clarity without changing behavior, with checkpoints               |
| Onboard             | `/onboard`          | Generates a getting-started guide for a project from its existing code                 |
| Save Learnings      | `/save`             | Reviews current session and saves stable learnings to global and/or project CLAUDE.md  |
| Revise CLAUDE.md    | `/revise-claude-md` | Audits a CLAUDE.md for accuracy, completeness, and clarity; proposes improvements      |

### Files created

- `~/.claude/commands/new-project.md`
- `~/.claude/commands/commit.md`
- `~/.claude/commands/debug.md`
- `~/.claude/commands/scaffold-clean.md`
- `~/.claude/commands/review.md`
- `~/.claude/commands/explain.md`
- `~/.claude/commands/env-setup.md`
- `~/.claude/commands/pr-prep.md`
- `~/.claude/commands/refactor.md`
- `~/.claude/commands/onboard.md`
- `~/.claude/commands/save.md`
- `~/.claude/commands/revise-claude-md.md`

---

## Step 3 — Set Up Hooks

**Status: Complete**

### What is a hook?

A hook is a Node.js script registered in `~/.claude/settings.json` that fires automatically
at specific moments — no need to ask Claude to do it. Hooks are deterministic: they always run.

Hooks receive information about the tool call as JSON on stdin. They can:

- Read the file path, tool name, and other context
- Run any command (format, audit, notify, etc.)
- Exit with code 2 to **block** the action entirely (PreToolUse only)

### Hooks configured

| Hook               | Type         | Trigger                     | What it does                                         |
| ------------------ | ------------ | --------------------------- | ---------------------------------------------------- |
| Auto-format        | PostToolUse  | After Write/Edit/MultiEdit  | Runs Prettier on the changed file                    |
| Lint on edit       | PostToolUse  | After Write/Edit/MultiEdit  | Runs ESLint if the project has ESLint configured     |
| Log tool usage     | PostToolUse  | After Write/Edit/MultiEdit  | Appends timestamped entry to `~/.claude/logs/`       |
| Protect env files  | PreToolUse   | Before Write/Edit/MultiEdit | Blocks writes to `.env`, credentials, keys           |
| Protect generated  | PreToolUse   | Before Write/Edit/MultiEdit | Blocks writes to `dist/`, `node_modules/`, lockfiles |
| Notify on complete | Notification | When Claude needs attention | Sends a Windows toast notification                   |

### Files created

- `~/.claude/hooks/prettier-format.js`
- `~/.claude/hooks/lint-on-edit.js`
- `~/.claude/hooks/log-tool-usage.js`
- `~/.claude/hooks/protect-env.js`
- `~/.claude/hooks/protect-generated.js`
- `~/.claude/hooks/notify-on-complete.js`

### Files modified

- `~/.claude/settings.json` — added `hooks` configuration

---

## Step 4 — Connect GitHub MCP Server

**Status: Complete**

### What is an MCP server?

MCP (Model Context Protocol) is an open standard for connecting Claude to external services.
Once configured, Claude can query and interact with those services mid-conversation.

### Why GitHub first?

GitHub CLI was already installed and authenticated, making it the lowest-friction MCP to add.
Now Claude can interact with GitHub directly in conversation:

- "What are my open pull requests?"
- "Create a PR for this branch"
- "Show me recent issues on this repo"

### How the token is handled

Rather than storing the GitHub token in plaintext, a wrapper script (`github-server.js`)
retrieves it dynamically from the Windows keyring via `gh auth token` each time the server starts.
This means no token is ever stored in a config file.

### Configuration

The server is registered at **user scope** — available in every project, not just one.

- `claude mcp add --scope user github -- node ~/.claude/mcp/github-server.js`
- Stored in `~/.claude.json` (managed by Claude Code, not edited manually)

### MCP servers configured

| Server     | Command                               | What it enables                                       |
| ---------- | ------------------------------------- | ----------------------------------------------------- |
| `github`   | `node ~/.claude/mcp/github-server.js` | Read repos, issues, PRs; create/manage GitHub objects |
| `context7` | `npx -y @upstash/context7-mcp`        | Live documentation lookup for any code library        |

### What is Context7?

Context7 indexes documentation for thousands of libraries and makes it available to Claude in real time.
Without it, Claude relies on training data which can be outdated. With it, Claude can look up the current
API for any library you're using — useful when working with fast-moving packages like React, Next.js, or
any library that releases frequently.

Usage: in conversation, ask Claude to "use context7 to look up [library name]" or just mention the library
and Claude will fetch current docs automatically.

### Files created

- `~/.claude/mcp/github-server.js` — wrapper that fetches token from gh keyring and starts server

---

## Step 5 — Revisit and Improve CLAUDE.md Files

**Status: Complete**

### What we updated

**`~/.claude/CLAUDE.md` additions:**

- Added `Background & Experience` section — captures what's already known (Oracle, SQL Server, MongoDB, DynamoDB) vs. what's new (TypeScript, Node.js, modern web dev, PostgreSQL). This calibrates explanation depth every session without asking.
- Added `Known Projects` section — flags the three existing projects that don't have CLAUDE.md files yet, with a reminder to run `/onboard` before working on them.
- Added `Reference` section — links to `power-user-setup.md` so any session can find this document.

### Key insight from this step

The global CLAUDE.md is most powerful when it captures **who you are as a developer**, not just how to set up projects. Background, experience gaps, and analogies that resonate with you are all things that would otherwise need to be re-established in every session.

### Next actions for project CLAUDE.md files

The three existing projects still need documentation. When starting work on any of them, run:

```
/onboard
```

This will read the project, identify what's there, ask targeted questions, and generate a `CLAUDE.md` tailored to that codebase.

---

## Step 6 — Fill Core Skill Gaps

**Status: Planned**

### What we're building

The peer reference revealed four high-priority skill patterns we don't have: planning before building, verifying before finishing, and closing out git work cleanly. These are workflow fundamentals that compound over time.

| Skill                          | Command          | Purpose                                                                                    |
| ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------ |
| Brainstorming                  | `/brainstorm`    | Explore a problem space before writing any code — clarify, compare options, identify risks |
| Writing Plans                  | `/plan`          | Turn a goal into a step-by-step plan with checkpoints before starting                      |
| Executing Plans                | `/execute-plan`  | Work through a plan with structured review after each step                                 |
| Verification Before Completion | `/verify`        | Before claiming a task done, run a checklist: tests, edge cases, artifacts                 |
| Finish Branch                  | `/finish-branch` | Close out a development branch: clean commits, PR draft, cleanup                           |

### Why this order

These skills form a natural development cycle:

1. `/brainstorm` — think before you build
2. `/plan` — structure the work
3. `/execute-plan` — work with review checkpoints
4. `/verify` — confirm it's actually done before moving on
5. `/finish-branch` — wrap up the git work cleanly

---

## Step 7 — Test-Driven Development

**Status: Planned**

### What it is

TDD is a discipline where you write a test describing what your code should do _before_ you write the code itself. Then you write just enough code to make the test pass. The cycle is: Red (test fails) → Green (test passes) → Refactor.

It's worth learning because it forces you to think about what code should do before thinking about how it works — a habit that produces cleaner designs and fewer bugs.

### What we'll build

A `/tdd` skill that guides the full cycle:

- Start with a failing test
- Implement the minimum code to pass it
- Refactor with confidence
- Includes guidance on what to test (behavior, not implementation)

### Prerequisites

- A project with a test runner configured (Jest or Vitest for TypeScript projects)
- Basic understanding of what the code is supposed to do before writing tests

---

## Step 7.5 — Learn the Terminal Interface

**Status: Planned**

### Why this exists as its own step

The VS Code extension and the `claude` terminal CLI are the same underlying tool, but they expose different things. The extension is better for the common case — clickable file links, visual diffs, staying inside your editor. The terminal unlocks behaviors the extension doesn't support at all.

### What the terminal enables that the extension doesn't

| Capability                       | VS Code Extension | Terminal CLI         |
| -------------------------------- | ----------------- | -------------------- |
| Basic chat and file editing      | Yes               | Yes                  |
| Clickable file references        | Yes               | No                   |
| Visual diff on edits             | Yes               | No                   |
| Running Claude in the background | No                | Yes                  |
| Non-interactive / scripted use   | No                | Yes (`--print` flag) |
| Resuming a previous session      | Limited           | `claude --continue`  |
| Piping output to other tools     | No                | Yes                  |
| Running headless in CI           | No                | Yes                  |
| Multiple sessions simultaneously | One panel         | Multiple tabs        |
| Git worktree workflows           | Awkward           | Natural              |

### When to make the switch

Not all at once — the terminal becomes relevant in stages:

- **Step 8 (Agentic Workflows)** — agentic loops and background tasks require the terminal; you don't want them blocking your editor
- **Git worktrees** — creating isolated branches for parallel experiments is much cleaner from the terminal
- **CI/CD** — if you ever automate Claude as part of a pipeline, it runs in the terminal headlessly

### Practical entry point

Open a terminal tab alongside VS Code and run `claude` there for one session. Everything works the same — you're just not inside the editor. Get comfortable with the interface before you need it for agentic workflows.

### Key CLI flags to know

```
claude                  # Start a new session
claude --continue       # Resume the most recent session
claude --print "..."    # Run a single prompt non-interactively and print the result
claude mcp list         # See configured MCP servers
claude mcp add ...      # Add an MCP server
```

---

## Step 8 — Agentic Workflows

**Status: Planned**

### What this means

"Agentic" means Claude operates autonomously — planning and executing a sequence of steps without waiting for your input at each one. This is the ceiling of power-user behavior.

The peer reference shows three patterns here:

1. **Parallel agents** — run multiple independent tasks at the same time (e.g., write tests while also linting the codebase)
2. **Subagent-driven development** — break a large task into subtasks, each handled by a focused agent
3. **Autonomous loops** — Claude monitors a goal and keeps working until it's satisfied

### Why to wait on this

Agentic workflows are powerful but risky if the fundamentals aren't solid. If Claude takes 10 autonomous actions without review and one of them is wrong, the error compounds. The right time to add this is after:

- Comfortable with the planning → execution → verification cycle (Step 6)
- Consistent habit of reviewing Claude's work at each step
- At least one real project built and shipped

### What we'll build when ready

- `/parallel` — dispatch independent tasks in parallel
- `/agent-loop` — define a goal and let Claude iterate toward it with a defined exit condition and a way to cancel

---

## Step 9 — Plugins and MCP Expansion

**Status: Planned**

### Plugins vs. MCP servers — what's the difference

An **MCP server** is a bridge to a single external service (GitHub, Supabase, etc.) — you configure it once and Claude can query it in conversation.

A **plugin** is a bundle: it ships an MCP server, a set of skills, and sometimes hooks all together. Installing a plugin is like doing Steps 2, 3, and 4 at once for a specific domain. The tradeoff is less control over what you're getting — you take the whole bundle.

The practical rule: **check for a plugin first**. If one exists for what you need, install it. If not, add the MCP server manually and build the skills yourself.

### Plugins to consider (from peer reference)

| Plugin       | What It Bundles                            | Add When                                       |
| ------------ | ------------------------------------------ | ---------------------------------------------- |
| `supabase`   | Supabase MCP + management skills           | Starting a project with a Supabase database    |
| `playwright` | Playwright MCP + browser automation skills | Building or testing a web UI                   |
| `firecrawl`  | Firecrawl MCP + scraping/search skills     | Research-heavy work or data collection         |
| `hookify`    | Hook analysis + rule creation skills       | After static hooks feel limiting (see Step 10) |
| `firebase`   | Firebase MCP + project management skills   | If choosing Firebase over Supabase             |

### MCP servers without a plugin

Some servers don't have a plugin bundle — add them manually:

| Server | Add When                       | What It Unlocks                                  |
| ------ | ------------------------------ | ------------------------------------------------ |
| Sentry | Deploying an app to production | Surface real errors and traces in conversation   |
| Figma  | Collaborating with designers   | Read component specs, generate code from designs |
| Gmail  | Building personal automation   | Read/search email, draft responses               |

### How to add a plugin

```
claude plugin install <name>
```

### How to add an MCP server manually

```
claude mcp add --scope user <name> -- <command>
```

For cloud-hosted servers (Supabase, Figma, Sentry), each has its own authentication setup. Prefer dynamic token retrieval (like the GitHub wrapper) over storing tokens in config files.

### Timing

Add these as they become relevant to actual projects — not speculatively. The right time to add the Supabase plugin, for example, is when you're starting a Supabase project, not before.

---

## Step 10 — Smarter Hooks (Hookify)

**Status: Planned**

### What hookify is

Hookify is a plugin that does two things:

1. Analyzes your conversations to suggest new automation rules
2. Lets you define hook rules in natural language rather than writing scripts

Right now, our hooks are static — they always do the same thing. Hookify makes hooks dynamic: they can behave differently based on what file is being edited, what the conversation context is, or what patterns appear in the code.

### When to add this

After the current hook setup feels limiting — when you find yourself wishing hooks could be smarter or more conditional. The current hooks (Prettier, ESLint, protect-env) are solid fundamentals. Hookify builds on that foundation.

---

## Step 11 — Peer Reference Maintenance

**Status: Ongoing**

### What this means

The peer reference at `~/.claude/peer-reference.md` captures a snapshot of another developer's setup. That setup will evolve. Periodically update it:

- When you learn about new skills or tools he's using
- After a session where you compared notes
- When the "We Have It?" column changes (you added something)

The file is structured as a comparison, so updates are straightforward: change "No" to "Yes", add new rows, update priority ratings as your needs change.

---

## Reference: File Locations

| File                                    | Purpose                              |
| --------------------------------------- | ------------------------------------ |
| `~/.claude/CLAUDE.md`                   | Global Claude instructions           |
| `~/.claude/settings.json`               | Global settings and hooks            |
| `~/.claude/commands/`                   | Global skills (available everywhere) |
| `~/.claude/power-user-setup.md`         | This file                            |
| `<project>/.claude/settings.local.json` | Project-specific permissions         |
| `<project>/CLAUDE.md`                   | Project-specific Claude instructions |
| `<project>/.claude/commands/`           | Project-specific skills              |
