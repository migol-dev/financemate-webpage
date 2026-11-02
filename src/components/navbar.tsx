"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles, Download, ArrowUpRight } from "lucide-react";
import { openReleaseModal } from "@/components/release-announcement";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#galeria", label: "Cuaderno 3D" },
  { href: "#caracteristicas", label: "Arquitectura" },
  { href: "#resenas", label: "Comunidad" },
  { href: "#soporte", label: "Buzón" },
  { href: "#seguridad", label: "Seguridad" },
];

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("financemate-webpage") &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("finance-mate")
    ? process.env.NEXT_PUBLIC_GITHUB_REPO_URL
    : "https://github.com/migol-dev/finance-pal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <Link
          href="#top"
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <BrandLogo versionText="v2.0" />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-1 text-sm font-medium text-muted-foreground"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 rounded-lg hover:text-foreground hover:bg-muted/70 transition-[color,background-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            >
              <span>{l.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 left-3 right-3 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"
              />
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => openReleaseModal()}
            className="inline-flex items-center gap-1.5 ps-3 pe-2.5 h-10 rounded-xl text-xs font-semibold text-foreground bg-muted/70 border border-border hover:border-editorial-amber/50 hover:bg-muted tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            title="Explorar novedades de la edición v2.0.0"
          >
            <Sparkles
              className="w-3.5 h-3.5 text-editorial-amber transition-transform duration-200 ease-out group-hover:rotate-12"
              strokeWidth={2}
            />
            <span>Edición v2.0</span>
          </button>

          <a
            className="hidden md:inline-flex items-center gap-1.5 ps-3.5 pe-3 h-10 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground bg-card border border-border hover:border-foreground/25 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
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

          <a
            className="inline-flex items-center gap-2 ps-4 pe-3.5 h-10 rounded-xl text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
            style={{ boxShadow: "var(--shadow-border)" }}
            href="#descarga"
          >
            <span>Descargar APK</span>
            <Download
              className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
              strokeWidth={2}
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              >
                {open ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card px-5 py-4 space-y-2">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openReleaseModal();
            }}
            className="w-full flex items-center justify-between text-left py-2.5 px-3.5 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm tactile-press"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-editorial-amber" strokeWidth={2} />
              <span>Explorar Novedades v2.0.0</span>
            </span>
            <span className="text-[10px] font-mono uppercase bg-background px-2 py-0.5 rounded border border-border text-muted-foreground">
              Edición V2
            </span>
          </button>
          <div className="divide-y divide-border/60">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-foreground py-2.5 text-sm font-medium hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#descarga"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center"
            >
              <span>Descargar APK v2.0.0</span>
              <Download className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="https://financepal-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full justify-center"
            >
              <span>Abrir Web App en vivo</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
