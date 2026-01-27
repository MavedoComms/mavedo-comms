import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServicesRates() {
  return (
    <motion.main
      className="container"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <section className="section services-rates-header">
        <h1 className="font-heading heading-accent">Services &amp; Rates</h1>
        <p>
          Transparent, simple pricing built for founders and small teams. Start with what you need now,
          and scale as your brand grows.
        </p>
      </section>

      <section id="pricing-services" className="pricing-cards-section">
        <div className="pricing-cards-grid">
            <div className="pricing-service-card">
              <div className="pricing-service-card-image-wrap">
                <img
                  src="/images/service-1.jpg"
                  alt="Basic Website Design"
                />
              </div>
              <h3 className="pricing-service-card-heading font-heading">Basic Website Design</h3>
              <p className="pricing-service-card-desc">
                A once-off fee for a clean, starter website that gets you online. N$ 2k – 5k once-off.
              </p>
              <div className="pricing-service-card-actions">
                <Link to="/contact#contact" className="pricing-service-card-btn" title="Request this service">
                  Request this service
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="pricing-service-card">
              <div className="pricing-service-card-image-wrap">
                <img
                  src="/images/service-2.jpg"
                  alt="Social Media Management"
                />
              </div>
              <h3 className="pricing-service-card-heading font-heading">Social Media Management</h3>
              <p className="pricing-service-card-desc">
                Posting &amp; scheduling, light community monitoring, caption writing, and a monthly content calendar. N$ 1,5k / mo.
              </p>
              <div className="pricing-service-card-actions">
                <Link to="/contact#contact" className="pricing-service-card-btn" title="Request this service">
                  Request this service
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="pricing-service-card">
              <div className="pricing-service-card-image-wrap">
                <img
                  src="/images/service-3.jpg"
                  alt="Content Creation"
                />
              </div>
              <h3 className="pricing-service-card-heading font-heading">Content Creation (Graphics + Reels)</h3>
              <ul className="pricing-service-card-list">
                <li>N$ 1,000 – 5 static posts / carousels per month</li>
                <li>N$ 1,500 – 1× reel + 5 static posts</li>
                <li>N$ 2,000 – 2× reels + 4 static</li>
                <li>N$ 3,000 – 4× reels + 6 static posts per month</li>
              </ul>
              <div className="pricing-service-card-actions">
                <Link to="/contact#contact" className="pricing-service-card-btn" title="Request this service">
                  Request this service
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="pricing-service-card">
              <div className="pricing-service-card-image-wrap">
                <img
                  src="/images/service-4.jpg"
                  alt="Full-service Social Media Packages"
                />
              </div>
              <h3 className="pricing-service-card-heading font-heading">Full-service Social Media Packages</h3>
              <ul className="pricing-service-card-list">
                <li>Package A: N$ 3,000 / mo — two graphics per week + N$ 100 boosting</li>
                <li>Package B: N$ 2,500 / mo</li>
                <li>Package C: N$ 1,000 / mo</li>
                <li>Package D: N$ 1,500 / mo — one graphic per week + N$ 100 boosting</li>
              </ul>
              <div className="pricing-service-card-actions">
                <Link to="/contact#contact" className="pricing-service-card-btn" title="Request this service">
                  Request this service
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
      </section>
    </motion.main>
  );
}
