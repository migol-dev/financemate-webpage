"use client";

import { motion } from "framer-motion";
import { Github, GitBranch, Tag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function GithubSection({ repoUrl }: { repoUrl: string }) {
  return (
    <section id="codigo" className="container py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="mx-auto max-w-3xl overflow-hidden p-8 text-center sm:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Github className="h-7 w-7" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Código abierto y transparente
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Revisa el código fuente, sigue las versiones beta y consulta el
            historial completo de cambios de Finance Mate en GitHub.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={repoUrl} target="_blank" rel="noreferrer">
                <Github className="mr-1 h-4 w-4" /> Ver repositorio
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`${repoUrl}/releases`} target="_blank" rel="noreferrer">
                <Tag className="mr-1 h-4 w-4" /> Versiones y betas
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`${repoUrl}/branches`} target="_blank" rel="noreferrer">
                <GitBranch className="mr-1 h-4 w-4" /> Ramas activas
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-amber-400" />
            Dale una estrella si te resulta útil
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
