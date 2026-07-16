"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDownloadTracking } from "@/hooks/use-download-tracking";

export function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { hasDownloaded } = useDownloadTracking();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, rating, comment, hasDownloaded }),
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
      onSubmitted?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Algo salió mal.");
    }
  }

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center"
      >
        <CheckCircle2 className="h-9 w-9 text-emerald-500" />
        <p className="font-medium">¡Gracias por tu reseña!</p>
        <p className="text-sm text-muted-foreground">
          La revisaremos y aparecerá pronto en la lista.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Escribir otra
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!hasDownloaded && (
        <p className="rounded-xl bg-amber-500/10 px-4 py-2.5 text-xs text-amber-600 dark:text-amber-400">
          Aún no detectamos un intento de descarga desde este navegador — tu
          reseña se marcará como de un visitante que no ha probado la app.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={2}
          maxLength={60}
          required
        />
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            type="button"
            key={n}
            onClick={() => setRating(n)}
            aria-label={`${n} estrellas`}
            className="p-0.5"
          >
            <Star
              className={`h-6 w-6 transition-colors ${
                n <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>

      <Textarea
        placeholder="Cuéntanos qué te parece Finance Mate..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        minLength={5}
        maxLength={800}
        required
      />

      {status === "error" && <p className="text-sm text-destructive">{errorMsg}</p>}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Enviar reseña
      </Button>
    </form>
  );
}
