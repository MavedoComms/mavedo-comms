import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.main className="container" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
      <section className="section">
        <h1>Portfolio</h1>
        <p className="lead">
          Case studies and recent work coming soon. Request private samples if you’d like to see relevant projects.
        </p>
      </section>
    </motion.main>
  );
}