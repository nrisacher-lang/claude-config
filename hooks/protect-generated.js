/**
 * PreToolUse hook: Block writes to generated or build output files.
 *
 * Generated files are created by tools (compilers, code generators, package
 * managers) and should never be edited by hand. Editing them is pointless
 * because the next build will overwrite your changes, and it can introduce
 * subtle bugs that are very hard to trace.
 *
 * Exit code 0 = allow the action
 * Exit code 2 = block the action and show the message below
 */

const path = require("path");

// Folder names that indicate generated/build output
const GENERATED_DIRS = [
  "node_modules",
  "dist",
  "build",
  ".next",
  ".nuxt",
  "out",
  ".svelte-kit",
  "__pycache__",
  ".turbo",
  ".vercel",
  "coverage",
  ".nyc_output",
];

// Specific file names that are always generated
const GENERATED_FILES = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "bun.lockb",
];

// File extensions that are typically generated output
const GENERATED_EXTENSIONS = new Set([
  ".min.js",
  ".min.css",
  ".map", // source maps
  ".d.ts", // TypeScript declaration files (usually generated)
  ".js.map",
  ".css.map",
]);

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || data.tool_input?.path || "";

    if (!filePath) process.exit(0);

    const normalizedPath = filePath.replace(/\\/g, "/");
    const fileName = path.basename(filePath);
    const ext = fileName.includes(".min.")
      ? "." + fileName.split(".").slice(-2).join(".")
      : path.extname(filePath);

    // Check if the path contains a generated directory
    const inGeneratedDir = GENERATED_DIRS.some(
      (dir) =>
        normalizedPath.includes(`/${dir}/`) ||
        normalizedPath.includes(`/${dir}`),
    );

    // Check if it's a known generated file
    const isGeneratedFile = GENERATED_FILES.includes(fileName);

    // Check if it has a generated extension
    const hasGeneratedExt = GENERATED_EXTENSIONS.has(ext);

    if (inGeneratedDir || isGeneratedFile || hasGeneratedExt) {
      const reason = inGeneratedDir
        ? `it is inside a generated/build directory`
        : isGeneratedFile
          ? `it is a lock file managed by the package manager`
          : `it appears to be a generated output file`;

      console.error(`BLOCKED: "${fileName}" was not edited because ${reason}.`);
      console.error(
        "If you need to change this, modify the source files that generate it instead.",
      );
      process.exit(2);
    }
  } catch (_) {
    // Fail open — if we can't parse, allow the action
  }
  process.exit(0);
});
