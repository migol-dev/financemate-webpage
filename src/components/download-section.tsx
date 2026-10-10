"use client";

import { useDownloadTracking } from "@/hooks/use-download-tracking";
import type { ReleaseInfo } from "@/lib/types";

interface DownloadSectionProps {
  release: ReleaseInfo;
  repoUrl?: string;
}

export function DownloadSection({ release, repoUrl }: DownloadSectionProps) {
  const { hasDownloaded, logDownload } = useDownloadTracking();
  const releasesPageUrl = repoUrl
    ? `${repoUrl}/releases`
    : release.url.replace(/\/download.*/, "").replace(/\/latest$/, "");

  return (
    <>
      {/* Web App banner */}
      <section className="py-16 bg-slate-900/40 border-t border-white/10" id="web-demo">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-cyan-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                Despliegue Continuo Web
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                ¿Prefieres probarlo sin instalar nada?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                La versión web de Finance Pal corre de forma nativa en cualquier navegador con
                IndexedDB y sincronización cloud con tu celular.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://financepal-web.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg shadow-white/10"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 19.7778H22L12 2Z" />
                </svg>
                <span>financepal-web.vercel.app</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download APK section */}
      <section id="descarga" className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b1329] border border-cyan-500/40 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Info side */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
                  Descarga Oficial Android
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3">
                  Instala Finance Pal {release.version} hoy
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                  El instalador APK es compatible con Android 8.0 Oreo hasta Android 15 y funciona
                  100% desconectado de internet.
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-slate-300 mb-6">
                  {[
                    { label: "Versión", value: release.version },
                    { label: "S.O.", value: "Android 8.0+" },
                    { label: "Licencia", value: "MIT" },
                  ].map((item) => (
                    <div key={item.label} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">{item.label}</span>
                      {item.value}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={release.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => logDownload(release.version)}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-lg shadow-cyan-500/30 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                    <span>Descargar APK Directo</span>
                  </a>
                  <a
                    href={releasesPageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 hover:border-cyan-500/40 transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd" />
                    </svg>
                    <span>Ver Releases en GitHub</span>
                  </a>
                </div>

                {hasDownloaded && (
                  <div className="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-3 py-2 rounded-xl font-mono">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>
                    Ya descargaste Finance Pal — ¡gracias por apoyar el proyecto!
                  </div>
                )}

                <div className="text-[11px] text-slate-400 mt-3 font-mono">
                  ✓ SHA-256 Verificado · Código auditable bajo licencia MIT · Binario: financemate.apk
                </div>
              </div>

              {/* Steps side */}
              <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-emerald-400 p-[2px] shadow-lg shadow-sky-500/25 mb-4">
                  <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <p className="text-xs font-semibold text-slate-300 mb-5">Instalación en 3 pasos simples</p>
                <div className="w-full text-left space-y-3 text-xs text-slate-300">
                  {[
                    "Descarga el archivo APK en tu dispositivo Android.",
                    'Habilita "Instalar desde fuentes desconocidas" en Ajustes.',
                    "Abre la app y gestiona tus finanzas sin cuentas ni internet.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
