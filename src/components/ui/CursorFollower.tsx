"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const CursorFollower: React.FC = () => {
  const pathname = usePathname();
  const isShopRoute = pathname?.startsWith("/shop");

  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Position references for smooth requestAnimationFrame lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // Disable if touch screen or user prefers reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion || isShopRoute) {
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
      }

      // Position direct dot immediately under cursor
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for interactive targets under pointer
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "button, a, input, select, textarea, [role='button'], .btn-cursor-reveal, .btn-reveal-primary, .btn-reveal-secondary, .btn-reveal-gold, [data-cursor-interactive]"
        );
        setIsInteractive(!!interactiveEl);

        // Update relative mouse coordinates for cursor-driven button reveals
        const revealBtn = target.closest(
          ".btn-cursor-reveal, .btn-reveal-primary, .btn-reveal-secondary, .btn-reveal-gold, [data-cursor-reveal]"
        ) as HTMLElement | null;

        if (revealBtn) {
          const rect = revealBtn.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          revealBtn.style.setProperty("--mouse-x", `${relX}px`);
          revealBtn.style.setProperty("--mouse-y", `${relY}px`);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for the follower ring
    const render = () => {
      // Lerp factor 0.18 gives responsive fluid lag without excessive delay
      const factor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isShopRoute, isVisible]);

  // Exclude entire shop route, touch devices, and unmounted state
  if (!isMounted || isShopRoute) {
    return null;
  }

  return (
    <div
      className="cursor-follower-root fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-300 select-none"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Outer fluid trailing ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-200 ease-out will-change-transform ${
          isInteractive
            ? "w-11 h-11 border-2 border-emerald-500/80 bg-emerald-500/10 shadow-[0_0_16px_rgba(16,185,129,0.35)] backdrop-blur-[1px] scale-110"
            : "w-8 h-8 border border-emerald-600/40 dark:border-emerald-400/50 bg-emerald-500/[0.04] dark:bg-emerald-400/[0.06] shadow-[0_0_8px_rgba(16,185,129,0.15)]"
        }`}
      />

      {/* Tiny precise pointer center dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-100 ease-out will-change-transform ${
          isInteractive
            ? "w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 scale-75 opacity-70"
            : "w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 opacity-90 shadow-sm"
        }`}
      />
    </div>
  );
};
