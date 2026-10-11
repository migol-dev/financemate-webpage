"use client";

import Link from "next/link";
import { Shield, FileText, Cookie, AlertTriangle, ExternalLink, Mail, Heart } from "lucide-react";

export function Footer({ repoUrl }: { repoUrl: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center font-bold text-xs text-cyan-400">
                  FP
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base tracking-tight">
                  Finance Pal
                </span>
                <span className="ml-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  v1.21.0
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ecosistema de gestión financiera personal diseñado con arquitectura Local-First.
              Tus finanzas no salen de tu dispositivo, sin rastreo publicitario y bajo código abierto.
            </p>

            <div className="pt-1 flex flex-col gap-1.5 text-[11px] text-slate-400 font-mono">
              <p className="flex items-center gap-1.5">
                <span>Desarrollado de forma independiente por</span>
                <span className="text-white font-semibold">migol-dev</span>
              </p>
              <a
                href="mailto:business.migol.gg@gmail.com"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>business.migol.gg@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Ecosistema & Recursos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#descarga"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  Descargar APK (Android)
                </a>
              </li>
              <li>
                <a
                  href="https://financepal-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Web App PWA</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Repositorio GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#resenas" className="hover:text-cyan-400 transition-colors">
                  Reseñas de la Comunidad
                </a>
              </li>
              <li>
                <a href="#soporte" className="hover:text-cyan-400 transition-colors">
                  Buzón de Ideas y Reportes
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-cyan-400 transition-colors">
                  Arquitectura y Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Marco Legal y Cumplimiento</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span>Términos y Condiciones de Uso</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span>Política de Privacidad Integral</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <Cookie className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span>Cookies y Almacenamiento Local</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span>Aviso Legal y Deslinde Financiero</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Financial & Banking Disclaimer Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-300">
                Aviso Regulatorio y Deslinde de Responsabilidad Financiera
              </p>
              <p>
                Finance Pal es una herramienta informática de autoorganización personal desarrollada por un
                desarrollador independiente (<strong className="text-slate-300">migol-dev</strong>) bajo la{" "}
                <strong className="text-slate-300">Licencia de Software MIT</strong>. Finance Pal{" "}
                <strong className="text-slate-200">NO</strong> es una entidad financiera, banco, fondo de inversión ni
                institución de fondos de pago electrónico (Fintech) regulada. No capta depósitos ni custodia fondos reales
                del público, y no provee asesoría financiera, contable ni fiscal. Cualquier decisión patrimonial es
                responsabilidad exclusiva del usuario. Para más detalles, consulta nuestro{" "}
                <Link href="/aviso-legal" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition">
                  Aviso Legal y Deslinde Financiero
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5 flex-wrap text-center sm:text-left">
            <span>© {currentYear} Finance Pal Project.</span>
            <span>Creado con</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
            <span>por migol-dev bajo Licencia MIT.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>100% Local-First & Código Abierto</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
