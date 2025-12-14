import { motion } from 'framer-motion';
import coreValuesData from '../content/coreValues.json';

export default function About() {
  return (
    <motion.main className="container about-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <section className="section">
        <h1>Why Mavedo Exists</h1>
        <p className="lead">
          We started Mavedo Communications to bridge the gap between early-stage
          businesses and premium creative services in Namibia. Our mission is to
          make branding and marketing accessible, effective, and empowering for
          startups and small organizations.
        </p>
      </section>

      <section className="section">
        <h2>Core Values</h2>
        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {coreValuesData.values.map((item) => {
            const isLightText = item.text === '#FFFFFF';
            const headingColor = isLightText ? '#FFFFFF' : item.text;
            const bodyColor = isLightText ? 'rgba(255, 255, 255, 0.9)' : item.text;
            return (
              <div key={item.title} className="value-cube" style={{
                backgroundColor: item.bg,
                color: item.text,
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
    </motion.main>
  );
}
