---
description: Create a GitHub Release with version tag and deployment trigger
---

## Steps

1. **Determine the version** from `CHANGELOG.md`:
   - Read the latest entry to identify the current version.
   - If this is a new release, determine the next version (semver: major.minor.patch).

// turbo
2. Check current tags:
   ```powershell
   cd d:\html-seamcricketacademy && git tag -l --sort=-creatordate | Select-Object -First 5
   ```

3. **Ask the user** for:
   - The version number (e.g., `v2.3.0`) — or propose one based on CHANGELOG.
   - Release title — or generate from the latest CHANGELOG entry.
   - Pre-release? (yes/no)

4. Ensure the `main` branch is clean and pushed:
   ```powershell
   cd d:\html-seamcricketacademy && git status --short
   ```

5. Update `CHANGELOG.md` with today's date if not already done.

6. Create and push the tag:
   ```powershell
   cd d:\html-seamcricketacademy && git tag -a v{VERSION} -m "Release v{VERSION}: {TITLE}"
   cd d:\html-seamcricketacademy && git push origin v{VERSION}
   ```

7. Create the GitHub Release (uses `gh` CLI if available, otherwise instruct user):
   ```powershell
   gh release create v{VERSION} --title "v{VERSION}: {TITLE}" --notes "{CHANGELOG_ENTRY}" --repo seamcricketacademy-png/html-seamcricketacademy
   ```

8. Report:
   - Tag created + pushed.
   - GitHub Release URL.
   - Deployment auto-triggered (the `deploy.yml` workflow fires on `release.published`).
   - Remind user to check: https://github.com/seamcricketacademy-png/html-seamcricketacademy/actions

> [!IMPORTANT]
> The deploy workflow in `.github/workflows/deploy.yml` triggers on `release.published`.
> Creating a release automatically deploys to GitHub Pages — no separate push needed.
