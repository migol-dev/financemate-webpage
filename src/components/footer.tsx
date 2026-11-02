"use client";

import Link from "next/link";
import { Shield, FileText, Cookie, AlertTriangle, ExternalLink, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function Footer({ repoUrl }: { repoUrl: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/60 text-muted-foreground text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="sm" versionText="v2.0.0" />

            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              Cuaderno de gestión patrimonial personal construido bajo la filosofía{" "}
              <span className="italic font-serif text-foreground">Warm Editorial Wealth</span> y
              arquitectura Local-First. Tus finanzas permanecen en tu dispositivo.
            </p>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px] text-muted-foreground font-mono">
              <p className="flex items-center gap-1.5">
                <span>Desarrollado de forma independiente por</span>
                <span className="text-foreground font-semibold">migol-dev</span>
              </p>
              <a
                href="mailto:business.migol.gg@gmail.com"
                className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>business.migol.gg@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Ecosistema & Recursos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#descarga"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Descargar APK (Android)
                </a>
              </li>
              <li>
                <a
                  href="https://financepal-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Abrir Web App PWA</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </li>
              <li>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Repositorio GitHub</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-foreground transition-colors">
                  Reseñas de la Comunidad
                </a>
              </li>
              <li>
                <a href="#soporte" className="hover:text-foreground transition-colors">
                  Buzón de Ideas y Reportes
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-foreground transition-colors">
                  Arquitectura y Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>Marco Legal y Cumplimiento</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <FileText className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>Términos y Condiciones de Uso</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Shield className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>Política de Privacidad Integral</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Cookie className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>Cookies y Almacenamiento Local</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>Aviso Legal y Deslinde Financiero</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial & Banking Disclaimer Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border text-[11px] leading-relaxed text-muted-foreground">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-editorial-amber shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-foreground">
                Aviso Regulatorio y Deslinde de Responsabilidad Financiera
              </p>
              <p>
                Finance Pal es una herramienta informática de autoorganización personal desarrollada por un
                desarrollador independiente (<strong className="text-foreground">migol-dev</strong>) bajo la{" "}
                <strong className="text-foreground">Licencia de Software MIT</strong>. Finance Pal{" "}
                <strong className="text-foreground">NO</strong> es una entidad financiera, banco, fondo de inversión ni
                institución de fondos de pago electrónico (Fintech) regulada. No capta depósitos ni custodia fondos reales
                del público, y no provee asesoría financiera, contable ni fiscal. Cualquier decisión patrimonial es
                responsabilidad exclusiva del usuario. Para más detalles, consulta nuestro{" "}
                <Link href="/aviso-legal" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                  Aviso Legal y Deslinde Financiero
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-muted-foreground font-mono-tabular">
          <div className="flex items-center gap-1.5 flex-wrap text-center sm:text-left">
            <span>© {currentYear} Finance Pal Project.</span>
            <span>Desarrollado por migol-dev bajo Licencia MIT.</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>100% Local-First & Código Abierto</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
