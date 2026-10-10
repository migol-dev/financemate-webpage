export function PlatformsSection() {
  return (
    <section
      id="plataformas"
      className="py-16 border-y border-white/10 bg-slate-900/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            Multidispositivo &amp; Sin Barreras
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Disponible donde tú decidas trabajar
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            Misma experiencia limpia, cifrado estricto y sin fricción en tu teléfono o en tu
            computadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Android */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-emerald-500/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9996.4482.9996.9993.0001.5511-.4485.9997-.9996.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.121-.2097.049-.4775-.1607-.5985-.2097-.121-.4775-.049-.5985.1608l-2.0238 3.5054C15.421 8.3516 13.7667 8 12 8s-3.421.3516-5.0945.9319L4.8817 5.4265c-.121-.2098-.3888-.2818-.5985-.1608-.2097.121-.2817.3888-.1607.5985l1.996 3.4572C2.688 11.2867 0 15.3587 0 20.0001h24c0-4.6414-2.688-8.7134-6.1185-10.6787" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Dispositivos Móviles
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Android Nativo (APK) o Web PWA
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instala la aplicación nativa construida con Capacitor o añádela a tu pantalla de
                inicio como PWA. Cuenta con base de datos SQLite ultrarrápida, notificaciones de
                conceptos fijos y funcionamiento 100% offline sin gasto de batería en segundo plano.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Almacenamiento rápido en SQLite local cifrado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Soporte completo desde Android 8.0 hasta Android 15
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  Cero permisos invasivos ni acceso a datos del teléfono
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a
                href="#descarga"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Ir a descarga de APK v1.20.2</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop */}
          <div className="p-8 rounded-3xl glass-panel-glow border border-cyan-500/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Computadoras de Escritorio
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Escritorio (PC / Mac / Linux Web)
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Accede al instante desde Chrome, Firefox, Safari o Brave mediante la Web App oficial
                en Vercel. Tus datos se resguardan de manera local con IndexedDB y cifrado en el
                cliente, permitiendo registrar finanzas masivas con comodidad de pantalla amplia.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 pt-1">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  Despliegue sin instalaciones ni esperas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  Almacenamiento local aislado en IndexedDB con cifrado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  Exportación rápida en CSV para Excel y backups JSON
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <a
                href="https://financepal-web.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Abrir Web App (financepal-web.vercel.app) ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
