'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, PenTool, GitBranch, Plus } from 'lucide-react';

interface LaboratoryAsset {
  id: string;
  title: string;
  icon: React.ReactNode;
  code: string;
  description: string;
}

const LAB_ASSETS: LaboratoryAsset[] = [
  {
    id: 'strategy',
    title: 'Creative Brand Strategy',
    icon: <PenTool size={16} />,
    code: `BRAND_CORE:
  positioning: "Futuristic Precision"
  audience: "High-Performance Tech"
  tone: "Sophisticated / Bold"
  value_prop: "Systems over screens."`,
    description: 'We map core brand variables, content directories, and strategic value propositions.'
  },
  {
    id: 'tokens',
    title: 'Design System Tokens',
    icon: <Cpu size={16} />,
    code: `DESIGN_SYSTEM:
  theme: "deep-matte-black"
  colors:
    primary: "#050505"
    accent: "#00e5ff"
  typography:
    heading: "Plus Jakarta"
    body: "Inter"`,
    description: 'We construct strict visual design tokens, layout parameters, and grid spacings.'
  },
  {
    id: 'campaign',
    title: 'Omnichannel Schema',
    icon: <Terminal size={16} />,
    code: `CAMPAIGN_CHANNELS:
  interactive_web: "active"
  growth_nodes:
    - "email-telemetry"
    - "audience-heatmaps"
  expected_roi: "4.8X acceleration"`,
    description: 'We model growth funnels, user conversion paths, and campaign channel variables.'
  },
  {
    id: 'telemetry',
    title: 'Conversion Telemetry',
    icon: <GitBranch size={16} />,
    code: `CONVERSION_ENGINE:
  telemetry: "active-edge-analytics"
  milestones:
    - "archive-explore"
    - "card-tilt-hover"
    - "contact-initialize"`,
    description: 'We deploy analytics setups to monitor user interaction pathways and retention triggers.'
  }
];

