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
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%23121214" rx="12" stroke="%23222" stroke-width="1"/><circle cx="280" cy="70" r="16" fill="%23ff9800"/><text x="275" y="74" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">SC</text><text x="306" y="70" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">singhschaapindiaofficial</text><text x="306" y="82" fill="%23888" font-family="sans-serif" font-size="9">Jaipur, India • Sponsored</text><rect x="260" y="100" width="280" height="280" fill="%231e1e22" rx="6"/><circle cx="400" cy="240" r="70" fill="none" stroke="%23ff9800" stroke-width="1" opacity="0.3"/><path d="M 350,240 L 450,240" stroke="%23ff9800" stroke-width="0.8" opacity="0.5"/><path d="M 400,190 L 400,290" stroke="%23ff9800" stroke-width="0.8" opacity="0.5"/><rect x="360" y="200" width="80" height="80" fill="none" stroke="%23ff9800" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.4"/><text x="400" y="244" fill="%23ff9800" font-family="monospace" font-size="9" text-anchor="middle" font-weight="bold">SIGNATURE CHAAP</text><path d="M 270,400 C 265,395 258,400 258,407 C 258,414 270,422 270,422 C 270,422 282,414 282,407 C 282,400 275,395 270,400 Z" fill="%23ff9800"/><circle cx="295" cy="408" r="6" fill="none" stroke="%23fff" stroke-width="1.5"/><path d="M 299,412 L 304,417" stroke="%23fff" stroke-width="1.5"/><path d="M 315,405 L 327,411 L 315,417 Z" fill="none" stroke="%23fff" stroke-width="1.5"/><text x="270" y="445" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">12,405 likes</text><text x="270" y="465" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">singhschaapindiaofficial <tspan fill="%23ccc" font-weight="normal">Tasting the authentic...</tspan></text><text x="270" y="540" fill="%23888" font-family="sans-serif" font-size="9" letter-spacing="1">INSTAGRAM POST // FEED_01</text></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%23121214" rx="12" stroke="%23222" stroke-width="1"/><circle cx="280" cy="70" r="16" fill="%23ff9800"/><text x="275" y="74" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">SC</text><text x="306" y="70" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">singhschaapindiaofficial</text><text x="306" y="82" fill="%23888" font-family="sans-serif" font-size="9">Jaipur, India • Sponsored</text><rect x="260" y="100" width="280" height="280" fill="%231e1e22" rx="6"/><rect x="280" y="140" width="240" height="200" fill="none" stroke="%23ff9800" stroke-width="0.8" opacity="0.3"/><text x="400" y="170" fill="%23ff9800" font-family="sans-serif" font-size="18" text-anchor="middle" font-weight="bold">360° CAMPAIGN</text><text x="400" y="195" fill="%23fff" font-family="monospace" font-size="10" text-anchor="middle">CRUNCHY SERIES LAUNCH</text><path d="M 320,230 L 480,230" stroke="%23ff9800" stroke-width="2"/><rect x="360" y="250" width="80" height="25" fill="%23ff9800" rx="3"/><text x="400" y="266" fill="%23121214" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ORDER NOW</text><text x="270" y="445" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">9,832 likes</text><text x="270" y="465" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">singhschaapindiaofficial <tspan fill="%23ccc" font-weight="normal">Jaipur\'s favorite grilled...</tspan></text><text x="270" y="540" fill="%23888" font-family="sans-serif" font-size="9" letter-spacing="1">INSTAGRAM POST // FEED_02</text></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%231c1c22" rx="12" stroke="%23222" stroke-width="1"/><circle cx="400" cy="300" r="30" fill="rgba(255, 152, 0, 0.2)" stroke="%23ff9800" stroke-width="2"/><path d="M 392,285 L 415,300 L 392,315 Z" fill="%23ff9800"/><circle cx="280" cy="480" r="12" fill="%23ff9800"/><text x="298" y="478" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">singhschaapindiaofficial</text><rect x="298" y="486" width="45" height="12" fill="none" stroke="%23ff9800" stroke-width="0.8" rx="2"/><text x="320" y="495" fill="%23ff9800" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">Follow</text><text x="268" y="520" fill="%23eee" font-family="sans-serif" font-size="9">How we prepare Jaipur\'s best Grilled Chaap...</text><path d="M 525,320 C 522,317 518,320 518,324 C 518,328 525,333 525,333 C 525,333 532,328 532,324 C 532,320 528,317 525,320 Z" fill="%23fff"/><text x="525" y="344" fill="%23fff" font-family="sans-serif" font-size="8" text-anchor="middle">45.2K</text><circle cx="525" cy="460" r="10" fill="%23ff9800" stroke="%23fff" stroke-width="1" stroke-dasharray="3 3"/><rect x="260" y="540" width="280" height="2" fill="rgba(255,255,255,0.2)"/><rect x="260" y="540" width="180" height="2" fill="%23ff9800"/><text x="260" y="554" fill="%23888" font-family="sans-serif" font-size="8" letter-spacing="1">INSTAGRAM REEL // VIDEO_03</text></svg>'
    ]
  },
  {
    id: 'loa',
    title: 'Legends Outdoor Advertisement',
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
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="180" y="50" width="440" height="500" fill="%23121214" rx="8" stroke="%23222" stroke-width="1"/><circle cx="215" cy="85" r="18" fill="%230055ff"/><text x="210" y="90" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">AB</text><text x="242" y="82" fill="%23fff" font-family="sans-serif" font-size="13" font-weight="bold">Aryan Bhatia</text><text x="242" y="96" fill="%23888" font-family="sans-serif" font-size="10">Founder, Legends Of Advertisement (LOA) • 1st</text><text x="200" y="140" fill="%23eee" font-family="sans-serif" font-size="11">How we scaled a bootstrapped startup to $10M ARR using pure creative strategy.</text><rect x="200" y="175" width="400" height="250" fill="%231c1c22" rx="4"/><path d="M 240,360 L 320,300 L 400,340 L 480,240 L 560,210" fill="none" stroke="%230055ff" stroke-width="2"/><circle cx="480" cy="240" r="4" fill="%230055ff"/><circle cx="560" cy="210" r="4" fill="%230055ff"/><text x="480" y="230" fill="%230055ff" font-family="monospace" font-size="8" text-anchor="middle">ROAS SPIKE: 4.8X</text><circle cx="400" cy="300" r="28" fill="rgba(0, 85, 255, 0.2)" stroke="%230055ff" stroke-width="2"/><path d="M 393,286 L 414,300 L 393,314 Z" fill="%230055ff"/><rect x="200" y="415" width="400" height="10" fill="rgba(0,0,0,0.6)"/><rect x="200" y="415" width="160" height="10" fill="%230055ff"/><text x="200" y="450" fill="%23888" font-family="sans-serif" font-size="10">842 Likes • 104 Comments • 45K Views</text><line x1="200" y1="465" x2="600" y2="465" stroke="%23222" stroke-width="1"/><text x="230" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Like</text><text x="330" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Comment</text><text x="450" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Repost</text><text x="560" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Send</text><text x="200" y="534" fill="%23888" font-family="sans-serif" font-size="8" letter-spacing="1">LINKEDIN VIDEO // POST_01</text></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="180" y="50" width="440" height="500" fill="%23121214" rx="8" stroke="%23222" stroke-width="1"/><circle cx="215" cy="85" r="18" fill="%230055ff"/><text x="210" y="90" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">AB</text><text x="242" y="82" fill="%23fff" font-family="sans-serif" font-size="13" font-weight="bold">Aryan Bhatia</text><text x="242" y="96" fill="%23888" font-family="sans-serif" font-size="10">Founder, Legends Of Advertisement (LOA) • 1st</text><text x="200" y="140" fill="%23eee" font-family="sans-serif" font-size="11">The psychology behind ad creative fatigue (And how to beat it).</text><rect x="200" y="175" width="400" height="250" fill="%231c1c22" rx="4"/><path d="M 280,200 L 520,200 L 460,380 L 340,380 Z" fill="none" stroke="%230055ff" stroke-width="1.5" opacity="0.3"/><line x1="300" y1="260" x2="500" y2="260" stroke="%230055ff" stroke-width="1" opacity="0.5"/><line x1="320" y1="320" x2="480" y2="320" stroke="%230055ff" stroke-width="1" opacity="0.5"/><text x="400" y="240" fill="%230055ff" font-family="monospace" font-size="9" text-anchor="middle">AWARENESS [85%]</text><text x="400" y="300" fill="%230055ff" font-family="monospace" font-size="9" text-anchor="middle">DESIRE [42%]</text><text x="400" y="360" fill="%230055ff" font-family="monospace" font-size="9" text-anchor="middle">ACTION [12.4%]</text><circle cx="400" cy="300" r="28" fill="rgba(0, 85, 255, 0.2)" stroke="%230055ff" stroke-width="2"/><path d="M 393,286 L 414,300 L 393,314 Z" fill="%230055ff"/><rect x="200" y="415" width="400" height="10" fill="rgba(0,0,0,0.6)"/><rect x="200" y="415" width="220" height="10" fill="%230055ff"/><text x="200" y="450" fill="%23888" font-family="sans-serif" font-size="10">924 Likes • 148 Comments • 52K Views</text><line x1="200" y1="465" x2="600" y2="465" stroke="%23222" stroke-width="1"/><text x="230" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Like</text><text x="330" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Comment</text><text x="450" y="490" fill="%230055ff" font-family="sans-serif" font-size="11" font-weight="bold">Reposted</text><text x="560" y="490" fill="%23888" font-family="sans-serif" font-size="11" font-weight="bold">Send</text><text x="200" y="534" fill="%23888" font-family="sans-serif" font-size="8" letter-spacing="1">LINKEDIN VIDEO // POST_02</text></svg>'
    ]
  },
  {
    id: 'shania-mackin',
    title: 'Shania Mackin Interiors',
    category: 'Creative Campaigns',
    year: '2026',
    tabLabel: 'SHANIA MACKIN // SM-03',
    color: '#86868b',
    overview: 'High-fidelity ad creative production and campaign assets for luxury interior design brand, Shania Mackin Interiors. We developed premium visual creatives, structured paid ad campaigns, and engineered high-converting ad layouts to attract high-value design clients.',
    challenge: 'The high-end interior design space demands an exceptionally polished, luxury visual aesthetic. Traditional ad templates failed to reflect the brand\'s sophisticated design standards, requiring bespoke editorial layouts and motion graphics.',
    research: 'Audited performance metrics for premium lifestyle and home decor services. Discovered that affluent buyers respond best to cinematic, gallery-style layout displays and minimal typography that emphasizes spatial volume.',
    strategy: 'Formulated a creative campaign strategy based on portfolio-focused video ads, sophisticated typography slides, and targeted social media performance creatives.',
    execution: 'Designed and rendered editorial ad layouts, produced short-form video content highlighting design details, and configured high-converting visual landing assets.',
    results: 'Outstanding campaign engagement rates, a highly refined cost-per-lead for high-ticket design inquiries, and elevated brand positioning across luxury digital networks.',
    link: 'https://www.shaniamackininteriors.com/',
    galleryImages: [
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%23121214" rx="12" stroke="%23222" stroke-width="1"/><circle cx="280" cy="70" r="16" fill="%2386868b"/><text x="275" y="74" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">SM</text><text x="306" y="70" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">shaniamackininteriors</text><text x="306" y="82" fill="%23888" font-family="sans-serif" font-size="9">Luxury Interiors • Sponsored</text><rect x="260" y="100" width="280" height="280" fill="%231c1c22" rx="6"/><rect x="280" y="140" width="240" height="200" fill="none" stroke="%2386868b" stroke-width="0.8" opacity="0.3"/><line x1="330" y1="340" x2="330" y2="280" stroke="%2386868b" stroke-width="1" opacity="0.5"/><line x1="330" y1="280" x2="470" y2="280" stroke="%2386868b" stroke-width="1" opacity="0.5"/><line x1="470" y1="280" x2="470" y2="340" stroke="%2386868b" stroke-width="1" opacity="0.5"/><rect x="360" y="180" width="80" height="60" fill="none" stroke="#86868b" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.4"/><text x="400" y="215" fill="%2386868b" font-family="monospace" font-size="8" text-anchor="middle">MINIMAL LIVING CORE</text><path d="M 270,400 C 265,395 258,400 258,407 C 258,414 270,422 270,422 C 270,422 282,414 282,407 C 282,400 275,395 270,400 Z" fill="%2386868b"/><text x="270" y="445" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">3,892 likes</text><text x="270" y="465" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">shaniamackininteriors <tspan fill="%23ccc" font-weight="normal">Bespoke residential design...</tspan></text><text x="270" y="540" fill="%23888" font-family="sans-serif" font-size="9" letter-spacing="1">INSTAGRAM POST // FEED_01</text></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%23121214" rx="12" stroke="%23222" stroke-width="1"/><circle cx="280" cy="70" r="16" fill="%2386868b"/><text x="275" y="74" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">SM</text><text x="306" y="70" fill="%23fff" font-family="sans-serif" font-size="12" font-weight="bold">shaniamackininteriors</text><rect x="260" y="100" width="280" height="280" fill="%231c1c22" rx="6"/><rect x="280" y="120" width="100" height="100" fill="none" stroke="%2386868b" stroke-width="1" opacity="0.3"/><circle cx="330" cy="170" r="30" fill="none" stroke="%2386868b" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.4"/><rect x="400" y="120" width="120" height="220" fill="none" stroke="%2386868b" stroke-width="1" opacity="0.3"/><rect x="280" y="240" width="100" height="100" fill="none" stroke="%2386868b" stroke-width="1" opacity="0.3"/><text x="400" y="358" fill="%2386868b" font-family="monospace" font-size="7">TEXTURE COMPOSITION SCHEMA</text><text x="270" y="445" fill="%23fff" font-family="sans-serif" font-size="11" font-weight="bold">4,120 likes</text><text x="270" y="465" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">shaniamackininteriors <tspan fill="%23ccc" font-weight="normal">Curating tactile textures...</tspan></text><text x="270" y="540" fill="%23888" font-family="sans-serif" font-size="9" letter-spacing="1">INSTAGRAM POST // FEED_02</text></svg>',
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230b0b0d" rx="8"/><rect x="250" y="40" width="300" height="520" fill="%231c1c22" rx="12" stroke="%23222" stroke-width="1"/><circle cx="400" cy="300" r="30" fill="rgba(134, 134, 139, 0.2)" stroke="%2386868b" stroke-width="2"/><path d="M 392,285 L 415,300 L 392,315 Z" fill="%2386868b"/><circle cx="280" cy="480" r="12" fill="%2386868b"/><text x="298" y="478" fill="%23fff" font-family="sans-serif" font-size="10" font-weight="bold">shaniamackininteriors</text><text x="268" y="520" fill="%23eee" font-family="sans-serif" font-size="9">Penthouse walkthrough. Revealing bespoke millwork details...</text><path d="M 525,320 C 522,317 518,320 518,324 C 518,328 525,333 525,333 C 525,333 532,328 532,324 C 532,320 528,317 525,320 Z" fill="%23fff"/><text x="525" y="344" fill="%23fff" font-family="sans-serif" font-size="8" text-anchor="middle">24.8K</text><circle cx="525" cy="460" r="10" fill="%2386868b" stroke="%23fff" stroke-width="1" stroke-dasharray="3 3"/><rect x="260" y="540" width="280" height="2" fill="rgba(255,255,255,0.2)"/><rect x="260" y="540" width="220" height="2" fill="%2386868b"/><text x="260" y="554" fill="%23888" font-family="sans-serif" font-size="8" letter-spacing="1">INSTAGRAM REEL // VIDEO_03</text></svg>'
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
            <div className="case-study-scroll-wrapper" data-lenis-prevent>
              
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
                        {/* Faint technical box with project links */}
                        <div className="wirebox" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 10px', minHeight: '120px' }}>
                          <div className="corner tl"></div>
                          <div className="corner tr"></div>
                          <div className="corner bl"></div>
                          <div className="corner br"></div>
                          <div className="dot"></div>
                          <span className="schem-label" style={{ marginBottom: '12px' }}>
                            {activeProject.id === 'singh-chaap' && "INSTAGRAM DISCOVERY"}
                            {activeProject.id === 'loa' && "LINKEDIN TARGET"}
                            {activeProject.id === 'shania-mackin' && "WEB INTERACTION"}
                            {!activeProject.link && "STRATEGY CORE"}
                          </span>
                          {activeProject.link && (
                            <a 
                              href={activeProject.link} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="wirebox-link-btn"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'var(--accent)',
                                color: 'var(--bg-primary)',
                                padding: '10px 18px',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '10px',
                                fontWeight: '700',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textDecoration: 'none'
                              }}
                            >
                              <span>
                                {activeProject.id === 'singh-chaap' && "Instagram Link"}
                                {activeProject.id === 'loa' && "LinkedIn Link"}
                                {activeProject.id === 'shania-mackin' && "Website Link"}
                              </span>
                              <ExternalLink size={10} />
                            </a>
                          )}
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
