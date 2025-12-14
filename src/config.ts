import site from './content/site.json';

export const CONTACT = {
  email: site.contact?.email ?? "hello@mavedo.na",
  whatsapp: site.contact?.whatsapp ?? "+264811234567",
  location: site.contact?.location ?? "Windhoek, Namibia",
  social: {
    instagram: site.contact?.social?.instagram ?? "",
    linkedin: site.contact?.social?.linkedin ?? "",
    facebook: site.contact?.social?.facebook ?? "",
  },
};

export const BRAND = {
  name: site.brandName ?? "Mavedo Communications",
  tagline: site.tagline ?? "Affordable creative power for ambitious startups",
  description:
    site.description ?? "A Namibia-based marketing and branding agency helping startups and small businesses access high-quality, cost-effective creative services.",
};
