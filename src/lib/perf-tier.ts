"use client";

import * as React from "react";

export type PerfTier = "lite" | "full";

export const PERF_TIER_EVENT = "fp-perf-tier-change";

function readPerfTierFromDom(): PerfTier {
  if (typeof document === "undefined") return "full";
  return document.documentElement.dataset.perf === "lite" ? "lite" : "full";
}

function subscribePerfTier(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(PERF_TIER_EVENT, callback);
  return () => window.removeEventListener(PERF_TIER_EVENT, callback);
}

/**
 * Hook liviano que devuelve el tier de rendimiento actual en cliente ("full" durante SSR).
 */
export function usePerfTier(): PerfTier {
  return React.useSyncExternalStore(
    subscribePerfTier,
    readPerfTierFromDom,
    (): PerfTier => "full"
  );
}
