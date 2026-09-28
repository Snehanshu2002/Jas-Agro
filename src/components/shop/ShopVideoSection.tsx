"use client";

import React, { useRef, useState, useEffect } from "react";
import { SHOP_VIDEOS } from "@/data/shopVideos";
import { ShopVideoModal } from "./ShopVideoModal";

export const ShopVideoSection: React.FC = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Performance optimization: automatically play/pause teaser videos based on viewport visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElements = containerRef.current?.querySelectorAll("video");
          if (videoElements) {
            videoElements.forEach((video) => {
              if (entry.isIntersecting) {
                video.play().catch(() => {});
              } else {
                video.pause();
              }
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Video Shopping Strip"
      className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-2 sm:py-3"
    >
      {/* Centered Compact 9:16 Video Trailer Strip */}
      <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto shop-scrollbar-x pb-2 pt-1 snap-x snap-mandatory">
        {SHOP_VIDEOS.map((item, index) => (
          <article
            key={item.id}
            onClick={() => setSelectedVideoIndex(index)}
            className="relative shrink-0 w-[95px] sm:w-[120px] md:w-[135px] lg:w-[148px] aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer snap-start isolate select-none hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95"
          >
            {/* Automatic Muted Looping Video Trailer */}
            <video
              src={item.videoSrc}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle Hover Ring/Gaze Effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#3f7010]/60 rounded-xl sm:rounded-2xl transition-all pointer-events-none" />
          </article>
        ))}
      </div>

      {/* Full-Screen Reels-Style Lightbox Modal Viewer */}
      {selectedVideoIndex !== null && (
        <ShopVideoModal
          videos={SHOP_VIDEOS}
          initialIndex={selectedVideoIndex}
          isOpen={selectedVideoIndex !== null}
          onClose={() => setSelectedVideoIndex(null)}
        />
      )}
    </section>
  );
};
