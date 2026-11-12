import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Code2, Mail, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_URL, REPO_URL, AUTHOR } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return [{ slug: AUTHOR.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) return {};

  return {
    title: `${AUTHOR.name} — Autor y Creador de Finance Pal`,
    description: AUTHOR.bio,
    alternates: {
      canonical: `/autor/${AUTHOR.slug}`,
    },
    openGraph: {
      title: `${AUTHOR.name} — Creador de Finance Pal`,
      description: AUTHOR.bio,
      url: `${SITE_URL}/autor/${AUTHOR.slug}`,
      type: "profile",
    },
  };
}

export default async function AuthorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== AUTHOR.slug) notFound();

  const posts = getAllBlogPosts();

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": `${SITE_URL}/autor/${AUTHOR.slug}#person`,
    },
  };

  return (
    <>
      <JsonLd data={profilePageSchema} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: AUTHOR.name, path: `/autor/${AUTHOR.slug}` },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
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
              <span className="text-foreground font-semibold">Autor</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold">
                    PERFIL DE AUTOR & DESARROLLADOR
                  </span>
                  <span>·</span>
                  <span>Código Abierto MIT</span>
                </div>

                <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground">
                  {AUTHOR.name}
                </h1>

                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-primary font-semibold">
                  {AUTHOR.role}
                </p>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[62ch]">
                  {AUTHOR.bio}
                </p>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[62ch]">
                  Su enfoque técnico prioriza herramientas que respetan la soberanía
                  intelectual y de datos del usuario: cero rastreadores comerciales,
                  persistencia en el propio dispositivo y código auditable públicamente.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href={AUTHOR.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:brightness-105"
                  >
                    <Code2 className="w-4 h-4" strokeWidth={1.75} />
                    <span>GitHub (@{AUTHOR.alias})</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-xs sm:text-sm font-semibold text-foreground hover:border-foreground/30"
                  >
                    <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <span>Repositorio de Finance Pal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href={`mailto:${AUTHOR.email}`}
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2.5 rounded-xl bg-muted border border-border text-xs sm:text-sm font-mono text-foreground hover:text-primary break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    <span>{AUTHOR.email}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 lg:border-l border-border lg:pl-10 space-y-5">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Principios de ingeniería editorial
                </p>
                <div className="divide-y divide-border border-y border-border text-sm">
                  <div className="py-4 space-y-1">
                    <span className="font-semibold text-foreground block">
                      1. Soberanía Local-First
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      Los datos financieros pertenecen exclusivamente al dispositivo del
                      usuario, nunca a una base de datos centralizada.
                    </span>
                  </div>
                  <div className="py-4 space-y-1">
                    <span className="font-semibold text-foreground block">
                      2. Criptografía Estándar Auditable
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      Uso exclusivo de primitivas W3C WebCrypto (AES-GCM 256 + PBKDF2
                      100,000 rondas).
                    </span>
                  </div>
                  <div className="py-4 space-y-1">
                    <span className="font-semibold text-foreground block">
                      3. Transparencia Regulatoria
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      Distinción clara entre software libre de autoorganización y
                      entidades financieras reguladas.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guías Publicadas por el Autor */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
              Guías de finanzas personales escritas por {AUTHOR.name}
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {posts.map((post, idx) => (
                <article
                  key={post.slug}
                  className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-primary font-semibold tabular-nums">
                      0{idx + 1} · {post.category} · {post.readingTimeMinutes} min
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-muted-foreground group-hover:text-primary shrink-0"
                  >
                    <span>Leer artículo</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
