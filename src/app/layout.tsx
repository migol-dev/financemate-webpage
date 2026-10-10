import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finance Pal v1.20.2 | Gestor Financiero Personal, Privado y Multiplataforma",
  description:
    "Finance Pal es el ecosistema financiero libre y offline-first. Gestiona flujo de caja, metas con ritmo predictivo, préstamos y sincronización cifrada — 100% privado, sin servidores de por medio.",
  metadataBase: new URL("https://financepal-web.vercel.app"),
  openGraph: {
    title: "Finance Pal v1.20.2",
    description:
      "Controla tus ingresos, gastos, metas y deudas desde una sola app, con tus datos siempre en tu dispositivo. Local-First · AES-GCM · Código abierto MIT.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080e1d" },
    { media: "(prefers-color-scheme: light)", color: "#080e1d" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
