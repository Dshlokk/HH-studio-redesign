'use client';

import { useEffect, useRef } from 'react';

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking variables
    let mouse = { x: width / 2, y: height / 2 };
    let targetMouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return;

      // Smooth mouse lerping
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // 1. Clear background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // 2. Draw subtle glowing gradient light around mouse
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.025)'); // Cyan glow
      gradient.addColorStop(0.5, 'rgba(0, 85, 255, 0.005)'); // Deep Cobalt
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Grid lines with parallax offset
      const gridSpacing = 80;
      const parallaxFactor = 0.02; // Subtle shift
      const offsetX = (mouse.x - width / 2) * parallaxFactor;
      const offsetY = (mouse.y - height / 2) * parallaxFactor;

      ctx.strokeStyle = 'rgba(31, 31, 35, 0.25)'; // Low-contrast border color
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = offsetX % gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offsetY % gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 4. Draw architectural blueprint coordinates & elements (e.g. crosshairs)
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.07)';
      ctx.fillStyle = 'rgba(134, 134, 139, 0.15)'; // Neutral grey text
      ctx.font = 'bold 9px var(--font-heading), sans-serif';

      // Corner technical borders
      const borderPadding = 30;
      const tickLength = 15;
      
      // Top-Left corner tick
      ctx.beginPath();
      ctx.moveTo(borderPadding, borderPadding + tickLength);
      ctx.lineTo(borderPadding, borderPadding);
      ctx.lineTo(borderPadding + tickLength, borderPadding);
      ctx.stroke();

      // Top-Right corner tick
      ctx.beginPath();
      ctx.moveTo(width - borderPadding, borderPadding + tickLength);
      ctx.lineTo(width - borderPadding, borderPadding);
      ctx.lineTo(width - borderPadding - tickLength, borderPadding);
      ctx.stroke();

      // Bottom-Left corner tick
      ctx.beginPath();
      ctx.moveTo(borderPadding, height - borderPadding - tickLength);
      ctx.lineTo(borderPadding, height - borderPadding);
      ctx.lineTo(borderPadding + tickLength, height - borderPadding);
      ctx.stroke();

      // Bottom-Right corner tick
      ctx.beginPath();
      ctx.moveTo(width - borderPadding, height - borderPadding - tickLength);
      ctx.lineTo(width - borderPadding, height - borderPadding);
      ctx.lineTo(width - borderPadding - tickLength, height - borderPadding);
      ctx.stroke();

      // Draw active coordinates under the mouse (in clean sans font)
      const coordText = `GRID LOC [X: ${Math.round(mouse.x)} | Y: ${Math.round(mouse.y)}]`;
      ctx.fillText(coordText, borderPadding + 10, height - borderPadding - 10);
      ctx.fillText('HH STUDIO // CREATIVE SYSTEMS', width - borderPadding - 165, borderPadding + 20);

      // 5. Draw subtle grid intersections (little technical pluses)
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
      const startX = Math.floor(offsetX / gridSpacing) * gridSpacing + (offsetX % gridSpacing);
      const startY = Math.floor(offsetY / gridSpacing) * gridSpacing + (offsetY % gridSpacing);
      const plusSize = 3;

      for (let x = startX; x < width + gridSpacing; x += gridSpacing) {
        for (let y = startY; y < height + gridSpacing; y += gridSpacing) {
          // Draw small plus signs at grid intersections
          ctx.beginPath();
          ctx.moveTo(x - plusSize, y);
          ctx.lineTo(x + plusSize, y);
          ctx.moveTo(x, y - plusSize);
          ctx.lineTo(x, y + plusSize);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
