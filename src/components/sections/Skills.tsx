'use client';

import { motion } from 'framer-motion';
import { 
  FiCode, FiSmartphone, FiZap, FiDatabase, 
  FiGlobe, FiGitBranch, FiTool, FiLayers 
} from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import styles from './Skills.module.css';

const { skills } = portfolioData;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Languages': return <FiCode size={20} />;
    case 'Frameworks': return <FiSmartphone size={20} />;
    case 'State Management': return <FiZap size={20} />;
    case 'Databases': return <FiDatabase size={20} />;
    case 'APIs & Networking': return <FiGlobe size={20} />;
    case 'Version Control': return <FiGitBranch size={20} />;
    case 'Tools & IDEs': return <FiTool size={20} />;
    case 'Architecture & Concepts': return <FiLayers size={20} />;
    default: return <FiCode size={20} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Tools and technologies I use to build high-quality mobile experiences
          </p>
        </motion.div>

        <div className={styles.grid}>
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              className={`glass-card ${styles.categoryCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.06 }}
              whileHover={{ borderColor: 'rgba(0, 212, 255, 0.25)' }}
            >
              {/* Category Header */}
              <div className={styles.catHeader}>
                <span className={styles.catIcon}><CategoryIcon category={category.category} /></span>
                <h3 className={styles.catTitle}>{category.category}</h3>
                <span className={styles.catCount}>{category.items.length}</span>
              </div>

              {/* Skills */}
              <motion.div
                className={styles.skillsList}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className={styles.skillBadge}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Flutter highlight banner */}
        <motion.div
          className={styles.flutterBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.bannerContent}>
            <span className={styles.bannerIcon}><FiSmartphone size={32} /></span>
            <div>
              <h4 className={styles.bannerTitle}>Primary Expertise — Flutter & Dart</h4>
              <p className={styles.bannerDesc}>
                Building cross-platform iOS & Android applications with clean, scalable architecture and stunning UI.
              </p>
            </div>
          </div>
          <div className={styles.bannerBadges}>
            {['Flutter', 'Dart', 'Bloc', 'Clean Architecture', 'Firebase'].map(tag => (
              <span key={tag} className={`tech-badge ${styles.highlightBadge}`}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
