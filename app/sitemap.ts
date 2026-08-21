import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = "https://sub-zeroiptv.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/plans`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/iptv-service`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/best-iptv-service`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/iptv-providers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/iptv-smart-tv`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/iptv-fire-tv-stick`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/iptv-android-tv`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/about`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/terms`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteUrl}/refund-policy`, lastModified: "2026-08-16", changeFrequency: "yearly", priority: 0.5 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    // Pillar pages are the hub of their topic cluster and receive the most
    // internal links, so they should be crawled/refreshed most often.
    priority: post.isPillar ? 0.75 : 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
