import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Stateless public Supabase client (no cookies) for ISR / static generation
 * of public read-only data (approved reviews, gallery images).
 */
export function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return null;
  }
  return createSupabaseClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
