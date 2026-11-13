"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { Sparkles, X } from "lucide-react";

const ReleaseModal = dynamic(
  () => import("./release-modal").then((m) => m.ReleaseModal),
  { ssr: false }
);

export const OPEN_RELEASE_MODAL_EVENT = "open-release-modal";
export const PREFETCH_RELEASE_MODAL_EVENT = "prefetch-release-modal";

export function openReleaseModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_RELEASE_MODAL_EVENT));
  }
}

export function prefetchReleaseModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(PREFETCH_RELEASE_MODAL_EVENT));
  }
}

const DISMISS_STORAGE_KEY = "financepal_v2_announcement_dismissed";

export function ReleaseAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoadedModal, setHasLoadedModal] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_STORAGE_KEY) === "true") {
        queueMicrotask(() => {
          setIsBannerVisible(false);
        });
      }
    } catch {
      // ignore storage access issues
    }

    const handlePrefetch = () => setHasLoadedModal(true);
    const handleOpen = () => {
      setHasLoadedModal(true);
      setIsOpen(true);
    };

    window.addEventListener(PREFETCH_RELEASE_MODAL_EVENT, handlePrefetch);
    window.addEventListener(OPEN_RELEASE_MODAL_EVENT, handleOpen);
    return () => {
      window.removeEventListener(PREFETCH_RELEASE_MODAL_EVENT, handlePrefetch);
      window.removeEventListener(OPEN_RELEASE_MODAL_EVENT, handleOpen);
    };
  }, []);

  const handleDismissBanner = useCallback(() => {
    setIsBannerVisible(false);
    try {
      localStorage.setItem(DISMISS_STORAGE_KEY, "true");
      document.documentElement.dataset.bannerDismissed = "true";
    } catch {
      // ignore
    }
  }, []);

  const handleOpenClick = useCallback(() => {
    setHasLoadedModal(true);
    setIsOpen(true);
  }, []);

  const handlePrefetchTrigger = useCallback(() => {
    setHasLoadedModal(true);
  }, []);

  return (
    <>
      {isBannerVisible && (
        <aside
          role="region"
          aria-label="Anuncio de nueva versión"
          className="fp-release-banner relative z-40 bg-card border-b border-border text-foreground overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold bg-muted text-primary border border-border shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>
                  v2.0<span className="hidden sm:inline">.0 Oficial</span>
                </span>
              </span>
              <p className="text-foreground text-left text-xs sm:text-sm truncate leading-tight font-sans">
                <span className="font-semibold">Finance Pal v2.0 disponible</span>
                <span className="hidden md:inline text-muted-foreground">
                  : Estética Warm Editorial Wealth, metas jerárquicas Drag &amp; Drop, 15 categorías y cifrado WebCrypto AES-256.
                </span>
              </p>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={handleOpenClick}
                onMouseEnter={handlePrefetchTrigger}
                onFocus={handlePrefetchTrigger}
                onTouchStart={handlePrefetchTrigger}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg font-semibold text-[11px] sm:text-xs text-primary-foreground bg-primary hover:brightness-105 tactile-press cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                <span className="hidden min-[400px]:inline">Explorar novedades</span>
                <span className="min-[400px]:hidden">Novedades</span>
              </button>
              <button
                type="button"
                onClick={handleDismissBanner}
                aria-label="Cerrar anuncio de lanzamiento"
                className="p-1 sm:p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted tactile-press cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </aside>
      )}

      {hasLoadedModal && <ReleaseModal open={isOpen} onOpenChange={setIsOpen} />}
    </>
  );
}
