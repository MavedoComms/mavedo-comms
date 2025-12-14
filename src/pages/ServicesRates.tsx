import { motion } from 'framer-motion';

export default function ServicesRates() {
  return (
    <motion.main className="container" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <section className="section">
        <h1>Services & Rates</h1>
        <p className="lead">
          Transparent, flexible packages designed for startups and small teams.
          Final quotes depend on scope — these are typical starting points.
        </p>
      </section>

      <section className="cards">
        <article className="card">
          <h3>Brand Starter</h3>
          <p>Logo, color system, basic brand guide</p>
          <div className="price">Starting at N$ 4,500</div>
        </article>
        <article className="card">
          <h3>Social Media Essentials</h3>
          <p>Content plan, 12 posts, templates</p>
          <div className="price">Starting at N$ 3,500 / month</div>
        </article>
        <article className="card">
          <h3>Website Launch</h3>
          <p>1–3 pages, mobile-first, basic SEO</p>
          <div className="price">Starting at N$ 6,500</div>
        </article>
        <article className="card">
          <h3>Lean Marketing Strategy</h3>
          <p>90-day plan, metrics, quick wins</p>
          <div className="price">Starting at N$ 5,000</div>
        </article>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.125rem', color: '#1B1B1B' }}>
          Need something custom? Let's tailor a package to your goals and budget.
        </p>
        <a 
          className="btn" 
          href="/contact" 
          style={{ 
            backgroundColor: '#E59500', 
            color: '#FFFFFF', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '0.5rem', 
            transition: 'all 300ms ease-in-out',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 600
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#002642';
            e.currentTarget.style.color = '#E59500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E59500';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Request Your Quote
        </a>
      </section>
    </motion.main>
  );
}
