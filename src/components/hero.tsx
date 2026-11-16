"use client";

import React, { useState } from "react";
import {
  Download,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Eye,
  EyeOff,
  Check,
  Lock,
  PieChart,
  Landmark,
  Wallet,
  Coins,
  Bot,
  Power,
  Trash2,
} from "lucide-react";
import { EditorialHighlight, ScrollParallaxStage } from "@/components/editorial-motion";
import { openReleaseModal } from "@/components/release-announcement";

type LedgerMode = "patrimonio" | "mcp" | "cuentas" | "cifrado";

const ACCOUNT_SLICES = [
  {
    id: "banco",
    label: "Banco Principal",
    rule: "Tarjeta · Transferencia CLABE",
    amount: "$62,400.00",
    pct: 50.1,
    colorVar: "hsl(var(--semantic-income))",
    dotClass: "bg-editorial-emerald",
    textClass: "text-editorial-emerald",
    icon: Landmark,
  },
  {
    id: "reserva",
    label: "Reserva Digital",
    rule: "Solo Transferencia / Otro",
    amount: "$49,700.00",
    pct: 39.9,
    colorVar: "hsl(var(--semantic-invest))",
    dotClass: "bg-editorial-cobalt",
    textClass: "text-editorial-cobalt",
    icon: Wallet,
  },
  {
    id: "efectivo",
    label: "Efectivo & Arqueo",
    rule: "Efectivo · Automático",
    amount: "$12,490.00",
    pct: 10.0,
    colorVar: "hsl(var(--semantic-warning))",
    dotClass: "bg-editorial-amber",
    textClass: "text-editorial-amber",
    icon: Coins,
  },
] as const;

