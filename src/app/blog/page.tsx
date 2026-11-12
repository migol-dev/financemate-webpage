import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Layers, UserCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";
import { FEATURES_DATA } from "@/lib/features";
import { REPO_URL, AUTHOR } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Guías de Finanzas Personales, Presupuesto y Ahorro",
  description:
    "Artículos prácticos sobre cómo hacer un presupuesto personal, la regla 50/30/20, cómo ahorrar dinero cada mes, fondo de emergencia y control de deudas.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Guías de Finanzas Personales, Presupuesto y Ahorro | Finance Pal",
    description:
      "Biblioteca editorial gratuita sobre gestión patrimonial personal, métodos de ahorro y soberanía financiera Local-First.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Guías y Blog", path: "/blog" },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Cabecera Editorial del Blog (7/5 Split) */}
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
              <span className="text-foreground font-semibold">Guías y Blog</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">
                    BIBLIOTECA PATRIMONIAL
                  </span>
                  <span>·</span>
                  <span>Educación Financiera Abierta</span>
                </div>

                <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground text-balance">
                  Guías prácticas de{" "}
                  <span className="italic font-semibold text-primary">
                    finanzas personales
                  </span>{" "}
                  y ahorro.
                </h1>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Metodologías probadas para construir un presupuesto mensual sólido,
                  aplicar la regla 50/30/20, blindar tu fondo de emergencia y salir de
                  deudas con claridad matemática.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <UserCheck className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  <span>
                    Redactado y revisado por{" "}
                    <Link
                      href={`/autor/${AUTHOR.slug}`}
                      className="text-foreground font-semibold hover:text-primary underline underline-offset-4"
                    >
                      {AUTHOR.name}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lista Editorial de Artículos con Divisores de 1px */}
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-border border-y border-border">
              {posts.map((post, idx) => (
                <article
                  key={post.slug}
                  className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
                >
                  {/* Metadatos Monospace (3 Columnas) */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-primary tabular-nums">
                      0{idx + 1} / {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground tabular-nums">
                      <time dateTime={post.updated}>{post.updated}</time>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.75} />
                        {post.readingTimeMinutes} min
                      </span>
                    </div>
                  </div>

                  {/* Título y Resumen (7 Columnas) */}
                  <div className="lg:col-span-7 space-y-3">
                    <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground group-hover:text-primary transition-colors text-balance">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[64ch]">
                      {post.description}
                    </p>
                    <div className="pt-1 flex flex-wrap gap-2">
                      {post.keywords.slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-0.5 rounded-full bg-muted border border-border text-[11px] font-mono text-muted-foreground"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enlace de Lectura (2 Columnas) */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center w-full sm:w-auto gap-1.5 px-4 py-2.5 rounded-xl bg-muted/70 group-hover:bg-primary group-hover:text-primary-foreground border border-border text-xs font-semibold text-foreground transition-colors"
                    >
                      <span>Leer guía</span>
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Módulos de Finance Pal Relacionados */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>DE LA TEORÍA A LA PRÁCTICA</span>
              </span>
              <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
                Aplica estas guías con los módulos gratuitos de Finance Pal
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
              {FEATURES_DATA.map((feat) => (
                <Link
                  key={feat.slug}
                  href={`/funciones/${feat.slug}`}
                  className="p-5 hover:bg-muted/40 transition-colors group flex flex-col justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono font-semibold text-primary">
                      {feat.code}
                    </span>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {feat.shortTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {feat.metaDescription}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-foreground group-hover:text-primary">
                    <span>Ver función</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
