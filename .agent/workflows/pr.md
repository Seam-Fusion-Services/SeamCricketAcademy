---
description: Create a GitHub Pull Request with smart description & stealth mode
---

1. Preparation
   - Check status: `git status` (Ensure working tree is clean or commit changes).
   - Check current branch: `git branch --show-current`. (Must NOT be `main`).
   - **Context Check**: Run `gh issue list --limit 5` and `gh pr list --limit 5`. Ensure no overlap.

2. Push Branch
   - Push current HEAD: `git push origin HEAD --force-with-lease`

3. Generate Stealth PR Details
   - **Analyze Changes**: `git diff main...HEAD --stat`
   - **Formulate Title & Body**: Professional, senior engineer tone. NO AI mentions.

4. Create PR on GitHub
   - Run `gh pr create --web` (or via flag).
   
5. **STOP**:
   - Report: "✅ PR Created: [Link]. Ready for your review."
   - **DO NOT MERGE**. Wait for user instruction.

6. Post-Merge Cleanup (Run ONLY when user says "Merge PR"):
   - `gh pr merge <PR-ID> --merge --delete-branch`
   - `git checkout main`
   - `git pull`
   - Report: "✅ Merged and synced."
