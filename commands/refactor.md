# Refactor

Restructure existing code to improve its design without changing what it does. Refactoring is about clarity, maintainability, and reducing complexity — not adding features or fixing bugs.

**Important:** Behavior must be identical before and after. If tests exist, they should all pass throughout. If something breaks, stop and fix it before continuing.

## Step 1 — Understand Before Touching Anything
Read the code to be refactored. Before suggesting any changes, answer:
- What does this code currently do?
- What about it makes it hard to read, maintain, or extend?
- What is the specific goal of this refactor? (e.g., "split this large function into smaller ones", "remove duplication", "make this easier to test")

State the goal clearly and confirm with the user before proceeding.

## Step 2 — Check for Tests
Run existing tests if any (`npm test` or equivalent). Record which tests pass before you start. These are your safety net — they confirm behavior hasn't changed after each step.

If there are no tests, flag this. Refactoring without tests is higher risk. Ask if the user wants to add a minimal test before starting, or proceed with extra care.

## Step 3 — Plan the Changes
List the specific changes you intend to make, in order. Do not just describe the end state — describe each discrete step. For example:
1. Extract lines 45–62 into a function called `validateInput`
2. Move that function to a shared utilities file
3. Replace the original lines with a call to the new function

Show the plan and confirm before writing any code.

## Step 4 — Make Changes in Small Steps
Apply one change at a time. After each change:
- Verify the code still runs or compiles
- Run tests if available
- Do not proceed to the next step until the current one is stable

If something breaks, stop. Undo the last change and reassess before continuing.

## Step 5 — Review the Result
Once all changes are made, compare the before and after:
- Is the code meaningfully clearer or simpler?
- Did any behavior change unexpectedly?
- Are there any new edge cases introduced?

Run `/review` on the refactored code if a thorough check is needed.

## Step 6 — Commit
Refactors should be committed separately from feature changes or bug fixes. This keeps the git history clean and makes it easy to understand what changed and why.

Suggest using `/commit` with type `refactor:` and a message that describes what structural change was made and why.