export function Hero({ version, githubUrl }: { version: string; githubUrl: string }) {
  const [ledgerMode, setLedgerMode] = useState<LedgerMode>("patrimonio");
  const [privacyMask, setPrivacyMask] = useState(false);
  const [activeSliceId, setActiveSliceId] = useState<string>("banco");
  const [mcpReadOnly, setMcpReadOnly] = useState(true);
  const [mcpKillSwitch, setMcpKillSwitch] = useState(true);
  const [activeMcpClient, setActiveMcpClient] = useState<"Claude" | "ChatGPT" | "Gemini">("Claude");

  const activeSlice =
    ACCOUNT_SLICES.find((slice) => slice.id === activeSliceId) ?? ACCOUNT_SLICES[0];

  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Composición Asimétrica de 12 Columnas (7 Columnas Manifiesto / 5 Columnas Escenario Interactivo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Editorial Principal (7 Columnas — De-Boxed sobre el lienzo, pintado inmediato LCP) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="fp-hero-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
              <span className="text-primary font-semibold">00 / MANIFIESTO</span>
              <span>·</span>
              <span>Cero servidores intermediarios</span>
            </div>

            <h1 className="font-display-v2 font-bold text-fluid-hero text-foreground tracking-[-0.035em] leading-[1.04] text-balance">
              <span className="block text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.14em] text-primary mb-3">
                Finance Pal · App de Finanzas Personales Gratis y Privada
              </span>
              Claridad patrimonial y{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                soberanía total
              </EditorialHighlight>{" "}
              en tu propio dispositivo.
            </h1>

            <p className="text-muted-foreground editorial-text-hover text-base sm:text-lg max-w-[60ch] leading-relaxed text-pretty font-sans">
              La relación con tu dinero exige serenidad intelectual, no ruido visual. Finance Pal{" "}
              combina la disciplina de un{" "}
              <EditorialHighlight>cuaderno financiero de alta dirección</EditorialHighlight> con{" "}
              almacenamiento <EditorialHighlight>100% Local-First</EditorialHighlight>,{" "}
              <EditorialHighlight>Conector Universal MCP</EditorialHighlight> (Claude, ChatGPT y
              Gemini) en Solo Lectura con OAuth 2.1,{" "}
              <EditorialHighlight>99 iconos SVG adaptativos</EditorialHighlight> y criptografía{" "}
              <EditorialHighlight>WebCrypto AES-GCM de 256 bits</EditorialHighlight>.
            </p>

            {/* Botones de Acción con Micro-Física Táctil y Alineación Óptica */}
            <div className="fp-hero-enter-delay-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
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
                <span>Explorar dossier v{version}</span>
              </button>
            </div>

            {/* Telemetría De-Boxed sobre el lienzo con líneas divisorias de 1px */}
            <div className="fp-hero-enter-delay-2 pt-6 mt-4 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: "Criptografía Local", value: "AES-256", sub: "PBKDF2 100k rondas" },
                { label: "Protocolo IA Seguro", value: "MCP OAuth 2.1", sub: "Solo Lectura · 2FA aal2" },
                { label: "Iconografía SVG", value: "99 Iconos", sub: "Cero emojis en UI V2" },
                { label: "Suite Verificada", value: "61 Suites", sub: "Vitest + E2E · WCAG AAA" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1 group cursor-default">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground block truncate">
                    {stat.label}
                  </span>
                  <div className="font-mono-tabular font-bold text-lg sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                    {stat.value}
                  </div>
                  <span className="text-[11px] sm:text-xs text-muted-foreground block truncate">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de Escenario Interactivo (5 Columnas — Cuaderno de Auditoría en Vivo) */}
          <ScrollParallaxStage intensity={16} className="lg:col-span-5">
            <div className="rounded-2xl bg-card border border-border border-t-white/15 p-4 sm:p-6 editorial-surface space-y-4 sm:space-y-5">
              {/* Cabecera del inspector */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-border">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold block truncate">
                    Inspector Patrimonial Interactivo
                  </span>
                  <h2 className="font-display font-bold text-base sm:text-lg text-foreground tracking-tight truncate">
                    Hoja de Balance Mensual
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setPrivacyMask((p) => !p)}
                  aria-label={privacyMask ? "Mostrar importes" : "Ocultar importes (Modo Privado)"}
                  title="Probar modo de privacidad instantáneo"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted border border-border text-xs font-mono text-muted-foreground hover:text-foreground tactile-press cursor-pointer shrink-0"
                >
                  {privacyMask ? (
                    <EyeOff className="w-3.5 h-3.5 text-editorial-amber" strokeWidth={1.75} />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                  )}
                  <span>{privacyMask ? "Discreto" : "Visible"}</span>
                </button>
              </div>

              {/* Selector segmentado de vista (4 módulos interactivos v2.2.0) */}
              <div
                role="tablist"
                aria-label="Vistas del cuaderno interactivo"
                className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-muted border border-border text-[10px] sm:text-xs font-medium"
              >
                {[
                  { id: "patrimonio", label: "Balance", icon: Sparkles },
                  { id: "mcp", label: "MCP IA", icon: Bot },
                  { id: "cuentas", label: "Cuentas", icon: PieChart },
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
                      className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 py-1.5 sm:py-2 px-1 sm:px-2 rounded-lg tactile-press cursor-pointer min-w-0 ${
                        active
                          ? "bg-card text-foreground font-semibold shadow-sm border border-border"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" strokeWidth={active ? 2 : 1.5} />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Contenido del escenario según pestaña */}
              {ledgerMode === "patrimonio" && (
                <div className="space-y-4">
                  <div className="pb-4 border-b border-border flex flex-wrap items-baseline justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted-foreground block truncate">
                        Patrimonio Neto Consolidado
                      </span>
                      <div className="font-display font-bold text-2xl sm:text-4xl text-foreground font-mono-tabular tracking-tight mt-1 truncate">
                        {privacyMask ? "••••••••" : "$124,590.00"}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-editorial-emerald text-xs font-mono-tabular font-semibold border border-border shrink-0">
                      ↑ +14.2%
                    </span>
                  </div>

                  {/* Matriz Semántica Financiera con líneas de 1px */}
                  <div className="divide-y divide-border text-xs">
                    <div className="py-2.5 flex items-center justify-between gap-2 editorial-text-hover">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-editorial-emerald shrink-0" />
                        <span className="font-medium text-foreground truncate">Ingresos y Liquidez</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-emerald shrink-0 text-right">
                        {privacyMask ? "••••••" : "+$48,200.00"}
                      </span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between gap-2 editorial-text-hover">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-editorial-terracotta shrink-0" />
                        <span className="font-medium text-foreground truncate">Egresos Operativos (15 SVG)</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-terracotta shrink-0 text-right">
                        {privacyMask ? "••••••" : "-$16,410.00"}
                      </span>
                    </div>
                    <div className="py-2.5 flex items-center justify-between gap-2 editorial-text-hover">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-editorial-cobalt shrink-0" />
                        <span className="font-medium text-foreground truncate">Inversión &amp; Reserva Activa</span>
                      </div>
                      <span className="font-mono-tabular font-semibold text-editorial-cobalt shrink-0 text-right">
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

              {ledgerMode === "cuentas" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-1 border-b border-border">
                    <span className="truncate">DONUTCHART SVG · DISTRIBUCIÓN</span>
                    <span className="text-primary font-semibold tabular-nums shrink-0">100.0% exacto</span>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-muted/60 border border-border">
                    <div className="relative w-24 h-24 shrink-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-label="Gráfico circular de cuentas">
                        <circle
                          cx="50"
                          cy="50"
                          r="36"
                          fill="none"
                          stroke="hsl(var(--border))"
                          strokeWidth="10"
                        />
                        {ACCOUNT_SLICES.reduce<{ elements: React.ReactNode[]; offset: number }>(
                          (acc, slice) => {
                            const isActive = slice.id === activeSlice.id;
                            const dashLen = Math.max(slice.pct - 1.5, 1);
                            acc.elements.push(
                              <circle
                                key={slice.id}
                                cx="50"
                                cy="50"
                                r="36"
                                fill="none"
                                pathLength={100}
                                stroke={slice.colorVar}
                                strokeWidth={isActive ? 13 : 10}
                                strokeLinecap="butt"
                                strokeDasharray={`${dashLen} ${100 - dashLen}`}
                                strokeDashoffset={-acc.offset}
                                onClick={() => setActiveSliceId(slice.id)}
                                className="cursor-pointer transition-all duration-200"
                                opacity={isActive ? 1 : 0.65}
                              />
                            );
                            return { elements: acc.elements, offset: acc.offset + slice.pct };
                          },
                          { elements: [], offset: 0 }
                        ).elements}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                        <span className="font-mono-tabular font-bold text-sm text-foreground">
                          {activeSlice.pct.toFixed(1)}%
                        </span>
                        <span className="text-[9px] font-mono text-muted-foreground uppercase">
                          Cuota
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                        Cuenta seleccionada
                      </span>
                      <div className={`font-semibold text-sm truncate ${activeSlice.textClass}`}>
                        {activeSlice.label}
                      </div>
                      <div className="font-mono-tabular font-bold text-base text-foreground">
                        {privacyMask ? "••••••" : activeSlice.amount}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground truncate">
                        Regla QuickSheet: {activeSlice.rule}
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-border">
                    {ACCOUNT_SLICES.map((slice) => {
                      const SliceIcon = slice.icon;
                      const isActive = slice.id === activeSlice.id;
                      return (
                        <button
                          key={slice.id}
                          type="button"
                          onClick={() => setActiveSliceId(slice.id)}
                          className={`w-full py-2 px-1.5 flex items-center justify-between gap-2 text-left rounded-lg transition-colors cursor-pointer ${
                            isActive ? "bg-muted/80" : "hover:bg-muted/40"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${slice.dotClass}`} />
                            <SliceIcon className="w-3.5 h-3.5 text-muted-foreground shrink-0" strokeWidth={1.75} />
                            <span className="font-medium text-foreground truncate">{slice.label}</span>
                          </div>
                          <div className="flex items-center gap-2.5 font-mono-tabular shrink-0">
                            <span className="text-muted-foreground text-[11px]">{slice.pct.toFixed(1)}%</span>
                            <span className="font-semibold text-foreground">
                              {privacyMask ? "••••••" : slice.amount}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {ledgerMode === "mcp" && (
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-1 border-b border-border">
                    <span className="truncate">CONECTOR MCP · OAUTH 2.1 + PKCE</span>
                    <button
                      type="button"
                      onClick={() => setMcpKillSwitch((prev) => !prev)}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-semibold cursor-pointer tactile-press shrink-0 ${
                        mcpKillSwitch
                          ? "bg-muted border-border text-editorial-emerald"
                          : "bg-muted border-border text-editorial-terracotta"
                      }`}
                    >
                      <Power className="w-3 h-3" strokeWidth={1.75} />
                      <span>{mcpKillSwitch ? "Kill Switch: ON" : "Kill Switch: OFF"}</span>
                    </button>
                  </div>

                  {/* Clientes IA autorizados */}
                  <div className="grid grid-cols-3 gap-1.5 font-mono text-[11px]">
                    {(["Claude", "ChatGPT", "Gemini"] as const).map((client) => (
                      <button
                        key={client}
                        type="button"
                        onClick={() => setActiveMcpClient(client)}
                        className={`py-1.5 px-2 rounded-lg border text-center cursor-pointer tactile-press truncate ${
                          activeMcpClient === client
                            ? "bg-card text-foreground border-primary font-semibold"
                            : "bg-muted/60 text-muted-foreground border-border hover:text-foreground"
                        }`}
                      >
                        {client}
                      </button>
                    ))}
                  </div>

                  {/* Controles de seguridad Solo Lectura */}
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-semibold text-foreground block truncate">
                          Modo Solo Lectura ({activeMcpClient})
                        </span>
                        <span className="text-[11px] text-muted-foreground block">
                          {mcpKillSwitch
                            ? mcpReadOnly
                              ? "6 scopes mcp:read:* activos (2FA aal2)"
                              : "Lectura + Escritura y borrado TTL 120s"
                            : "Acceso MCP suspendido inmediatamente"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setMcpReadOnly((prev) => !prev)}
                        className="px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-mono font-semibold text-primary cursor-pointer tactile-press shrink-0"
                      >
                        {mcpReadOnly ? "Solo Lectura" : "Escritura"}
                      </button>
                    </div>

                    <div className="pt-2 border-t border-border grid grid-cols-3 gap-2 text-[10px] font-mono-tabular text-center">
                      <div className="p-1.5 rounded-lg bg-card border border-border">
                        <span className="text-muted-foreground block">HERRAMIENTAS</span>
                        <span className="font-bold text-foreground">
                          {privacyMask ? "••" : mcpReadOnly ? "8 read" : "18 total"}
                        </span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-card border border-border">
                        <span className="text-muted-foreground block">CONCESIONES</span>
                        <span className="font-bold text-foreground">3 / 5 máx</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-card border border-border flex flex-col items-center justify-center">
                        <span className="text-muted-foreground inline-flex items-center gap-1">
                          <Trash2 className="w-2.5 h-2.5" strokeWidth={1.75} />
                          PAPELERA
                        </span>
                        <span className="font-bold text-editorial-amber">30 días</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {ledgerMode === "cifrado" && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border space-y-2">
                    <div className="flex items-center justify-between gap-2 text-foreground font-semibold">
                      <span className="inline-flex items-center gap-1.5 truncate">
                        <Lock className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.75} />
                        <span className="truncate">Bóveda Local WebCrypto</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-card border border-border text-primary shrink-0">
                        VERIFICADO
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                      Cada registro se cifra en tu dispositivo antes de guardarse en SQLite o
                      IndexedDB; los comprobantes se comprimen a 5 MB con refs privadas sb:receipts.
                    </p>
                    <div className="pt-2 border-t border-border space-y-1 text-[11px] tabular-nums">
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">Algoritmo:</span>
                        <span className="text-foreground">AES-GCM 256-bit</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">Derivación KDF:</span>
                        <span className="text-foreground">PBKDF2 · 100,000 iter.</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">Comprobantes:</span>
                        <span className="text-foreground">Magic Bytes · ≤ 5 MB</span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <span className="text-muted-foreground">Divulgación:</span>
                        <a
                          href={`${githubUrl}/blob/main/SECURITY.md`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-editorial-emerald font-semibold hover:underline"
                        >
                          SECURITY.md ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Pie del cuaderno */}
              <div className="pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                  <span>MCP OAuth 2.1 · 99 SVG</span>
                </span>
                <span>SQLite · IDB · v{version}</span>
              </div>
            </div>
          </ScrollParallaxStage>
        </div>
      </div>
    </section>
  );
}
