import type { MetadataRoute } from "next";
import { SITE_URL, AUTHOR } from "@/lib/seo";
import { FEATURES_DATA } from "@/lib/features";
import { getAllBlogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-02T12:00:00Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/funciones`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/descargar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/autor/${AUTHOR.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: new Date("2026-10-09T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: new Date("2026-10-09T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: new Date("2026-10-09T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: new Date("2026-10-09T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const featureRoutes: MetadataRoute.Sitemap = FEATURES_DATA.map((feature) => ({
    url: `${SITE_URL}/funciones/${feature.slug}`,
    lastModified: new Date(feature.updatedAt),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPosts = getAllBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...featureRoutes, ...blogRoutes];
}
