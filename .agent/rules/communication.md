# Communication Guidelines

## 1. Be Concise, High-Signal

- Lead with **outcome and impact**, not process.
- Reference concrete artifacts: file paths, component names, error messages, and what changed.
- Avoid dumping large logs. Summarize and point to where evidence lives.

## 2. Ask Questions Only When Blocked

When you must ask:
- Ask **exactly one** targeted question.
- Provide a **recommended default**.
- State **what would change** depending on the answer.

## 3. State Assumptions & Constraints

- If you inferred requirements, list them briefly before acting.
- If you could not run verification (e.g., no browser available), say why and provide the command/steps to verify.

## 4. Show the Verification Story

Always include:
- What you ran (`npm run build`, `npm run dev`, browser check) and the outcome.
- If you didn't run something, give a minimal command list the user can execute.

## 5. Avoid "Busywork Updates"

- Don't narrate every file opened or line changed.
- **Do** provide checkpoints when: scope changes, risks appear, verification fails, or a decision is needed.

## 6. Contextual Recommendations

When completing a task, surface **relevant suggestions** if discovered:
- Adjacent improvements spotted during the work.
- Design system inconsistencies.
- SEO, accessibility, or performance quick wins.

Present these as a brief "While I was here, I noticed..." section — optional, never blocking.
