import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FEATURES_DATA, getFeatureBySlug } from "@/lib/features";
import { getAllBlogPosts } from "@/lib/blog";
import {
  SITE_URL,
  REPO_URL,
  APK_DOWNLOAD_URL,
  APP_URL,
  APP_VERSION,
} from "@/lib/seo";
import {
  JsonLd,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/components/seo/json-ld";

export function generateStaticParams() {
  return FEATURES_DATA.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return {
    title: feature.metaTitle,
    description: feature.metaDescription,
    keywords: feature.keywords,
    alternates: {
      canonical: `/funciones/${feature.slug}`,
    },
    openGraph: {
      title: `${feature.metaTitle} | Finance Pal`,
      description: feature.metaDescription,
      url: `${SITE_URL}/funciones/${feature.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${feature.metaTitle} | Finance Pal`,
      description: feature.metaDescription,
    },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) =>
    feature.relatedBlogSlugs.includes(p.slug)
  );
  const otherFeatures = FEATURES_DATA.filter((f) => f.slug !== feature.slug);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/funciones/${feature.slug}#webpage`,
    url: `${SITE_URL}/funciones/${feature.slug}`,
    name: feature.title,
    description: feature.metaDescription,
    inLanguage: "es",
    dateModified: feature.updatedAt,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#software`,
    },
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Funciones", path: "/funciones" },
          { name: feature.shortTitle, path: `/funciones/${feature.slug}` },
        ])}
      />
      <JsonLd data={buildFaqSchema(feature.faqs)} />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Asimétrico del Módulo (7/5 Split) */}
        <section className="py-14 sm:py-22 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Ruta de navegación"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/funciones"
                className="hover:text-foreground transition-colors"
              >
                Funciones
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">
                {feature.shortTitle}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">
                    {feature.code} · {feature.category.toUpperCase()}
                  </span>
                  <span>·</span>
                  <span>Finance Pal v{APP_VERSION}</span>
                </div>

                <h1 className="font-display-v2 font-bold text-3xl sm:text-5xl lg:text-[3.5rem] text-foreground text-balance leading-[1.05]">
                  {feature.title}
                </h1>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[62ch]">
                  {feature.heroSubtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={APK_DOWNLOAD_URL}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-primary-foreground bg-primary hover:brightness-105 tactile-press"
                  >
                    <span>Descargar APK Gratis (v{APP_VERSION})</span>
                    <Download className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-foreground bg-card border border-border hover:border-foreground/30 tactile-press"
                  >
                    <span>Abrir en el navegador (PWA)</span>
                    <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                </div>
              </div>

              {/* Panel de Métricas Tabulares (5 Columnas) */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10 space-y-6">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Especificaciones técnicas del módulo
                </p>
                <div className="divide-y divide-border border-y border-border">
                  {feature.keyMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="py-4 flex items-baseline justify-between gap-4"
                    >
                      <div>
                        <span className="block text-sm font-semibold text-foreground">
                          {metric.label}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {metric.detail}
                        </span>
                      </div>
                      <span className="font-mono-tabular font-bold text-2xl sm:text-3xl text-primary shrink-0">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrativa de Problema y Solución (4/8 Split) */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  01 / FUNDAMENTO PATRIMONIAL
                </span>
                <h2 className="font-display-v2 font-bold text-2xl sm:text-3xl text-foreground text-balance">
                  {feature.problemStatement.heading}
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
                {feature.problemStatement.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Flujo de Trabajo Paso a Paso (Índice Editorial) */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                02 / FLUJO DE OPERACIÓN
              </span>
              <h2 className="font-display-v2 font-bold text-3xl sm:text-4xl text-foreground">
                Cómo funciona paso a paso en Finance Pal
              </h2>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {feature.architectureSteps.map((step) => (
                <div
                  key={step.step}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-2">
                    <span className="font-mono-tabular font-bold text-2xl text-primary">
                      {step.step} /
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capacidades Clave + Guías Relacionadas (7/5 Split) */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    03 / VENTAJAS DE ARQUITECTURA
                  </span>
                  <h2 className="font-display-v2 font-bold text-2xl sm:text-3xl text-foreground">
                    Diseñado para durar años sin comprometer tu privacidad
                  </h2>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {feature.highlights.map((item) => (
                    <div key={item.title} className="py-6 space-y-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>{item.tag}</span>
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guías Relacionadas (Enlazado Interno SEO) */}
              <aside className="lg:col-span-5 space-y-6 lg:pl-8 lg:border-l border-border">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>LECTURAS RECOMENDADAS</span>
                  </span>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                    Guías prácticas sobre {feature.shortTitle.toLowerCase()}
                  </h2>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block py-5 group"
                    >
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                        {post.category} · {post.readingTimeMinutes} min de lectura
                      </span>
                      <h3 className="mt-1 font-display font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors flex items-start justify-between gap-2">
                        <span>{post.title}</span>
                        <ArrowUpRight
                          className="w-4 h-4 shrink-0 mt-1 text-muted-foreground group-hover:text-primary"
                          strokeWidth={1.75}
                        />
                      </h3>
                    </Link>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline underline-offset-4"
                  >
                    <span>Ver todas las guías financieras</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes del Módulo */}
        <section className="py-16 sm:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  04 / DUDAS FRECUENTES
                </span>
                <h2 className="font-display-v2 font-bold text-2xl sm:text-3xl text-foreground">
                  Preguntas sobre {feature.shortTitle}
                </h2>
              </div>

              <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                {feature.faqs.map((faq, idx) => (
                  <details
                    key={faq.question}
                    className="group py-5"
                    open={idx === 0}
                  >
                    <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                      <h3 className="font-display font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground group-open:rotate-45 transition-transform">
                        <Plus className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </span>
                    </summary>
                    <p className="pt-3 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navegación al Resto de Módulos */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                Otros módulos del ecosistema Finance Pal
              </h2>
              <Link
                href="/funciones"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Volver al índice de funciones</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
              {otherFeatures.map((item) => (
                <Link
                  key={item.slug}
                  href={`/funciones/${item.slug}`}
                  className="p-6 hover:bg-muted/40 transition-colors group flex flex-col justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-primary font-semibold">
                      {item.code}
                    </span>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {item.shortTitle}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.metaDescription}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-foreground group-hover:text-primary">
                    <span>Explorar</span>
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
