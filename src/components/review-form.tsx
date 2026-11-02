"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Loader2, CheckCircle2, Lock, Send } from "lucide-react";
import { useDownloadTracking } from "@/hooks/use-download-tracking";

export function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { hasDownloaded } = useDownloadTracking();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!acceptedTerms) {
      setStatus("error");
      setErrorMsg(
        "Marca la casilla de aceptación de Términos de Servicio y Política de Privacidad para publicar tu reseña."
      );
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, comment, hasDownloaded, acceptedTerms }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo enviar tu reseña.");
      }
      setStatus("done");
      setName("");
      setEmail("");
      setComment("");
      setRating(5);
      setAcceptedTerms(false);
      onSubmitted?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Algo salió mal.");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-muted/60 p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-primary" />
        <p className="font-display font-bold text-lg text-foreground">Reseña registrada</p>
        <p className="text-sm text-muted-foreground max-w-md">
          Gracias por compartir tu experiencia. Se publicará tras la verificación antifraude.
        </p>
        <button
          type="button"
          className="mt-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-foreground bg-card border border-border hover:bg-muted tactile-press cursor-pointer"
          onClick={() => setStatus("idle")}
        >
          Redactar otra reseña
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!hasDownloaded && (
        <p className="rounded-xl bg-muted border border-border px-4 py-2.5 text-xs text-muted-foreground">
          Aún no detectamos un intento de descarga desde este navegador — tu reseña se marcará como
          visitante.
        </p>
      )}

      {/* Star rating */}
      <div>
        <span
          id="rating-group-label"
          className="block text-xs font-mono uppercase tracking-wider text-foreground mb-2 font-semibold"
        >
          Calificación General *
        </span>
        <div
          role="radiogroup"
          aria-labelledby="rating-group-label"
          className="flex items-center gap-1"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              role="radio"
              aria-checked={rating === n}
              onClick={() => setRating(n)}
              aria-label={`${n} estrellas`}
              className="h-11 w-11 inline-flex items-center justify-center rounded-xl hover:bg-muted tactile-press cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Star
                className={`h-6 w-6 transition-colors ${
                  n <= rating
                    ? "fill-current text-editorial-amber"
                    : "text-muted-foreground/40"
                }`}
              />
            </button>
          ))}
          <span className="text-xs font-mono-tabular text-primary font-semibold ms-2">
            {rating} / 5 estrellas
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="review-author-name"
            className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
          >
            Nombre o Alias *
          </label>
          <input
            id="review-author-name"
            name="name"
            type="text"
            autoComplete="name"
            className="fp-input"
            placeholder="Ej. Andrea G."
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={2}
            maxLength={60}
            required
          />
        </div>
        <div>
          <label
            htmlFor="review-author-email"
            className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
          >
            Correo Electrónico (Privado) *
          </label>
          <input
            id="review-author-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="fp-input"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="review-comment"
          className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
        >
          Tu Testimonio o Reseña *
        </label>
        <textarea
          id="review-comment"
          name="comment"
          className="fp-input resize-none"
          rows={3}
          placeholder="Cuéntanos qué módulo te ha sido más útil (balance, metas, deudas, privacidad offline)..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength={5}
          maxLength={800}
          required
        />
        <p className="text-[11px] text-muted-foreground mt-1.5 flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2} />
          <span>Tu correo solo se usa para verificación antifraude; jamás se muestra públicamente.</span>
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-muted/60 p-3.5 border border-border">
        <input
          id="accepted-terms-checkbox"
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => {
            setAcceptedTerms(e.target.checked);
            if (e.target.checked && errorMsg) {
              setErrorMsg("");
            }
          }}
          className="mt-0.5 h-4 w-4 rounded border-border bg-card text-primary focus-visible:ring-2 focus-visible:ring-ring cursor-pointer accent-[hsl(var(--primary))] shrink-0"
        />
        <div className="text-xs text-muted-foreground leading-relaxed select-none">
          <label htmlFor="accepted-terms-checkbox" className="cursor-pointer">
            He leído y acepto los{" "}
          </label>
          <Link
            href="/terminos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors font-medium"
          >
            Términos de Servicio
          </Link>
          <label htmlFor="accepted-terms-checkbox" className="cursor-pointer">
            {" "}y la{" "}
          </label>
          <Link
            href="/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors font-medium"
          >
            Política de Privacidad
          </Link>
          <label htmlFor="accepted-terms-checkbox" className="cursor-pointer">
            . Entiendo que Finance Pal es un software libre de finanzas personales y no una entidad financiera ni bancaria.
          </label>
        </div>
      </div>

      {errorMsg && (
        <p role="alert" className="text-xs font-medium text-editorial-terracotta">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto btn-primary ps-6 pe-5 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send
            className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        )}
        <span>Publicar reseña en la comunidad</span>
      </button>
    </form>
  );
}
