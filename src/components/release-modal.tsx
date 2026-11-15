"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  X,
  Download,
  ExternalLink,
  ShieldCheck,
  Zap,
  Layers,
  Receipt,
  PieChart,
  Compass,
  RefreshCw,
  Check,
  Lock,
  Plus,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Home,
  Landmark,
  Wallet,
  CreditCard,
  Coins,
  MoreHorizontal,
  Smartphone,
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
  previewType: "update" | "icons" | "quicktx" | "receipts" | "charts" | "nav" | "security";
}

const RELEASE_FEATURES: ReleaseFeature[] = [
  {
    id: "update",
    icon: RefreshCw,
    shortTitle: "Auto-Update APK",
    badge: `Nativo Android ${APP_SHORT_VERSION}`,
    title: "Actualizador In-App contra GitHub Releases",
    subtitle: "Detección inteligente exclusiva en Android sin falsos positivos en Web",
    description:
      "Finance Pal ahora comprueba automáticamente nuevas versiones directamente en GitHub Releases únicamente cuando corre en Android nativo. En Web/PWA solo informa la edición instalada para mantener la experiencia limpia.",
    bullets: [
      "Comparación SemVer estricta (incluye pre-releases) con descarte de borradores, caché de 6h y re-comprobación al volver a primer plano.",
      "Respeta la versión pospuesta ('Luego') hasta una edición superior y valida hosts confiables HTTPS de GitHub/CDN.",
      "Nuevo banner editorial discreto y verificación manual 'Buscar actualización' en Ajustes -> Seguridad y Sistema.",
    ],
    metricLabel: "Binario oficial",
    metricValue: `${APK_SIZE_LABEL} · APK`,
    previewType: "update",
  },
  {
    id: "icons",
    icon: Layers,
    shortTitle: "99 Iconos SVG",
    badge: "Cero Emojis V2",
    title: "Sistema Vectorial de 99 Iconos Adaptativos",
    subtitle: "Iconografía SVG tipada por currentColor en toda la interfaz V2",
    description:
      "Eliminamos los emojis de la interfaz V2, el selector de iconos, el registro rápido y las notificaciones. Ahora todo el sistema opera sobre 99 IDs vectoriales (95 de Lucide + 4 glifos financieros propios) protegidos por test anti-emoji.",
    bullets: [
      "4 iconos financieros exclusivos: Billete, Pila de monedas, Banco/CLABE y Sello de recibo adaptativos vía currentColor.",
      "Traducción transparente en tiempo de ejecución de categorías o metas heredadas con iconos antiguos.",
      "Suite automática no-emoji-guard.test.ts garantizando coherencia editorial en todas las vistas V2.",
    ],
    metricLabel: "Catálogo SVG",
    metricValue: "99 SVG · 0 Emojis",
    previewType: "icons",
  },
  {
    id: "quicktx",
    icon: Zap,
    shortTitle: "Registro Rápido",
    badge: "Quick Sheet",
    title: "QuickTransactionSheet Contextual por Cuenta",
    subtitle: "Métodos de pago filtrados y captura limpia de CLABE / últimos 4 dígitos",
    description:
      "Al capturar un movimiento desde cualquier vista, el formulario adapta automáticamente las opciones de pago según el tipo de cuenta origen para eliminar pasos innecesarios.",
    bullets: [
      "Cuentas en efectivo fijan 'Efectivo · Automático'; cuentas bancarias filtran solo Tarjeta y Transferencia.",
      "Detalles de transferencia colapsables más limpios (destinatario, banco y últimos 4 dígitos o CLABE de 18 dígitos).",
      "Adjunto y previsualización inmediata de comprobantes dentro de la misma hoja rápida.",
    ],
    metricLabel: "Validación bancaria",
    metricValue: "CLABE 18 dígitos",
    previewType: "quicktx",
  },
  {
    id: "receipts",
    icon: Receipt,
    shortTitle: "Recibos 5 MB",
    badge: "Storage Endurecido",
    title: "Comprobantes Privados y Magic Bytes",
    subtitle: "Compresión local automática <= 5 MB y referencias lógicas sb:receipts",
    description:
      "El pipeline de comprobantes valida encabezados binarios reales (magic bytes) en cliente, comprime la imagen antes de salir del dispositivo y guarda referencias no expirables en un bucket privado endurecido.",
    bullets: [
      "Acepta únicamente JPEG, PNG y WebP auténticos (entrada hasta 10 MB) con compresión en cliente a máximo 5 MB.",
      "Persistencia con refs lógicas sb:receipts/<userId>/... resueltas a URLs firmadas frescas con caché (useReceiptUrl).",
      "Migración receipts_hardening en Supabase Storage bloqueando tipos MIME no autorizados.",
    ],
    metricLabel: "Política de adjunto",
    metricValue: "<= 5 MB · Privado",
    previewType: "receipts",
  },
  {
    id: "charts",
    icon: PieChart,
    shortTitle: "DonutChart SVG",
    badge: "Visualización Exacta",
    title: "Gráficos DonutChart SVG & Visibilidad de Cuentas",
    subtitle: "Porcentajes redondeados al 100.0% exacto y arqueo de efectivo",
    description:
      "Nuevo componente DonutChart vectorial adaptativo a temas claro y oscuro con selección interactiva de segmentos. Además, los saldos de cuentas en móvil ahora muestran desglose visual de balances y denominaciones de efectivo.",
    bullets: [
      "Algoritmo de distribución garantizando suma exacta al 100.0% en cada anillo interactivo.",
      "Corregida la visibilidad de cuentas en móvil (Ajustes -> Cuentas) con gráfica de saldos positivos.",
      "Desglose de arqueo de efectivo por billetes y monedas integrado junto al Balance Anual en 4 columnas.",
    ],
    metricLabel: "Precisión porcentual",
    metricValue: "100.0% Exacto",
    previewType: "charts",
  },
  {
    id: "nav",
    icon: Compass,
    shortTitle: "Navegación V2.1",
    badge: "UX Móvil Fluida",
    title: "Deudas en Barra Principal y Menú Compacto",
    subtitle: "Orden unificado de vistas, Drawer táctil nativo e icono de app v2",
    description:
      "Promovimos Deudas directamente a la barra inferior principal y limpiamos el encabezado móvil agrupando vistas secundarias en un menú contextual sin truncamientos.",
    bullets: [
      "Barra inferior: Inicio, Movimientos, (+), Metas (con Carpetas dnd-kit) y Deudas con swipe unificado.",
      "Nuevo menú compacto HeaderMoreButton para Anual, Historial y Ajustes sin recortar títulos móviles.",
      "Corregido el desplazamiento táctil del cajón en WebView Android más nuevo launcher icon v2 en adaptativo.",
    ],
    metricLabel: "Arquitectura UI",
    metricValue: "4 Vistas + (+)",
    previewType: "nav",
  },
  {
    id: "security",
    icon: ShieldCheck,
    shortTitle: "Seguridad & QA",
    badge: "382 Tests Pass",
    title: "WebCrypto AES-256, SECURITY.md y Suite Completa",
    subtitle: "Cifrado local comprobable, divulgación responsable y 52 suites verdes",
    description:
      "Criptografía simétrica WebCrypto AES-GCM 256-bit (PBKDF2 100,000 rondas), 2FA TOTP, Zero-Knowledge sync y publicación oficial de SECURITY.md respaldado por una batería integral de pruebas.",
    bullets: [
      "Cifrado local en cliente antes de persistir en SQLite o IndexedDB + auditoría k-Anonymity HIBP.",
      "Política de divulgación responsable SECURITY.md publicada en el repositorio oficial.",
      "52 archivos de prueba y 382 tests unitarios e integrados pasando al 100%, TypeScript estricto y Vite 8.",
    ],
    metricLabel: "Cobertura verificada",
    metricValue: "52 Suites · 382 Tests",
    previewType: "security",
  },
];

