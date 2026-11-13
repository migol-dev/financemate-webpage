"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { openReleaseModal } from "@/components/release-announcement";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "/#plataformas", label: "Plataformas" },
  { href: "/funciones", label: "Funciones" },
  { href: "/blog", label: "Blog" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#resenas", label: "Comunidad" },
];

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("financemate-webpage") &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("finance-mate")
    ? process.env.NEXT_PUBLIC_GITHUB_REPO_URL
    : "https://github.com/migol-dev/finance-pal";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Smart Sticky Navbar: ocultar al hacer scroll hacia abajo, mostrar al subir
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el drawer móvil está abierto, nunca ocultar
      if (open) {
        setHidden(false);
        return;
      }

      // Cerca del tope (primeros 80px), siempre visible
      if (currentScrollY <= 80) {
        setHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      // Scroll descendente (más de 8px) -> ocultar suavemente
      if (currentScrollY > lastScrollY + 8) {
        setHidden(true);
      }
      // Scroll ascendente (más de 8px) -> mostrar inmediatamente
      else if (currentScrollY < lastScrollY - 8) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Bloqueo de scroll cuando el drawer móvil está abierto
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  // Cerrar drawer con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 glass-panel border-b border-border transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-0"
        >
          <BrandLogo versionText="v2.0" />
        </Link>

        {/* Desktop Nav: Dock Pill elegante de una sola línea */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-0.5 p-1 rounded-full border border-border/80 bg-muted/55"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-card/90 transition-all duration-150 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => openReleaseModal()}
            className="inline-flex items-center gap-1.5 px-3 h-9 rounded-xl text-xs font-semibold text-foreground bg-muted/70 border border-border hover:border-editorial-amber/50 hover:bg-muted tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            title="Explorar novedades de la versión 2.0.0"
          >
            <Sparkles
              className="w-3.5 h-3.5 text-editorial-amber transition-transform duration-200 ease-out group-hover:rotate-12"
              strokeWidth={2}
            />
            <span>Novedades</span>
          </button>

          <a
            className="hidden xl:inline-flex items-center gap-1.5 ps-3.5 pe-3 h-9 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground bg-card border border-border hover:border-foreground/25 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            href={GITHUB_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Código fuente</span>
            <ArrowUpRight
              className="w-3.5 h-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </a>

          <Link
            className="inline-flex items-center gap-2 ps-4 pe-3.5 h-9 rounded-xl text-xs font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            style={{ boxShadow: "var(--shadow-border)" }}
            href="/#descarga"
          >
            <span>Descargar APK</span>
            <Download
              className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Mobile / Tablet (<1024px) Header Action Bar: ThemeToggle + 44x44px Menu Button */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-card text-foreground tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            <span className="relative inline-flex w-5 h-5 items-center justify-center">
              <Menu
                className={`w-5 h-5 absolute transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"
                }`}
                strokeWidth={2}
              />
              <X
                className={`w-5 h-5 absolute transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
                }`}
                strokeWidth={2}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border glass-panel px-4 sm:px-6 py-4 space-y-3.5 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain shadow-2xl">
          {/* Release announcement button */}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openReleaseModal();
            }}
            className="w-full min-h-[44px] flex items-center justify-between text-left py-2.5 px-3.5 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-editorial-amber shrink-0" strokeWidth={2} />
              <span>Explorar Novedades v2.0.0</span>
            </span>
            <span className="text-[10px] font-mono uppercase bg-background px-2 py-0.5 rounded border border-border text-muted-foreground shrink-0">
              Novedades
            </span>
          </button>

          {/* Navigation Links with touch target >= 44px */}
          <nav aria-label="Navegación móvil" className="divide-y divide-border/60">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[44px] text-foreground py-2.5 px-2 text-sm font-medium hover:text-primary hover:bg-muted/50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring whitespace-nowrap"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons with touch target >= 44px */}
          <div className="pt-2 border-t border-border/60 flex flex-col gap-2.5">
            <Link
              href="/#descarga"
              onClick={() => setOpen(false)}
              className="btn-primary w-full min-h-[44px] justify-center text-sm font-semibold"
            >
              <span>Descargar APK v2.0.0</span>
              <Download className="w-4 h-4" strokeWidth={2} />
            </Link>
            <a
              href="https://financepal-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full min-h-[44px] justify-center text-sm font-medium"
            >
              <span>Abrir Web App en vivo</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full min-h-[44px] justify-center text-sm font-medium text-muted-foreground"
            >
              <span>Código fuente en GitHub</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
