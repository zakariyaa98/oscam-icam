"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const MAX_DIST = 150;
const MOUSE_RADIUS = 180;

/**
 * Layered interactive Hero background: solid black base, a canvas particle
 * network that reacts to the pointer, a periodic diagonal light beam, film
 * grain and a vignette.
 *
 * Ported from the supplied reference design (colors/animation/canvas logic)
 * and adapted to: size itself to the Hero section rather than the full
 * viewport, respect prefers-reduced-motion, and fully clean up on unmount.
 * Purely decorative — pointer-events are disabled throughout so it never
 * intercepts clicks on the Hero content above it.
 */
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let frameId = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const mouse: { x: number | null; y: number | null } = { x: null, y: null };

    // Reference formula (`(w*h)/14000`, capped at 110) assumed a
    // full-viewport hero. Ours is scoped to the shorter Hero section, so a
    // smaller divisor keeps desktop near the same ~100-110 target, with a
    // floor so small mobile heights don't render an overly sparse grid.
    function nodeCount() {
      const area = width * height;
      return Math.max(28, Math.min(110, Math.round(area / 9000)));
    }

    function createNodes() {
      nodes = Array.from({ length: nodeCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function resize() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx!.strokeStyle = `rgba(227,6,19,${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255,110,110,0.75)";
        ctx!.shadowColor = "rgba(227,6,19,0.6)";
        ctx!.shadowBlur = 5;
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0.01) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.6;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      }

      drawFrame();
      frameId = requestAnimationFrame(step);
    }

    // Reduced motion: draw one static frame and never schedule another —
    // the grid stays present as a calm alternative, without the drift/
    // pointer-repulsion animation loop.
    function start() {
      cancelAnimationFrame(frameId);
      if (reduceMotion) {
        drawFrame();
      } else {
        frameId = requestAnimationFrame(step);
      }
    }

    function handlePointerMove(event: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        start();
      }, 150);
    }

    function handleMotionChange(event: MediaQueryListEvent) {
      reduceMotion = event.matches;
      start();
    }

    resize();
    start();

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("resize", handleResize);
    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", handleMotionChange);
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);
      if (typeof motionQuery.removeEventListener === "function") {
        motionQuery.removeEventListener("change", handleMotionChange);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
      <div className="hero-beam" />
      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}
