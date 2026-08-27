'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiChevronDown, FiArrowDown, FiMapPin
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '@/lib/data';
import styles from './Hero.module.css';

const { personal } = portfolioData;

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, texts]);

  return (
    <span className={styles.typewriter}>
      {displayed}
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}

const socialLinks = [
  { href: personal.github, icon: <FiGithub />, label: 'GitHub', id: 'hero-github' },
  { href: personal.linkedin, icon: <FiLinkedin />, label: 'LinkedIn', id: 'hero-linkedin' },
  { href: `mailto:${personal.email}`, icon: <FiMail />, label: 'Email', id: 'hero-email' },
  { href: `https://wa.me/${personal.phone.replace(/\D/g, '')}`, icon: <FaWhatsapp />, label: 'WhatsApp', id: 'hero-whatsapp' },
];

export default function Hero() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      {/* Animated background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gridLines} />
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.stars} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Availability badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>{personal.availability}</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className={styles.headingWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>{personal.name}</h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          className={styles.roleWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className={styles.rolePrefix}>I build → </span>
          <TypewriterText texts={personal.roles} />
        </motion.div>

        {/* Bio */}
        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          Flutter Developer from <span className={styles.locationTag}><FiMapPin size={14} style={{ display: 'inline', marginBottom: '-2px' }} /> Alexandria</span> — building
          high-performance mobile experiences with <span className={styles.highlight}>Clean Architecture</span> and
          a passion for <span className={styles.highlight}>beautiful UI</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#projects"
            id="hero-view-work"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View My Work
            <FiArrowRight />
          </a>
          <a
            href={personal.cvUrl}
            id="hero-download-cv"
            download
            className="btn-glass"
            aria-label="Download CV"
          >
            <FiDownload />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className={styles.socialRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          aria-label="Social media links"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
            >
              {link.icon}
            </motion.a>
          ))}

          <div className={styles.socialDivider} aria-hidden="true" />
          <span className={styles.locationBadge}><FiMapPin size={12} style={{ display: 'inline', marginBottom: '-1px' }} /> {personal.location}</span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {[
            { value: '5+', label: 'Projects' },
            { value: '1+', label: 'Year Exp.' },
            { value: '#2', label: 'Class Rank' },
            { value: '94.3%', label: 'GPA' },
          ].map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}
