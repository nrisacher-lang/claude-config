# Sync Peer — Track ClaudeVault Updates

Checks the brother's ClaudeVault repo for changes since the last review and surfaces
anything worth acting on — new features, architectural decisions, API changes, or
patterns to adopt. Updates `peer-reference.md` with findings.

**Repo:** https://github.com/nlrisacher-cmyk/claudevault

---

## What to do

### Step 1 — Fetch current state from GitHub

Use the GitHub MCP to read the following from `nlrisacher-cmyk/claudevault`:

1. Recent commits — `GET /repos/nlrisacher-cmyk/claudevault/commits` (last 20)
2. README.md — for feature changes and stack updates
3. Any CHANGELOG or release notes if they exist
4. The MCP server file (`mcp_server/server.py`) — to see what tools it currently exposes
5. Check for new top-level directories or significant structural changes

### Step 2 — Compare against peer-reference.md

Read `C:\Users\nrisa\.claude\peer-reference.md` (the ClaudeVault section).

Identify:
- **New features** added since the last review date
- **Stack changes** — new dependencies, removed ones, architectural shifts
- **MCP tools** — what the ClaudeVault MCP server currently exposes (these become available to us once self-hosted)
- **Setup changes** — anything that would affect how we'd self-host our own instance
- **Patterns worth adopting** — approaches in his code that apply to our own projects

### Step 3 — Deliver a change summary

Present findings in this format:

---

**ClaudeVault Sync — [date]**

**New since last review:**
[Bullet list of meaningful changes — new endpoints, features, architectural decisions.
Skip trivial changes like typo fixes. If nothing significant changed, say so clearly.]

**MCP tools currently exposed:**
[List the tools the ClaudeVault MCP server exposes — these are what Claude would be
able to call once we connect our own instance.]

**Actions to consider:**
[Specific, concrete suggestions — e.g., "The webhook system now supports glob patterns;
this changes how we'd design life-automation triggers" or "New bulk memory endpoint
would be useful for session state management."]

**Self-hosting impact:**
[Anything that changes the effort or approach for setting up our own instance.]

---

### Step 4 — Update peer-reference.md

After delivering the summary, ask:
> "Should I update peer-reference.md to reflect these changes?"

If yes:
- Update the "Last reviewed" date
- Update the feature table if new capabilities were added
- Update the stack section if dependencies changed
- Note any self-hosting considerations that changed

### Step 5 — Offer next action

Based on findings, suggest the most logical next step:
- If a new feature is directly relevant to a current project, say so explicitly
- If the self-hosting setup changed in a way that simplifies or complicates the plan, flag it
- If nothing changed and no action is needed, say that clearly — don't manufacture tasks
