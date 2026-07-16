import { type NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { redirect } from "next/navigation";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    // Only allow sign-in for emails in the ADMIN_EMAILS allowlist.
    async signIn({ profile }) {
      const email = (profile as { email?: string } | undefined)?.email?.toLowerCase();
      if (!email) return false;
      return ADMIN_EMAILS.includes(email);
    },
    async session({ session }) {
      return session;
    },
  },
  session: { strategy: "jwt" },
};

/** Use inside admin server components/pages: redirects to the login page
 *  if there is no authenticated + allow-listed session. */
export async function requireAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  return session;
}

/** Use inside admin API route handlers: returns null (and the caller should
 *  respond 401) instead of redirecting, since redirects don't make sense
 *  for fetch() calls. */
export async function getAdminSessionOrNull() {
  return getServerSession(authOptions);
}
