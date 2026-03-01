# Code Review

Do a thorough self-review of recently written or modified code before calling it done. The goal is to catch problems before they become bugs, security issues, or technical debt.

Work through each phase in order. Be specific — reference actual file names, line numbers, and variable names in your findings.

## Phase 1 — Correctness
Read the code carefully and ask:
- Does it do what it's supposed to do?
- Are there any edge cases that aren't handled? (empty input, null/undefined values, empty arrays, very large numbers, special characters)
- Are there any off-by-one errors, incorrect comparisons, or wrong operators?
- Does async code handle the case where a promise rejects?

## Phase 2 — Security
Check for common vulnerabilities:
- Is any user input used in a database query, file path, shell command, or HTML output without being sanitized first?
- Are secrets or API keys hardcoded anywhere? (should always be in environment variables)
- Are there any places where errors might expose internal details to the user?
- Are file or network operations appropriately restricted?

Flag anything suspicious — even if unsure. It's better to raise a false alarm than miss a real issue.

## Phase 3 — Readability
Ask:
- Would someone unfamiliar with this code understand what each function does from its name alone?
- Are variable names descriptive? (avoid `data`, `temp`, `x`, `res` unless the scope is very small)
- Is any logic complex enough that a comment would genuinely help? (comment the *why*, not the *what*)
- Are there any functions doing too many things at once that should be split up?

## Phase 4 — Consistency with Project Conventions
Check:
- Does this code follow the patterns already established in the project? (naming, folder structure, error handling style)
- Is it consistent with what the project CLAUDE.md specifies?
- Are imports organized consistently?

## Phase 5 — Summary
Present findings as a prioritized list:
- **Must fix** — bugs, security issues, or broken logic
- **Should fix** — readability problems, inconsistencies, missing edge cases
- **Consider** — optional improvements that would make the code better but aren't urgent

For each item, explain what the problem is and suggest a specific fix. Do not apply fixes automatically — present them and let the user decide what to act on.

After review, ask: "Would you like me to apply any of these changes?"
