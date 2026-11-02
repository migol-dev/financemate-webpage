"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

const CONSENT_KEY = "fp_cookie_consent_accepted";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user already dismissed/accepted
    try {
      const accepted = localStorage.getItem(CONSENT_KEY);
      if (!accepted) {
        // Small delay so it smoothly appears after initial render
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage access errors in restricted iframe/browser modes
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "true");
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Aviso de cookies y almacenamiento local"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 print:hidden"
    >
      <div className="p-4 sm:p-5 rounded-2xl bg-card/95 border border-border editorial-surface backdrop-blur-xl text-foreground text-xs sm:text-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-muted text-primary border border-border shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-display font-bold text-foreground text-xs sm:text-sm">
                Privacidad y Almacenamiento Local
              </h4>
              <button
                type="button"
                onClick={handleAccept}
                className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted tactile-press"
                aria-label="Cerrar aviso"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Utilizamos almacenamiento local (<code className="text-primary font-mono text-[11px]">localStorage</code>)
              exclusivamente para fines técnicos y conteo anónimo de descargas.{" "}
              <strong className="text-foreground">Cero cookies de rastreo publicitario.</strong>
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs text-primary-foreground bg-primary hover:brightness-105 tactile-press cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Aceptar aviso</span>
              </button>
              <Link
                href="/cookies"
                className="text-xs text-foreground hover:text-primary underline underline-offset-2 transition-colors font-medium"
              >
                Consultar política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
