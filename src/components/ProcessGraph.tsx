'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSearch, Compass, Layers, CloudLightning, Activity, Plus
} from 'lucide-react';

interface ProcessStep {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
  metrics: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discover',
    name: 'Discover',
    subtitle: 'SYSTEM INTEL',
    icon: <FileSearch size={18} />,
    description: 'We go deep before we make anything. Market research, competitor analysis, audience mapping, and keyword intelligence — the foundation everything else stands on.',
    deliverables: ['Market Research', 'Competitor Analysis', 'Audience Mapping', 'Keyword Intelligence'],
    metrics: 'METRICS: MARKET_RESEARCH // CONFIDENCE: 98.4%'
  },
  {
    id: 'strategize',
    name: 'Strategize',
    subtitle: 'PLANNING COMPILATION',
    icon: <Compass size={18} />,
    description: 'Findings become direction. We develop positioning, messaging hierarchy, creative direction, SEO roadmap, and a phased plan with clear KPIs and success metrics.',
    deliverables: ['Brand Positioning Spec', 'Messaging Hierarchy', 'Creative Direction', 'SEO & Campaign Roadmap'],
    metrics: 'STRATEGY: BRAND_ROADMAP // ROI_PROJECTION: 4.8X'
  },
  {
    id: 'create',
    name: 'Create',
    subtitle: 'PRODUCTION INTERACTION',
    icon: <Layers size={18} />,
    description: 'Strategy becomes reality. Design, copy, content, code — all built in tight iteration cycles with your team. Not a black-box handoff, but a true creative partnership.',
    deliverables: ['Custom Brand Design', 'Copywriting & Content Assets', 'NextJS Front-End Prototypes', 'Creative Campaign Assets'],
    metrics: 'SYSTEM: BRAND_SYSTEMS // ACCESSIBILITY: WCAG_AA'
  },
  {
    id: 'launch',
    name: 'Launch',
    subtitle: 'DEPLOYMENT MATRIX',
    icon: <CloudLightning size={18} />,
    description: 'Controlled, coordinated, and tracked from day one. We manage the go-live with technical SEO setup, analytics configuration, and full campaign deployment.',
    deliverables: ['Technical SEO Schema', 'Vercel Edge Deployment', 'Analytics & Tracking Setup', 'Campaign Launch Run'],
    metrics: 'DEPLOY: LIVE_EDGE_LAUNCH // PROPAGATION: 100%'
  },
  {
    id: 'optimize',
    name: 'Optimize',
    subtitle: 'TELEMETRY CYCLE',
    icon: <Activity size={18} />,
    description: 'Launch is the beginning. We monitor performance, run A/B experiments, refine ad creative, and iterate on what the data tells us — compounding results over time.',
    deliverables: ['Performance Dashboards', 'A/B Experiment Runs', 'Ad Creative Refinement', 'Compounding ROI Reports'],
    metrics: 'GROWTH: A/B_TEST_RATE // COMPACTION: +48%'
  }
];

