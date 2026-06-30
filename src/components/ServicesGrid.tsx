'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Layers, Cpu, Radio, Film, Settings2, Target, Plus
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  tag: string;
  summary: string;
  details: string[];
  techCode: string;
}

const SERVICES: Service[] = [
  {
    id: 'brand',
    title: 'Brand Engineering',
    icon: <Layers size={20} strokeWidth={1.5} />,
    tag: 'BRAND STRATEGY & IDENTITY',
    summary: 'We build the architecture of authority. From technical brand positioning and messaging frameworks to visual identity systems — we define how your brand is perceived and remembered.',
    details: [
      'Brand Positioning & Messaging Framework',
      'Visual Identity System (Logo, Typography, Color)',
      'Brand Strategy & Consulting',
      'Corporate & Employer Branding',
      'Logo & Collateral Design'
    ],
    techCode: 'ID // ARCHITECTURE.01'
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    icon: <Target size={20} strokeWidth={1.5} />,
    tag: 'SEO & ORGANIC GROWTH',
    summary: 'Tired of being invisible on Google? We get you to Page 1 — and keep you there. Technical SEO, content strategy, and link building that drive sustainable organic traffic and qualified leads.',
    details: [
      'Technical SEO & Site Audits',
      'On-Page & Content SEO',
      'Local & Ecommerce SEO',
      'Link Building & Authority Setup',
      'Generative Engine Optimization (GEO / AI Search)',
      'Conversion Rate Optimization (CRO)'
    ],
    techCode: 'SEO // ORGANIC.02'
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    icon: <Radio size={20} strokeWidth={1.5} />,
    tag: 'PAID ACQUISITION',
    summary: 'We don\'t just run ads — we build revenue-generating machines. From Google Ads and Meta Ads to LinkedIn and YouTube campaigns, our performance marketing is laser-focused on CPL and ROAS.',
    details: [
      'Google Ads & YouTube Campaigns',
      'Meta Ads (Facebook & Instagram)',
      'LinkedIn Ads (B2B Lead Generation)',
      'Ad Creative & Copy Development',
      'Landing Page Optimization & CRO',
      'Transparent ROI Reporting'
    ],
    techCode: 'PAID // TELEMETRY.03'
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    icon: <Terminal size={20} strokeWidth={1.5} />,
    tag: 'COMMUNITY PROTOCOLS',
    summary: 'Social media is where your audience lives. We build social strategies that grow your following, drive meaningful engagement, and turn followers into loyal customers.',
    details: [
      'Social Strategy & Content Calendar',
      'Content Creation (Reels, Carousels, Stories)',
      'Community Management & Engagement',
      'Paid Social Campaigns',
      'Influencer Marketing & Analytics'
    ],
    techCode: 'SOC // COMMUNITY.04'
  },
  {
    id: 'content',
    title: 'Content & Visual Protocol',
    icon: <Film size={20} strokeWidth={1.5} />,
    tag: 'CREATIVE PRODUCTION',
    summary: 'Content is the engine of every great brand. We produce high-quality, platform-native content that captures attention, builds trust, and drives action — from brand films to 3D CGI animations.',
    details: [
      'Photography (Product, Corporate, Lifestyle)',
      'Videography (Brand Films, Reels, Testimonials)',
      '3D Animation, CGI & Motion Graphics',
      'Podcast & Explainer Video Production',
      'Blog, Copywriting & PR Content'
    ],
    techCode: 'GFX // PROTOCOL.05'
  },
  {
    id: 'web-design',
    title: 'Interface & Web Design',
    icon: <Cpu size={20} strokeWidth={1.5} />,
    tag: 'INTERFACE DESIGN & DEV',
    summary: 'Your website is your most important marketing asset. We design and develop beautiful, fast, conversion-optimized websites that reflect your brand and turn visitors into leads.',
    details: [
      'Custom UI/UX Website Design',
      'Mobile-First Responsive Development',
      'Ecommerce & Headless Development',
      'Landing Page Design & CRO',
      'Website Speed & Core Web Vitals Optimization',
      'Technical SEO Setup & Maintenance'
    ],
    techCode: 'UI // INTERFACE.06'
  },
  {
    id: 'growth-systems',
    title: 'Growth Systems',
    icon: <Settings2 size={20} strokeWidth={1.5} />,
    tag: 'MARKETING INFRASTRUCTURE',
    summary: 'Marketing without measurement is guesswork. We build the analytics infrastructure, automation systems, and conversion funnels that turn your marketing into a predictable growth engine.',
    details: [
      'Marketing Analytics & GA4 Dashboards',
      'Email Marketing & Automation Systems',
      'Lead Funnel Design & Optimization',
      'A/B Testing & CRO Campaigns',
      'Account-Based Marketing (ABM)',
      'Fractional CMO & Growth Consulting'
    ],
    techCode: 'SYS // AUTOMATION.07'
  }
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation: maximum 8 degrees
    const rotateX = (y / (rect.height / 2)) * -8;
    const rotateY = (x / (rect.width / 2)) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? '-10px' : '0px'})`,
        transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className="service-card glassmorphism"
      data-cursor="hover"
    >
      {/* Schematic grid markers */}
      <div className="card-blueprint-bg" />
      <div className="card-code-label">{service.techCode}</div>
      
      {/* Icon & Category */}
      <div className="card-header" style={{ transform: 'translateZ(20px)' }}>
        <div className="icon-wrapper" style={{ color: isHovered ? 'var(--accent)' : 'var(--text-primary)' }}>
          {service.icon}
        </div>
        <span className="card-tag">{service.tag}</span>
      </div>

      {/* Main Title & Summary */}
      <div className="card-body" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="card-title">{service.title}</h3>
        <p className="card-summary">{service.summary}</p>
      </div>

      {/* Expanded list - Slides in on hover */}
      <div 
        className={`card-details-wrapper ${isHovered ? 'expanded' : ''}`}
        style={{
          transform: 'translateZ(40px)',
        }}
      >
        <div className="card-divider" />
        <ul className="details-list">
          {service.details.map((detail, i) => (
            <li key={i} className="details-item">
              <Plus size={10} color="var(--accent)" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" style={{ padding: 'var(--section-padding) 0', position: 'relative' }} className="services-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <span className="mono-label">Capabilities</span>
          <h2 className="section-title">
            Everything Your Brand Needs. Under One Roof.
          </h2>
          <p>
            We operate at the intersection of design, strategy, and growth — building brands that cannot be ignored in crowded digital markets.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          background-color: var(--bg-primary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        /* Modular Service Card */
        .service-card {
          border-radius: 8px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          background: rgba(15, 15, 17, 0.4);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 280px;
        }

        /* Background grid decors */
        .card-blueprint-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(var(--border-subtle) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }

        .card-code-label {
          position: absolute;
          top: 15px;
          right: 20px;
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          opacity: 0.5;
          z-index: 2;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
          z-index: 1;
        }

        .icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 4px;
          border: 1px solid var(--border-subtle);
          background: rgba(5,5,5,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s, border-color 0.3s;
        }

        .service-card:hover .icon-wrapper {
          border-color: var(--accent);
        }

        .card-tag {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }

        .card-body {
          z-index: 1;
        }

        .card-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .card-summary {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 0px;
        }

        .card-details-wrapper {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        /* Desktop hover expansion state */
        @media (hover: hover) {
          .service-card:hover .card-details-wrapper,
          .card-details-wrapper.expanded {
            max-height: 320px;
            opacity: 1;
          }
        }

        /* Always open on touch devices and mobile screens */
        @media (hover: none), (max-width: 768px) {
          .card-details-wrapper {
            max-height: 350px !important;
            opacity: 1 !important;
          }
        }

        /* Hover Expansion */
        .card-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 25px 0 20px 0;
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
        }

        .details-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .details-item span {
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            min-height: auto;
            padding: 30px;
          }
        }
      `}</style>
    </section>
  );
}
