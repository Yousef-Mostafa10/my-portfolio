'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiMapPin, FiTarget, FiAward, FiGlobe,
  FiCpu, FiLayers, FiSmartphone, FiStar, FiBookOpen,
} from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import styles from './About.module.css';

const { personal, stats, funFacts } = portfolioData;

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.span
      ref={ref}
      className={styles.counterValue}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className={`section ${styles.about}`} aria-label="About section">
      <div className="orb orb-1" aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {/* Left — Bio & Vision */}
          <motion.div
            className={styles.bioCol}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile badge */}
            <div className={styles.profileBadge}>
              <div className={styles.profileAvatar} aria-label="Yousef Mostafa Ahmed">
                <span className={styles.avatarInitials}>YM</span>
                <div className={styles.avatarRing} />
                <div className={styles.avatarRing2} />
              </div>
              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>{personal.name}</h3>
                <p className={styles.profileRole}>Flutter Developer</p>
                <span className={styles.profileLocation}><FiMapPin size={13} /> {personal.location}</span>
              </div>
            </div>

            {/* Bio card */}
            <div className={`glass-card ${styles.bioCard}`}>
              <p className={styles.bioText}>{personal.bio}</p>
            </div>

            {/* Vision card */}
            <div className={`glass-card ${styles.visionCard}`}>
              <div className={styles.visionIcon}><FiTarget size={20} /></div>
              <div>
                <h4 className={styles.visionTitle}>My Vision</h4>
                <p className={styles.visionText}>{personal.vision}</p>
              </div>
            </div>

            {/* Award */}
            <div className={`glass-card ${styles.awardCard}`}>
              <span className={styles.awardIcon}><FiAward size={22} /></span>
              <div>
                <p className={styles.awardTitle}>1st Place — Science Students&apos; Innovation Forum</p>
                <p className={styles.awardOrg}>Delta Region Universities Alliance</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats & Fun Facts */}
          <div className={styles.rightCol}>
            {/* Stats Grid */}
            <motion.div
              ref={ref}
              className={styles.statsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className={`glass-card ${styles.statCard}`}
                  variants={itemVariants}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className={styles.funFacts}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={styles.funFactsTitle}>
                <span className={styles.funFactsTag}>// </span>
                Fun Facts
              </h3>
              <div className={styles.factsList}>
                {funFacts.map((fact, i) => {
                  const FactIcons = [FiCpu, FiLayers, FiSmartphone, FiAward, FiBookOpen];
                  const FactIcon = FactIcons[i % FactIcons.length];
                  return (
                    <motion.div
                      key={i}
                      className={`glass-card ${styles.factCard}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <span className={styles.factIcon}><FactIcon size={16} /></span>
                      <span className={styles.factText}>{fact.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Language Proficiency */}
            <motion.div
              className={`glass-card ${styles.languagesCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className={styles.langTitle}><FiGlobe size={15} /> Languages</h4>
              {portfolioData.languages.map((lang) => (
                <div key={lang.name} className={styles.langRow}>
                  <div className={styles.langInfo}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langLevel}>{lang.level}</span>
                  </div>
                  <div className={styles.langBar}>
                    <motion.div
                      className={styles.langFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
