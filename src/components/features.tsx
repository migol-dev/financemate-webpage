import React from "react";
import {
  Palette,
  Layers,
  Zap,
  Receipt,
  PieChart,
  FolderKanban,
  ShieldCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";
import { APP_VERSION } from "@/lib/release";

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
    desc: "Atmósfera de cuaderno patrimonial con tríada tipográfica Fraunces, Plus Jakarta Sans y JetBrains Mono, superficies en alabastro u obsidiana y arranque Zero-Flash sin parpadeo.",
    tag: `Edición v${APP_VERSION}`,
    accentColor: "text-editorial-amber",
  },
  {
    coordinate: "02 / ICONOGRAFÍA",
    icon: Layers,
    title: "99 Iconos Vectoriales SVG",
    desc: "Interfaz V2 completamente libre de emojis: sistema tipado de 99 iconos SVG adaptativos vía currentColor con 4 glifos financieros propios y traducción automática de íconos previos.",
    tag: "Cero Emojis · SVG",
    accentColor: "text-editorial-emerald",
  },
  {
    coordinate: "03 / REGISTRO",
    icon: Zap,
    title: "Registro Rápido Inteligente",
    desc: "QuickTransactionSheet contextual que filtra métodos de pago según la cuenta (efectivo automático, tarjeta o transferencia CLABE) y adjunta comprobantes al instante.",
    tag: "Quick Sheet · CLABE",
    accentColor: "text-editorial-cobalt",
  },
  {
    coordinate: "04 / COMPROBANTES",
    icon: Receipt,
    title: "Recibos Privados 5 MB",
    desc: "Validación local de magic bytes (JPEG, PNG y WebP), compresión automática en cliente hasta 5 MB y referencias lógicas seguras sb:receipts resueltas bajo demanda.",
    tag: "Magic Bytes · 5 MB",
    accentColor: "text-primary",
  },
  {
    coordinate: "05 / INTELIGENCIA",
    icon: PieChart,
    title: "DonutChart SVG y Anual",
    desc: "Gráficos circulares interactivos adaptativos con porcentajes que suman exactamente 100.0%, desglose de efectivo por denominación y balance anual en 4 columnas.",
    tag: "DonutChart 100.0%",
    accentColor: "text-editorial-amber",
  },
  {
    coordinate: "06 / NAVEGACIÓN",
    icon: FolderKanban,
    title: "Deudas en Barra Principal",
    desc: "Barra inferior renovada (Inicio, Movimientos, +, Metas y Deudas) con metas jerárquicas dnd-kit, deslizamiento fluido y menú compacto superior para Anual, Historial y Ajustes.",
    tag: "BottomNav · dnd-kit",
    accentColor: "text-editorial-emerald",
  },
  {
    coordinate: "07 / CRIPTOGRAFÍA",
    icon: ShieldCheck,
    title: "AES-256 y SECURITY.md",
    desc: "Cifrado simétrico WebCrypto AES-GCM 256-bit, PBKDF2 de 100,000 rondas, 2FA TOTP, auditoría k-Anonymity, sincronización Zero-Knowledge y política de seguridad publicada.",
    tag: "Zero-Knowledge · 2FA",
    accentColor: "text-editorial-cobalt",
  },
  {
    coordinate: "08 / NATIVO & QA",
    icon: RefreshCw,
    title: "Auto-Update y 382 Tests",
    desc: "Detección in-app de lanzamientos en GitHub Releases para Android con verificación de host confiable, contraste WCAG AAA (8.5:1) y 52 suites con 382 pruebas automatizadas.",
    tag: "52 Suites · 382 Tests",
    accentColor: "text-editorial-terracotta",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="fp-cv-section py-12 sm:py-16 lg:py-24 border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Asimétrica de 12 Columnas */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block text-xs font-mono font-semibold text-primary uppercase tracking-widest">
              03 / ARQUITECTURA DE OCHO PILARES
            </span>
            <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground text-balance">
              Diseñado para cada{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                dimensión patrimonial
              </EditorialHighlight>{" "}
              de tu vida.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed text-pretty">
              Cero acumulación de tarjetas pesadas (De-Boxing). Los 8 módulos nucleares de la{" "}
              <EditorialHighlight>edición v{APP_VERSION}</EditorialHighlight> se articulan mediante filetes
              de 1px y jerarquía tipográfica limpia.
            </p>
          </div>
        </ScrollReveal>

        {/* Architectural 1px Hairline Grid (Anti-Carditis) */}
        <ScrollReveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-border rounded-2xl overflow-hidden bg-card/95">
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
