import { CONTACT, BRAND } from '../config';

export interface WhatsAppMessageOptions {
  service?: string;
  package?: string;
  budget?: string;
  timeline?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export const generateWhatsAppMessage = (options: WhatsAppMessageOptions = {}): string => {
  const {
    service = '',
    package: selectedPackage = '',
    budget = '',
    timeline = '',
    utm_source = 'website',
    utm_medium = 'whatsapp',
    utm_campaign = 'contact'
  } = options;

  let message = `Hi ${BRAND.name}!\n\n`;

  if (selectedPackage) {
    message += `I'm interested in the "${selectedPackage}" package.\n\n`;
  } else if (service) {
    message += `I'm interested in your ${service} services.\n\n`;
  } else {
    message += `I'd like to learn more about your services.\n\n`;
  }

  if (budget) {
    message += `Budget: ${budget}\n`;
  }

  if (timeline) {
    message += `Timeline: ${timeline}\n`;
  }

  message += `\nLooking forward to hearing from you!\n\n`;
  message += `Source: ${utm_source} | Medium: ${utm_medium} | Campaign: ${utm_campaign}`;

  return message;
};

export const createWhatsAppLink = (options: WhatsAppMessageOptions = {}): string => {
  const message = generateWhatsAppMessage(options);
  const phoneNumber = CONTACT.whatsapp.replace(/[^\d]/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

// Predefined messages for different scenarios
export const WHATSAPP_TEMPLATES = {
  general: () => createWhatsAppLink(),
  
  branding: () => createWhatsAppLink({
    service: 'branding',
    utm_campaign: 'branding_inquiry'
  }),
  
  website: () => createWhatsAppLink({
    service: 'website design',
    utm_campaign: 'website_inquiry'
  }),
  
  social: () => createWhatsAppLink({
    service: 'social media management',
    utm_campaign: 'social_inquiry'
  }),
  
  marketing: () => createWhatsAppLink({
    service: 'marketing strategy',
    utm_campaign: 'marketing_inquiry'
  }),
  
  brandEssentials: () => createWhatsAppLink({
    package: 'Brand Essentials',
    utm_campaign: 'brand_essentials_package'
  }),
  
  digitalStarter: () => createWhatsAppLink({
    package: 'Digital Starter',
    utm_campaign: 'digital_starter_package'
  }),
  
  growthPackage: () => createWhatsAppLink({
    package: 'Growth Package',
    utm_campaign: 'growth_package'
  }),
  
  consultation: () => createWhatsAppLink({
    service: 'free consultation',
    utm_campaign: 'consultation_booking'
  })
};