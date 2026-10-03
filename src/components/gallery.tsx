"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/types";

// ──────────────────────────────────────────────
// 5 virtual phone screens for the 3D carousel
// (shown when no real gallery images are available)
// ──────────────────────────────────────────────
const SLIDE_INFO = [
  {
    badge: "Slide 1 de 5 · Módulo Principal",
    title: "Panel de Control & Balance General",
    desc: "Muestra el balance acumulado neto, la división clara entre Efectivo en mano vs Cuentas bancarias, tasa de ahorro mensual y switch para modo privado.",
  },
  {
    badge: "Slide 2 de 5 · Transacciones",
    title: "Movimientos, Filtros y Recibos",
    desc: "Bitácora completa con búsqueda en vivo, 4 tipos de operación (Ingreso, Gasto, Ahorro, Traspaso) y adjuntos fotográficos de comprobantes de pago.",
  },
  {
    badge: "Slide 3 de 5 · Préstamos",
    title: "Control 'Quién Me Debe' y Abonos",
    desc: "Seguimiento riguroso de préstamos por persona: Total Prestado, Cobrado y Pendiente con registro de abonos parciales y liquidación progresiva.",
  },
  {
    badge: "Slide 4 de 5 · Planificación",
    title: "Metas de Ahorro en Carpetas Temáticas",
    desc: 'Agrupación visual por carpetas ("Biker", "Viajes") con proyección predictiva del ritmo de ahorro semanal necesario para cumplir tu fecha objetivo.',
  },
  {
    badge: "Slide 5 de 5 · Automatización",
    title: "Conceptos Fijos & Cuenta Regresiva",
    desc: "Alertas automáticas de próximos vencimientos (en 3d, en 4d, en 8d) para evitar cortes de servicio sin duplicar registros contables.",
  },
];

// ──────────────────────────────────────────────
// Phone frames (inline SVG/JSX mock screens)
// ──────────────────────────────────────────────
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[48px] p-2.5 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 border border-slate-600 shadow-2xl">
      <div className="rounded-[40px] overflow-hidden bg-[#090e1a] border border-slate-900 h-[620px] flex flex-col justify-between text-left select-none" style={{ WebkitFontSmoothing: "antialiased" }}>
        {/* Status bar */}
        <div className="h-7 px-5 pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0 bg-[#090e1a]">
          <span className="font-semibold text-slate-200">09:41</span>
          <div className="w-12 h-3.5 bg-black rounded-full" />
          <span className="text-emerald-400 font-bold">100%</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function BottomBar({ active }: { active: number }) {
  const tabs = ["Inicio", "Movs", "Deudas", "Metas", "Pagos"];
  return (
    <div className="h-12 px-4 bg-slate-950 border-t border-slate-800 flex items-center justify-around text-slate-400 shrink-0 text-[10px]">
      {tabs.map((t, i) => (
        <span key={t} className={i === active ? "text-cyan-400 font-bold" : ""}>
          {i === active ? `● ${t}` : t}
        </span>
      ))}
    </div>
  );
}

