"use client";

import { useEffect, useState } from "react";
import { Star, BadgeCheck, MessageSquareQuote } from "lucide-react";
import { ReviewForm } from "@/components/review-form";
import type { Review } from "@/lib/types";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function ReviewsSection({ initialReviews }: { initialReviews: Review[] }) {
  const [reviews, setReviews] = useState(initialReviews);

  async function refresh() {
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      if (res.ok) setReviews((await res.json()).reviews);
    } catch {
      // keep existing list
    }
  }

  useEffect(() => {
    let ignore = false;
    if (initialReviews.length === 0) {
      fetch("/api/reviews", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!ignore && data?.reviews) {
            setReviews(data.reviews);
          }
        })
        .catch(() => {});
    }
    return () => {
      ignore = true;
    };
  }, [initialReviews.length]);

  return (
    <section
      id="resenas"
      className="py-24 border-b border-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Composición Asimétrica de 12 Columnas: 5 Cols Bitácora de Comunidad / 7 Cols Formulario Activo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna Izquierda: Contexto y Reseñas De-Boxed (5 Columnas) */}
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                04 / BITÁCORA DE LA COMUNIDAD
              </span>
              <h2 className="font-display-v2 font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
                Voces que eligieron{" "}
                <EditorialHighlight className="italic font-semibold text-primary">
                  soberanía financiera
                </EditorialHighlight>
                .
              </h2>
              <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed max-w-[58ch] text-pretty">
                Personas reales que administran su patrimonio sin suscripciones forzosas ni venta de
                hábitos de consumo a terceros.
              </p>
            </div>

            {/* Lista De-Boxed con separadores de 1px */}
            {reviews.length > 0 ? (
              <div className="divide-y divide-border border-y border-border">
                {reviews.slice(0, 4).map((r) => (
                  <article key={r.id} className="py-5 space-y-3 group">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-1 text-editorial-amber"
                        aria-label={`Calificación: ${r.rating} de 5 estrellas`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-3.5 w-3.5 ${
                              idx < r.rating
                                ? "fill-current text-editorial-amber"
                                : "text-border"
                            }`}
                          />
                        ))}
                      </div>
                      {r.has_downloaded && (
                        <span className="text-[11px] font-mono text-primary bg-muted px-2.5 py-0.5 rounded-full border border-border flex items-center gap-1">
                          <BadgeCheck className="h-3 w-3" /> APK Verificado
                        </span>
                      )}
                    </div>

                    <p className="text-foreground/90 editorial-text-hover text-sm leading-relaxed font-sans">
                      &ldquo;{r.comment}&rdquo;
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-foreground font-mono font-bold text-xs">
                          {initials(r.name)}
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold text-foreground">{r.name}</h3>
                          <span className="text-[11px] text-muted-foreground block">
                            {r.has_downloaded ? "Instalación APK verificada" : "Lector de la web"}
                          </span>
                        </div>
                      </div>
                      <time className="text-[11px] text-muted-foreground font-mono-tabular">
                        {new Date(r.created_at).toLocaleDateString("es-MX", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </time>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-muted/50 border border-border space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <MessageSquareQuote className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  <span>Aún no hay reseñas publicadas en esta vista</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Las reseñas ayudan a otros usuarios a evaluar la privacidad y estabilidad de
                  FinancePal. Utiliza el formulario contiguo para inaugurar el archivo.
                </p>
              </div>
            )}
          </ScrollReveal>

          {/* Columna Derecha: Etapa de Interacción Activa (7 Columnas) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl bg-card p-6 sm:p-10 border border-border editorial-surface">
              <div className="mb-8 pb-5 border-b border-border">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold mb-1.5 block">
                  Registro Público Moderado
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                  Publica tu testimonio sobre FinancePal
                </h3>
                <p className="text-muted-foreground text-sm mt-1.5 max-w-[60ch]">
                  Comparte qué módulo (balance, metas jerárquicas o bóveda offline) te ha resultado
                  más valioso en tu organización diaria.
                </p>
              </div>
              <ReviewForm onSubmitted={refresh} />
            </div>
          </ScrollReveal>
        </div>

        {/* Reseñas adicionales si existen más de 4 */}
        {reviews.length > 4 && (
          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.slice(4, 6).map((r) => (
              <article
                key={r.id}
                className="p-6 rounded-2xl bg-card border border-border editorial-surface flex flex-col justify-between gap-4"
              >
                <p className="text-foreground/90 text-sm leading-relaxed">&ldquo;{r.comment}&rdquo;</p>
                <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
                  <span className="font-semibold text-foreground">{r.name}</span>
                  <span className="font-mono-tabular text-muted-foreground">
                    {r.rating} / 5 ★
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
