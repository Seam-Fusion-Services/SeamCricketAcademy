---
description: Create a new feature branch and start development
---

1. Validate Input
   - If no arguments provided, ask: "What should I name this feature branch? (e.g., `feat/calendar-sync`, `fix/navbar-overlap`)"
   - If user says "/feature calendar-sync", parse "calendar-sync".
   - **Enforce naming**: `feat/` for features, `fix/` for bug fixes, `chore/` for maintenance.

2. Create Branch
   - Run `git switch -c feat/<name>` (or `fix/<name>`).
   // turbo
   
3. Confirm Setup
   - Verify branch created: `git branch --show-current`
   - Report: "✅ Feature branch `feat/<name>` created. Ready for changes."
