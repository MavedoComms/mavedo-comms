import { motion } from 'framer-motion';

export default function Contact() {

  return (
    <motion.main
      className="container"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <section id="contact" className="section">
        {/* Preserve old anchor for existing links */}
        <div id="quick-contact" style={{ height: 0 }} aria-hidden="true"></div>
        <h1>Contact</h1>
        <p className="lead">
          Please fill out the form below and we'll get back to you within one business day.
        </p>

        <div style={{ width: '100%', maxWidth: '800px', margin: '2rem 0' }}>
          <iframe
            title="Contact Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSejtLVkEikPKdDECN_hFLNEMfe1hQZkmRJBAq13adXdB8ziqg/viewform?embedded=true"
            width="640"
            height="2019"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ width: '100%', height: '2019px' }}
          >
            Loading…
          </iframe>
        </div>
      </section>
    </motion.main>
  );
}
