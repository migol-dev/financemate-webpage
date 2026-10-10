"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Loader2, CheckCircle2 } from "lucide-react";
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
      setErrorMsg("Debes aceptar los Términos de Servicio y la Política de Privacidad.");
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
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-emerald-400" />
        <p className="font-semibold text-white">¡Gracias por tu reseña!</p>
        <p className="text-sm text-slate-400">La revisaremos y aparecerá pronto en la lista.</p>
        <button
          className="mt-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          onClick={() => setStatus("idle")}
        >
          Escribir otra
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!hasDownloaded && (
        <p className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 text-xs text-amber-400">
          Aún no detectamos un intento de descarga desde este navegador — tu reseña se marcará como
          visitante.
        </p>
      )}

      {/* Star rating */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 font-semibold">
          Calificación General *
        </label>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              aria-label={`${n} estrellas`}
              className="p-0.5 hover:scale-110 transition-transform"
            >
              <Star
                className={`h-6 w-6 transition-colors ${
                  n <= rating ? "fill-amber-400 text-amber-400" : "text-slate-600"
                }`}
              />
            </button>
          ))}
          <span className="text-xs font-mono text-cyan-300 ml-2">{rating} de 5 estrellas</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
            Nombre o Alias *
          </label>
          <input
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
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
            Correo Electrónico (Privado) *
          </label>
          <input
            type="email"
            className="fp-input"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
          Tu Testimonio o Reseña *
        </label>
        <textarea
          className="fp-input resize-none"
          rows={3}
          placeholder="Cuéntanos qué módulo te ha sido más útil (balance, metas, deudas, privacidad offline)..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength={5}
          maxLength={800}
          required
        />
        <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1.5">
          <span className="text-cyan-400 font-bold">🔒</span>
          Tu correo solo se usa para verificación antifraude, nunca se muestra públicamente.
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-slate-950/60 p-3.5 border border-slate-800">
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
          className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-900 text-cyan-400 focus:ring-cyan-400/40 focus:ring-offset-0 focus:ring-2 cursor-pointer accent-cyan-400 shrink-0"
        />
        <div className="text-xs text-slate-300 leading-relaxed select-none">
          <label htmlFor="accepted-terms-checkbox" className="cursor-pointer">
            He leído y acepto los{" "}
          </label>
          <Link
            href="/terminos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition font-medium"
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
            className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition font-medium"
          >
            Política de Privacidad
          </Link>
          <label htmlFor="accepted-terms-checkbox" className="cursor-pointer">
            . Entiendo que Finance Pal es un software libre de finanzas personales y no una entidad financiera ni bancaria.
          </label>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-rose-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !acceptedTerms}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
        Publicar Reseña en la Comunidad
      </button>
    </form>
  );
}
