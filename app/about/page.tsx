import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Über uns | Sub Zero IPTV",
  description:
    "Sub Zero IPTV in Kürze: was unser Service bietet, welche Geräte er unterstützt und warum unser Support den Unterschied macht.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/about",
    title: "Über uns | Sub Zero IPTV",
    description: "Was Sub Zero IPTV bietet und worauf wir bei unserem Service Wert legen.",
    images: [{ url: "https://sub-zeroiptv.xyz/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/opengraph-image"],
    title: "Über uns | Sub Zero IPTV",
    description: "Was Sub Zero IPTV bietet und worauf wir bei unserem Service Wert legen.",
  },
};

const reasons = [
  {
    title: "Ein Abo für alles",
    description: "Live-TV, Sport, Filme und Serien in einer einzigen App, statt mehrerer separater Dienste.",
  },
  {
    title: "Läuft auf Ihren vorhandenen Geräten",
    description: "Smart TV, Fire TV Stick, Smartphone oder PC — kein Zusatzgerät nötig, wenn Sie schon eines besitzen.",
  },
  {
    title: "Einrichtung ohne Vorwissen",
    description: "App installieren, Zugangsdaten eingeben — in der Regel sind Sie in wenigen Minuten startklar.",
  },
  {
    title: "Support, den Sie erreichen",
    description: "Unser Team antwortet persönlich über WhatsApp, statt Sie in einer Warteschleife zu parken.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Über uns", href: "/about" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Über uns"
            title="Streaming, das einfach funktioniert"
            description="Sub Zero IPTV bündelt Live-TV, Sport, Filme und Serien in einem Abo — mit dem Anspruch, dass Einrichtung und Support genauso unkompliziert bleiben wie das Zuschauen selbst."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Worauf wir Wert legen</h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Streaming-Dienst sollte sich nicht wie ein Kompromiss anfühlen. Statt vieler
                einzelner Apps für Live-TV, Sport und Filme bündelt Sub Zero IPTV alles in einer
                Oberfläche — verfügbar auf dem Gerät, das Sie ohnehin schon nutzen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Genauso wichtig ist uns, was im Hintergrund passiert: stabile Server, eine klare
                Preisstruktur ohne Kleingedrucktes und ein Support-Team, das tatsächlich antwortet,
                statt Sie mit einem Ticket-System allein zu lassen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was Sub Zero IPTV ausmacht
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated p-6"
                  >
                    <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{reason.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col items-center gap-5 rounded-3xl border border-aqua/30 bg-aqua/5 p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Selbst ausprobieren?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted">
                Vergleichen Sie unsere Abonnements und finden Sie die Laufzeit, die zu Ihnen passt.
              </p>
              <Button href="/plans" variant="primary" className="px-8 py-4 text-base">
                Abonnements ansehen
              </Button>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
