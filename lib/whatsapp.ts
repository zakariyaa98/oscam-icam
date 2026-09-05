export const WHATSAPP_NUMBER = "33753411326";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hallo OSCam-iCam Team, ich habe eine Frage zur Einrichtung von OSCam/iCam auf meinem Enigma2-Receiver. Können Sie mir weiterhelfen?";

export const WHATSAPP_DEFAULT_LINK = buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_FREE_TRIAL_MESSAGE =
  "Hallo OSCam-iCam Team,\n\nich interessiere mich für technischen Support bei der Einrichtung von OSCam/iCam auf meinem Enigma2-Receiver. Können Sie mir unverbindlich mehr dazu erklären?\n\nVielen Dank!";

export const WHATSAPP_FREE_TRIAL_LINK = buildWhatsAppLink(WHATSAPP_FREE_TRIAL_MESSAGE);
