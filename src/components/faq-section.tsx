import Link from "next/link";
import { ArrowUpRight, BookOpen, Layers, Plus } from "lucide-react";
import { HOME_FAQS } from "@/lib/seo";

export function FaqSection() {
  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-heading"
      className="py-12 sm:py-16 lg:py-24 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columna Izquierda (4 Columnas — Índice Editorial Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
              <span className="text-primary font-semibold">07 / PREGUNTAS FRECUENTES</span>
              <span>·</span>
              <span>Transparencia Total</span>
            </div>

            <h2
              id="faq-heading"
              className="font-display-v2 font-bold text-fluid-h2 text-foreground text-balance"
            >
              Respuestas claras sobre{" "}
              <span className="italic font-semibold text-primary">Finance Pal</span>.
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Todo lo que necesitas saber sobre cómo funciona nuestra app de finanzas
              personales sin conexión, dónde viven tus datos y cómo verificar el código
              abierto.
            </p>

            {/* Enlaces Internos de Autoridad Semántica */}
            <div className="pt-4 border-t border-border space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Explorar a fondo
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/funciones"
                  className="inline-flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <span>Ver los 5 módulos de la app</span>
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-muted/60 hover:bg-muted border border-border text-xs sm:text-sm font-semibold text-foreground transition-colors group"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <span>Guías de finanzas personales</span>
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Columna Derecha (8 Columnas — Acordeón Nativo De-Boxed sobre el Lienzo) */}
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {HOME_FAQS.map((item, idx) => (
              <details
                key={item.question}
                className="group py-6 transition-colors"
                open={idx === 0}
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
                  <div className="space-y-1.5 text-left">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-primary font-semibold tabular-nums">
                      0{idx + 1} / {item.category}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground group-open:rotate-45 group-open:text-primary group-open:border-primary/40 transition-transform duration-200">
                    <Plus className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                </summary>
                <div className="pt-3 pr-2 sm:pr-10 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
