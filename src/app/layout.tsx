import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Finance Pal v1.20 | Gestor Financiero Personal, Privado y Multiplataforma",
  description:
    "Finance Pal es el ecosistema financiero libre y offline-first. Gestiona flujo de caja, metas con ritmo predictivo, préstamos y sincronización cifrada — 100% privado, sin servidores de por medio.",
  metadataBase: new URL("https://financepal-web.vercel.app"),
  openGraph: {
    title: "Finance Pal v1.20",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
