"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
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
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, scale: 0.4, rotate: -20, filter: "blur(2px)" }}
          animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.4, rotate: 20, filter: "blur(2px)" }}
          transition={{ type: "spring", duration: 0.25, bounce: 0 }}
          className="inline-flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-editorial-amber" strokeWidth={1.75} />
          ) : (
            <Moon className="h-4 w-4 text-foreground/80" strokeWidth={1.75} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
