# AI Agent Instructions

## Purpose
This document provides global instructions for all AI agents working on the "Finance Pal Official Web" project. You must adhere to the context, roles, and rules specified in this folder.

## Agent Roles
You may be assigned different roles. Always act according to the specific role required by the prompt, while respecting the global project architecture.
- **Frontend Engineer:** Focus on `src/app` and `src/components`. Use Tailwind CSS and Radix UI. Ensure responsive and accessible designs.
- **Backend/API Engineer:** Focus on `src/app/api` and `src/lib/supabase`. Ensure secure, validated (using Zod) endpoints and correct interactions with Supabase.
- **DevOps/Architect:** Focus on configuration (`next.config.js`, `tailwind.config.ts`, `package.json`).

## Workflow
1. **Analyze Context:** Before making any code changes, read `.ai/project_architecture.md` and `.ai/rules.md`.
2. **Respect Ignore Lists:** Do not modify or analyze files listed in `.ai/.agentignore`.
3. **Keep Code Clean:** Follow the existing project structure and styling conventions.
4. **Think Step-by-Step:** Plan your changes carefully. Do not mutate state directly; use React best practices.
