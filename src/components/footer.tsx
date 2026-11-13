import Link from "next/link";
import { Shield, FileText, Cookie, AlertTriangle, ExternalLink, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function Footer({ repoUrl }: { repoUrl: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/60 text-muted-foreground text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-10 sm:pb-12 border-b border-border">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="sm" versionText="v2.0.0" />

            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
              Cuaderno de gestión patrimonial personal construido bajo la filosofía{" "}
              <span className="italic font-serif text-foreground">Warm Editorial Wealth</span> y
              arquitectura Local-First. Tus finanzas permanecen en tu dispositivo.
            </p>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px] text-muted-foreground font-mono">
              <p className="flex items-center gap-1.5 flex-wrap">
                <span>Desarrollado de forma independiente por</span>
                <Link
                  href="/autor/migol-dev"
                  className="text-foreground font-semibold hover:text-primary underline underline-offset-4 transition-colors break-words"
                >
                  migol-dev
                </Link>
              </p>
              <a
                href="mailto:business.migol.gg@gmail.com"
                className="inline-flex items-center gap-1.5 text-primary hover:underline underline-offset-4 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="break-all">business.migol.gg@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links: 1-col on <420px, 2-col on min-[420px], 1-col on md: */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
              Ecosistema & Recursos
            </h4>
            <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-2.5">
              <li>
                <Link
                  href="/descargar"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1 break-words"
                >
                  Descargar APK y PWA
                </Link>
              </li>
              <li>
                <Link
                  href="/funciones"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1 break-words"
                >
                  Funciones y Módulos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1 break-words"
                >
                  Guías de Finanzas
                </Link>
              </li>
              <li>
                <a
                  href="https://financepal-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5 break-words"
                >
                  <span className="break-words">Web App PWA</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1.5 break-words"
                >
                  <span className="break-words">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground shrink-0" />
                </a>
              </li>
              <li>
                <Link href="/autor/migol-dev" className="hover:text-foreground transition-colors break-words">
                  Sobre migol-dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links: 1-col on <420px, 2-col on min-[420px], 1-col on md: */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Marco Legal</span>
            </h4>
            <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-2.5">
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group break-words"
                >
                  <FileText className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="break-words">Términos y Condiciones</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group break-words"
                >
                  <Shield className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="break-words">Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group break-words"
                >
                  <Cookie className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="break-words">Cookies & Almacenamiento</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group break-words"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  <span className="break-words">Aviso Legal y Deslinde</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial & Banking Disclaimer Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border text-[11px] leading-relaxed text-muted-foreground break-words">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-editorial-amber shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-foreground">
                Aviso Regulatorio y Deslinde de Responsabilidad Financiera
              </p>
              <p className="break-words">
                Finance Pal es una herramienta informática de autoorganización personal desarrollada por un
                desarrollador independiente (<strong className="text-foreground">migol-dev</strong>) bajo la{" "}
                <strong className="text-foreground">Licencia de Software MIT</strong>. Finance Pal{" "}
                <strong className="text-foreground">NO</strong> es una entidad financiera, banco, fondo de inversión ni
                institución de fondos de pago electrónico (Fintech) regulada. No capta depósitos ni custodia fondos reales
                del público, y no provee asesoría financiera, contable ni fiscal. Cualquier decisión patrimonial es
                responsabilidad exclusiva del usuario. Para más detalles, consulta nuestro{" "}
                <Link href="/aviso-legal" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors break-words">
                  Aviso Legal y Deslinde Financiero
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-muted-foreground font-mono-tabular">
          <div className="flex items-center gap-1.5 flex-wrap text-center sm:text-left break-words">
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
