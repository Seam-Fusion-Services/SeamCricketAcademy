---
description: Deploy changes to production (with strict governance)
---

1. **Verify State**
   - Check `git status` (Must be clean).
   - Check `git branch --show-current` (Must be `main`).
   - Run `gh pr list --state open` (Ensure no open PRs conflicting).

2. **Pull Updates**
   - `git pull`

3. **Verify Build**
   - `npm run build` (Husky check ensures this, but verify again).
   
4. **Approval Check**
   - Ask: *"About to push to production. Are you sure?"*
   - **STOP**. Wait for explicit confirmation.

5. **Deploy**
   - Run `git push origin main`
   - Report: "✅ Deployed to version [hash]. Check live site."
