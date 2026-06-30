import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import AboutGlobe from '@/components/AboutGlobe';
import TestimonialStack from '@/components/TestimonialStack';
import Footer from '@/components/Footer';
import { ShieldAlert, Compass, Activity, Eye, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About HH Studio — Strategy-First Creative Marketing Agency',
  description: 'HH Studio is a strategy-first creative marketing agency. We build brands, campaigns, content, and digital systems that create measurable impact for ambitious businesses.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Strategy First.',
      description: 'Every project starts with deep discovery. Market research, competitor analysis, audience mapping — we understand your business inside out before we make anything.',
      icon: <Compass size={18} color="var(--accent)" />
    },
    {
      title: 'Results Over Optics.',
      description: 'We care about leads, conversions, and revenue — not follower counts and impressions. Every campaign, every piece of content, every design decision is tied to a measurable outcome.',
      icon: <Activity size={18} color="var(--accent)" />
    },
    {
      title: 'Radical Transparency.',
      description: 'No black-box agency experience. You get regular updates, clear reporting dashboards, and direct access to the people doing the work.',
      icon: <Eye size={18} color="var(--accent)" />
    },
    {
      title: 'Built for the Long Haul.',
      description: 'We don\'t just launch — we optimize. Our marketing systems are designed to compound over time, building momentum and delivering increasing returns.',
      icon: <ShieldAlert size={18} color="var(--accent)" />
    }
  ];

  const whyChoosePoints = [
    'Integrated team: strategy, creative, SEO, performance, and tech all in one place',
    'Data-driven approach with transparent monthly reporting',
    'Customized strategies — no cookie-cutter packages',
    'Industry-specific expertise across B2B, D2C, healthcare, education, real estate, and more',
    'Deep creative capability: photography, video, 3D, motion, web design',
    'Proven track record of measurable ROI across 50+ projects'
  ];

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 'calc(var(--header-height) + 40px)' }}>
        
        {/* Manifesto & 3D Network Globe */}
        <section style={{ padding: 'calc(var(--section-padding) * 0.7) 0 calc(var(--section-padding) * 0.3) 0', position: 'relative' }} className="about-section">
          <div className="container">
            <div className="about-grid">
              
              {/* Left Column: Manifesto Storytelling */}
              <div className="about-text-col">
                <span className="mono-label">[ STUDIO MATRIX ]</span>
                <h2 className="about-title">We&rsquo;re Not a Regular Agency.</h2>
                <p className="manifesto-text" style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '20px' }}>
                  We&rsquo;re a creative marketing studio that thinks like strategists and executes like marketers.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                  <p>
                    HH Studio was founded by creators who believe that content isn&rsquo;t an afterthought — it&rsquo;s the strategy. We combine the rigour of data-driven digital marketing with the craft of premium creative production to build brands that stand out, rank higher, and grow faster.
                  </p>
                  <p>
                    We are a full-service creative marketing agency serving ambitious startups, growing SMBs, and established enterprise brands. Our integrated team covers brand strategy, SEO, performance marketing, content production, web design, and social media — everything your brand needs to dominate your market, under one roof.
                  </p>
                  <p>
                    We don&rsquo;t chase vanity metrics. We don&rsquo;t over-promise and under-deliver. We build honest, transparent partnerships with our clients — and we measure our success entirely by theirs.
                  </p>
                </div>
                
                <div className="architectural-sign-off" style={{ marginTop: '40px' }}>
                  <div className="crosshair"></div>
                  <span>BANGALORE // INCEPTION</span>
                </div>
              </div>

              {/* Right Column: Interactive 3D Globe */}
              <div className="about-3d-col">
                <div className="globe-frame">
                  <AboutGlobe />
                  
                  <div className="globe-technical-hud">
                    <span>GLB.ROT // ACTIVE</span>
                    <span>COGNITIVE.NETWORK.NODE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section style={{ padding: 'calc(var(--section-padding) * 0.7) 0', borderTop: '1px solid var(--border-subtle)', background: 'rgba(15,15,17,0.1)' }}>
          <div className="container">
            <div style={{ marginBottom: '60px', maxWidth: '600px' }}>
              <span className="mono-label">Core Beliefs</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', marginTop: '1rem' }}>Our Values</h2>
            </div>
            
            <div className="values-grid">
              {values.map((val, idx) => (
                <div key={idx} className="value-card glassmorphism">
                  <div className="value-header">
                    <div className="val-icon-box">{val.icon}</div>
                    <h3>{val.title}</h3>
                  </div>
                  <p>{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section style={{ padding: 'calc(var(--section-padding) * 0.7) 0', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="why-choose-grid">
              <div style={{ maxWidth: '500px' }}>
                <span className="mono-label">Advantage</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>Why Choose HH Studio</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  We don&rsquo;t rely on templates or cookie-cutter solutions. We build customized, full-scale marketing systems tailored specifically to your project requirements.
                </p>
              </div>
              
              <div className="why-choose-list">
                {whyChoosePoints.map((point, idx) => (
                  <div key={idx} className="why-point">
                    <CheckCircle2 size={16} color="var(--accent)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Deck */}
        <TestimonialStack />
      </div>
      <Footer />
    </>
  );
}
