"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/** Sun/moon toggle in the top-right corner. Defaults to the system theme,
 *  but a click lets the user override it explicitly for this browser. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-secondary/60 transition-colors hover:bg-secondary"
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "radial-gradient(circle at 30% 30%, rgba(96,165,250,0.35), transparent 70%)"
            : "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.35), transparent 70%)",
        }}
        transition={{ duration: 0.4 }}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative z-10"
          >
            <Moon className="h-5 w-5 text-brand-300" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative z-10"
          >
            <Sun className="h-5 w-5 text-amber-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
