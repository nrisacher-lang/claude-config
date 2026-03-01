# Pull Request Preparation

Prepare a branch for a pull request. Walk through a structured checklist to ensure the work is clean, complete, and clearly described before it gets merged.

A pull request (PR) is how you formally propose merging your branch into another (usually `main`). Even working solo, PRs are a good habit — they create a record of what changed and why, and give you a moment to review your own work before it becomes permanent.

## Step 1 — Understand the Scope
Run `git log main..HEAD --oneline` to see all commits on this branch that aren't on main. Show them to the user and ask: "Does this list represent everything you intended to include in this PR?"

If commits are missing or extra files are changed unexpectedly, flag it before continuing.

## Step 2 — Clean Up Commit History
Review the commits:
- Are the messages clear and descriptive? (Conventional Commits format: `feat:`, `fix:`, `chore:`, etc.)
- Are there any "WIP", "test", "asdf", or otherwise meaningless commit messages?
- Are there commits that should be combined because they represent one logical change?

If cleanup is needed, explain the options (amend, rebase) and ask the user how they want to handle it. Do not rewrite history without confirmation.

## Step 3 — Check for Debug Artifacts
Search the changed files for things that shouldn't go into a PR:
- `console.log` statements (unless the project intentionally uses them for logging)
- Commented-out code blocks
- TODO comments added during this work (either resolve them or create a tracked issue)
- Hardcoded test values or placeholder strings

List any found and ask whether to remove them before the PR.

## Step 4 — Verify Tests Pass
If the project has a test script (`npm test` or similar), run it and report the result. A PR should not be opened with failing tests. If tests fail, suggest running `/debug` before continuing.

## Step 5 — Run Lint and Format
Run `npm run lint` and `npm run format` (or equivalent). Fix any errors. Formatting issues in a PR are noise — they distract reviewers from the actual logic changes.

## Step 6 — Review the Diff
Run `git diff main..HEAD` and read through the full set of changes. Look for:
- Anything that looks unintentional
- Any file that changed but shouldn't have
- Any sensitive information (API keys, passwords, personal data)

Show a summary of files changed and ask: "Does anything here look unexpected?"

## Step 7 — Draft the PR Description
A good PR description answers three questions:
1. **What changed?** — a brief summary of the work
2. **Why?** — the motivation or problem being solved
3. **How to test it?** — steps a reviewer could follow to verify it works

Draft the description using this format:
```
## Summary
[1-3 bullet points describing what changed]

## Why
[The motivation — what problem does this solve or what feature does it add?]

## Test Plan
[Steps to verify the change works as expected]
```

Show the draft to the user and confirm before using it.

## Step 8 — Final Checklist
Before opening the PR, confirm:
- [ ] Commits are clean and well-described
- [ ] No debug artifacts or commented-out code
- [ ] Tests pass
- [ ] Lint and format pass
- [ ] Diff looks as expected
- [ ] PR description is clear

If all checks pass, ask: "Ready to push and open the PR?"

If yes, push the branch (`git push -u origin <branch-name>`) and open the PR using `gh pr create` with the drafted description.
