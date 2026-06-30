'use client';

import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const servicesLinks = [
    { name: 'Brand Strategy', href: '/services#brand' },
    { name: 'SEO & Organic Growth', href: '/services#seo' },
    { name: 'Performance Marketing', href: '/services#performance' },
    { name: 'Social Media Marketing', href: '/services#social' },
    { name: 'Content Production', href: '/services#content' },
    { name: 'Web Design & Development', href: '/services#web-design' },
    { name: 'Growth Systems', href: '/services#growth-systems' },
  ];

  const studioLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { 
      name: 'Instagram', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      href: 'https://instagram.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      href: 'https://linkedin.com' 
    },
    { 
      name: 'Twitter / X', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L13 11L22 22H18L11.5 13.5L5 22H2L11.5 12L2 2H6L11.5 9.5L18 2H22Z" fill="currentColor" stroke="none" />
        </svg>
      ), 
      href: 'https://twitter.com' 
    },
  ];

  return (
    <footer id="contact" style={{ padding: '120px 0 60px 0', position: 'relative', overflow: 'hidden' }} className="footer-section">
      {/* Subtle fading grid overlay */}
      <div className="footer-grid-fader" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Massive Closing Statement & Tagline */}
        <div className="footer-top-row" style={{ marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '800px' }}
          >
            <span className="mono-label">Initiate Protocol</span>
            <h2 className="footer-headline" style={{ marginBottom: '25px' }}>
              Ready for the<br />next level.
            </h2>
            <p className="footer-tagline" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontWeight: '300' }}>
              Engineering high-performance brand identities and digital growth systems for the next generation of industry leaders.
            </p>
          </motion.div>
        </div>

        {/* Contact links matrix */}
        <div className="footer-links-grid">
          
          {/* Column 1 - Primary Contacts */}
          <div className="footer-col">
            <span className="col-title">DIRECT CHANNELS</span>
            
            <a href="mailto:hello@hhstudio.co" className="contact-card glassmorphism" data-cursor="hover">
              <div className="card-left">
                <Mail size={16} color="var(--accent)" />
                <span className="card-val">hello@hhstudio.co</span>
              </div>
              <ArrowUpRight size={14} className="arrow" />
            </a>

            <a href="https://wa.me/yourphone" target="_blank" rel="noreferrer" className="contact-card glassmorphism" data-cursor="hover">
              <div className="card-left">
                <MessageSquare size={16} color="var(--accent)" />
                <span className="card-val">Fast Track (WhatsApp)</span>
              </div>
              <ArrowUpRight size={14} className="arrow" />
            </a>

            <a href="/#book-call" className="contact-card glassmorphism" data-cursor="hover">
              <div className="card-left">
                <Calendar size={16} color="var(--accent)" />
                <span className="card-val">Schedule Discovery</span>
              </div>
              <ArrowUpRight size={14} className="arrow" />
            </a>
          </div>

          {/* Column 2 - Services List */}
          <div className="footer-col">
            <span className="col-title">SERVICES</span>
            <div className="nav-links-list">
              {servicesLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="footer-nav-item"
                  data-cursor="hover"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Studio Links & Connect */}
          <div className="footer-col">
            <span className="col-title">STUDIO</span>
            <div className="nav-links-list" style={{ marginBottom: '35px' }}>
              {studioLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="footer-nav-item"
                  data-cursor="hover"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <span className="col-title">NETWORKS</span>
            <div className="socials-horizontal">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon-btn glassmorphism"
                  data-cursor="hover"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 - Location & Back to Top */}
          <div className="footer-col">
            <span className="col-title">STUDIO LOCATION</span>
            <div className="studio-info-text">
              <p>HH STUDIO LABS</p>
              <p>Creative Marketing Agency</p>
              <p>Bangalore, India</p>
            </div>
            
            <button onClick={handleBackToTop} className="back-top-btn" data-cursor="hover">
              <span>RETURN TO TOP</span>
              <div className="bracket">↑</div>
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="footer-bottom-meta">
          <div className="meta-left">
            <span>© 2026 HH Studio. All rights reserved.</span>
          </div>
          <div className="meta-right">
            <Globe size={10} style={{ marginRight: '6px' }} />
            <span>DEPLOYED VIA EDGE NETWORK VER.2.0.26</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-subtle);
        }

        .footer-grid-fader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to bottom, var(--bg-primary), transparent 30%),
            radial-gradient(var(--border-subtle) 1px, transparent 1px);
          background-size: 100% 100%, 40px 40px;
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }

        .footer-headline {
          font-size: 5.5rem;
          line-height: 1.05;
          margin-top: 20px;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: 4fr 3fr 3fr 2fr;
          gap: 40px;
          margin-bottom: 80px;
          z-index: 1;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .col-title {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        /* Contact cards */
        .contact-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-radius: 6px;
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.4);
          transition: border-color 0.3s, background-color 0.3s;
        }

        .contact-card:hover {
          border-color: var(--accent);
          background: rgba(0, 229, 255, 0.02);
        }

        .card-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-val {
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .arrow {
          color: var(--text-secondary);
          transition: transform 0.3s, color 0.3s;
        }

        .contact-card:hover .arrow {
          transform: translate(2px, -2px);
          color: var(--accent);
        }

        /* Nav links list */
        .nav-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-item {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.3s;
          width: fit-content;
        }

        .footer-nav-item:hover {
          color: var(--accent);
        }

        /* Socials */
        .socials-horizontal {
          display: flex;
          gap: 10px;
        }

        .social-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }

        .social-icon-btn:hover {
          border-color: var(--accent);
          background: rgba(0, 229, 255, 0.02);
          color: var(--accent);
        }

        /* Studio Info */
        .studio-info-text {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .back-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          padding: 10px 20px;
          border-radius: 4px;
          width: fit-content;
          transition: color 0.3s, border-color 0.3s, background-color 0.3s;
        }

        .back-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
          background: rgba(255,255,255,0.02);
        }

        .back-top-btn .bracket {
          font-size: 12px;
          line-height: 1;
        }

        /* Bottom Meta */
        .footer-bottom-meta {
          border-top: 1px solid var(--border-subtle);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .meta-right {
          display: flex;
          align-items: center;
        }

        @media (max-width: 991px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-headline {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 576px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
          }
          .footer-headline {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
