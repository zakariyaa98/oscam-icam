import { buildWhatsAppLink } from "./whatsapp";

/** Rounds to the nearest whole-percent discount between an original and current price. */
export function discountPercent(originalPrice: number, price: number): number {
  return Math.round(100 - (price / originalPrice) * 100);
}

// ---------------------------------------------------------------------------
// Home page — featured plans preview (3 cards, no device selection)
// ---------------------------------------------------------------------------

export type FeaturedPlan = {
  id: string;
  duration: string;
  price: string;
  badge?: string;
  featured?: boolean;
  whatsappLink: string;
};

export const homeFeatures: string[] = [
  "30.000+ Live-Sender, inklusive aller wichtigen Sportevents weltweit",
  "Bildqualität in Full HD, 4K und Ultra HD, ohne Qualitätsabstriche",
  "70.000+ Filme und Serien jederzeit auf Abruf (VOD)",
  "Elektronischer Programmführer (EPG) automatisch inklusive",
  "Support-Team 24/7 erreichbar — auf Deutsch, ohne Warteschleife",
];

export const featuredPlans: FeaturedPlan[] = [
  {
    id: "6-months",
    duration: "6 Monate",
    price: "30€",
    whatsappLink: buildWhatsAppLink(
      "Hallo IPTV TV Support,\nich interessiere mich für den 6-Monats-Tarif (ab 30€)."
    ),
  },
  {
    id: "1-year",
    duration: "1 Jahr",
    price: "40€",
    badge: "🔥 Am beliebtesten",
    featured: true,
    whatsappLink: buildWhatsAppLink(
      "Hallo IPTV TV Support,\nich interessiere mich für den 1-Jahres-Tarif (ab 40€)."
    ),
  },
  {
    id: "2-years",
    duration: "2 Jahre",
    price: "70€",
    badge: "💎 Bester Wert",
    whatsappLink: buildWhatsAppLink(
      "Hallo IPTV TV Support,\nich interessiere mich für den 2-Jahres-Tarif (ab 70€)."
    ),
  },
];

// ---------------------------------------------------------------------------
// Pricing page — duration tabs, each with 1/2/3-device tiers
// ---------------------------------------------------------------------------

export type DeviceTier = {
  id: string;
  devices: 1 | 2 | 3;
  label: string;
  originalPrice: number;
  price: number;
  whatsappLink: string;
};

export type PricingDuration = {
  id: string;
  label: string;
  badge?: string;
  featured?: boolean;
  tiers: DeviceTier[];
};

export const pricingFeatures: string[] = [
  "30.000+ Sender in einer Übersicht",
  "Bildqualität in Full HD, 4K und Ultra HD",
  "70.000+ Filme und Serien auf Abruf (VOD)",
  "Läuft auf Smart TV, Android TV, Fire TV Stick, Apple TV, MAG, PC und Smartphone",
  "Zugang meist noch am selben Tag",
  "Support-Team rund um die Uhr erreichbar",
];

function buildTiers(
  durationLabel: string,
  entries: { devices: 1 | 2 | 3; originalPrice: number; price: number }[]
): DeviceTier[] {
  return entries.map(({ devices, originalPrice, price }) => ({
    id: `${durationLabel}-${devices}`,
    devices,
    label: devices === 1 ? "1 Gerät" : `${devices} Geräte`,
    originalPrice,
    price,
    whatsappLink: buildWhatsAppLink(
      `Hallo IPTV TV Support,\nich interessiere mich für den Tarif "${durationLabel}" mit ${devices} Gerät${
        devices > 1 ? "en" : ""
      } (${price}€).`
    ),
  }));
}

export const pricingDurations: PricingDuration[] = [
  {
    id: "1-month",
    label: "1 Monat",
    tiers: buildTiers("1 Monat", [
      { devices: 1, originalPrice: 15, price: 10 },
      { devices: 2, originalPrice: 22, price: 16 },
      { devices: 3, originalPrice: 29, price: 20 },
    ]),
  },
  {
    id: "3-months",
    label: "3 Monate",
    tiers: buildTiers("3 Monate", [
      { devices: 1, originalPrice: 35, price: 20 },
      { devices: 2, originalPrice: 49, price: 30 },
      { devices: 3, originalPrice: 59, price: 40 },
    ]),
  },
  {
    id: "6-months",
    label: "6 Monate",
    tiers: buildTiers("6 Monate", [
      { devices: 1, originalPrice: 49, price: 30 },
      { devices: 2, originalPrice: 69, price: 40 },
      { devices: 3, originalPrice: 89, price: 55 },
    ]),
  },
  {
    id: "1-year",
    label: "1 Jahr",
    badge: "🔥 Am beliebtesten",
    featured: true,
    tiers: buildTiers("1 Jahr", [
      { devices: 1, originalPrice: 79, price: 40 },
      { devices: 2, originalPrice: 99, price: 70 },
      { devices: 3, originalPrice: 129, price: 100 },
    ]),
  },
  {
    id: "2-years",
    label: "2 Jahre",
    badge: "💎 Bestes Angebot",
    tiers: buildTiers("2 Jahre", [
      { devices: 1, originalPrice: 119, price: 70 },
      { devices: 2, originalPrice: 149, price: 120 },
      { devices: 3, originalPrice: 199, price: 170 },
    ]),
  },
];
