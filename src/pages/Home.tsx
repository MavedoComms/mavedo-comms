import StarterPacks from '../components/StarterPacks';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import { motion, easeIn, easeOut } from 'framer-motion';
import homeData from '../content/home.json';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: easeIn } }
};

export default function Home() {
  return (
    <motion.main className="container" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
  <section className="hero hero-gradient section corner-texture image-bg top-right pattern-animated pattern-right" style={{ padding: '4rem 0' }}>
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
        <p className="section-intro">Our Services</p>
        <h2 className="font-heading">How We Help You Stand Out</h2>
        <div className="services-grid gap-y-10" style={{ perspective: '1000px' }}>
          <div className="service-card-flip">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true"></div>
                <h3 className="font-heading">Brand Identity</h3>
              </div>
              <div className="service-card-back">
                <p>Logos, colors, typography, and visual systems that build trust and recognition for your brand.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div className="service-card-flip">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true"></div>
                <h3 className="font-heading">Website Design</h3>
              </div>
              <div className="service-card-back">
                <p>Responsive websites built for clarity, conversion, and easy editing that drive results.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div className="service-card-flip">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true"></div>
                <h3 className="font-heading">Graphic Design</h3>
              </div>
              <div className="service-card-back">
                <p>Marketing collateral, pitch decks, and social templates that perform and engage.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div className="service-card-flip">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true"></div>
                <h3 className="font-heading">Social Media Management</h3>
              </div>
              <div className="service-card-back">
                <p>Content planning, posting, and analytics to grow your audience and build community.</p>
                <div className="service-accent-border"></div>
              </div>
            </div>
          </div>
          <div className="service-card-flip">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon" aria-hidden="true"></div>
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

      <section id="starter-packs" className="starter-packs-section section pattern-border-top light-bg pattern-animated pattern-right">
        <StarterPacks />
        <FAQ />
      </section>

      <section className="final-cta section">
        <p>
          Growing a business is better with support. Let’s align your brand, digital presence, and communication.
        </p>
        <Link to="/contact#quick-contact" className="btn btn-primary">Start a Project</Link>
      </section>
    </motion.main>
  );
}
