import { useState } from "react";
import { CONTACT } from "../config";

interface FormData {
  name: string;
  email: string;
  message: string;
  package?: string;
}

interface ContactFormProps {
  selectedPackage?: string;
  showImage?: boolean;
}

export default function ContactForm({ selectedPackage, showImage = true }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: selectedPackage ? `Hi! I'm interested in the ${selectedPackage} package. ` : "",
    package: selectedPackage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // For now, we'll create a mailto link with better formatting
      // In production, this would be replaced with a proper form service like Formspree, Netlify Forms, or custom backend
      const subject = formData.package 
        ? `Quote Request: ${formData.package}` 
        : "New Contact Form Submission";
      
      const body = `Name: ${formData.name}
Email: ${formData.email}
${formData.package ? `Package Interest: ${formData.package}` : ""}

Message:
${formData.message}

---
Sent from Mavedo Communications website`;

      const mailtoLink = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success message after a brief delay
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);

    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h3>Message Sent!</h3>
        <p>
          Your email client should have opened with your message. If not, please send us an email directly at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p>We'll get back to you within 24 hours.</p>
        <button 
          className="btn btn-secondary" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              message: selectedPackage ? `Hi! I'm interested in the ${selectedPackage} package. ` : "",
              package: selectedPackage
            });
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-section">
      {showImage && (
        <div className="contact-image-container">
          <img
            src="/images/contact_section.jpg"
            alt="Warm, welcoming consultation scene"
            className="contact-image"
          />
        </div>
      )}
      <form className="contact-form contact-form-wrapper" onSubmit={handleSubmit} autoComplete="off" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">Contact Us</h2>
        <div className="form-group">
          <label htmlFor="contact-name">Name *</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            autoComplete="off"
          />
        </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email *</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          autoComplete="off"
        />
      </div>

      {!selectedPackage && (
        <div className="form-group">
          <label htmlFor="contact-package">Interested in</label>
          <select
            id="contact-package"
            name="package"
            value={formData.package || ""}
            onChange={handleChange}
            autoComplete="off"
          >
            <option value="">Select a package (optional)</option>
            <option value="Brand Essentials">Brand Essentials - N$2,500</option>
            <option value="Digital Starter">Digital Starter - N$4,800</option>
            <option value="Growth Package">Growth Package - N$7,200</option>
            <option value="Custom Project">Custom Project</option>
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          rows={5}
          required
          autoComplete="off"
        />
      </div>

      {error && <div className="form-error">{error}</div>}

      <button 
        type="submit" 
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="form-note">
        * Required fields. We'll respond within 24 hours.
      </p>
      </form>
    </div>
  );
}