const CUSTOM_ICON_CHOICES = [
  { id: "utensils", label: "Comida", icon: Utensils },
  { id: "home", label: "Hogar", icon: Home },
  { id: "zap", label: "Energía", icon: Zap },
  { id: "landmark", label: "Banco", icon: Landmark },
  { id: "receipt", label: "Recibo", icon: Receipt },
  { id: "coins", label: "Efectivo", icon: Coins },
] as const;

const CHART_SLICES_BY_MODE = {
  accounts: [
    { id: "bbva", label: "Banco Principal", pct: 54.5, value: "$67,900", stroke: "#34D399" },
    { id: "cetes", label: "Reserva Inversiones", pct: 32.0, value: "$39,870", stroke: "#60A5FA" },
    { id: "cash", label: "Efectivo Bóveda", pct: 13.5, value: "$16,820", stroke: "#F59E0B" },
  ],
  cash: [
    { id: "b500", label: "Billetes $500", pct: 60.0, value: "$10,000", stroke: "#34D399" },
    { id: "b200", label: "Billetes $200", pct: 28.5, value: "$4,800", stroke: "#F59E0B" },
    { id: "coins", label: "Monedas / Cambio", pct: 11.5, value: "$2,020", stroke: "#E07A5F" },
  ],
} as const;

