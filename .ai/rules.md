# Rules and Contracts

## Code Guidelines
1. **TypeScript Only:** Write all new logic in strict TypeScript. Avoid `any`. Use `zod` for parsing and validating schemas.
2. **Next.js App Router:** Follow Next.js App Router conventions. Use Server Components by default. Add `"use client"` only when client-side interactivity or hooks (like `useState`, `useEffect`) are needed.
3. **Styling:** Use Tailwind CSS for all styling. Use the `cn` utility function (`clsx` + `tailwind-merge`) for conditional class merging. Do not use plain CSS or CSS Modules unless absolutely necessary.
4. **UI Components:** Do not reinvent the wheel. Rely on existing components in `src/components/ui/` (based on Radix UI).
5. **Data Fetching:** Prefer Server Components for fetching data from Supabase. Use `@supabase/ssr` to securely handle sessions and cookies.
6. **API Routes:** All API routes must validate incoming requests using Zod schemas.

## Git & Commits
- Do not modify files unnecessarily.
- Write meaningful, concise commit messages.

## Supabase Contracts
- Never expose service role keys on the client.
- Always use Row Level Security (RLS) in Supabase. Ensure queries are authenticated where necessary.
- Separate server logic from client logic inside `src/lib/supabase`.
