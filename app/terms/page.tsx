import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen | OSCam-iCam",
  description:
    "Die Bedingungen für die Nutzung von OSCam-iCam: Leistungsumfang, Zahlung, Haftung, geistiges Eigentum und geltendes Recht auf einen Blick.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/terms",
    title: "AGB – Allgemeine Geschäftsbedingungen | OSCam-iCam",
    description: "Leistungsumfang, Zahlung, Haftung, geistiges Eigentum und geltendes Recht.",
    images: [{ url: "https://oscam-icam.de/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/opengraph-image"],
    title: "AGB – Allgemeine Geschäftsbedingungen | OSCam-iCam",
    description: "Leistungsumfang, Zahlung, Haftung, geistiges Eigentum und geltendes Recht.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "AGB", href: "/terms" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Rechtliches"
            title="Allgemeine Geschäftsbedingungen"
            description="Diese AGB regeln die Nutzung von OSCam-iCam und die Beauftragung unserer technischen Support-Pakete."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-xs text-muted">Stand: 4. September 2026</p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                1. Geltungsbereich und Leistungsbeschreibung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam-iCam bietet technische Aufklärung sowie optionalen, kostenpflichtigen Support
                bei der Installation und Konfiguration der Open-Source-Software OSCam bzw. iCam auf
                Enigma2-Receivern (z. B. VU+, Dreambox, Zgemma). Unsere Leistung beschränkt sich
                ausdrücklich auf technischen Support und Konfigurationshilfe.{" "}
                <strong className="text-foreground">
                  Wir stellen keine Zugangsdaten, Kartenserver, Abonnements oder sonstige Berechtigungen
                  zum Empfang verschlüsselter Sender bereit und unterstützen keine Umgehung von
                  Zugangskontrollen oder Verschlüsselung.
                </strong>{" "}
                Der Kunde bestätigt, dass er über eine eigene, rechtmäßig erworbene Berechtigung
                (Smartcard, CI+-Modul oder vergleichbar) verfügt, die im Rahmen des Supports lediglich
                technisch eingebunden wird.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">2. Vertragsschluss</h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Vertrag kommt zustande, sobald Sie über WhatsApp, unser Kontaktformular oder E-Mail
                ein Support-Paket anfragen und wir die Beauftragung bestätigen. Der Umfang der
                jeweiligen Leistung ergibt sich aus dem gewählten Paket auf unserer{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Seite
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                3. Vergütung und Zahlung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die aktuellen Preise für unsere Support-Pakete sind auf unserer{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Seite
                </Link>{" "}
                einsehbar. Die Zahlungsabwicklung wird individuell mit Ihnen über WhatsApp oder E-Mail
                abgestimmt. Bei laufenden Support-Paketen (z. B. Premium-Support über mehrere Monate)
                endet die Leistung automatisch mit Ablauf des vereinbarten Zeitraums, sofern keine
                Verlängerung vereinbart wird.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                4. Pflichten des Kunden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Der Kunde verpflichtet sich, unsere Leistungen ausschließlich im Rahmen der geltenden
                Gesetze zu nutzen und ausschließlich eigene, rechtmäßig erworbene
                Zugangsberechtigungen im Rahmen des Supports einzubinden. Eine Nutzung unserer
                Leistungen zur Vorbereitung oder Durchführung unautorisierten Zugriffs auf
                kostenpflichtige Inhalte ist ausdrücklich untersagt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                5. Geistiges Eigentum
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Alle Inhalte, Marken, Logos und die Gestaltung unserer Website sind Eigentum von
                OSCam-iCam oder der jeweiligen Rechteinhaber und urheberrechtlich geschützt. OSCam
                und iCam sind eigenständige Softwareprojekte Dritter; wir sind nicht deren Entwickler
                und erheben keinen Anspruch auf deren geistiges Eigentum.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                6. Haftungsbeschränkung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach den Vorschriften des
                Produkthaftungsgesetzes. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die
                Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt. Für Fehlfunktionen der
                Drittsoftware OSCam bzw. iCam selbst sowie für Störungen außerhalb unseres Einflussbereichs — etwa
                bei Ihrem Internetanbieter, Ihrer Hardware oder Ihrer Zugangsberechtigung — übernehmen wir keine
                Haftung. Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                7. Beendigung und Ausschluss vom Support
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Stellt sich heraus, dass eine Anfrage auf unautorisierten Zugriff auf kostenpflichtige
                Inhalte abzielt, sind wir berechtigt, die Leistung ohne Ankündigung abzulehnen oder zu
                beenden, ohne dass ein Anspruch auf Rückerstattung bereits erbrachter Leistung besteht.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">8. Änderungen der AGB</h2>
              <p className="text-base leading-relaxed text-muted">
                Wir behalten uns vor, diese AGB bei Bedarf anzupassen, etwa bei Änderungen unseres Angebots oder
                der Rechtslage. Für bereits beauftragte Leistungen gelten die AGB in der zum Zeitpunkt der
                Beauftragung gültigen Fassung.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                9. Anwendbares Recht
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sind Sie Verbraucher mit gewöhnlichem
                Aufenthalt in einem anderen EU-Mitgliedstaat, bleiben zwingende verbraucherschützende
                Bestimmungen dieses Staates hiervon unberührt.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">10. Kontakt</h2>
              <p className="text-sm leading-relaxed text-muted">
                Fragen zu diesen AGB richten Sie bitte an{" "}
                <a href="mailto:contactipm3tv@gmail.com" className="text-aqua underline underline-offset-4">
                  contactipm3tv@gmail.com
                </a>{" "}
                oder über unsere{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  Kontaktseite
                </Link>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
