'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Shield, Cpu, Compass } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  tabLabel: string;
  color: string;
  overview: string;
  challenge: string;
  research: string;
  strategy: string;
  execution: string;
  results: string;
  galleryImages: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'singh-chaap',
    title: "Singh's Chaap",
    category: '360° Marketing',
    year: '2026',
    tabLabel: 'SINGH CHAAP // SC-01',
    color: '#00e5ff',
    overview: 'Comprehensive 360 degree marketing and brand scaling for the fast-growing quick service restaurant franchise, Singh\'s Chaap. We integrated creative campaigns, localized search engine dominance, and high-performance social content to drive footfall and digital ordering.',
    challenge: 'Scaling a highly popular street food franchise into a structured national brand while preserving its authentic taste connection. The franchise needed consistent visual branding, targeted local store campaigns, and a seamless digital ordering interface.',
    research: 'Audited regional dining habits and local search behaviors. Discovered that modern food buyers look for hygiene trust, visual appeal on social media, and frictionless online-to-offline ordering structures.',
    strategy: 'Created an integrated 360 degree marketing roadmap combining platform-native Instagram content, localized SEO, influencer partnerships, and Google Maps optimization.',
    execution: 'Produced high-aesthetic social media video content, deployed geo-targeted paid campaigns, and optimized their local search visibility to drive foot traffic and direct food delivery orders.',
    results: 'Over 5M organic and paid impressions on localized campaigns, double-digit growth in walk-ins, and a significant increase in franchise inquiries.',
    link: 'https://www.instagram.com/singhschaapindiaofficial/',
    galleryImages: [
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f0f11"/><path d="M 100,50 L 700,50 L 700,400 L 100,400 Z" stroke="%2300e5ff" stroke-width="0.5" fill="none" opacity="0.4"/><circle cx="400" cy="225" r="100" stroke="%2300e5ff" stroke-width="0.5" fill="none" stroke-dasharray="5 5"/><line x1="400" y1="50" x2="400" y2="400" stroke="%2300e5ff" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3"/><line x1="100" y1="225" x2="700" y2="225" stroke="%2300e5ff" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3"/><text x="410" y="240" fill="%2300e5ff" font-family="monospace" font-size="10" letter-spacing="1">SINGHCHAAP.360.MESH</text></svg>'
    ]
  },
  {
    id: 'loa',
    title: 'Legends Of Advertisement',
    category: 'LinkedIn Content',
    year: '2026',
    tabLabel: 'LOA // LI-02',
    color: '#0055ff',
    overview: 'Advanced content strategy and B2B positioning for Legends Of Advertisement (LOA). We developed a high-impact LinkedIn content engine to establish corporate authority, grow executive following, and drive high-intent consulting leads.',
    challenge: 'Standing out in a highly competitive marketing and advertising consulting landscape on LinkedIn. The founders needed structured thought leadership content that goes beyond generic advice to demonstrate deep domain expertise.',
    research: 'Analyzed high-performing corporate content trends and B2B engagement dynamics. Found that decision-makers respond most to authentic breakdown studies, raw campaign data, and executive-level perspectives.',
    strategy: 'Engineered a weekly LinkedIn content framework focusing on advertising breakdowns, marketing psychology, and business growth strategies, written in a clear and compelling style.',
    execution: 'Crafted data-backed thought leadership posts, designed premium minimal carousels, and optimized post schedules to maximize engagement and virality within the advertising industry.',
    results: 'Substantial organic growth in executive followers, millions of impressions, and a steady stream of incoming B2B inbound leads.',
    link: 'https://www.linkedin.com/in/aryanloa/',
    galleryImages: [
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f0f11"/><path d="M 150,225 C 200,100 600,100 650,225 C 600,350 200,350 150,225 Z" stroke="%230055ff" stroke-width="0.5" fill="none" opacity="0.5"/><path d="M 200,225 L 600,225" stroke="%230055ff" stroke-width="0.5" opacity="0.2"/><text x="210" y="240" fill="%230055ff" font-family="monospace" font-size="10">LOA.LINKEDIN.FLOW</text></svg>'
    ]
  }
];

interface PortfolioStackProps {
  initialProjects?: Project[];
}

