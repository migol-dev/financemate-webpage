"use client";

import { motion } from "framer-motion";
import { Download, Github, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero({ version, githubUrl }: { version: string; githubUrl: string }) {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-glow" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/25" />

      <div className="container grid items-center gap-12 pb-20 lg:grid-cols-2 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-5 gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> v{version} disponible
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Tus finanzas,{" "}
            <span className="text-gradient">bajo control</span>, desde tu celular.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Finance Mate es la app que te ayuda a registrar movimientos, cumplir
            metas de ahorro y controlar deudas — con tus datos 100% privados en
            tu dispositivo, sin servidores de por medio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#descarga">
                <Download className="mr-1 h-4 w-4" /> Descargar app
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <Github className="mr-1 h-4 w-4" /> Ver código
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-brand-500" />
              <span>100% privada · sin nube</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span>Android · React + Capacitor</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 animate-float rounded-[3rem] bg-gradient-to-br from-brand-400/30 to-brand-700/30 blur-2xl" />
          <div className="glow-card overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#0b1120] to-[#0f1c33] p-2">
            <div className="rounded-[2rem] bg-gradient-to-b from-brand-500 to-brand-700 p-5 text-white">
              <p className="text-xs uppercase tracking-wide text-white/70">Neto del mes</p>
              <p className="mt-1 font-display text-4xl font-bold">$6,082</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl bg-white/15 p-2">
                  <p className="text-white/70">Ingresos</p>
                  <p className="font-semibold">$400</p>
                </div>
                <div className="rounded-xl bg-white/15 p-2">
                  <p className="text-white/70">Gastos</p>
                  <p className="font-semibold">$287</p>
                </div>
                <div className="rounded-xl bg-white/15 p-2">
                  <p className="text-white/70">Ahorro</p>
                  <p className="font-semibold">$0</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2.5 text-sm">
                <span>🛵 Ganancias repartidor</span>
                <span className="font-semibold text-emerald-500">+$68</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2.5 text-sm">
                <span>🧴 Suavizante de telas</span>
                <span className="font-semibold text-rose-500">-$110</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-3 py-2.5 text-sm">
                <span>🪖 Meta: LS2 Casco integral</span>
                <span className="font-semibold text-brand-400">0%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
