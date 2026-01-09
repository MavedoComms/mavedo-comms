import { CONTACT, BRAND } from "../config";
import { createWhatsAppLink } from "../utils/whatsapp";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, #002642 0%, #002642 34%, #E59500 35%, #E59500 66%, #1B1B1B 67%, #1B1B1B 100%)',
        color: '#FFFFFF'
      }}
    >
      {/* Top Accent Bar */}
      <div className="footer-accent-bar" style={{ backgroundColor: '#E59500' }}>
        <div className="container footer-accent-content">
          <img src="/Logo icon - 1 (1).svg" alt="MAVEDO logo" className="footer-accent-logo" />
        </div>
      </div>
      
      {/* Visual separator */}
      <div className="footer-separator" aria-hidden="true"></div>
      
      {/* Main Footer Area */}
      <div className="footer-main" style={{ backgroundColor: '#E59500', color: '#002642' }}>
        <div className="container footer-content">
          {/* Column 1: Brand */}
          <div className="footer-column footer-brand">
            <h3 className="footer-heading font-heading" style={{ color: '#002642' }}>{BRAND.name}</h3>
            <p className="footer-tagline" style={{ color: '#002642' }}>{BRAND.tagline}</p>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="footer-column footer-nav">
            <h4 className="footer-heading font-heading" style={{ color: '#002642' }}>Quick Links</h4>
            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Pricing</Link>
              {/* <Link to="/portfolio">Portfolio</Link> */}
              <Link to="/contact">Contact</Link>
              <a href="/admin" target="_blank" rel="noopener noreferrer">Admin</a>
            </nav>
          </div>
          
          {/* Column 3: Contact */}
          <div className="footer-column footer-contact">
            <h4 className="footer-heading font-heading" style={{ color: '#002642' }}>Contact</h4>
            <address className="footer-address">
              <p style={{ color: '#002642' }}>{CONTACT.location}</p>
              
              <div className="footer-contact-links">
                {CONTACT.email && (
                  <a href={`mailto:${CONTACT.email}`} className="footer-contact-link">
                    <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>Email</span>
                  </a>
                )}
                
                {CONTACT.whatsapp && (
                  <a
                    href={createWhatsAppLink({ utm_campaign: 'footer_whatsapp' })}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-contact-link"
                  >
                    <svg className="footer-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
              
              <h4 className="footer-heading font-heading" style={{ color: '#002642' }}>Follow Us</h4>
              <div className="footer-social">
                <a href="https://www.linkedin.com/company/mavedo-comms" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
                  <svg className="footer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a href="https://x.com/MavedoComms" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="X (Twitter)">
                  <svg className="footer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                
                <a href="https://www.facebook.com/people/Mavedo-Communications/61581663933468/#" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook">
                  <svg className="footer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/mavedocomms/" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                  <svg className="footer-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>
      
      {/* Copyright Row */}
      <div className="footer-copyright" style={{ backgroundColor: '#002642' }}>
        <div className="container">
          <p style={{ color: '#FFFFFF', textAlign: 'center' }}>© 2025 Mavedo Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
