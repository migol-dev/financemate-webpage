"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Lienzo Atmosférico "Warm Editorial Wealth" con deformación orgánica sutil
 * vinculada al scroll y respuesta suave al cursor en GPU (60/120 FPS).
 */
export function EditorialCanvasBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // Transformaciones de deformación del fondo al bajar por la página
  const primaryY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "28%", "52%"]);
  const primaryScaleX = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [1, 1.18, 0.88, 1.12]);
  const primaryScaleY = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [1, 0.86, 1.16, 0.92]);
  const primaryRotate = useTransform(smoothProgress, [0, 0.5, 1], [0, 14, -12]);
  const primarySkewX = useTransform(smoothProgress, [0, 0.5, 1], [0, 6, -5]);

  const secondaryY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-24%", "-46%"]);
  const secondaryScaleX = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1, 0.88, 1.2, 0.95]);
  const secondaryScaleY = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1, 1.14, 0.86, 1.08]);
  const secondaryRotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -16, 10]);

  const contourY = useTransform(smoothProgress, [0, 1], ["0%", "-18%"]);
  const contourScaleY = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.22, 0.9]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

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
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Barra superior de lectura / progreso de auditoría de 1.5px */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] pointer-events-none print:hidden"
        style={{ scaleX: prefersReducedMotion ? 0 : smoothProgress }}
      />

      <div
        ref={containerRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden print:hidden"
        style={
          {
            "--cursor-x": "50%",
            "--cursor-y": "25%",
          } as React.CSSProperties
        }
      >
        {/* Lente ambiental cálida que responde suavemente al cursor */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-80 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(650px circle at var(--cursor-x) var(--cursor-y), hsl(var(--primary) / 0.08), hsl(var(--semantic-warning) / 0.04) 45%, transparent 75%)",
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

        {/* Campo orgánico 1 (Esmeralda Editorial) — se deforma al bajar por la página */}
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: primaryY,
                  scaleX: primaryScaleX,
                  scaleY: primaryScaleY,
                  rotate: primaryRotate,
                  skewX: primarySkewX,
                }
          }
          className="absolute -top-28 left-[8%] w-[34rem] h-[34rem] sm:w-[44rem] sm:h-[38rem] pointer-events-none"
        >
          <div
            className="w-full h-full editorial-blob-morph blur-[95px] opacity-30 dark:opacity-20"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, hsl(var(--primary) / 0.55), hsl(var(--semantic-invest) / 0.25) 60%, transparent 80%)",
            }}
          />
        </motion.div>

        {/* Campo orgánico 2 (Terracota / Oro Cálido) — se deforma en sentido opuesto con el scroll */}
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: secondaryY,
                  scaleX: secondaryScaleX,
                  scaleY: secondaryScaleY,
                  rotate: secondaryRotate,
                }
          }
          className="absolute bottom-[-8rem] right-[6%] w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[36rem] pointer-events-none"
        >
          <div
            className="w-full h-full editorial-blob-morph-reverse blur-[100px] opacity-25 dark:opacity-[0.16]"
            style={{
              background:
                "radial-gradient(circle at 60% 45%, hsl(var(--semantic-warning) / 0.5), hsl(var(--semantic-expense) / 0.3) 55%, transparent 80%)",
            }}
          />
        </motion.div>

        {/* Curvas topográficas de cuaderno patrimonial que se estiran sutilmente con el scroll */}
        <motion.svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: contourY,
                  scaleY: contourScaleY,
                }
          }
          className="absolute inset-x-0 top-[12%] w-full h-[85%] opacity-[0.28] dark:opacity-[0.16] text-primary"
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
        </motion.svg>
      </div>
    </>
  );
}
