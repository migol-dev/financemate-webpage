import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FEATURES_DATA } from "@/lib/features";
import { REPO_URL, APK_DOWNLOAD_URL, APP_URL, APP_VERSION } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Funciones y Módulos de Gestión Financiera Personal",
  description:
    "Explora los 5 módulos de Finance Pal: control de gastos diario, presupuesto personal 50/30/20, metas de ahorro Drag & Drop, control de deudas y cifrado AES-GCM 256.",
  alternates: {
    canonical: "/funciones",
  },
  openGraph: {
    title: "Funciones y Módulos de Gestión Financiera Personal | Finance Pal",
    description:
      "Conoce a fondo la arquitectura Local-First de Finance Pal para controlar gastos, presupuestos, metas de ahorro y deudas sin conexión.",
    url: "/funciones",
  },
};

export default function FuncionesIndexPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Funciones", path: "/funciones" },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Cabecera Editorial De-Boxed (7/5 Split) */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Ruta de navegación"
              className="mb-8 flex items-center gap-2 text-xs font-mono text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Funciones</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">01 / ARQUITECTURA FUNCIONAL</span>
                  <span>·</span>
                  <span>Edición v{APP_VERSION}</span>
                </div>

                <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground text-balance">
                  Cinco módulos de precisión para tu{" "}
                  <span className="italic font-semibold text-primary">
                    soberanía financiera
                  </span>
                  .
                </h1>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Cada herramienta de <strong className="text-foreground">Finance Pal</strong>{" "}
                  ha sido diseñada para operar sin servidores intermedios, sin publicidad y con
                  respuesta instantánea tanto en Android como en el navegador.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={APK_DOWNLOAD_URL}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press"
                  >
                    <span>Descargar APK v{APP_VERSION}</span>
                    <Download className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-foreground bg-card border border-border hover:border-foreground/30 tactile-press"
                  >
                    <span>Abrir Web App PWA</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Índice Editorial de Módulos con Divisores de 1px (Cero Card-itis) */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-border border-y border-border">
              {FEATURES_DATA.map((feature, index) => (
                <article
                  key={feature.slug}
                  className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
                >
                  {/* Coordenada Monospace (3 Columnas) */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-primary tabular-nums">
                      0{index + 1} / {feature.code}
                    </span>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {feature.category}
                    </p>
                  </div>

                  {/* Narrativa del Módulo (6 Columnas) */}
                  <div className="lg:col-span-6 space-y-4">
                    <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground group-hover:text-primary transition-colors">
                      <Link href={`/funciones/${feature.slug}`} className="focus-visible:outline-none">
                        {feature.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[62ch]">
                      {feature.heroSubtitle}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 sm:gap-6">
                      {feature.keyMetrics.map((m) => (
                        <div key={m.label} className="space-y-0.5 min-w-0">
                          <span className="block font-mono-tabular font-bold text-base sm:text-lg text-foreground break-words">
                            {m.value}
                          </span>
                          <span className="block text-[11px] font-mono text-muted-foreground break-words">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Acción Directa (3 Columnas) */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <Link
                      href={`/funciones/${feature.slug}`}
                      className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2.5 rounded-xl bg-muted/70 group-hover:bg-primary group-hover:text-primary-foreground border border-border text-xs sm:text-sm font-semibold text-foreground transition-colors"
                    >
                      <span>Explorar módulo</span>
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sello de Garantía Local-First */}
            <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-3.5 max-w-xl">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Todos los módulos están incluidos de serie en la edición gratuita de{" "}
                  <strong className="text-foreground">Finance Pal</strong> sin bloqueos premium,
                  sin publicidad y con código fuente auditable bajo licencia MIT.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-primary hover:underline underline-offset-4"
              >
                <span>Leer guías de finanzas personales</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
