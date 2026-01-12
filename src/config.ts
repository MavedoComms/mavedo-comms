import site from './content/site.json';
import type { SiteContent } from './content/types';

const siteData = site as SiteContent;

export const CONTACT = {
  email: siteData.contact?.email ?? "hello@mavedo.na",
  whatsapp: siteData.contact?.whatsapp ?? "",
  location: siteData.contact?.location ?? "Windhoek, Namibia",
  social: {
    instagram: siteData.contact?.social?.instagram ?? "",
    linkedin: siteData.contact?.social?.linkedin ?? "",
    facebook: siteData.contact?.social?.facebook ?? "",
  },
};

export const BRAND = {
  name: siteData.brandName ?? "Mavedo Communications",
  tagline: siteData.tagline ?? "Affordable creative power for ambitious startups",
  description:
    siteData.description ?? "A Namibia-based marketing and branding agency helping startups and small businesses access high-quality, cost-effective creative services.",
};
