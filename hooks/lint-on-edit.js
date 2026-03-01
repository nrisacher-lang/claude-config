/**
 * PostToolUse hook: Run ESLint after file edits.
 *
 * Runs after prettier-format.js in the PostToolUse chain.
 * Only lints files in projects that have ESLint configured —
 * if no eslint config is found, it skips silently.
 *
 * Exit code 0 always — lint errors are reported but never block Claude.
 * The goal is visibility, not obstruction.
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const LINTABLE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
]);

const ESLINT_CONFIG_FILES = [
  ".eslintrc.json",
  ".eslintrc.js",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc",
  "eslint.config.js",
  "eslint.config.mjs",
];

function findProjectRoot(filePath) {
  let dir = path.dirname(filePath);
  while (dir !== path.parse(dir).root) {
    if (fs.existsSync(path.join(dir, "package.json"))) return dir;
    dir = path.dirname(dir);
  }
  return null;
}

function hasEslintConfig(projectRoot) {
  return ESLINT_CONFIG_FILES.some((f) =>
    fs.existsSync(path.join(projectRoot, f)),
  );
}

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path;

    if (!filePath) process.exit(0);

    const ext = path.extname(filePath).toLowerCase();
    if (!LINTABLE_EXTENSIONS.has(ext)) process.exit(0);

    const projectRoot = findProjectRoot(filePath);
    if (!projectRoot || !hasEslintConfig(projectRoot)) process.exit(0);

    const result = execSync(`npx eslint "${filePath}" --format compact 2>&1`, {
      cwd: projectRoot,
      stdio: "pipe",
    }).toString();

    if (result.trim()) {
      console.error("ESLint issues found:");
      console.error(result);
    }
  } catch (err) {
    // ESLint exited non-zero (found errors) — print output but don't block
    if (err.stdout) console.error(err.stdout.toString());
  }
  process.exit(0);
});
