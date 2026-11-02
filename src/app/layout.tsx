import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { EditorialCanvasBg } from "@/components/editorial-canvas-bg";
import {
  SITE_URL,
  BRAND,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  AUTHOR,
} from "@/lib/seo";
import { JsonLd, buildGlobalGraphSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BRAND}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: BRAND,
  keywords: KEYWORDS,
  authors: [{ name: AUTHOR.name, url: `${SITE_URL}/autor/${AUTHOR.slug}` }],
  creator: AUTHOR.name,
  publisher: BRAND,
  category: "finance",
  alternates: {
    canonical: "/",
    languages: {
      "es-419": "/",
      "es-ES": "/",
      "es-MX": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: BRAND,
    locale: "es_419",
    alternateLocale: ["es_ES", "es_MX", "es_AR", "es_CO"],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0B" },
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <JsonLd data={buildGlobalGraphSchema()} />
        <ThemeProvider>
          <EditorialCanvasBg />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
