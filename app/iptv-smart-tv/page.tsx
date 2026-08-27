import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV Samsung & LG Smart TV: Installation ohne Zusatzgerät",
  description:
    "IPTV direkt auf dem Smart TV nutzen, ganz ohne Stick oder Box: Installation auf Samsung- und LG-Fernsehern in wenigen Schritten.",
  keywords: ["IPTV Smart TV", "IPTV Samsung", "IPTV Deutschland"],
  alternates: {
    canonical: "/iptv-smart-tv",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/iptv-smart-tv",
    title: "IPTV Samsung & LG Smart TV: Installation ohne Zusatzgerät",
    description: "So läuft Sub Zero IPTV direkt auf Ihrem Samsung- oder LG-Fernseher.",
    images: [{ url: "https://sub-zeroiptv.xyz/images/dashbord.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/images/dashbord.png"],
    title: "IPTV Samsung & LG Smart TV: Installation ohne Zusatzgerät",
    description: "So läuft Sub Zero IPTV direkt auf Ihrem Samsung- oder LG-Fernseher.",
  },
};

const faqItems = [
  {
    question: "Brauche ich für IPTV auf dem Smart TV zusätzliche Hardware?",
    answer: "Nein, sofern Ihr Fernseher einen eigenen App Store besitzt — Samsung (Tizen) und LG (webOS) reichen völlig aus.",
  },
  {
    question: "Welche Internetverbindung ist empfehlenswert?",
    answer: "Eine LAN-Verbindung liefert die stabilsten Ergebnisse. Bei WLAN sollte der Router möglichst nah am Fernseher stehen.",
  },
  {
    question: "Was, wenn meine App nicht im Store verfügbar ist?",
    answer: "Dann empfiehlt sich der Umstieg auf einen Fire TV Stick oder eine Android-TV-Box mit größerer App-Auswahl.",
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

export default function IptvSmartTvPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Smart TV", href: "/iptv-smart-tv" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Smart TV"
            title="IPTV auf Samsung & LG: kein Zusatzgerät nötig"
            description="Ihr Fernseher bringt schon alles mit, was Sie brauchen. So richten Sie Sub Zero IPTV direkt ein."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Samsung- und LG-Fernseher haben eigene App-Systeme — Tizen beziehungsweise webOS —,
              über die sich eine IPTV App direkt installieren lässt, ganz ohne Fire TV Stick oder
              externe Box. Eine allgemeine Einführung zu IPTV finden Sie in unserem Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/dashbord.png"
                alt="IPTV Oberfläche mit Senderübersicht auf einem Samsung-Fernseher"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Nach Hersteller</h2>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">Samsung (Tizen)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  App direkt aus dem Samsung App Store laden, öffnen, die von Sub Zero IPTV
                  bereitgestellten Zugangsdaten eingeben — die Senderliste lädt automatisch.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground">LG (webOS)</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Installation über den LG Content Store nach demselben Prinzip. Unser Support-Team
                  empfiehlt Ihnen nach Ihrer Bestellung gerne die passende App für Ihr Modelljahr.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Für ein stabileres Bild</h2>
              <p className="text-base leading-relaxed text-muted">
                Eine LAN-Verbindung statt WLAN sowie das Deaktivieren unnötiger
                Bildverarbeitungsfunktionen verbessern die Stabilität spürbar. Weitere
                Optimierungstipps finden Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-smart-tv-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf dem Smart TV nutzen
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Den passenden Anbieter finden</h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder Service läuft auf jedem Fernsehermodell gleich gut. Worauf Sie
                allgemein achten sollten, erfahren Sie unter{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Kein Smart TV zur Hand?</h2>
              <p className="text-base leading-relaxed text-muted">
                Sub Zero IPTV läuft genauso zuverlässig auf einem{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  Fire TV Stick
                </Link>{" "}
                oder einer{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  Android-TV-Box
                </Link>
                . Den passenden Tarif finden Sie auf unserer{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Tarifseite
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
