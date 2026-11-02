import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { EditorialCanvasBg } from "@/components/editorial-canvas-bg";

export const metadata: Metadata = {
  title: "Finance Pal v2.0.0 | Gestor Financiero Personal, Privado y Multiplataforma",
  description:
    "Finance Pal v2.0.0 es el ecosistema financiero libre y offline-first. Warm Editorial Wealth, metas jerárquicas Drag & Drop, 15 categorías, resumen macroeconómico y cifrado WebCrypto AES-GCM 256.",
  metadataBase: new URL("https://financepal-web.vercel.app"),
  openGraph: {
    title: "Finance Pal v2.0.0",
    description:
      "Controla tus ingresos, gastos, metas y deudas desde una sola app, con tus datos siempre en tu dispositivo. Local-First · WebCrypto AES-GCM 256 · Código abierto MIT.",
    type: "website",
    url: "https://financepal-web.vercel.app",
    siteName: "Finance Pal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Pal v2.0.0 | Gestor Financiero Personal y Privado",
    description:
      "Nueva versión 2.0.0: Warm Editorial Wealth, metas jerárquicas drag & drop, 15 categorías universales y cifrado WebCrypto AES-GCM 256.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0B" },
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <EditorialCanvasBg />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
