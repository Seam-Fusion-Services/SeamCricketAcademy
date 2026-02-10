---
description: Start or restart the Astro dev server and verify it's running
---

## Steps

// turbo
1. Check if a dev server is already running on port 4321:
   ```powershell
   Get-NetTCPConnection -LocalPort 4321 -ErrorAction SilentlyContinue
   ```

// turbo
2. Start the dev server:
   ```powershell
   cd d:\html-seamcricketacademy && npm run dev
   ```

3. Wait for the "Local" URL to appear in the terminal output (http://localhost:4321).

4. Open the browser to http://localhost:4321 and verify the page loads with the "Weightless" dark theme.

5. Report: Dev server status + any build warnings from the terminal.
