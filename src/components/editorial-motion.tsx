"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Revelación editorial al hacer scroll (Split & Stagger / Blur-to-Crisp)
 * Respeta prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        duration: 0.65,
        bounce: 0,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Contenedor con efecto de paralaje y deformación sutil vinculada al scroll.
 */
export function ScrollParallaxStage({
  children,
  className,
  intensity = 22,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const y = useTransform(smooth, [0, 0.5, 1], [intensity, 0, -intensity]);
  const scale = useTransform(smooth, [0, 0.5, 1], [0.985, 1, 0.99]);

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { y, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Palabra o frase con resaltado editorial interactivo al pasar el cursor.
 */
export function EditorialHighlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("editorial-highlight cursor-default", className)}>
      {children}
    </span>
  );
}
