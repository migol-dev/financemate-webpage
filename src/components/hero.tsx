"use client";

export function Hero({ version, githubUrl }: { version: string; githubUrl: string }) {
  return (
    <section id="top" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-sky-500/20 via-cyan-400/15 to-emerald-400/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm font-medium text-slate-200 mb-6 backdrop-blur">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-300 font-semibold">Finance Pal v{version} Oficial</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-300">Local-First · Cifrado AES-GCM · Sync Opcional</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          Tus finanzas, bajo soberanía total en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            tu dispositivo.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          Un ecosistema financiero libre y offline-first. Gestiona flujo de caja, desglose en
          efectivo, metas con ritmo predictivo, préstamos con abonos y sincronización opcional
          cifrada en Supabase.
        </p>

        {/* Platform badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-xs font-semibold text-emerald-300 backdrop-blur">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993.0001.5511-.4485.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.121-.2097.049-.4775-.1607-.5985-.2097-.121-.4775-.049-.5985.1608l-2.0238 3.5054C15.421 8.3516 13.7667 8 12 8s-3.421.3516-5.0945.9319L4.8817 5.4265c-.121-.2098-.3888-.2818-.5985-.1608-.2097.121-.2817.3888-.1607.5985l1.996 3.4572C2.688 11.2867 0 15.3587 0 20.0001h24c0-4.6414-2.688-8.7134-6.1185-10.6787" />
            </svg>
            <span>Android (App Nativa APK &amp; PWA)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-xs font-semibold text-cyan-300 backdrop-blur">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Escritorio (PC / Mac / Linux Web)</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#descarga"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
            <span>Descargar APK v{version}</span>
          </a>
          <a
            href="https://financepal-web.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-all"
          >
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Abrir Web App</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-mono border border-cyan-800">En vivo</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><strong className="text-emerald-400">✓</strong> AES-256-GCM + PBKDF2</span>
          <span className="flex items-center gap-1.5"><strong className="text-emerald-400">✓</strong> 100% Local-First (SQLite)</span>
          <span className="flex items-center gap-1.5"><strong className="text-emerald-400">✓</strong> Cero Telemetría / Rastreos</span>
          <span className="flex items-center gap-1.5"><strong className="text-emerald-400">✓</strong> Código Abierto Licencia MIT</span>
        </div>
      </div>
    </section>
  );
}
