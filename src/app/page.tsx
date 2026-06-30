'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroMonolith from '@/components/HeroMonolith';
import Footer from '@/components/Footer';
import { ArrowRight, Compass, Plus, Award, CheckCircle, BarChart3, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import { submitLead } from '@/app/actions';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const teaserProjects = [
    { 
      id: 'meridian', 
      title: 'Meridian', 
      category: 'Fintech', 
      num: '01',
      description: 'A complete technical rebrand and digital growth strategy for a challenger fintech brand. We built their positioning, messaging framework, and performance creative system from the ground up.',
      services: 'Brand Strategy · Visual Identity · Web Design · Performance Marketing',
      outcome: '+340% brand recognition in 6 months'
    },
    { 
      id: 'forma', 
      title: 'Forma', 
      category: 'Wellness', 
      num: '02',
      description: 'A full-scale content engine and social protocol for a premium wellness brand. We engineered consistent, compounding content across platforms — turning their audience into a loyal, converting community.',
      services: 'Content Production · Social Media · SEO · Growth Systems',
      outcome: '3.2M organic impressions · 5× follower growth'
    },
    { 
      id: 'kova', 
      title: 'Kova', 
      category: 'Consumer Goods', 
      num: '03',
      description: 'Performance creative strategy for a D2C leader. We rebuilt their ad creative system, optimized landing pages through CRO, and reduced cost per acquisition while scaling revenue across channels.',
      services: 'Creative Campaigns · Performance Marketing · CRO',
      outcome: '4.8× ROAS · 45% revenue growth'
    },
  ];

  const capabilities = [
    {
      num: '01',
      title: 'Brand Engineering',
      body: 'We build the architecture of authority. From technical brand positioning and messaging frameworks to visual identity systems — we define how your brand is perceived and remembered.'
    },
    {
      num: '02',
      title: 'Interface & Web Design',
      body: 'High-fidelity digital experiences designed for speed, clarity, and conversion. Responsive, mobile-first websites that look premium and perform even better.'
    },
    {
      num: '03',
      title: 'Content & Visual Protocol',
      body: 'Advanced content production — photography, videography, 3D animation, motion graphics, and social-first creatives that capture attention and drive action across every platform.'
    },
    {
      num: '04',
      title: 'Performance Marketing',
      body: 'Laser-focused ad campaigns across Google, Meta, LinkedIn, and YouTube. We target the right audience, optimize in real time, and report on every rupee of ad spend.'
    },
    {
      num: '05',
      title: 'SEO & Organic Growth',
      body: 'We get you off page 10 and onto page 1. Technical SEO, on-page optimization, content strategy, and link building that drive sustainable organic traffic and qualified leads.'
    },
    {
      num: '06',
      title: 'Growth Systems',
      body: 'Scalable marketing infrastructure — CRO, email automation, lead funnels, analytics dashboards — designed to automate and accelerate your market expansion.'
    }
  ];

  // Contact form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    scopes: [] as string[]
  });

  const handleScopeChange = (scope: string) => {
    setFormData(prev => {
      const isSelected = prev.scopes.includes(scope);
      return {
        ...prev,
        scopes: isSelected 
          ? prev.scopes.filter(s => s !== scope) 
          : [...prev.scopes, scope]
      };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await submitLead(formData);
      if (res.success) {
        setFormSubmitted(true);
        setFormData({ name: '', company: '', email: '', message: '', scopes: [] });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(res.error || 'Failed to submit briefing. Please try again.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* ================= HERO SECTION ================= */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: 'var(--header-height)',
            overflow: 'hidden',
          }}
        >
          <div className="container" style={{ width: '100%' }}>
            <div className="hero-grid">
              
              {/* Left Column: Bold Typographic Editorial */}
              <motion.div 
                className="hero-text-col"
                initial="hidden"
                animate="show"
                variants={{
                  show: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.span className="mono-label" variants={fadeUp}>
                  [ Creative Marketing Agency · Bangalore, India ]
                </motion.span>
                
                <motion.h1 className="hero-title" variants={fadeUp}>
                  Creativity.<br />Strategy. Results.
                </motion.h1>
                
                <motion.p className="hero-desc" variants={fadeUp}>
                  We lead with content. We scale with digital. HH Studio is a full-service creative marketing agency that builds brands people remember — through data-driven strategy, high-performance content, and integrated digital systems.
                </motion.p>
                
                <motion.div className="hero-actions" variants={fadeUp}>
                  <Link href="#book-call" className="primary-hero-btn" data-cursor="hover">
                    <span>Start a Project</span>
                    <span className="arrow">→</span>
                  </Link>
                  <Link href="/work" className="secondary-hero-btn" data-cursor="hover">
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column: 3D Monolith Canvas */}
              <motion.div 
                className="hero-3d-col"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <div className="canvas-frame">
                  <HeroMonolith />
                  
                  {/* Subtle blueprint frame markers */}
                  <div className="frame-line top" />
                  <div className="frame-line right" />
                  <div className="frame-line bottom" />
                  <div className="frame-line left" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO INTRO STRIP ================= */}
        <section className="intro-strip-section" style={{ borderTop: '1px solid var(--border-subtle)', background: 'rgba(15,15,17,0.2)' }}>
          <div className="container">
            <div className="intro-grid">
              <div className="intro-left">
                <span className="mono-label">Who We Are</span>
                <h2>We Create, Build & Grow Brands</h2>
                <p>
                  HH Studio is not another agency that sells hype. We are a strategy-first creative marketing studio delivering end-to-end digital solutions — from brand identity and content production to SEO, performance marketing, and web design. We don&rsquo;t chase vanity metrics. We build systems that compound — generating qualified leads, organic traffic, and measurable ROI for startups, SMBs, and enterprise brands alike.
                </p>
              </div>
              <div className="intro-right">
                <div className="stats-box glassmorphism">
                  <div className="stat-card">
                    <Award size={20} color="var(--accent)" />
                    <div className="stat-info">
                      <span className="stat-val">50+</span>
                      <span className="stat-lbl">Projects Delivered</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <CheckCircle size={20} color="var(--accent)" />
                    <div className="stat-info">
                      <span className="stat-val">4.8★</span>
                      <span className="stat-lbl">Client Rating</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <BarChart3 size={20} color="var(--accent)" />
                    <div className="stat-info">
                      <span className="stat-val">360°</span>
                      <span className="stat-lbl">Marketing Solutions</span>
                    </div>
                  </div>
                  <div className="stat-card">
                    <HeartHandshake size={20} color="var(--accent)" />
                    <div className="stat-info">
                      <span className="stat-val">ROI</span>
                      <span className="stat-lbl">Focused Since Day One</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PORTFOLIO TEASER PORTAL ================= */}
        <section className="teaser-section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="teaser-header">
              <div>
                <span className="mono-label">Case Studies</span>
                <h2 className="teaser-title">Recent Output.</h2>
              </div>
              <Link href="/work" className="editorial-view-all" data-cursor="hover">
                <span>View Full Archive</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <motion.div 
              className="teaser-projects-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {teaserProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href="/work" 
                  className="teaser-project-card glassmorphism"
                  data-cursor="view"
                  data-cursor-text="OPEN FILE"
                  style={{ height: 'auto', minHeight: '340px' }}
                >
                  <div className="card-top">
                    <span className="proj-num">FILE // 0{project.num}</span>
                    <Compass size={14} strokeWidth={1.5} color="var(--border-subtle)" />
                  </div>
                  <div className="card-main" style={{ margin: '20px 0' }}>
                    <span className="proj-category">[{project.category}]</span>
                    <h3 className="proj-title" style={{ marginBottom: '15px' }}>{project.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                      {project.description}
                    </p>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', opacity: 0.8 }}>
                      <strong>SERVICES:</strong> {project.services}
                    </div>
                  </div>
                  <div className="card-bottom" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '15px' }}>
                    <span className="inspect-label" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
                      OUTCOME: {project.outcome}
                    </span>
                    <ArrowRight size={12} className="arrow" />
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CAPABILITIES TEASER PORTAL ================= */}
        <section className="teaser-section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="teaser-header" style={{ marginBottom: '40px' }}>
              <div>
                <span className="mono-label">Capabilities</span>
                <h2 className="teaser-title section-title-sm">Integrated Systems for Market Dominance.</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', marginTop: '10px' }}>
                  We operate at the intersection of design, strategy, and growth — building brands that cannot be ignored in crowded digital markets.
                </p>
              </div>
            </div>

            <div className="capabilities-teaser-grid">
              {capabilities.map((cap) => (
                <div key={cap.num} className="cap-teaser-card glassmorphism">
                  <div className="cap-header">
                    <span className="cap-num">{cap.num}</span>
                    <h3>{cap.title}</h3>
                  </div>
                  <p>{cap.body}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
              <Link href="/services" className="editorial-view-all" data-cursor="hover" style={{ borderBottom: '1px solid var(--accent)', color: 'var(--accent)' }}>
                <span>View Full Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= PHILOSOPHY MANIFESTO PORTAL ================= */}
        <section className="teaser-section portal-banner-section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="portal-banner glassmorphism">
              <div className="portal-deco-cross">
                <Plus size={16} color="var(--accent)" />
              </div>
              
              <span className="mono-label">Studio Philosophy</span>
              <h2 className="portal-title">Systems over screens.</h2>
              <p className="portal-text">
                We do not design layouts. We construct responsive, volumetric brand ecosystems that govern channels from strategy formulation to runtime edge deployments.
              </p>
              
              <Link href="/about" className="portal-btn" data-cursor="hover">
                <span>Read Manifesto</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= INITIATE PROTOCOL (Contact Form Section) ================= */}
        <section id="book-call" style={{ padding: '120px 0', borderTop: '1px solid var(--border-subtle)', background: 'rgba(15,15,17,0.1)' }}>
          <div className="container">
            <div className="contact-section-grid">
              <div className="contact-info-col">
                <span className="mono-label">Initiate Protocol</span>
                <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                  Ready for the Next Level.
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '30px' }}>
                  Brief us on your objectives. We respond with a strategic perspective and creative roadmap — not a sales pitch. Whether you need SEO, performance marketing, branding, or a complete digital overhaul, we&rsquo;re ready.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Direct Channel: </span>
                    <a href="mailto:hello@hhstudio.co" style={{ color: 'var(--accent)' }}>hello@hhstudio.co</a>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Fast Track: </span>
                    <span style={{ color: 'var(--text-primary)' }}>Message via WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-col">
                <form onSubmit={handleFormSubmit} className="interactive-form glassmorphism">
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="form-success-message"
                    >
                      <Plus size={24} color="var(--accent)" style={{ transform: 'rotate(45deg)', marginBottom: '15px' }} />
                      <h3>Briefing Initialized</h3>
                      <p>Your strategic parameters have been logged. We will establish direct communications shortly.</p>
                    </motion.div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                      <div className="form-group">
                        <label htmlFor="name">Principal Name (Your Name)</label>
                        <input 
                          type="text" 
                          id="name" 
                          required 
                          value={formData.name} 
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Priya Nair"
                          className="form-input"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="company">Entity (Company / Brand)</label>
                        <input 
                          type="text" 
                          id="company" 
                          required 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Meridian"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Communications ID (Email)</label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="priya@meridian.io"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label>Objective Scope</label>
                        <div className="scopes-grid">
                          {[
                            'Brand Engineering',
                            'Interface & Web Design',
                            'Content Protocol',
                            'Social Media Marketing',
                            'SEO & Organic Growth',
                            'Performance Marketing',
                            'Growth Systems',
                            'Creative Campaigns'
                          ].map((scope) => (
                            <button
                              type="button"
                              key={scope}
                              onClick={() => handleScopeChange(scope)}
                              className={`scope-select-btn ${formData.scopes.includes(scope) ? 'selected' : ''}`}
                              data-cursor="hover"
                            >
                              <span>{scope}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Project Intelligence (Message / Brief)</label>
                        <textarea 
                          id="message" 
                          required 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Outline your primary strategic objectives, timeline, and budget parameters."
                          className="form-textarea"
                        />
                      </div>

                      {errorMessage && (
                        <div style={{ color: '#ef4444', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '10px 15px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.02)' }}>
                          ERROR // {errorMessage}
                        </div>
                      )}

                      <button type="submit" className="form-submit-btn" data-cursor="hover" disabled={isSubmitting}>
                        <span>{isSubmitting ? 'Submitting...' : 'Initiate Briefing'}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        /* Intro Strip */
        .intro-strip-section {
          padding: 100px 0;
        }
        
        .intro-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 60px;
          align-items: center;
        }

        .intro-left h2 {
          font-size: 3rem;
          margin-top: 15px;
          margin-bottom: 25px;
          line-height: 1.1;
        }

        .intro-left p {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .stats-box {
          padding: 35px;
          border-radius: 8px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .stat-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .stat-lbl {
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.3;
        }

        /* Capabilities Teaser Grid */
        .capabilities-teaser-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .cap-teaser-card {
          padding: 35px;
          border-radius: 8px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .cap-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .cap-num {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent);
          font-weight: bold;
        }

        .cap-teaser-card h3 {
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .cap-teaser-card p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Contact Section */
        .contact-section-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 80px;
          align-items: flex-start;
        }

        .interactive-form {
          padding: 50px;
          border-radius: 10px;
          position: relative;
        }

        .form-success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 0;
        }

        .form-success-message h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .form-success-message p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .form-input,
        .form-textarea {
          background: rgba(5, 5, 5, 0.4);
          border: 1px solid var(--border-subtle);
          padding: 12px 18px;
          border-radius: 4px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--accent);
        }

        .scopes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 5px;
        }

        .scope-select-btn {
          background: rgba(15, 15, 17, 0.6);
          border: 1px solid var(--border-subtle);
          padding: 10px 14px;
          border-radius: 4px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
        }

        .scope-select-btn:hover {
          border-color: rgba(0, 229, 255, 0.4);
          color: var(--text-primary);
        }

        .scope-select-btn.selected {
          border-color: var(--accent);
          background: rgba(0, 229, 255, 0.05);
          color: var(--accent);
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.1);
        }

        .form-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--bg-primary);
          background-color: var(--accent);
          padding: 16px 28px;
          border-radius: 4px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          margin-top: 10px;
        }

        .form-submit-btn:hover {
          background-color: #00bccc;
          transform: translateY(-2px);
        }

        @media (max-width: 1199px) {
          .capabilities-teaser-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 991px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-section-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .capabilities-teaser-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .capabilities-teaser-grid {
            grid-template-columns: 1fr;
          }
          .scopes-grid {
            grid-template-columns: 1fr;
          }
          .interactive-form {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}
