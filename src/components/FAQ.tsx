import { motion } from 'framer-motion'
import faqData from '../content/faq.json'

const faqItems = faqData.items

export default function FAQ() {
  return (
    <motion.section className="faq-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="faq-item faq-container faq-cut-mask"
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
