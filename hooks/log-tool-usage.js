/**
 * PostToolUse hook: Log every file Claude edits to a session log.
 *
 * Writes a timestamped record of every Write, Edit, or MultiEdit to
 * ~/.claude/logs/tool-usage.log. This gives you an audit trail —
 * useful for understanding what changed in a session and when.
 *
 * Log format:
 *   [2025-01-15 14:32:01] Write → src/components/Button.tsx
 *
 * The log file grows over time. Rotate or clear it manually as needed.
 */

const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(
  process.env.USERPROFILE || process.env.HOME,
  ".claude",
  "logs",
);
const LOG_FILE = path.join(LOG_DIR, "tool-usage.log");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  try {
    const data = JSON.parse(input);
    const toolName = data.tool_name || "UnknownTool";
    const filePath =
      data.tool_input?.file_path || data.tool_input?.path || null;

    if (!filePath) process.exit(0);

    // Ensure log directory exists
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
    const entry = `[${timestamp}] ${toolName} → ${filePath}\n`;

    fs.appendFileSync(LOG_FILE, entry, "utf8");
  } catch (_) {
    // Never block Claude due to a logging error
  }
  process.exit(0);
});
