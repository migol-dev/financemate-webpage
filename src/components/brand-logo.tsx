"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showVersion?: boolean;
  versionText?: string;
}

/**
 * El Monograma FinancePal (v2.0.0 — Warm Editorial Wealth)
 * - Isotipo: Escudo geométrico con base en esmeralda profundo, cortado por un
 *   sendero ascendente en arco que simboliza crecimiento patrimonial continuo,
 *   coronado por un punto focal en oro cálido.
 * - Tipografía: "FinancePal" en Fraunces corte editorial + pastilla de alambre 1px "v2.0".
 */
export function BrandLogo({
  className,
  size = "md",
  showVersion = true,
  versionText = "v2.0",
}: BrandLogoProps) {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-11 h-11" : "w-9 h-9";
  const textSize =
    size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {/* Escudo Geométrico Esmeralda + Sendero Ascendente + Corona en Oro Cálido */}
      <div
        className={cn(
          iconSize,
          "relative rounded-xl bg-[#11382B] dark:bg-[#123126] border border-primary/30 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-200 ease-out group-hover:scale-[1.03]"
        )}
        style={{ boxShadow: "var(--shadow-border)" }}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
          className="w-full h-full p-1.5"
        >
          {/* Escudo geométrico interior */}
          <path
            d="M18 3.5L6.5 8.2V17.4C6.5 24.5 11.4 30.8 18 32.5C24.6 30.8 29.5 24.5 29.5 17.4V8.2L18 3.5Z"
            fill="#1F7A5A"
            fillOpacity="0.32"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-emerald-400/70 dark:text-emerald-300/70"
          />
          {/* Sendero ascendente en arco (crecimiento patrimonial continuo) */}
          <path
            d="M10.5 23.5C13.2 22.8 15.8 19.6 18.2 15.8C19.8 13.3 21.8 11.4 24.5 10.5"
            stroke="#EDEDED"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Línea secundaria de soporte */}
          <path
            d="M12.5 26.2C16.2 25.1 19.6 22.2 23.2 17.2"
            stroke="#34D399"
            strokeOpacity="0.65"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          {/* Punto focal en oro cálido */}
          <circle cx="24.8" cy="10.2" r="2.6" fill="#F59E0B" />
          <circle cx="24.8" cy="10.2" r="4.2" stroke="#F59E0B" strokeOpacity="0.35" strokeWidth="1" />
        </svg>
      </div>

      {/* Palabra de marca en Fraunces Editorial + Pastilla de alambre 1px */}
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "font-display font-bold tracking-[-0.035em] text-foreground leading-none",
            textSize
          )}
        >
          Finance<span className="italic font-semibold text-primary">Pal</span>
        </span>
        {showVersion && (
          <span className="px-2 py-0.5 text-[11px] font-mono font-medium tabular-nums rounded-full border border-border bg-muted/70 text-muted-foreground leading-none">
            {versionText}
          </span>
        )}
      </div>
    </div>
  );
}
