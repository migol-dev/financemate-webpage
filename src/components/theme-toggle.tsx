"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export type EditorialAccentId = "emerald" | "terracotta" | "cobalt" | "rose" | "amethyst";

export const EDITORIAL_ACCENTS: Array<{
  id: EditorialAccentId;
  label: string;
  swatch: string;
}> = [
  { id: "emerald", label: "Esmeralda Editorial", swatch: "#1F7A5A" },
  { id: "terracotta", label: "Terracota Cálido", swatch: "#C86446" },
  { id: "cobalt", label: "Cobalto Precisión", swatch: "#2080E5" },
  { id: "rose", label: "Arcilla Rosa", swatch: "#B84A62" },
  { id: "amethyst", label: "Amatista Profundo", swatch: "#7053C6" },
];

const ACCENT_STORAGE_KEY = "fp-editorial-accent";

/**
 * Selector de atmósfera Warm Editorial Wealth:
 * - Alterna entre Modo Claro (Warm Alabaster #FAF8F5) y Modo Oscuro (Obsidian Carbon #0C0C0B)
 * - Permite elegir cualquiera de los 5 Acentos Editoriales V2 en tiempo real.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [accent, setAccent] = React.useState<EditorialAccentId>(() => {
    if (typeof window === "undefined") return "emerald";
    try {
      const saved = localStorage.getItem(ACCENT_STORAGE_KEY) as EditorialAccentId | null;
      if (saved && EDITORIAL_ACCENTS.some((a) => a.id === saved)) {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return "emerald";
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, accent);
    } catch {
      // ignore storage errors
    }
  }, [accent]);

  if (!mounted) {
    return <div className="h-10 w-28 rounded-xl border border-border bg-muted/50" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="inline-flex items-center gap-1.5 p-1 rounded-xl border border-border bg-muted/70">
      {/* Selector de los 5 Acentos Editoriales V2 */}
      <div
        role="radiogroup"
        aria-label="Acento editorial V2"
        className="hidden xl:flex items-center gap-1 px-1.5"
      >
        {EDITORIAL_ACCENTS.map((item) => {
          const active = accent === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`Acento ${item.label}`}
              title={`Acento: ${item.label}`}
              onClick={() => setAccent(item.id)}
              className="relative w-5 h-5 rounded-full flex items-center justify-center tactile-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className="w-3 h-3 rounded-full transition-transform duration-150 ease-out"
                style={{
                  backgroundColor: item.swatch,
                  transform: active ? "scale(1.2)" : "scale(0.9)",
                }}
              />
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-foreground/50"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Conmutador Alabastro Cálido / Carbono Obsidiana */}
      <button
        type="button"
        aria-label={
          isDark
            ? "Cambiar a modo claro (Warm Alabaster)"
            : "Cambiar a modo oscuro (Obsidian Carbon)"
        }
        title={
          isDark
            ? "Modo actual: Obsidian Carbon — Cambiar a Warm Alabaster"
            : "Modo actual: Warm Alabaster — Cambiar a Obsidian Carbon"
        }
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative inline-flex h-8 px-2.5 items-center gap-1.5 rounded-lg bg-card text-foreground border border-border/80 tactile-press text-xs font-mono cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={isDark ? "dark" : "light"}
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="inline-flex items-center"
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
            ) : (
              <Sun className="h-3.5 w-3.5 text-editorial-amber" strokeWidth={2} />
            )}
          </motion.span>
        </AnimatePresence>
        <span className="hidden sm:inline text-[11px] font-medium">
          {isDark ? "Obsidian" : "Alabaster"}
        </span>
      </button>
    </div>
  );
}
