"use client";

import { useEffect, useState } from "react";
import { Star, BadgeCheck } from "lucide-react";
import { ReviewForm } from "@/components/review-form";
import type { Review } from "@/lib/types";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

const AVATAR_GRADIENTS = [
  "from-cyan-400 to-sky-500",
  "from-emerald-400 to-teal-400",
  "from-sky-400 to-indigo-500",
  "from-violet-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-amber-400 to-orange-500",
];

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
      className="py-24 border-t border-white/10 bg-slate-950/80 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
            ⭐ Experiencias Reales
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Lo que dice la comunidad
          </h2>
          <p className="text-slate-300 mt-3 text-base sm:text-lg leading-relaxed">
            Usuarios reales que recuperaron el control de su dinero sin suscripciones ocultas ni
            ventas de información personal.
          </p>
        </div>

        {/* Reviews grid */}
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {reviews.slice(0, 6).map((r, i) => (
              <article
                key={r.id}
                className="p-6 rounded-3xl glass-panel neon-hover border border-white/[0.06] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-3.5 w-3.5 ${
                            idx < r.rating ? "fill-amber-400 text-amber-400" : "text-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    {r.has_downloaded && (
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60 flex items-center gap-1">
                        <BadgeCheck className="h-3 w-3" /> APK
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{r.comment}&rdquo;</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-tr ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} flex items-center justify-center text-slate-950 font-bold text-xs shadow-md`}
                    >
                      {initials(r.name)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{r.name}</h4>
                      <span className="text-[11px] text-slate-400">
                        {r.has_downloaded ? "Usuario verificado APK" : "Visitante"}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {new Date(r.created_at).toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {reviews.length === 0 && (
          <p className="text-center text-slate-400 text-sm mb-16">
            Sé el primero en dejar una reseña de Finance Pal.
          </p>
        )}

        {/* Review form */}
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel-glow p-8 sm:p-10 border border-cyan-500/30">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1.5 block">
              Tu Voz Cuenta
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Deja tu reseña de Finance Pal
            </h3>
            <p className="text-slate-300 text-sm mt-1.5">
              Comparte cómo te ayuda a controlar tu dinero y ayuda a que más personas disfruten
              del software libre y privado.
            </p>
          </div>
          <ReviewForm onSubmitted={refresh} />
        </div>
      </div>
    </section>
  );
}
