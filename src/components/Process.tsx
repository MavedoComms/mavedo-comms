import { motion } from 'framer-motion'
import processData from '../content/process.json'

export default function Process() {
  const steps = processData.steps

  return (
    <motion.section className="process-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
      <div className="container">
        <div className="process-header">
        <h2 className="font-heading">{processData.heading}</h2>
        <p className="section-intro">
          {processData.intro}
        </p>
      </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-image-container">
                <img 
                  src={step.image} 
                  alt={`${step.title} process illustration`} 
                  className="step-image"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
