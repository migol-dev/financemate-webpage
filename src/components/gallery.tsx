"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/types";
import { EditorialHighlight, ScrollParallaxStage, ScrollReveal } from "@/components/editorial-motion";

// ──────────────────────────────────────────────
// 5 virtual phone screens for the 3D carousel
// (shown when no real gallery images are available)
// ──────────────────────────────────────────────
const SLIDE_INFO = [
  {
    shortLabel: "01 · Balance",
    badge: "Slide 1 de 5 · Módulo Principal",
    title: "Panel de Control & Balance General",
    desc: "Muestra el balance acumulado neto, la división clara entre Efectivo en mano vs Cuentas bancarias, tasa de ahorro mensual y switch para modo privado.",
  },
  {
    shortLabel: "02 · Bitácora",
    badge: "Slide 2 de 5 · Transacciones",
    title: "Movimientos, Filtros y Recibos",
    desc: "Bitácora completa con búsqueda en vivo, 4 tipos de operación (Ingreso, Gasto, Ahorro, Traspaso) y adjuntos fotográficos de comprobantes de pago.",
  },
  {
    shortLabel: "03 · Préstamos",
    badge: "Slide 3 de 5 · Préstamos",
    title: "Control 'Quién Me Debe' y Abonos",
    desc: "Seguimiento riguroso de préstamos por persona: Total Prestado, Cobrado y Pendiente con registro de abonos parciales y liquidación progresiva.",
  },
  {
    shortLabel: "04 · Metas v2",
    badge: "Slide 4 de 5 · Planificación",
    title: "Metas de Ahorro con Carpetas & Drag/Drop",
    desc: 'Agrupación visual jerárquica con reordenamiento intuitivo por arrastre y cálculo predictivo del ritmo de ahorro semanal necesario para cumplir tu fecha objetivo.',
  },
  {
    shortLabel: "05 · Vencimientos",
    badge: "Slide 5 de 5 · Automatización",
    title: "Conceptos Fijos & Cuenta Regresiva",
    desc: "Alertas automáticas de próximos vencimientos (en 3d, en 4d, en 8d) para evitar cortes de servicio sin duplicar registros contables.",
  },
];

