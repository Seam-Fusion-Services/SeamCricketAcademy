# Antigravity Agent Configuration Index

> This directory configures the Antigravity AI agent for the **Seam Cricket Academy** project.
> Everything here is tracked in Git — clone the repo and the agent is fully configured.

## Architecture

```
.agent/
├── README.md                        ← You are here
│
├── rules/                           ← Always-on (injected into every conversation)
│   ├── autonomous-operations.md     ← 🔑 Self-bootstrapping & autonomous execution protocol
│   ├── project-identity.md          ← Roles, tech stack, aesthetic mandate, release context
│   ├── operating-principles.md      ← 7 non-negotiable principles
│   ├── workflow-orchestration.md    ← Planning, delivery, verification, task management, templates
│   ├── engineering-standards.md     ← Astro/Tailwind/GSAP conventions, Git hygiene, DoD
│   ├── communication.md            ← Concise, high-signal interaction style
│   └── context-and-errors.md       ← Read-before-write, error triage, rollback strategies
│
└── workflows/                       ← On-demand (triggered via /slash-commands or auto-triggered)
    ├── dev.md                       ← /dev — Start Astro dev server
    ├── build-verify.md              ← /build-verify — Production build + verify
    ├── deploy.md                    ← /deploy — Commit, push, monitor GitHub Actions
    ├── release.md                   ← /release — Tag + GitHub Release + auto-deploy
    ├── component.md                 ← /component — Scaffold new Astro component
    └── bugfix.md                    ← /bugfix — Structured bug triage and fix
```

## How It Works

| Mechanism | Location | When Used |
|-----------|----------|-----------|
| **Rules** | `.agent/rules/*.md` | Automatically injected into every Antigravity conversation |
| **Workflows** | `.agent/workflows/*.md` | On-demand via `/slash-command` or auto-triggered by the agent |
| **Copilot Instructions** | `.github/copilot-instructions.md` | Used by GitHub Copilot (separate from Antigravity) |
| **Project Context** | `PROJECT_CONTEXT.md` | Read by the agent at session start (per `autonomous-operations.md`) |
| **Design System** | `DESIGN_SYSTEM.md` | Read by the agent before any UI changes |
| **Changelog** | `CHANGELOG.md` | Read by the agent before releases and to know current version |

## Key Design Decisions

1. **Split by topic** (not one monolithic file) — easier to maintain and update individual concerns.
2. **`autonomous-operations.md` is the most important file** — it defines the self-bootstrapping protocol that makes the agent fully autonomous.
3. **Workflows auto-trigger** — the agent doesn't wait for `/slash-commands`; it follows the appropriate workflow automatically based on context.
4. **Everything is Git-tracked** — clone the repo on any machine, install Antigravity, and the agent is fully configured.

## Source

Based on the [AI Coding Agent Guidelines](https://gist.github.com/OmerFarukOruc/a02a5883e27b5b52ce740cadae0e4d60) (`claude.md`), fully adapted for:
- **Antigravity** agent platform (replacing Claude-specific patterns)
- **Astro 5.8 + Tailwind CSS 4 + GSAP** tech stack
- **Seam Cricket Academy** project conventions and "Weightless" aesthetic
