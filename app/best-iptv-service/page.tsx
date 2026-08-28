import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Bester IPTV Anbieter: 6 Kriterien, die wirklich zählen",
  description:
    "Was unterscheidet einen guten IPTV Anbieter von einem mittelmäßigen? Sechs konkrete Qualitätskriterien statt leerer Marketingversprechen.",
  keywords: ["bester IPTV Anbieter", "IPTV Premium", "IPTV 4K", "IPTV Streaming"],
  alternates: {
    canonical: "/best-iptv-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "IPTV TV",
    url: "/best-iptv-service",
    title: "Bester IPTV Anbieter: 6 Kriterien, die wirklich zählen",
    description: "Sechs konkrete Qualitätskriterien, an denen sich ein guter IPTV Anbieter erkennen lässt.",
    images: [{ url: "https://iptv-tv.shop/images/streaming-tipps.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://iptv-tv.shop/images/streaming-tipps.png"],
    title: "Bester IPTV Anbieter: 6 Kriterien, die wirklich zählen",
    description: "Sechs konkrete Qualitätskriterien, an denen sich ein guter IPTV Anbieter erkennen lässt.",
  },
};

const criteria = [
  {
    title: "Server, die auch bei Anpfiff durchhalten",
    description: "Der beste IPTV Anbieter bleibt auch bei hoher Auslastung stabil, statt bei Live-Sport auszusetzen.",
  },
  {
    title: "Ein Preis, keine Zusatzkosten",
    description: "Feste Laufzeiten und klare Preise statt Kleingedrucktem, das erst nach dem Kauf auffällt.",
  },
  {
    title: "Ein Katalog, der etwas hergibt",
    description: "Tausende Sender in HD, Full HD und 4K sowie eine umfangreiche Filmbibliothek als Standard, nicht als Extra.",
  },
  {
    title: "Support, der auch antwortet",
    description: "Ein guter Anbieter lässt Sie bei einem Problem nicht allein — erreichbar über WhatsApp, nicht nur per Formular.",
  },
  {
    title: "Kompatibel mit dem, was Sie besitzen",
    description: "Smart TV, Fire TV Stick, Android TV oder Smartphone — der beste IPTV Anbieter funktioniert, wo Sie ihn brauchen.",
  },
  {
    title: "Erst testen, dann entscheiden",
    description: "Vertrauenswürdige Anbieter lassen Sie die Qualität vorab prüfen, statt sofort eine lange Bindung zu verlangen.",
  },
];

const faqItems = [
  {
    question: "Woran erkenne ich den besten IPTV Anbieter?",
    answer:
      "An stabilen Servern, transparenten Preisen, echtem Support, breiter Gerätekompatibilität und der Möglichkeit, vorab zu testen — nicht am niedrigsten Preis.",
  },
  {
    question: "Lohnen sich besonders günstige Anbieter?",
    answer: "Nicht automatisch. Sehr niedrige Preise gehen oft zulasten von Serverkapazität oder Support.",
  },
  {
    question: "Wie wichtig ist 4K bei der Anbieterwahl?",
    answer: "Echtes 4K braucht sowohl starke Server beim Anbieter als auch mindestens 25 Mbit/s bei Ihnen.",
  },
  {
    question: "Lohnt sich ein längeres Abo?",
    answer: "Ja, sofern ein Test Sie bereits überzeugt hat. Bei längeren Laufzeiten liegt der Monatspreis meist deutlich niedriger.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function BestIptvServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Bester IPTV Anbieter", href: "/best-iptv-service" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Qualitätskriterien"
            title="Was den besten IPTV Anbieter wirklich ausmacht"
            description="Keine Marketing-Floskeln — sechs konkrete Kriterien, an denen sich Qualität tatsächlich messen lässt."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              „Der beste Anbieter“ bedeutet für jeden Haushalt etwas anderes — doch bestimmte
              Faktoren entscheiden fast immer über die tatsächliche Zufriedenheit. Eine allgemeine
              Einführung finden Sie in unserem Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-tipps.png"
                alt="Kriterien zur Erkennung eines guten IPTV Anbieters"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {criteria.map((item) => (
                <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                  <h2 className="text-base font-semibold text-foreground">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie Sie diese Kriterien in der Praxis prüfen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein strukturierter Vergleich zahlt sich immer mehr aus als eine Entscheidung nach
                dem Preis allein. Prüfen Sie Serverstabilität, Senderauswahl,
                Gerätekompatibilität und Support-Reaktionszeit gemeinsam — eine ausführliche
                Checkliste dazu finden Sie auf unserer Seite{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV TV im Alltag
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Vergleichen Sie unsere{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Abonnements
                </Link>{" "}
                und finden Sie die passende Laufzeit. Mehr zur Wahl eines vertrauenswürdigen
                Anbieters finden Sie unter{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen</h2>
              <div className="flex flex-col gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
