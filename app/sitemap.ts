import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ["/", 1, "weekly"],
    ["/menu", 0.9, "weekly"],
    ["/reservations", 0.9, "weekly"],
    ["/contact", 0.8, "monthly"],
    ["/story", 0.7, "monthly"],
    ["/gallery", 0.7, "monthly"],
    ["/faq", 0.6, "monthly"],
    ["/privacy", 0.2, "yearly"],
    ["/terms", 0.2, "yearly"],
  ] as const;

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
