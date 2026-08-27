'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiAward, FiBook } from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import styles from './Experience.module.css';

const { experience, education, awards } = portfolioData;

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`} aria-label="Experience section">
      <div className="orb orb-2" aria-hidden="true" style={{ opacity: 0.5 }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {/* Experience Column */}
          <div className={styles.column}>
            <motion.h3
              className={styles.colTitle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.colIcon}><FiBriefcase size={24} /></span>
              Work & Training
            </motion.h3>

            <div className={styles.timeline}>
              {experience.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.timelineDot}>
                    <div className={styles.dotInner} />
                    <div className={styles.dotRing} />
                  </div>
                  <div className={styles.timelineLine} />

                  <div className={`glass-card ${styles.timelineCard}`}>
                    <div className={styles.cardTop}>
                      <div>
                        <span className={styles.cardType}>{item.type}</span>
                        <h4 className={styles.cardRole}>{item.role}</h4>
                        <p className={styles.cardCompany}>{item.company}</p>
                      </div>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardPeriod}>{item.period}</span>
                        <span className={styles.cardLocation}><FiMapPin size={12} /> {item.location}</span>
                      </div>
                    </div>

                    <p className={styles.cardDesc}>{item.description}</p>

                    <ul className={styles.highlights}>
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className={styles.highlightItem}>
                          <span className={styles.bullet}>▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.techRow}>
                      {item.tech.map(t => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Awards Column */}
          <div className={styles.column}>
            {/* Education */}
            <motion.h3
              className={styles.colTitle}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.colIcon}><FiBook size={24} /></span>
              Education
            </motion.h3>

            <div className={styles.timeline}>
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.timelineDot}>
                    <div className={`${styles.dotInner} ${styles.dotBlue}`} />
                    <div className={styles.dotRing} />
                  </div>
                  <div className={styles.timelineLine} />

                  <div className={`glass-card ${styles.timelineCard}`}>
                    <div className={styles.cardTop}>
                      <div>
                        <span className={`${styles.cardType} ${styles.typeEdu}`}>University</span>
                        <h4 className={styles.cardRole}>{item.degree}</h4>
                        <p className={styles.cardCompany}>{item.institution}</p>
                      </div>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardPeriod}>{item.period}</span>
                        <span className={styles.cardLocation}><FiMapPin size={12} /> {item.location}</span>
                      </div>
                    </div>

                    <div className={styles.gpaRow}>
                      <div className={styles.gpaItem}>
                        <span className={styles.gpaValue}>{item.gpa}</span>
                        <span className={styles.gpaLabel}>GPA</span>
                      </div>
                      <div className={styles.gpaDivider} />
                      <div className={styles.gpaItem}>
                        <span className={styles.gpaValue}>{item.rank}</span>
                        <span className={styles.gpaLabel}>Achievement</span>
                      </div>
                    </div>

                    <span className={styles.honorBadge}><FiAward size={12} /> {item.honor}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <motion.h3
              className={`${styles.colTitle} ${styles.colTitleAward}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className={styles.colIcon}><FiAward size={24} /></span>
              Awards
            </motion.h3>

            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                className={`glass-card ${styles.awardCard}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.awardEmoji}>{award.icon}</span>
                <div>
                  <h4 className={styles.awardTitle}>{award.title}</h4>
                  <p className={styles.awardEvent}>{award.event}</p>
                  <p className={styles.awardOrg}>{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