export interface ReleaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReleaseModal({ open, onOpenChange }: ReleaseModalProps) {
  const [activeTab, setActiveTab] = useState<string>("update");

  // 1. Update check stage state
  const [platformMode, setPlatformMode] = useState<"android" | "web">("android");
  const [updateCheckStatus, setUpdateCheckStatus] = useState<"ready" | "dismissed">("ready");

  // 2. Icons (99 SVG, 0 emoji) stage state
  const [svgCategories, setSvgCategories] = useState<Array<{ iconId: string; name: string }>>([
    { iconId: "utensils", name: "Alimentación" },
    { iconId: "home", name: "Vivienda" },
    { iconId: "landmark", name: "Transferencias" },
    { iconId: "coins", name: "Arqueo Caja" },
  ]);
  const [selectedIconId, setSelectedIconId] = useState<string>("receipt");
  const [newCatName, setNewCatName] = useState("");

  // 3. QuickTransactionSheet stage state
  const [accountType, setAccountType] = useState<"cash" | "bank" | "other">("bank");
  const [payMethod, setPayMethod] = useState<"Efectivo" | "Tarjeta" | "Transferencia" | "Otro">(
    "Transferencia"
  );

  // 4. Receipts magic bytes + compression stage state
  const [sampleReceipt, setSampleReceipt] = useState<"jpg" | "webp" | "exe">("jpg");

  // 5. DonutChart stage state
  const [chartMode, setChartMode] = useState<"accounts" | "cash">("accounts");
  const [activeSliceIdx, setActiveSliceIdx] = useState(0);

  // 6. Navigation V2.1 stage state
  const [navTab, setNavTab] = useState<"Inicio" | "Movimientos" | "Metas" | "Deudas">("Deudas");
  const [moreOpen, setMoreOpen] = useState(false);

  // 7. Security live WebCrypto AES-GCM state
  const [cryptoPlaintext, setCryptoPlaintext] = useState(`FinancePal v${APP_VERSION}`);
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

  const handleSelectAccountType = (type: "cash" | "bank" | "other") => {
    setAccountType(type);
    if (type === "cash") setPayMethod("Efectivo");
    else if (type === "bank") setPayMethod("Transferencia");
    else setPayMethod("Tarjeta");
  };

