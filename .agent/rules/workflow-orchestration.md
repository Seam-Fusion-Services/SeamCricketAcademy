# Workflow Orchestration

## 1. Plan Mode Default

- Enter plan mode for any non-trivial task (3+ steps, multi-file change, architectural decision, visual redesign).
- Include verification steps **in the plan** — not as an afterthought.
- If new information invalidates the plan: **stop**, update the plan, then continue.
- Write a crisp spec first when requirements are ambiguous (inputs, outputs, edge cases, success criteria).

## 2. Subagent Strategy (Parallelize Intelligently)

- Use subagents / parallel tool calls to keep the main context clean and to parallelize:
  - Repo exploration, pattern discovery, test failure triage, dependency research, risk review.
- Give each subagent one focused objective and a concrete deliverable:
  - "Find where X is implemented and list files + key functions" beats "look around."
- Merge subagent outputs into a short, actionable synthesis before coding.

## 3. Incremental Delivery (Reduce Risk)

- Prefer **thin vertical slices** over big-bang changes.
- Land work in small, verifiable increments: **implement → build → verify → expand**.
- When feasible, keep changes reversible (isolated commits, feature gating via data attributes or CSS classes).

## 3. Self-Improvement Loop

- After any user correction or discovered mistake:
  - Record the failure mode, the detection signal, and a prevention rule.
  - Apply the lesson immediately to the current session.
- Review lessons and past corrections before major refactors.

## 4. Verification Before "Done"

A task is **never** marked complete without evidence:
- `npm run build` passes (zero errors).
- `npm run dev` — visually confirmed in browser when UI changes are involved.
- Compare baseline vs. changed behavior when relevant.
- Ask yourself: *"Would a staff engineer approve this diff and the verification story?"*

## 5. Demand Elegance (Balanced)

- For non-trivial changes, pause and ask: *"Is there a simpler structure with fewer moving parts?"*
- If the fix is hacky, rewrite it cleanly — but only if it doesn't materially expand scope.
- Do **not** over-engineer simple fixes. Keep momentum and clarity.

## 6. Autonomous Bug Fixing (With Guardrails)

When given a bug report:
1. **Reproduce** → 2. **Isolate root cause** → 3. **Fix** → 4. **Verify end-to-end**.
- Do not offload debugging work to the user unless truly blocked.
- If blocked, ask for **one missing detail** with a recommended default and explain what changes based on the answer.

## 7. Contextual Recommendations

While working on any task, proactively identify and surface:
- **Quick wins**: Low-effort improvements adjacent to the current work (e.g., missing `alt` text, `loading="lazy"` on images).
- **Design system drift**: Components that deviate from `DESIGN_SYSTEM.md` patterns.
- **Performance opportunities**: Unnecessary re-renders, unoptimized images, missing preloads.
- **Accessibility gaps**: Missing ARIA labels, insufficient contrast, keyboard navigation issues.

Present these as optional suggestions — never act on them without approval unless they're trivially safe.

## 8. Task Management (File-Based, Auditable)

For any non-trivial work, use this structured approach:

1. **Plan First**: Write a checklist (in task artifacts or working notes) for any non-trivial work. Include "Verify" tasks explicitly (build/manual checks).
2. **Define Success**: Add acceptance criteria — what must be true when done.
3. **Track Progress**: Mark items complete as you go; keep one "in progress" item at a time.
4. **Checkpoint Notes**: Capture discoveries, decisions, and constraints as you learn them.
5. **Document Results**: Add a short "Results" section: what changed, where, how verified.
6. **Capture Lessons**: After corrections or postmortems, record the failure mode, detection signal, and prevention rule.

### Plan Template

Use this structure for non-trivial tasks:

```
- [ ] Restate goal + acceptance criteria
- [ ] Locate existing implementation / patterns
- [ ] Design: minimal approach + key decisions
- [ ] Implement smallest safe slice
- [ ] Run verification (build / manual repro)
- [ ] Summarize changes + verification story
- [ ] Update documentation (CHANGELOG, etc.)
- [ ] Record lessons (if any)
```

### Bugfix Template

Use for bug reports:

```
- Repro steps:
- Expected vs actual:
- Root cause:
- Fix:
- Verification performed:
- Risk/rollback notes:
```
