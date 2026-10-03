# Finance Pal Official Web - Architecture & Infrastructure

## Overview
Finance Pal Official Web is a modern web application built with Next.js using the App Router. It serves as a landing page, an admin dashboard, and provides interactive features like galleries, reviews, and reports.

## Tech Stack
- **Framework:** Next.js (App Router, v16.2.10)
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS, Framer Motion (animations)
- **UI Components:** Radix UI primitives (headless components), utilizing a structure similar to shadcn/ui (`src/components/ui/`). Includes `clsx` & `tailwind-merge` for class management.
- **Backend & Database:** Supabase (`@supabase/supabase-js`, `@supabase/ssr`)
- **Authentication:** NextAuth.js (`next-auth`) and Supabase Auth
- **Validation:** Zod
- **Drag & Drop:** `@dnd-kit/core`

## Project Structure
- `/src/app/`: Next.js App Router root. Contains the main application pages, layouts, and API routes (`/src/app/api/`). Includes an `/admin` section for dashboard features.
- `/src/components/`: Reusable React components.
  - `/src/components/ui/`: Primitive reusable UI components (Buttons, Cards, Inputs, etc.).
  - `/src/components/admin/`: Admin-specific components (managers for gallery, reports, reviews).
- `/src/lib/`: Utility functions, Supabase clients (server and client configurations), types, and auth logic.
- `/src/hooks/`: Custom React hooks (e.g., `use-download-tracking.ts`).
- `/public/`: Static assets.
- `/supabase/`: Supabase configuration and database schemas.

## Infrastructure
- **Serverless API:** Uses Next.js API Routes (`/src/app/api`) to handle server-side logic (admin, auth, downloads, gallery, reports, reviews).
- **Database / BaaS:** Supabase handles data storage. Client/server SDKs are used to communicate with the database securely from both frontend and backend environments.
