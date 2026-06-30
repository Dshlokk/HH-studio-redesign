'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled past 300px AND not near bottom of the page (within 550px of page bottom)
      const scrolledPast = window.scrollY > 300;
      const nearBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 550);
      
      setIsVisible(scrolledPast && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('book-call');
    if (contactSection) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(contactSection);
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="sticky-mobile-cta-container"
        >
          <a href="#book-call" onClick={handleClick} className="sticky-mobile-cta-btn">
            <Calendar size={14} />
            <span>Book Call</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
