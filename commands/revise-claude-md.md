# Revise CLAUDE.md

Audit one or more CLAUDE.md files for accuracy, clarity, and completeness. This skill finds sections that have drifted out of date, instructions that are unclear or conflicting, and gaps where documented knowledge is missing.

Run this periodically — especially after finishing a project, establishing a new workflow, or any time the current CLAUDE.md feels like it's not working as well as it should.

---

## Step 1 — Choose Scope

Ask the user which file(s) to review (if not already stated):

1. **Global** — `~/.claude/CLAUDE.md` (applies to every project and session)
2. **Project** — `./CLAUDE.md` in the current directory (applies only to this project)
3. **Both** — review global first, then project

Read the selected file(s) in full before proceeding.

---

## Step 2 — Audit for Accuracy

For each section, check:

- **Is this still true?** Instructions can become outdated as projects evolve or preferences change.
- **Is this specific enough?** Vague instructions ("write clean code") are less useful than concrete ones ("prefer named exports over default exports").
- **Are there contradictions?** Two instructions that conflict with each other cause unpredictable behavior.
- **Is anything duplicated?** Repeated instructions add noise without adding clarity.

Flag each issue found with its location (section name and approximate line).

---

## Step 3 — Audit for Completeness

Based on recent work in this session and what you know about the current project, check for gaps:

- **Missing defaults** — Are there tools, patterns, or stack choices being used that aren't mentioned?
- **Missing context** — Is there background about the user or project that would help calibrate future sessions?
- **Missing rules** — Are there things that keep needing to be said in conversation that could just live in CLAUDE.md?
- **Missing sections** — Common useful sections: Defaults, Communication Style, Background, Workflow Rules, Project Architecture, Known Gotchas

---

## Step 4 — Audit for Clarity

Check that instructions are written in a way that would be unambiguous to follow:

- Instructions should be actionable, not aspirational
- Avoid "usually", "try to", "as needed" unless variation is genuinely appropriate
- Each item should have a clear outcome: what will happen differently because of this instruction?

Flag anything that reads as unclear or likely to be interpreted inconsistently.

---

## Step 5 — Present Findings

Organize findings into three categories:

**Things to remove or update** (inaccurate, contradictory, or outdated)
**Things to add** (gaps found in Step 3)
**Things to rewrite** (accurate but unclear)

For each finding, show:

- Where it is (section name)
- What the issue is (one sentence)
- What the proposed change is (show old → new, or the new text to add)

---

## Step 6 — Confirm and Apply

For each proposed change, ask for confirmation before writing. Present one section at a time if there are many changes.

After applying changes, read the updated file back and give a brief summary:

> "The file went from X sections to Y sections. Main improvements: [2-3 bullet points]."

---

## Tips for a Good CLAUDE.md

- **Global CLAUDE.md** should capture who you are as a developer — background, experience level, communication preferences, and standing defaults that apply everywhere.
- **Project CLAUDE.md** should capture the specific shape of this codebase — what the architecture looks like, what conventions are in use, what to watch out for.
- Keep sections focused. One instruction per bullet is easier to follow than a paragraph of mixed guidance.
- Update it whenever something keeps coming up in conversation that could just be documented instead.
