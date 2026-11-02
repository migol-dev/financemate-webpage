# Initial import setup

## Verified

- All eight required environment-variable names are configured in Make.
  Configuration does not establish credential validity or successful OAuth.
- Bootstrap verification passed: dependency installation completed and the
  supervised Next.js dev server returned HTTP 200 at `/`.
- Make uses Node 22 to satisfy the installed Supabase SDK requirements.
- The dev script directly execs Next.js and binds the platform-provided port.
- The Figma-only dev-origin allowlist uses `FIGMA_PUBLIC_URL`. A WebSocket
  handshake to `/_next/webpack-hmr` from the previously blocked preview origin
  returned HTTP 101 after the change. Full browser verification was unavailable.

## Deployment blocked pending a hosting decision

- `figma make verify-deploy` failed because `.figma/make/deploy` is missing.
- The current `npm run build` command produces a Next.js application, not a
  deployable static directory. The app uses cookies, server-rendered admin
  pages, NextAuth callbacks, and API routes for Supabase-backed features.
- No deploy script or static-export configuration was fabricated. The user
  must confirm a server-capable deployment approach before further setup.
  Vercel is a conventional option for this existing Next.js application;
  Figma Cloud would need a confirmed supported runtime setup.
- `figma make verify-deploy-preview --skip` returned terminal `state: skipped`
  because no safe static output exists for this imported application.
- No deployment build or publication was performed.

## Existing dependency security findings

The latest install audit reported 34 vulnerabilities: 25 moderate, 7 high,
and 2 critical. Dependency remediation is outside setup-only import work.
Review these findings before production deployment; no automatic audit fixes
or dependency changes were applied.
