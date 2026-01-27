import StarterPacks from '../components/StarterPacks';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { motion, easeIn, easeOut } from 'framer-motion';
import { useState } from 'react';
import homeData from '../content/home.json';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: easeIn } }
};

export default function Home() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  return (
    <motion.main className="container" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
  <section className="hero hero-gradient section">
        <div className="hero-content">
          <h1 className="font-heading heading-accent">{homeData.hero.title}</h1>
          <motion.p className="hero-subheading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {homeData.hero.subtitle}
          </motion.p>
          <div className="hero-actions">
            <Link to={homeData.hero.ctaPrimary.href} className="btn btn-primary">{homeData.hero.ctaPrimary.label}</Link>
            <Link to={homeData.hero.ctaSecondary.href} className="btn btn-outline-primary">{homeData.hero.ctaSecondary.label}</Link>
          </div>
          <div className="hero-proof">
            <p className="proof-text">
              Delivering outcomes across fintech, education, and professional services.
              <span className="highlight-text"> Ship fast, learn faster.</span>
            </p>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src={homeData.hero.image} 
            alt="Team collaborating on creative projects" 
            className="hero-image"
          />
        </div>
      </section>

      <section className="section what-we-build py-20">
        <header className="what-we-build-header">
          <p className="what-we-build-label">Our Services</p>
          <h2 className="font-heading">How We Help You Stand Out</h2>
        </header>
        <div className="services-grid gap-y-10" style={{ perspective: '1000px' }}>
          <div
            className={`service-card-flip ${flippedIndex === 0 ? 'flipped' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flippedIndex === 0}
            aria-label="Brand Identity – tap to flip"
            onClick={() => setFlippedIndex(flippedIndex === 0 ? null : 0)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlippedIndex(flippedIndex === 0 ? null : 0); } }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/></svg>
                </div>
                <h3 className="font-heading">Brand Identity</h3>
              </div>
              <div className="service-card-back">
                <p>Logos, colors, typography, and visual systems that build trust and recognition for your brand.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div
            className={`service-card-flip ${flippedIndex === 1 ? 'flipped' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flippedIndex === 1}
            aria-label="Website Design – tap to flip"
            onClick={() => setFlippedIndex(flippedIndex === 1 ? null : 1)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlippedIndex(flippedIndex === 1 ? null : 1); } }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="font-heading">Website Design</h3>
              </div>
              <div className="service-card-back">
                <p>Responsive websites built for clarity, conversion, and easy editing that drive results.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div
            className={`service-card-flip ${flippedIndex === 2 ? 'flipped' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flippedIndex === 2}
            aria-label="Graphic Design – tap to flip"
            onClick={() => setFlippedIndex(flippedIndex === 2 ? null : 2)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlippedIndex(flippedIndex === 2 ? null : 2); } }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <h3 className="font-heading">Graphic Design</h3>
              </div>
              <div className="service-card-back">
                <p>Marketing collateral, pitch decks, and social templates that perform and engage.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div
            className={`service-card-flip ${flippedIndex === 3 ? 'flipped' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flippedIndex === 3}
            aria-label="Social Media Management – tap to flip"
            onClick={() => setFlippedIndex(flippedIndex === 3 ? null : 3)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlippedIndex(flippedIndex === 3 ? null : 3); } }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="M15.41 6.51l-6.82 3.98"/></svg>
                </div>
                <h3 className="font-heading">Social Media Management</h3>
              </div>
              <div className="service-card-back">
                <p>Content planning, posting, and analytics to grow your audience and build community.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div
            className={`service-card-flip ${flippedIndex === 4 ? 'flipped' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={flippedIndex === 4}
            aria-label="Marketing Strategy & Campaigns – tap to flip"
            onClick={() => setFlippedIndex(flippedIndex === 4 ? null : 4)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlippedIndex(flippedIndex === 4 ? null : 4); } }}
          >
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="font-heading">Marketing Strategy & Campaigns</h3>
              </div>
              <div className="service-card-back">
                <p>Campaign planning, messaging, and measurement aligned to business goals and growth.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/contact#contact" className="btn btn-primary">Start a Project</Link>
        </div>
      </section>

      <Process />

      <section id="starter-packs" className="starter-packs-section section">
        <StarterPacks />
        <FAQ />
      </section>

      <section className="final-cta section">
        <div className="final-cta-grid">
          <div className="final-cta-image">
            <img
              src="/images/contact_section.jpg"
              alt="Founder talking through brand and website plans"
              className="final-cta-img-el"
            />
          </div>
          <div className="final-cta-content">
            <h2 className="font-heading">Ready to give your brand a proper launch?</h2>
            <p>
              Whether you need a clean website, social presence, or full brand system, we help you ship quickly
              without sacrificing quality.
            </p>
            <div className="final-cta-actions">
              <Link to="/contact#contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/services" className="btn btn-outline-primary">
                View Services & Rates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
