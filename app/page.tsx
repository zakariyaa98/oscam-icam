import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Devices } from "@/components/sections/Devices";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "OSCam iCam für Enigma2 – Installation, Einrichtung & Support",
  description:
    "OSCam iCam verständlich erklärt: Was OSCam und iCam sind, wie sie auf Enigma2-Receivern wie VU+, Dreambox und Zgemma funktionieren, plus Installation, Troubleshooting und technischer Support.",
  alternates: {
    canonical: "/",
  },
};

// Organization/WebSite structured data now lives once, sitewide, in app/layout.tsx —
// see the comment there. Keeping a second copy here would be duplicate JSON-LD on
// the homepage specifically, which is exactly the kind of duplicate structured data
// Google's Rich Results guidelines warn against.

const latestPosts = blogPosts.slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Was ist OSCam?
            </h2>
            <p className="text-base leading-relaxed text-muted">
              OSCam ist eine quelloffene Softcam-Software für Linux-basierte Receiver. Sie verwaltet
              Conditional-Access-Module und leitet Entschlüsselungsanfragen an lokal angeschlossene,
              rechtmäßig erworbene Smartcards oder CI+-Module weiter. Wie OSCam aufgebaut ist und
              welche Konfigurationsdateien dabei eine Rolle spielen, erklären wir ausführlich auf
              unserer Seite{" "}
              <Link href="/oscam" className="text-aqua underline underline-offset-4">
                OSCam
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Was ist iCam?
            </h2>
            <p className="text-base leading-relaxed text-muted">
              iCam ist ein Softcam-Client mit ähnlicher Aufgabe wie OSCam, unterscheidet sich aber in
              Konfigurationssyntax und unterstützten Protokollen. Welche Variante zu Ihrem Setup
              passt und worin die konkreten Unterschiede liegen, lesen Sie auf unserer Seite{" "}
              <Link href="/icam" className="text-aqua underline underline-offset-4">
                iCam
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background-elevated/40 py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            OSCam und iCam auf Enigma2
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Enigma2 ist die Linux-basierte Benutzeroberfläche, die auf den meisten modernen
            Sat-Receivern läuft — darunter VU+, Dreambox, Zgemma und viele weitere Marken. Weil das
            System offen für Erweiterungen ist, lassen sich OSCam und iCam über den Plugin-Feed des
            jeweiligen Images installieren und über Textdateien beziehungsweise das OSCam WebIf
            konfigurieren. Details zur Installation finden Sie auf unserer Seite{" "}
            <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
              OSCam installieren
            </Link>
            .
          </p>
        </Container>
      </section>

      <Devices />

      <Features />
      <WhyChooseUs />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="flex flex-col gap-6">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Wenn es einmal nicht funktioniert
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Ein leerer Kanal, ein Absturz nach dem Update oder ein Reader, der sich nicht verbindet —
            die meisten OSCam-Probleme lassen sich anhand der Logdatei eingrenzen. Häufige Ursachen
            und Lösungswege haben wir in unserem Blogartikel zu{" "}
            <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
              häufigen OSCam-Fehlern
            </Link>{" "}
            zusammengefasst. Kommen Sie eigenständig nicht weiter, unterstützt Sie unser{" "}
            <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
              Support-Team
            </Link>{" "}
            gerne persönlich.
          </p>
        </Container>
      </section>

      <PricingPreview />

      <section className="border-b border-border bg-background-elevated/40 py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Aus unserem Blog
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              Vertiefende Artikel rund um OSCam, iCam und Enigma2 — praxisnah und ohne unnötigen
              Fachjargon.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-aqua/50"
              >
                <h3 className="text-base font-semibold text-foreground">{post.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="w-fit text-sm font-semibold text-aqua underline underline-offset-4">
            Alle Blogartikel ansehen
          </Link>
        </Container>
      </section>

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              OSCam iCam Anbieter
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Sie recherchieren einen technischen Anbieter oder Dienstleister rund um OSCam und
              iCam? Worauf Sie bei Transparenz, Kompatibilität, Support und Sicherheit achten
              sollten, erklären wir auf unserer Seite{" "}
              <Link href="/oscam-icam-anbieter" className="text-aqua underline underline-offset-4">
                OSCam iCam Anbieter
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              OSCam Reseller
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Sie interessieren sich für ein Partner- oder Reseller-Modell aus geschäftlicher
              Perspektive? Grundlagen, Anforderungen und Fragen, die Sie vorab klären sollten,
              finden Sie unter{" "}
              <Link href="/oscam-reseller" className="text-aqua underline underline-offset-4">
                OSCam Reseller
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <FAQPreview />
      <ContactCTA />
    </>
  );
}
