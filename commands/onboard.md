# Onboard

Generate a clear getting-started guide for the current project. Useful when returning to a project after time away, handing work off to someone else, or documenting a project you've built but never written up.

The output is a guide written for someone who has never seen this project before — including future-you.

## Step 1 — Read the Project
Before writing anything, gather context by reading:
- `CLAUDE.md` (if it exists) — project instructions and conventions
- `package.json` — project name, scripts, dependencies
- `README.md` (if it exists) — existing documentation
- Top-level folder structure — what directories exist and what they likely contain
- Any config files present — to understand the stack

Do not ask the user to explain the project — figure it out from the code first, then ask targeted questions about anything that's unclear.

## Step 2 — Identify Gaps
After reading, note anything that is unclear or undocumented:
- What does this project actually do? (if not obvious)
- How do you run it locally?
- Are there required environment variables?
- Are there dependencies that need to be installed or external services that need to be running?
- What is the expected workflow for making changes?

Ask the user about any gaps before writing the guide.

## Step 3 — Draft the Onboarding Guide
Write the guide in this structure:

```markdown
# [Project Name]

## What This Is
[One paragraph describing the project's purpose and what it does]

## Prerequisites
[What needs to be installed before you can run this — Node version, tools, accounts, etc.]

## Getting Started
[Step-by-step: clone, install dependencies, set up .env, run the project]

## Project Structure
[Key folders and what lives in them — only the ones that matter]

## Available Commands
[Scripts from package.json with plain-English descriptions]

## How It Works
[A brief explanation of the main flow — how the pieces connect]

## Common Tasks
[How to do the things you'll do most often: add a feature, run tests, deploy, etc.]

## Known Quirks
[Anything non-obvious that would confuse someone new — workarounds, gotchas, things to watch out for]
```

Omit sections that don't apply. Keep each section concise — this is a quick-start guide, not a full specification.

## Step 4 — Confirm and Save
Show the draft to the user. Ask:
- Is anything missing or wrong?
- Is there anything you want to add about common tasks or known issues?

After confirmation, ask where to save it:
- `README.md` at the project root (standard — visible on GitHub)
- A separate `ONBOARDING.md` if a README already exists with different content

## Step 5 — Update CLAUDE.md
If reading the project revealed things that should be in `CLAUDE.md` but aren't (commands, conventions, things not to touch), suggest additions and offer to update it.
