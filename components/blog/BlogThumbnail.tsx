import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

const gradientMap: Record<NonNullable<BlogPost["gradient"]>, string> = {
  aurora: "from-aqua/40 via-background-elevated to-background",
  signal: "from-aqua-dim/40 via-background-elevated to-background",
  midnight: "from-aqua/25 via-black to-background-elevated",
  circuit: "from-aqua-soft/30 via-background-elevated to-background",
  horizon: "from-aqua/35 via-background to-background-elevated",
};

export function BlogThumbnail({
  post,
  className,
  priority,
}: {
  post: BlogPost;
  className?: string;
  priority?: boolean;
}) {
  if (post.image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-border ${className ?? ""}`}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          decoding="async"
          {...(priority
            ? { loading: "eager" as const, fetchPriority: "high" as const }
            : { loading: "lazy" as const, fetchPriority: "auto" as const })}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Illustration zum Artikel: ${post.title}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradientMap[post.gradient ?? "aurora"]} ${className ?? ""}`}
    >
      <svg viewBox="0 0 100 100" fill="none" className="h-1/2 w-1/2 text-aqua/70" aria-hidden="true">
        <rect x="15" y="22" width="70" height="46" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M40 78h20M50 68v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 38l14 8-14 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M58 38h14M58 46h14M58 54h9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <div
        aria-hidden
        className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-aqua/20 blur-2xl"
      />
    </div>
  );
}
