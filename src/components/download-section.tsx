"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, Smartphone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDownloadTracking } from "@/hooks/use-download-tracking";
import type { ReleaseInfo } from "@/lib/types";

export function DownloadSection({ release }: { release: ReleaseInfo }) {
  const { hasDownloaded, logDownload } = useDownloadTracking();

  return (
    <section id="descarga" className="container py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-600 to-brand-900 px-6 py-16 text-white sm:px-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Smartphone className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Descarga Finance Mate {release.version}
            </h2>
            <p className="mt-4 text-white/80">
              Disponible para Android. Instálala directamente desde el APK del
              último release en GitHub — sin tiendas de por medio.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-800 hover:bg-white/90"
                onClick={() => logDownload(release.version)}
                asChild
              >
                <a href={release.url} target="_blank" rel="noreferrer">
                  <Download className="mr-1 h-4 w-4" /> Descargar APK
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a
                  href={release.url.replace(/\/download.*/, "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-1 h-4 w-4" /> Ver todas las versiones
                </a>
              </Button>
            </div>

            {hasDownloaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Ya intentaste descargar Finance Mate en este navegador — ¡gracias!
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Versión actual", value: release.version },
          { label: "Publicado", value: new Date(release.publishedAt).toLocaleDateString("es-MX") },
          { label: "Plataforma", value: "Android" },
        ].map((item) => (
          <Card key={item.label} className="p-4 text-center">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-1 font-display font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
