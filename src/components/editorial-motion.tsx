"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Instancia única compartida de IntersectionObserver para toda la página.
 * Evita crear decenas de observadores y resortes JS por cada bloque animado.
 */
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      {
        rootMargin: "60px 0px -24px 0px",
        threshold: 0.01,
      }
    );
  }
  return sharedObserver;
}

/**
 * Revelación editorial al hacer scroll con CSS compositado en GPU (opacity + translate3d).
 * Preserva el movimiento elegante sin animar filter: blur().
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 14,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = getSharedObserver();
    if (!observer) {
      el.classList.add("is-visible");
      return;
    }

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  const clampedOffset = Math.min(Math.max(yOffset, 6), 20);

  return (
    <div
      ref={ref}
      className={cn("fp-reveal", className)}
      style={
        {
          "--fp-reveal-y": `${clampedOffset}px`,
          ...(delay > 0 ? { transitionDelay: `${delay}s` } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

/**
 * Escenario con paralaje CSS nativo vía Scroll-Driven Animation en tier "full".
 * Cero listeners JavaScript; en dispositivos "lite" permanece estático y fluido.
 */
export function ScrollParallaxStage({
  children,
  className,
  intensity = 16,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  return (
    <div
      className={cn("fp-parallax-stage", className)}
      style={
        {
          "--fp-parallax-y": `${intensity}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
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
