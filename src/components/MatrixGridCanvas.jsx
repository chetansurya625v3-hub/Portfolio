import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Interactive HTML5 Canvas providing a Cyber-Emerald matrix-dot grid
 * featuring ambient wave motion, mouse perspective displacement, and ripple effects.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
      radius: 160,
    };

    // Dot class representation
    const SPACING = 34; // Pixel spacing between grid dots
    let dots = [];

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          dots.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            baseRadius: 1.25,
            radius: 1.25,
            alpha: 0.16,
            baseAlpha: 0.16,
            color: '#10b981', // Neon emerald
          });
        }
      }
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initDots();
    };

    handleResize();

    // Mouse event handlers
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isHovering = false;
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isHovering = true;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation loop
    let lastTime = performance.now();

    const render = (time) => {
      // Lerp mouse coordinates for fluid dampening
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      const spring = 0.075;
      const friction = 0.82;
      const t = time * 0.0016;

      // Active interactive dots array for connecting dynamic cyber mesh lines
      const activeDots = [];

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Ambient gentle wave perspective ripple
        const wave = Math.sin(dot.originX * 0.006 + dot.originY * 0.005 + t) * 3.5;
        const targetOriginY = dot.originY + wave;

        // Interaction with mouse cursor
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && mouse.isHovering) {
          const force = (1 - dist / mouse.radius);
          const angle = Math.atan2(dy, dx);
          // Gently push dots away to form dynamic perspective ripple
          dot.vx += Math.cos(angle) * force * 5.2;
          dot.vy += Math.sin(angle) * force * 5.2;

          // Target brightness and radius boost
          const targetAlpha = 0.25 + force * 0.75;
          dot.alpha += (targetAlpha - dot.alpha) * 0.2;
          dot.radius += (dot.baseRadius + force * 2.2 - dot.radius) * 0.2;

          // Highlight color: Bright lime when very close to cursor, neon emerald otherwise
          dot.color = force > 0.65 ? '#a3e635' : '#10b981';

          if (force > 0.35) {
            activeDots.push(dot);
          }
        } else {
          // Decay back to base state
          dot.alpha += (dot.baseAlpha - dot.alpha) * 0.08;
          dot.radius += (dot.baseRadius - dot.radius) * 0.08;
          dot.color = '#10b981';
        }

        // Spring physics pulling back to resting grid point
        const ax = (dot.originX - dot.x) * spring;
        const ay = (targetOriginY - dot.y) * spring;

        dot.vx = (dot.vx + ax) * friction;
        dot.vy = (dot.vy + ay) * friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0.6, dot.radius), 0, Math.PI * 2);

        if (dot.alpha > 0.45) {
          ctx.fillStyle = dot.color;
          ctx.shadowColor = dot.color;
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = `rgba(16, 185, 129, ${dot.alpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      // Draw subtle connecting laser mesh lines between nearby excited dots
      if (activeDots.length > 1) {
        ctx.shadowBlur = 0;
        for (let j = 0; j < activeDots.length; j++) {
          for (let k = j + 1; k < activeDots.length; k++) {
            const p1 = activeDots[j];
            const p2 = activeDots[k];
            const segDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (segDist < SPACING * 1.6) {
              const lineAlpha = (1 - segDist / (SPACING * 1.6)) * 0.3;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
              ctx.lineWidth = 0.9;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
}