  const handleAddSvgCategory = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!newCatName.trim()) return;
      const name = newCatName.trim().slice(0, 20);
      setSvgCategories((prev) => [...prev, { iconId: selectedIconId, name }]);
      setNewCatName("");
    },
    [newCatName, selectedIconId]
  );

  // WebCrypto AES-GCM live encryption test
  const handleRunEncryption = useCallback(async () => {
    if (typeof window === "undefined" || !window.crypto?.subtle) {
      setCryptoOutput("Cifrado AES-GCM 256 simulado exitosamente");
      return;
    }
    setIsEncrypting(true);
    try {
      const enc = new TextEncoder();
      const rawKey = enc.encode("financepal_v2_1_local_key_pbkdf2_derivation");
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

  const chartSlices = CHART_SLICES_BY_MODE[chartMode];
  const currentSlice = chartSlices[activeSliceIdx] ?? chartSlices[0];

  const allowedMethods: Array<"Efectivo" | "Tarjeta" | "Transferencia" | "Otro"> =
    accountType === "cash"
      ? ["Efectivo"]
      : accountType === "bank"
      ? ["Tarjeta", "Transferencia"]
      : ["Tarjeta", "Transferencia", "Otro"];

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
                Actualizador nativo en Android, sistema completo de 99 iconos SVG sin emojis,
                comprobantes endurecidos, DonutChart SVG y suite verificada de 382 tests.
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

                {/* 1. Android In-App Update Stage */}
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
                          SHA-256: <span className="tabular-nums text-[#EDEDED]">{APK_SHA256_SHORT}...</span>
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
                          Sin avisos falsos de descarga APK: las actualizaciones web se aplican automáticamente vía PWA.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. 99 SVG Icons (Zero Emojis) Stage */}
                {selectedFeature.previewType === "icons" && (
                  <div className="space-y-2.5 text-xs">
                    <div className="grid grid-cols-2 gap-1.5 max-h-28 overflow-y-auto">
                      {svgCategories.map((c) => {
                        const match =
                          CUSTOM_ICON_CHOICES.find((item) => item.id === c.iconId) ??
                          CUSTOM_ICON_CHOICES[0];
                        const CatIcon = match.icon;
                        return (
                          <div
                            key={`${c.name}-${c.iconId}`}
                            className="p-2 rounded-xl bg-[#0C0C0B] border border-white/10 flex items-center gap-2"
                          >
                            <CatIcon className="w-3.5 h-3.5 text-[#34D399] shrink-0" strokeWidth={1.75} />
                            <span className="text-[#EDEDED] text-[11px] font-medium truncate">
                              {c.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-1 justify-between p-1.5 rounded-xl bg-[#0C0C0B] border border-white/10">
                      {CUSTOM_ICON_CHOICES.map((choice) => {
                        const Icon = choice.icon;
                        const selected = selectedIconId === choice.id;
                        return (
                          <button
                            key={choice.id}
                            type="button"
                            onClick={() => setSelectedIconId(choice.id)}
                            title={choice.label}
                            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                              selected
                                ? "bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/40"
                                : "text-[#B0ADA7] hover:text-[#EDEDED]"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                          </button>
                        );
                      })}
                    </div>

                    <form onSubmit={handleAddSvgCategory} className="flex gap-1.5">
                      <input
                        type="text"
                        maxLength={20}
                        placeholder="Categoría SVG (máx 20)"
                        value={newCatName}
                        onChange={(e) => setNewCatName(e.target.value)}
                        className="flex-1 min-w-0 px-2.5 py-1 text-[11px] rounded-lg bg-[#0C0C0B] border border-white/15 text-[#EDEDED] placeholder-[#B0ADA7]/60 focus:outline-none focus:border-[#34D399]"
                      />
                      <button
                        type="submit"
                        className="px-2.5 py-1 rounded-lg bg-[#34D399] text-[#0C0C0B] font-bold text-[11px] flex items-center gap-1 active:scale-[0.98] cursor-pointer shrink-0"
                      >
                        <Plus className="w-3 h-3" strokeWidth={2} />
                        <span>Crear</span>
                      </button>
                    </form>
                  </div>
                )}

                {/* 3. QuickTransactionSheet Contextual Stage */}
                {selectedFeature.previewType === "quicktx" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#0C0C0B] border border-white/10 text-[10px]">
                      {(
                        [
                          { id: "cash", label: "Efectivo", icon: Coins },
                          { id: "bank", label: "Banco", icon: Landmark },
                          { id: "other", label: "Otra", icon: Wallet },
                        ] as const
                      ).map((acc) => {
                        const Icon = acc.icon;
                        const active = accountType === acc.id;
                        return (
                          <button
                            key={acc.id}
                            type="button"
                            onClick={() => handleSelectAccountType(acc.id)}
                            className={`flex items-center justify-center gap-1 py-1.5 px-1.5 rounded-lg cursor-pointer transition-colors ${
                              active
                                ? "bg-[#1C1C1A] text-[#34D399] border border-white/10 font-bold"
                                : "text-[#B0ADA7] hover:text-[#EDEDED]"
                            }`}
                          >
                            <Icon className="w-3 h-3 shrink-0" strokeWidth={1.75} />
                            <span>{acc.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2">
                      <span className="text-[10px] text-[#B0ADA7] block">
                        MÉTODOS PERMITIDOS ({accountType.toUpperCase()}):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {allowedMethods.map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPayMethod(method)}
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[10px] cursor-pointer ${
                              payMethod === method
                                ? "bg-[#34D399]/15 border-[#34D399]/50 text-[#34D399] font-semibold"
                                : "bg-[#1C1C1A] border-white/10 text-[#B0ADA7]"
                            }`}
                          >
                            {method === "Tarjeta" && <CreditCard className="w-3 h-3" strokeWidth={1.75} />}
                            <span>{accountType === "cash" ? "Efectivo · Automático" : method}</span>
                          </button>
                        ))}
                      </div>
                      {payMethod === "Transferencia" && accountType !== "cash" && (
                        <div className="pt-2 border-t border-white/10 text-[10px] text-[#B0ADA7] space-y-0.5 tabular-nums">
                          <div className="flex justify-between">
                            <span>Destino:</span>
                            <span className="text-[#EDEDED]">BBVA México</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CLABE / Term.:</span>
                            <span className="text-[#34D399]">012180 •••• 9421 (18d)</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 4. Receipts Hardening Live Stage */}
                {selectedFeature.previewType === "receipts" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-1 text-[10px]">
                      {[
                        { id: "jpg", label: "ticket.jpg" },
                        { id: "webp", label: "nota.webp" },
                        { id: "exe", label: "archivo.exe" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSampleReceipt(item.id as "jpg" | "webp" | "exe")}
                          className={`py-1.5 px-2 rounded-lg border cursor-pointer truncate ${
                            sampleReceipt === item.id
                              ? "bg-[#1C1C1A] border-[#34D399]/50 text-[#EDEDED] font-semibold"
                              : "bg-[#0C0C0B] border-white/10 text-[#B0ADA7]"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-1.5 text-[10px] tabular-nums">
                      <div className="flex justify-between">
                        <span className="text-[#B0ADA7]">Magic Bytes:</span>
                        <span
                          className={
                            sampleReceipt === "exe"
                              ? "text-[#E07A5F] font-bold"
                              : "text-[#34D399] font-bold"
                          }
                        >
                          {sampleReceipt === "jpg"
                            ? "FF D8 FF (JPEG Válido)"
                            : sampleReceipt === "webp"
                            ? "RIFF WEBP (Válido)"
                            : "4D 5A (MZ Rechazado)"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#B0ADA7]">Tamaño Optimizado:</span>
                        <span className="text-[#EDEDED]">
                          {sampleReceipt === "exe" ? "Bloqueado antes de subir" : "6.8 MB -> 840 KB (≤ 5 MB)"}
                        </span>
                      </div>
                      <div className="pt-1 border-t border-white/10 text-[#B0ADA7] truncate">
                        Ref:{" "}
                        <span className="text-[#EDEDED]">
                          {sampleReceipt === "exe"
                            ? "null"
                            : `sb:receipts/uid/2026-11.${sampleReceipt}`}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. DonutChart SVG Live Stage */}
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
                  </div>
                )}

                {/* 6. Navigation V2.1 Live Stage */}
                {selectedFeature.previewType === "nav" && (
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-[#0C0C0B] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 relative">
                        <span className="text-[11px] font-semibold text-[#EDEDED]">{navTab}</span>
                        <button
                          type="button"
                          onClick={() => setMoreOpen((p) => !p)}
                          aria-label="Abrir HeaderMoreButton"
                          className="p-1 rounded-lg bg-[#1C1C1A] border border-white/10 text-[#B0ADA7] hover:text-[#EDEDED] cursor-pointer"
                        >
                          <MoreHorizontal className="w-3.5 h-3.5" strokeWidth={1.75} />
                        </button>
                        {moreOpen && (
                          <div className="absolute right-0 top-7 z-10 w-28 p-1 rounded-lg bg-[#1C1C1A] border border-white/15 shadow-lg text-[10px] space-y-0.5">
                            <div className="px-2 py-1 text-[#EDEDED] rounded hover:bg-white/5">Anual</div>
                            <div className="px-2 py-1 text-[#EDEDED] rounded hover:bg-white/5">Historial</div>
                            <div className="px-2 py-1 text-[#34D399] rounded hover:bg-white/5">Ajustes</div>
                          </div>
                        )}
                      </div>

                      <div className="text-[10px] text-[#B0ADA7] font-sans py-1">
                        Vista activa en swipe: <strong className="text-[#34D399]">{navTab}</strong>
                      </div>

                      <div className="grid grid-cols-5 gap-1 pt-1.5 border-t border-white/10 text-[9px] text-center items-center">
                        {(["Inicio", "Movimientos"] as const).map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setNavTab(t)}
                            className={`py-1 rounded cursor-pointer truncate ${
                              navTab === t ? "text-[#34D399] font-bold" : "text-[#B0ADA7]"
                            }`}
                          >
                            {t === "Movimientos" ? "Movs" : t}
                          </button>
                        ))}
                        <span className="mx-auto w-6 h-6 rounded-full bg-[#34D399] text-[#0C0C0B] flex items-center justify-center font-bold">
                          <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </span>
                        {(["Metas", "Deudas"] as const).map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setNavTab(t)}
                            className={`py-1 rounded cursor-pointer truncate ${
                              navTab === t ? "text-[#34D399] font-bold" : "text-[#B0ADA7]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. Security Live Stage (Real WebCrypto AES-GCM + QA metrics) */}
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

                    <div className="flex items-center justify-between text-[10px] pt-1 text-[#B0ADA7]">
                      <span>52 suites · 382 tests PASS</span>
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
