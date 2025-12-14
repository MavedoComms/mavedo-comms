export interface SiteContent {
  brandName: string
  tagline: string
  description?: string
  contact: {
    email: string
    whatsapp: string
    location: string
    social?: {
      instagram?: string
      linkedin?: string
      facebook?: string
    }
  }
}

export interface HomeContent {
  hero: {
    title: string
    subtitle: string
    image: string
    ctaPrimary: { label: string; href: string }
    ctaSecondary: { label: string; href: string }
  }
}

export interface PackagesContent {
  packages: Array<{
    name: string
    price: string
    timeline: string
    description: string
    features: string[]
    outcome: string
    popular?: boolean
  }>
}

export interface TestimonialsContent {
  heading: string
  intro: string
  primaryImage?: string
  secondaryImage?: string
  items: Array<{
    quote: string
    author: string
    metric?: string
  }>
}

export interface FAQContent {
  items: Array<{
    q: string
    a: string
  }>
}

export interface CoreValuesContent {
  values: Array<{
    title: string
    body: string
    bg: string
    text: string
  }>
}

export interface ProcessContent {
  heading: string
  intro: string
  steps: Array<{
    number: string
    title: string
    description: string
    image: string
  }>
}
