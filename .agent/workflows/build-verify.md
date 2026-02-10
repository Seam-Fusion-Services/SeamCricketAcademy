---
description: Run a production build and verify zero errors
---

## Steps

// turbo
1. Run the Astro production build:
   ```powershell
   cd d:\html-seamcricketacademy && npm run build
   ```

2. Check for errors in the build output. Expected: "Complete!" with no errors.

// turbo
3. Verify the `dist/` directory was created and contains `index.html`:
   ```powershell
   Get-ChildItem d:\html-seamcricketacademy\dist -Recurse | Measure-Object | Select-Object -ExpandProperty Count
   ```

4. Report:
   - Build status (pass/fail).
   - Number of pages generated.
   - Any warnings or errors.
   - Total file count in `dist/`.
