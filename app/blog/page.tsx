import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "OSCam & iCam Ratgeber – Blog",
  description:
    "Konfigurationshilfen, Troubleshooting und Hintergrundwissen rund um OSCam, iCam und Enigma2 — verständlich erklärt von OSCam-iCam.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/blog",
    title: "Blog | OSCam-iCam",
    description: "Aktuelle Artikel rund um OSCam, iCam und Enigma2 — verständlich erklärt.",
    images: [{ url: "https://oscam-icam.de/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/opengraph-image"],
    title: "Blog | OSCam-iCam",
    description: "Aktuelle Artikel rund um OSCam, iCam und Enigma2 — verständlich erklärt.",
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
            title="Alles, was Sie über OSCam und iCam wissen sollten"
            description="Praktische Konfigurationshilfen, Troubleshooting und Antworten auf die Fragen, die uns am häufigsten erreichen."
          />

          <BlogList posts={blogPosts} />
        </Container>
      </section>
    </>
  );
}
