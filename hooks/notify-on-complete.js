/**
 * Notification hook: Send a Windows toast notification when Claude
 * wants to surface something to the user — such as needing input,
 * completing a long agentic task, or hitting an error it can't resolve.
 *
 * Uses PowerShell's Windows toast notification system.
 * Falls back to a console beep if the toast fails.
 */

const { execSync } = require("child_process");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let message = "Claude needs your attention";

  try {
    const data = JSON.parse(input);
    if (data.message) message = data.message;
  } catch (_) {}

  // Escape any single quotes in the message for PowerShell
  const safeMessage = message.replace(/'/g, "''");

  try {
    execSync(
      `powershell -WindowStyle Hidden -Command "` +
        `$xml = New-Object Windows.Data.Xml.Dom.XmlDocument; ` +
        `$xml.LoadXml('<toast><visual><binding template=""ToastText01"">` +
        `<text id=""1"">${safeMessage}</text></binding></visual></toast>'); ` +
        `[Windows.UI.Notifications.ToastNotificationManager]::` +
        `CreateToastNotifier('Claude Code').Show(` +
        `[Windows.UI.Notifications.ToastNotification]::new($xml))"`,
      { stdio: "pipe", timeout: 5000 },
    );
  } catch (_) {
    // Fallback: terminal bell
    process.stdout.write("\x07");
  }

  process.exit(0);
});
