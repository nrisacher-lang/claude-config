# Environment Variable Setup

Audit, document, and validate environment variables for the current project. The goal is to ensure every required variable is defined, documented in `.env.example`, and protected from accidental exposure.

## Step 1 — Check What Exists
Look for:
- An existing `.env` file (do not read or display its contents — it may contain secrets)
- An existing `.env.example` file
- Whether `.env` is listed in `.gitignore`

Report what was found before proceeding.

## Step 2 — Find All Variable References in Code
Search the codebase for all uses of `process.env.` to identify every variable the code expects. List them all — including ones that already have defaults in code (e.g., `process.env.PORT || 3000`).

Group them by category if possible (e.g., database, auth, external APIs, app config).

## Step 3 — Cross-Reference Against .env
Compare the variables found in code against what's defined in `.env`:
- Flag any variable the code references that is NOT in `.env` — these are likely to cause runtime errors
- Flag any variable in `.env` that the code never references — these may be leftover from old features
- Do not display the actual values from `.env` at any point

## Step 4 — Update or Create .env.example
The `.env.example` file is a safe, committed template. It has the same variable names but placeholder values — never real secrets.

Create or update `.env.example` to include every variable found in Step 2. Use descriptive placeholders:
```
DATABASE_URL=postgres://localhost:5432/your_database_name
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
NODE_ENV=development
```

Group related variables with comments:
```
# Database
DATABASE_URL=...

# External APIs
OPENAI_API_KEY=...

# App Config
PORT=3000
NODE_ENV=development
```

Show the proposed `.env.example` to the user and confirm before writing.

## Step 5 — Check .gitignore
Verify that `.env` (and any variants like `.env.local`, `.env.production`) are listed in `.gitignore`. If not, add them and explain why this is critical.

## Step 6 — Check for Hardcoded Secrets
Scan the codebase for patterns that suggest hardcoded secrets:
- Strings that look like API keys (long alphanumeric strings assigned to variables with names like `key`, `secret`, `token`, `password`)
- Anything that looks like a URL with credentials embedded (e.g., `postgres://user:password@host`)

If found, flag them clearly and recommend moving them to `.env`.

## Step 7 — Summary
Report:
- Variables confirmed present and referenced
- Variables missing from `.env` (action required)
- Variables unreferenced in code (consider cleaning up)
- Whether `.env.example` is up to date
- Whether `.gitignore` protects sensitive files

Ask: "Would you like to add any missing variables to `.env` now?"
