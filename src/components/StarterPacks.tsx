import { motion } from 'framer-motion';

export default function StarterPacks() {
  return (
    <motion.section 
        id="starter-packs" 
        className="starter-packs-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
      <div className="container">
        <div className="pricing-header-wrapper">
          <motion.div 
            className="section-header" 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.45 }}
          >
            <h2>Simple. Transparent. Scalable.</h2>
            <p className="section-intro">
              Packages and plans to get you launched without surprises.
            </p>
          </motion.div>
          <motion.div 
            className="pricing-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/images/pricing.avif" 
              alt="Transparent pricing packages for startups" 
              className="pricing-image"
            />
          </motion.div>
        </div>

        <div className="packages-grid">
          <motion.div
            className="package-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="package-header">
              <h3>Basic Website Design</h3>
            </div>
            <div className="package-price">
              <span className="price">N$ 2k – 5k</span>
            </div>
            <div className="package-features">
              <ul>
                <li>A clean, starter website that gets you online.</li>
              </ul>
            </div>
            <div className="package-outcome">
              <p><strong>Outcome:</strong> A simple, professional website that gives your brand a credible online home.</p>
            </div>
            <div className="package-cta">
              <a href="/contact#contact" className="btn btn-primary">
                Request this service
              </a>
            </div>
          </motion.div>

          <motion.div
            className="package-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="package-header">
              <h3>Social Media Management</h3>
            </div>
            <div className="package-price">
              <span className="price">
                <span className="price-amount">N$ 1,5k</span>
                <span className="price-unit">/mo</span>
              </span>
            </div>
            <div className="package-features">
              <ul>
                <li>Posting &amp; scheduling across your main platforms.</li>
                <li>Light community monitoring and caption writing.</li>
                <li>Monthly content calendar planned with your goals in mind.</li>
              </ul>
            </div>
            <div className="package-outcome">
              <p><strong>Outcome:</strong> Consistent, on-brand social presence that keeps your audience engaged every month.</p>
            </div>
            <div className="package-cta">
              <a href="/contact#contact" className="btn btn-primary">
                Request this service
              </a>
            </div>
          </motion.div>

          <motion.div
            className="package-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div className="package-header">
              <h3>
                Content
                <br />
                Creation
              </h3>
            </div>
            <div className="package-price">
              <span className="price">
                <span className="price-amount">N$ 1k – 3k</span>
                <span className="price-unit">/mo</span>
              </span>
            </div>
            <div className="package-features">
              <ul>
                <li>Branded graphics for feeds, stories and campaigns.</li>
                <li>Short-form Reels to keep your brand visible and relevant.</li>
              </ul>
            </div>
            <div className="package-outcome">
              <p><strong>Outcome:</strong> High-quality visuals and video content that keeps your brand looking fresh and professional.</p>
            </div>
            <div className="package-cta">
              <a href="/contact#contact" className="btn btn-primary">
                Request this service
              </a>
            </div>
          </motion.div>
        </div>

        <div className="packages-footer" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="/services"
            className="btn btn-primary"
          >
            See all packages
          </a>
        </div>
      </div>
    </motion.section>
  );
}
