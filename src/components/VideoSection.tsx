'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Film, 
  ExternalLink, 
  X, 
  Volume2, 
  Sparkles, 
  Radio, 
  Maximize2,
  Clapperboard,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// =========================================================================
// VIDEO CONFIGURATION
// When you have the final video, paste the URL or file path below.
// Supported:
// - Direct MP4 / WebM file path (e.g. '/videos/showreel.mp4')
// - YouTube embed URL (e.g. 'https://www.youtube.com/embed/YOUR_ID')
// - Vimeo embed URL (e.g. 'https://player.vimeo.com/video/YOUR_ID')
// =========================================================================
export const SHOWREEL_CONFIG = {
  videoUrl: '', // Will give the video later
  title: 'HH Studio // Official Cinema Showreel 2026',
  subtitle: 'Commercial Brand Films · Architectural Cinematography · High-Retention Viral Reels',
  resolution: '4K DCI · 60 FPS',
  audio: 'Dolby Spatial 5.1',
};

interface VideoProductionItem {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  stats: string;
  color: string;
}

const FEATURED_VIDEOS: VideoProductionItem[] = [
  {
    id: 'o2-realty',
    client: 'O2 Realty Consultants',
    category: 'Video Production',
    title: 'O2 Realty — Corporate Milestone & Architectural Film',
    description: 'Cinematic video production celebrating the journey and milestones of O2 Realty. High-definition ground and drone cinematography capturing real estate prestige and investor trust.',
    link: 'https://www.instagram.com/p/DdLekRjDCzN/',
    tag: '4K CINEMA // MILESTONE REEL',
    stats: 'Full Reel Production',
    color: '#00e5ff'
  },
  {
    id: 'harith-rasoi',
    client: 'Harith Rasoi',
    category: 'Social Media & Reels',
    title: 'Harith Rasoi — Culinary Storytelling & Food Reels',
    description: 'Sensory short-form culinary video production and complete social media management. High-framerate food prep captures and authentic dining stories designed for viral reach.',
    link: 'https://www.instagram.com/harit_rasoi7/',
    tag: 'VIRAL REELS // SOCIAL ENGINE',
    stats: 'Social Media Management',
    color: '#10b981'
  },
  {
    id: 'singh-chaap',
    client: "Singh's Chaap",
    category: 'Commercial Video',
    title: "Singh's Chaap — High-Energy Food Commercials",
    description: 'Dynamic commercial food reels, sizzle cuts, and 360-degree promotional campaign videos that boosted franchise walk-ins and national brand recognition.',
    link: 'https://www.instagram.com/singhschaapindiaofficial/',
    tag: 'QSR COMMERCIAL // 360° CAMPAIGN',
    stats: '5M+ Impressions',
    color: '#f59e0b'
  }
];

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const hasCustomVideo = Boolean(SHOWREEL_CONFIG.videoUrl.trim());

  return (
    <section id="video" className="video-showcase-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="video-section-header">
          <div className="header-badge-row">
            <span className="mono-label">[ Protocol // Visual Production ]</span>
            <div className="live-status-pill">
              <span className="live-dot" />
              <span>CINEMA PROTOCOL</span>
            </div>
          </div>
          
          <h2 className="section-title">
            Cinematic Video Production.
          </h2>
          <p className="section-subtitle">
            We direct and produce high-retention brand films, architectural walkthroughs, commercial spots, and viral social reels that convert passive scrollers into invested clients.
          </p>
        </div>

        {/* Master Showreel Cinema Frame */}
        <div className="showreel-viewport glassmorphism">
          <div className="cinema-aspect-frame">
            
            {/* Ambient Background Glow */}
            <div className="ambient-glow" />

            {/* Video HUD Telemetry Overlays */}
            <div className="hud-overlay top">
              <div className="hud-badge rec">
                <span className="rec-dot" />
                <span>REC [00:02:14:08]</span>
              </div>
              <div className="hud-badge res">
                <Film size={12} />
                <span>{SHOWREEL_CONFIG.resolution}</span>
              </div>
              <div className="hud-badge audio">
                <Volume2 size={12} />
                <span>{SHOWREEL_CONFIG.audio}</span>
              </div>
            </div>

            <div className="hud-overlay bottom">
              <div className="hud-caption">
                <span className="mono-caption">MASTER SHOWREEL</span>
                <h4>{SHOWREEL_CONFIG.title}</h4>
              </div>
              <div className="hud-specs">
                <span>ARRI ALEXA LF // ANAMORPHIC</span>
                <span>COLOR: DAVINCI WIDE GAMUT</span>
              </div>
            </div>

            {/* Viewfinder Reticle */}
            <div className="viewfinder-grid">
              <div className="corner-bracket tl" />
              <div className="corner-bracket tr" />
              <div className="corner-bracket bl" />
              <div className="corner-bracket br" />
              <div className="center-crosshair">
                <div className="cross-h" />
                <div className="cross-v" />
                <div className="target-circle" />
              </div>
            </div>

            {/* Frequency Waveform Visualizer Bars */}
            <div className="waveform-bar-strip">
              {[40, 65, 30, 85, 95, 55, 75, 45, 90, 60, 80, 50, 70, 85, 40, 95, 60, 75, 50, 80, 45, 90, 65, 85].map((h, idx) => (
                <span 
                  key={idx} 
                  className="wave-bar" 
                  style={{ 
                    height: `${h}%`,
                    animationDelay: `${(idx % 6) * 0.15}s` 
                  }} 
                />
              ))}
            </div>

            {/* Central Play Trigger / Action Hub */}
            <div className="play-trigger-hub">
              <button 
                className="cinema-play-btn"
                onClick={() => setIsPlaying(true)}
                aria-label="Play Showreel"
                data-cursor="hover"
              >
                <div className="play-btn-halo" />
                <Play size={28} className="play-icon" />
              </button>
              
              <div className="play-label-box">
                <span className="play-title">
                  {hasCustomVideo ? 'PLAY OFFICIAL SHOWREEL' : 'EXPLORE SHOWREEL // PREVIEW'}
                </span>
                <span className="play-sub">
                  {hasCustomVideo ? 'Watch 4K Cinematic Cut' : 'Master Showreel in Post-Production · Client Reels Live Below'}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Featured Video Productions Grid (O2 Realty, Harith Rasoi, Singh's Chaap) */}
        <div className="featured-reels-container">
          <div className="reels-header-row">
            <div>
              <span className="mono-label">Client Productions</span>
              <h3 className="reels-title">Featured Reel &amp; Video Deployments</h3>
            </div>
            <p className="reels-header-desc">
              Direct links to live video productions and managed social media feeds handled by HH Studio.
            </p>
          </div>

          <div className="reels-grid">
            {FEATURED_VIDEOS.map((item) => (
              <div key={item.id} className="reel-card glassmorphism">
                <div className="reel-card-top">
                  <div className="reel-tag-pill" style={{ color: item.color, borderColor: `${item.color}40` }}>
                    <Radio size={10} />
                    <span>{item.tag}</span>
                  </div>
                  <span className="reel-stats-label">{item.stats}</span>
                </div>

                <div className="reel-card-body">
                  <span className="reel-client-name" style={{ color: item.color }}>{item.client}</span>
                  <h4 className="reel-card-title">{item.title}</h4>
                  <p className="reel-card-desc">{item.description}</p>
                </div>

                <div className="reel-card-footer">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="reel-link-btn"
                    data-cursor="hover"
                  >
                    <span>
                      {item.id === 'o2-realty' ? 'Watch O2 Realty Reel' : item.id === 'harith-rasoi' ? 'View Harith Rasoi Instagram' : 'View Campaign'}
                    </span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Capabilities Blueprint Strip */}
        <div className="video-specs-strip glassmorphism">
          <div className="spec-item">
            <span className="spec-val">4K DCI</span>
            <span className="spec-lbl">Ultra-HD Cinema Cameras</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-val">100%</span>
            <span className="spec-lbl">Custom Sound &amp; Color Grading</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item">
            <span className="spec-val">9:16 + 16:9</span>
            <span className="spec-lbl">Omnichannel Delivery</span>
          </div>
          <div className="spec-divider" />
          <div className="spec-item cta-item">
            <Link href="#book-call" className="video-cta-btn" data-cursor="hover">
              <span>Commission Video</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      {/* Video Playback Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            className="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
          >
            <motion.div 
              className="video-modal-content glassmorphism"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top-bar">
                <div className="modal-title-group">
                  <Clapperboard size={16} color="var(--accent)" />
                  <span>{SHOWREEL_CONFIG.title}</span>
                </div>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setIsPlaying(false)}
                  aria-label="Close Player"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-player-body">
                {hasCustomVideo ? (
                  // Custom Video Provided
                  SHOWREEL_CONFIG.videoUrl.includes('youtube.com') || SHOWREEL_CONFIG.videoUrl.includes('vimeo.com') ? (
                    <iframe
                      src={SHOWREEL_CONFIG.videoUrl}
                      title="Showreel Player"
                      className="modal-iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      controls 
                      autoPlay 
                      className="modal-video-element"
                      src={SHOWREEL_CONFIG.videoUrl}
                    >
                      Your browser does not support HTML video.
                    </video>
                  )
                ) : (
                  // Placeholder state: "will give the video later"
                  <div className="modal-placeholder-box">
                    <div className="placeholder-radar">
                      <Sparkles size={36} color="var(--accent)" />
                    </div>
                    <h3>Showreel Master In Final Post-Production</h3>
                    <p>
                      The official cinema showreel is currently undergoing sound design and 4K mastering. You can update the video link anytime in <code>src/components/VideoSection.tsx</code>.
                    </p>

                    <div className="modal-client-links">
                      <span className="links-header">EXPLORE LIVE CLIENT VIDEO PRODUCTIONS:</span>
                      <div className="links-buttons">
                        <a 
                          href="https://www.instagram.com/p/DdLekRjDCzN/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="modal-btn-accent"
                        >
                          <span>Watch O2 Realty Milestone Reel</span>
                          <ExternalLink size={12} />
                        </a>
                        <a 
                          href="https://www.instagram.com/harit_rasoi7/" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="modal-btn-outline"
                        >
                          <span>View Harith Rasoi Social Media</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .video-showcase-section {
          padding: var(--section-padding) 0;
          position: relative;
          background: #070709;
          border-top: 1px solid var(--border-subtle);
          overflow: hidden;
        }

        .video-section-header {
          margin-bottom: 50px;
          max-width: 720px;
        }

        .header-badge-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid rgba(0, 229, 255, 0.25);
          background: rgba(0, 229, 255, 0.05);
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--accent);
        }

        .live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: pulse-dot 1.8s infinite ease-in-out;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Showreel Viewport Frame */
        .showreel-viewport {
          position: relative;
          border-radius: 12px;
          border: 1px solid var(--border-subtle);
          background: #0a0a0d;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
        }

        .cinema-aspect-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #13131a 0%, #08080a 75%);
        }

        .ambient-glow {
          position: absolute;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(0, 85, 255, 0.02) 50%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
        }

        /* HUD Overlays */
        .hud-overlay {
          position: absolute;
          left: 30px;
          right: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 5;
          pointer-events: none;
        }

        .hud-overlay.top {
          top: 25px;
        }

        .hud-overlay.bottom {
          bottom: 25px;
        }

        .hud-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          border-radius: 4px;
          background: rgba(10, 10, 14, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
        }

        .hud-badge.rec {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.25);
        }

        .rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: rec-blink 1s infinite alternate;
        }

        @keyframes rec-blink {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }

        .hud-caption h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-top: 4px;
        }

        .mono-caption {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          color: var(--accent);
        }

        .hud-specs {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        /* Viewfinder Brackets */
        .viewfinder-grid {
          position: absolute;
          inset: 20px;
          pointer-events: none;
          z-index: 3;
        }

        .corner-bracket {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: rgba(0, 229, 255, 0.35);
        }

        .corner-bracket.tl { top: 0; left: 0; border-top: 1.5px solid; border-left: 1.5px solid; }
        .corner-bracket.tr { top: 0; right: 0; border-top: 1.5px solid; border-right: 1.5px solid; }
        .corner-bracket.bl { bottom: 0; left: 0; border-bottom: 1.5px solid; border-left: 1.5px solid; }
        .corner-bracket.br { bottom: 0; right: 0; border-bottom: 1.5px solid; border-right: 1.5px solid; }

        .center-crosshair {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          pointer-events: none;
        }

        .cross-h {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 229, 255, 0.2);
        }

        .cross-v {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0, 229, 255, 0.2);
        }

        .target-circle {
          position: absolute;
          inset: 15px;
          border: 1px dashed rgba(0, 229, 255, 0.25);
          border-radius: 50%;
        }

        /* Waveform Strip */
        .waveform-bar-strip {
          position: absolute;
          bottom: 65px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4px;
          height: 28px;
          z-index: 4;
          pointer-events: none;
          opacity: 0.65;
        }

        .wave-bar {
          width: 2px;
          background: var(--accent);
          border-radius: 1px;
          animation: wave-bounce 1.2s infinite ease-in-out;
        }

        @keyframes wave-bounce {
          0%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        /* Play Trigger Hub */
        .play-trigger-hub {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          z-index: 10;
          text-align: center;
        }

        .cinema-play-btn {
          position: relative;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: rgba(12, 12, 16, 0.9);
          border: 1.5px solid var(--accent);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
        }

        .play-btn-halo {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed rgba(0, 229, 255, 0.4);
          animation: spin-halo 12s linear infinite;
        }

        @keyframes spin-halo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cinema-play-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 35px rgba(0, 229, 255, 0.4);
        }

        .cinema-play-btn .play-icon {
          margin-left: 4px;
        }

        .play-label-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .play-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-primary);
        }

        .play-sub {
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.8;
        }

        /* Featured Client Video Productions Grid */
        .featured-reels-container {
          margin-top: 60px;
        }

        .reels-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 20px;
        }

        .reels-title {
          font-size: 1.6rem;
          margin-top: 6px;
          color: var(--text-primary);
        }

        .reels-header-desc {
          max-width: 440px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .reels-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .reel-card {
          border-radius: 8px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 280px;
          border: 1px solid var(--border-subtle);
          background: rgba(15, 15, 18, 0.5);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .reel-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
        }

        .reel-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .reel-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid;
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.1em;
          font-weight: bold;
        }

        .reel-stats-label {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .reel-client-name {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }

        .reel-card-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 12px;
        }

        .reel-card-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .reel-card-footer {
          border-top: 1px solid var(--border-subtle);
          padding-top: 16px;
          margin-top: auto;
        }

        .reel-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .reel-link-btn:hover {
          gap: 12px;
          color: var(--text-primary);
        }

        /* Specs Strip */
        .video-specs-strip {
          margin-top: 40px;
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
          padding: 25px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .spec-val {
          font-family: var(--font-mono);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .spec-lbl {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .spec-divider {
          width: 1px;
          height: 40px;
          background: var(--border-subtle);
        }

        .video-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: var(--bg-primary);
          padding: 12px 24px;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: background 0.3s, transform 0.2s;
        }

        .video-cta-btn:hover {
          background: #00bccc;
          transform: translateY(-2px);
        }

        /* Modal Backdrop & Player */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .video-modal-content {
          width: 100%;
          max-width: 900px;
          background: #0d0d11;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
        }

        .modal-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(20, 20, 26, 0.6);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .modal-close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
        }

        .modal-player-body {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-iframe,
        .modal-video-element {
          width: 100%;
          height: 100%;
          border: none;
        }

        .modal-placeholder-box {
          padding: 40px;
          text-align: center;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .placeholder-radar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .modal-placeholder-box h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .modal-placeholder-box p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .modal-placeholder-box code {
          background: rgba(255, 255, 255, 0.08);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          color: var(--accent);
        }

        .modal-client-links {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .links-header {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
        }

        .links-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .modal-btn-accent,
        .modal-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 10px 18px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .modal-btn-accent {
          background: var(--accent);
          color: var(--bg-primary);
        }

        .modal-btn-accent:hover {
          background: #00bccc;
        }

        .modal-btn-outline {
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .modal-btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .reels-grid {
            grid-template-columns: 1fr;
          }
          .reels-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          .video-specs-strip {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
          .spec-divider {
            display: none;
          }
          .cta-item {
            width: 100%;
          }
          .video-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .cinema-aspect-frame {
            min-height: 320px;
          }
          .hud-overlay {
            left: 15px;
            right: 15px;
          }
          .hud-specs {
            display: none;
          }
          .hud-badge.audio {
            display: none;
          }
          .cinema-play-btn {
            width: 68px;
            height: 68px;
          }
          .play-title {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .hud-badge.res {
            display: none;
          }
          .waveform-bar-strip {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
