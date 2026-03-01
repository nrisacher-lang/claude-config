# Peer Reference — Brother's Claude Code Setup

A structured comparison of another developer's Claude Code configuration and architecture.
Use this when deciding whether to add a skill, hook, or MCP server — and to track the
development of ClaudeVault, which is a planned infrastructure target for this setup.

**Repo:** https://github.com/nlrisacher-cmyk/claudevault
**Last reviewed:** 2026-03-01
**Sync with:** `/sync-peer`

---

## ClaudeVault — His Primary Project

ClaudeVault is a self-hosted REST API + React dashboard purpose-built for Claude agent
workflows. It is not just a config reference — it is a full application that is directly
relevant as infrastructure for personal automation projects.

**GitHub:** https://github.com/nlrisacher-cmyk/claudevault
**Status:** Hosted and running (his instance)
**Our status:** Planning self-hosted instance

### What it provides

| Feature | What it does | Relevant to us because... |
|---|---|---|
| **Git-backed vault** | Create repos, read/write files — all changes produce git commits | Could host our `.claude` config with a proper UI |
| **Key-value memory** | Namespaced, TTL-supported store for agent context | Solves the between-session memory problem |
| **Document store** | Versioned docs with full-text search | Central place for spec and planning docs |
| **Agent sessions** | Track Claude sessions, log events and tool calls | Visibility into what agents are doing |
| **Project + task management** | Built-in project and task tracking | Backend for life-automation project |
| **MCP server** | Connects ClaudeVault directly to Claude Code | Claude can read/write vault, memory, tasks mid-conversation |
| **React dashboard** | Web UI for all of the above | The hosted toolkit UI we discussed |
| **Webhook system** | Subscribe to events with pattern matching, HMAC-signed | Automation triggers |

### Stack

**Backend:** Python 3.12, FastAPI, SQLAlchemy 2.0 (async), Alembic, PostgreSQL 16, Redis 7, GitPython
**Frontend:** React 18, TypeScript, Vite 6, Tailwind CSS 4
**Infrastructure:** Docker Compose, multi-stage Dockerfile

**SSIS analogy:** FastAPI + PostgreSQL + Redis + Docker is the modern equivalent of what
the SSIS migration at work is trying to become. Building a ClaudeVault instance hands-on
teaches this stack directly.

### Self-hosting plan

Setup requires Docker and Docker Compose. A one-command setup script exists:
`bash scripts/setup_lxc.sh` — generates credentials, builds, migrates, seeds admin.

Self-hosting ClaudeVault is a planned project. Run `/brainstorm` in the `life-automation`
project when ready to plan the infrastructure layer.

---

## How to Use This File

- When planning a new skill, check whether a similar one exists in the Skills section
- When evaluating an MCP server, compare against what's listed — ClaudeVault's MCP is a high-priority add once self-hosted
- Run `/sync-peer` to check for updates to ClaudeVault and surface anything worth acting on
- This is a reference, not a checklist — adopt what fits, skip what doesn't

---

## MCP Servers

| Server   | What It Enables                            | We Have It? | Notes                                   |
| -------- | ------------------------------------------ | ----------- | --------------------------------------- |
| Context7 | Live library documentation                 | Yes         | Installed via npx @upstash/context7-mcp |
| GitHub   | Repos, issues, PRs                         | Yes         | User-scoped via gh auth token wrapper   |
| Figma    | Design read/write, FigJam, Code Connect    | No          | Useful when working with designers      |
| Gmail    | Email read, search, drafts                 | No          | Personal automation use case            |
| Sentry   | Error tracking, issues, performance traces | No          | Useful once deploying real apps         |
| Supabase | Supabase DB management (cloud)             | No          | Add when starting a Supabase project    |

---

## Plugins (Bundles of Skills + MCP Servers)

| Plugin     | What It Provides                           | We Have It? | Notes                                         |
| ---------- | ------------------------------------------ | ----------- | --------------------------------------------- |
| context7   | Library docs lookup                        | Yes         | Already configured as standalone MCP          |
| playwright | Browser automation (test web UIs)          | No          | High value once building web apps             |
| supabase   | Supabase management                        | No          | Add when starting a Supabase project          |
| hookify    | Hook rule creation & conversation analysis | No          | Advanced — builds smarter, dynamic hooks      |
| firecrawl  | Web scraping, search, research             | No          | Useful for research-heavy or data-driven work |
| firebase   | Firebase project management                | No          | Alternative to Supabase; Google ecosystem     |

---

## Skills Comparison

Skills we don't have yet, grouped by how useful they'd be at our current stage.

### Immediately Useful (Learning & Workflow)

