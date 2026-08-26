'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAward } from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import styles from './Certificates.module.css';

const { certificates } = portfolioData;

export default function Certificates() {
  return (
    <section id="certificates" className={`section ${styles.certificates}`} aria-label="Certificates section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certificates</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Verified certifications from recognized institutions
          </p>
        </motion.div>

        <div className={styles.grid}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              className={`glass-card ${styles.certCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Certificate Preview */}
              <div className={styles.certPreview}>
                <div className={styles.certPlaceholder}>
                  <FiAward size={48} className={styles.certIcon} />
                  <p className={styles.certPreviewText}>Certificate Preview</p>
                </div>
                <div className={styles.certGlow} />
              </div>

              {/* Certificate Info */}
              <div className={styles.certBody}>
                <div className={styles.certBadge}>
                  <span className={styles.certBadgeDot} />
                  Verified
                </div>

                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDate}>{cert.date}</p>
                <p className={styles.certDesc}>{cert.description}</p>

                <div className={styles.certActions}>
                  {cert.downloadUrl ? (
                    <a
                      href={cert.downloadUrl}
                      download
                      className="btn-primary"
                      id={`cert-download-${cert.id}`}
                      aria-label={`Download ${cert.title} certificate`}
                    >
                      <FiDownload size={15} />
                      Download
                    </a>
                  ) : (
                    <span className={styles.comingSoon}>
                      📎 Certificate upload coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon placeholder */}
          <motion.div
            className={`glass-card ${styles.certCard} ${styles.comingSoonCard}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={styles.certPreview}>
              <div className={`${styles.certPlaceholder} ${styles.comingSoonPlaceholder}`}>
                <span className={styles.plusIcon}>+</span>
                <p className={styles.certPreviewText}>More coming soon</p>
              </div>
            </div>
            <div className={styles.certBody}>
              <h3 className={styles.certTitle} style={{ color: 'var(--text-muted)' }}>
                Future Certificates
              </h3>
              <p className={styles.certDesc}>
                More certifications in progress — check back soon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
