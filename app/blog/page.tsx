import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog – IPTV Wissenshub",
  description:
    "Aktuelle Artikel rund um IPTV Streaming: Einrichtungsanleitungen, Geräte, Vorteile und Branchentrends — verständlich erklärt von Deutschland IPTV.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/blog",
    title: "Blog | Deutschland IPTV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von Deutschland IPTV.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "Blog | Deutschland IPTV",
    description: "Aktuelle Artikel rund um IPTV Streaming — verständlich erklärt von Deutschland IPTV.",
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
            title="IPTV Wissenshub"
            description="Praktische Anleitungen, Hintergründe und Trends rund um IPTV Streaming — verständlich erklärt."
          />

          <BlogList posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
