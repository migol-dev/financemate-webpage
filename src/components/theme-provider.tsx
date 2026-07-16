"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/** Wraps next-themes. defaultTheme="system" makes the site follow the
 *  user's OS/browser preference automatically, and next-themes keeps
 *  listening for OS-level changes (prefers-color-scheme) while the tab
 *  is open, switching live without a reload. */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
