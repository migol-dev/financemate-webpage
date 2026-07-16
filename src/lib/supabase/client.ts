import { createBrowserClient } from "@supabase/ssr";

/** Client-side Supabase client. Safe to use in "use client" components.
 *  Uses the public anon key only — RLS policies (see supabase/schema.sql)
 *  restrict what anonymous users can read/write. */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
