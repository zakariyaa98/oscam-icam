import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontakt | OSCam-iCam",
  description:
    "Fragen zu OSCam, iCam oder Ihrem Enigma2-Receiver? Schreiben Sie uns auf WhatsApp oder per E-Mail — unser Support-Team antwortet persönlich.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/contact",
    title: "Kontakt | OSCam-iCam",
    description: "Schreiben Sie uns auf WhatsApp oder per E-Mail — unser Team antwortet persönlich.",
    images: [{ url: "https://oscam-icam.de/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/opengraph-image"],
    title: "Kontakt | OSCam-iCam",
    description: "Schreiben Sie uns auf WhatsApp oder per E-Mail — unser Team antwortet persönlich.",
  },
};

const contactChannels = [
  {
    label: "WhatsApp",
    value: "+33 7 53 41 13 26",
    href: WHATSAPP_DEFAULT_LINK,
    external: true,
    description: "Der schnellste Weg zu uns — ideal bei technischen Fragen zur Einrichtung.",
  },
  {
    label: "E-Mail",
    value: "contactipm3tv@gmail.com",
    href: "mailto:contactipm3tv@gmail.com",
    external: false,
    description: "Für alles, was etwas mehr Platz zum Erklären braucht.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Kontakt", href: "/contact" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Kontakt"
            title="Fragen zu OSCam oder iCam? Wir sind für Sie da."
            description="Ob es um die Einrichtung geht, um ein passendes Support-Paket oder einfach um eine offene technische Frage — schreiben Sie uns, und wir kümmern uns persönlich darum."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-6">
              {contactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-7"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-aqua">
                    {channel.label}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{channel.description}</p>
                  <Button
                    href={channel.href}
                    external={channel.external}
                    variant={channel.label === "WhatsApp" ? "whatsapp" : "outline"}
                    className="w-fit"
                  >
                    {channel.value}
                  </Button>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
