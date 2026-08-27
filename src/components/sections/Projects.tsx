'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiArrowRight, FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '@/lib/data';
import { projects as staticProjects, ProjectData } from '@/data/projects';
import styles from './Projects.module.css';

type Project = ProjectData;

/* ──────────────────────────────────────────────
   Image Slider (used inside modal)
────────────────────────────────────────────── */
function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrent(i => (i + 1) % images.length);

  if (images.length === 0) return null;

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className={styles.sliderImg}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`} onClick={prev} aria-label="Previous image">
            <FiChevronLeft size={20} />
          </button>
          <button className={`${styles.sliderBtn} ${styles.sliderBtnNext}`} onClick={next} aria-label="Next image">
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className={styles.sliderDots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className={styles.sliderCounter}>{current + 1} / {images.length}</span>
        </>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   No-image placeholder (clean, no AI icons)
────────────────────────────────────────────── */
function NoImagePlaceholder({ project }: { project: Project }) {
  return (
    <div className={styles.imagePlaceholder}>
      {/* Decorative grid lines */}
      <div className={styles.placeholderGrid} aria-hidden="true">
        {[...Array(9)].map((_, i) => <div key={i} className={styles.placeholderCell} />)}
      </div>
      <div className={styles.placeholderContent}>
        <div className={styles.placeholderBadge}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
          </svg>
          <span>App Preview</span>
        </div>
        <p className={styles.placeholderTitle}>{project.title}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          View Source on GitHub <FiArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Card placeholder (no AI icon)
────────────────────────────────────────────── */
function CardPlaceholder({ title }: { title: string }) {
  return (
    <div className={styles.cardImagePlaceholder}>
      <div className={styles.cardPlaceholderInner}>
        <svg className={styles.cardPlaceholderSvg} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="9" x2="14" y2="9" />
        </svg>
        <span className={styles.cardPlaceholderText}>{title}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Modal
────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const hasImages = project.images && project.images.length > 0;

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
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 40 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            <FiX size={18} />
          </button>

          {/* Header */}
          <div className={styles.modalHeader}>
            <div className={styles.modalProject}>
              <span className={styles.modalNum}>
                {project.featured ? 'Featured Project' : 'Project'}
              </span>
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
                <FiGithub size={15} />
                GitHub
              </a>
            </div>
          </div>

          {/* Image area */}
          <div className={styles.modalImage}>
            {hasImages ? (
              <ImageSlider images={project.images} title={project.title} />
            ) : (
              <NoImagePlaceholder project={project} />
            )}
          </div>

          {/* Content */}
          <div className={styles.modalContent}>
            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>The Problem</h4>
              <p className={styles.sectionText}>{project.problem}</p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>The Solution</h4>
              <p className={styles.sectionText}>{project.solution}</p>
            </div>

            <div className={styles.modalSection}>
              <h4 className={styles.sectionLabel}>Key Features</h4>
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
              <h4 className={styles.sectionLabel}>Tech Stack</h4>
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

/* ──────────────────────────────────────────────
   Project Card
────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const hasImages = project.images && project.images.length > 0;

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
            <span>Featured Project</span>
          </div>
        )}

        {/* Project Image / Placeholder */}
        <div className={styles.cardImage}>
          {hasImages ? (
            <img src={project.images[0]} alt={project.title} className={styles.cardImg} />
          ) : (
            <CardPlaceholder title={project.title} />
          )}
          <div className={styles.cardOverlay}>
            <button
              className={styles.viewBtn}
              onClick={() => setModalOpen(true)}
              id={`project-view-${project.id}`}
              aria-label={`View ${project.title} details`}
            >
              <FiExternalLink size={16} />
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
              <FiGithub size={14} />
              Source Code
            </a>
            <button
              className={styles.cardDetailBtn}
              onClick={() => setModalOpen(true)}
              aria-label={`View ${project.title} case study`}
            >
              Case Study
              <FiArrowRight size={13} />
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

/* ──────────────────────────────────────────────
   Section
────────────────────────────────────────────── */
export default function Projects() {
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
            <FiGithub size={17} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
