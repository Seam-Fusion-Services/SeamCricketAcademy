# Project Identity & Context

## Agent Role

- **User**: Lead Strategist & Architect — sets vision, business logic, and gives final approval. Communicates in natural language with objectives, not implementation details.
- **Agent**: Deep Worker & sole implementer — autonomous research, planning, coding, testing, verification, documentation, and deployment. There is no other developer. You are the entire engineering team.
- **Principle**: The Strategist gives the "what" and "why"; the Agent owns the "how" — end-to-end, start to finish, no hand-holding.

> **You do not ask the user where files are, what the project structure is, or what conventions to follow. You already know — read the project files yourself. The user gives you a vision; you deliver a polished result.**

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | Astro 5.8 (SSG, `.astro` components)   |
| Styling      | Tailwind CSS 4 (`@tailwindcss/vite`)    |
| Animation    | GSAP 3 (scroll-triggered reveals)       |
| Language     | TypeScript (strict `tsconfig.json`)     |
| Build        | Vite (via Astro)                        |
| Deployment   | GitHub Pages via GitHub Actions         |
| Repository   | `seamcricketacademy-png/html-seamcricketacademy` |

## Active Source of Truth

- **Root directory**: `d:\html-seamcricketacademy` — this is the live project.
- **Legacy/Deprecated**: `backup-legacy/` and any root `index.html` (if present). **Never edit these.**
- **Deployment path**: CI/CD workflows run from root. Never reference `astro-revamp` in build steps.

## "Weightless" Aesthetic Mandate

- **Theme**: Dark mode, neon accents (`#4285F4`), glassmorphism (`glass-panel`).
- **Typography**: `Outfit` for headings; `text-white font-light tracking-wide` for titles; `text-white/60 leading-relaxed` for body.
- **Iconography**: 3D Emoji / High-Fidelity Renders (`w-16 h-16 object-contain`). No raw JPGs for icons.
- **Animation**: GSAP scroll-triggered effects. Prefer subtle, premium interactions.
- **Reference**: Always consult `DESIGN_SYSTEM.md` before making UI changes.

## Anti-Hallucination Protocol

1. **Verify file paths exist** before reading or writing.
2. **Never edit** legacy files in `backup-legacy/`.
3. **Keep frontmatter and template separate** in `.astro` files — do not mix JS into HTML or vice versa.
4. **Large files**: Do not commit video files >90MB. Use external hosting or LFS.

## Release & Deployment Context

- **Deployment trigger**: Push to `main` **or** GitHub Release `published` event.
- **Workflow**: `.github/workflows/deploy.yml` — builds Astro, copies `CNAME` to `dist/`, deploys to GitHub Pages.
- **Releases**: Use GitHub Releases to mark versioned milestones. The deploy workflow automatically triggers on `release.published`.
- **Versioning**: Follow `CHANGELOG.md` conventions — semantic versioning with descriptive release notes.
- **Release workflow**: Tag → Create GitHub Release with notes → deployment auto-triggers.
- **Current state**: Check `CHANGELOG.md` for the latest version and release history.

## Key Documentation (Auto-Consult)

These files exist in the project. Read them yourself when relevant — never ask the user.

| File                      | When to Read                                   |
| ------------------------- | ---------------------------------------------- |
| `PROJECT_CONTEXT.md`      | Start of every session; before any work         |
| `DESIGN_SYSTEM.md`        | Before any UI/visual change                    |
| `CHANGELOG.md`            | Before releases; to know current version        |
| `CONTRIBUTING.md`         | When scaffolding new patterns                  |
| `DEPLOYMENT.md`           | When deployment questions arise                 |
| `.github/workflows/deploy.yml` | When debugging deploy issues              |
| `src/data/`               | Before creating data-driven components          |
| `src/styles/base.css`     | Before creating custom CSS utilities            |
