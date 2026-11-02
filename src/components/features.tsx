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
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

interface FeatureItem {
  coordinate: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  accentColor: string;
}

const FEATURES: FeatureItem[] = [
  {
    coordinate: "01 / ATMÓSFERA",
    icon: Palette,
    title: "Warm Editorial Wealth",
    desc: "Atmósfera de cuaderno patrimonial con tríada tipográfica Fraunces, Plus Jakarta Sans y JetBrains Mono, superficies en alabastro u obsidiana y microfísica a 120 FPS.",
    tag: "Atmósfera v2.0",
    accentColor: "text-editorial-amber",
  },
  {
    coordinate: "02 / METAS",
    icon: FolderKanban,
    title: "Metas con Drag & Drop",
    desc: "Organización jerárquica con subcarpetas multinivel y reordenamiento fluido táctil con dnd-kit. Proyección predictiva de ritmo diario y semanal.",
    tag: "Carpetas dnd-kit",
    accentColor: "text-editorial-emerald",
  },
  {
    coordinate: "03 / TAXONOMÍA",
    icon: Tags,
    title: "15 Categorías + Custom",
    desc: "15 categorías universales curadas para consumo cotidiano y creador inline de categorías ilimitadas con selector dinámico de emojis (máx. 20 caracteres).",
    tag: "15 + Ilimitadas",
    accentColor: "text-editorial-cobalt",
  },
  {
    coordinate: "04 / RENDIMIENTO",
    icon: Zap,
    title: "Zero-Flash Boot",
    desc: "Detección síncrona en el head del documento de fp-theme-pref antes del primer render de React para erradicar el parpadeo blanco. Selector en login/registro.",
    tag: "0.00 ms Flash",
    accentColor: "text-primary",
  },
  {
    coordinate: "05 / INTELIGENCIA",
    icon: BarChart3,
    title: "Resumen Macroeconómico",
    desc: "Balance anual en 4 columnas (General, Categorías, Métodos, Metas), desglose porcentual ponderado y detección visual de anomalías de consumo.",
    tag: "4 Columnas Macro",
    accentColor: "text-editorial-amber",
  },
  {
    coordinate: "06 / CRIPTOGRAFÍA",
    icon: ShieldCheck,
    title: "WebCrypto AES-256",
    desc: "Criptografía simétrica nativa en cliente con WebCrypto AES-GCM 256-bit, KDF PBKDF2 de 100,000 rondas, 2FA TOTP y auditoría k-Anonymity HaveIBeenPwned.",
    tag: "Local-First Militar",
    accentColor: "text-editorial-emerald",
  },
  {
    coordinate: "07 / SOBERANÍA",
    icon: RefreshCw,
    title: "Sync Zero-Knowledge",
    desc: "Sincronización multi-dispositivo cifrada en cliente con Supabase. Los datos viajan y residen cifrados sin que la nube pueda leer montos ni conceptos.",
    tag: "Zero-Knowledge",
    accentColor: "text-editorial-cobalt",
  },
  {
    coordinate: "08 / ACCESIBILIDAD",
    icon: Sparkles,
    title: "Accesibilidad WCAG AAA",
    desc: "Isotipo oficial en escudo esmeralda con sendero ascendente, contraste certificado WCAG AAA (8.5:1), blancos táctiles accesibles y soporte para dislexia y daltonismo.",
    tag: "WCAG AAA 8.5:1",
    accentColor: "text-editorial-terracotta",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Asimétrica de 12 Columnas */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              03 / ARQUITECTURA DE OCHO PILARES
            </span>
            <h2 className="font-display-v2 font-bold text-3xl sm:text-5xl text-foreground text-balance">
              Diseñado para cada{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                dimensión patrimonial
              </EditorialHighlight>{" "}
              de tu vida.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed text-pretty">
              Cero acumulación de tarjetas pesadas (*De-Boxing*). Los 8 módulos nucleares de la{" "}
              <EditorialHighlight>edición v2.0.0</EditorialHighlight> se articulan mediante filetes
              de 1px y jerarquía tipográfica limpia.
            </p>
          </div>
        </ScrollReveal>

        {/* Architectural 1px Hairline Grid (Anti-Carditis) */}
        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border rounded-2xl overflow-hidden bg-card/75 backdrop-blur-sm">
            {FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.coordinate}
                  className="border-r border-b border-border p-6 sm:p-7 flex flex-col justify-between hover:bg-muted/50 transition-colors duration-200 group relative"
                >
                  {/* Hairline subtle top highlight */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"
                  />

                  <div>
                    {/* Monospace coordinate & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono-tabular text-[11px] tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                        {item.coordinate}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${item.accentColor} transition-transform duration-200 ease-out group-hover:scale-110`}
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* Title with interactive highlight on hover */}
                    <h3 className="font-display font-bold text-lg text-foreground mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                      <span className="editorial-highlight">{item.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-6">
                    <span className="inline-flex items-center text-[10px] font-mono-tabular font-semibold px-2.5 py-1 rounded-md border border-border bg-muted/70 text-foreground tracking-wider uppercase">
                      {item.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
