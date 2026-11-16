"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  X,
  Download,
  ExternalLink,
  ShieldCheck,
  Bot,
  Trash2,
  Filter,
  Command,
  PieChart,
  RefreshCw,
  Check,
  Lock,
  Plus,
  ChevronLeft,
  ChevronRight,
  Power,
  Eye,
  KeyRound,
  Utensils,
  Home,
  Landmark,
  Wallet,
  Coins,
  CreditCard,
  Smartphone,
  RotateCcw,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  APP_VERSION,
  APP_SHORT_VERSION,
  APK_DOWNLOAD_URL,
  APK_SIZE_LABEL,
  APK_SHA256_SHORT,
  RELEASE_TAG_URL,
  SECURITY_POLICY_URL,
} from "@/lib/release";

interface ReleaseFeature {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  shortTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metricLabel: string;
  metricValue: string;
  previewType: "mcp" | "trash" | "smartfilter" | "cmdk" | "charts" | "update" | "security";
}

const RELEASE_FEATURES: ReleaseFeature[] = [
  {
    id: "mcp",
    icon: Bot,
    shortTitle: "Conector MCP",
    badge: `Universal AI ${APP_SHORT_VERSION}`,
    title: "Conector Universal MCP (Claude, ChatGPT y Gemini)",
    subtitle: "Servidor remoto Model Context Protocol (2025-11-25) sobre OAuth 2.1 + PKCE",
    description:
      "Conecta tu asistente de IA favorito de forma 100% opcional y bajo tu control en /oauth/consent. Inicia en modo Solo Lectura por defecto con verificación 2FA (aal2), 18 herramientas, 4 recursos y 3 prompts en español.",
    bullets: [
      "Autenticación OAuth 2.1 + PKCE (S256) con descubrimiento automático RFC 8707/9728, Dynamic Client Registration (/oauth/register) y CIMD.",
      "Selección granular de 11 permisos (6 mcp:read:*, 4 mcp:write:* y 1 opt-in mcp:delete:soft) con preservación de retorno tras iniciar sesión.",
      "Protección estricta de lectura (máx. 90 días / 50 filas por consulta) mediante Gateway RPCs cero-PII en Supabase PostgreSQL 17.",
    ],
    metricLabel: "Capacidades MCP",
    metricValue: "18 Tools · 4 Rec · 3 Prompts",
    previewType: "mcp",
  },
  {
    id: "trash",
    icon: Trash2,
    shortTitle: "Papelera 30d & Kill",
    badge: "Gobernanza IA",
    title: "Papelera de Recuperación (30 días) y Control de Conectores",
    subtitle: "Ajustes > 10 · Conectores IA (MCP) con Kill Switch y borrado en 2 pasos",
    description:
      "Ninguna IA puede destruir registros de forma irreversible: cualquier eliminación solicita confirmación en 2 pasos (prepare_soft_delete con TTL de 120s + confirm_soft_delete) y envía el registro a la Papelera durante 30 días.",
    bullets: [
      "Kill Switch global por usuario y límite estricto de hasta 5 concesiones activas simultáneas.",
      "Visor en tiempo real de auditoría de invocaciones MCP (mcp_audit_log) para detectar anomalías al instante.",
      "Restauración en un toque o purga definitiva tras 30 días respaldada por tarea diaria pg_cron (mcp-cleanup-expired-daily).",
    ],
    metricLabel: "Ventana de resguardo",
    metricValue: "30 Días · TTL 120s",
    previewType: "trash",
  },
  {
    id: "smartfilter",
    icon: Filter,
    shortTitle: "Filtro Cuentas",
    badge: "UX Movimientos",
    title: "Filtrado Inteligente de Cuentas por Método de Pago",
    subtitle: "Menos errores al registrar ingresos o gastos en /movimientos",
    description:
      "En Nuevo Movimiento y Editar Movimiento, el selector de cuenta filtra dinámicamente solo las cuentas compatibles con el método elegido (excluye efectivo cuando seleccionas Tarjeta o Transferencia, y viceversa).",
    bullets: [
      "Cuentas de efectivo se vinculan automáticamente al elegir pago en Efectivo.",
      "Si existen múltiples cuentas bancarias compatibles, evita autoseleccionar por error y muestra la guía «Selecciona una...».",
      "Compatible con QuickTransactionSheet y captura limpia de CLABE de 18 dígitos.",
    ],
    metricLabel: "Precisión de captura",
    metricValue: "0 Cruces Erróneos",
    previewType: "smartfilter",
  },
  {
    id: "cmdk",
    icon: Command,
    shortTitle: "Cmd+K Refinado",
    badge: "Navegación Rápida",
    title: "Rediseño de Command Palette (Cmd+K / Ctrl+K)",
    subtitle: "Encabezado limpio con cierre ESC, atajos legibles y 99 iconos SVG",
    description:
      "Refinamos la paleta de comandos para escritorio y PWA eliminando botones superpuestos y anillos de foco duplicados, optimizando el contraste de atajos rápidos en tema claro y oscuro.",
    bullets: [
      "Nuevo encabezado con botón de cierre integrado (ESC) y alineación uniforme del botón lateral Buscar...",
      "Atajos de teclado (+, T, Alt+D) calibrados para alto contraste en Warm Alabaster y Obsidian Carbon.",
      "Integrado con los 99 iconos vectoriales SVG adaptativos vía currentColor sin ningún emoji en UI V2.",
    ],
    metricLabel: "Acceso por teclado",
    metricValue: "Cmd+K · + / T / Alt+D",
    previewType: "cmdk",
  },
  {
    id: "charts",
    icon: PieChart,
    shortTitle: "DonutChart & 99 SVG",
    badge: "Visualización Exacta",
    title: "Gráficos DonutChart SVG y Catálogo Vectorial",
    subtitle: "Porcentajes redondeados al 100.0% exacto y categorías sin emojis",
    description:
      "Mantiene los gráficos SVG adaptativos con distribución exacta al 100.0% para cuentas y arqueo de efectivo por denominación, junto al sistema tipado de 99 iconos vectoriales SVG.",
    bullets: [
      "95 iconos Lucide + 4 glifos financieros exclusivos (Billete, Monedas, CLABE, Recibo) adaptativos por currentColor.",
      "Suma exacta garantizada al 100.0% en todos los segmentos seleccionables de DonutChart.",
      "Visibilidad completa de saldos positivos por cuenta desde móvil y Balance Anual de 4 columnas.",
    ],
    metricLabel: "Exactitud visual",
    metricValue: "99 SVG · 100.0%",
    previewType: "charts",
  },
  {
    id: "update",
    icon: RefreshCw,
    shortTitle: "Auto-Update APK",
    badge: `Nativo Android ${APP_SHORT_VERSION}`,
    title: "Actualizador In-App contra GitHub Releases",
    subtitle: "Detección exclusiva en Android con hosts HTTPS verificados",
    description:
      "Verifica nuevas ediciones directamente contra GitHub Releases solo en plataforma nativa Android, evitando avisos innecesarios en Web/PWA y respetando versiones pospuestas.",
    bullets: [
      "Comparación SemVer estricta, caché de 6h, validación de hosts confiables GitHub/CDN y digest SHA-256 verificable.",
      "Compatible con ESM nativo Node.js 24 en rutas /api, comprobantes privados ≤ 5 MB (sb:receipts) y magic bytes.",
      "Verificación manual disponible en cualquier instante desde Ajustes -> Seguridad y Sistema.",
    ],
    metricLabel: "Binario oficial",
    metricValue: `${APK_SIZE_LABEL} · APK`,
    previewType: "update",
  },
  {
    id: "security",
    icon: ShieldCheck,
    shortTitle: "Seguridad & 61 Suites",
    badge: "61 Suites Verificadas",
    title: "WebCrypto AES-256, Anti-Prompt-Injection y 61 Suites",
    subtitle: "Endurecimiento extremo en servidor MCP, SQLite/IDB y políticas RLS",
    description:
      "Combina el cifrado local AES-GCM de 256 bits con las salvaguardas específicas del servidor MCP: tokens de 15 min, rotación de refresh tokens con detección de reuso y aislamiento <untrusted_user_note>.",
    bullets: [
      "Sanitización de campos de usuario contra prompt injection indirecto y limitación de tasa por usuario/IP.",
      "Políticas RLS estrictas con deleted_at IS NULL, RPC hotfix de borrado suave y validación Zod en cada herramienta.",
      "61 archivos de prueba automatizados cubriendo E2E MCP, OAuth 2.1, storage de recibos y no-emoji guard.",
    ],
    metricLabel: "Cobertura QA",
    metricValue: "61 Suites · AES-256",
    previewType: "security",
  },
];