| Skill                          | Purpose                                | Priority | Notes                                       |
| ------------------------------ | -------------------------------------- | -------- | ------------------------------------------- |
| brainstorming                  | Pre-implementation exploration         | High     | Think before coding — great for learners    |
| writing-plans                  | Multi-step task planning               | High     | Structure work before starting              |
| executing-plans                | Plan execution with review checkpoints | High     | Pairs with writing-plans                    |
| verification-before-completion | Verify before claiming done            | High     | Builds good habits around QA                |
| claude-automation-recommender  | Recommend Claude Code automations      | Medium   | Meta-skill: finds opportunities to automate |
| writing-skills                 | Create/edit skills (meta)              | Medium   | We're already doing this manually           |

### Git Workflow

| Skill                          | Purpose                                 | Priority | Notes                                     |
| ------------------------------ | --------------------------------------- | -------- | ----------------------------------------- |
| finishing-a-development-branch | Merge/PR/cleanup guidance               | High     | Natural end to the git workflow           |
| commit-push-pr                 | Commit + push + open PR in one step     | Medium   | We have /commit; this adds push+PR        |
| clean_gone                     | Clean up stale remote-tracking branches | Low      | Useful after active PR merging            |
| using-git-worktrees            | Isolated worktree creation              | Low      | Advanced; useful for parallel experiments |

### Testing

| Skill                   | Purpose                | Priority | Notes                                         |
| ----------------------- | ---------------------- | -------- | --------------------------------------------- |
| test-driven-development | TDD workflow           | Medium   | Worth learning eventually; discipline-builder |
| requesting-code-review  | Request review of work | Low      | More useful in team settings                  |
| receiving-code-review   | Handle review feedback | Low      | More useful in team settings                  |

### Agentic / Advanced

| Skill                       | Purpose                           | Priority | Notes                                            |
| --------------------------- | --------------------------------- | -------- | ------------------------------------------------ |
| subagent-driven-development | Parallel task execution           | Low      | Advanced — requires understanding agents first   |
| dispatching-parallel-agents | Run independent tasks in parallel | Low      | Same — ceiling-level power user                  |
| ralph-loop                  | Start an autonomous agentic loop  | Low      | Very advanced; powerful but risky if misused     |
| cancel-ralph                | Cancel an active Ralph Loop       | Low      | Paired with ralph-loop                           |
| using-superpowers           | Skill discovery bootstrap         | Low      | Meta-skill for exploring the full capability set |

### UI / Frontend

| Skill           | Purpose                        | Priority | Notes                                   |
| --------------- | ------------------------------ | -------- | --------------------------------------- |
| frontend-design | Production-grade UI generation | Medium   | Useful when building web interfaces     |
| playground      | Interactive HTML playgrounds   | Medium   | Good for experimenting with UI concepts |
| feature-dev     | Guided feature development     | Medium   | Structured approach to adding features  |

### Platform-Specific (Lower Priority)

| Skill                        | Purpose                           | Notes                                            |
| ---------------------------- | --------------------------------- | ------------------------------------------------ |
| claude-developer-platform    | Claude API / Anthropic SDK apps   | Relevant if building AI-powered tools            |
| agent-sdk-dev:new-sdk-app    | New Agent SDK app setup           | Same — if building with Claude as a component    |
| stripe:explain-error         | Stripe error explanations         | Add when integrating payments                    |
| stripe:test-cards            | Stripe test card numbers          | Add when integrating payments                    |
| stripe:stripe-best-practices | Stripe integration best practices | Add when integrating payments                    |
| firecrawl:skill-gen          | Generate skill from docs URL      | Useful with Firecrawl MCP                        |
| firecrawl:firecrawl-cli      | Web operations via Firecrawl      | Useful with Firecrawl MCP                        |
| atlassian:\*                 | Jira/Confluence workflow          | Enterprise tooling — skip unless using Atlassian |
| hookify:\*                   | Smart hook management             | Requires hookify plugin                          |

---

## Key Observations

1. **Planning skills are a gap**: brainstorming → writing-plans → executing-plans is a structured development cycle we don't have. High value for learners.
2. **Git finishing work is missing**: We can start and commit work, but have no skill for closing out a branch cleanly (PR, cleanup, merge strategy).
3. **Verification is missing**: No explicit "check your work before claiming done" step — the brother treats this as a dedicated skill.
4. **Agentic workflows are advanced**: ralph-loop and parallel agents are ceiling-level features. The brother has them; they make sense once workflow fundamentals are solid.
5. **Plugin ecosystem**: hookify is interesting — it analyzes conversations to suggest new automation rules. Worth exploring after hooks are comfortable.
