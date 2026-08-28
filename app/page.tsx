import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { StreamingCategories } from "@/components/sections/StreamingCategories";
import { Features } from "@/components/sections/Features";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LatestMovies } from "@/components/sections/LatestMovies";
import { Devices } from "@/components/sections/Devices";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { LiveSports } from "@/components/sections/LiveSports";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "IPTV TV – IPTV Anbieter für Deutschland",
  description:
    "IPTV TV ist Ihr IPTV Shop für Deutschland: Live-TV, Sport, Filme und Serien in HD, Full HD und 4K — gebündelt in einem Abo. Stabile Server, faire Preise, Support auf Deutsch.",
  alternates: {
    canonical: "/",
  },
};

// Organization/WebSite structured data now lives once, sitewide, in app/layout.tsx —
// see the comment there. Keeping a second copy here would be duplicate JSON-LD on
// the homepage specifically, which is exactly the kind of duplicate structured data
// Google's Rich Results guidelines warn against.

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              IPTV Deutschland: Für deutsche Haushalte gemacht
            </h2>
            <p className="text-base leading-relaxed text-muted">
              IPTV TV ist auf den deutschen Markt ausgerichtet: deutschsprachiger Support, eine
              Senderauswahl mit den wichtigsten deutschen und internationalen Programmen und ein
              Team, das auf Rückfragen tatsächlich antwortet. Wie IPTV technisch funktioniert und
              warum sich der Umstieg lohnt, erklären wir ausführlich auf unserer Seite{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Deutschland
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              IPTV TV als Anbieter: Worauf wir Wert legen
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Ein guter IPTV Anbieter zeigt sich vor allem dort, wo es unbequem wird: bei
              Serverlast, bei Rückfragen und bei der Preisgestaltung. Transparente Tarife ohne
              Kleingedrucktes und direkter Kontakt über WhatsApp, schon vor dem Kauf. Worauf Sie
              bei der Anbieterwahl grundsätzlich achten sollten, lesen Sie unter{" "}
              <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                IPTV Anbieter
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <StreamingCategories />
      <PricingPreview />
      <Features />
      <WhyChooseUs />
      <LatestMovies />
      <Devices />
      <LiveSports />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
