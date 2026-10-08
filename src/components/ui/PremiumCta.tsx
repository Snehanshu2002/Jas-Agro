"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { COMPANY_INFO } from "@/data/company";

export interface PremiumCtaProps {
  badgeTextEn?: string;
  badgeTextHi?: string;
  titleEn?: string;
  titleHi?: string;
  titleHighlightEn?: string;
  titleHighlightHi?: string;
  descriptionEn?: string;
  descriptionHi?: string;
  primaryBtnTextEn?: string;
  primaryBtnTextHi?: string;
  secondaryBtnTextEn?: string;
  secondaryBtnTextHi?: string;
  phone?: string;
  defaultProductForQuote?: string;
}

export const PremiumCta: React.FC<PremiumCtaProps> = ({
  badgeTextEn = "START YOUR FARM JOURNEY",
  badgeTextHi = "स्मार्ट फार्मिंग की शुरुआत करें",
  titleEn = "READY TO BUILD ",
  titleHi = "क्या आप तैयार हैं ",
  titleHighlightEn = "A SMARTER FARM?",
  titleHighlightHi = "स्मार्ट फार्म बनाने के लिए?",
  descriptionEn = "Tell us what you're planning. We'll help you design the right cultivation and technology system.",
  descriptionHi = "अपनी जरूरत बताएं, हमारी टीम सही क्रॉप और IoT स्मार्ट सिस्टम डिजाइन करने में आपकी पूरी मदद करेगी।",
  primaryBtnTextEn = "Get a Quote",
  primaryBtnTextHi = "कोटेशन प्राप्त करें",
  secondaryBtnTextEn = "Talk to JAS Agro",
  secondaryBtnTextHi = "JAS एग्रो से बात करें",
  phone = COMPANY_INFO.phone,
  defaultProductForQuote,
}) => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFAF5] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden border-b border-[#2F7D16]/10 dark:border-[#1B4D1C] transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EAF5D8]/60 via-[#F4F8EC]/70 to-[#FAFAF5] dark:from-[#0D230E] dark:via-[#123B13] dark:to-[#0D230E] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B8F21B]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(47, 125, 22, 0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#123B13] dark:bg-[#123B13] text-white border border-[#2F7D16]/50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 relative overflow-hidden"
        >
          {/* Ambient Top Beam */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F7D16] via-[#B8F21B] to-[#4F9D1F]" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8F21B] animate-pulse" />
            <span>{isHindi ? badgeTextHi : badgeTextEn}</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {isHindi ? titleHi : titleEn}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#B8F21B] via-[#C8F93B] to-[#A3DB14] bg-clip-text text-transparent">
              {isHindi ? titleHighlightHi : titleHighlightEn}
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-[#EAF5D8] text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {isHindi ? descriptionHi : descriptionEn}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="group relative inline-flex items-center justify-between min-w-[195px] sm:min-w-[215px] h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-full bg-[#B8F21B] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-xl active:scale-95"
            >
              <span
                className="absolute inset-0 bg-[#0D230E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
              />
              <span className="relative z-10 block pr-2 text-left">
                <span className="block font-extrabold text-base sm:text-[1.05rem] text-[#123B13] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                  {isHindi ? primaryBtnTextHi : primaryBtnTextEn}
                </span>
                <span className="absolute inset-0 block font-extrabold text-base sm:text-[1.05rem] text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                  {isHindi ? primaryBtnTextHi : primaryBtnTextEn}
                </span>
              </span>
              <span className="relative z-10 flex items-center justify-center w-7 h-7 shrink-0 pointer-events-none">
                <ArrowRight
                  className="w-4 h-4 text-[#123B13] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                  strokeWidth={2.5}
                />
                <span
                  className="absolute inset-0 rounded-full bg-[#B8F21B] text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#123B13]" strokeWidth={2.5} />
                </span>
              </span>
            </button>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="group relative inline-flex items-center justify-between min-w-[195px] sm:min-w-[215px] h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-full bg-white/10 border border-white/25 overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-sm active:scale-95"
            >
              <span
                className="absolute inset-0 bg-[#B8F21B] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
              />
              <span className="relative z-10 flex items-center gap-2 pr-2 text-left">
                <PhoneCall className="w-4.5 h-4.5 text-[#B8F21B] group-hover:text-[#123B13] transition-colors duration-300 shrink-0" />
                <span className="relative block">
                  <span className="block font-bold text-base sm:text-[1.05rem] text-white transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                    {isHindi ? secondaryBtnTextHi : secondaryBtnTextEn}
                  </span>
                  <span className="absolute inset-0 block font-extrabold text-base sm:text-[1.05rem] text-[#123B13] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                    {isHindi ? secondaryBtnTextHi : secondaryBtnTextEn}
                  </span>
                </span>
              </span>
              <span className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#B8F21B] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0" />
                <span
                  className="absolute inset-0 rounded-full bg-[#123B13] text-white flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </span>
              </span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-[#A3C2A1]">
            <ShieldCheck className="w-4 h-4 text-[#B8F21B]" />
            <span>
              {isHindi
                ? "समर्पित एग्रीटेक विशेषज्ञ सलाह • मुफ़्त कंसल्टेशन"
                : "Dedicated AgTech Expert Advisory • Zero Obligation Consultation"}
            </span>
          </div>
        </motion.div>
      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={defaultProductForQuote}
      />
    </section>
  );
};
