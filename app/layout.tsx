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

const siteUrl = "https://iptv-tv.shop";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IPTV TV – Premium IPTV Anbieter für Deutschland",
    template: "%s | IPTV TV",
  },
  description:
    "Live-TV, Sport, Filme und Serien in HD, Full HD und 4K — gebündelt in einem Abo. IPTV TV: stabile Server, faire Preise, Support auf Deutsch.",
  keywords: [
    "IPTV TV",
    "IPTV Deutschland",
    "IPTV Anbieter",
    "IPTV Shop",
    "IPTV kaufen",
    "IPTV Anbieter Deutschland",
    "IPTV Abonnement",
    "IPTV Streaming",
    "IPTV Smart TV",
    "IPTV Fire TV Stick",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "IPTV TV",
    title: "IPTV TV – Premium IPTV Anbieter für Deutschland",
    description:
      "Live-TV, Sport, Filme und Serien in HD, Full HD und 4K. Stabile Server, faire Preise, Support auf Deutsch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV TV – Premium IPTV Anbieter für Deutschland",
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
  name: "IPTV TV",
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
  name: "IPTV TV",
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
