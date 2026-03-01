# Systematic Debugging

Work through a bug methodically. Do not jump to solutions. Each phase must complete before moving to the next. Explain your reasoning at every step so the user builds intuition for the process.

## Phase 1 — Understand the Problem
Before touching any code, ask:
1. What is the expected behavior?
2. What is the actual behavior?
3. When did this start? (always, after a specific change, intermittently?)
4. Can you reproduce it consistently? If yes, what are the exact steps?

Do not proceed until you can clearly state the bug in one sentence.

## Phase 2 — Gather Evidence
Look at:
- The full error message and stack trace (if any) — read it top to bottom, the first line is usually most important
- Recent changes to the codebase (`git log --oneline -10`, `git diff`)
- Relevant log output
- The specific file and line number the error points to

Summarize what the evidence tells you before drawing conclusions.

## Phase 3 — Form a Hypothesis
Based on the evidence, state one specific hypothesis about the cause. For example: "The function is receiving undefined because the async call hasn't resolved before it's used."

Do not form multiple hypotheses at once — pick the most likely one and test it first.

## Phase 4 — Test the Hypothesis
Add targeted logging, read the relevant code carefully, or write a small isolated test. The goal is to confirm or disprove the hypothesis — not to fix anything yet.

Report back what the test revealed.

## Phase 5 — Fix
Only now write the fix. Keep it as small and targeted as possible — change only what the hypothesis identified. Avoid fixing "while you're in there" — unrelated changes belong in a separate commit.

Explain what the fix does and why it addresses the root cause.

## Phase 6 — Verify
- Confirm the original bug no longer reproduces
- Check that nothing adjacent broke
- If tests exist, run them

If the fix didn't work, return to Phase 3 with a new hypothesis. Do not layer fixes on top of each other.

## Phase 7 — Document
Before closing out, note:
- What the root cause was
- What the fix was
- Whether a pattern or habit change would prevent this class of bug in the future

Suggest committing with `/commit` now that the fix is confirmed.