export default function PortfolioStack({ initialProjects = [] }: PortfolioStackProps) {
  const projectsList = initialProjects.length > 0 ? initialProjects : PROJECTS;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openingIndex, setOpeningIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor viewport size to switch layout formats
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleFolderClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
    } else {
      setOpeningIndex(index);
      // Simulate folder lift and realistic slide-out before showing case study
      setTimeout(() => {
        setActiveIndex(index);
        setOpeningIndex(null);
      }, 850);
    }
  };

  const closeCaseStudy = () => {
    setActiveIndex(null);
  };

  const activeProject = activeIndex !== null ? projectsList[activeIndex] : null;

  return (
    <section id="work" style={{ padding: 'var(--section-padding) 0', position: 'relative' }} className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <span className="mono-label">Case Studies</span>
          <h2 className="section-title-sm">
            Recent Output.
          </h2>
          <p>
            An interactive catalog of digital systems, brand strategies, and growth funnels built for high-performance brands.
          </p>
        </div>

        {/* Stack Container */}
        <div className="stack-viewport">
          <div className="folders-container">
            {projectsList.map((project, index) => {
              const isHovered = hoveredIndex === index;
              const isOpening = openingIndex === index;
              
              // Define different offsets for stacking effect on PC
              const baseRotation = -4 + index * 4;
              const baseY = index * 25;
              const scale = 0.9 + index * 0.05;

              return (
                <motion.div
                  key={project.id}
                  className="folder-wrapper"
                  style={{
                    zIndex: isOpening ? 50 : 10 + index,
                    originY: 1, // Bottom hinge
                  }}
                  animate={
                    isMobile
                      ? { y: 0, rotate: 0, scale: 1 }
                      : isOpening
                      ? {
                          y: -80,
                          rotate: 0,
                          scale: 1.05,
                          rotateX: 0,
                        }
                      : isHovered
                      ? {
                          y: baseY - 15,
                          rotate: baseRotation * 0.5,
                          scale: scale + 0.02,
                        }
                      : {
                          y: baseY,
                          rotate: baseRotation,
                          scale: scale,
                        }
                  }
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={!isMobile ? () => setHoveredIndex(index) : undefined}
                  onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
                  onClick={() => handleFolderClick(index)}
                  data-cursor="open"
                  data-cursor-text="OPEN ARCHIVE"
                >
                  {/* Folder Tab */}
                  <div 
                    className="folder-tab"
                    style={{
                      borderBottomColor: project.color
                    }}
                  >
                    <span className="folder-tab-text">{project.tabLabel}</span>
                  </div>

                  {/* Folder Body */}
                  <div className="folder-body">
                    {/* Outer front flap - rotates forward in 3D when opening */}
                    <div 
                      className="folder-cover-flap"
                      style={{
                        transform: isOpening ? 'rotateX(-45deg)' : 'rotateX(0deg)',
                        borderColor: project.color
                      }}
                    >
                      <div className="folder-technical-deco">
                        <Compass size={16} strokeWidth={1} style={{ opacity: 0.3 }} />
                        <div className="line" />
                      </div>
                      
                      <div className="folder-cover-content">
                        <span className="folder-category">{project.category}</span>
                        <h3 className="folder-title">{project.title}</h3>
                        <div className="folder-meta">
                          <span>ARCHIVE REF // 00{index + 1}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Inside document sliding out */}
                    <motion.div 
                      className="folder-document-slide"
                      animate={isOpening ? { y: -160, opacity: 0.8 } : { y: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                      <div className="doc-content">
                        <Cpu size={24} strokeWidth={1.5} color="var(--accent)" />
                        <span className="doc-title">LOADING SYSTEM DOSSIER...</span>
                      </div>
                    </motion.div>

                    {/* Back page inside the folder */}
                    <div className="folder-back-panel" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Fullscreen Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="case-study-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scroll Container */}
            <div className="case-study-scroll-wrapper">
              
              {/* Sticky Top Bar */}
              <div className="case-study-top-bar glassmorphism">
                <button onClick={closeCaseStudy} className="close-btn" data-cursor="hover">
                  <ArrowLeft size={16} />
                  <span>CLOSE ARCHIVE</span>
                </button>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <span className="case-code">{activeProject.tabLabel}</span>
                  <a 
                    href={activeProject.link || "https://calendly.com/contact-hhmarketing/30min"} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="visit-btn" 
                    data-cursor="hover"
                  >
                    <span>{activeProject.link ? "VISIT PROJECT" : "LAUNCH ENGINE"}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="case-study-content container">
                
                {/* Hero Editorial Header */}
                <div className="case-hero">
                  <span className="mono-label">[{activeProject.category}]</span>
                  <h1>{activeProject.title}</h1>
                  
                  {/* Technical Metadata Row */}
                  <div className="case-metadata-row">
                    <div className="meta-col">
                      <span className="label">CLIENT</span>
                      <span className="value">HH STUDIO LAB</span>
                    </div>
                    <div className="meta-col">
                      <span className="label">CHRONO</span>
                      <span className="value"><Calendar size={12} style={{ marginRight: '6px' }} /> {activeProject.year}</span>
                    </div>
                    <div className="meta-col">
                      <span className="label">STRATEGY SCOPE</span>
                      <span className="value"><Shield size={12} style={{ marginRight: '6px' }} /> BRAND & GROWTH</span>
                    </div>
                  </div>
                </div>

                {/* Grid Editorial Columns */}
                <div className="case-editorial-grid">
                  <div className="editorial-main-col">
                    <section className="case-section">
                      <h3>Overview</h3>
                      <p className="large-p">{activeProject.overview}</p>
                    </section>

                    <section className="case-section">
                      <h3>The Challenge</h3>
                      <p>{activeProject.challenge}</p>
                    </section>

                    <section className="case-section">
                      <h3>Research & Insights</h3>
                      <p>{activeProject.research}</p>
                    </section>

                    <section className="case-section">
                      <h3>Strategy</h3>
                      <p>{activeProject.strategy}</p>
                    </section>

                    <section className="case-section">
                      <h3>Execution</h3>
                      <p>{activeProject.execution}</p>
                    </section>

                    <section className="case-section">
                      <h3>Results</h3>
                      <p>{activeProject.results}</p>
                    </section>
                  </div>

                  {/* Side Column: Technical specs */}
                  <div className="editorial-side-col">
                    <div className="specs-card glassmorphism">
                      <h4>CAMPAIGN SCOPE</h4>
                      <ul className="specs-list">
                        <li>
                          <span className="spec-label">DELIVERABLES</span>
                          <span className="spec-val">Branding & Growth</span>
                        </li>
                        <li>
                          <span className="spec-label">INTERACTION</span>
                          <span className="spec-val">Integrated Stack</span>
                        </li>
                        <li>
                          <span className="spec-label">MEDIA BUY</span>
                          <span className="spec-val">Performance Marketing</span>
                        </li>
                        <li>
                          <span className="spec-label">PERFORMANCE</span>
                          <span className="spec-val">Optimized Campaigns</span>
                        </li>
                      </ul>
                      
                      <div className="schematic-drawing">
                        {/* Faint technical box */}
                        <div className="wirebox">
                          <div className="corner tl"></div>
                          <div className="corner tr"></div>
                          <div className="corner bl"></div>
                          <div className="corner br"></div>
                          <div className="dot"></div>
                          <span className="schem-label">STRATEGY CORE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Gallery */}
                <div className="case-gallery">
                  <h3>Visual Gallery</h3>
                  <div className="gallery-grid">
                    {activeProject.galleryImages.map((src, i) => (
                      <div key={i} className="gallery-item-wrapper glassmorphism">
                        <img 
                          src={src} 
                          alt={`${activeProject.title} Technical Drawing ${i + 1}`} 
                          className="gallery-image"
                        />
                        <div className="gallery-caption">
                          <span>SYSTEM DRAWING // 0{i + 1}</span>
                          <span>SCALE: NTS</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .portfolio-section {
          padding: 120px 0;
          overflow: visible;
        }
        
        /* Stack Viewport */
        .stack-viewport {
          height: 520px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          margin-top: 50px;
          perspective: 1000px;
        }

        .folders-container {
          position: relative;
          width: 580px;
          height: 380px;
        }

        /* Folder Wrapper */
        .folder-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        /* Folder Tab */
        .folder-tab {
          width: 150px;
          height: 30px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          border-left: 1px solid var(--border-subtle);
          border-right: 1px solid var(--border-subtle);
          border-bottom: 2px solid var(--accent); /* Bottom edge highlights in theme color */
          border-radius: 8px 8px 0 0;
          display: flex;
          align-items: center;
          padding-left: 15px;
          position: relative;
          z-index: 2;
        }

        .folder-tab-text {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Folder Body */
        .folder-body {
          width: 100%;
          height: calc(100% - 30px);
          position: relative;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 0 10px 10px 10px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          transform-style: preserve-3d;
        }

        /* Cover Flap */
        .folder-cover-flap {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 0 10px 10px 10px;
          top: -1px;
          left: -1px;
          z-index: 10;
          transform-origin: bottom center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .folder-technical-deco {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .folder-technical-deco .line {
          height: 1px;
          background: var(--border-subtle);
          flex-grow: 1;
        }

        .folder-cover-content {
          margin-top: auto;
        }

        .folder-category {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .folder-title {
          font-size: 2.2rem;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .folder-meta {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        /* Slide-out Document */
        .folder-document-slide {
          position: absolute;
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          left: 10px;
          top: 10px;
          background: #151518;
          border: 1px solid var(--border-subtle);
          border-left: 2px solid var(--accent);
          border-radius: 6px;
          z-index: 5;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .doc-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .doc-title {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--text-primary);
        }

        /* Back Panel */
        .folder-back-panel {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #0b0b0c;
          border-radius: 0 10px 10px 10px;
          z-index: 1;
        }

        /* Case Study Fullscreen Modal */
        .case-study-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: var(--bg-primary);
          z-index: 2000;
          overflow: hidden;
        }

        .case-study-scroll-wrapper {
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .case-study-top-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4rem;
          z-index: 2010;
        }

        .close-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          transition: color 0.3s;
        }

        .close-btn:hover {
          color: var(--text-primary);
        }

        .visit-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--accent);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 8px 16px;
          border-radius: 4px;
          background: rgba(0, 229, 255, 0.02);
          transition: background-color 0.3s, border-color 0.3s;
        }

        .visit-btn:hover {
          background-color: rgba(0, 229, 255, 0.08);
          border-color: var(--accent);
        }

        .case-code {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        /* Content Layout */
        .case-hero {
          margin-bottom: 80px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 50px;
        }

        .case-hero h1 {
          font-size: 5rem;
          margin-top: 15px;
          margin-bottom: 40px;
        }

        .case-metadata-row {
          display: flex;
          gap: 60px;
        }

        .meta-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .meta-col .label {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }

        .meta-col .value {
          font-size: 0.95rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
        }

        /* Grid Editorial Columns */
        .case-editorial-grid {
          display: grid;
          grid-template-columns: 8fr 4fr;
          gap: 80px;
          margin-bottom: 100px;
        }

        .editorial-main-col {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .case-section h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 10px;
          display: inline-block;
        }

        .case-section p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .case-section p.large-p {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--text-primary);
        }

        /* Specs card */
        .specs-card {
          padding: 30px;
          border-radius: 8px;
          position: sticky;
          top: 120px;
        }

        .specs-card h4 {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 25px;
        }

        .specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        .specs-list li {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          border-bottom: 1px dashed var(--border-subtle);
          padding-bottom: 8px;
        }

        .spec-label {
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .spec-val {
          color: var(--text-primary);
        }

        .schematic-drawing {
          width: 100%;
          height: 120px;
          border: 1px solid var(--border-subtle);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wirebox {
          width: 80%;
          height: 60%;
          border: 1px solid rgba(0, 229, 255, 0.25);
          position: relative;
        }

        .wirebox .corner {
          position: absolute;
          width: 6px;
          height: 6px;
          border: 1px solid var(--accent);
        }

        .wirebox .corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .wirebox .corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .wirebox .corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .wirebox .corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .wirebox .dot {
          width: 4px;
          height: 4px;
          background-color: var(--accent);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent);
        }

        .schem-label {
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 0.1em;
          color: var(--accent);
          position: absolute;
          bottom: 5px;
          left: 8px;
          opacity: 0.8;
        }

        /* Gallery */
        .case-gallery {
          margin-top: 100px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 60px;
        }

        .case-gallery h3 {
          font-size: 1.5rem;
          margin-bottom: 40px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .gallery-item-wrapper {
          border-radius: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 6px;
        }

        .gallery-caption {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        @media (max-width: 991px) {
          .case-editorial-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .specs-card {
            position: relative;
            top: 0;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .case-hero h1 {
            font-size: 3.5rem;
          }
          .case-study-top-bar {
            padding: 0 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .stack-viewport {
            height: auto !important;
            perspective: none !important;
            margin-top: 20px;
          }
          .folders-container {
            position: relative;
            width: 100% !important;
            height: auto !important;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          .folder-wrapper {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
          }
          .folder-body {
            height: 250px !important;
          }
        }

        @media (max-width: 576px) {
          .folder-title {
            font-size: 1.6rem;
          }
          .case-hero h1 {
            font-size: 2.5rem;
          }
          .case-metadata-row {
            flex-direction: column;
            gap: 20px;
          }
          .case-study-top-bar {
            height: 70px;
            padding: 0 1rem;
          }
          .case-code {
            display: none !important;
          }
          .close-btn span {
            font-size: 8px;
          }
          .visit-btn {
            padding: 6px 12px;
            font-size: 8px;
          }
          .case-hero {
            margin-bottom: 40px;
            padding-bottom: 30px;
          }
          .case-editorial-grid {
            margin-bottom: 60px;
          }
          .case-study-scroll-wrapper {
            padding-top: 100px;
            padding-bottom: 60px;
          }
          .case-gallery {
            margin-top: 60px;
            padding-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
