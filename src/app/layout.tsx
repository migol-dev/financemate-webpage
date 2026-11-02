import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Instrument_Serif,
  Fraunces,
} from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { EditorialCanvasBg } from "@/components/editorial-canvas-bg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

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
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <EditorialCanvasBg />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
