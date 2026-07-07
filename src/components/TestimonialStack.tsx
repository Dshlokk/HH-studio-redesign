'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "HH Studio has been managing our complete 360° marketing, and the results have been outstanding. From social media and creative campaigns to branding and customer engagement, their team has handled everything professionally. Their ideas have helped us strengthen our brand and reach more customers. They're more than a creative studio, they're a growth partner.",
    author: "Babloo Singh Sultana",
    role: "Founder",
    company: "Singh's Chaap, Jaipur"
  },
  {
    id: '2',
    quote: "Working with HH Studio for our LinkedIn marketing has been a great experience. Their team understands personal branding, creates engaging content, and maintains consistency throughout the process. We saw a noticeable improvement in our professional presence and audience engagement. I highly recommend them to anyone looking to grow their brand on LinkedIn.",
    author: "Aryan Bhatia",
    role: "Founder",
    company: "Legend ADVT (LOA)"
  },
  {
    id: '3',
    quote: "HH Studio created stunning ad creatives that perfectly captured our luxury aesthetic. Their strategic approach and high-fidelity visual production took our campaigns to the next level, driving high-intent design clients to our brand. They are exceptional partners.",
    author: "Shania Mackin",
    role: "Founder",
    company: "Shania Mackin Interiors"
  }
];

export default function TestimonialStack() {
  const [cards, setCards] = useState<Testimonial[]>(TESTIMONIALS);
  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 200], [-12, 12]);
  const opacity = useTransform(dragX, [-200, -150, 0, 150, 200], [0.5, 1, 1, 1, 0.5]);
  const controls = useAnimation();

  // Moves the swiped/dismissed card to the back of the stack
  const cycleCard = () => {
    setCards((prev) => {
      const next = [...prev];
      const swiped = next.shift();
      if (swiped) {
        next.push(swiped);
      }
      return next;
    });
    dragX.set(0); // Reset motion value
  };

  const handleDragEnd = async (event: any, info: any) => {
    const swipeThreshold = 120;
    if (info.offset.x > swipeThreshold) {
      // Throw right
      await controls.start({ x: 350, opacity: 0, rotate: 15, transition: { duration: 0.3 } });
      cycleCard();
    } else if (info.offset.x < -swipeThreshold) {
      // Throw left
      await controls.start({ x: -350, opacity: 0, rotate: -15, transition: { duration: 0.3 } });
      cycleCard();
    } else {
      // Snap back
      controls.start({ x: 0, rotate: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 300 } });
    }
  };

  return (
    <section id="testimonials" style={{ padding: 'var(--section-padding) 0', position: 'relative' }} className="testimonials-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <span className="mono-label">Field Reports</span>
          <h2 className="section-title-sm">
            Validated by Industry Leaders.
          </h2>
          <p>
            Insights from technology executives, founders, and marketing leaders who partnered with HH Studio.
          </p>
        </div>

        {/* Stack Deck Viewport */}
        <div className="testimonials-stack-viewport">
          <div className="card-deck">
            {cards.map((item, index) => {
              const isTop = index === 0;
              
              // Visual layering styles for background cards
              const scale = 1 - index * 0.04;
              const yOffset = index * 14;
              const rotation = -3 + index * 2;

              return (
                <motion.div
                  key={item.id}
                  className="testimonial-card glassmorphism"
                  style={{
                    zIndex: 10 - index,
                    // Connect motion values to the top card only
                    x: isTop ? dragX : 0,
                    rotate: isTop ? rotate : rotation,
                    opacity: isTop ? opacity : 1 - index * 0.25,
                    transformOrigin: 'bottom center',
                  }}
                  drag={isTop ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={isTop ? handleDragEnd : undefined}
                  animate={isTop ? controls : { scale, y: yOffset, rotate: rotation }}
                  initial={isTop ? { x: 0, rotate: 0 } : false}
                  data-cursor={isTop ? 'drag' : 'default'}
                  data-cursor-text={isTop ? 'SWIPE CARD' : ''}
                >
                  {/* Decorative quotes icon */}
                  <div className="card-deco-quote">
                    <Quote size={32} strokeWidth={1} color="var(--accent)" style={{ opacity: 0.15 }} />
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="quote-text">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  {/* User Profile info */}
                  <div className="author-meta">
                    <div className="name-title">
                      <span className="author-name">{item.author}</span>
                      <span className="author-role">{item.role} {"//"} <span className="accent-text">{item.company}</span></span>
                    </div>
                    
                    <div className="technical-stamp">
                      <span>VERIFIED PARTNER</span>
                      <div className="dot"></div>
                    </div>
                  </div>

                  {/* Corner blueprint mark */}
                  <div className="corner-metric">
                    <span>SYS.REF-0{index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-section {
          background-color: var(--bg-primary);
          overflow: visible;
        }

        .testimonials-stack-viewport {
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .card-deck {
          position: relative;
          width: 650px;
          height: 380px;
        }

        /* Testimonial Card */
        .testimonial-card {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.85);
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          touch-action: pan-y; /* Allows vertical page scrolling but enables touch dragging */
        }

        .card-deco-quote {
          position: absolute;
          top: 30px;
          left: 40px;
          z-index: 0;
        }

        .quote-text {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          line-height: 1.65;
          color: var(--text-primary);
          z-index: 1;
          margin-top: 15px;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .author-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-top: 1px solid var(--border-subtle);
          padding-top: 25px;
          z-index: 1;
        }

        .name-title {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .author-name {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .author-role {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .technical-stamp {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: 4px;
          background: rgba(5,5,5,0.4);
        }

        .technical-stamp span {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        .technical-stamp .dot {
          width: 5px;
          height: 5px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent);
        }

        .corner-metric {
          position: absolute;
          top: 20px;
          right: 25px;
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .testimonials-stack-viewport {
            height: 540px;
          }
          .card-deck {
            width: 100%;
            height: 440px;
          }
          .testimonial-card {
            padding: 24px;
          }
          .quote-text {
            font-size: 1.05rem;
            margin-top: 10px;
          }
          .author-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            padding-top: 15px;
          }
          .technical-stamp {
            align-self: flex-start;
          }
        }
        @media (max-width: 480px) {
          .card-deck {
            height: 490px;
          }
          .quote-text {
            font-size: 0.92rem;
            line-height: 1.55;
          }
        }
      `}</style>
    </section>
  );
}
