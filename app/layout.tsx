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

const siteUrl = "https://sub-zeroiptv.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sub Zero IPTV – Premium IPTV für Deutschland",
    template: "%s | Sub Zero IPTV",
  },
  description:
    "Live-TV, Sport, Filme und Serien in HD, Full HD und 4K — gebündelt in einem Abo. Sub Zero IPTV: stabile Server, faire Preise, Support auf Deutsch.",
  keywords: [
    "IPTV Deutschland",
    "IPTV Anbieter Deutschland",
    "IPTV kaufen",
    "IPTV Abonnement",
    "IPTV Premium",
    "IPTV 4K",
    "IPTV Smart TV",
    "IPTV Fire TV Stick",
    "beste IPTV Anbieter",
    "IPTV testen",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "Sub Zero IPTV",
    title: "Sub Zero IPTV – Premium IPTV für Deutschland",
    description:
      "Live-TV, Sport, Filme und Serien in HD, Full HD und 4K. Stabile Server, faire Preise, Support auf Deutsch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sub Zero IPTV – Premium IPTV für Deutschland",
    description:
      "Live-TV, Sport, Filme und Serien in HD, Full HD und 4K. Stabile Server, faire Preise, Support auf Deutsch.",
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
  name: "Sub Zero IPTV",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo`,
    width: 512,
    height: 512,
  },
  description:
    "Premium IPTV Abo für Deutschland: Live-TV, Sport, Filme und Serien in HD, Full HD und 4K, gebündelt auf einem Zugang.",
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
  name: "Sub Zero IPTV",
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
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-aqua focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
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
