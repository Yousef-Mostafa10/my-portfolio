'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';
import styles from './Footer.module.css';

const { personal } = portfolioData;

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: personal.github, icon: <FiGithub size={18} />, label: 'GitHub', id: 'footer-github' },
  { href: personal.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn', id: 'footer-linkedin' },
  { href: `mailto:${personal.email}`, icon: <FiMail size={18} />, label: 'Email', id: 'footer-email' },
  { href: `https://wa.me/${personal.phone.replace(/\D/g, '')}`, icon: <FaWhatsapp size={18} />, label: 'WhatsApp', id: 'footer-whatsapp' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.topBorder} />

      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoMark}>YM<span className={styles.dot} /></div>
            <p className={styles.tagline}>
              Flutter Developer · Building mobile experiences from Alexandria, Egypt 🇪🇬
            </p>
            <div className={styles.socialRow}>
              {socialLinks.map(link => (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  className={styles.footerNavLink}
                  onClick={() => handleNavClick(link.href)}
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactList}>
              <a href={`mailto:${personal.email}`} className={styles.contactItem}>
                <FiMail size={14} />
                {personal.email}
              </a>
              <a href={`https://wa.me/${personal.phone.replace(/\D/g, '')}`} className={styles.contactItem} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={14} />
                {personal.phone}
              </a>
              <span className={styles.contactItem}>
                📍 {personal.location}
              </span>
            </div>

            <a
              href={personal.cvUrl}
              download
              id="footer-cv"
              className={`btn-glass ${styles.cvBtn}`}
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Yousef Mostafa Ahmed. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <FiHeart className={styles.heartIcon} aria-label="love" /> using Next.js & Flutter passion
          </p>
        </div>
      </div>
    </footer>
  );
}
