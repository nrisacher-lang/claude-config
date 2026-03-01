/**
 * PreToolUse hook: Block writes to sensitive files.
 *
 * Checks the target file path against a list of patterns that indicate
 * sensitive content (env files, credentials, keys). If matched, exits
 * with code 2, which tells Claude Code to block the tool call entirely
 * and show the error message to the user.
 *
 * Exit code 0 = allow the action
 * Exit code 2 = block the action and show the message below
 */

const SENSITIVE_PATTERNS = [
  /\.env$/,           // .env
  /\.env\./,          // .env.local, .env.production, etc.
  /credentials/i,     // credentials.json, aws_credentials, etc.
  /secrets/i,         // secrets.json, secrets.yaml, etc.
  /\.pem$/,           // SSL certificates
  /\.key$/,           // private key files
  /id_rsa/,           // SSH private keys
  /id_ed25519/,       // SSH private keys (modern format)
  /\.pfx$/,           // Windows certificate files
];

let input = '';
process.stdin.on('data', chunk => (input += chunk));
process.stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const filePath = data.tool_input?.file_path || data.tool_input?.path || '';

    const matched = SENSITIVE_PATTERNS.find(pattern => pattern.test(filePath));

    if (matched) {
      console.error(`BLOCKED: "${filePath}" matches sensitive file pattern.`);
      console.error('If you intentionally want to edit this file, confirm explicitly and I will ask for your approval before proceeding.');
      process.exit(2);
    }
  } catch (_) {
    // If we can't parse the input, allow the action (fail open)
  }
  process.exit(0);
});
