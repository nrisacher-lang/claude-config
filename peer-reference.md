# Peer Reference — Brother's Claude Code Setup

A structured comparison of another developer's Claude Code configuration.
Use this when deciding whether to add a skill, hook, or MCP server — to understand what approaches are already proven and how they compare to our current setup.

Updated: 2026-03-01

---

## How to Use This File

- When planning a new skill, check whether a similar one exists here and what its scope is
- When evaluating an MCP server, compare against what's listed under "MCP Servers"
- When stuck on a workflow problem, scan the skills list for patterns worth adopting
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
