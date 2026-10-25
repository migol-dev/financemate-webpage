"use client";

import React from "react";
import {
  Palette,
  FolderKanban,
  Tags,
  Zap,
  BarChart3,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface FeatureItem {
  coordinate: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  accentColor: string;
  tagStyle: string;
}

const FEATURES: FeatureItem[] = [
  {
    coordinate: "01 / ATMÓSFERA",
    icon: Palette,
    title: "Warm Editorial Wealth",
    desc: "Atmósfera visual de alta costura, tipografía Instrument Serif con contrastes ópticos, superficies en carbón templado y microfísica elástica a 120 FPS.",
    tag: "Atmósfera v2.0",
    accentColor: "text-amber-400",
    tagStyle: "text-amber-300 bg-amber-950/60 border-amber-500/30",
  },
  {
    coordinate: "02 / METAS",
    icon: FolderKanban,
    title: "Metas con Drag & Drop",
    desc: "Organización jerárquica con subcarpetas multinivel y reordenamiento fluido táctil con dnd-kit. Proyección predictiva de ritmo diario y semanal.",
    tag: "Carpetas dnd-kit",
    accentColor: "text-emerald-400",
    tagStyle: "text-emerald-300 bg-emerald-950/60 border-emerald-500/30",
  },
  {
    coordinate: "03 / TAXONOMÍA",
    icon: Tags,
    title: "15 Categorías + Custom",
    desc: "15 categorías universales curadas para consumo cotidiano y creador inline de categorías ilimitadas con selector dinámico de emojis (máx. 20 caracteres).",
    tag: "15 + Ilimitadas",
    accentColor: "text-cyan-400",
    tagStyle: "text-cyan-300 bg-cyan-950/60 border-cyan-500/30",
  },
  {
    coordinate: "04 / RENDIMIENTO",
    icon: Zap,
    title: "Zero-Flash Boot",
    desc: "Detección síncrona en el head del documento de fp-theme-pref antes del primer render de React para erradicar el parpadeo blanco. Selector en login/registro.",
    tag: "0.00 ms Flash",
    accentColor: "text-sky-400",
    tagStyle: "text-sky-300 bg-sky-950/60 border-sky-500/30",
  },
  {
    coordinate: "05 / INTELIGENCIA",
    icon: BarChart3,
    title: "Resumen Macroeconómico",
    desc: "Balance anual en 4 columnas (General, Categorías, Métodos, Metas), desglose porcentual ponderado y detección visual de anomalías de consumo.",
    tag: "4 Columnas Macro",
    accentColor: "text-amber-400",
    tagStyle: "text-amber-300 bg-amber-950/60 border-amber-500/30",
  },
  {
    coordinate: "06 / CRIPTOGRAFÍA",
    icon: ShieldCheck,
    title: "WebCrypto AES-256",
    desc: "Criptografía simétrica nativa en cliente con WebCrypto AES-GCM 256-bit, KDF PBKDF2 de 100,000 rondas, 2FA TOTP y auditoría k-Anonymity HaveIBeenPwned.",
    tag: "Local-First Militar",
    accentColor: "text-teal-400",
    tagStyle: "text-teal-300 bg-teal-950/60 border-teal-500/30",
  },
  {
    coordinate: "07 / SOBERANÍA",
    icon: RefreshCw,
    title: "Sync Zero-Knowledge",
    desc: "Sincronización multi-dispositivo cifrada en cliente con Supabase. Los datos viajan y residen cifrados sin que la nube pueda leer montos ni conceptos.",
    tag: "Zero-Knowledge",
    accentColor: "text-indigo-400",
    tagStyle: "text-indigo-300 bg-indigo-950/60 border-indigo-500/30",
  },
  {
    coordinate: "08 / ACCESIBILIDAD",
    icon: Sparkles,
    title: "Accesibilidad WCAG AAA",
    desc: "Nuevo isotipo oficial continuo monograma FP y moneda esmeralda, contraste visual certificado WCAG AAA, áreas de toque 44x44px y cero telemetría externa.",
    tag: "WCAG AAA 7:1",
    accentColor: "text-rose-400",
    tagStyle: "text-rose-300 bg-rose-950/60 border-rose-500/30",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            Ecosistema v2.0.0 Oficial
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-[-0.035em]">
            Diseñado para cada{" "}
            <span className="font-serif italic font-normal text-amber-300">dimensión</span> de tu dinero
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed font-sans">
            Las 8 innovaciones nucleares de la versión 2.0.0. Arquitectura Local-First estricta,
            diseño Warm Editorial Wealth y soberanía criptográfica en tu propio dispositivo.
          </p>
        </div>

        {/* Architectural 1px Hairline Grid (Anti-Carditis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-[#080e1d]/60">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.coordinate}
                className="border-r border-b border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:bg-white/[0.03] transition-colors group relative"
              >
                {/* Hairline subtle top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/30 transition-all duration-300" />

                <div>
                  {/* Monospace coordinate & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] tracking-wider text-slate-400 group-hover:text-cyan-300 transition-colors">
                      {item.coordinate}
                    </span>
                    <Icon className={`w-4 h-4 ${item.accentColor}`} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-white mb-2.5 tracking-tight group-hover:text-cyan-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6">
                  <span
                    className={`inline-flex items-center text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md border tracking-wider uppercase tabular-nums ${item.tagStyle}`}
                  >
                    {item.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