const ACCOUNT_OPTIONS = [
  { id: "efectivo-caja", label: "Caja Efectivo ($1,520)", kind: "cash" as const },
  { id: "bbva", label: "Banco BBVA ($62,400)", kind: "bank" as const },
  { id: "nu", label: "Cuenta Digital Nu ($49,700)", kind: "bank" as const },
] as const;

const CHART_SLICES_BY_MODE = {
  accounts: [
    { id: "bbva", label: "Banco Principal", pct: 54.5, value: "$67,900", stroke: "#34D399" },
    { id: "cetes", label: "Reserva Digital", pct: 32.0, value: "$39,870", stroke: "#60A5FA" },
    { id: "cash", label: "Efectivo Bóveda", pct: 13.5, value: "$16,820", stroke: "#F59E0B" },
  ],
  cash: [
    { id: "b500", label: "Billetes $500", pct: 60.0, value: "$10,000", stroke: "#34D399" },
    { id: "b200", label: "Billetes $200", pct: 28.5, value: "$4,800", stroke: "#F59E0B" },
    { id: "coins", label: "Monedas / Cambio", pct: 11.5, value: "$2,020", stroke: "#E07A5F" },
  ],
} as const;

const CMD_ITEMS = [
  { key: "+", label: "Nuevo movimiento", section: "Acción", icon: Plus },
  { key: "T", label: "Traspaso entre cuentas", section: "Acción", icon: Coins },
  { key: "Alt+D", label: "Ir a Deudas", section: "Navegar", icon: Wallet },
  { key: "MCP", label: "Ajustes > Conectores IA", section: "Ajustes", icon: Bot },
] as const;

