import { Navbar } from "@/components/navbar";
import { ReleaseAnnouncement } from "@/components/release-announcement";
import { Hero } from "@/components/hero";
import { PlatformsSection } from "@/components/platforms-section";
import { Gallery } from "@/components/gallery";
import { Features } from "@/components/features";
import { DownloadSection } from "@/components/download-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SuggestionsSection } from "@/components/suggestions-section";
import { GithubSection } from "@/components/github-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { createPublicClient } from "@/lib/supabase/public";
import {
  REPO_URL,
  APP_VERSION,
  APK_DOWNLOAD_URL,
  HOME_FAQS,
} from "@/lib/seo";
import {
  JsonLd,
  buildSoftwareApplicationSchema,
  buildFaqSchema,
} from "@/components/seo/json-ld";
import type { GalleryImage, Review, ReleaseInfo } from "@/lib/types";

export const revalidate = 3600;

const FALLBACK_GALLERY: GalleryImage[] = [
  {
    id: "fallback-1",
    title: "Panel de control de presupuesto personal y tasa de ahorro",
    description: "Balance neto del mes, ingresos, gastos y ahorro de un vistazo.",
    image_url: "/gallery/placeholder-dashboard.svg",
    sort_order: 0,
    created_at: "",
  },
  {
    id: "fallback-2",
    title: "Control de gastos e ingresos en 15 categorías",
    description: "Filtra tus gastos e ingresos por fecha, categoría o método.",
    image_url: "/gallery/placeholder-movements.svg",
    sort_order: 1,
    created_at: "",
  },
  {
    id: "fallback-3",
    title: "Metas de ahorro jerárquicas Drag & Drop",
    description: "Define un objetivo y da seguimiento visual a tu progreso.",
    image_url: "/gallery/placeholder-goals.svg",
    sort_order: 2,
    created_at: "",
  },
];

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const supabase = createPublicClient();
    if (!supabase) return FALLBACK_GALLERY;
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return FALLBACK_GALLERY;
    return data as GalleryImage[];
  } catch {
    return FALLBACK_GALLERY;
  }
}

async function getReviews(): Promise<Review[]> {
  try {
    const supabase = createPublicClient();
    if (!supabase) return [];
    const { data } = await supabase
      .from("reviews")
      .select("id,name,rating,comment,has_downloaded,created_at,approved")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(50);
    return (data as Review[]) ?? [];
  } catch {
    return [];
  }
}

export default async function Home() {
  const [gallery, reviews] = await Promise.all([getGalleryImages(), getReviews()]);

  const release: ReleaseInfo = {
    version: APP_VERSION,
    url: APK_DOWNLOAD_URL,
    publishedAt: "2026-11-02T00:00:00.000Z",
  };

  const reviewCount = reviews.length;
  const ratingValue =
    reviewCount > 0
      ? reviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0) / reviewCount
      : undefined;

  return (
    <>
      <JsonLd
        data={buildSoftwareApplicationSchema({
          ratingValue,
          reviewCount,
        })}
      />
      <JsonLd data={buildFaqSchema(HOME_FAQS)} />
      <ReleaseAnnouncement />
      <Navbar />
      <main id="top">
        <Hero version={release.version} githubUrl={REPO_URL} />
        <PlatformsSection />
        <Gallery images={gallery} />
        <Features />
        <ReviewsSection initialReviews={reviews} />
        <SuggestionsSection />
        <GithubSection repoUrl={REPO_URL} />
        <FaqSection />
        <DownloadSection release={release} repoUrl={REPO_URL} />
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
