# New Project Setup

Guide the user through setting up a new project from scratch. Follow these steps in order. Work conversationally — one question or action at a time. Do not rush ahead.

## Step 1 — Project Name
Ask the user what they want to call the project. Use kebab-case for the folder name (e.g., `my-new-project`). If their answer is not in kebab-case, show them the converted version and confirm before proceeding.

## Step 2 — Create the Folder
Create the project folder at `C:\Users\nrisa\Projects\<project-name>`. Confirm the full path with the user before creating it.

## Step 3 — Git Repository
Ask neutrally: "Should this project be tracked in a git repository?"
- If yes: run `git init`, create an appropriate `.gitignore` for the stack (ask about the stack first if unknown), and make an initial empty commit with the message `"chore: initial commit"`
- If no: note it and move on

## Step 4 — Stack
Ask: "What is this project built with?" Wait for their answer. If vague, ask a follow-up. The answer will inform the rest of setup (which `.gitignore`, which `tsconfig`, which ESLint config, etc.).

## Step 5 — Initialize the Project
Based on the stack:
- For Node/TypeScript projects: run `npm init -y`, install TypeScript (`npm install --save-dev typescript`), create a `tsconfig.json` appropriate to the project type
- Install ESLint and Prettier: `npm install --save-dev eslint prettier eslint-config-prettier`
- Create `.eslintrc.json` and `.prettierrc` with sensible defaults
- Add scripts to `package.json`: `lint`, `format`, `build`, `dev` (as appropriate)

Explain what each tool does as you install it.

## Step 6 — Project CLAUDE.md
Create a `CLAUDE.md` at the root of the new project. Ask questions one at a time in this order:
1. What is the purpose of this project? (one or two sentences)
2. Are there any folders, files, or generated artifacts that should never be modified manually?
3. Are there any architectural patterns or conventions to follow?
4. Are there any integrations (APIs, databases, external services) Claude should know about?

If any answer is vague, ask a follow-up before moving on. After gathering enough context, draft the CLAUDE.md, show it to the user, and confirm before saving.

## Step 7 — Summary
When complete, show a summary of everything that was created:
- Folder path
- Git status (initialized or not)
- Files created
- Scripts available
- What the project CLAUDE.md covers

Ask: "Is there anything you want to adjust before we start building?"
