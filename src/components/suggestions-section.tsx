"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2 } from "lucide-react";
import type { ReportType } from "@/lib/types";

function ReportForm({ type }: { type: ReportType }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, email, title, description }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setName("");
      setEmail("");
      setTitle("");
      setDescription("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-emerald-400" />
        <p className="font-semibold text-white">
          {type === "bug" ? "¡Reporte enviado!" : "¡Sugerencia enviada!"}
        </p>
        <p className="text-sm text-slate-400">Gracias por ayudar a mejorar Finance Pal.</p>
        <button
          className="mt-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          onClick={() => setStatus("idle")}
        >
          Enviar otro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
            Nombre o Usuario GitHub
          </label>
          <input
            className="fp-input"
            placeholder="Ej. Marco Dev"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
            Versión de Finance Pal
          </label>
          <select
            className="fp-input"
            style={{ appearance: "none" }}
          >
            <option value="v1.20.2">v1.20.2 (Versión actual estable)</option>
            <option value="v1.20.1">v1.20.1 (Anterior)</option>
            <option value="pwa-web">PWA / Web App Vercel</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
          {type === "bug" ? "Resumen del Error *" : "Título de tu Idea *"}
        </label>
        <input
          className="fp-input"
          placeholder={type === "bug" ? "Ej. La app se cierra al abrir Metas" : "Ej. Añadir widgets para pantalla de inicio"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength={3}
          maxLength={120}
          required
        />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
          Detalle Descriptivo *
        </label>
        <textarea
          className="fp-input resize-none"
          rows={4}
          placeholder={
            type === "bug"
              ? "Describe qué pasó, qué esperabas y cómo reproducirlo..."
              : "Cuéntanos tu idea a detalle, caso de uso o comportamiento esperado..."
          }
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          minLength={5}
          maxLength={2000}
          required
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-rose-400">
          No se pudo enviar. Intenta de nuevo en unos momentos.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
        {type === "bug" ? "Enviar al Desarrollador" : "Enviar Sugerencia"}
      </button>

      <p className="text-[11px] text-slate-400 mt-2 flex items-start gap-1.5 leading-relaxed">
        <span className="text-cyan-400 font-bold shrink-0">🔒</span>
        <span>
          Al enviar este formulario, aceptas que los datos proporcionados se utilicen para dar seguimiento técnico a tu reporte conforme a nuestra{" "}
          <Link
            href="/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition font-medium"
          >
            Política de Privacidad
          </Link>
          . No compartimos tu información con terceros ni la usamos con fines comerciales.
        </span>
      </p>
    </form>
  );
}

export function SuggestionsSection() {
  const [tab, setTab] = useState<ReportType>("suggestion");

  return (
    <section id="soporte" className="py-20 border-t border-white/10 bg-slate-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-bold">
            Canal Abierto con el Desarrollador
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Buzón de Ideas y Reportes
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base">
            ¿Encontraste un detalle en v1.20.2 o tienes una idea para futuras versiones? Cada mensaje se revisa
            semanalmente.
          </p>
        </div>

        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
          {/* Tabs */}
          <div
            className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-8 max-w-md mx-auto"
          >
            <button
              type="button"
              onClick={() => setTab("suggestion")}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                tab === "suggestion"
                  ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              <span>💡</span>
              <span>Sugerir Funcionalidad</span>
            </button>
            <button
              type="button"
              onClick={() => setTab("bug")}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                tab === "bug"
                  ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              <span>🐞</span>
              <span>Reportar un Error</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-6">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Se procesa directamente por el equipo de desarrollo de código libre.</span>
          </div>

          <ReportForm key={tab} type={tab} />
        </div>
      </div>
    </section>
  );
}
