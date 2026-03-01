# Scaffolding Audit and Cleanup

Audit the current project's configuration files for staleness, inconsistencies, missing best practices, or clutter. Propose changes clearly — do not apply anything without confirmation.

## Step 1 — Inventory
Read and list all config files present in the project root:
- `package.json`
- `tsconfig.json` (and any `tsconfig.*.json` variants)
- `.eslintrc.json` / `eslint.config.js` / `.eslintrc.js`
- `.prettierrc` / `prettier.config.js`
- `.gitignore`
- `.env.example` (if present)
- Any other config files (`.nvmrc`, `jest.config.ts`, `vite.config.ts`, etc.)

List what you found before proceeding.

## Step 2 — package.json Audit
Check for:
- Missing or outdated `scripts` (look for `lint`, `format`, `build`, `dev`, `test`)
- Dependencies that appear unused (flag only, do not remove without confirmation)
- `devDependencies` that might be in `dependencies` by mistake (or vice versa)
- Missing `engines` field (specifies which Node version this project requires)
- Outdated package versions (note them, do not auto-upgrade)

## Step 3 — TypeScript Config Audit
Check `tsconfig.json` for:
- `strict: true` — this is the industry standard; flag if missing and explain why it matters
- Correct `target` for the project type (e.g., `ES2020` for Node, `ES2015`+ for browser)
- `outDir` and `rootDir` set correctly
- Any deprecated or conflicting options

## Step 4 — ESLint Audit
Check for:
- Rules that conflict with Prettier (these cause fights between the two tools — `eslint-config-prettier` should be last in `extends`)
- Missing recommended rulesets for the project type
- Any rules disabled with `// eslint-disable` comments — flag these for review

## Step 5 — Prettier Audit
Check for:
- Existence of a `.prettierrc` or `prettier.config.js`
- Consistent settings with the rest of the project (tab width, single vs double quotes, trailing commas)
- Whether Prettier is integrated into ESLint or run separately

## Step 6 — .gitignore Audit
Check for:
- `node_modules/` ignored
- Build output directories ignored (`dist/`, `build/`, `.next/`, etc.)
- Environment files ignored (`.env`, `.env.local`, `.env.*.local`)
- OS and editor artifacts ignored (`.DS_Store`, `Thumbs.db`, `.vscode/` if not intentionally shared)

## Step 7 — Propose Changes
Present a clear list of proposed changes grouped by file. For each change, explain:
- What is wrong or missing
- What the fix is
- Why it matters

Format as a checklist. Ask the user to approve each group before applying.

## Step 8 — Apply and Confirm
Apply only the approved changes. After each file is updated, show a diff of what changed.

When done, suggest running `npm run lint` and `npm run build` to verify nothing broke.
