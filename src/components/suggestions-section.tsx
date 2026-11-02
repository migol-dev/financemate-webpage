"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, Lightbulb, Bug, ArrowRight, Lock, Check } from "lucide-react";
import type { ReportType } from "@/lib/types";
import { EditorialHighlight, ScrollReveal } from "@/components/editorial-motion";

function ReportForm({ type }: { type: ReportType }) {
  const [name, setName] = useState("");
  const [version, setVersion] = useState("v2.0.0");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const fullDescription = version
        ? `[Versión reportada: ${version}]\n\n${description}`
        : description;
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, email, title, description: fullDescription }),
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
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-muted/60 p-8 text-center">
        <CheckCircle2 className="h-9 w-9 text-primary" />
        <p className="font-display font-bold text-lg text-foreground">
          {type === "bug" ? "Reporte técnico registrado" : "Propuesta registrada"}
        </p>
        <p className="text-sm text-muted-foreground">
          Gracias por contribuir a la evolución de Finance Pal.
        </p>
        <button
          type="button"
          className="mt-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-foreground bg-card border border-border hover:bg-muted tactile-press cursor-pointer"
          onClick={() => setStatus("idle")}
        >
          Registrar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="report-author-name"
            className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
          >
            Nombre o Usuario GitHub
          </label>
          <input
            id="report-author-name"
            name="name"
            type="text"
            autoComplete="name"
            className="fp-input"
            placeholder="Ej. Marco Dev"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="report-app-version"
            className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
          >
            Versión de Finance Pal
          </label>
          <select
            id="report-app-version"
            name="version"
            className="fp-input"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          >
            <option value="v2.0.0">v2.0.0 (Versión actual estable)</option>
            <option value="v1.21.0">v1.21.0 (Anterior)</option>
            <option value="v1.20.2">v1.20.2</option>
            <option value="pwa-web">PWA / Web App Vercel</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="report-title"
          className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
        >
          {type === "bug" ? "Resumen del Error *" : "Título de tu Idea *"}
        </label>
        <input
          id="report-title"
          name="title"
          type="text"
          className="fp-input"
          placeholder={
            type === "bug"
              ? "Ej. La app se cierra al abrir Metas"
              : "Ej. Añadir widgets para pantalla de inicio"
          }
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength={3}
          maxLength={120}
          required
        />
      </div>
      <div>
        <label
          htmlFor="report-description"
          className="block text-xs font-mono uppercase tracking-wider text-foreground mb-1.5 font-semibold"
        >
          Detalle Descriptivo *
        </label>
        <textarea
          id="report-description"
          name="description"
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
        <p role="alert" className="text-xs font-medium text-editorial-terracotta">
          No se pudo registrar el mensaje. Verifica tu conexión e inténtalo de nuevo.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary ps-6 pe-5 disabled:opacity-60 disabled:cursor-not-allowed group"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        <span>{type === "bug" ? "Enviar reporte técnico" : "Enviar propuesta de mejora"}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </button>

      <p className="text-[11px] text-muted-foreground mt-2 flex items-start gap-1.5 leading-relaxed">
        <Lock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
        <span>
          Al enviar este formulario, aceptas que los datos proporcionados se utilicen para dar seguimiento técnico a tu reporte conforme a nuestra{" "}
          <Link
            href="/privacidad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors font-medium"
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
    <section id="soporte" className="py-24 border-b border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna de Contexto (5 Columnas) */}
          <ScrollReveal className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              05 / CANAL DE INGENIERÍA ABIERTO
            </span>
            <h2 className="font-display-v2 font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Buzón de{" "}
              <EditorialHighlight className="italic font-semibold text-primary">
                mejora continua
              </EditorialHighlight>{" "}
              y auditoría.
            </h2>
            <p className="text-muted-foreground editorial-text-hover text-sm sm:text-base leading-relaxed max-w-[58ch] text-pretty">
              ¿Detectaste una anomalía en la versión v2.0.0 o propones un nuevo indicador
              patrimonial? Cada entrada es revisada directamente por el autor del proyecto.
            </p>

            <div className="pt-4 border-t border-border divide-y divide-border text-xs font-mono">
              <div className="py-3 flex items-center gap-2 text-foreground">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2.2} />
                <span>Revisión semanal de propuestas por migol-dev</span>
              </div>
              <div className="py-3 flex items-center gap-2 text-foreground">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2.2} />
                <span>Seguimiento transparente en el roadmap de GitHub</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna de Formulario (7 Columnas) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl bg-card p-6 sm:p-10 border border-border editorial-surface">
              {/* Tabs con radios concéntricos: contenedor rounded-xl, botones rounded-lg */}
              <div
                role="tablist"
                aria-label="Tipo de envío"
                className="flex items-center gap-1.5 p-1.5 rounded-xl bg-muted border border-border mb-8"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "suggestion"}
                  onClick={() => setTab("suggestion")}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold tactile-press cursor-pointer flex items-center justify-center gap-2 ${
                    tab === "suggestion"
                      ? "bg-card text-foreground border border-border shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Lightbulb
                    className={`w-4 h-4 ${tab === "suggestion" ? "text-editorial-amber" : ""}`}
                    strokeWidth={tab === "suggestion" ? 2 : 1.75}
                  />
                  <span>Proponer funcionalidad</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === "bug"}
                  onClick={() => setTab("bug")}
                  className={`flex-1 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold tactile-press cursor-pointer flex items-center justify-center gap-2 ${
                    tab === "bug"
                      ? "bg-card text-foreground border border-border shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Bug
                    className={`w-4 h-4 ${tab === "bug" ? "text-editorial-terracotta" : ""}`}
                    strokeWidth={tab === "bug" ? 2 : 1.75}
                  />
                  <span>Reportar anomalía</span>
                </button>
              </div>

              <ReportForm key={tab} type={tab} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
