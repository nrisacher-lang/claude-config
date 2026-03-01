# Start — Session Orientation

Gives a personalized briefing at the start of a session. Use this whenever you feel disoriented, can't remember where you left off, or just want to know what you have available.

## What to do

### Step 1 — Read context files

Read the following files to gather current state:

1. `C:\Users\nrisa\.claude\toolkit.md` — inventory of skills, MCP servers, hooks, and projects
2. `C:\Users\nrisa\.claude\projects\C--Users-nrisa\memory\MEMORY.md` — global cross-session memory (if it exists)
3. If currently inside a project directory, read that project's `MEMORY.md` or `CLAUDE.md` for current state

### Step 2 — Deliver a briefing

Present a short, structured briefing in this format:

---

**Session Briefing**

**Where things stand:**
[1–3 sentences summarizing the most recent work or current project state, drawn from memory files. If no memory files exist or they're empty, say so plainly.]

**What you have available:**
- Skills: [list the most useful ones for the current context, not all of them — pick 4–6 that are relevant]
- MCP: GitHub (repos, issues, PRs), Context7 (live library docs)
- Hooks: auto-format, lint, env protection running silently in the background

**Active projects:**
[Brief one-liner per project with current status, drawn from toolkit.md and any memory files]

**Suggested next step:**
[Based on what's in the memory files, what would be the most logical thing to work on? State it as a question the user can confirm or redirect.]

---

### Step 3 — Ask what to do

After delivering the briefing, ask:

> "Does that match where you left off, or do you want to work on something different?"

Keep the briefing tight — this is an orientation, not a status report. The goal is to get the user from "I don't remember anything" to "I know exactly what to do next" in under 30 seconds of reading.
