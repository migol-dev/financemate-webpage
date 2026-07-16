"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Images, Star, MessagesSquare, LogOut, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "/admin", label: "Resumen", icon: LayoutDashboard },
  { href: "/admin/gallery", label: "Galería", icon: Images },
  { href: "/admin/reviews", label: "Reseñas", icon: Star },
  { href: "/admin/reports", label: "Errores y sugerencias", icon: MessagesSquare },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-background p-5 sm:flex">
          <p className="mb-6 font-display text-lg font-semibold">Finance Mate Admin</p>
          <nav className="flex flex-1 flex-col gap-1">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary"
          >
            <ExternalLink className="h-4 w-4" /> Ver sitio
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-1 flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" /> Cerrar sesión
          </button>
        </aside>

        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-border bg-background px-5 py-4 sm:hidden">
            <p className="font-display font-semibold">Finance Mate Admin</p>
            <ThemeToggle />
          </header>
          <main className="p-5 sm:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
