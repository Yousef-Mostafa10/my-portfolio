'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';
import styles from './Contact.module.css';

const { personal, social } = portfolioData;

const contactLinks = [
  {
    id: 'contact-email',
    icon: <FiMail size={20} />,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: '#00D4FF',
  },
  {
    id: 'contact-whatsapp',
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: personal.phone,
    href: social?.whatsapp || `https://wa.me/${personal.phone.replace(/\D/g, '')}`,
    color: '#25D366',
  },
  {
    id: 'contact-linkedin',
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'yousef-mostafa-flutter-developer',
    href: personal.linkedin,
    color: '#0077B5',
  },
  {
    id: 'contact-github',
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'Yousef-Mostafa10',
    href: personal.github,
    color: '#ffffff',
  },
];

type FormData = { name: string; email: string; subject: string; message: string };
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS or mailto fallback
    try {
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-label="Contact section">
      <div className="orb orb-1" aria-hidden="true" style={{ opacity: 0.4, left: '-100px', bottom: '-200px', top: 'auto' }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Available for freelance projects and full-time opportunities. Let&apos;s build something great.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left — Contact Info */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability badge */}
            <div className={styles.availBadge}>
              <span className={styles.availDot} />
              <span>{personal.availability}</span>
            </div>

            <h3 className={styles.infoTitle}>
              Have a project in mind?
            </h3>
            <p className={styles.infoDesc}>
              Whether you&apos;re looking to build a Flutter app from scratch, integrate Firebase,
              or need a senior developer to join your team — I&apos;d love to hear from you.
            </p>

            {/* Location */}
            <div className={styles.locationRow}>
              <FiMapPin size={16} className={styles.locationIcon} />
              <span>{personal.location}</span>
            </div>

            {/* Contact Links */}
            <div className={styles.contactLinks}>
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 6 }}
                >
                  <span className={styles.contactLinkIcon} style={{ color: link.color }}>
                    {link.icon}
                  </span>
                  <div className={styles.contactLinkInfo}>
                    <span className={styles.contactLinkLabel}>{link.label}</span>
                    <span className={styles.contactLinkValue}>{link.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick contact CTA */}
            <a
              href={social?.whatsapp || `https://wa.me/${personal.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-cta"
              className={`btn-primary ${styles.whatsappBtn}`}
            >
              <FaWhatsapp size={18} />
              Message on WhatsApp
            </a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <form
              className={`glass-card ${styles.form}`}
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <h4 className={styles.formTitle}>Send a Message</h4>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Doe"
                    required
                    aria-required="true"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>Your Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Flutter App Development"
                  required
                  aria-required="true"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'sending'}
                aria-label="Send message"
              >
                {status === 'sending' ? (
                  <span className={styles.spinner} />
                ) : (
                  <FiSend size={16} />
                )}
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.p
                  className={styles.successMsg}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheckCircle size={16} /> Message sent! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
