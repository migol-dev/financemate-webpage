"use client";

const FEATURES = [
  {
    color: "sky",
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    title: "Balance & Modo Privado",
    desc: "Balance neto consolidado, desglose inmediato de Efectivo vs Cuentas bancarias y botón toggle para ocultar cifras en público.",
    tag: "Visibilidad Toggle",
    tagColor: "cyan",
  },
  {
    color: "emerald",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Metas con Ritmo Predictivo",
    desc: 'Organización en carpetas temáticas ("Biker", "Viajes"). Calcula el ahorro diario y semanal necesario para llegar a tiempo a tu objetivo.',
    tag: "Carpetas Inteligentes",
    tagColor: "emerald",
  },
  {
    color: "amber",
    iconPath: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    title: 'Deudas "Quién Te Debe"',
    desc: "Controla préstamos a conocidos con total cobrado y pendiente. Registra abonos parciales detallados con fecha y método de cobro.",
    tag: "Abonos Parciales",
    tagColor: "amber",
  },
  {
    color: "rose",
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Conceptos Fijos Recurrentes",
    desc: 'Suscripciones y servicios con cuenta regresiva ("en 3d") para anticipar pagos de corte y prevenir recargos moratorios.',
    tag: "Cuenta Regresiva",
    tagColor: "rose",
  },
  {
    color: "cyan",
    iconPath: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
    title: "Filtros Inteligentes & Recibos",
    desc: "Búsqueda rápida de transacciones, soporte para 4 tipos de movimientos y almacenamiento de fotos de tickets o comprobantes.",
    tag: "Comprobantes Adjuntos",
    tagColor: "cyan",
  },
  {
    color: "teal",
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Tasa de Ahorro en Tiempo Real",
    desc: "Medición visual instantánea de la proporción de tus ingresos retenidos cada mes con barra de progreso adaptativa.",
    tag: "Cálculo Automático",
    tagColor: "teal",
  },
  {
    color: "indigo",
    iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
    title: "Soberanía de Datos (CSV/JSON)",
    desc: "Descarga tus transacciones en hojas de cálculo CSV o realiza copias de seguridad completas en formato JSON versionado.",
    tag: "Sin Vendor Lock-in",
    tagColor: "indigo",
  },
  {
    color: "violet",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Cero Banners ni Rastreo",
    desc: "Sin SDKs de anunciantes, sin venta de datos a intermediarios y sin popups intrusivos. Solo tú y tus finanzas.",
    tag: "100% Sin Publicidad",
    tagColor: "violet",
  },
];

const TAG_COLORS: Record<string, string> = {
  cyan: "text-cyan-400 bg-cyan-950 border-cyan-800",
  emerald: "text-emerald-400 bg-emerald-950 border-emerald-800",
  amber: "text-amber-400 bg-amber-950 border-amber-800",
  rose: "text-rose-400 bg-rose-950 border-rose-800",
  teal: "text-teal-400 bg-teal-950 border-teal-800",
  indigo: "text-indigo-400 bg-indigo-950 border-indigo-800",
  violet: "text-violet-400 bg-violet-950 border-violet-800",
};

const ICON_COLORS: Record<string, string> = {
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  teal: "bg-teal-500/10 border-teal-500/20 text-teal-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
};

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">
            Ecosistema Completo
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Diseñado para cada dimensión de tu dinero
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Sin cajas negras ni funciones de pago ocultas. Cada módulo fue construido con extrema
            precisión para reflejar el comportamiento financiero real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="p-6 rounded-3xl glass-panel neon-hover border border-white/[0.06] transition-all"
            >
              <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 ${ICON_COLORS[f.color]}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={f.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{f.desc}</p>
              <span className={`text-xs font-mono px-2 py-0.5 rounded border ${TAG_COLORS[f.tagColor]}`}>
                {f.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
