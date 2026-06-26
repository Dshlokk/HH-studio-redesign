'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for a premium tactile lag effect
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Inspect hovered element and its ancestors for custom cursor data attributes
      const target = e.target as HTMLElement;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement;
      if (cursorEl) {
        const type = cursorEl.getAttribute('data-cursor') || 'hover';
        const text = cursorEl.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else {
        // Fallback for regular interactive elements
        const isInteractive = target.closest('a, button, select, input, textarea, [role="button"]');
        if (isInteractive) {
          setCursorType('hover');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Determine cursor styles based on hover state
  const variants: Record<string, any> = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: 'var(--accent)',
      borderRadius: '50%',
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 229, 255, 0.1)',
      border: '1px solid var(--accent)',
      borderRadius: '50%',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(0, 229, 255, 0.15)',
      border: '1px solid var(--accent)',
      borderRadius: '50%',
    },
    drag: {
      width: 90,
      height: 90,
      backgroundColor: 'rgba(0, 229, 255, 0.15)',
      border: '1px solid var(--accent)',
      borderRadius: '50%',
    },
    open: {
      width: 90,
      height: 90,
      backgroundColor: 'rgba(0, 229, 255, 0.15)',
      border: '1px solid var(--accent)',
      borderRadius: '50%',
    },
  };

  const currentVariant = variants[cursorType] || variants.default;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mixBlendMode: cursorType === 'default' ? 'normal' : 'normal',
      }}
      animate={{
        width: currentVariant.width * (isClicking ? 0.8 : 1),
        height: currentVariant.height * (isClicking ? 0.8 : 1),
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
        borderRadius: currentVariant.borderRadius,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
      className="custom-cursor-container"
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          style={{
            color: 'var(--accent)',
            fontSize: '10px',
            fontWeight: 'bold',
            letterSpacing: '0.15em',
            fontFamily: 'var(--font-mono)',
            textAlign: 'center',
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
