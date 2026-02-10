---
description: Scaffold a new Astro component following project conventions
---

## Steps

1. **Ask the user** for the component name and purpose (if not already provided).

2. Create the component file at `src/components/{ComponentName}.astro` using the established structure:
   ```astro
   ---
   // Imports
   
   // Props interface
   interface Props {
     // Define props
   }
   
   // Logic
   const { } = Astro.props;
   ---
   
   <!-- Template -->
   <section>
     <!-- Component markup using Tailwind utilities -->
     <!-- Follow DESIGN_SYSTEM.md: glass-panel, neon accents, dark theme -->
   </section>
   
   <!-- Client-side script (if interactive) -->
   <script>
     // GSAP animations or interactivity
   </script>
   ```

3. Before writing the component:
   - Check `DESIGN_SYSTEM.md` for applicable patterns.
   - Check `src/styles/base.css` for existing utilities.
   - Review a similar existing component for the project's conventions.

4. After creation:
   - Import and use the component in the relevant page or layout.
   - Run `npm run dev` and verify it renders correctly.
   - Check that it matches the "Weightless" aesthetic.

5. Report: Component created, where it's used, and visual verification status.
