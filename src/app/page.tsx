import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { DownloadSection } from "@/components/download-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SuggestionsSection } from "@/components/suggestions-section";
import { GithubSection } from "@/components/github-section";
import { Footer } from "@/components/footer";
import { createClient } from "@/lib/supabase/server";
import type { GalleryImage, Review, ReleaseInfo } from "@/lib/types";

const REPO_URL = process.env.NEXT_PUBLIC_GITHUB_REPO_URL ?? "https://github.com/migol-dev/finance-mate";
const CURRENT_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "1.17.8";

// Fallback screenshots (used only if the admin hasn't populated the
// gallery in Supabase yet) — replace via the admin panel at /admin/gallery.
const FALLBACK_GALLERY: GalleryImage[] = [
  {
    id: "fallback-1",
    title: "Panel de control",
    description: "Balance neto del mes, ingresos, gastos y ahorro de un vistazo.",
    image_url: "/gallery/placeholder-dashboard.svg",
    sort_order: 0,
    created_at: "",
  },
  {
    id: "fallback-2",
    title: "Movimientos",
    description: "Filtra tus gastos e ingresos por fecha, categoría o método.",
    image_url: "/gallery/placeholder-movements.svg",
    sort_order: 1,
    created_at: "",
  },
  {
    id: "fallback-3",
    title: "Metas de ahorro",
    description: "Define un objetivo y da seguimiento visual a tu progreso.",
    image_url: "/gallery/placeholder-goals.svg",
    sort_order: 2,
    created_at: "",
  },
];

async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const supabase = await createClient();
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
    const supabase = await createClient();
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
    version: CURRENT_VERSION,
    url: `${REPO_URL}/releases/latest/download/finance-mate.apk`,
    publishedAt: new Date().toISOString(),
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero version={release.version} githubUrl={REPO_URL} />
        <Features />
        <Gallery images={gallery} />
        <DownloadSection release={release} />
        <ReviewsSection initialReviews={reviews} />
        <SuggestionsSection />
        <GithubSection repoUrl={REPO_URL} />
      </main>
      <Footer repoUrl={REPO_URL} />
    </>
  );
}
