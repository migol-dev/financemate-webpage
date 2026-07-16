import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Finance Mate — Controla tus finanzas desde tu celular",
  description:
    "Finance Mate es la app de finanzas personales que llevas en el bolsillo: movimientos, metas, deudas y resumen anual, 100% privada y offline.",
  metadataBase: new URL("https://financemate.app"),
  openGraph: {
    title: "Finance Mate",
    description:
      "Controla tus ingresos, gastos, metas y deudas desde una sola app, con tus datos siempre en tu dispositivo.",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
