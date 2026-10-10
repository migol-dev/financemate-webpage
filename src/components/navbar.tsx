"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#galeria", label: "Galería 3D" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#resenas", label: "Comunidad" },
  { href: "#soporte", label: "Buzón" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#descarga", label: "Descarga APK" },
];

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL ?? "https://github.com/migol-dev/finance-pal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[1.5px] shadow-lg shadow-sky-500/25">
            <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-white">Finance Pal</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">v1.20.2</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none rounded"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:border-slate-600 transition-all"
            href={GITHUB_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all"
            href="#descarga"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
            <span>Descargar APK</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#0d1322] px-5 py-4 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-slate-300 py-1 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://financepal-web.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-cyan-400 py-1"
          >
            Web App en Vivo ↗
          </a>
        </div>
      )}
    </header>
  );
}