// ──────────────────────────────────────────────
// Phone frames (Warm Editorial Wealth — Obsidian Carbon v2.0)
// ──────────────────────────────────────────────
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[40px] sm:rounded-[44px] p-2 sm:p-2.5 bg-[#1C1C1A] border border-[#2E2E2B] shadow-2xl">
      <div
        className="rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#0C0C0B] border border-white/10 h-[560px] sm:h-[620px] flex flex-col justify-between text-left select-none text-[#EDEDED]"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        {/* Status bar */}
        <div className="h-7 px-4 sm:px-5 pt-2 flex items-center justify-between text-[11px] font-mono-tabular text-[#B0ADA7] shrink-0 bg-[#0C0C0B]">
          <span className="font-semibold text-[#EDEDED]">09:41</span>
          <div className="w-10 sm:w-12 h-3 sm:h-3.5 bg-black rounded-full border border-white/5" />
          <span className="text-[#10B981] font-bold">100%</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function BottomBar({ active }: { active: number }) {
  const tabs = ["Inicio", "Movs", "Deudas", "Metas", "Pagos"];
  return (
    <div className="h-12 px-4 bg-[#141413] border-t border-white/10 flex items-center justify-around text-[#B0ADA7] shrink-0 text-[10px] font-mono">
      {tabs.map((t, i) => (
        <span key={t} className={i === active ? "text-[#34D399] font-bold" : ""}>
          {i === active ? `● ${t}` : t}
        </span>
      ))}
    </div>
  );
}

// Screen 0 — Dashboard (Warm Editorial Wealth)
function Screen0() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#1F7A5A] border border-emerald-400/30 flex items-center justify-center text-[#FAF8F5] font-serif font-bold text-xs">
              FP
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-mono text-[#B0ADA7]">CUADERNO V2.0</div>
              <div className="text-[12px] sm:text-[13px] font-serif font-bold text-[#EDEDED] flex items-center gap-1.5">
                Patrimonio Neto <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#1C1C1A] border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#B0ADA7]">
            NOV 2026
          </span>
        </div>

        {/* Balance De-Boxed con tipografía Fraunces y cifras tabulares */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#141413] border border-white/10">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#B0ADA7]">
            Balance Disponible
          </span>
          <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mt-0.5 font-mono-tabular text-[#EDEDED]">
            $9,520.00
          </div>
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-white/10 text-[9px] sm:text-[10px] font-mono-tabular">
            <div>
              <span className="text-[#B0ADA7] block">↗ Ingresos</span>
              <span className="font-bold text-[#10B981]">$12,000</span>
            </div>
            <div>
              <span className="text-[#B0ADA7] block">↘ Egresos</span>
              <span className="font-bold text-[#E07A5F]">$2,480</span>
            </div>
            <div>
              <span className="text-[#B0ADA7] block">◈ Reserva</span>
              <span className="font-bold text-[#60A5FA]">$500</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-2 sm:mt-2.5 pt-2 sm:pt-2.5 border-t border-white/10 text-[9px] sm:text-[10px] font-mono-tabular">
            <div className="bg-[#1C1C1A] rounded-lg p-1.5 sm:p-2 border border-white/5">
              <span className="text-[#B0ADA7] block">Efectivo Físico</span>
              <span className="font-bold text-[#EDEDED]">$1,520</span>
            </div>
            <div className="bg-[#1C1C1A] rounded-lg p-1.5 sm:p-2 border border-white/5">
              <span className="text-[#B0ADA7] block">Cuentas Banco</span>
              <span className="font-bold text-[#EDEDED]">$8,000</span>
            </div>
          </div>
        </div>

        <div className="p-2.5 sm:p-3 rounded-xl bg-[#141413] border border-white/10">
          <div className="flex justify-between text-[10px] sm:text-[11px] mb-1.5 font-mono-tabular">
            <span className="text-[#B0ADA7]">Tasa de Retención</span>
            <span className="text-[#34D399] font-bold">79.3%</span>
          </div>
          <div className="w-full bg-[#1C1C1A] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#10B981] h-full w-[79%] rounded-full" />
          </div>
        </div>

        {/* De-Boxed Ledger list with 1px hairlines */}
        <div className="divide-y divide-white/10 border-t border-white/10">
          <div className="py-1.5 sm:py-2 flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-[#B0ADA7]">
            <span>BITÁCORA RECIENTE</span>
            <span className="text-[#34D399]">AUDITAR →</span>
          </div>
          <div className="py-2 sm:py-2.5 flex items-center justify-between text-[11px] sm:text-[12px]">
            <div>
              <div className="font-semibold text-[#EDEDED]">Café de especialidad</div>
              <div className="text-[9px] sm:text-[10px] text-[#B0ADA7]">Alimentación · Efectivo</div>
            </div>
            <span className="text-[#E07A5F] font-bold font-mono-tabular">-$45.00</span>
          </div>
          <div className="py-2 sm:py-2.5 flex items-center justify-between text-[11px] sm:text-[12px]">
            <div>
              <div className="font-semibold text-[#EDEDED]">Honorarios Quincena</div>
              <div className="text-[9px] sm:text-[10px] text-[#B0ADA7]">Ingreso · Transferencia</div>
            </div>
            <span className="text-[#10B981] font-bold font-mono-tabular">+$6,000.00</span>
          </div>
        </div>
      </div>
      <BottomBar active={0} />
    </PhoneFrame>
  );
}

// Screen 1 — Movimientos
function Screen1() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#EDEDED]">Bitácora Contable</h4>
            <span className="text-[10px] font-mono text-[#B0ADA7]">15 Rubros Universales</span>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-[#1F7A5A] text-[#FAF8F5] font-semibold text-[10px]">
            + Registrar
          </span>
        </div>
        <div className="px-3 py-1.5 sm:py-2 rounded-xl bg-[#141413] border border-white/10 text-[10px] sm:text-[11px] text-[#B0ADA7] flex items-center gap-2">
          <span className="truncate">Filtrar por concepto o recibo...</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-[#34D399] text-[#0C0C0B] font-bold">Todos</span>
          <span className="px-2.5 py-1 rounded-lg bg-[#1C1C1A] text-[#B0ADA7]">Egresos</span>
          <span className="px-2.5 py-1 rounded-lg bg-[#1C1C1A] text-[#B0ADA7]">Ingresos</span>
        </div>
        <div className="divide-y divide-white/10 pt-1 text-[11px] sm:text-[12px]">
          {[
            { name: "Despensa Mensual", sub: "Alimentación · Tarjeta", amount: "-$850.00", extra: "Recibo" },
            { name: "Suministro Eléctrico", sub: "Servicios · Domiciliado", amount: "-$350.00", extra: "PDF" },
            { name: "Combustible", sub: "Transporte · Efectivo", amount: "-$500.00", extra: "" },
            { name: "Rendimiento Cetes", sub: "Inversión · Cobalto", amount: "+$1,120.00", positive: true, extra: "2FA" },
          ].map((item) => (
            <div key={item.name} className="py-2.5 sm:py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#EDEDED]">{item.name}</div>
                <div className="text-[9px] sm:text-[10px] text-[#B0ADA7]">{item.sub}</div>
              </div>
              <div className="text-right">
                <div
                  className={`font-bold font-mono-tabular ${
                    item.positive ? "text-[#10B981]" : "text-[#E07A5F]"
                  }`}
                >
                  {item.amount}
                </div>
                {item.extra && (
                  <span className="text-[9px] font-mono text-[#B0ADA7] bg-[#1C1C1A] px-1.5 py-0.5 rounded border border-white/10">
                    {item.extra}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomBar active={1} />
    </PhoneFrame>
  );
}

// Screen 2 — Deudas
function Screen2() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#EDEDED]">Cuentas por Cobrar</h4>
            <span className="text-[10px] font-mono text-[#B0ADA7]">Préstamos y Abonos</span>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-[#1F7A5A] text-[#FAF8F5] font-semibold text-[10px]">
            + Deudor
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center font-mono-tabular">
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#141413] border border-white/10">
            <span className="text-[8px] sm:text-[9px] text-[#B0ADA7] block">PRESTADO</span>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#EDEDED]">$1,500</span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#141413] border border-white/10">
            <span className="text-[8px] sm:text-[9px] text-[#10B981] block">COBRADO</span>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#10B981]">$500</span>
          </div>
          <div className="p-1.5 sm:p-2 rounded-xl bg-[#141413] border border-white/10">
            <span className="text-[8px] sm:text-[9px] text-[#F59E0B] block">PENDIENTE</span>
            <span className="text-[11px] sm:text-[12px] font-bold text-[#F59E0B]">$1,000</span>
          </div>
        </div>
        <div className="p-3 sm:p-3.5 rounded-2xl bg-[#141413] border border-white/10 space-y-2 sm:space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] sm:text-[12px] font-bold text-[#EDEDED] block">Carlos López</span>
              <span className="text-[9px] text-[#B0ADA7]">Préstamo documentado</span>
            </div>
            <span className="text-[9px] font-mono text-[#34D399] bg-[#1C1C1A] px-2 py-0.5 rounded border border-white/10">
              En curso
            </span>
          </div>
          <div className="flex justify-between items-baseline text-xs">
            <span className="text-[#B0ADA7] text-[9px] sm:text-[10px]">Saldo Restante:</span>
            <span className="text-sm sm:text-base font-bold text-[#EDEDED] font-mono-tabular">$1,000.00</span>
          </div>
          <div className="w-full bg-[#1C1C1A] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#10B981] h-full w-[33%] rounded-full" />
          </div>
          <div className="flex justify-between text-[9px] font-mono-tabular text-[#B0ADA7]">
            <span>Abonado: $500</span>
            <span>Total: $1,500</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <span className="py-1.5 text-center rounded-lg bg-[#34D399] text-[#0C0C0B] font-bold text-[10px]">
              Registrar abono
            </span>
            <span className="py-1.5 text-center rounded-lg bg-[#1C1C1A] text-[#EDEDED] text-[10px] border border-white/10">
              Ver bitácora
            </span>
          </div>
        </div>
      </div>
      <BottomBar active={2} />
    </PhoneFrame>
  );
}

// Screen 3 — Metas
function Screen3() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#EDEDED]">Metas Patrimoniales</h4>
            <span className="text-[10px] font-mono text-[#B0ADA7]">Carpetas Drag &amp; Drop</span>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-[#1F7A5A] text-[#FAF8F5] font-semibold text-[10px]">
            + Carpeta
          </span>
        </div>
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#1C1C1A] border border-white/10 text-[#EDEDED] flex items-center justify-between text-[10px] sm:text-[11px] font-semibold">
          <span>Carpeta: RESERVA &amp; LIQUIDEZ</span>
          <span className="text-[9px] bg-[#0C0C0B] px-2 py-0.5 rounded font-mono text-[#34D399]">
            ⠿ Drag
          </span>
        </div>
        <div className="p-3 sm:p-3.5 rounded-2xl bg-[#141413] border border-white/10 space-y-2 sm:space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-[11px] sm:text-[12px] font-bold text-[#EDEDED]">Fondo de Emergencia</h5>
              <span className="text-[9px] text-[#B0ADA7]">6 meses de gastos fijos</span>
            </div>
            <span className="text-[9px] font-mono text-[#10B981] bg-[#1C1C1A] px-2 py-0.5 rounded border border-white/10">
              En ritmo
            </span>
          </div>
          <div className="flex justify-between items-baseline pt-1 font-mono-tabular">
            <div>
              <span className="text-[9px] text-[#B0ADA7] block">Acumulado</span>
              <span className="text-base sm:text-lg font-serif font-bold text-[#EDEDED]">$2,500</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-[#B0ADA7] block">Objetivo</span>
              <span className="text-[11px] sm:text-[12px] font-bold text-[#34D399]">$10,000</span>
            </div>
          </div>
          <div className="w-full bg-[#1C1C1A] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#10B981] h-full w-[25%] rounded-full" />
          </div>
          <div className="flex justify-between text-[9px] font-mono-tabular text-[#B0ADA7]">
            <span>Restante: $7,500</span>
            <span>Cuota: $250/sem</span>
          </div>
        </div>
        <div className="p-2.5 sm:p-3 rounded-xl bg-[#141413] border border-white/10 flex items-center justify-between text-[11px] sm:text-[12px]">
          <div>
            <div className="font-semibold text-[#EDEDED] text-[10px] sm:text-[11px]">Portafolio Inversión</div>
            <div className="text-[9px] text-[#B0ADA7] font-mono-tabular">Meta: $50,000</div>
          </div>
          <span className="text-[10px] font-mono-tabular font-bold text-[#60A5FA]">64%</span>
        </div>
      </div>
      <BottomBar active={3} />
    </PhoneFrame>
  );
}

// Screen 4 — Conceptos Fijos
function Screen4() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-3.5 sm:p-4 space-y-2.5 sm:space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#EDEDED]">Calendario de Pasivos</h4>
            <span className="text-[10px] font-mono text-[#B0ADA7]">Alertas de Vencimiento</span>
          </div>
          <span className="text-[10px] font-mono text-[#F59E0B]">Noviembre</span>
        </div>
        <div className="divide-y divide-white/10 pt-1 text-[11px] sm:text-[12px]">
          {[
            { name: "Suscripción Editorial", sub: "Día 5 de cada mes", amount: "$150.00", countdown: "en 3d", warn: true },
            { name: "Fibra Óptica Simétrica", sub: "Día 6 de cada mes", amount: "$450.00", countdown: "en 4d", warn: true },
            { name: "Arrendamiento Estudio", sub: "Día 10 de cada mes", amount: "$4,500.00", countdown: "en 8d", warn: false },
          ].map((item) => (
            <div key={item.name} className="py-2.5 sm:py-3 flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#EDEDED] text-[10px] sm:text-[11px]">{item.name}</div>
                <div className="text-[9px] text-[#B0ADA7]">{item.sub}</div>
              </div>
              <div className="text-right font-mono-tabular">
                <div className="text-[#EDEDED] font-bold text-[11px] sm:text-[12px]">{item.amount}</div>
                <span
                  className={`text-[9px] font-semibold ${
                    item.warn ? "text-[#F59E0B]" : "text-[#34D399]"
                  }`}
                >
                  {item.countdown}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomBar active={4} />
    </PhoneFrame>
  );
}

const SCREENS = [Screen0, Screen1, Screen2, Screen3, Screen4];

// ──────────────────────────────────────────────
// Gallery component
// ──────────────────────────────────────────────
export function Gallery({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = 5; // always 5 slides in 3D carousel

  function prev() { setCurrent((c) => (c - 1 + total) % total); }
  function next() { setCurrent((c) => (c + 1) % total); }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const SWIPE_THRESHOLD = 40;
    if (deltaX < -SWIPE_THRESHOLD) {
      next();
    } else if (deltaX > SWIPE_THRESHOLD) {
      prev();
    }
    setTouchStartX(null);
  };

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  function getClass(idx: number) {
    if (idx === current) return "carousel-phone active w-[min(85vw,310px)] sm:w-[340px]";
    if (idx === prevIdx) return "carousel-phone prev w-[min(85vw,310px)] sm:w-[340px]";
    if (idx === nextIdx) return "carousel-phone next w-[min(85vw,310px)] sm:w-[340px]";
    return "carousel-phone hidden-phone w-[min(85vw,310px)] sm:w-[340px]";
  }

  const info = SLIDE_INFO[current];

  return (
    <section
      id="galeria"
      className="py-12 sm:py-16 lg:py-24 border-b border-border relative overflow-hidden"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Editorial de 12 Columnas */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 pb-8 border-b border-border">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              02 / INSPECCIÓN TÁCTIL TRIDIMENSIONAL
            </span>
            <h2 className="font-display-v2 font-bold text-3xl sm:text-5xl text-foreground text-balance">
              Arquitectura{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                Obsidian Carbon
              </EditorialHighlight>{" "}
              en cada módulo.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-muted-foreground editorial-text-hover leading-relaxed text-pretty">
              Explora las 5 láminas operativas de la aplicación. Más del{" "}
              <EditorialHighlight>60% de los datos descansan sobre el lienzo</EditorialHighlight>{" "}
              con separadores de 1px y tipografía numérica tabular sin saltos de maquetación.
            </p>
          </div>
        </ScrollReveal>

        {/* Selector de Láminas (5 Módulos) + Ficha Técnica Activa */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div
            role="tablist"
            aria-label="Módulos de la galería"
            className="flex sm:flex-wrap items-center sm:justify-center gap-1.5 p-1.5 rounded-2xl bg-muted border border-border overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory"
          >
            {SLIDE_INFO.map((slide, idx) => {
              const active = idx === current;
              return (
                <button
                  key={slide.shortLabel}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCurrent(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono tactile-press cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                    active
                      ? "bg-card text-foreground font-semibold border border-border shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {slide.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="text-center p-5 rounded-2xl bg-card border border-border editorial-surface">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-primary border border-border text-xs font-mono mb-2">
              {info.badge}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {info.title}
            </h3>
            <p className="text-muted-foreground editorial-text-hover text-xs sm:text-sm mt-1.5 max-w-[60ch] mx-auto leading-relaxed">
              {info.desc}
            </p>
          </div>
        </div>

        {/* Carousel with mobile swipe support */}
        <div
          className="relative w-full touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ScrollParallaxStage
            intensity={14}
            className="relative w-full max-w-5xl mx-auto h-[600px] sm:h-[720px] carousel-stage flex items-center justify-center"
          >
            {/* Desktop Floating Arrows */}
            <button
              type="button"
              aria-label="Pantalla anterior"
              className="hidden md:flex absolute left-2 sm:left-6 z-40 h-12 w-12 items-center justify-center rounded-2xl bg-card hover:bg-muted text-foreground border border-border editorial-surface tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={prev}
            >
              <ChevronLeft className="w-5 h-5 text-primary" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Siguiente pantalla"
              className="hidden md:flex absolute right-2 sm:right-6 z-40 h-12 w-12 items-center justify-center rounded-2xl bg-card hover:bg-muted text-foreground border border-border editorial-surface tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={next}
            >
              <ChevronRight className="w-5 h-5 text-primary" strokeWidth={2} />
            </button>

            {/* Phones */}
            {SCREENS.map((Screen, idx) => (
              <div
                key={idx}
                className={getClass(idx)}
                onClick={() => setCurrent(idx)}
              >
                <Screen />
              </div>
            ))}
          </ScrollParallaxStage>
        </div>

        {/* Controls & Dot indicators */}
        <div className="flex items-center justify-between md:justify-center gap-3 sm:gap-4 mt-6 max-w-sm sm:max-w-md mx-auto px-2">
          {/* Mobile Previous Button */}
          <button
            type="button"
            aria-label="Lámina anterior"
            onClick={prev}
            className="md:hidden inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-card hover:bg-muted text-foreground border border-border editorial-surface tactile-press cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
            <span>Anterior</span>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 sm:gap-2.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a lámina ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`transition-[width,background-color] duration-300 rounded-full cursor-pointer ${
                  i === current ? "w-6 sm:w-8 h-2 bg-primary" : "w-2 sm:w-2.5 h-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            aria-label="Siguiente lámina"
            onClick={next}
            className="md:hidden inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-mono font-medium bg-card hover:bg-muted text-foreground border border-border editorial-surface tactile-press cursor-pointer shrink-0"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
          </button>
        </div>

        {/* Real gallery thumbnails (if loaded from Supabase) */}
        {images.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Archivo de capturas verificadas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {images.map((img) => (
                <a
                  key={img.id}
                  href={img.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver captura: ${img.title}`}
                  className="relative h-20 w-20 overflow-hidden rounded-xl outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 opacity-80 hover:opacity-100 tactile-press"
                >
                  <Image src={img.image_url} alt={img.title} fill sizes="80px" className="object-cover" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
