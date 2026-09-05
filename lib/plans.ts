import { buildWhatsAppLink } from "./whatsapp";

/** Rounds to the nearest whole-percent discount between an original and current price. */
export function discountPercent(originalPrice: number, price: number): number {
  return Math.round(100 - (price / originalPrice) * 100);
}

// ---------------------------------------------------------------------------
// Home page — featured service packages preview (3 cards)
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
  "Persönliche Fernunterstützung bei der OSCam/iCam-Einrichtung auf Ihrem Enigma2-Receiver",
  "Konfiguration von oscam.conf, oscam.server und oscam.user gemeinsam mit Ihnen",
  "Einrichtung von Bouquets und EPG, sofern gewünscht",
  "Hilfe bei der Fehlersuche anhand Ihrer Logdateien",
  "Support-Team auf Deutsch, erreichbar per WhatsApp",
];

export const featuredPlans: FeaturedPlan[] = [
  {
    id: "basis",
    duration: "Basis-Einrichtung",
    price: "29€",
    whatsappLink: buildWhatsAppLink(
      "Hallo OSCam-iCam Team,\nich interessiere mich für die Basis-Einrichtung (ab 29€)."
    ),
  },
  {
    id: "erweitert",
    duration: "Erweiterte Einrichtung",
    price: "49€",
    badge: "🔥 Am meisten gebucht",
    featured: true,
    whatsappLink: buildWhatsAppLink(
      "Hallo OSCam-iCam Team,\nich interessiere mich für die Erweiterte Einrichtung (ab 49€)."
    ),
  },
  {
    id: "premium",
    duration: "Premium-Support",
    price: "79€",
    badge: "💎 Laufende Betreuung",
    whatsappLink: buildWhatsAppLink(
      "Hallo OSCam-iCam Team,\nich interessiere mich für den Premium-Support (ab 79€)."
    ),
  },
];

// ---------------------------------------------------------------------------
// Service page — package tabs, each with 1/2/3-Geräte-Stufen
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
  "Fernunterstützung per WhatsApp oder Fernwartungssoftware",
  "Konfiguration von oscam.conf, oscam.server und oscam.user",
  "Einrichtung des OSCam WebIf zur späteren Selbstverwaltung",
  "Hilfe bei Bouquet- und EPG-Organisation unter Enigma2",
  "Geeignet für VU+, Dreambox, Zgemma und weitere Enigma2-Receiver",
  "Support-Team auf Deutsch erreichbar",
];

function buildTiers(
  packageLabel: string,
  entries: { devices: 1 | 2 | 3; originalPrice: number; price: number }[]
): DeviceTier[] {
  return entries.map(({ devices, originalPrice, price }) => ({
    id: `${packageLabel}-${devices}`,
    devices,
    label: devices === 1 ? "1 Receiver" : `${devices} Receiver`,
    originalPrice,
    price,
    whatsappLink: buildWhatsAppLink(
      `Hallo OSCam-iCam Team,\nich interessiere mich für das Paket "${packageLabel}" für ${devices} Receiver${
        devices > 1 ? "" : ""
      } (${price}€).`
    ),
  }));
}

export const pricingDurations: PricingDuration[] = [
  {
    id: "basis",
    label: "Basis-Einrichtung",
    tiers: buildTiers("Basis-Einrichtung", [
      { devices: 1, originalPrice: 39, price: 29 },
      { devices: 2, originalPrice: 59, price: 45 },
      { devices: 3, originalPrice: 79, price: 60 },
    ]),
  },
  {
    id: "erweitert",
    label: "Erweiterte Einrichtung",
    badge: "🔥 Am meisten gebucht",
    featured: true,
    tiers: buildTiers("Erweiterte Einrichtung", [
      { devices: 1, originalPrice: 65, price: 49 },
      { devices: 2, originalPrice: 99, price: 75 },
      { devices: 3, originalPrice: 129, price: 95 },
    ]),
  },
  {
    id: "premium",
    label: "Premium-Support (3 Monate)",
    badge: "💎 Laufende Betreuung",
    tiers: buildTiers("Premium-Support (3 Monate)", [
      { devices: 1, originalPrice: 99, price: 79 },
      { devices: 2, originalPrice: 149, price: 120 },
      { devices: 3, originalPrice: 189, price: 150 },
    ]),
  },
];
