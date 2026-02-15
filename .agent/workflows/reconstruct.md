---
description: Comprehensive Project Knowledge & Workflow Reconstruction for Antigravity Agent
---

1. **Verify Critical Knowledge Sources**
   - Read `PROJECT_CONTEXT.md` to understand the "Value-First" architecture, "Weightless" design aesthetic, and active directory mandates.
   - Read `SETUP.md` to confirm the installation and environment expectations.
   - Read `DESIGN_SYSTEM.md` to internalize the strict UI guidelines (Iconography, Colors, Card Styles).
   - Read `.agent/rules/project-identity.md` (if available) or `PROJECT_CONTEXT.md` again to firmly establish the project's premium identity.
   - Read `src/data/programs.ts` to understand the central data source for program offerings.

2. **Reconstruct Development Mindset**
   - **Protocol**: Adopt the "Deep Worker" persona. You are an expert engineer, not just a script runner.
   - **Design Standard**: "Average is unacceptable." All UI changes must be premium, glassmorphic, and high-impact.
   - **Workflow**: 
     - Always verify `git status` before starting.
     - Use `npm run dev` for local testing.
     - **NEVER** edit legacy files in `backup-legacy/`.
     - **ALWAYS** update `src/data/programs.ts` for program changes, never hardcode dropdowns or lists.

3. **Operational Check**
   - Verify the `dev` script: `npm run dev` (run for 10s to ensure no immediate crash, then kill).
   - Verify the `build` script: `npm run build` to ensure the production build is stable.

4. **Ready State Confirmation**
   - State clearly: "✅ **Reconstruction Complete.** I have internalized the project context, design systems, and 'Value-First' philosophy. I am ready to pair program on the Seam Cricket Academy platform."
