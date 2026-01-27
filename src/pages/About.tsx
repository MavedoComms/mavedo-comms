import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import coreValuesData from '../content/coreValues.json';

function isDarkBg(hex: string): boolean {
  const h = (hex || '').replace('#', '');
  if (h.length !== 6) return false;
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 0.4;
}

export default function About() {
  return (
    <motion.main className="container about-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <section className="section about-intro">
        <h1 className="font-heading heading-accent">Why Mavedo Exists</h1>
        <p className="lead">
          We started Mavedo Communications to bridge the gap between early-stage
          businesses and premium creative services in Namibia. Our mission is to
          make branding and marketing accessible, effective, and empowering for
          startups and small organizations.
        </p>
      </section>

      <section className="section about-values-section">
        <h2>Core Values</h2>
        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {coreValuesData.values.map((item) => {
            const forceWhite =
              item.title === 'Clarity Over Complexity' ||
              item.title === 'Accessibility & Inclusion' ||
              item.title === 'Collaboration, Not Just Service Delivery';
            const useWhiteText = forceWhite || isDarkBg(item.bg) || item.text === '#FFFFFF';
            const headingColor = useWhiteText ? '#FFFFFF' : (item.text || '#1B1B1B');
            const bodyColor = useWhiteText ? 'rgba(255, 255, 255, 0.9)' : (item.text || '#1B1B1B');
            return (
              <div key={item.title} className="value-cube" style={{
                backgroundColor: item.bg,
                color: useWhiteText ? '#FFFFFF' : (item.text || '#1B1B1B'),
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transform: 'perspective(1000px) rotateX(5deg)',
                transition: 'transform 0.3s ease'
              }}>
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', color: headingColor }}>{item.title}</h3>
                <p style={{ margin: 0, lineHeight: '1.3', color: bodyColor }}>{item.body}</p>
              </div>
            );
          })}
        </div>
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
                View Services &amp; Rates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
