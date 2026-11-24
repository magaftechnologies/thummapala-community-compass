export const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

const configuredWhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export function getWhatsAppUrl(message: string): string | null {
  if (!/^[1-9]\d{7,14}$/.test(configuredWhatsAppNumber)) return null;
  return `https://wa.me/${configuredWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}
