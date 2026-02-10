---
description: Git commit, push to main, and monitor GitHub Actions deployment
---

## Steps

1. First, run the `/build-verify` workflow to ensure the build passes.

// turbo
2. Check git status for changed files:
   ```powershell
   cd d:\html-seamcricketacademy && git status --short
   ```

3. **Ask the user** for the commit message, or use the provided one. Stage and commit:
   ```powershell
   cd d:\html-seamcricketacademy && git add -A && git commit -m "type: description"
   ```

4. Push to `main`:
   ```powershell
   cd d:\html-seamcricketacademy && git push origin main
   ```

5. Report:
   - Commit hash.
   - Files changed.
   - Push status.
   - Remind the user to check GitHub Actions: https://github.com/seamcricketacademy-png/html-seamcricketacademy/actions

> [!WARNING]
> Never force-push or rewrite history without explicit user approval.
