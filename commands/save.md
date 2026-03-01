# Save Session Learnings

Review this conversation for stable, reusable knowledge worth persisting — then propose additions or updates to the relevant CLAUDE.md files. Think of this as committing what was learned to long-term memory.

## What belongs in CLAUDE.md

Save things that would change how Claude behaves in a _future_ session. Good candidates:

- Preferences discovered during this session ("I prefer X over Y")
- Decisions made that should be the standing default going forward
- Patterns used repeatedly that should be assumed, not asked about
- Technology choices confirmed (a library, a framework, a stack convention)
- Things about the user's background or skill level that affect how to explain things
- Project-specific rules, constraints, or context (in project-level CLAUDE.md)

Do NOT save:

- Task-specific notes ("the bug was on line 42") — those are session context, not instructions
- Anything uncertain or mid-discussion
- Things already documented in CLAUDE.md

---

## Step 1 — Scan the Conversation

Review what was discussed and done in this session. Identify:

- Any preference the user expressed that isn't already in CLAUDE.md
- Any technical decision that should become a standing default
- Any context about the user's background, workflow, or communication style that was revealed
- Any project-specific pattern, constraint, or rule that was established

Write a brief internal list before proposing changes.

---

## Step 2 — Check Global CLAUDE.md

Read `~/.claude/CLAUDE.md` in full.

For each item from Step 1, determine:

- Is it already covered? If so, skip it.
- Does it contradict something already there? Flag it as an update.
- Is it genuinely new? Mark it as an addition.

Group proposed changes by section. If a new section is needed, propose one.

---

## Step 3 — Check Project CLAUDE.md

Look for a `CLAUDE.md` in the current working directory and in `./` one level up.

If a project CLAUDE.md exists, repeat the analysis from Step 2 for project-scoped learnings:

- Project-specific conventions, patterns, or constraints
- Decisions made about this project's architecture, stack, or tooling
- Rules specific to this codebase that shouldn't apply globally

If no project CLAUDE.md exists and project-specific learnings were found, ask:

> "There are project-specific things worth saving, but this project doesn't have a CLAUDE.md yet. Should I create one, or skip for now?"

---

## Step 4 — Present Proposed Changes

Show a clear diff-style summary of everything proposed. Format it like this:

```
GLOBAL (~/.claude/CLAUDE.md)
─────────────────────────────
ADD to "Defaults" section:
  - Prefer async/await over .then() chains

ADD to "Background & Experience":
  - Has worked with Redis for caching

UPDATE "Communication Style" → change:
  - Old: ...
  - New: ...

PROJECT (./CLAUDE.md)
─────────────────────
ADD new section "API Conventions":
  - All routes use /api/v1/ prefix
  - Error responses follow { error: string, code: number } shape
```

If there is nothing worth saving, say so clearly:

> "Nothing from this session needs to be saved — either it's already documented or it's task-specific context."

---

## Step 5 — Confirm Before Writing

For each file that would be changed, ask for confirmation before writing:

> "Ready to apply the global CLAUDE.md changes? (yes / skip / adjust)"

Apply only the confirmed changes. Show a final summary of what was written and to which files.