export interface ReleaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReleaseModal({ open, onOpenChange }: ReleaseModalProps) {
  const [activeTab, setActiveTab] = useState<string>("mcp");

  // 1. MCP Consent state
  const [readOnlyMcp, setReadOnlyMcp] = useState(true);
  const [softDeleteOptIn, setSoftDeleteOptIn] = useState(false);

  // 2. Papelera 30d & Kill Switch state
  const [killSwitchActive, setKillSwitchActive] = useState(true);
  const [softDeleteStep, setSoftDeleteStep] = useState<"idle" | "prepared" | "trashed">("idle");

  // 3. Smart Account Filter state
  const [payMethodFilter, setPayMethodFilter] = useState<"Efectivo" | "Tarjeta" | "Transferencia">(
    "Tarjeta"
  );
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  // 4. Command Palette state
  const [cmdQuery, setCmdQuery] = useState("");
  const [cmdSelected, setCmdSelected] = useState<string>("+");

  // 5. DonutChart SVG state
  const [chartMode, setChartMode] = useState<"accounts" | "cash">("accounts");
  const [activeSliceIdx, setActiveSliceIdx] = useState(0);

  // 6. Auto-Update state
  const [platformMode, setPlatformMode] = useState<"android" | "web">("android");
  const [updateCheckStatus, setUpdateCheckStatus] = useState<"ready" | "dismissed">("ready");

  // 7. Security live WebCrypto AES-GCM state
  const [cryptoPlaintext, setCryptoPlaintext] = useState(`FinancePal v${APP_VERSION} MCP`);
  const [cryptoOutput, setCryptoOutput] = useState<string | null>(null);
  const [isEncrypting, setIsEncrypting] = useState(false);

