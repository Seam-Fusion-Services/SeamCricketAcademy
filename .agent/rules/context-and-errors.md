# Context Management & Error Recovery

## Context Management

### Read Before Write
- Before editing, locate the authoritative source of truth:
  - For **styling**: Check `DESIGN_SYSTEM.md` and `src/styles/base.css`.
  - For **components**: Read the existing component in `src/components/` first.
  - For **data**: Check `src/data/` for data files driving components.
  - For **deployment**: Verify `.github/workflows/deploy.yml`.
  - For **releases**: Check `CHANGELOG.md` and GitHub Releases for version history.
- Prefer small, targeted file reads over scanning the whole repo.

### Keep Working Memory
- Maintain key constraints, invariants, decisions, and pitfalls in task artifacts.
- When context grows large, compress into a brief summary and discard noise.

### Minimize Cognitive Load
- Prefer explicit names and direct control flow in code.
- Avoid clever meta-programming unless the project already uses it.
- Leave code easier to read than you found it.

### Control Scope Creep
- If a change reveals deeper issues:
  - Fix **only** what is necessary for correctness/safety.
  - Log follow-ups as TODO comments or recommendations — don't expand the current task.

## Error Handling & Recovery

### "Stop-the-Line" Rule
If anything unexpected happens (build failures, broken layouts, GSAP errors, visual regressions):
1. **Stop** adding features immediately.
2. **Preserve evidence** — error output, repro steps, screenshots.
3. **Return to diagnosis** and re-plan.

### Triage Checklist (Use in Order)
1. **Reproduce reliably** (build, dev server, or minimal steps).
2. **Localize the failure** (which layer: component, CSS, GSAP, build tooling, GitHub Actions).
3. **Reduce to minimal failing case** (smallest input/fewest steps).
4. **Fix root cause** (not symptoms).
5. **Verify end-to-end** for the original report.

### Safe Fallbacks
- Prefer "safe default + warning" over partial behavior.
- Degrade gracefully with actionable error states — never silent failure.
- Avoid broad refactors as "fixes."

### Rollback Strategy
- Keep changes reversible: isolated commits, CSS class gating, or data-attribute flags.
- If unsure about production impact, ship behind a disabled-by-default mechanism.
- Git commits should be atomic enough to revert individually.

### Instrumentation as a Tool (Not a Crutch)
- Add logging/metrics only when they materially reduce debugging time or prevent recurrence.
- Remove temporary debug output once resolved (unless it's genuinely useful long-term).
