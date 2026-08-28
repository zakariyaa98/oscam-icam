import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "IPTV Ratgeber & Anleitungen – Blog",
  description:
    "Einrichtungsanleitungen, Geräte-Vergleiche und Antworten auf die häufigsten IPTV Fragen — verständlich erklärt von IPTV TV.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "IPTV TV",
    url: "/blog",
    title: "Blog | IPTV TV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von IPTV TV.",
    images: [{ url: "https://iptv-tv.shop/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://iptv-tv.shop/opengraph-image"],
    title: "Blog | IPTV TV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von IPTV TV.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Blog", href: "/blog" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="Alles, was Sie über IPTV wissen sollten"
            description="Praktische Anleitungen, Geräte-Vergleiche und Antworten auf die Fragen, die uns am häufigsten erreichen."
          />

          <BlogList posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
