"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ArrowUpRight,
  ShieldCheck,
  FolderKanban,
  Sparkles,
  Eye,
  EyeOff,
  Check,
  Lock,
} from "lucide-react";
import { EditorialHighlight, ScrollParallaxStage } from "@/components/editorial-motion";
import { openReleaseModal } from "@/components/release-announcement";

type LedgerMode = "patrimonio" | "metas" | "cifrado";

export function Hero({ version, githubUrl }: { version: string; githubUrl: string }) {
  const [ledgerMode, setLedgerMode] = useState<LedgerMode>("patrimonio");
  const [privacyMask, setPrivacyMask] = useState(false);

  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabezal Editorial Superior (Estilo Cuaderno Financiero de Alta Dirección) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 lg:mb-12 border-b border-border text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            <span className="uppercase tracking-widest font-semibold text-foreground">
              Cuaderno Patrimonial · Edición v{version}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="hidden sm:inline italic font-serif text-sm text-foreground/90">
              Warm Editorial Wealth
            </span>
          </div>
          <div className="flex items-center gap-4 tabular-nums">
            <span>AES-GCM 256-BIT</span>
            <span className="text-border">·</span>
            <span>WCAG AAA 8.5:1</span>
            <span className="hidden md:inline text-border">·</span>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              <span>Licencia MIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* Composición Asimétrica de 12 Columnas (7 Columnas Manifiesto / 5 Columnas Escenario Interactivo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Editorial Principal (7 Columnas — De-Boxed sobre el lienzo) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground"
            >
              <span className="text-primary font-semibold">00 / MANIFIESTO</span>
              <span>·</span>
              <span>Cero servidores intermediarios</span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="font-display-v2 font-bold text-4xl sm:text-6xl lg:text-[4.15rem] text-foreground tracking-[-0.035em] leading-[1.04] text-balance"
            >
              Claridad patrimonial y{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                soberanía total
              </EditorialHighlight>{" "}
              en tu propio dispositivo.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="text-muted-foreground editorial-text-hover text-base sm:text-lg max-w-[60ch] leading-relaxed text-pretty font-sans"
            >
              La relación con tu dinero exige serenidad intelectual, no ruido visual. FinancePal{" "}
              combina la disciplina de un{" "}
              <EditorialHighlight>cuaderno financiero de alta dirección</EditorialHighlight> con{" "}
              almacenamiento <EditorialHighlight>100% Local-First</EditorialHighlight>, metas
              jerárquicas Drag &amp; Drop y criptografía{" "}
              <EditorialHighlight>WebCrypto AES-GCM de 256 bits</EditorialHighlight>.
            </motion.p>

            {/* Botones de Acción con Micro-Física Táctil y Alineación Óptica */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href="#descarga"
                className="inline-flex items-center justify-center gap-2.5 ps-6 pe-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                style={{ boxShadow: "var(--shadow-border)" }}
              >
                <span>Descargar APK v{version}</span>
                <Download
                  className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              <a
                href="https://financepal-web.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 ps-5 pe-4 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-foreground bg-card hover:bg-muted border border-border hover:border-primary/40 tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <span>Abrir Web App</span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-primary font-mono border border-border">
                  PWA
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>

              <button
                type="button"
                onClick={() => openReleaseModal()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Sparkles className="w-4 h-4 text-editorial-amber" strokeWidth={1.75} />
                <span>Explorar dossier v2.0</span>
              </button>
            </motion.div>

            {/* Telemetría De-Boxed sobre el lienzo con líneas divisorias de 1px */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="pt-6 mt-4 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { label: "Criptografía Local", value: "AES-256", sub: "PBKDF2 100k rondas" },
                { label: "Motores de Base", value: "SQLite + IDB", sub: "100% Offline-First" },
                { label: "Arranque en Frío", value: "0.00 ms", sub: "Zero-Flash Theme" },
                { label: "Contraste Óptico", value: "8.5 : 1", sub: "Certificado WCAG AAA" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1 group cursor-default">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                    {stat.label}
                  </span>
                  <div className="font-mono-tabular font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                    {stat.value}
                  </div>
                  <span className="text-xs text-muted-foreground block">{stat.sub}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna de Escenario Interactivo (5 Columnas — Cuaderno de Auditoría en Vivo) */}
          <ScrollParallaxStage intensity={16} className="lg:col-span-5">
            <div className="rounded-2xl bg-card border border-border border-t-white/15 p-5 sm:p-6 editorial-surface space-y-5">
              {/* Cabecera del inspector */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-border">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold block">
                    Inspector Patrimonial Interactivo
                  </span>
                  <h2 className="font-display font-bold text-lg text-foreground tracking-tight">
                    Hoja de Balance Mensual
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setPrivacyMask((p) => !p)}
                  aria-label={privacyMask ? "Mostrar importes" : "Ocultar importes (Modo Privado)"}
                  title="Probar modo de privacidad instantáneo"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted border border-border text-xs font-mono text-muted-foreground hover:text-foreground tactile-press cursor-pointer"
                >
                  {privacyMask ? (
                    <EyeOff className="w-3.5 h-3.5 text-editorial-amber" strokeWidth={1.75} />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                  )}
                  <span>{privacyMask ? "Discreto" : "Visible"}</span>
                </button>
              </div>

              {/* Selector segmentado de vista (Radios armónicos: contenedor rounded-xl, pastilla rounded-lg) */}
              <div
                role="tablist"
                aria-label="Vistas del cuaderno interactivo"
                className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-muted border border-border text-xs font-medium"
              >
                {[
                  { id: "patrimonio", label: "Balance", icon: Sparkles },
                  { id: "metas", label: "Metas v2", icon: FolderKanban },
                  { id: "cifrado", label: "AES-256", icon: ShieldCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = ledgerMode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setLedgerMode(tab.id as LedgerMode)}
                      className={`inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg tactile-press cursor-pointer ${
                        active
                          ? "bg-card text-foreground font-semibold shadow-sm border border-border"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" strokeWidth={active ? 2 : 1.5} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenido del escenario según pestaña */}
              {ledgerMode === "patrimonio" && (
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                        Patrimonio Neto Consolidado
                      </span>
                      <div className="font-display font-bold text-3xl sm:text-4xl text-foreground font-mono-tabular tracking-tight mt-1">
                        {privacyMask ? "••••••••" : "$124,590.00"}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-editorial-emerald text-xs font-mono-tabular font-semibold border border-border">
                      ↑ +14.2%
                    </span>
                  </div>

                  {/* Matriz Semántica Financiera con líneas de 1px */}
                  <div className="divide-y divide-border text-xs">
                    <div className="py-2.5 flex items-center justify-between editorial-text-hover">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-editorial-emerald" />
                        <span className="font-medium text-foreground">Ingresos y Liquidez</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-emerald">
                        {privacyMask ? "••••••" : "+$48,200.00"}
                      </span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between editorial-text-hover">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-editorial-terracotta" />
                        <span className="font-medium text-foreground">Egresos Operativos (15 rubros)</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-terracotta">
                        {privacyMask ? "••••••" : "-$16,410.00"}
                      </span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between editorial-text-hover">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-editorial-cobalt" />
                        <span className="font-medium text-foreground">Inversión &amp; Reserva Activa</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-cobalt">
                        {privacyMask ? "••••••" : "$92,800.00"}
                      </span>
                    </div>
                  </div>

                  {/* Barra con desaceleración exponencial (.spring-bar) */}
                  <div className="pt-2 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-muted-foreground">
                      <span>Tasa de retención mensual</span>
                      <span className="text-foreground font-semibold tabular-nums">65.9%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden p-0.5 border border-border">
                      <div className="h-full rounded-full bg-primary spring-bar w-[66%]" />
                    </div>
                  </div>
                </div>
              )}

              {ledgerMode === "metas" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-1 border-b border-border">
                    <span>CARPETA: PATRIMONIO &amp; LIQUIDEZ</span>
                    <span className="text-primary font-semibold">Drag &amp; Drop ⠿</span>
                  </div>
                  {[
                    {
                      name: "Fondo de Reserva (6 Meses)",
                      saved: "$78,000",
                      target: "$90,000",
                      pct: 86,
                      pace: "$1,500 / sem",
                    },
                    {
                      name: "Equipamiento & Estudio",
                      saved: "$24,500",
                      target: "$35,000",
                      pct: 70,
                      pace: "$850 / sem",
                    },
                  ].map((goal) => (
                    <div
                      key={goal.name}
                      className="p-3.5 rounded-xl bg-muted/60 border border-border space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">{goal.name}</span>
                        <span className="font-mono-tabular text-primary font-bold">
                          {goal.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-background overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary spring-bar"
                          style={{ width: `${goal.pct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] font-mono-tabular text-muted-foreground">
                        <span>
                          {privacyMask ? "••••" : goal.saved} / {privacyMask ? "••••" : goal.target}
                        </span>
                        <span>Ritmo: {goal.pace}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {ledgerMode === "cifrado" && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border space-y-2">
                    <div className="flex items-center justify-between text-foreground font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                        <span>Bóveda Local WebCrypto</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-card border border-border text-primary">
                        VERIFICADO
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                      Cada registro contable se cifra en tu dispositivo con un vector IV único antes
                      de escribirse en SQLite o IndexedDB.
                    </p>
                    <div className="pt-2 border-t border-border space-y-1 text-[11px] tabular-nums">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Algoritmo:</span>
                        <span className="text-foreground">AES-GCM 256-bit</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Derivación KDF:</span>
                        <span className="text-foreground">PBKDF2 · 100,000 iter.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">2FA Local:</span>
                        <span className="text-editorial-emerald font-semibold">TOTP Activo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pie del cuaderno */}
              <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.2} />
                  <span>Sin telemetría ni rastreo</span>
                </span>
                <span>SQLite · IndexedDB</span>
              </div>
            </div>
          </ScrollParallaxStage>
        </div>
      </div>
    </section>
  );
}
