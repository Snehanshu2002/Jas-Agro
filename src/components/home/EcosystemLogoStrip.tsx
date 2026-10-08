"use client";

import React from "react";
import localFont from "next/font/local";
import { useLanguage } from "@/context/LanguageContext";

// Load the local Jost font from public/media/Jost/
const jost = localFont({
  src: "../../../public/media/Jost/Jost-VariableFont_wght.ttf",
  display: "swap",
});

interface LogoItem {
  id: string;
  name: string;
  src: string;
  className: string;
}

export const EcosystemLogoStrip: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  // Base 5 Logos in the exact specified sequence
  const BASE_LOGOS: LogoItem[] = [
    {
      id: "arduino",
      name: "Arduino",
      src: "/media/ecosystem/arduino-logo.png",
      className: "h-7 sm:h-9 lg:h-10 max-w-[110px] sm:max-w-[140px] lg:max-w-[160px]",
    },
    {
      id: "chhatraka",
      name: "Chhatraka",
      src: "/media/ecosystem/chhatraka-logo.png",
      className: "h-7 sm:h-9 lg:h-10 max-w-[130px] sm:max-w-[165px] lg:max-w-[195px]",
    },
    {
      id: "espressif",
      name: "ESP8266 / Espressif",
      src: "/media/ecosystem/espressif-esp8266-logo.jpg",
      className: "h-6 sm:h-8 lg:h-9 max-w-[75px] sm:max-w-[95px] lg:max-w-[110px] rounded-md",
    },
    {
      id: "isensy",
      name: "iSensy",
      src: "/media/ecosystem/isensy-logo.png",
      className: "h-6 sm:h-8 lg:h-9 max-w-[100px] sm:max-w-[125px] lg:max-w-[145px]",
    },
    {
      id: "yusata",
      name: "Yusata Infotech",
      src: "/media/ecosystem/yusata-logo.png",
      className: "h-7 sm:h-9 lg:h-10 max-w-[110px] sm:max-w-[140px] lg:max-w-[160px]",
    },
  ];

  // Repeat sequence 4 times to construct a completely seamless infinite loop
  const MARQUEE_LOGOS = [
    ...BASE_LOGOS.map((l, i) => ({ ...l, uniqueKey: `set1-${l.id}-${i}` })),
    ...BASE_LOGOS.map((l, i) => ({ ...l, uniqueKey: `set2-${l.id}-${i}` })),
    ...BASE_LOGOS.map((l, i) => ({ ...l, uniqueKey: `set3-${l.id}-${i}` })),
    ...BASE_LOGOS.map((l, i) => ({ ...l, uniqueKey: `set4-${l.id}-${i}` })),
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-[#F6F8EE] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] transition-colors duration-300 overflow-hidden select-none">
      
      {/* 1. REFINED COMPACT SECTION LABEL (Using ONLY Jost font) */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 text-center mb-6 sm:mb-8">
        <div
          className={`${jost.className} inline-flex items-center gap-2.5 text-xs tracking-wider font-bold text-[#5A6E59] dark:text-[#A3C2A1]`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] opacity-80" />
          <span>
            {isHindi ? "हमारी टेक्नोलॉजी & इकोसिस्टम" : "Our Technology & Ecosystem"}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] opacity-80" />
        </div>
      </div>

      {/* 2. INFINITE SEAMLESS HORIZONTAL MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Soft edge fade masks for smooth entry and exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-[#F6F8EE] dark:from-[#0D230E] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-[#F6F8EE] dark:from-[#0D230E] to-transparent z-10" />

        {/* Marquee Motion Track with Hover Pause */}
        <div
          className="flex items-center w-max animate-ecosystem-marquee group-hover:[animation-play-state:paused]"
          style={{
            willChange: "transform",
          }}
        >
          {MARQUEE_LOGOS.map((logo) => (
            <div
              key={logo.uniqueKey}
              className="flex items-center justify-center px-6 sm:px-10 lg:px-14 py-2 cursor-pointer group/item transition-transform duration-300"
              title={logo.name}
            >
              {/*
                Default Appearance:
                - Light Mode: Monochrome muted/light black (grayscale, subtle opacity).
                - Dark Mode: Monochrome white/light (brightness-0, invert).
                Hover Appearance:
                - Restores full original brand colors and applies subtle scale lift.
              */}
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className={`${logo.className} w-auto object-contain transition-all duration-300 ease-out 
                  grayscale opacity-60 contrast-125 
                  dark:grayscale-0 dark:brightness-0 dark:invert dark:opacity-65 
                  group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 
                  dark:group-hover/item:filter-none dark:group-hover/item:opacity-100`}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Inline Keyframe Animation definition ensuring zero dependencies */}
      <style jsx>{`
        @keyframes ecosystemMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-ecosystem-marquee {
          animation: ecosystemMarquee 26s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-ecosystem-marquee {
            animation-duration: 60s;
          }
        }
        @media (max-width: 640px) {
          .animate-ecosystem-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>

    </section>
  );
};
