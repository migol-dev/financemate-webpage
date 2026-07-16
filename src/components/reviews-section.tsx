"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ReviewForm } from "@/components/review-form";
import type { Review } from "@/lib/types";

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
      // ignore — keep the list we already have
    }
  }

  useEffect(() => {
    if (initialReviews.length === 0) refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="resenas" className="container py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Lo que dicen los usuarios
        </h2>
        <p className="mt-4 text-muted-foreground">
          Comparte tu experiencia con Finance Mate — tu opinión ayuda a
          mejorarla.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Card className="p-6 sm:p-8">
          <h3 className="font-display font-semibold">Deja tu reseña</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Usamos tu correo solo para verificar que la reseña sea real, nunca
            se muestra públicamente.
          </p>
          <div className="mt-6">
            <ReviewForm onSubmitted={refresh} />
          </div>
        </Card>

        <div className="max-h-[560px] space-y-4 overflow-y-auto pr-1">
          {reviews.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Sé el primero en dejar una reseña de Finance Mate.
            </p>
          )}
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <Card className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-sm font-semibold text-brand-500">
                      {initials(r.name)}
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 font-medium">
                        {r.name}
                        {r.has_downloaded && (
                          <BadgeCheck className="h-4 w-4 text-brand-500" aria-label="Descargó la app" />
                        )}
                      </p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-3.5 w-3.5 ${
                              idx < r.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{r.comment}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
