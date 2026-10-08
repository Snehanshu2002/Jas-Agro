"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AgriIntelligenceCalculator } from "@/components/home/AgriIntelligenceCalculator";
import { LiveTelemetryDashboard } from "@/components/home/LiveTelemetryDashboard";

interface PipelineStep {
  step: string;
  /** Editorial stage title shown in the timeline */
  titleEn: string;
  titleHi: string;
  /** Hardware / system layer powering the stage */
  nameEn: string;
  nameHi: string;
  descEn: string;
  descHi: string;
  buttonEn: string;
  buttonHi: string;
  image: string;
  videoSrc: string;
  renderIcon: (props: { className?: string }) => React.ReactElement;
}

export const IoTDashboardSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [activeStep, setActiveStep] = useState<number>(0);
  const activeStepRef = useRef<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 5 Pipeline Steps mapped to reference UI and real project assets
  const pipelineSteps: PipelineStep[] = [
    {
      step: "01",
      titleEn: "Data Collection",
      titleHi: "डेटा संग्रह",
      nameEn: "Sensors & Probes",
      nameHi: "सेंसर एवं प्रोब",
      descEn: "Soil, moisture and climate readings captured in the field by IoT sensors and probes.",
      descHi: "खेत में IoT सेंसर और प्रोब द्वारा मिट्टी, नमी और मौसम की जानकारी एकत्र की जाती है।",
      buttonEn: "View Sensors",
      buttonHi: "सेंसर देखें",
      image: "/media/pipeline/clean-step-01-sensors.jpg",
      videoSrc: "/media/Microchip_and_soil_probe_floating_20260930141745.mp4",
      renderIcon: ({ className }) => (
        // Plant sensor with wireless transmission waves
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M7 20h10" />
          <path d="M10 20c0-5 3-7 3-10" />
          <path d="M13 10c2-2 4-2 6-1-1 3-3 4-6 3" />
          <path d="M10 14c-2-1-3-3-2-5 3 0 4 2 5 4" />
          <path d="M17 4a6 6 0 0 1 4 4" />
          <path d="M19 2a9 9 0 0 1 5 5" />
        </svg>
      ),
    },
    {
      step: "02",
      titleEn: "Data Transmission",
      titleHi: "डेटा ट्रांसमिशन",
      nameEn: "IoT Gateway",
      nameHi: "IoT गेटवे",
      descEn: "Field readings are relayed wirelessly through the IoT gateway to the cloud.",
      descHi: "खेत का डेटा IoT गेटवे के माध्यम से वायरलेस रूप से क्लाउड तक पहुँचता है।",
      buttonEn: "View Gateway",
      buttonHi: "गेटवे देखें",
      image: "/media/pipeline/clean-step-02-gateway.jpg",
      videoSrc: "/media/ESP32_emitting_radio_waves_20260930141749.mp4",
      renderIcon: ({ className }) => (
        // Router / Gateway with dual vertical antennas
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <path d="M6 14V6" />
          <path d="M18 14V6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <line x1="10" y1="18" x2="10.01" y2="18" />
        </svg>
      ),
    },
    {
      step: "03",
      titleEn: "Cloud Processing",
      titleHi: "क्लाउड प्रोसेसिंग",
      nameEn: "Cloud Server",
      nameHi: "क्लाउड सर्वर",
      descEn: "Incoming data is stored, organised and processed on the cloud server.",
      descHi: "प्राप्त डेटा क्लाउड सर्वर पर संग्रहित, व्यवस्थित और प्रोसेस किया जाता है।",
      buttonEn: "View Cloud",
      buttonHi: "क्लाउड देखें",
      image: "/media/pipeline/clean-step-03-cloud.jpg",
      videoSrc: "/media/Digital_data_flowing_into_cloud_20260930141752.mp4",
      renderIcon: ({ className }) => (
        // Cloud outline
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      step: "04",
      titleEn: "Insights & Analytics",
      titleHi: "इनसाइट्स और एनालिटिक्स",
      nameEn: "Web Dashboard",
      nameHi: "वेब डैशबोर्ड",
      descEn: "Trends and readings are visualised on the web dashboard for informed decisions.",
      descHi: "वेब डैशबोर्ड पर रुझान और रीडिंग स्पष्ट रूप से दिखते हैं, जिससे सही निर्णय लेना आसान होता है।",
      buttonEn: "View Dashboard",
      buttonHi: "डैशबोर्ड देखें",
      image: "/media/pipeline/clean-step-04-dashboard.jpg",
      // URL-encoded ellipsis (%E2%80%A6) for exact on-disk mapping
      videoSrc: "/media/Neon_holographic_data_charts_rot%E2%80%A6_20260930141822.mp4",
      renderIcon: ({ className }) => (
        // Bar charts / telemetry graph
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 3v18h18" />
          <path d="M7 16v-3" />
          <path d="M11 16V9" />
          <path d="M15 16v-5" />
          <path d="M19 16V6" />
        </svg>
      ),
    },
    {
      step: "05",
      titleEn: "Farm Operations",
      titleHi: "खेत संचालन",
      nameEn: "Farmer Mobile App",
      nameHi: "किसान मोबाइल ऐप",
      descEn: "Updates reach the farmer mobile app to guide day-to-day work in the field.",
      descHi: "किसान मोबाइल ऐप पर अपडेट मिलते हैं, जिससे रोज़मर्रा के खेती कार्य आसान होते हैं।",
      buttonEn: "Open Mobile App",
      buttonHi: "मोबाइल ऐप खोलें",
      image: "/media/pipeline/clean-step-05-mobile.jpg",
      // URL-encoded ellipsis (%E2%80%A6) for exact on-disk mapping
      videoSrc: "/media/Smartphone_floating_with_neon_no%E2%80%A6_20260930141951.mp4",
      renderIcon: ({ className }) => (
        // Smartphone device
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
  ];

  // Play the active step's video; pause the others once the crossfade has finished.
  // With prefers-reduced-motion, videos stay paused on their first frame.
  useEffect(() => {
    const active = videoRefs.current[activeStep];
    if (active) {
      active.muted = true;
      active.loop = true;
      active.playsInline = true;
      if (shouldReduceMotion) {
        active.pause();
      } else {
        const playPromise = active.play();
        if (playPromise !== undefined) playPromise.catch(() => {});
      }
    }

    const pauseTimer = window.setTimeout(() => {
      videoRefs.current.forEach((video, idx) => {
        if (video && idx !== activeStep) {
          try {
            video.pause();
          } catch (_) {}
        }
      });
    }, 750);

    return () => window.clearTimeout(pauseTimer);
  }, [activeStep, shouldReduceMotion]);

  // Layered CSS crossfade (opacity driven by state) — no white/black flash between steps
  const handleStepActivate = useCallback((idx: number) => {
    if (idx === activeStepRef.current) return;
    activeStepRef.current = idx;

    const nextVideo = videoRefs.current[idx];
    if (nextVideo) {
      try {
        nextVideo.currentTime = 0;
      } catch (_) {}
    }

    setActiveStep(idx);
  }, []);


  return (
    <section className="font-sans py-12 sm:py-16 lg:py-24 bg-[#F6F8EE] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
            {isHindi ? "जहाँ कृषि और " : "Where Agriculture Meets "}
            <span className="bg-gradient-to-r from-[#2F7D16] via-[#4F9D1F] to-[#B8F21B] dark:from-[#B8F21B] dark:via-[#C8F93B] dark:to-[#4F9D1F] bg-clip-text text-transparent">
              {isHindi ? "तकनीक मिलती है" : "Intelligence"}
            </span>
          </h2>
        </motion.div>

        {/* 1. FEATURED INTELLIGENCE CALCULATOR */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AgriIntelligenceCalculator />
        </motion.div>

        {/* 2. Interactive Live Telemetry Dashboard */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <LiveTelemetryDashboard />
        </motion.div>

        {/* 3. ARCHITECTURE DATA PIPELINE — EDITORIAL TIMELINE + IMMERSIVE VISUAL */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 lg:mt-28 max-w-[1360px] xl:max-w-[1400px] mx-auto w-full"
        >
          {/* Editorial Header */}
          <div className="mb-10 sm:mb-12 lg:mb-14">
            <div className="min-w-0">
              <div className="flex items-center gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#2F7D16] dark:text-[#72d919] mb-4 sm:mb-5">
                <span className="w-10 h-px bg-[#2F7D16] dark:bg-[#72d919]" />
                <span>{isHindi ? "खेत से अंतर्दृष्टि तक" : "FROM FARM TO INSIGHTS"}</span>
              </div>
              <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#111811] dark:text-[#FAFAF5] tracking-[-0.03em] leading-[1.05]">
                <span>{isHindi ? "आर्किटेक्चर " : "Architecture "}</span>
                <span className="text-[#1B6330] dark:text-[#72d919]">{isHindi ? "डेटा पाइपलाइन" : "Data Pipeline"}</span>
              </h2>
            </div>
          </div>

          {/* Main 2-Column Editorial Layout (mobile: visual first, then steps) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start w-full">

            {/* LEFT COLUMN: 5-step vertical timeline */}
            <ol className="order-2 lg:order-1 flex flex-col gap-3 sm:gap-4 min-w-0" aria-label={isHindi ? "डेटा पाइपलाइन के चरण" : "Data pipeline stages"}>
              {pipelineSteps.map((step, idx) => {
                const StepIcon = step.renderIcon;
                const isActive = activeStep === idx;
                const isComplete = idx < activeStep;
                const isLast = idx === pipelineSteps.length - 1;
                const title = isHindi ? step.titleHi : step.titleEn;
                const layer = isHindi ? step.nameHi : step.nameEn;
                const desc = isHindi ? step.descHi : step.descEn;

                return (
                  <li
                    key={step.step}
                    onMouseEnter={() => handleStepActivate(idx)}
                    className="relative grid grid-cols-[2rem_minmax(0,1fr)] sm:grid-cols-[2.75rem_minmax(0,1fr)] gap-2.5 sm:gap-5 items-center"
                  >
                    {/* Timeline connector to the next node */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[1rem] sm:left-[1.375rem] top-1/2 w-px h-[calc(100%+0.75rem)] sm:h-[calc(100%+1rem)] -translate-x-1/2 bg-[#D3E4C2] dark:bg-[#1E4D22] overflow-hidden"
                      >
                        <span
                          className={`absolute inset-0 origin-top bg-[#2F7D16] dark:bg-[#72d919] transition-transform duration-500 ease-out motion-reduce:transition-none ${
                            isComplete ? "scale-y-100" : "scale-y-0"
                          }`}
                        />
                      </span>
                    )}

                    {/* Timeline node */}
                    <span
                      aria-hidden="true"
                      className={`relative z-10 mx-auto flex items-center justify-center rounded-full font-mono font-bold tabular-nums transition-all duration-300 motion-reduce:transition-none ${
                        isActive
                          ? "w-8 h-8 sm:w-11 sm:h-11 text-xs sm:text-sm bg-[#72d919] text-[#0B2211] ring-4 sm:ring-[6px] ring-[#72d919]/20"
                          : isComplete
                            ? "w-7 h-7 sm:w-9 sm:h-9 text-[10px] sm:text-xs bg-[#EAF5D8] dark:bg-[#1A3F22] text-[#1B6330] dark:text-[#72d919] border border-[#2F7D16]/60 dark:border-[#72d919]/50"
                            : "w-7 h-7 sm:w-9 sm:h-9 text-[10px] sm:text-xs bg-[#F6F8EE] dark:bg-[#0D230E] text-[#5C6B5A] dark:text-[#FAFAF5]/55 border border-[#CFE0BD] dark:border-[#1E4D22]"
                      }`}
                    >
                      {step.step}
                    </span>

                    {/* Step row */}
                    <button
                      type="button"
                      onClick={() => handleStepActivate(idx)}
                      onFocus={() => handleStepActivate(idx)}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`${step.step} ${title} — ${layer}. ${isHindi ? step.buttonHi : step.buttonEn}`}
                      className={`group relative w-full min-w-0 text-left rounded-2xl sm:rounded-[24px] border p-2.5 sm:p-4 flex items-center gap-2.5 sm:gap-4 transition-all duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#72d919] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F8EE] dark:focus-visible:ring-offset-[#0D230E] ${
                        isActive
                          ? "bg-[#0F2E14] border-[#72d919]/50 shadow-[0_18px_40px_-18px_rgba(15,46,20,0.55)]"
                          : "bg-white/55 dark:bg-white/[0.03] border-[#1B6330]/10 dark:border-white/[0.06] hover:bg-white dark:hover:bg-white/[0.06] hover:border-[#2F7D16]/30"
                      }`}
                    >
                      {/* Icon */}
                      <span
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-[#72d919] text-[#0B2211]"
                            : "bg-[#EAF5D8] dark:bg-[#1A3F22] text-[#1B6330] dark:text-[#72d919]"
                        }`}
                      >
                        <StepIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </span>

                      {/* Text */}
                      <span className="flex-1 min-w-0">
                        <span
                          className={`block text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.16em] mb-0.5 transition-colors duration-300 ${
                            isActive ? "text-[#B8F21B]" : "text-[#2F7D16] dark:text-[#72d919]/80"
                          }`}
                        >
                          {layer}
                        </span>
                        <span
                          className={`block text-sm sm:text-lg font-semibold tracking-tight leading-snug transition-colors duration-300 ${
                            isActive ? "text-white" : "text-[#111811] dark:text-[#FAFAF5]"
                          }`}
                        >
                          {title}
                        </span>
                        <span
                          className={`block mt-0.5 sm:mt-1 text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? "text-white/70" : "text-[#5C6B5A] dark:text-[#FAFAF5]/55"
                          }`}
                        >
                          {desc}
                        </span>
                      </span>

                      {/* Thumbnail (tablet/desktop only) */}
                      <span className="hidden md:block relative w-24 lg:w-28 xl:w-36 h-16 xl:h-[72px] shrink-0 rounded-xl overflow-hidden bg-[#0B2211]/10">
                        <img
                          src={step.image}
                          alt=""
                          loading="lazy"
                          className={`w-full h-full object-cover transition-all duration-500 motion-reduce:transition-none group-hover:scale-105 ${
                            isActive ? "opacity-100" : "opacity-80 saturate-[0.85]"
                          }`}
                        />
                      </span>

                      {/* Arrow indicator */}
                      <span
                        aria-hidden="true"
                        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 motion-reduce:transition-none ${
                          isActive
                            ? "bg-[#72d919] border-[#72d919] text-[#0B2211]"
                            : "bg-transparent border-[#1B6330]/15 dark:border-white/10 text-[#1B6330] dark:text-[#72d919] group-hover:border-[#2F7D16]/40 group-hover:translate-x-0.5"
                        }`}
                      >
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.25} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* RIGHT COLUMN: Large immersive visual (crossfades with active step) */}
            <div className="order-1 lg:order-2 w-full min-w-0 lg:sticky lg:top-24">
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] max-h-[760px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0B2211] border border-black/5 dark:border-white/10 shadow-[0_40px_80px_-40px_rgba(11,34,17,0.55)]">

                {/* Layered step videos */}
                {pipelineSteps.map((step, idx) => (
                  <video
                    key={step.step}
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={step.videoSrc}
                    muted
                    loop
                    playsInline
                    preload={idx === 0 ? "auto" : "metadata"}
                    aria-hidden="true"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out motion-reduce:duration-200 ${
                      activeStep === idx ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
                    }`}
                  />
                ))}

                {/* Legibility gradients */}
                <div aria-hidden="true" className="absolute inset-0 z-[3] pointer-events-none bg-gradient-to-t from-[#06150A]/90 via-[#06150A]/10 to-[#06150A]/35" />
                <div aria-hidden="true" className="absolute inset-0 z-[3] pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(114,217,25,0.18),transparent_55%)]" />

                {/* Right rail — mirrors the five stages */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[4] flex flex-col items-center">
                  {pipelineSteps.map((step, idx) => {
                    const RailIcon = step.renderIcon;
                    const isActive = activeStep === idx;
                    return (
                      <React.Fragment key={step.step}>
                        {idx > 0 && (
                          <span
                            aria-hidden="true"
                            className={`w-px h-2.5 sm:h-3.5 transition-colors duration-300 ${
                              idx <= activeStep ? "bg-[#72d919]/80" : "bg-white/25"
                            }`}
                          />
                        )}
                        <button
                          type="button"
                          onClick={() => handleStepActivate(idx)}
                          aria-label={isHindi ? step.titleHi : step.titleEn}
                          aria-pressed={isActive}
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border backdrop-blur-md transition-all duration-300 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8F21B] ${
                            isActive
                              ? "bg-[#72d919] border-[#B8F21B] text-[#0B2211] shadow-[0_0_24px_rgba(114,217,25,0.45)]"
                              : "bg-white/10 border-white/15 text-white/80 hover:bg-white/20"
                          }`}
                        >
                          <RailIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center flex justify-center">
          <Link
            href="/technology"
            className="group relative inline-flex items-center justify-between min-w-[220px] sm:min-w-[245px] h-[42px] sm:h-[46px] px-5 sm:px-6 rounded-full bg-[#B8F21B] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95"
          >
            {/* 1. Dark Sweep Layer from Right */}
            <span
              className="absolute inset-0 bg-[#123B13] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
            />

            {/* 2. Text Content (Default Dark vs Hover Bright Lime) */}
            <span className="relative z-10 block pr-2 text-left">
              <span className="block font-extrabold text-sm sm:text-base text-[#123B13] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                {isHindi ? "IoT तकनीक के बारे में जानें" : "Explore IoT Architecture"}
              </span>
              <span className="absolute inset-0 block font-extrabold text-sm sm:text-base text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                {isHindi ? "IoT तकनीक के बारे में जानें" : "Explore IoT Architecture"}
              </span>
            </span>

            {/* 3. Right Element: Resting Arrow vs Hover Expanding Lime Circle Arrow */}
            <span className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 shrink-0 pointer-events-none">
              <ArrowRight
                className="w-4 h-4 text-[#123B13] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                strokeWidth={2.5}
              />
              <span
                className="absolute inset-0 rounded-full bg-[#B8F21B] text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#123B13]" strokeWidth={2.5} />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
