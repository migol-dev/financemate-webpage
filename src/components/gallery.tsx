"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/types";

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const next = () => setActive((a) => (a + 1) % images.length);
  const prev = () => setActive((a) => (a - 1 + images.length) % images.length);
  const current = images[active];

  return (
    <section id="galeria" className="container py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Así se ve Finance Mate
        </h2>
        <p className="mt-4 text-muted-foreground">
          Un recorrido rápido por cada pantalla de la app.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[340px_1fr]">
        {/* Phone frame */}
        <div className="relative mx-auto w-[280px] sm:w-[320px]">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.75rem] border-[6px] border-neutral-900 bg-neutral-950 shadow-2xl dark:border-neutral-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image_url}
                  alt={current.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-[-14px] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-[-14px] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Description + thumbnails */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold">{current.title}</h3>
              {current.description && (
                <p className="mt-3 max-w-md text-muted-foreground">{current.description}</p>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            {images.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setActive(i)}
                className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-all sm:h-20 sm:w-20 ${
                  i === active
                    ? "border-brand-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img.image_url} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
