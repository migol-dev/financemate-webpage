import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { ThemeProvider } from "@/components/theme-provider";
import { EditorialCanvasBg } from "@/components/editorial-canvas-bg";
import { PERF_TIER_INIT_SCRIPT } from "@/lib/perf-tier-script";
import {
  SITE_URL,
  BRAND,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  AUTHOR,
  GOOGLE_VERIFICATION_CODE,
} from "@/lib/seo";
import { JsonLd, buildGlobalGraphSchema } from "@/components/seo/json-ld";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

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
    google: GOOGLE_VERIFICATION_CODE,
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
    <html
      lang="es"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PERF_TIER_INIT_SCRIPT }} />
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
