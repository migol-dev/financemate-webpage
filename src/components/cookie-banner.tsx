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
      <div className="p-4 sm:p-5 rounded-2xl glass-panel-glow border border-cyan-500/30 bg-slate-950/90 shadow-2xl backdrop-blur-xl text-slate-200 text-xs sm:text-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-semibold text-white text-xs sm:text-sm">
                Privacidad y Almacenamiento Local
              </h4>
              <button
                type="button"
                onClick={handleAccept}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
                aria-label="Cerrar aviso"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Utilizamos almacenamiento local (<code className="text-cyan-300 font-mono text-[11px]">localStorage</code>)
              exclusivamente para fines técnicos y conteo anónimo de descargas.{" "}
              <strong className="text-white">Cero cookies de rastreo publicitario.</strong>
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Entendido y Aceptar</span>
              </button>
              <Link
                href="/cookies"
                className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition font-medium"
              >
                Ver Política
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
