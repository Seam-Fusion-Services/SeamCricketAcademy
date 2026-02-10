# Engineering Standards

## 1. Astro Component Discipline

Follow the established `.astro` file structure:

```astro
---
// 1. Imports
import Component from './Component.astro';

// 2. Props / Data
const { prop } = Astro.props;

// 3. Logic
const computed = doSomething();
---

<!-- 4. Template (HTML) -->
<div class="container">
  <Component />
</div>

<!-- 5. Client-side script (if needed) -->
<script>
  // Interactive / GSAP logic
</script>
```

**Rules**:
- Keep frontmatter (JS) and template (HTML) strictly separate.
- Prefer Astro's built-in features over client-side JS when possible.
- Use `client:load` or `client:visible` directives sparingly and intentionally.

## 2. Styling (Tailwind CSS 4)

- Use Tailwind utility classes. No inline styles.
- Custom utilities belong in `src/styles/base.css`.
- Use CSS variables for theme colors (`--neon`, etc.).
- Follow `DESIGN_SYSTEM.md` for component-specific patterns (`glass-panel`, spacing, colors).

## 3. Type Safety

- TypeScript is configured `strict`. Do not weaken it.
- Avoid `any` or `@ts-ignore` unless explicitly unavoidable — document the reason.
- Encode invariants with type-level validation at boundaries (props, data, API responses).

## 4. Dependency Discipline

- Do **not** add new dependencies unless:
  - The existing stack (Astro + Tailwind + GSAP + vanilla JS) cannot solve it cleanly.
  - The benefit is clear and justified in the plan.
- Prefer standard library / existing utilities first.
- If a new dependency is necessary, prefer zero-config, tree-shakeable, and well-maintained options.

## 5. Security & Privacy

- Never introduce secrets, API keys, or tokens into code, build output, or chat.
- Treat user-submitted data (contact forms) as untrusted — validate and sanitize.
- Assets in `public/` are publicly accessible — never place sensitive files there.

## 6. Performance (Pragmatic)

- Avoid premature optimization.
- **Do fix**: unoptimized images (use WebP/AVIF, `loading="lazy"`), render-blocking scripts, unnecessary client JS.
- Astro's island architecture is a strength — keep most pages zero-JS by default.
- Measure when in doubt; don't guess.

## 7. Accessibility & UX

- All images need meaningful `alt` text.
- Keyboard navigation must work for interactive elements.
- Maintain readable contrast ratios (especially with glassmorphism effects).
- Provide clear empty/error states for dynamic content.
- Prefer predictable interactions over fancy effects that confuse users.

## 8. Git & Change Hygiene

- Keep commits **atomic** and describable. Avoid "misc fixes" bundles.
- Don't rewrite history unless explicitly requested.
- Don't mix formatting-only changes with behavioral changes.
- Generated files (`dist/`, `.astro/`): never commit these — they're in `.gitignore`.
- Commit message format: `type: brief description` (e.g., `feat:`, `fix:`, `style:`, `chore:`).

## 9. Definition of Done

A task is done when:
- [ ] Behavior matches acceptance criteria.
- [ ] `npm run build` passes (or documented reason it wasn't run).
- [ ] The code follows existing conventions and `DESIGN_SYSTEM.md`.
- [ ] A short verification story exists: "what changed + how we know it works."
- [ ] `CHANGELOG.md` is updated for user-facing changes.
