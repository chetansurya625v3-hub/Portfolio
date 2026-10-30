import React, { useEffect, useState, useRef } from 'react';

/**
 * CursorSpark Component (Interactive Easter Egg)
 * Subtle custom cursor follower and gentle trailing light spark that smoothly tracks
 * the user's mouse position with spring physics across the entire screen.
 */
export default function CursorSpark() {
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef(null);
  const auraRef = useRef(null);

  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (no touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;
      if (!visible) setVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let animationId;
    const updatePosition = () => {
      // Smooth lerp interpolation
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.2;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.2;

      if (cursorRef.current && auraRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.targetX}px, ${pos.current.targetY}px, 0)`;
        auraRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(updatePosition);
    };

    animationId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [visible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer trailing frosted emerald aura spark */}
      <div
        ref={auraRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none transition-all duration-150 ${
          isPointer
            ? 'w-10 h-10 -ml-5 -mt-5 bg-emerald-500/20 border border-lime-400/60 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
            : 'w-8 h-8 bg-emerald-500/10 border border-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
        } blur-[0.5px]`}
      />

      {/* Sharp central neon emerald/lime light spark */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 rounded-full pointer-events-none transition-transform duration-75 ${
          isPointer
            ? 'w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-lime-300 shadow-[0_0_10px_#bef264]'
            : 'w-2 h-2 bg-emerald-400 shadow-[0_0_8px_#10b981]'
        }`}
      />
    </div>
  );
}
