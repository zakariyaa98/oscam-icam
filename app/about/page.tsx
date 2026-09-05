import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Über uns | OSCam-iCam",
  description:
    "OSCam-iCam in Kürze: was die Website bietet, wie unser technischer Support funktioniert und warum wir Wert auf verantwortungsvolle, verständliche Inhalte legen.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/about",
    title: "Über uns | OSCam-iCam",
    description: "Was OSCam-iCam bietet und worauf wir bei unseren Inhalten Wert legen.",
    images: [{ url: "https://oscam-icam.de/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/opengraph-image"],
    title: "Über uns | OSCam-iCam",
    description: "Was OSCam-iCam bietet und worauf wir bei unseren Inhalten Wert legen.",
  },
};

const reasons = [
  {
    title: "Verständlich statt technokratisch",
    description: "OSCam und iCam einfach erklärt — mit den Fachbegriffen, aber ohne unnötigen Ballast.",
  },
  {
    title: "Ausgerichtet auf Enigma2",
    description: "VU+, Dreambox, Zgemma und weitere Marken — unsere Inhalte sind speziell darauf zugeschnitten.",
  },
  {
    title: "Verantwortungsvoll erklärt",
    description: "Technische Aufklärung ohne Zugangsdaten, Kartenserver oder Anleitungen zur Umgehung von Zugangskontrollen.",
  },
  {
    title: "Support, den Sie erreichen",
    description: "Unser Team antwortet persönlich über WhatsApp, wenn Sie bei der Einrichtung nicht weiterkommen.",
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
            title="OSCam und iCam, verständlich erklärt"
            description="OSCam-iCam ist eine deutschsprachige Informationsseite rund um OSCam, iCam und Enigma2-Receiver — mit dem Anspruch, technische Zusammenhänge nachvollziehbar zu erklären und bei Bedarf persönlich zu unterstützen."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Worauf wir Wert legen</h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam und iCam wirken auf den ersten Blick kompliziert — viele Konfigurationsdateien,
                unterschiedliche Enigma2-Images, verschiedene Receiver-Marken. Unser Ziel ist es,
                diese Themen so zu erklären, dass sie auch ohne Programmierkenntnisse verständlich
                bleiben.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Genauso wichtig ist uns die Abgrenzung: Wir erklären ausschließlich die technische
                Funktionsweise und Konfiguration mit eigenen, rechtmäßig erworbenen
                Zugangsberechtigungen. Zugangsdaten, Kartenserver oder Anleitungen zur Umgehung von
                Zugangskontrollen bieten wir nicht an und werden das auch nicht tun.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was OSCam-iCam ausmacht
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
                Brauchen Sie Unterstützung?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted">
                Vergleichen Sie unsere Support-Pakete und finden Sie den Umfang, der zu Ihnen passt.
              </p>
              <Button href="/oscam-service" variant="primary" className="px-8 py-4 text-base">
                Support-Pakete ansehen
              </Button>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