// Screen 0 — Dashboard
function Screen0() {
  return (
    <PhoneFrame>
      <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20">FP</div>
            <div>
              <div className="text-[11px] text-slate-400">Finance Pal v1.20</div>
              <div className="text-[13px] font-bold text-white flex items-center gap-1.5">Balance General <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /></div>
            </div>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 text-white shadow-lg shadow-sky-500/20">
          <span className="text-[10px] uppercase font-bold tracking-wider text-sky-100">Neto Acumulado</span>
          <div className="text-3xl font-extrabold tracking-tight mt-0.5">$9,520</div>
          <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2.5 border-t border-white/20 text-[10px]">
            <div><span className="text-sky-100 block">↗ Ingresos</span><span className="font-bold">$12,000</span></div>
            <div><span className="text-sky-100 block">↘ Gastos</span><span className="font-bold">$2,480</span></div>
            <div><span className="text-sky-100 block">🐖 Ahorro</span><span className="font-bold">$500</span></div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2.5 border-t border-white/20 text-[10px]">
            <div className="bg-white/10 rounded-lg p-2"><span className="text-sky-100 block">Efectivo Físico</span><span className="font-bold">$1,520</span></div>
            <div className="bg-white/10 rounded-lg p-2"><span className="text-sky-100 block">Cuentas Digitales</span><span className="font-bold">$8,000</span></div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex justify-between text-[11px] mb-1.5"><span className="text-slate-400">Tasa de Ahorro</span><span className="text-cyan-400 font-bold font-mono">4.1%</span></div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-cyan-400 h-full w-[4%] rounded-full" /></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-[11px] px-0.5"><span className="font-bold text-slate-300">Movimientos Recientes</span><span className="text-cyan-400">Ver todo →</span></div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-2.5"><span>☕</span><div><div className="font-semibold text-white">Café de la mañana</div><div className="text-[9px] text-slate-400">Efectivo en mano</div></div></div>
            <span className="text-rose-400 font-bold font-mono">-$45</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-2.5"><span>💰</span><div><div className="font-semibold text-white">Quincena</div><div className="text-[9px] text-slate-400">Nómina · Transferencia</div></div></div>
            <span className="text-emerald-400 font-bold font-mono">+$6,000</span>
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
      <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <div><h4 className="font-bold text-sm text-white">Movimientos</h4><span className="text-[10px] text-slate-400">Septiembre 2026</span></div>
          <span className="px-2.5 py-1 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[10px]">+ Nuevo</span>
        </div>
        <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" /></svg>
          <span>Buscar concepto o recibo...</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="px-2.5 py-1 rounded-lg bg-cyan-400 text-slate-950 font-bold">Todos</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Gastos</span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300">Ingresos</span>
        </div>
        <div className="space-y-2.5 pt-1 text-[12px]">
          <span className="text-[10px] font-mono text-slate-400 block">28 Septiembre 2026</span>
          {[
            { icon: "🛒", name: "Supermercado", sub: "Despensa del mes", amount: "-$850", amountColor: "text-rose-400", extra: "Ticket 📎" },
            { icon: "⚡", name: "Recibo de Luz", sub: "Servicios del hogar", amount: "-$350", amountColor: "text-rose-400", extra: "PDF" },
            { icon: "⛽", name: "Gasolina", sub: "Transporte", amount: "-$500", amountColor: "text-rose-400", extra: "" },
          ].map((item) => (
            <div key={item.name} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-slate-800 text-sm">{item.icon}</span>
                <div><div className="font-semibold text-white">{item.name}</div><div className="text-[9px] text-slate-400">{item.sub}</div></div>
              </div>
              <div className="text-right">
                <div className={`font-bold font-mono ${item.amountColor}`}>{item.amount}</div>
                {item.extra && <span className="text-[8px] text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">{item.extra}</span>}
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
      <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <div><h4 className="font-bold text-sm text-white">Me Deben</h4><span className="text-[10px] text-slate-400">Préstamos y Cobros</span></div>
          <span className="px-2.5 py-1 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[10px]">+ Nuevo</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center">
          <div className="p-2 rounded-xl bg-sky-500/20 border border-sky-500/30"><span className="text-[9px] text-sky-300 block">TOTAL</span><span className="text-[12px] font-bold text-white">$1,500</span></div>
          <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30"><span className="text-[9px] text-emerald-300 block">COBRADO</span><span className="text-[12px] font-bold text-white">$500</span></div>
          <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30"><span className="text-[9px] text-indigo-300 block">PENDIENTE</span><span className="text-[12px] font-bold text-white">$1,000</span></div>
        </div>
        <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
          <div className="flex items-center justify-between">
            <div><span className="text-[12px] font-bold text-white block">Carlos López</span><span className="text-[9px] text-slate-400">Préstamo personal</span></div>
            <span className="text-[9px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">Activo</span>
          </div>
          <div className="flex justify-between items-baseline text-xs"><span className="text-slate-400 text-[10px]">Saldo Restante:</span><span className="text-base font-bold text-cyan-300 font-mono">$1,000</span></div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-[33%] rounded-full" /></div>
          <div className="flex justify-between text-[9px] text-slate-400"><span>Pagado: $500</span><span>Total: $1,500</span></div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button className="py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[10px]">Abonar</button>
            <button className="py-1.5 rounded-lg bg-slate-800 text-slate-300 text-[10px]">Historial</button>
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
      <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <div><h4 className="font-bold text-sm text-white">Metas de Ahorro</h4><span className="text-[10px] text-slate-400">Carpetas temáticas</span></div>
          <span className="px-2.5 py-1 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[10px]">+ Carpeta</span>
        </div>
        <div className="p-2.5 rounded-xl bg-sky-500 text-white flex items-center justify-between text-[11px] font-semibold">
          <div className="flex items-center gap-2"><span>📁</span><span>Carpeta: IMPREVISTOS</span></div>
          <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full">1 Meta</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><span className="text-lg">🚑</span><div><h5 className="text-[12px] font-bold text-white">Fondo de Emergencia</h5><span className="text-[9px] text-sky-100">Ahorro general</span></div></div>
            <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full font-bold">En ritmo</span>
          </div>
          <div className="flex justify-between items-baseline pt-1">
            <div><span className="text-[9px] text-sky-100 block">Acumulado</span><span className="text-lg font-extrabold">$2,500</span></div>
            <div className="text-right"><span className="text-[9px] text-sky-100 block">Objetivo</span><span className="text-[12px] font-mono font-bold">$10,000</span></div>
          </div>
          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden"><div className="bg-cyan-300 h-full w-[25%] rounded-full" /></div>
          <div className="flex justify-between text-[9px] text-sky-100"><span>Restante: $7,500</span><span>Ritmo: $250/sem</span></div>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[12px]">
          <div className="flex items-center gap-2.5"><span>✈️</span><div><div className="font-semibold text-white text-[11px]">Vacaciones Familia</div><div className="text-[9px] text-slate-400">Meta: $5,000</div></div></div>
          <span className="text-[10px] font-mono text-cyan-400">10%</span>
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
      <div className="flex-1 p-4 space-y-3.5 overflow-hidden">
        <div className="flex items-center justify-between">
          <div><h4 className="font-bold text-sm text-white">Próximos Pagos</h4><span className="text-[10px] text-slate-400">Conceptos Fijos</span></div>
          <span className="text-[9px] font-mono text-cyan-400">Octubre</span>
        </div>
        <div className="space-y-2.5 pt-1 text-[12px]">
          {[
            { icon: "▶️", iconBg: "bg-black text-red-500", name: "Suscripción Cine", sub: "Día 5 de cada mes", amount: "$150", countdown: "en 3d", countdownColor: "text-amber-400" },
            { icon: "🌐", iconBg: "bg-cyan-950 text-cyan-300", name: "Internet Casa", sub: "Día 6 de cada mes", amount: "$450", countdown: "en 4d", countdownColor: "text-amber-400" },
            { icon: "🏠", iconBg: "bg-slate-800 text-sky-400", name: "Renta Departamento", sub: "Día 10 de cada mes", amount: "$4,500", countdown: "en 8d", countdownColor: "text-sky-400" },
          ].map((item) => (
            <div key={item.name} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ${item.iconBg}`}>{item.icon}</div>
                <div><div className="font-semibold text-white text-[11px]">{item.name}</div><div className="text-[9px] text-slate-400">{item.sub}</div></div>
              </div>
              <div className="text-right">
                <div className="text-white font-mono font-bold text-[12px]">{item.amount}</div>
                <span className={`text-[9px] font-semibold ${item.countdownColor}`}>{item.countdown}</span>
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
  const total = 5; // always 5 slides in 3D carousel

  function prev() { setCurrent((c) => (c - 1 + total) % total); }
  function next() { setCurrent((c) => (c + 1) % total); }

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  function getClass(idx: number) {
    if (idx === current) return "carousel-phone active w-[320px] sm:w-[340px]";
    if (idx === prevIdx) return "carousel-phone prev w-[320px] sm:w-[340px]";
    if (idx === nextIdx) return "carousel-phone next w-[320px] sm:w-[340px]";
    return "carousel-phone hidden-phone w-[320px] sm:w-[340px]";
  }

  const info = SLIDE_INFO[current];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-slate-950 via-[#0a1224] to-slate-950 border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-cyan-400 mb-2">
            Galería Tridimensional Interactiva
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Así se ve y se siente Finance Pal
          </h2>
        </div>

        {/* Info card */}
        <div className="max-w-2xl mx-auto mb-8 text-center p-5 rounded-2xl glass-panel-glow border border-cyan-500/30 transition-all duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-xs font-mono mb-2">
            {info.badge}
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{info.title}</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">{info.desc}</p>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl mx-auto h-[700px] sm:h-[740px] carousel-stage flex items-center justify-center">
          {/* Arrows */}
          <button
            aria-label="Pantalla anterior"
            className="absolute left-2 sm:left-6 z-40 p-3 sm:p-4 rounded-2xl glass-panel hover:bg-slate-800 text-white border border-slate-700 shadow-xl hover:scale-105 active:scale-95 transition-all"
            onClick={prev}
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          <button
            aria-label="Siguiente pantalla"
            className="absolute right-2 sm:right-6 z-40 p-3 sm:p-4 rounded-2xl glass-panel hover:bg-slate-800 text-white border border-slate-700 shadow-xl hover:scale-105 active:scale-95 transition-all"
            onClick={next}
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
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
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-2 bg-cyan-400" : "w-2.5 h-2 bg-slate-700"
              }`}
            />
          ))}
        </div>

        {/* Real gallery thumbnails (if loaded from Supabase) */}
        {images.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              Capturas de pantalla reales
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {images.map((img) => (
                <a
                  key={img.id}
                  href={img.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-slate-700 hover:border-cyan-500/60 opacity-70 hover:opacity-100 transition-all"
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

