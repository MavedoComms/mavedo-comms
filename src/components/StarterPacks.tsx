import { motion } from 'framer-motion';
import ContactForm from "./ContactForm";
import { useState } from "react";
import { CONTACT } from "../config";
import { createWhatsAppLink } from "../utils/whatsapp";
import packagesData from "../content/packages.json";

export default function StarterPacks() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = packagesData.packages;

  const handleGetStarted = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  const handleCloseForm = () => {
    setSelectedPackage(null);
  };

  return (
    <>
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
              <p className="section-intro">Three offerings designed to meet you where you are.</p>
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
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                className={`package-card ${pkg.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="timeline">{pkg.timeline} delivery</span>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                </div>
                
                <div className="package-features">
                  <ul className="brand-bullets">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="package-outcome">
                  <p><strong>Outcome:</strong> {pkg.outcome}</p>
                </div>
                
                <div className="package-cta">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleGetStarted(pkg.name)}
                  >
                    {pkg.name === 'Website Development' ? 'Start Your Website' : pkg.name === 'Social Media Management' ? 'Build Your Socials' : 'Request a Service'}
                  </button>
                  {CONTACT.whatsapp && (
                    <a
                      className="btn btn-outline-primary"
                      href={createWhatsAppLink({ package: pkg.name, utm_campaign: 'starter_packs' })}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="packages-footer" style={{ textAlign: 'center', backgroundColor: '#F5F5F5', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <h3 className="packages-footer-heading" style={{ fontWeight: 900, fontSize: '1.5rem', color: '#002642', letterSpacing: '0.02em', marginBottom: '1.5rem', fontFamily: 'Unbounded, sans-serif' }}>
              All Packages Include...
            </h3>
            <ul className="packages-checklist" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left' }}>
              <li className="packages-checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#002642', marginBottom: '12px' }}>
                <span className="packages-checkbox" aria-hidden="true">✓</span>
                Project kickoff call
              </li>
              <li className="packages-checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#002642', marginBottom: '12px' }}>
                <span className="packages-checkbox" aria-hidden="true">✓</span>
                Regular updates
              </li>
              <li className="packages-checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#002642', marginBottom: '12px' }}>
                <span className="packages-checkbox" aria-hidden="true">✓</span>
                Final file delivery
              </li>
              <li className="packages-checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#002642' }}>
                <span className="packages-checkbox" aria-hidden="true">✓</span>
                30-day support period
              </li>
            </ul>
            <div className="packages-footer-cta" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#002642', fontWeight: 600, marginBottom: '0.75rem' }}>Need something custom?</p>
              <a
                href="/contact#contact"
                className="packages-footer-cta-button"
                style={{
                  backgroundColor: '#E59500',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: 600,
                  display: 'inline-block',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 300ms ease-in-out',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#840032'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E59500'; }}
              >
                Let’s Discuss Your Needs
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {selectedPackage && (
        <div className="modal-overlay" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Get Started with {selectedPackage}</h3>
              <button className="modal-close" onClick={handleCloseForm}>×</button>
            </div>
            <div className="modal-body">
              <ContactForm selectedPackage={selectedPackage} showImage={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