export default function StudioShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="showcase" style={{ padding: '120px 0', position: 'relative' }} className="showcase-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <span className="mono-label">Laboratory</span>
          <h2 style={{ fontSize: 'clamp(2.0rem, 5.5vw, 3.0rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
            Studio Showcase
          </h2>
          <p>
            Inside our creative systems laboratory. We maintain clean guidelines, brand systems, and telemetry setups.
          </p>
        </div>

        {/* Lab Grid Layout */}
        <motion.div 
          className="lab-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {LAB_ASSETS.map((asset) => (
            <motion.div 
              key={asset.id} 
              className="lab-card glassmorphism"
              variants={itemVariants}
            >
              {/* Card Technical Decors */}
              <div className="lab-card-header">
                <div className="lab-icon-title">
                  <div className="lab-icon-box">{asset.icon}</div>
                  <h4>{asset.title}</h4>
                </div>
                <div className="lab-indicator">
                  <div className="ping-dot" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code IDE display */}
              <div className="code-editor-box">
                <div className="code-editor-top">
                  <div className="circles">
                    <span className="c red"></span>
                    <span className="c yellow"></span>
                    <span className="c green"></span>
                  </div>
                  <span className="filename">{asset.id}.config.yaml</span>
                </div>
                <pre className="code-display">
                  <code>{asset.code}</code>
                </pre>
              </div>

              {/* Description */}
              <div className="lab-card-footer">
                <p>{asset.description}</p>
                <div className="deco-cross">
                  <Plus size={10} color="var(--border-subtle)" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Large Decorative Blueprint Block */}
        <motion.div 
          className="showcase-blueprint-banner glassmorphism"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="blueprint-deco-lines">
            <svg viewBox="0 0 1200 200" width="100%" height="100%">
              {/* Concentric blueprint circles */}
              <circle cx="600" cy="100" r="80" stroke="rgba(0, 229, 255, 0.08)" strokeWidth="0.5" fill="none" strokeDasharray="3 3" />
              <circle cx="600" cy="100" r="140" stroke="rgba(0, 229, 255, 0.04)" strokeWidth="0.5" fill="none" />
              
              {/* Grid lines */}
              <line x1="0" y1="100" x2="1200" y2="100" stroke="rgba(0, 229, 255, 0.08)" strokeWidth="0.5" strokeDasharray="5 5" />
              <line x1="600" y1="0" x2="600" y2="200" stroke="rgba(0, 229, 255, 0.08)" strokeWidth="0.5" strokeDasharray="5 5" />
              
              {/* Diagonal lines */}
              <line x1="100" y1="0" x2="1100" y2="200" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="0.5" />
              <line x1="100" y1="200" x2="1100" y2="0" stroke="rgba(0, 229, 255, 0.03)" strokeWidth="0.5" />

              <text x="615" y="115" fill="var(--accent)" font-family="Space Grotesk" font-size="8" opacity="0.6" letter-spacing="1">ARCHITECTURAL.ENGINEERING.GRID</text>
            </svg>
          </div>
          <div className="banner-details">
            <div className="banner-col">
              <span className="banner-num">100%</span>
              <span className="banner-label">IN-HOUSE ENGINEERING</span>
            </div>
            <div className="banner-col">
              <span className="banner-num">60FPS</span>
              <span className="banner-label">3D FLUID RENDERING</span>
            </div>
            <div className="banner-col">
              <span className="banner-num">A11Y</span>
              <span className="banner-label">ACCESSIBILITY COMPLIANT</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .showcase-section {
          background-color: var(--bg-primary);
        }

        .lab-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        /* Lab Card */
        .lab-card {
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.3);
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .lab-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lab-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lab-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 1px solid var(--border-subtle);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .lab-icon-title h4 {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .lab-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(0, 229, 255, 0.15);
          background: rgba(0, 229, 255, 0.02);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .lab-indicator span {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        .ping-dot {
          width: 5px;
          height: 5px;
          background-color: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent);
          animation: pulse-ping 2s infinite;
        }

        @keyframes pulse-ping {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Code Editor Window */
        .code-editor-box {
          border: 1px solid var(--border-subtle);
          background: #09090b;
          border-radius: 6px;
          overflow: hidden;
          font-family: var(--font-mono);
        }

        .code-editor-top {
          height: 32px;
          background: rgba(15,15,17,0.7);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          padding: 0 15px;
          position: relative;
        }

        .code-editor-top .circles {
          display: flex;
          gap: 6px;
        }

        .code-editor-top .c {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .code-editor-top .c.red { background-color: #ef4444; }
        .code-editor-top .c.yellow { background-color: #f59e0b; }
        .code-editor-top .c.green { background-color: #10b981; }

        .code-editor-top .filename {
          font-size: 8px;
          color: var(--text-secondary);
          letter-spacing: 0.1em;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .code-display {
          padding: 20px;
          margin: 0;
          overflow-x: auto;
        }

        .code-display code {
          font-size: 0.75rem;
          color: #d1d1d6;
          line-height: 1.5;
          text-align: left;
          white-space: pre-wrap;
          display: block;
        }

        @media (max-width: 576px) {
          .lab-card {
            padding: 20px;
          }
          .code-display {
            padding: 12px;
          }
          .code-display code {
            font-size: 0.68rem;
            white-space: pre;
          }
        }

        .lab-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 15px;
        }

        .lab-card-footer p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          max-width: 80%;
        }

        /* Showcase Banner */
        .showcase-blueprint-banner {
          border-radius: 10px;
          position: relative;
          height: 260px;
          overflow: hidden;
          background: rgba(15, 15, 17, 0.4);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
        }

        .blueprint-deco-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.8;
        }

        .banner-details {
          display: flex;
          justify-content: space-between;
          z-index: 1;
          border-top: 1px solid var(--border-subtle);
          padding-top: 30px;
        }

        .banner-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .banner-num {
          font-family: var(--font-mono);
          font-size: 2.2rem;
          color: var(--text-primary);
          line-height: 1;
        }

        .banner-label {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        @media (max-width: 991px) {
          .lab-grid {
            grid-template-columns: 1fr;
          }
          .showcase-blueprint-banner {
            height: auto;
            padding: 30px;
          }
          .banner-details {
            flex-direction: column;
            gap: 25px;
          }
        }
      `}</style>
    </section>
  );
}
