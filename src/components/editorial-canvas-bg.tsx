"use client";

import React, { useEffect, useRef } from "react";

/**
 * Lienzo Atmosférico "Warm Editorial Wealth" de Cero Repintado:
 * - Halos creados con radial-gradient multicapa (sin filter: blur(), 0 repaints).
 * - Deriva orgánica únicamente con transform: translate3d/rotate en GPU (desactivada en lite).
 * - Progreso de lectura mediante CSS scroll-driven animation nativo (0 listeners JS).
 * - Lente de cursor habilitada solo en dispositivos con puntero fino y tier "full".
 */
export function EditorialCanvasBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    const isLite = document.documentElement.dataset.perf === "lite";
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches;

    if (isLite || reduced || !finePointer) return;

    let rafId = 0;
    const onPointerMove = (e: PointerEvent) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const xPct = ((e.clientX / window.innerWidth) * 100).toFixed(2);
        const yPct = ((e.clientY / window.innerHeight) * 100).toFixed(2);
        el.style.setProperty("--cursor-x", `${xPct}%`);
        el.style.setProperty("--cursor-y", `${yPct}%`);
        rafId = 0;
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Barra superior de lectura / progreso de auditoría via CSS Scroll Timeline */}
      <div
        aria-hidden="true"
        className="fp-reading-progress fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] pointer-events-none print:hidden"
      />

      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden print:hidden"
        style={
          {
            "--cursor-x": "50%",
            "--cursor-y": "22%",
          } as React.CSSProperties
        }
      >
        {/* Lente ambiental cálida (estática en táctil/lite, sigue al puntero en desktop full) */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-80"
          style={{
            background:
              "radial-gradient(620px circle at var(--cursor-x) var(--cursor-y), hsl(var(--primary) / 0.08), hsl(var(--semantic-warning) / 0.04) 45%, transparent 75%)",
          }}
        />

        {/* Retícula editorial de 1px con máscara elíptica */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 35%, black 25%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 35%, black 25%, transparent 90%)",
          }}
        />

        {/* Campo orgánico 1 (Esmeralda Editorial) — radial-gradient difuminado sin CSS blur */}
        <div
          className="editorial-blob-morph absolute -top-40 left-[2%] w-[42rem] h-[42rem] sm:w-[54rem] sm:h-[48rem] pointer-events-none opacity-85 dark:opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--primary) / 0.22) 0%, hsl(var(--primary) / 0.11) 36%, hsl(var(--semantic-invest) / 0.05) 62%, transparent 100%)",
          }}
        />

        {/* Campo orgánico 2 (Terracota / Oro Cálido) — radial-gradient difuminado sin CSS blur */}
        <div
          className="editorial-blob-morph-reverse absolute bottom-[-10rem] right-[0%] w-[38rem] h-[38rem] sm:w-[50rem] sm:h-[46rem] pointer-events-none opacity-80 dark:opacity-65"
          style={{
            background:
              "radial-gradient(closest-side, hsl(var(--semantic-warning) / 0.16) 0%, hsl(var(--semantic-expense) / 0.08) 42%, transparent 100%)",
          }}
        />

        {/* Curvas topográficas de cuaderno patrimonial */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          className="fp-contour-stage absolute inset-x-0 top-[12%] w-full h-[85%] opacity-[0.28] dark:opacity-[0.16] text-primary"
        >
          <path
            d="M-120 220 C 260 90, 540 370, 920 210 C 1180 100, 1340 260, 1560 180"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M-120 480 C 220 340, 620 620, 1020 430 C 1240 320, 1380 470, 1560 390"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-120 720 C 340 590, 720 820, 1120 660 C 1310 580, 1420 690, 1560 640"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </svg>
      </div>
    </>
  );
}
