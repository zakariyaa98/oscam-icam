"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BLOG_CATEGORIES, type BlogPost } from "@/lib/blog-posts";

const FILTERS = ["Alle", ...BLOG_CATEGORIES] as const;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("Alle");

  const filteredPosts = useMemo(
    () => (activeFilter === "Alle" ? posts : posts.filter((post) => post.category === activeFilter)),
    [posts, activeFilter]
  );

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full flex-wrap justify-center gap-2.5" role="group" aria-label="Artikel nach Kategorie filtern">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium tracking-tight transition-all duration-300 ease-out ${
                isActive
                  ? "border-aqua bg-aqua text-black shadow-[0_0_20px_rgba(26,159,255,0.35)]"
                  : "border-border bg-background-elevated text-muted hover:border-aqua/50 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-5 transition-colors hover:border-aqua/50"
              >
                <BlogThumbnail post={post} className="aspect-[16/10] w-full" priority={index < 3} />
                <div className="flex flex-col gap-3 px-1 pb-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted">
                    <span className="rounded-full bg-aqua/10 px-2.5 py-1 font-semibold text-aqua">
                      {post.category}
                    </span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      · {post.readingTimeMinutes} Min. Lesezeit
                    </time>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-aqua">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-sm text-muted">
          Keine Artikel in dieser Kategorie gefunden.
        </p>
      )}
    </div>
  );
}
