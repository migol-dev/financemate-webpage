"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export type EditorialAccentId = "emerald";

export const EDITORIAL_ACCENTS: Array<{
  id: EditorialAccentId;
  label: string;
  swatch: string;
}> = [
  { id: "emerald", label: "Esmeralda", swatch: "#1F7A5A" },
];

/**
 * Hook retrocompatible que fija el acento permanentemente en Esmeralda
 */
export function useEditorialAccent() {
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-accent", "emerald");
      try {
        localStorage.removeItem("fp-editorial-accent");
      } catch {
        // ignore
      }
    }
  }, []);

  return ["emerald", () => {}] as const;
}

/**
 * Componente stub retrocompatible (el selector multi-color fue retirado
 * para preservar la sobriedad y profesionalismo de la marca).
 */
export function EditorialAccentPicker({
  className = "",
}: {
  className?: string;
  showLabel?: boolean;
}) {
  return null;
}

/**
 * Conmutador Minimalista de Atmósfera Claro/Oscuro:
 * - Botón discreto tipo icono de precisión (36x36px / h-9 w-9).
 * - Transición elástica sin ruido visual entre Warm Alabaster y Obsidian Carbon.
 * - Respeta automáticamente la preferencia de sistema del usuario (Chrome / OS).
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Asegura siempre el acento verde esmeralda por defecto
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-accent", "emerald");
      try {
        localStorage.removeItem("fp-editorial-accent");
      } catch {
        // ignore
      }
    }
  }, []);

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-xl border border-border/80 bg-card/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={
        isDark
          ? "Cambiar a modo claro (Warm Alabaster)"
          : "Cambiar a modo oscuro (Obsidian Carbon)"
      }
      title={
        isDark
          ? "Modo actual: Oscuro — Cambiar a modo claro"
          : "Modo actual: Claro — Cambiar a modo oscuro"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card/70 hover:bg-muted text-foreground tactile-press cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0 ${className}`}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <Sun
          className={`h-4 w-4 text-editorial-amber absolute transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
          }`}
          strokeWidth={1.75}
        />
        <Moon
          className={`h-4 w-4 text-foreground/80 absolute transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDark ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"
          }`}
          strokeWidth={1.75}
        />
      </span>
    </button>
  );
}
