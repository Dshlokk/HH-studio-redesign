'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--header-height)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
        className={isScrolled || isMobileMenuOpen ? 'glassmorphism' : ''}
        theme-scroll={isScrolled ? 'scrolled' : 'top'}
      >
        <div
          className="container"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link 
            href="/" 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 1010
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            data-cursor="hover"
          >
            <img 
              src="/logo.png" 
              alt="HH Studio Logo" 
              style={{ 
                height: '32px', 
                width: 'auto',
                display: 'block'
              }} 
            />
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'bold', 
              fontSize: '1.1rem', 
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              lineHeight: 1
            }}>
              HH<span style={{ color: 'var(--accent)', fontWeight: '300' }}>STUDIO</span>
            </span>
          </Link>

          {/* Navigation Items (PC/Desktop) */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.72rem',
                    fontWeight: '600',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s ease',
                  }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  data-cursor="hover"
                >
                  <span className="link-text">{link.name}</span>
                  <span className="hover-dot" style={{ opacity: isActive ? 1 : 0, bottom: isActive ? '-4px' : '0px' }} />
                </Link>
              );
            })}
          </nav>

          {/* CTA: Book Call Button (PC/Desktop) */}
          <div className="header-cta">
            <Link
              href="/#book-call"
              className="book-call-btn"
              data-cursor="hover"
            >
              <span>Book Call</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <style jsx global>{`
          header[theme-scroll='top'] {
            background-color: transparent;
            border-bottom: 1px solid transparent;
          }
          header[theme-scroll='scrolled'] {
            background-color: rgba(15, 15, 17, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border-subtle);
          }
          .nav-link:hover {
            color: var(--text-primary) !important;
          }
          .hover-dot {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--accent);
            opacity: 0;
            transition: opacity 0.3s ease, bottom 0.3s ease, background-color 0.3s;
          }
          .nav-link:hover .hover-dot {
            opacity: 1;
            bottom: -4px;
          }

          /* Book Call Button Styling */
          .book-call-btn {
            font-family: var(--font-heading);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--accent);
            border: 1px solid rgba(0, 229, 255, 0.25);
            background: rgba(0, 229, 255, 0.02);
            padding: 8px 18px;
            border-radius: 4px;
            transition: background-color 0.3s, border-color 0.3s, color 0.3s;
            display: inline-block;
          }

          .book-call-btn:hover {
            background-color: rgba(0, 229, 255, 0.08);
            border-color: var(--accent);
            color: var(--text-primary);
          }

          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            cursor: pointer;
            z-index: 1010;
            padding: 5px;
            outline: none;
            transition: color 0.3s;
          }
          
          .mobile-menu-btn:hover {
            color: var(--accent);
          }

          @media (max-width: 768px) {
            .header-cta {
              display: none !important;
            }
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }
        `}</style>
      </motion.header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(5, 5, 5, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '6rem 2rem 2rem 2rem',
              overflowY: 'auto',
            }}
          >
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '2.5rem', 
                alignItems: 'center',
                textAlign: 'center',
                margin: 'auto 0'
              }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        fontWeight: '800',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
              >
                <Link
                  href="/#book-call"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    marginTop: '1.5rem',
                    display: 'inline-block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--bg-primary)',
                    backgroundColor: 'var(--accent)',
                    padding: '14px 32px',
                    borderRadius: '4px',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
                  }}
                >
                  Book Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