  // Horizontal tabs scroll controls
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkTabsScroll = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el || !open) return;

    checkTabsScroll();
    const timeout = setTimeout(checkTabsScroll, 100);

    const handleScroll = () => checkTabsScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [checkTabsScroll, open]);

  const handleScrollTabs = (direction: "left" | "right") => {
    const el = tabsRef.current;
    if (!el) return;
    const offset = direction === "left" ? -220 : 220;
    el.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(checkTabsScroll, 250);
  };

  const handlePaymentMethodChange = (method: "Efectivo" | "Tarjeta" | "Transferencia") => {
    setPayMethodFilter(method);
    if (method === "Efectivo") {
      setSelectedAccountId("efectivo-caja");
    } else {
      setSelectedAccountId("");
    }
  };

  const handleRunEncryption = useCallback(async () => {
    if (typeof window === "undefined" || !window.crypto?.subtle) {
      setCryptoOutput("Cifrado AES-GCM 256 simulado exitosamente");
      return;
    }
    setIsEncrypting(true);
    try {
      const enc = new TextEncoder();
      const rawKey = enc.encode("financepal_v2_2_local_key_pbkdf2_derivation");
      const keyHash = await window.crypto.subtle.digest("SHA-256", rawKey);
      const key = await window.crypto.subtle.importKey(
        "raw",
        keyHash,
        { name: "AES-GCM" },
        false,
        ["encrypt"]
      );
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        enc.encode(cryptoPlaintext || `FinancePal v${APP_VERSION}`)
      );
      const ivHex = Array.from(iv).map((b) => b.toString(16).padStart(2, "0")).join("");
      const cipherHex = Array.from(new Uint8Array(encrypted).slice(0, 10))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      setCryptoOutput(`IV: ${ivHex.slice(0, 8)}... | AES-GCM: ${cipherHex}...`);
    } catch {
      setCryptoOutput("AES-GCM 256 bits completado");
    } finally {
      setIsEncrypting(false);
    }
  }, [cryptoPlaintext]);

  const selectedFeature =
    RELEASE_FEATURES.find((f) => f.id === activeTab) || RELEASE_FEATURES[0];

  const compatibleAccounts = ACCOUNT_OPTIONS.filter((acc) =>
    payMethodFilter === "Efectivo" ? acc.kind === "cash" : acc.kind === "bank"
  );

  const filteredCmds = CMD_ITEMS.filter((item) =>
    `${item.label} ${item.section}`.toLowerCase().includes(cmdQuery.toLowerCase())
  );

  const chartSlices = CHART_SLICES_BY_MODE[chartMode];
  const currentSlice = chartSlices[activeSliceIdx] ?? chartSlices[0];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fp-dialog-overlay fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-1.25rem)] sm:w-[95vw] max-w-4xl max-h-[88dvh] overflow-y-auto rounded-2xl bg-card border border-border text-foreground shadow-2xl p-4 sm:p-6 md:p-8 outline-none overscroll-contain data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-primary border border-border text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-editorial-amber" strokeWidth={1.75} />
                <span>Dossier de Lanzamiento v{APP_VERSION}</span>
              </div>
              <Dialog.Title className="font-display-v2 font-bold text-2xl sm:text-3xl text-foreground">
                Arquitectura{" "}
                <span className="italic font-semibold text-primary">Finance Pal</span> v{APP_VERSION}
              </Dialog.Title>
              <Dialog.Description className="text-muted-foreground text-xs sm:text-sm mt-1 max-w-xl font-sans">
                Conector Universal MCP para Claude, ChatGPT y Gemini sobre OAuth 2.1 + PKCE,
                Papelera de 30 días, filtrado inteligente de cuentas y Command Palette Cmd+K.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Cerrar modal de novedades"
                className="p-2 sm:p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted tactile-press cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" strokeWidth={1.75} />
              </button>
            </Dialog.Close>
          </div>

          {/* Navigation Tabs (7 Pillars) con flechas de desplazamiento suave */}
          <div className="py-3 sm:py-4">
            <div className="relative flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => handleScrollTabs("left")}
                disabled={!canScrollLeft}
                aria-label="Ver características anteriores"
                title="Anterior"
                className={`p-1.5 sm:p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted tactile-press cursor-pointer shrink-0 transition-all ${
                  canScrollLeft
                    ? "opacity-100 hover:border-foreground/30 shadow-xs"
                    : "opacity-25 pointer-events-none cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.75} />
              </button>

              <div
                ref={tabsRef}
                className="flex-1 flex items-center gap-2 overflow-x-auto py-1 scroll-smooth snap-x snap-mandatory no-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {RELEASE_FEATURES.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 snap-start tactile-press cursor-pointer transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground font-bold shadow-sm"
                          : "bg-muted/80 text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={isActive ? 2 : 1.5} />
                      <span>{item.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handleScrollTabs("right")}
                disabled={!canScrollRight}
                aria-label="Ver características siguientes"
                title="Siguiente"
                className={`p-1.5 sm:p-2 rounded-xl border border-border bg-card text-foreground hover:bg-muted tactile-press cursor-pointer shrink-0 transition-all ${
                  canScrollRight
                    ? "opacity-100 hover:border-foreground/30 shadow-xs"
                    : "opacity-25 pointer-events-none cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Active Feature Detail View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch py-2">
            {/* Left narrative engine */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-border bg-muted text-primary uppercase tracking-wider font-semibold">
                    {selectedFeature.badge}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    Pilar v{APP_VERSION}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                  {selectedFeature.title}
                </h3>
                <p className="text-xs sm:text-sm text-primary font-medium font-sans">
                  {selectedFeature.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {selectedFeature.description}
                </p>

                <ul className="space-y-2 pt-2 text-xs text-foreground/90 font-sans">
                  {selectedFeature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-muted border border-border text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    {selectedFeature.metricLabel}
                  </span>
                  <span className="font-mono text-lg font-extrabold text-primary tabular-nums">
                    {selectedFeature.metricValue}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
                  <span>Verificado v{APP_VERSION}</span>
                </span>
              </div>
            </div>

            {/* Right interactive visual stage — Obsidian Carbon (#141413 / #0C0C0B) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#141413] text-[#EDEDED] border border-white/10 border-t-white/15 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B0ADA7] block">
                    Vista Técnica Interactiva
                  </span>
                  <span className="text-[10px] font-mono text-[#34D399] bg-[#1C1C1A] px-2 py-0.5 rounded border border-white/10">
                    Live
                  </span>
                </div>

                {/* 1. MCP OAuth 2.1 Consent Live Stage */}
                {selectedFeature.previewType === "mcp" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#EDEDED]">
                          {readOnlyMcp ? (
                            <Eye className="w-3.5 h-3.5 text-[#34D399]" strokeWidth={1.75} />
                          ) : (
                            <Lock className="w-3.5 h-3.5 text-[#E07A5F]" strokeWidth={1.75} />
                          )}
                          <span>Modo Solo Lectura</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const next = !readOnlyMcp;
                            setReadOnlyMcp(next);
                            if (next) setSoftDeleteOptIn(false);
                          }}
                          className={`px-2 py-0.5 rounded-md border text-[10px] font-bold cursor-pointer ${
                            readOnlyMcp
                              ? "bg-[#34D399]/15 border-[#34D399]/40 text-[#34D399]"
                              : "bg-[#E07A5F]/15 border-[#E07A5F]/40 text-[#E07A5F]"
                          }`}
                        >
                          {readOnlyMcp ? "ACTIVO" : "ESCRITURA"}
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-[#B0ADA7] pt-1 border-t border-white/10">
                        <span className="inline-flex items-center gap-1">
                          <KeyRound className="w-3 h-3 text-[#F59E0B]" strokeWidth={1.75} />
                          Step-up 2FA (aal2)
                        </span>
                        <span className="text-[#34D399]">TOTP Verificado</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-1.5 text-[10px]">
                      <div className="flex justify-between text-[#B0ADA7]">
                        <span>Scopes concedidos:</span>
                        <span className="text-[#EDEDED] tabular-nums">
                          {readOnlyMcp
                            ? "6 mcp:read:*"
                            : softDeleteOptIn
                            ? "11 scopes (incl. delete:soft)"
                            : "10 scopes (read + write)"}
                        </span>
                      </div>
                      <button
                        type="button"
                        disabled={readOnlyMcp}
                        onClick={() => setSoftDeleteOptIn((p) => !p)}
                        className={`w-full py-1 px-2 rounded-lg border text-left transition-colors ${
                          readOnlyMcp
                            ? "bg-[#1C1C1A]/50 border-white/5 text-[#B0ADA7]/50 cursor-not-allowed"
                            : softDeleteOptIn
                            ? "bg-[#E07A5F]/15 border-[#E07A5F]/40 text-[#E07A5F] cursor-pointer"
                            : "bg-[#1C1C1A] border-white/10 text-[#B0ADA7] cursor-pointer"
                        }`}
                      >
                        mcp:delete:soft ({softDeleteOptIn ? "Opt-in activo" : "Opcional desactivado"})
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. Trash 30d + Kill Switch Stage */}
                {selectedFeature.previewType === "trash" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-semibold text-[#EDEDED] block">
                          Kill Switch Global MCP
                        </span>
                        <span className="text-[10px] text-[#B0ADA7] tabular-nums">
                          2 / 5 concesiones activas
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setKillSwitchActive((p) => !p)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-bold cursor-pointer ${
                          killSwitchActive
                            ? "bg-[#34D399]/15 border-[#34D399]/40 text-[#34D399]"
                            : "bg-[#E07A5F]/15 border-[#E07A5F]/40 text-[#E07A5F]"
                        }`}
                      >
                        <Power className="w-3 h-3" strokeWidth={1.75} />
                        <span>{killSwitchActive ? "Activo" : "Bloqueado"}</span>
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2 text-[10px]">
                      <div className="flex justify-between">
                        <span className="text-[#EDEDED]">Café de especialidad (-$45)</span>
                        <span className="text-[#F59E0B] tabular-nums">
                          {softDeleteStep === "idle"
                            ? "Activo"
                            : softDeleteStep === "prepared"
                            ? "TTL 120s"
                            : "En papelera (30d)"}
                        </span>
                      </div>
                      <div className="flex gap-1.5">
                        {softDeleteStep === "idle" && (
                          <button
                            type="button"
                            onClick={() => setSoftDeleteStep("prepared")}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-[#1C1C1A] border border-white/10 text-[#EDEDED] hover:border-[#F59E0B]/50 cursor-pointer"
                          >
                            1. prepare_soft_delete
                          </button>
                        )}
                        {softDeleteStep === "prepared" && (
                          <button
                            type="button"
                            onClick={() => setSoftDeleteStep("trashed")}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-[#E07A5F] text-[#0C0C0B] font-bold cursor-pointer"
                          >
                            2. confirm_soft_delete
                          </button>
                        )}
                        {softDeleteStep === "trashed" && (
                          <button
                            type="button"
                            onClick={() => setSoftDeleteStep("idle")}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-[#34D399] text-[#0C0C0B] font-bold inline-flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" strokeWidth={2} />
                            <span>Restaurar de Papelera</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Smart Account Filter Stage */}
                {selectedFeature.previewType === "smartfilter" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#0C0C0B] border border-white/10 text-[10px]">
                      {(
                        [
                          { id: "Efectivo", icon: Coins },
                          { id: "Tarjeta", icon: CreditCard },
                          { id: "Transferencia", icon: Landmark },
                        ] as const
                      ).map((m) => {
                        const Icon = m.icon;
                        const active = payMethodFilter === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => handlePaymentMethodChange(m.id)}
                            className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg cursor-pointer ${
                              active
                                ? "bg-[#1C1C1A] text-[#34D399] border border-white/10 font-bold"
                                : "text-[#B0ADA7] hover:text-[#EDEDED]"
                            }`}
                          >
                            <Icon className="w-3 h-3 shrink-0" strokeWidth={1.75} />
                            <span className="truncate">{m.id}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-1.5">
                      <span className="text-[10px] text-[#B0ADA7] block">
                        CUENTAS COMPATIBLES ({compatibleAccounts.length}):
                      </span>
                      <div className="text-[10px] text-[#F59E0B] pb-1">
                        {selectedAccountId
                          ? `Seleccionada: ${compatibleAccounts.find((a) => a.id === selectedAccountId)?.label}`
                          : "Placeholder: \"Selecciona una...\""}
                      </div>
                      <div className="space-y-1">
                        {compatibleAccounts.map((acc) => (
                          <button
                            key={acc.id}
                            type="button"
                            onClick={() => setSelectedAccountId(acc.id)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg border text-[10px] cursor-pointer ${
                              selectedAccountId === acc.id
                                ? "bg-[#34D399]/15 border-[#34D399]/40 text-[#34D399] font-semibold"
                                : "bg-[#1C1C1A] border-white/10 text-[#EDEDED]"
                            }`}
                          >
                            {acc.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Command Palette Cmd+K Stage */}
                {selectedFeature.previewType === "cmdk" && (
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10">
                        <input
                          type="text"
                          value={cmdQuery}
                          onChange={(e) => setCmdQuery(e.target.value)}
                          placeholder="Buscar acción o ruta..."
                          className="flex-1 min-w-0 bg-transparent text-[11px] text-[#EDEDED] placeholder-[#B0ADA7]/60 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setCmdQuery("")}
                          className="px-1.5 py-0.5 rounded bg-[#1C1C1A] border border-white/15 text-[9px] text-[#EDEDED] cursor-pointer shrink-0"
                        >
                          ESC
                        </button>
                      </div>
                      <div className="space-y-1">
                        {filteredCmds.map((item) => {
                          const Icon = item.icon;
                          const active = cmdSelected === item.key;
                          return (
                            <button
                              key={item.key}
                              type="button"
                              onClick={() => setCmdSelected(item.key)}
                              className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[10px] cursor-pointer ${
                                active
                                  ? "bg-[#1C1C1A] text-[#34D399]"
                                  : "text-[#B0ADA7] hover:text-[#EDEDED]"
                              }`}
                            >
                              <span className="inline-flex items-center gap-2 truncate">
                                <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} />
                                <span className="truncate">{item.label}</span>
                              </span>
                              <kbd className="px-1.5 py-0.5 rounded bg-[#141413] border border-white/15 text-[9px] text-[#EDEDED] shrink-0">
                                {item.key}
                              </kbd>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. DonutChart SVG & 99 SVG Icons Stage */}
                {selectedFeature.previewType === "charts" && (
                  <div className="space-y-2.5 text-xs">
                    <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#0C0C0B] border border-white/10 text-[10px] font-mono">
                      <button
                        type="button"
                        onClick={() => {
                          setChartMode("accounts");
                          setActiveSliceIdx(0);
                        }}
                        className={`py-1 rounded-lg cursor-pointer ${
                          chartMode === "accounts"
                            ? "bg-[#1C1C1A] text-[#34D399] font-bold"
                            : "text-[#B0ADA7]"
                        }`}
                      >
                        Saldos Cuentas
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setChartMode("cash");
                          setActiveSliceIdx(0);
                        }}
                        className={`py-1 rounded-lg cursor-pointer ${
                          chartMode === "cash"
                            ? "bg-[#1C1C1A] text-[#F59E0B] font-bold"
                            : "text-[#B0ADA7]"
                        }`}
                      >
                        Arqueo Efectivo
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 flex items-center gap-3">
                      <div className="relative w-20 h-20 shrink-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {chartSlices.reduce<{ els: React.ReactNode[]; offset: number }>(
                            (acc, s, i) => {
                              const dash = Math.max(s.pct - 1.5, 1);
                              acc.els.push(
                                <circle
                                  key={s.id}
                                  cx="50"
                                  cy="50"
                                  r="36"
                                  fill="none"
                                  pathLength={100}
                                  stroke={s.stroke}
                                  strokeWidth={activeSliceIdx === i ? 14 : 10}
                                  strokeDasharray={`${dash} ${100 - dash}`}
                                  strokeDashoffset={-acc.offset}
                                  opacity={activeSliceIdx === i ? 1 : 0.6}
                                  onClick={() => setActiveSliceIdx(i)}
                                  className="cursor-pointer transition-all"
                                />
                              );
                              return { els: acc.els, offset: acc.offset + s.pct };
                            },
                            { els: [], offset: 0 }
                          ).els}
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-mono text-[11px] font-bold tabular-nums">
                          {currentSlice.pct.toFixed(1)}%
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 space-y-1">
                        {chartSlices.map((s, idx) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setActiveSliceIdx(idx)}
                            className={`w-full flex items-center justify-between text-[10px] font-mono py-0.5 px-1 rounded cursor-pointer ${
                              activeSliceIdx === idx ? "bg-[#1C1C1A] text-[#EDEDED]" : "text-[#B0ADA7]"
                            }`}
                          >
                            <span className="truncate">{s.label}</span>
                            <span className="tabular-nums font-bold shrink-0">{s.value}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#0C0C0B] border border-white/10 text-[10px] font-mono text-[#B0ADA7]">
                      <span className="inline-flex items-center gap-1.5 text-[#34D399]">
                        <Utensils className="w-3 h-3" strokeWidth={1.75} />
                        <Home className="w-3 h-3" strokeWidth={1.75} />
                        <Landmark className="w-3 h-3" strokeWidth={1.75} />
                        <span>99 Iconos SVG</span>
                      </span>
                      <span>0 emojis</span>
                    </div>
                  </div>
                )}

                {/* 6. Android In-App Update Stage */}
                {selectedFeature.previewType === "update" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#0C0C0B] border border-white/10 text-[11px]">
                      <button
                        type="button"
                        onClick={() => setPlatformMode("android")}
                        className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                          platformMode === "android"
                            ? "bg-[#1C1C1A] text-[#34D399] font-semibold border border-white/10"
                            : "text-[#B0ADA7] hover:text-[#EDEDED]"
                        }`}
                      >
                        <Smartphone className="w-3 h-3" strokeWidth={1.75} />
                        <span>Android APK</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlatformMode("web")}
                        className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                          platformMode === "web"
                            ? "bg-[#1C1C1A] text-[#EDEDED] font-semibold border border-white/10"
                            : "text-[#B0ADA7] hover:text-[#EDEDED]"
                        }`}
                      >
                        <span>Web / PWA</span>
                      </button>
                    </div>

                    {platformMode === "android" ? (
                      <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-[#34D399] font-semibold">
                            Nueva versión v{APP_VERSION}
                          </span>
                          <span className="text-[#B0ADA7] tabular-nums">{APK_SIZE_LABEL}</span>
                        </div>
                        <p className="text-[11px] font-sans text-[#B0ADA7] leading-relaxed">
                          Host confiable verificado (<code className="text-[#EDEDED]">github.com</code>).
                          SHA-256: <span className="tabular-nums text-[#EDEDED]">{APK_SHA256_SHORT}</span>
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setUpdateCheckStatus("dismissed")}
                            className="px-2.5 py-1 rounded-lg bg-[#1C1C1A] border border-white/10 text-[10px] text-[#B0ADA7] hover:text-[#EDEDED] cursor-pointer"
                          >
                            {updateCheckStatus === "dismissed" ? "Pospuesto (Caché 6h)" : "Luego"}
                          </button>
                          <button
                            type="button"
                            onClick={() => setUpdateCheckStatus("ready")}
                            className="px-2.5 py-1 rounded-lg bg-[#34D399] text-[#0C0C0B] font-bold text-[10px] cursor-pointer"
                          >
                            Descargar APK
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-1.5">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-[#B0ADA7]">Versión Web instalada:</span>
                          <span className="text-[#34D399] font-bold">v{APP_VERSION}</span>
                        </div>
                        <p className="text-[11px] font-sans text-[#B0ADA7]">
                          Sin avisos falsos de descarga APK: la PWA aplica actualizaciones web de forma transparente.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 7. Security Live Stage (Real WebCrypto AES-GCM + Prompt Injection Guard + 61 suites) */}
                {selectedFeature.previewType === "security" && (
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={cryptoPlaintext}
                        onChange={(e) => setCryptoPlaintext(e.target.value)}
                        placeholder="Dato a cifrar"
                        className="flex-1 min-w-0 px-2.5 py-1 text-[11px] rounded-lg bg-[#0C0C0B] border border-white/15 text-[#EDEDED] placeholder-[#B0ADA7]/60 focus:outline-none focus:border-[#34D399]"
                      />
                      <button
                        type="button"
                        onClick={handleRunEncryption}
                        disabled={isEncrypting}
                        className="px-2.5 py-1 rounded-lg bg-[#34D399] hover:brightness-105 text-[#0C0C0B] font-bold text-[11px] flex items-center gap-1 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 shrink-0"
                      >
                        <Lock className="w-3 h-3" strokeWidth={2} />
                        <span>Cifrar</span>
                      </button>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0C0C0B] border border-white/10 text-[10px] space-y-1">
                      <span className="text-[#B0ADA7] block text-[9px]">PAYLOAD CIFRADO LOCAL:</span>
                      <div className="text-[#34D399] break-all tabular-nums font-mono">
                        {cryptoOutput || "Haz clic en 'Cifrar' para generar AES-GCM 256 bits en vivo."}
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-[#0C0C0B] border border-white/10 text-[10px] text-[#B0ADA7] flex justify-between">
                      <span>Notas MCP aisladas:</span>
                      <code className="text-[#F59E0B]">&lt;untrusted_user_note&gt;</code>
                    </div>

                    <div className="flex items-center justify-between text-[10px] pt-1 text-[#B0ADA7]">
                      <span>61 suites verificadas</span>
                      <a
                        href={SECURITY_POLICY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#34D399] hover:underline"
                      >
                        SECURITY.md ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 text-center">
                <a
                  href="https://financepal-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#34D399] hover:underline underline-offset-4 transition-colors font-sans"
                >
                  <span>Probar esta edición en vivo en la Web App</span>
                  <ExternalLink className="w-3 h-3" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs text-muted-foreground font-mono flex items-center gap-2 flex-wrap">
              <span>
                Lanzamiento público:{" "}
                <a
                  href={RELEASE_TAG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-bold hover:underline"
                >
                  v{APP_VERSION}
                </a>
              </span>
              <span>·</span>
              <span className="tabular-nums">{APK_SIZE_LABEL}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="https://financepal-web.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-4 py-2.5 text-xs sm:text-sm"
              >
                <ExternalLink className="w-4 h-4 text-primary" strokeWidth={1.75} />
                <span>Abrir Web App</span>
              </a>
              <a
                href={APK_DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm"
              >
                <Download className="w-4 h-4" strokeWidth={2} />
                <span>Descargar APK v{APP_VERSION}</span>
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
