"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Shield, FileText, Cookie, AlertTriangle, Printer } from "lucide-react";
import React from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col relative print:bg-white print:text-slate-900 print:min-h-0">
      {/* Top Header matching Navbar aesthetics */}
      <header className="sticky top-0 z-40 glass-panel border-b border-border print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <Link href="/" className="shrink-0">
              <BrandLogo size="sm" versionText="v2.0" className="sm:hidden" />
              <BrandLogo size="md" versionText="v2.0" className="hidden sm:inline-flex" />
            </Link>

            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground bg-muted border border-border tactile-press shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-primary" />
              <span>Volver a la Web</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />
            <Link
              href="/"
              className="md:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-foreground bg-muted border border-border shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-primary" />
              <span className="hidden min-[380px]:inline">Inicio</span>
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center p-2 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold text-foreground bg-card border border-border hover:bg-muted tactile-press shrink-0"
              title="Imprimir o guardar en PDF"
            >
              <Printer className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline ml-1.5">Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full print:py-4 print:px-0 print:max-w-none">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-muted border border-border mb-10 print:hidden">
          {LEGAL_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex-1 min-w-0 lg:min-w-[140px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold tactile-press flex items-center justify-center gap-2 text-center ${
                  isActive
                    ? "bg-card text-foreground font-bold border border-border shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                <span className="truncate">{tab.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Document Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-primary border border-border text-xs font-semibold uppercase tracking-wider mb-4 font-mono print:border-slate-300 print:bg-slate-100 print:text-slate-800">
            <span>Marco Legal Oficial · Desarrollador Independiente</span>
          </div>
          <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground mb-4 print:text-black">
            {title}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed print:text-slate-700">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground mt-6 pt-4 border-t border-border print:border-slate-300 print:text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary print:hidden" />
              <span>Vigencia: {lastUpdated}</span>
            </span>
            <span>·</span>
            <span>Tiempo estimado de lectura: {readTime}</span>
            <span>·</span>
            <span>Aplica a: Web Oficial, PWA y App Android (APK)</span>
          </div>
        </div>

        {/* Legal Content Card */}
        <article className="rounded-2xl bg-card p-6 sm:p-10 md:p-12 border border-border editorial-surface space-y-8 leading-relaxed text-foreground/90 text-sm sm:text-base print:border-none print:shadow-none print:p-0 print:text-slate-800 print:bg-transparent">
          {children}
        </article>

        {/* Legal Contact Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-muted/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground print:hidden">
          <div>
            <p className="font-semibold text-foreground">¿Tienes dudas o necesitas ejercer tus derechos de datos?</p>
            <p className="text-muted-foreground mt-0.5">
              Canal directo de contacto: <span className="text-primary font-mono">business.migol.gg@gmail.com</span> o mediante el Buzón de la Web.
            </p>
          </div>
          <Link
            href="/#soporte"
            className="px-4 py-2.5 rounded-xl bg-card text-foreground border border-border hover:bg-muted tactile-press font-medium text-xs shrink-0"
          >
            Abrir Buzón de Contacto
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/60 text-muted-foreground text-xs text-center print:bg-transparent print:border-slate-300 print:text-slate-600 print:pt-4">
        <div className="max-w-5xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Finance Pal Project · Desarrollado por <span className="text-foreground font-semibold">migol-dev</span> bajo Licencia MIT.</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Este software es una herramienta de organización personal. No constituye una entidad bancaria ni presta asesoramiento financiero o fiscal.
          </p>
        </div>
      </footer>
    </div>
  );
}
