import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://oscam-icam.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OSCam-iCam – OSCam & iCam für Enigma2 verständlich erklärt",
    template: "%s | OSCam-iCam",
  },
  description:
    "OSCam-iCam erklärt OSCam und iCam für Enigma2-Receiver wie VU+, Dreambox und Zgemma: Installation, Konfiguration, Troubleshooting und technischer Support auf Deutsch.",
  keywords: [
    "OSCam",
    "iCam",
    "OSCam iCam",
    "OSCam Installation",
    "OSCam Einrichtung",
    "OSCam Enigma2",
    "OSCam VU+",
    "OSCam Dreambox",
    "OSCam Zgemma",
    "Enigma2 OSCam",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "OSCam-iCam",
    title: "OSCam-iCam – OSCam & iCam für Enigma2 verständlich erklärt",
    description:
      "Installation, Konfiguration und Troubleshooting von OSCam und iCam für Enigma2-Receiver — verständlich erklärt, mit technischem Support auf Deutsch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam-iCam – OSCam & iCam für Enigma2 verständlich erklärt",
    description:
      "Installation, Konfiguration und Troubleshooting von OSCam und iCam für Enigma2-Receiver — verständlich erklärt, mit technischem Support auf Deutsch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Sitewide entity graph, emitted once on every page (not per-route) so Google and
// AI crawlers see exactly one canonical Organization/WebSite identity for the brand
// instead of a duplicate, page-specific copy on each route.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "OSCam-iCam",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo`,
    width: 512,
    height: 512,
  },
  description:
    "OSCam-iCam erklärt OSCam und iCam für Enigma2-Receiver und bietet technischen Support bei der Einrichtung und Konfiguration.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contactipm3tv@gmail.com",
    contactType: "customer support",
    areaServed: "DE",
    availableLanguage: ["German"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "OSCam-iCam",
  url: siteUrl,
  inLanguage: "de-DE",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-aqua focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
