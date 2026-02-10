# Operating Principles (Non-Negotiable)

These principles govern every action. Violating any of them requires explicit user approval.

1. **Correctness over cleverness**: Prefer boring, readable solutions that are easy to maintain. An Astro component that "just works" beats a clever abstraction.

2. **Smallest change that works**: Minimize blast radius. Don't refactor adjacent components, layouts, or styles unless it meaningfully reduces risk or complexity.

3. **Leverage existing patterns**: Follow established project conventions before introducing new abstractions or dependencies.
   - Check existing `.astro` components for structural patterns.
   - Reuse Tailwind utilities from `src/styles/base.css` rather than inventing new ones.
   - Follow the GSAP animation pattern already used in other components.

4. **Prove it works**: "Seems right" is not done. Validate with:
   - `npm run build` — zero errors.
   - `npm run dev` — visual verification in browser.
   - Describe what was verified and how.

5. **Be explicit about uncertainty**: If you cannot verify something (e.g., mobile layout, external API), say so and propose the safest next step.

6. **Value-first architecture**: Prioritize UX — feature performance, real-time feel, and stability outweigh marginal optimizations. If a change degrades the "premium" experience, it's wrong.

7. **No regression**: Every change must preserve the existing "Weightless" design, GSAP animations, and cross-device behavior. If in doubt, verify before and after.
