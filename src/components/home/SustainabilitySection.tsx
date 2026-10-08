"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

const TOTAL_FRAMES = 111;
const IMAGE_DIR = "/media/GROWING%20MORE%20WASTING%20LESS";

function getFrameUrl(index: number): string {
  const frameNum = String(index + 1).padStart(3, "0");
  return `${IMAGE_DIR}/ezgif-frame-${frameNum}.jpg`;
}

export const SustainabilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  // Draw current frame with responsive 'cover' presentation
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Look for target frame or fallback to closest loaded frame
    let imgToDraw: HTMLImageElement | null = null;
    if (imagesRef.current[frameIndex] && isLoadedRef.current[frameIndex]) {
      imgToDraw = imagesRef.current[frameIndex];
    } else {
      // Find nearest loaded frame
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIndex - offset;
        const next = frameIndex + offset;
        if (prev >= 0 && isLoadedRef.current[prev] && imagesRef.current[prev]) {
          imgToDraw = imagesRef.current[prev];
          break;
        }
        if (next < TOTAL_FRAMES && isLoadedRef.current[next] && imagesRef.current[next]) {
          imgToDraw = imagesRef.current[next];
          break;
        }
      }
    }

    if (!imgToDraw || !imgToDraw.naturalWidth) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Calculate aspect ratio cover fit
    const imgRatio = imgToDraw.naturalWidth / imgToDraw.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(imgToDraw, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Update canvas internal pixel buffer matching container size & devicePixelRatio
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload frames progressively
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    // Preload frame 1 first
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      isLoadedRef.current[0] = true;
      images[0] = firstImg;
      setFirstFrameReady(true);
      renderFrame(0);
    };
    images[0] = firstImg;

    // Preload subsequent frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        isLoadedRef.current[i] = true;
        // If current active frame just loaded, re-render it
        if (currentFrameRef.current === i) {
          renderFrame(i);
        }
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, [renderFrame]);

  // Setup GSAP ScrollTrigger for scroll-driven animation
  useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    const stickyEl = stickyRef.current;
    if (!sectionEl || !stickyEl) return;

    updateCanvasSize();

    // ScrollTrigger instance mapping scroll progress to frames
    const trigger = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top",
      end: "bottom bottom",
      pin: stickyEl,
      pinSpacing: false,
      scrub: 1.0, // Smooth scroll synchronization
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
        );

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          renderFrame(targetFrame);
        }
      },
    });

    // Resize observer & window resize listener
    const handleResize = () => {
      updateCanvasSize();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });

    if (canvasContainerRef.current) {
      resizeObserver.observe(canvasContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      trigger.kill();
    };
  }, [shouldReduceMotion, updateCanvasSize, renderFrame]);

  // Initial draw once first frame is ready
  useEffect(() => {
    if (firstFrameReady) {
      updateCanvasSize();
    }
  }, [firstFrameReady, updateCanvasSize]);

  // Reduced motion alternative (static representation)
  if (shouldReduceMotion) {
    return (
      <section
        id="sustainability-sequence"
        className="jas-agro-growing-sequence py-16 sm:py-24 bg-[#F6F8EE] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative transition-colors duration-300"
      >
        <div className="w-full px-3 sm:px-6 lg:px-8 max-w-[94vw] 2xl:max-w-[1800px] mx-auto">
          <div className="relative w-full aspect-[16/9] max-h-[850px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2F7D16]/20 dark:border-white/10 shadow-2xl bg-black">
            <img
              src={getFrameUrl(0)}
              alt="JAS Agro Sequence Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="sustainability-sequence"
      className="jas-agro-growing-sequence relative w-full h-[280vh] sm:h-[300vh] bg-[#F6F8EE] dark:bg-[#0B0F17] transition-colors duration-300"
    >
      {/* Sticky Canvas Container */}
      <div
        ref={stickyRef}
        className="sequence-sticky sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden z-10"
      >
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] rounded-full bg-[#B8F20A]/8 dark:bg-[#122a16]/35 blur-[140px] pointer-events-none transition-colors duration-300" />

        <div className="w-full h-full max-w-[94vw] 2xl:max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 flex flex-col justify-center items-center relative z-10">
          <div
            ref={canvasContainerRef}
            className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[88vh] max-h-[920px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#2F7D16]/25 dark:border-white/10 shadow-2xl bg-black"
          >
            <canvas
              ref={canvasRef}
              className="sequence-canvas w-full h-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
