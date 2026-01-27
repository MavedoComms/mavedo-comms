import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import faqData from '../content/faq.json'

const faqItems = faqData.items

export default function FAQ() {
  return (
    <motion.section
      className="faq-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="faq-grid">
        <div className="faq-intro">
          <h2 className="font-heading">FAQs</h2>
          <p>
            Quick answers to the questions we hear most often from founders and small teams working with us.
          </p>
          <div className="faq-cta">
            <Link to="/contact#contact" className="btn btn-primary">
              Still have questions?
            </Link>
          </div>
        </div>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="faq-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <details>
                <summary className="faq-question">{item.q}</summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
