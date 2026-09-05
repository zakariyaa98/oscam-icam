import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { TechnologyGrid } from "@/components/sections/TechnologyGrid";
import { Devices } from "@/components/sections/Devices";
import { VisualBreak } from "@/components/sections/VisualBreak";
import { Knowledge } from "@/components/sections/Knowledge";
import { PlansPreview } from "@/components/sections/PlansPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { LatestArticles } from "@/components/sections/LatestArticles";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { HomeFinalCTA } from "@/components/sections/HomeFinalCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { Container } from "@/components/ui/Container";

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

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <TechShowcase />
      <PlansPreview />
      <TechnologyGrid />
      <Devices />
      <VisualBreak />
      <Knowledge />

      <section className="border-b border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">OSCam iCam Anbieter</h2>
            <p className="text-base leading-relaxed text-muted">
              Worauf Sie bei Transparenz, Kompatibilität, Support und Sicherheit achten sollten,
              erklären wir auf unserer Seite{" "}
              <Link
                href="/oscam-icam-anbieter"
                className="text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
              >
                OSCam iCam Anbieter
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">OSCam Reseller</h2>
            <p className="text-base leading-relaxed text-muted">
              Grundlagen, Anforderungen und Fragen, die Sie vorab klären sollten, finden Sie unter{" "}
              <Link
                href="/oscam-reseller"
                className="text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
              >
                OSCam Reseller
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <PricingPreview />
      <FAQPreview />
      <HomeFinalCTA />
      <Testimonials />
      <LatestArticles />
    </>
  );
}
