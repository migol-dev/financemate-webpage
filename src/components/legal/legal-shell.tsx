"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Shield, FileText, Cookie, AlertTriangle, Printer } from "lucide-react";
import React from "react";

interface LegalShellProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  readTime: string;
  children: React.ReactNode;
}

const LEGAL_TABS = [
  { href: "/terminos", label: "Términos de Servicio", icon: FileText },
  { href: "/privacidad", label: "Política de Privacidad", icon: Shield },
  { href: "/cookies", label: "Cookies y Almacenamiento", icon: Cookie },
  { href: "/aviso-legal", label: "Aviso Legal y Deslinde", icon: AlertTriangle },
];

export function LegalShell({
  title,
  subtitle,
  lastUpdated,
  readTime,
  children,
}: LegalShellProps) {
  const pathname = usePathname();

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#080e1d] text-slate-100 flex flex-col relative print:bg-white print:text-slate-900 print:min-h-0">
      {/* Ambient background glow identical to main landing */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden print:hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-grid-glow" />
        <div className="absolute top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-96 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top Header matching Navbar aesthetics */}
      <header className="sticky top-0 z-40 glass-panel border-b border-white/10 print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[1.5px] shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xl tracking-tight text-white">Finance Pal</span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40">v1.21.0</span>
              </div>
            </Link>

            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Volver a la Web</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="md:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inicio</span>
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:bg-slate-700 transition-all"
              title="Imprimir o guardar en PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full print:py-4 print:px-0 print:max-w-none">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 mb-10 shadow-lg print:hidden">
          {LEGAL_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 text-center ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-slate-950" : "text-cyan-400"}`} />
                <span className="truncate">{tab.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Document Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider mb-4 font-mono print:border-slate-300 print:bg-slate-100 print:text-slate-800">
            <span>🛡️ Marco Legal Oficial · Desarrollador Independiente</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 print:text-black">
            {title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed print:text-slate-700">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-6 pt-4 border-t border-white/10 print:border-slate-300 print:text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse print:hidden" />
              <span>Vigencia: {lastUpdated}</span>
            </span>
            <span>·</span>
            <span>Tiempo estimado de lectura: {readTime}</span>
            <span>·</span>
            <span>Aplica a: Web Oficial, PWA y App Android (APK)</span>
          </div>
        </div>

        {/* Legal Content Card */}
        <article className="rounded-3xl glass-panel p-6 sm:p-10 md:p-12 border border-slate-700/70 shadow-2xl space-y-8 leading-relaxed text-slate-300 text-sm sm:text-base print:border-none print:shadow-none print:p-0 print:text-slate-800 print:bg-transparent">
          {children}
        </article>

        {/* Legal Contact Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 print:hidden">
          <div>
            <p className="font-semibold text-slate-200">¿Tienes dudas o necesitas ejercer tus derechos de datos?</p>
            <p className="text-slate-400 mt-0.5">
              Canal directo de contacto: <span className="text-cyan-400 font-mono">business.migol.gg@gmail.com</span> o mediante el Buzón de la Web.
            </p>
          </div>
          <Link
            href="/#soporte"
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition font-medium text-xs shrink-0"
          >
            Abrir Buzón de Contacto
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-slate-950 text-slate-500 text-xs text-center print:bg-transparent print:border-slate-300 print:text-slate-600 print:pt-4">
        <div className="max-w-5xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Finance Pal Project · Desarrollado por <span className="text-slate-300 font-semibold">migol-dev</span> bajo Licencia MIT.</p>
          <p className="mt-1 text-[11px] text-slate-400">
            Este software es una herramienta de organización personal. No constituye una entidad bancaria ni presta asesoramiento financiero o fiscal.
          </p>
        </div>
      </footer>
    </div>
  );
}
