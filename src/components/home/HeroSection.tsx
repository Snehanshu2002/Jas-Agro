"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Radio, Sprout, Sparkles, Activity, Layers } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export const HeroSection: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  const { isDark } = useTheme();

  const isHindi = language === "hi";

  const HERO_VIDEOS = [
    {
      id: "warehouse",
      titleEn: "Warehouse & Spawn Lab",
      titleHi: "1. Warehouse & Lab",
      type: "video",
      src: "/media/hero/warehouse-drone-shot.mp4",
    },
    {
      id: "mushroom",
      titleEn: "Oyster Mushroom",
      titleHi: "2. Oyster Mushroom",
      type: "video",
      src: "/media/hero/oyster-mushroom.mp4",
    },
    {
      id: "napier",
      titleEn: "Hybrid Napier Grass",
      titleHi: "3. Napier Grass",
      type: "video",
      src: "/media/hero/napier-grass-video.mp4",
    },
    {
      id: "azolla",
      titleEn: "Azolla Aquatic Fodder",
      titleHi: "4. Azolla Fodder",
      type: "video",
      src: "/media/hero/azolla-fodder-video.mp4",
    },
    {
      id: "vermicompost",
      titleEn: "Vermicompost Manure",
      titleHi: "5. Vermicompost",
      type: "image",
      src: "/media/hero/vermicompost-manure-visual.jpg",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-switch video element or timer when index changes
  useEffect(() => {
    const currentItem = HERO_VIDEOS[currentVideoIndex];
    if (currentItem.type === "video") {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    } else {
      const timer = setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex]);

  // Handle Video End -> Next Video in Playlist
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  return (
    <section className="relative w-full flex items-center justify-center pt-24 pb-10 sm:pt-28 sm:pb-12 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white select-none transition-colors duration-300">
      
      {/* LAYER 1 & 2: CINEMATIC BACKGROUND & ATMOSPHERIC GRADIENTS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Film Grain Noise Overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Agricultural Visual Backdrop (Sequential Playlist Video/Image) */}
        <motion.div 
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative bg-slate-900"
        >
          {/* Sequential Playlist Video/Image Architecture */}
          {!prefersReducedMotion && (
            HERO_VIDEOS[currentVideoIndex].type === "video" ? (
              <video
                key={HERO_VIDEOS[currentVideoIndex].id}
                ref={videoRef}
                src={HERO_VIDEOS[currentVideoIndex].src}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                onLoadedData={(e) => {
                  setVideoError(false);
                  e.currentTarget.play().catch(() => {});
                }}
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover object-center filter opacity-95 dark:opacity-95 brightness-100 dark:brightness-[0.95] contrast-[1.05] saturate-[1.1] transition-all duration-500 z-0"
              />
            ) : (
              <motion.img
                key={HERO_VIDEOS[currentVideoIndex].id}
                src={HERO_VIDEOS[currentVideoIndex].src}
                alt={HERO_VIDEOS[currentVideoIndex].titleEn}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center filter opacity-95 dark:opacity-95 brightness-100 dark:brightness-[0.95] contrast-[1.05] saturate-[1.1] transition-all duration-500 z-0"
              />
            )
          )}
        </motion.div>

        {/* Atmospheric Vignette Overlay (Sleek Horizon protection without over-dimming video) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-50/70 via-transparent to-slate-900/20 dark:from-[#0B0F17]/75 dark:via-transparent dark:to-[#0B0F17]/25" />
        
        {/* Soft Radial Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none z-10 opacity-30 dark:opacity-25 filter blur-[150px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(5, 46, 22, 0) 70%)" }}
        />

        {/* Subtle Cyber Grid Accent */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        />
      </div>

      {/* LAYER 3: FLOATING GLASS SOLUTION MARKERS (DESKTOP) */}
      {!prefersReducedMotion && (
        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none w-full px-6 sm:px-10 lg:px-16">
          {/* Marker 1: Oyster Mushroom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-[28%] left-[6%] pointer-events-auto"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-950/80 border border-emerald-500/40 dark:border-emerald-500/30 backdrop-blur-xl text-slate-900 dark:text-slate-200 text-xs font-mono shadow-xl shadow-emerald-950/10 dark:shadow-glass hover:border-emerald-600 transition-all duration-300 group cursor-default">
              <span className="text-sm">🍄</span>
              <span className="tracking-wide font-extrabold text-emerald-800 dark:text-emerald-300">OYSTER MUSHROOM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse ml-1" />
            </div>
          </motion.div>

          {/* Marker 2: Azolla Fodder */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="absolute top-[36%] right-[6%] pointer-events-auto"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-950/80 border border-emerald-500/40 dark:border-emerald-500/30 backdrop-blur-xl text-slate-900 dark:text-slate-200 text-xs font-mono shadow-xl shadow-emerald-950/10 dark:shadow-glass hover:border-emerald-600 transition-all duration-300 group cursor-default">
              <span className="text-sm">🌿</span>
              <span className="tracking-wide font-extrabold text-emerald-800 dark:text-emerald-300">AZOLLA FODDER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse ml-1" />
            </div>
          </motion.div>

          {/* Marker 3: IoT Micro-Climate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-[28%] right-[5%] pointer-events-auto"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-950/80 border border-cyan-500/40 dark:border-emerald-500/30 backdrop-blur-xl text-slate-900 dark:text-slate-200 text-xs font-mono shadow-xl shadow-cyan-950/10 dark:shadow-glass hover:border-cyan-600 transition-all duration-300 group cursor-default">
              <span className="text-sm">📡</span>
              <span className="tracking-wide font-extrabold text-teal-800 dark:text-emerald-300">IoT MONITORING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse ml-1" />
            </div>
          </motion.div>
        </div>
      )}

      {/* LAYER 3.5: FLOATING VIDEO PLAYLIST SWITCHER PILLS (Z-50 FOREGROUND) */}
      {!prefersReducedMotion && (
        <div className="absolute top-24 right-4 sm:right-8 z-50 pointer-events-auto flex items-center gap-2 bg-slate-950/85 backdrop-blur-xl p-1.5 rounded-full border border-emerald-500/30 shadow-2xl">
          {HERO_VIDEOS.map((vid, idx) => {
            const isActive = currentVideoIndex === idx;
            return (
              <button
                key={vid.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentVideoIndex(idx);
                }}
                className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer pointer-events-auto relative z-50 ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-md scale-[1.05]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-slate-950 animate-ping" : "bg-emerald-400"}`} />
                {isHindi ? vid.titleHi : vid.titleEn}
              </button>
            );
          })}
        </div>
      )}

      {/* LAYER 3: MAIN HERO CONTENT */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-20 text-center flex flex-col items-center justify-center min-h-[72vh] sm:min-h-[78vh]">
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6">
          
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold tracking-widest uppercase shadow-sm dark:shadow-glow backdrop-blur-md"
          >
            <Sprout className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{isHindi ? "Smart • Sustainable • Connected" : "SMART • SUSTAINABLE • CONNECTED"}</span>
          </motion.div>

          {/* Oversized Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.08] text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]">
              {isHindi ? (
                <>
                  खेती के भविष्य को
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                    नया रूप देना।
                  </span>
                </>
              ) : (
                <>
                  GROWING THE FUTURE OF
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                    FARMING.
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          {/* Supporting Copy (Max 2 lines on desktop) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
          >
            {isHindi
              ? "Smart cultivation systems जो organic farming, precision tech और smart automation को जोड़ते हैं।"
              : "Smart cultivation systems that combine sustainable farming, precision technology and intelligent automation."}
          </motion.p>

          {/* Call to Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-glow-lg border border-emerald-300/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{isHindi ? "अपना Farm बनाएं" : "BUILD YOUR FARM"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <Link
              href="/solutions"
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-white/90 dark:bg-slate-950/70 hover:bg-slate-100 dark:hover:bg-slate-900/90 text-slate-900 dark:text-slate-100 font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-300 dark:border-slate-700/80 hover:border-emerald-500 dark:hover:border-emerald-400/80 shadow-md dark:shadow-glass backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{isHindi ? "Solutions देखें" : "EXPLORE SOLUTIONS"}</span>
              <Radio className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:animate-pulse" />
            </Link>
          </motion.div>

          {/* Live AgTech Telemetry Ticker Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 px-6 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-500/30 backdrop-blur-xl shadow-glass flex items-center justify-center gap-6 sm:gap-10 text-xs font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-slate-600 dark:text-slate-400">{isHindi ? "Uptime:" : "Uptime:"}</span>
              <span className="font-extrabold text-emerald-700 dark:text-emerald-300">99.8%</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-slate-600 dark:text-slate-400">{isHindi ? "Farms:" : "Active Farms:"}</span>
              <span className="font-extrabold text-teal-700 dark:text-teal-300">2,500+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600 dark:text-slate-400">{isHindi ? "Carbon Saved:" : "Carbon Saved:"}</span>
              <span className="font-extrabold text-green-700 dark:text-amber-400">35%</span>
            </div>
          </motion.div>

          {/* Metadata Strip (Clean & Verified) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono font-medium tracking-widest text-slate-600 dark:text-slate-300 uppercase"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span>{isHindi ? "CULTIVATE" : "CULTIVATE"}</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
              <span>{isHindi ? "MONITOR" : "MONITOR"}</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>{isHindi ? "AUTOMATE" : "AUTOMATE"}</span>
            </div>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span>{isHindi ? "GROW" : "GROW"}</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM CONTROL BAR & SCROLL INDICATOR */}
      {/* Live Farm Telemetry Pill (Shifted safely to avoid bottom-left widget overlap) */}
      <div className="absolute bottom-28 left-8 z-20 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md dark:shadow-glass text-[11px] font-mono text-slate-800 dark:text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
        <span className="text-slate-900 dark:text-slate-200 font-bold">FARM SYSTEM</span>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <span className="text-emerald-600 dark:text-emerald-400">24.6°C</span>
        <span className="text-slate-400 dark:text-slate-500">•</span>
        <span className="text-teal-600 dark:text-teal-300">82% RH</span>
        <span className="text-slate-400 dark:text-slate-500">|</span>
        <span className="text-amber-700 dark:text-amber-400 font-semibold uppercase text-[9px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/30">
          SIMULATION
        </span>
      </div>

      {/* Scroll Indicator (Bottom Center) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase">
          {isHindi ? "नीचे एक्सप्लोर करें" : "SCROLL TO EXPLORE"}
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        </motion.div>
      </motion.div>

      {/* Bottom-Right Floating Chhatraka Watermark Emblem Logo (Completely covers video watermark) */}
      {HERO_VIDEOS[currentVideoIndex].id === "mushroom" && (
        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-[3.5%] lg:right-[3%] z-30 pointer-events-auto">
          <a
            href="https://www.chhatraka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-slate-950 border-2 border-amber-500/70 hover:border-amber-400 shadow-[0_10px_40px_rgba(0,0,0,0.85)] transition-all duration-300 hover:scale-[1.03] min-w-[190px] sm:min-w-[240px]"
            title="Visit Chhatraka Mushroom Portal"
          >
            <img
              src="https://www.chhatraka.com/logo-chhatraka-lockup.png"
              alt="Chhatraka Logo"
              className="h-10 sm:h-14 lg:h-16 w-auto object-contain filter drop-shadow-lg group-hover:brightness-110 transition-all"
            />
          </a>
        </div>
      )}

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </section>
  );
};


