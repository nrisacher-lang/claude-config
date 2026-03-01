/**
 * GitHub MCP Server wrapper.
 *
 * Instead of storing a GitHub token in plaintext in settings.json,
 * this script retrieves it dynamically from the GitHub CLI keyring
 * each time the MCP server starts. This means:
 *
 *   - No token is stored in any config file
 *   - Token refreshes are picked up automatically
 *   - The Windows keyring remains the single source of truth
 *
 * Requires: GitHub CLI (gh) to be installed and authenticated.
 * Package:  @modelcontextprotocol/server-github (downloaded via npx)
 */

const { execSync, spawn } = require("child_process");

let token;
try {
  token = execSync("gh auth token", { stdio: "pipe" }).toString().trim();
} catch (err) {
  console.error("GitHub MCP: Could not retrieve token from GitHub CLI.");
  console.error(
    'Make sure "gh" is installed and you are logged in (run: gh auth login)',
  );
  process.exit(1);
}

if (!token) {
  console.error("GitHub MCP: GitHub CLI returned an empty token.");
  process.exit(1);
}

const server = spawn("npx", ["-y", "@modelcontextprotocol/server-github"], {
  env: { ...process.env, GITHUB_TOKEN: token },
  stdio: "inherit",
});

server.on("error", (err) => {
  console.error("GitHub MCP: Failed to start server:", err.message);
  process.exit(1);
});

server.on("exit", (code) => process.exit(code ?? 0));
