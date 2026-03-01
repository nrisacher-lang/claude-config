# Claude Code Config

Personal Claude Code setup — global instructions, skills, hooks, and MCP servers.

## What's here

| Path | Purpose |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Global instructions loaded every session — background, preferences, workflow rules |
| [`toolkit.md`](toolkit.md) | Quick-reference inventory of skills, MCP servers, hooks, and projects |
| [`power-user-setup.md`](power-user-setup.md) | Step-by-step setup history — what was built, how, and why |
| [`peer-reference.md`](peer-reference.md) | Comparison with a peer's setup — used to identify gaps and borrow patterns |
| [`commands/`](commands/) | Custom slash commands (skills) available in every session |
| [`hooks/`](hooks/) | Automation scripts that fire on Claude's tool calls |
| [`mcp/`](mcp/) | MCP server wrapper scripts |
| [`settings.json`](settings.json) | Hook registration and global settings |

## Skills

| Command | Purpose |
|---|---|
| `/start` | Session orientation — what you have, where things stand |
| `/brainstorm` | Define the problem and desired outcome before building anything |
| `/onboard` | Generate a getting-started guide from an existing project |
| `/new-project` | Walk through the new project setup checklist |
| `/commit` | Structured git commit message |
| `/review` | Self-review code before committing |
| `/explain` | Explain a section of code in plain terms |
| `/debug` | Guided systematic debugging |
| `/refactor` | Restructure code without changing behavior |
| `/simplify` | Review changed code for reuse, quality, efficiency |
| `/scaffold-clean` | Audit and update project config files |
| `/env-setup` | Audit environment variables and `.env` files |
| `/pr-prep` | Pre-PR checklist |
| `/revise-claude-md` | Audit a CLAUDE.md for accuracy and completeness |
| `/save` | Save session learnings to CLAUDE.md |
