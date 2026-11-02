"use client";

import { ArrowDownRight, ArrowUpRight, Smartphone, Monitor, Check } from "lucide-react";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

export function PlatformsSection() {
  return (
    <section
      id="plataformas"
      className="py-20 lg:py-28 border-b border-border relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Composición Asimétrica de 12 Columnas: 5 Cols Índice Editorial / 7 Cols Superficies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna de Contexto e Índice (5 Columnas — De-Boxed sobre el lienzo) */}
          <ScrollReveal className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              01 / SUPERFICIES DE EJECUCIÓN
            </span>
            <h2 className="font-display-v2 font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Diseñado para operar donde{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                tú decidas auditar
              </EditorialHighlight>{" "}
              tu patrimonio.
            </h2>
            <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed max-w-[58ch] text-pretty">
              Sin cuentas obligatorias ni bloqueos por plataforma. Tu contabilidad mantiene la misma{" "}
              <EditorialHighlight>precisión tipográfica</EditorialHighlight> y cifrado simétrico
              tanto en movilidad con Android como en sesiones de análisis desde tu computadora.
            </p>

            {/* Tabla de especificaciones De-Boxed con filetes de 1px */}
            <div className="pt-4 border-t border-border divide-y divide-border text-xs font-mono-tabular">
              <div className="py-3 flex items-center justify-between">
                <span className="text-muted-foreground">Persistencia Móvil</span>
                <span className="text-foreground font-semibold">Capacitor SQLite Nativo</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span className="text-muted-foreground">Persistencia Escritorio</span>
                <span className="text-foreground font-semibold">IndexedDB Cifrado Local</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span className="text-muted-foreground">Intercambio de Archivos</span>
                <span className="text-foreground font-semibold">Backup JSON &amp; CSV Excel</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna de Escenario (7 Columnas — 2 Módulos con Radios Armónicos rounded-2xl) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Android Nativo */}
            <ScrollReveal delay={0.06}>
              <article className="p-6 sm:p-8 rounded-2xl bg-card border border-border editorial-surface flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-primary">
                        <Smartphone className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
                          Ejecución Móvil Autónoma
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                          Android Nativo (APK) &amp; PWA
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-muted border border-border text-[11px] font-mono-tabular text-muted-foreground">
                      Android 8.0 – 15
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground editorial-text-hover leading-relaxed max-w-[65ch]">
                    Instala el binario oficial compilado con Capacitor o fija la PWA en tu pantalla
                    de inicio. Opera con motor{" "}
                    <EditorialHighlight>SQLite de latencia cero</EditorialHighlight>, arranque
                    síncrono sin destellos blancos y reordenamiento táctil de metas a 120 FPS.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-foreground">
                    {[
                      "Base SQLite local cifrada",
                      "Cero consumo en segundo plano",
                      "Sin permisos invasivos",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/60 border border-border"
                      >
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2.2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono-tabular text-muted-foreground">
                    Binario verificado · financemate.apk
                  </span>
                  <a
                    href="#descarga"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 tactile-press group"
                  >
                    <span>Descargar instalador APK v2.0.0</span>
                    <ArrowDownRight
                      className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </article>
            </ScrollReveal>

            {/* Escritorio Web */}
            <ScrollReveal delay={0.14}>
              <article className="p-6 sm:p-8 rounded-2xl bg-card border border-border editorial-surface flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-editorial-cobalt">
                        <Monitor className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-editorial-cobalt font-semibold block">
                          Estación de Análisis Patrimonial
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight">
                          Escritorio Web (Windows, macOS, Linux)
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-muted border border-border text-[11px] font-mono-tabular text-muted-foreground">
                      IndexedDB + WebCrypto
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground editorial-text-hover leading-relaxed max-w-[65ch]">
                    Ejecuta Finance Pal directamente desde tu navegador de escritorio para sesiones
                    de auditoría anual, conciliación de presupuestos en 4 columnas macro y{" "}
                    <EditorialHighlight>exportación inmediata a CSV o JSON</EditorialHighlight>.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-foreground">
                    {[
                      "Acceso instantáneo sin instalar",
                      "Bóveda aislada en el navegador",
                      "Sincronización E2E opcional",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/60 border border-border"
                      >
                        <Check className="w-3.5 h-3.5 text-editorial-cobalt shrink-0" strokeWidth={2.2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono-tabular text-muted-foreground">
                    Compatible con Chrome, Firefox, Safari y Brave
                  </span>
                  <a
                    href="https://financepal-web.vercel.app"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors tactile-press group"
                  >
                    <span>Abrir aplicación web en vivo</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-primary transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
