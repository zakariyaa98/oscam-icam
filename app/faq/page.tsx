import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { faqCategories } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Häufige Fragen zu IPTV | Sub Zero IPTV",
  description:
    "Wie funktioniert IPTV, welche Geräte werden unterstützt und wie läuft der Test ab? Antworten auf die wichtigsten Fragen zu Sub Zero IPTV.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/faq",
    title: "Häufige Fragen zu IPTV | Sub Zero IPTV",
    description: "Antworten auf die wichtigsten Fragen zu Abo, Geräten, Installation und Support.",
    images: [{ url: "https://www.sub-zeroiptv.xyz/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.sub-zeroiptv.xyz/opengraph-image"],
    title: "Häufige Fragen zu IPTV | Sub Zero IPTV",
    description: "Antworten auf die wichtigsten Fragen zu Abo, Geräten, Installation und Support.",
  },
};

const allFaqItems = faqCategories.flatMap((category) => category.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "FAQ", href: "/faq" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Fragen? Wahrscheinlich schon beantwortet."
            description="Von der Einrichtung bis zum passenden Abo — hier finden Sie die Antworten, die uns am häufigsten erreichen. Nichts dabei? Schreiben Sie uns direkt."
          />

          <div className="flex w-full max-w-3xl flex-col gap-12">
            {faqCategories.map((category) => (
              <div key={category.category} className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                <div className="flex flex-col gap-4">
                  {category.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-border bg-background-elevated p-6 open:border-aqua/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground marker:content-none">
                        {item.question}
                        <span className="shrink-0 text-aqua transition-transform duration-300 group-open:rotate-45">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