export default function ProcessGraph() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" style={{ padding: '120px 0', position: 'relative' }} className="process-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '80px', maxWidth: '600px' }}>
          <span className="mono-label">Operational Protocol</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
            No Friction. Just Results.
          </h2>
          <p>
            An engineered methodology that governs our work from scoping to runtime optimization. Click nodes to inspect active systems.
          </p>
        </div>

        {/* Process Diagram Workspace */}
        <div className="process-workspace glassmorphism">
          
          {/* Node Graph Track */}
          <div className="graph-nodes-track">
            {/* SVG Connector Line */}
            <svg className="connector-svg" viewBox="0 0 700 80" preserveAspectRatio="none">
              <line 
                x1="50" y1="40" x2="650" y2="40"
                fill="none" 
                stroke="rgba(31, 31, 35, 0.6)" 
                strokeWidth="1.5" 
                strokeDasharray="4 4"
              />
              
              {/* Traveling Glowing Data Packet */}
              <line 
                x1="50" y1="40" x2="650" y2="40"
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="1.5" 
                strokeDasharray="40 160"
                className="pulse-path"
              />
            </svg>

            {/* Nodes overlay */}
            <div className="nodes-overlay">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeStepIndex === index;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(index)}
                    className={`node-button ${isActive ? 'active' : ''}`}
                    data-cursor="hover"
                    style={{
                      // Zig-zag wave offsets for PC
                      transform: `translateY(${
                        index % 2 === 0 ? '-10px' : '10px'
                      })`
                    }}
                  >
                    <div className="node-outer-ring">
                      <div className="node-inner-dot">
                        {step.icon}
                      </div>
                    </div>
                    <span className="node-name">{step.name}</span>
                    <span className="node-num">0{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="process-details-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="details-grid"
              >
                {/* Left column - Description */}
                <div className="details-summary-col">
                  <span className="mono-label">{activeStep.subtitle}</span>
                  <h3 className="details-title">Phase 0{activeStepIndex + 1} // {activeStep.name}</h3>
                  <p className="details-desc">{activeStep.description}</p>
                  
                  <div className="technical-metric">
                    <code>{activeStep.metrics}</code>
                  </div>
                </div>

                {/* Right column - Deliverables */}
                <div className="details-deliverables-col">
                  <h4>DELIVERABLES</h4>
                  <ul className="deliverables-list">
                    {activeStep.deliverables.map((item, i) => (
                      <li key={i}>
                        <Plus size={10} color="var(--accent)" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative Blueprint Line */}
                  <div className="diagram-deco">
                    <div className="deco-cross"></div>
                    <div className="deco-line"></div>
                    <div className="deco-cross"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .process-section {
          background-color: var(--bg-primary);
        }

        .process-workspace {
          border-radius: 12px;
          padding: 50px;
          border: 1px solid var(--border-subtle);
          background: rgba(15,15,17,0.3);
        }

        /* Node Graph Track */
        .graph-nodes-track {
          position: relative;
          width: 100%;
          height: 120px;
          margin-bottom: 60px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 20px;
        }

        .connector-svg {
          width: 100%;
          height: 80px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .pulse-path {
          stroke-dashoffset: 400;
          animation: flow 8s linear infinite;
        }

        @keyframes flow {
          to {
            stroke-dashoffset: 0;
          }
        }

        .nodes-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          z-index: 2;
        }

        /* Node Button */
        .node-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          color: var(--text-secondary);
          transition: color 0.3s;
          position: relative;
        }

        .node-outer-ring {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.4s, box-shadow 0.4s;
        }

        .node-inner-dot {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          color: var(--text-secondary);
          transition: background-color 0.4s, color 0.4s;
        }

        .node-name {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.05em;
          margin-top: 10px;
          font-weight: 500;
        }

        .node-num {
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          opacity: 0.5;
          margin-top: 4px;
        }

        /* Hover & Active States */
        .node-button:hover .node-outer-ring,
        .node-button.active .node-outer-ring {
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(0, 229, 255, 0.15);
        }

        .node-button:hover .node-inner-dot,
        .node-button.active .node-inner-dot {
          background-color: rgba(0, 229, 255, 0.08);
          color: var(--accent);
        }

        .node-button:hover .node-name,
        .node-button.active .node-name {
          color: var(--text-primary);
        }

        /* Details Panel */
        .process-details-panel {
          min-height: 220px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 60px;
        }

        .details-summary-col {
          display: flex;
          flex-direction: column;
        }

        .details-title {
          font-size: 1.8rem;
          margin-top: 10px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .details-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 30px;
          max-width: 500px;
        }

        .technical-metric {
          padding: 8px 16px;
          border-radius: 4px;
          background: rgba(15,15,17,0.8);
          border: 1px solid var(--border-subtle);
          display: inline-flex;
          align-self: flex-start;
        }

        .technical-metric code {
          font-family: var(--font-mono);
          font-size: 8px;
          color: var(--accent);
          letter-spacing: 0.1em;
        }

        .details-deliverables-col h4 {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 35px;
        }

        .deliverables-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Decorative Blueprint Lines */
        .diagram-deco {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .deco-cross {
          width: 6px;
          height: 6px;
          position: relative;
        }

        .deco-cross::before, .deco-cross::after {
          content: '';
          position: absolute;
          background: var(--border-subtle);
        }

        .deco-cross::before { top: 2px; left: 0; width: 6px; height: 1px; }
        .deco-cross::after { top: 0; left: 2px; width: 1px; height: 6px; }

        .deco-line {
          height: 1px;
          background: var(--border-subtle);
          flex-grow: 1;
          margin: 0 10px;
        }

        @media (max-width: 991px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .process-workspace {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .graph-nodes-track {
            height: auto;
            border-bottom: none;
            margin-bottom: 30px;
          }
          .connector-svg {
            display: none;
          }
          .nodes-overlay {
            position: relative;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            padding: 0;
            height: auto;
          }
          .node-button {
            transform: none !important;
          }
          .node-name {
            font-size: 8px !important;
            margin-top: 6px;
          }
          .node-outer-ring {
            width: 32px;
            height: 32px;
          }
          .node-inner-dot {
            width: 24px;
            height: 24px;
          }
        }
        @media (max-width: 480px) {
          .nodes-overlay {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
