"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bug, Lightbulb, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center"
      >
        <CheckCircle2 className="h-9 w-9 text-emerald-500" />
        <p className="font-medium">
          {type === "bug" ? "¡Reporte enviado!" : "¡Sugerencia enviada!"}
        </p>
        <p className="text-sm text-muted-foreground">Gracias por ayudar a mejorar Finance Mate.</p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Enviar otro
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          placeholder="Tu nombre (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Tu correo (opcional, para dar seguimiento)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Input
        placeholder={type === "bug" ? "Resumen del error" : "Título de tu idea"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength={3}
        maxLength={120}
        required
      />
      <Textarea
        placeholder={
          type === "bug"
            ? "Describe qué pasó, qué esperabas y cómo reproducirlo..."
            : "Cuéntanos tu idea a detalle..."
        }
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength={5}
        maxLength={2000}
        required
      />
      {status === "error" && (
        <p className="text-sm text-destructive">
          No se pudo enviar. Intenta de nuevo en unos momentos.
        </p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {type === "bug" ? "Reportar error" : "Enviar sugerencia"}
      </Button>
    </form>
  );
}

export function SuggestionsSection() {
  return (
    <section id="soporte" className="container py-20 sm:py-28">
      <Card className="mx-auto max-w-2xl p-6 sm:p-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            ¿Encontraste un error o tienes una idea?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tu retroalimentación llega directo al equipo de Finance Mate.
          </p>
        </div>

        <Tabs defaultValue="bug" className="mt-8 flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="bug" className="gap-1.5">
              <Bug className="h-4 w-4" /> Reportar error
            </TabsTrigger>
            <TabsTrigger value="suggestion" className="gap-1.5">
              <Lightbulb className="h-4 w-4" /> Sugerencia
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bug" className="w-full">
            <ReportForm type="bug" />
          </TabsContent>
          <TabsContent value="suggestion" className="w-full">
            <ReportForm type="suggestion" />
          </TabsContent>
        </Tabs>
      </Card>
    </section>
  );
}
