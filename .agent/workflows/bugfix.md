---
description: Structured bug investigation and fix using triage checklist
---

## Steps

1. **Document the bug** using this template:
   - **Repro steps**: (What triggers the issue)
   - **Expected vs actual**: (What should happen vs what does)
   - **Environment**: Browser, viewport, OS

2. **Reproduce reliably**:
   - Run `npm run dev` and navigate to the affected page.
   - Open browser DevTools and check the Console for errors.
   - If a build issue, run `npm run build` and capture the output.

3. **Localize the failure** — identify which layer:
   - **Component**: Check the `.astro` file's frontmatter and template.
   - **CSS/Tailwind**: Inspect the element and check applied classes.
   - **GSAP**: Check scroll triggers, timeline definitions, selectors.
   - **Build tooling**: Check Vite errors, Astro config, plugin issues.
   - **Deployment**: Check `.github/workflows/deploy.yml` and Actions logs.

4. **Reduce to minimal case**: Remove adjacent complexity to isolate the root cause.

5. **Fix root cause** (not symptoms):
   - Make the smallest change that resolves the issue.
   - Ensure the fix follows `DESIGN_SYSTEM.md` and existing patterns.

6. **Verify end-to-end**:
   - Confirm the original bug is resolved.
   - Run `npm run build` to ensure no regressions.
   - Visually confirm in the browser.

7. **Report** using the bugfix template:
   ```
   - Repro steps: ...
   - Root cause: ...
   - Fix: ...
   - Verification performed: ...
   - Risk/rollback notes: ...
   ```
