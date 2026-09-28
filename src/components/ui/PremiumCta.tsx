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
              className="btn-reveal-lime w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-extrabold text-base shadow-xl border border-[#A6E015] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-[#B8F21B] focus-visible:outline-none"
            >
              <span>{isHindi ? primaryBtnTextHi : primaryBtnTextEn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="btn-reveal-secondary w-full sm:w-auto px-9 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 shadow-sm transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#B8F21B] focus-visible:outline-none"
            >
              <PhoneCall className="w-5 h-5 text-[#B8F21B]" />
              <span>{isHindi ? secondaryBtnTextHi : secondaryBtnTextEn}</span>
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
