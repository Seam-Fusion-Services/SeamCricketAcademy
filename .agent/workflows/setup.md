---
description: Fresh Environment Setup & Verification for New Machines
---

1. Check Environment Prerequisites
   - Run `node -v` (Must be v18.17.1 or higher, v20+ recommended)
   - Run `git --version`

2. Install Dependencies
   - Run `npm ci`
   // turbo

3. Verify Project Integrity
   - Run `npm run build`
   // turbo

4. Final Status Report
   - If successful, report: "✅ Project setup complete. Dependencies installed and build verified. Run `/dev` to start the server."
