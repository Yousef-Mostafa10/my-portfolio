'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a
            href="#home"
            className={styles.logo}
            onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
          >
            <span className={styles.logoMark}>YM</span>
            <span className={styles.logoDot} />
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map(link => (
              <button
                key={link.href}
                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                onClick={() => handleNavClick(link.href)}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className={styles.navUnderline} />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className={styles.navCta}
            onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  className={`${styles.mobileNavLink} ${activeSection === link.href.slice(1) ? styles.mobileActive : ''}`}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <span className={styles.mobileNavNum}>0{i + 1}.</span>
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                href="/cv/yousef-cv.pdf"
                download
                className={`${styles.mobileNavCta} btn-primary`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Download CV
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
