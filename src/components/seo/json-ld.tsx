import React from "react";
import {
  SITE_URL,
  APP_URL,
  BRAND,
  APP_VERSION,
  REPO_URL,
  APK_DOWNLOAD_URL,
  AUTHOR,
  DEFAULT_DESCRIPTION,
  type FaqItem,
} from "@/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function buildGlobalGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: "FinancePal",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.svg`,
          width: 512,
          height: 512,
        },
        founder: {
          "@id": `${SITE_URL}/autor/${AUTHOR.slug}#person`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: AUTHOR.email,
          contactType: "technical support",
          availableLanguage: ["es"],
        },
        sameAs: [REPO_URL, AUTHOR.github, APP_URL],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/autor/${AUTHOR.slug}#person`,
        name: AUTHOR.name,
        alternateName: AUTHOR.alias,
        jobTitle: AUTHOR.role,
        description: AUTHOR.bio,
        url: `${SITE_URL}/autor/${AUTHOR.slug}`,
        sameAs: [AUTHOR.github, REPO_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${BRAND} — Sitio Oficial`,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

export function buildSoftwareApplicationSchema(options?: {
  ratingValue?: number;
  reviewCount?: number;
}) {
  const hasValidReviews =
    options?.reviewCount &&
    options.reviewCount >= 3 &&
    options.ratingValue &&
    options.ratingValue > 0;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: BRAND,
    alternateName: "FinancePal",
    operatingSystem: "Android 8.0+, Web PWA (iOS, Windows, macOS, Linux)",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "PersonalFinanceApplication",
    softwareVersion: APP_VERSION,
    downloadUrl: APK_DOWNLOAD_URL,
    installUrl: APP_URL,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "es",
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses/MIT",
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Control de ingresos y gastos en 15 categorías universales",
      "Almacenamiento 100% Local-First sin servidores externos",
      "Metas de ahorro jerárquicas con reordenamiento Drag & Drop",
      "Control de deudas a favor y en contra con barra de amortización",
      "Cifrado criptográfico WebCrypto AES-GCM de 256 bits (PBKDF2)",
      "Modo discreto anti-espías (Privacy Blur)",
      "Funcionamiento 100% offline en Android APK y Web PWA",
    ],
    ...(hasValidReviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Number(options!.ratingValue!.toFixed(1)),
            bestRating: 5,
            worstRating: 1,
            ratingCount: options!.reviewCount,
          },
        }
      : {}),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildBlogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  keywords: string[];
  wordCount: number;
}) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: "es",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount: post.wordCount,
    isAccessibleForFree: true,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/autor/${AUTHOR.slug}#person`,
      name: AUTHOR.name,
      url: `${SITE_URL}/autor/${AUTHOR.slug}`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };
}
