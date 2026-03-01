/**
 * PostToolUse hook: Auto-format with Prettier after file edits.
 *
 * Claude Code passes information about the tool call as JSON on stdin.
 * We extract the file path, check if it's a file type Prettier supports,
 * and run Prettier on it if so.
 *
 * Exit code 0 = success (hook ran fine, proceed normally)
 * Any error is swallowed silently so a missing Prettier install never
 * blocks Claude from editing files.
 */

const { execSync } = require('child_process');
const path = require('path');

const FORMATTABLE_EXTENSIONS = new Set([
  '.ts', '.tsx', '.js', '.jsx',
  '.json', '.jsonc',
  '.css', '.scss',
  '.html',
  '.md', '.mdx',
  '.yaml', '.yml',
]);

let input = '';
process.stdin.on('data', chunk => (input += chunk));
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path;

    if (!filePath) process.exit(0);

    const ext = path.extname(filePath).toLowerCase();
    if (!FORMATTABLE_EXTENSIONS.has(ext)) process.exit(0);

    execSync(`npx prettier --write "${filePath}" --log-level silent`, {
      stdio: 'pipe',
    });
  } catch (_) {
    // Never block Claude from editing files due to a formatting error
  }
  process.exit(0);
});
