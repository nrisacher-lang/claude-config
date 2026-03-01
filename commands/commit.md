# Git Commit

Create a clean, well-described git commit. Follow Conventional Commits format. Work through this step by step.

## Step 1 — Check What's Changed
Run `git status` and `git diff` to see all modified, added, and deleted files. Show a summary to the user so they know exactly what will be included.

## Step 2 — Confirm Staging
Ask the user which files to include. Default to all changed files unless told otherwise.
- Never stage `.env` files, credential files, or anything that looks like it contains secrets
- If you see any suspicious files, flag them before staging

Run `git add` for the confirmed files.

## Step 3 — Draft the Commit Message
Use the Conventional Commits format:
```
<type>(<optional scope>): <short description>

<optional body — what changed and why>
```

**Types:**
- `feat` — a new feature
- `fix` — a bug fix
- `chore` — maintenance (dependencies, config, tooling)
- `docs` — documentation only
- `refactor` — code restructured without behavior change
- `style` — formatting only (no logic change)
- `test` — adding or updating tests

**Rules:**
- First line under 72 characters
- Use present tense ("add button" not "added button")
- Body explains *why*, not just *what* (the diff already shows what)

Show the drafted message to the user and explain your reasoning for the type you chose.

## Step 4 — Confirm and Commit
Wait for the user to approve or adjust the message. Once confirmed, run the commit.

Show the result of `git log --oneline -3` so the user can see the commit landed correctly.
