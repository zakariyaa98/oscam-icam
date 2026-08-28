export const WHATSAPP_NUMBER = "33753411326";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo IPTV TV Support, ich interessiere mich für ein IPTV Abo. Können Sie mir bitte weitere Informationen schicken?";

export const WHATSAPP_DEFAULT_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_FREE_TRIAL_MESSAGE =
  "Hallo IPTV TV,\n\nich möchte gerne einen kostenlosen IPTV Test anfragen.\n\nVielen Dank!";

export const WHATSAPP_FREE_TRIAL_LINK = buildWhatsAppLink(WHATSAPP_FREE_TRIAL_MESSAGE);
