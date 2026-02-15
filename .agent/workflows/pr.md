---
description: Create a GitHub Pull Request with smart description & stealth mode
---

1. Preparation
   - Check status: `git status` (Ensure working tree is clean or commit changes).
   - Check current branch: `git branch --show-current`. (Must NOT be `main`).

2. Push Branch (If needed)
   - Push current HEAD: `git push origin HEAD --force-with-lease`

3. Generate Stealth PR Details
   - **Analyze Changes**: `git diff main...HEAD --stat` and `git log main...HEAD --oneline`
   - **Formulate Title**: Conventional Commit style (e.g., `feat: integrate stripe payment gateway`)
   - **Formulate Body**:
     - **Summary**: Concise description of *what* changed and *why*.
     - **Key Changes**: Bullet points of major diffs.
     - **Verification**: How to test (e.g., "Tested checkout flow on localhost").
     - **Stealth Constraint**: **NEVER** mention "AI", "LLM", "Agent", or "Antigravity". Write as a senior engineer.

4. Create PR on GitHub
   - Run `gh pr create --title "<Generated Title>" --body "<Generated Body>" --web`
   - Wait for browser confirmation or output link.

5. Update Changelog (Pre-merge step)
   - Read `CHANGELOG.md`
   - Append new entry under "Unreleased" or create new version header if it's a release PR.
   - Commit changelog change: `git commit -am "docs: update changelog"`
   - Push again: `git push origin HEAD`

6. Final Confirmation
   - Report: "✅ PR Created: [Link]. Ready for review/merge."
