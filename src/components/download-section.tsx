"use client";

import { Download, ArrowUpRight, CheckCircle2, Smartphone, Tag } from "lucide-react";
import { useDownloadTracking } from "@/hooks/use-download-tracking";
import type { ReleaseInfo } from "@/lib/types";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

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
      <section className="py-14 border-b border-border bg-muted/30" id="web-demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border editorial-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  Ejecución Instantánea en Navegador
                </span>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  ¿Prefieres auditar tus finanzas sin instalar nada?
                </h3>
                <p className="text-muted-foreground editorial-text-hover text-sm max-w-[60ch]">
                  La edición web de FinancePal corre directamente en tu navegador con{" "}
                  <EditorialHighlight>almacenamiento local IndexedDB</EditorialHighlight> y
                  sincronización cifrada opcional.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://financepal-web.vercel.app"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-ghost ps-5 pe-4 group"
                >
                  <span className="font-mono text-xs sm:text-sm">financepal-web.vercel.app</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-primary transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Download APK section */}
      <section id="descarga" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="rounded-2xl bg-card border border-border p-6 sm:p-12 editorial-surface">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Info side (7 Columnas) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-primary border border-border text-xs font-mono font-semibold uppercase tracking-wider">
                    07 / DISTRIBUCIÓN OFICIAL ANDROID
                  </div>
                  <h2 className="font-display-v2 font-bold text-3xl sm:text-5xl text-foreground text-balance">
                    Instala FinancePal{" "}
                    <EditorialHighlight className="italic font-semibold text-primary">
                      v{release.version}
                    </EditorialHighlight>{" "}
                    en tu dispositivo.
                  </h2>
                  <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base max-w-[60ch] leading-relaxed">
                    El paquete APK oficial es compatible desde Android 8.0 Oreo hasta Android 15 y
                    opera <EditorialHighlight>100% desconectado de la red</EditorialHighlight>.
                  </p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-3 gap-3 text-xs font-mono-tabular">
                    {[
                      { label: "Edición", value: `v${release.version}` },
                      { label: "Plataforma", value: "Android 8.0+" },
                      { label: "Licencia", value: "MIT Auditable" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-3 rounded-xl bg-muted/60 border border-border"
                      >
                        <span className="text-muted-foreground block text-[10px] uppercase">
                          {item.label}
                        </span>
                        <span className="text-foreground font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <a
                      href={release.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => logDownload(release.version)}
                      className="btn-primary ps-6 pe-5 group"
                    >
                      <span>Descargar APK directo (v{release.version})</span>
                      <Download
                        className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
                        strokeWidth={2}
                      />
                    </a>
                    <a
                      href={releasesPageUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost px-5"
                    >
                      <Tag className="w-4 h-4 text-primary" strokeWidth={1.75} />
                      <span>Ver notas de versión en GitHub</span>
                    </a>
                  </div>

                  {hasDownloaded && (
                    <div className="inline-flex items-center gap-2 text-xs text-primary bg-muted border border-border px-3.5 py-2 rounded-xl font-mono">
                      <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={2} />
                      <span>Descarga registrada en este navegador — gracias por respaldar el proyecto.</span>
                    </div>
                  )}

                  <div className="text-[11px] text-muted-foreground pt-2 border-t border-border font-mono-tabular">
                    ✓ Integridad SHA-256 verificada · Binario oficial: financemate.apk (v{release.version})
                  </div>
                </div>

                {/* Steps side (5 Columnas) */}
                <div className="lg:col-span-5 bg-muted/50 p-6 sm:p-7 rounded-xl border border-border space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-primary shrink-0">
                      <Smartphone className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                        Protocolo de Instalación
                      </span>
                      <h3 className="font-display font-bold text-base text-foreground">
                        Puesta en marcha en 3 pasos
                      </h3>
                    </div>
                  </div>

                  <ol className="divide-y divide-border text-xs text-muted-foreground">
                    {[
                      "Descarga el archivo financemate.apk en tu teléfono Android.",
                      'Autoriza la instalación desde tu navegador cuando el sistema lo solicite.',
                      "Inicia tu cuaderno patrimonial sin crear cuentas ni conectarte a internet.",
                    ].map((step, i) => (
                      <li key={i} className="py-3 flex items-start gap-3">
                        <span className="w-5 h-5 rounded-md bg-card text-primary border border-border flex items-center justify-center font-mono-tabular font-bold text-[11px] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="leading-relaxed text-foreground/90">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
