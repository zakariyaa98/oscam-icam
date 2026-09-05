import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlogThumbnail } from "@/components/blog/BlogThumbnail";
import { blogPosts } from "@/lib/blog-posts";

const latestPosts = [...blogPosts]
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 3);

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function LatestArticles() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Aus dem Blog"
          title="Neueste Artikel zu OSCam, iCam und Enigma2"
          description="Vertiefende Beiträge — praxisnah und ohne unnötigen Fachjargon."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-5 transition-colors duration-300 hover:border-aqua/50"
              >
                <BlogThumbnail post={post} className="aspect-[16/10] w-full" />
                <div className="flex flex-col gap-3 px-1 pb-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-muted">
                    <span className="rounded-full bg-gold/10 px-2.5 py-1 font-semibold text-gold">
                      {post.category}
                    </span>
                    <time dateTime={post.publishedAt}>
                      {dateFormatter.format(new Date(post.publishedAt))} · {post.readingTimeMinutes} Min.
                    </time>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-aqua">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua">
                    Weiterlesen
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <Link
          href="/blog"
          className="text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
        >
          Alle Blogartikel ansehen
        </Link>
      </Container>
    </section>
  );
}
