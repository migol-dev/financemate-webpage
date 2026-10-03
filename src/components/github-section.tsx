"use client";

export function GithubSection({ repoUrl }: { repoUrl: string }) {
  return (
    <section id="seguridad" className="py-20 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            Arquitectura Criptográfica
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Cifrado y Privacidad de Grado Militar
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg">
            Tus datos nunca se venden ni se procesan en la nube para generar perfiles crediticios.
            Soberanía total garantizada por código.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              color: "cyan",
              iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              title: "AES-GCM 256 + PBKDF2",
              desc: "Derivación de claves locales mediante 100,000 iteraciones PBKDF2. Los datos sensibles se encriptan antes de tocar el almacenamiento.",
              badge: "✓ Llave derivada en el cliente",
            },
            {
              color: "emerald",
              iconPath: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
              title: "100% Local-First (SQLite)",
              desc: "La base de datos SQLite y memoria segura residen en tu terminal. La app arranca al instante sin requerir internet de por vida.",
              badge: "✓ Cero latencia de red",
            },
            {
              color: "sky",
              iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Sync Opcional Supabase (RLS)",
              desc: "Si decides activar la nube, cada fila queda aislada por tu UID con Row Level Security y cola offline Zustand con reintentos.",
              badge: "✓ 100% Gratuito y Opcional",
            },
          ].map((item) => (
            <div key={item.title} className="p-7 rounded-3xl glass-panel border border-white/10">
              <div className={`w-10 h-10 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-4`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d={item.iconPath} strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              <div className={`mt-4 pt-4 border-t border-slate-800 text-xs font-mono text-${item.color}-400`}>
                {item.badge}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub section */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700">
            <svg className="h-7 w-7 text-slate-200 fill-current" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white">
            Código abierto y transparente
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">
            Revisa el código fuente, sigue las versiones beta y consulta el historial completo de
            cambios de Finance Pal en GitHub. Licencia MIT — sin restricciones.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all"
            >
              Ver repositorio
            </a>
            <a
              href={`${repoUrl}/releases`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:border-cyan-500/40 transition-all"
            >
              Versiones y betas
            </a>
            <a
              href={`${repoUrl}/branches`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:border-cyan-500/40 transition-all"
            >
              Ramas activas
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 text-sm text-slate-400">
            <span className="text-amber-400">★</span>
            Dale una estrella si te resulta útil
          </div>
        </div>
      </div>
    </section>
  );
}
