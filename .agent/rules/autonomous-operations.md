# Autonomous Operations Protocol

> This is the most important rules file. It defines how the agent self-directs without user hand-holding.

## Session Bootstrap (Do This Every Conversation)

At the start of **every conversation**, before writing any code:

1. **Read `PROJECT_CONTEXT.md`** — understand what's active, what's deprecated, what's the current state.
2. **Read `CHANGELOG.md`** — know the latest version and recent changes so you never duplicate or regress.
3. **Read `DESIGN_SYSTEM.md`** before any UI work — this is non-negotiable for visual consistency.
4. **Scan `src/components/`** for existing patterns before creating or modifying components.
5. **Check `src/data/`** for data-driven components before hardcoding content.

Do NOT ask the user to point you to these files. You know where they are. Read them yourself.

## Autonomous Decision-Making

The user gives **natural language prompts** with vision and objectives. You are expected to:

- **Research independently**: Read existing code, check documentation, search the web if needed.
- **Plan silently**: Form a mental plan. Only surface the plan if the task is high-risk or ambiguous.
- **Execute end-to-end**: Write code, run builds, verify visually, fix issues — all without asking permission for non-destructive actions.
- **Self-verify**: Run `npm run build` after every meaningful change. Run `npm run dev` and check the browser for UI changes.
- **Self-correct**: If something breaks, diagnose and fix it. Don't report failures as completed work.
- **Update documentation**: After significant changes, update `CHANGELOG.md`, `PROJECT_CONTEXT.md`, and `DESIGN_SYSTEM.md` as appropriate — don't wait to be asked.

## When to Act vs. When to Ask

### Just Do It (No Approval Needed)
- Reading any project file for context
- Running `npm run dev`, `npm run build`, `git status`, `git log`
- Creating/editing components, styles, layouts in `src/`
- Fixing bugs you discover while working
- Adding `alt` text, `loading="lazy"`, accessibility improvements
- Updating documentation to reflect changes you just made
- Writing commit messages based on the work done
- Surfacing recommendations alongside completed work

### Ask First (Destructive or Irreversible)
- `git push` — always confirm the commit message and target branch
- `git tag` / `gh release create` — confirm version number
- Deleting files or removing features
- Adding new npm dependencies
- Changing `astro.config.mjs`, `tsconfig.json`, or `deploy.yml`
- Any change that alters the build/deploy pipeline

## Workflow Auto-Triggering

Don't wait for the user to invoke `/build-verify` or `/bugfix`. Use the workflows autonomously:

- **Before reporting any task complete**: Automatically run the build-verify workflow.
- **When encountering a bug**: Automatically follow the bugfix triage workflow.
- **When creating a component**: Automatically follow the component scaffold workflow.
- **When the user says "deploy" or "push"**: Follow the deploy workflow (but ask before the push step).
- **When the user says "release"**: Follow the release workflow (ask before tagging).

## Contextual Recommendations (Proactive, Not Passive)

While completing any task, actively look for and surface:
- **Design drift**: Components not following `DESIGN_SYSTEM.md` patterns.
- **Stale content**: Outdated dates, references, or information.
- **Performance**: Missing `loading="lazy"`, unoptimized images, unnecessary client JS.
- **Accessibility**: Missing ARIA labels, poor contrast, broken keyboard nav.
- **SEO**: Missing meta descriptions, improper heading hierarchy.
- **Code quality**: Duplicated logic, unused imports, inconsistent naming.

Present these as a brief section at the end of your response. Act on trivially safe ones immediately (e.g., adding `loading="lazy"`). Ask for approval on anything that changes behavior.

## Memory & Learning

- If the user corrects you, internalize the lesson immediately and apply it for the rest of the session.
- If you discover a project convention not documented in the rules, note it in your response so it can be captured.
- If you find documentation is wrong or outdated, fix it as part of your current work — don't create a separate task for it.

## What "Done" Looks Like

When you report a task complete, the user should see:
1. **What changed** — files modified, features added/fixed.
2. **How it was verified** — build output, browser confirmation, before/after.
3. **Any recommendations** — optional improvements spotted during the work.
4. **Documentation updated** — CHANGELOG, PROJECT_CONTEXT, DESIGN_SYSTEM as relevant.

The user should never need to ask "did you check X?" or "did you update Y?" — you already did.
