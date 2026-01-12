import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const contentDir = path.join(root, 'src', 'content')

const readJson = (rel) => {
  const p = path.join(contentDir, rel)
  const raw = fs.readFileSync(p, 'utf8')
  return JSON.parse(raw)
}

const assert = (cond, msg) => {
  if (!cond) {
    throw new Error(msg)
  }
}

const isString = (v) => typeof v === 'string' && v.length > 0
const isOptionalString = (v) => v === undefined || typeof v === 'string'

const validateSite = () => {
  const site = readJson('site.json')
  assert(isString(site.brandName), 'site.brandName is required')
  assert(isString(site.tagline), 'site.tagline is required')
  assert(isOptionalString(site.description), 'site.description must be a string if present')
  assert(site.contact && typeof site.contact === 'object', 'site.contact is required')
  assert(isString(site.contact.email), 'site.contact.email is required')
  assert(isString(site.contact.whatsapp), 'site.contact.whatsapp is required')
  assert(isString(site.contact.location), 'site.contact.location is required')
  if (site.contact.social) {
    assert(typeof site.contact.social === 'object', 'site.contact.social must be an object')
    assert(isOptionalString(site.contact.social.instagram), 'site.contact.social.instagram must be string')
    assert(isOptionalString(site.contact.social.linkedin), 'site.contact.social.linkedin must be string')
    assert(isOptionalString(site.contact.social.facebook), 'site.contact.social.facebook must be string')
  }
}

const validateHome = () => {
  const home = readJson('home.json')
  assert(home.hero && typeof home.hero === 'object', 'home.hero is required')
  assert(isString(home.hero.title), 'home.hero.title is required')
  assert(isString(home.hero.subtitle), 'home.hero.subtitle is required')
  assert(isString(home.hero.image), 'home.hero.image is required')
  assert(home.hero.image.startsWith('/images/'), 'home.hero.image must be under /images/')
  assert(home.hero.ctaPrimary && typeof home.hero.ctaPrimary === 'object', 'home.hero.ctaPrimary is required')
  assert(isString(home.hero.ctaPrimary.label), 'home.hero.ctaPrimary.label is required')
  assert(isString(home.hero.ctaPrimary.href), 'home.hero.ctaPrimary.href is required')
  assert(home.hero.ctaSecondary && typeof home.hero.ctaSecondary === 'object', 'home.hero.ctaSecondary is required')
  assert(isString(home.hero.ctaSecondary.label), 'home.hero.ctaSecondary.label is required')
  assert(isString(home.hero.ctaSecondary.href), 'home.hero.ctaSecondary.href is required')
}

const validatePackages = () => {
  const packages = readJson('packages.json')
  assert(Array.isArray(packages.packages), 'packages.packages must be an array')
  for (const p of packages.packages) {
    assert(isString(p.name), 'packages[].name is required')
    assert(isString(p.price), 'packages[].price is required')
    assert(isString(p.timeline), 'packages[].timeline is required')
    assert(isString(p.description), 'packages[].description is required')
    assert(Array.isArray(p.features), 'packages[].features must be an array')
    for (const f of p.features) {
      assert(isString(f), 'packages[].features[] must be string')
    }
    assert(isString(p.outcome), 'packages[].outcome is required')
  }
}

const validateFaq = () => {
  const faq = readJson('faq.json')
  assert(Array.isArray(faq.items), 'faq.items must be an array')
  for (const item of faq.items) {
    assert(isString(item.q), 'faq.items[].q is required')
    assert(isString(item.a), 'faq.items[].a is required')
  }
}

const validateCoreValues = () => {
  const cv = readJson('coreValues.json')
  assert(Array.isArray(cv.values), 'coreValues.values must be an array')
  for (const v of cv.values) {
    assert(isString(v.title), 'coreValues.values[].title is required')
    assert(isString(v.body), 'coreValues.values[].body is required')
    assert(isString(v.bg), 'coreValues.values[].bg is required')
    assert(isString(v.text), 'coreValues.values[].text is required')
  }
}

const validateProcess = () => {
  const p = readJson('process.json')
  assert(isString(p.heading), 'process.heading is required')
  assert(isString(p.intro), 'process.intro is required')
  assert(Array.isArray(p.steps), 'process.steps must be an array')
  for (const s of p.steps) {
    assert(isString(s.number), 'process.steps[].number is required')
    assert(isString(s.title), 'process.steps[].title is required')
    assert(isString(s.description), 'process.steps[].description is required')
    assert(isString(s.image), 'process.steps[].image is required')
    assert(s.image.startsWith('/images/'), 'process.steps[].image must be under /images/')
  }
}

try {
  validateSite()
  validateHome()
  validatePackages()
  validateFaq()
  validateCoreValues()
  validateProcess()
  // Content validation passed - no console output needed
} catch (e) {
  console.error(`Content validation failed: ${e.message}`)
  process.exit(1)
}
