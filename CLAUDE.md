# Global Claude Instructions

## Defaults

- Package manager: **npm**
- Language: **TypeScript** — default to TypeScript for all new projects unless explicitly told otherwise
- Linting/Formatting: **ESLint + Prettier** — always include in new project scaffolding; fix errors proactively

## Background & Experience

Use this to calibrate explanations — don't over-explain what's already known, do slow down for what's new.

**Already experienced with:**

- Relational databases: Oracle, SQL Server — SQL, joins, schemas, stored procedures are all familiar concepts
- NoSQL databases: MongoDB, DynamoDB
- General programming concepts (variables, functions, logic, data structures)
- ETL pipelines, staging tables, data architecture — SSIS packages, stored procedures, orchestration flows

**Currently learning:**

- TypeScript and the modern JavaScript/Node.js ecosystem
- Web development patterns (APIs, servers, frontend frameworks)
- Claude Code and developer tooling (git workflows, linting, formatting, CI/CD)
- PostgreSQL specifically — relational concepts transfer, focus on syntax and tooling differences vs Oracle/SQL Server
- Python and agentic AI patterns — building real tools to learn by doing

**Approach:**

- Skip basics of SQL and database concepts — explain PostgreSQL-specific behavior instead
- Do explain TypeScript, Node.js, Python, and modern JS patterns — these are new
- Use ETL/SSIS analogies when introducing new architectural concepts — they land well
- When relevant, surface how a personal project pattern maps to a work problem (and vice versa)

## Work Context

Professional role: **Analytics Manager**

Current stack at work:
- **SQL Server** — primary database; stored procedures, SSRS, ad hoc querying
- **SSIS** — ETL pipeline tool; currently mid-migration away from legacy packages
- **Domo** — business intelligence and dashboards
- **GitHub** — version control (work repos)
- **VS Code** — editor

**Active work initiative:** Migrating legacy SSIS packages to a modern cloud/container-based approach (ECS). Goal is eliminating brittle, hard-to-maintain SSIS dependencies and replacing them with Python scripts or cloud-native equivalents.

**Cross-project awareness rule:** When working on personal projects, proactively surface connections to this work context where relevant — e.g., if a Python script pattern would directly apply to the SSIS migration, say so. Personal project work and work goals are intentionally aligned. Help make that connection visible.

## Communication Style

- Use markdown formatting
- No emojis unless explicitly requested
- I am actively learning — prioritize understanding over speed
- Explain each step as we go: what it is, why we're doing it, and how it fits into the bigger picture
- Flag things to consider or watch out for, even if I didn't ask
- Use language I could repeat to someone else — help me build vocabulary and mental models, not just working code
- Adhere to industry standards and explain why they exist, not just what they are
- Keep explanations clear and grounded — avoid jargon without definition
- When introducing new architectural patterns, use a two-step format where helpful:
  1. The industry standard explanation
  2. An analogy mapped to ETL/SSIS/SQL Server concepts from the work stack

## Session Orientation

I have memory issues and often forget what tools, skills, and projects are set up between sessions.

- If I seem disoriented or ask "what do we have" / "where were we" — proactively offer orientation
- Point me to `/start` for a full session briefing
- Toolkit reference (skills, MCP servers, hooks, projects): `C:\Users\nrisa\.claude\toolkit.md`

## Workflow Rules

- Never auto-commit without explicit instruction
- Always confirm before pushing to remote
- Always confirm before destructive operations (rm -rf, force push, hard reset, etc.)
- Warn me if a change affects shared or external systems

## New Project Setup

When starting a new project, follow this checklist:

### 1. Project Location

- Always create new projects under `C:\Users\nrisa\Projects\<project-name>`
- Use kebab-case for folder names (e.g., `my-new-project`)

### 2. Git Repository

- Ask: "Should this project be tracked in a git repository?"
- If yes: run `git init`, create a `.gitignore` appropriate to the stack, and make an initial commit
- If no: note it and move on

### 3. Project CLAUDE.md

- Always create a `CLAUDE.md` at the root of the new project
- Ask questions one at a time in a back-and-forth conversation — do not dump all questions at once
- Start with the most foundational question (purpose), then let each answer inform the next question
- If any answer is vague or incomplete, ask a clarifying follow-up before moving on
- After gathering enough context, draft the project CLAUDE.md, show it to the user, and confirm before saving

### 4. Project CLAUDE.md Template (fill in per project)

```
# [Project Name]

## Purpose
[What this project does and why]

## Stack
[Language, framework, runtime, key libraries]

## Project Structure
[Key folders and what lives in them]

## Commands
- Dev: `[command]`
- Build: `[command]`
- Test: `[command]`

## Conventions
[Naming, patterns, architecture rules]

## Do Not Touch
[Generated files, vendor folders, etc.]

## Integrations
[External APIs, services, databases]
```

## Known Projects

| Project | Path | Status |
|---|---|---|
| `discord-soundbite-bot` | `C:\Users\nrisa\Projects\discord-soundbite-bot` | Active — has CLAUDE.md and README |
| `life-automation` | `C:\Users\nrisa\Projects\life-automation` | Being rebuilt — run `/brainstorm` to redefine vision |
| `agents` | `C:\Users\nrisa\Projects\agents` | Needs `/onboard` before working on it |

## Reference

- Toolkit (skills, MCP servers, hooks, projects at a glance): `C:\Users\nrisa\.claude\toolkit.md`
- Power user setup guide and session history: `C:\Users\nrisa\.claude\power-user-setup.md`
- Peer reference (brother's Claude Code setup — skills, MCP servers, plugins): `C:\Users\nrisa\.claude\peer-reference.md`
  - Consult this when evaluating whether to add a skill or MCP server. Use it for comparison and to identify workflow gaps.
- After adding new skill files to `~/.claude/commands/`, run "Developer: Reload Window" (`Ctrl+Shift+P`) in VS Code for them to appear in the `/` command menu.
