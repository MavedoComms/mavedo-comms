import { motion } from 'framer-motion'
import testimonialsData from '../content/testimonials.json'

type Testimonial = { quote: string; author: string; metric?: string };
const testimonials: Testimonial[] = testimonialsData.items

export default function Testimonials() {
  return (
    <motion.section className="testimonials-section corner-texture light-bg top-right pattern-animated pattern-right" id="testimonials" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <div className="container">
        <div className="testimonials-header">
          <h2 className="heading-accent">{testimonialsData.heading}</h2>
          <p className="section-intro">
            {testimonialsData.intro}
          </p>
        </div>

        <div className="testimonials-media">
          <div className="testimonial-image-container primary corner-texture image-bg bottom-left pattern-animated pattern-right">
            <img
              src={testimonialsData.primaryImage}
              alt="Happy clients collaborating in a modern workspace"
              className="testimonial-image"
            />
          </div>
          <div className="testimonial-image-container secondary">
            <img
              src={testimonialsData.secondaryImage}
              alt="Founder smiling after successful launch"
              className="testimonial-image"
            />
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <motion.article
              className="testimonial-card"
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-author">— {t.author}</p>
              {t.metric && <p className="testimonial-metric">{t.metric}</p>}
            </motion.article>
          ))}
        </div>

        <div className="packages-footer">
          <p>Want results like these for your brand?</p>
          <a className="btn" href="/contact#quick-contact">Book a free 15‑min call</a>
        </div>
      </div>
    </motion.section>
  )
}
