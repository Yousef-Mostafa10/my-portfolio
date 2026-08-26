'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import { projects as staticProjects, ProjectData } from '@/data/projects';
import styles from './Projects.module.css';

type Project = ProjectData;

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <FiX size={20} />
          </button>

          {/* Header */}
          <div className={styles.modalHeader}>
            <div className={styles.modalProject}>
              <span className={styles.modalNum}>Featured Project</span>
              <h3 className={styles.modalTitle}>{project.title}</h3>
              <p className={styles.modalSubtitle}>{project.subtitle}</p>
            </div>
            <div className={styles.modalActions}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                id={`project-github-${project.id}`}
                aria-label="View on GitHub"
              >
                <FiGithub size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Images Gallery or Placeholder */}
          <div className={styles.modalImage}>
            {project.images && project.images.length > 0 ? (
              <div className={styles.imagesGallery}>
                {project.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className={styles.galleryImg}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.imagePlaceholder}>
                <span className={styles.placeholderIcon}>📱</span>
                <p className={styles.placeholderText}>Project screenshots coming soon</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  View on GitHub <FiArrowRight size={14} />
                </a>
              </div>
            )}
          </div>

          {/* Content */}
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>🔍 The Problem</h4>
              <p className={styles.sectionText}>{project.problem}</p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>💡 The Solution</h4>
              <p className={styles.sectionText}>{project.solution}</p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>✨ Key Features</h4>
              <ul className={styles.featuresList}>
                {project.features.map((f, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureBullet}>▹</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>🛠️ Tech Stack</h4>
              <div className={styles.techBadges}>
                {project.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`glass-card ${styles.card} ${project.featured ? styles.featured : ''}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        layout
      >
        {/* Featured badge */}
        {project.featured && (
          <div className={styles.featuredBadge}>
            <span>⭐ Featured Project</span>
          </div>
        )}

        {/* Project Image / Placeholder */}
        <div className={styles.cardImage}>
          {project.images && project.images.length > 0 ? (
            <img src={project.images[0]} alt={project.title} className={styles.cardImg} />
          ) : (
            <div className={styles.cardImagePlaceholder}>
              <span className={styles.cardPlaceholderIcon}>📱</span>
              <span className={styles.cardPlaceholderText}>{project.title}</span>
            </div>
          )}
          <div className={styles.cardOverlay}>
            <button
              className={styles.viewBtn}
              onClick={() => setModalOpen(true)}
              id={`project-view-${project.id}`}
              aria-label={`View ${project.title} details`}
            >
              <FiExternalLink size={18} />
              View Details
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className={styles.cardBody}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSubtitle}>{project.subtitle}</p>
          <p className={styles.cardDesc}>{project.description.slice(0, 120)}...</p>

          {/* Tech badges */}
          <div className={styles.cardTechs}>
            {project.tech.slice(0, 4).map(t => (
              <span key={t} className={styles.cardTechBadge}>{t}</span>
            ))}
            {project.tech.length > 4 && (
              <span className={styles.cardTechMore}>+{project.tech.length - 4}</span>
            )}
          </div>

          {/* Actions */}
          <div className={styles.cardActions}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardGithubLink}
              id={`project-github-card-${project.id}`}
              aria-label={`GitHub: ${project.title}`}
            >
              <FiGithub size={15} />
              Source Code
            </a>
            <button
              className={styles.cardDetailBtn}
              onClick={() => setModalOpen(true)}
              aria-label={`View ${project.title} case study`}
            >
              Case Study
              <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default function Projects() {
  // Use the static projects data instead of fetching from a database
  const projects = staticProjects.length > 0 ? staticProjects : portfolioData.projects;

  return (
    <section id="projects" className={`section ${styles.projects}`} aria-label="Projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">My Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Real-world applications built with Flutter, Firebase, and Clean Architecture
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className={styles.githubCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={styles.ctaText}>More projects available on my GitHub profile</p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-all"
            className="btn-glass"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
