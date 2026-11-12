import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Download,
  ExternalLink,
  Lightbulb,
  UserCheck,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  slugifyHeading,
} from "@/lib/blog";
import { getFeatureBySlug } from "@/lib/features";
import {
  SITE_URL,
  REPO_URL,
  APK_DOWNLOAD_URL,
  APP_URL,
  APP_VERSION,
  AUTHOR,
} from "@/lib/seo";
import {
  JsonLd,
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
} from "@/components/seo/json-ld";

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: AUTHOR.name, url: `${SITE_URL}/autor/${AUTHOR.slug}` }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Finance Pal`,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [AUTHOR.name],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Finance Pal`,
      description: post.description,
    },
  };
}

function renderInline(text: string): React.ReactNode[] {
  const tokens = text.split(
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  );
  return tokens.map((token, idx) => {
    if (!token) return null;
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <em key={idx} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    if (token.startsWith("`") && token.endsWith("`")) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono text-[0.9em] text-foreground"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (href.startsWith("/")) {
        return (
          <Link
            key={idx}
            href={href}
            className="font-semibold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {label}
        </a>
      );
    }
    return token;
  });
}

function renderMarkdownBlocks(markdown: string): React.ReactNode[] {
  const lines = markdown.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      const rawText = line.slice(3).trim();
      const id = slugifyHeading(rawText.replace(/\*\*/g, ""));
      elements.push(
        <h2
          key={`h2-${i}`}
          id={id}
          className="scroll-mt-24 pt-8 pb-2 font-display-v2 font-bold text-fluid-h2 text-foreground border-t border-border first:border-t-0 first:pt-0"
        >
          {renderInline(rawText)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      const rawText = line.slice(4).trim();
      const id = slugifyHeading(rawText.replace(/\*\*/g, ""));
      elements.push(
        <h3
          key={`h3-${i}`}
          id={id}
          className="scroll-mt-24 pt-4 font-display font-bold text-xl text-foreground"
        >
          {renderInline(rawText)}
        </h3>
      );
      i++;
      continue;
    }

    // Callout / Blockquote
    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const firstLine = quoteLines[0] || "";
      const isImportant = firstLine.includes("[!IMPORTANT]");
      const bodyText = quoteLines
        .join(" ")
        .replace(/\[!(TIP|IMPORTANT|NOTE|WARNING)\]\s*/, "");

      elements.push(
        <aside
          key={`quote-${i}`}
          className="my-6 p-5 rounded-xl bg-muted/60 border-l-4 border-primary border-y border-r border-y-border border-r-border text-sm sm:text-base text-foreground leading-relaxed flex items-start gap-3.5"
        >
          {isImportant ? (
            <AlertTriangle
              className="w-5 h-5 text-editorial-amber shrink-0 mt-0.5"
              strokeWidth={1.75}
            />
          ) : (
            <Lightbulb
              className="w-5 h-5 text-primary shrink-0 mt-0.5"
              strokeWidth={1.75}
            />
          )}
          <div>{renderInline(bodyText)}</div>
        </aside>
      );
      continue;
    }

    // Table
    if (line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const parseRow = (row: string) =>
          row
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim());

        const headers = parseRow(tableLines[0]);
        const dataRows = tableLines.slice(2).map(parseRow);

        elements.push(
          <div
            key={`table-${i}`}
            className="my-6 overflow-x-auto border border-border rounded-xl"
          >
            <table className="min-w-[480px] w-full text-left border-collapse text-xs sm:text-sm font-mono-tabular">
              <thead>
                <tr className="bg-muted/80 border-b border-border text-foreground font-semibold">
                  {headers.map((h, idx) => (
                    <th key={idx} className="py-3 px-4">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {dataRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-muted/30 transition-colors text-muted-foreground"
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-3 px-4">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Unordered list
    if (line.match(/^-\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^-\s+/)) {
        items.push(lines[i].replace(/^-\s+/, ""));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${i}`}
          className="space-y-2.5 pl-5 list-disc marker:text-primary text-muted-foreground leading-relaxed"
        >
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${i}`}
          className="space-y-2.5 pl-5 list-decimal marker:font-mono marker:font-bold marker:text-primary text-muted-foreground leading-relaxed"
        >
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].match(/^-\s+/) &&
      !lines[i].match(/^\d+\.\s+/)
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    elements.push(
      <p key={`p-${i}`} className="text-muted-foreground leading-relaxed">
        {renderInline(paraLines.join(" "))}
      </p>
    );
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedFeature = post.relatedFeatureSlug
    ? getFeatureBySlug(post.relatedFeatureSlug)
    : undefined;

  return (
    <>
      <JsonLd data={buildBlogPostingSchema(post)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Guías y Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Cabecera Editorial del Artículo */}
        <header className="py-14 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <nav
              aria-label="Ruta de navegación"
              className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Guías y Blog
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold line-clamp-1">
                {post.category}
              </span>
            </nav>

            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                <span className="text-primary font-semibold uppercase">
                  {post.category}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 tabular-nums">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.75} />
                  {post.readingTimeMinutes} min de lectura
                </span>
              </div>

              <h1 className="font-display-v2 font-bold text-fluid-h1 text-foreground text-balance leading-[1.06]">
                {post.title}
              </h1>

              <p className="text-muted-foreground text-base sm:text-xl leading-relaxed max-w-[62ch]">
                {post.description}
              </p>

              {/* Firma de Autor E-E-A-T y Fechas */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground border-t border-border">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  <span>Por</span>
                  <Link
                    href={`/autor/${AUTHOR.slug}`}
                    className="text-foreground font-semibold hover:text-primary underline underline-offset-4"
                  >
                    {AUTHOR.name}
                  </Link>
                </div>
                <div>
                  <span>Actualizado: </span>
                  <time dateTime={post.updated} className="text-foreground font-semibold">
                    {post.updated}
                  </time>
                </div>
                <div className="tabular-nums">
                  <span>{post.wordCount} palabras</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cuerpo Asimétrico: Índice de Contenidos Sticky (4 Cols) + Artículo (8 Cols) */}
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Barra Lateral Izquierda (4 Columnas — Tabla de Contenidos + Módulo Relacionado) */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 order-2 lg:order-1">
                {post.toc.length > 0 && (
                  <nav
                    aria-label="Tabla de contenidos"
                    className="hidden lg:block space-y-3 pb-6 border-b border-border"
                  >
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                      Índice de la guía
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {post.toc.map((item) => (
                        <li
                          key={item.id}
                          className={item.level === 3 ? "pl-3" : ""}
                        >
                          <a
                            href={`#${item.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors block py-0.5 leading-snug"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {relatedFeature && (
                  <div className="space-y-3 pb-6 border-b border-border">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                      HERRAMIENTA GRATUITA RELACIONADA
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {relatedFeature.shortTitle} en Finance Pal
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {relatedFeature.metaDescription}
                    </p>
                    <div className="pt-1 flex flex-col gap-2">
                      <Link
                        href={`/funciones/${relatedFeature.slug}`}
                        className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground border border-border text-xs font-semibold text-foreground transition-colors"
                      >
                        <span>Ver cómo funciona</span>
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </Link>
                      <a
                        href={APK_DOWNLOAD_URL}
                        className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:brightness-105 transition-all"
                      >
                        <span>Descargar APK v{APP_VERSION}</span>
                        <Download className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </a>
                      <a
                        href={APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-card border border-border text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
                      >
                        <span>Abrir Web App PWA</span>
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>Volver a todas las guías</span>
                  </Link>
                </div>
              </aside>

              {/* Columna de Lectura Editorial (8 Columnas — Medida 65ch) */}
              <article className="lg:col-span-8 space-y-6 text-base sm:text-lg max-w-[65ch] order-1 lg:order-2">
                {post.toc.length > 0 && (
                  <details className="lg:hidden rounded-xl bg-muted/60 border border-border p-4">
                    <summary className="font-mono text-xs font-bold uppercase tracking-wider text-foreground cursor-pointer select-none">
                      Índice de la guía ({post.toc.length} secciones)
                    </summary>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm border-t border-border pt-3">
                      {post.toc.map((item) => (
                        <li
                          key={item.id}
                          className={item.level === 3 ? "pl-3" : ""}
                        >
                          <a
                            href={`#${item.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors block py-0.5 leading-snug"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {renderMarkdownBlocks(post.content)}

                {/* Aviso YMYL (Estándar de Transparencia Financiera) */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="p-4 sm:p-5 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground leading-relaxed space-y-1.5">
                    <p className="font-mono font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <AlertTriangle
                        className="w-3.5 h-3.5 text-editorial-amber"
                        strokeWidth={1.75}
                      />
                      <span>Nota Editorial y Deslinde Financiero</span>
                    </p>
                    <p>
                      Este artículo tiene fines estrictamente educativos e informativos
                      sobre organización presupuestaria personal. No constituye asesoría
                      financiera, fiscal, contable ni recomendación de inversión. Consulta
                      nuestro{" "}
                      <Link
                        href="/aviso-legal"
                        className="text-primary underline underline-offset-4"
                      >
                        Aviso Legal
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Ficha del Autor (E-E-A-T) */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                      AUTOR DE LA GUÍA
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      <Link
                        href={`/autor/${AUTHOR.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {AUTHOR.name}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-lg">
                      {AUTHOR.bio}
                    </p>
                  </div>
                  <Link
                    href={`/autor/${AUTHOR.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border bg-card text-xs font-mono font-semibold text-foreground hover:border-primary shrink-0"
                  >
                    <span>Perfil y código</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Otras Guías Relacionadas */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="font-display-v2 font-bold text-fluid-h2 text-foreground">
              Continúa aprendiendo sobre finanzas personales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="p-6 hover:bg-muted/40 transition-colors group flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                      {other.category} · {other.readingTimeMinutes} min
                    </span>
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {other.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-foreground group-hover:text-primary">
                    <span>Leer guía</span>
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
