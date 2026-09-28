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
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBF7] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-emerald-950/10 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/60 via-[#edf3e8]/70 to-[#FAFBF7] dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Pattern Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white dark:bg-slate-900/90 backdrop-blur-2xl border border-emerald-900/10 dark:border-emerald-500/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl space-y-8 relative overflow-hidden"
        >
          {/* Ambient Top Beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300/80 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" />
            <span>{isHindi ? badgeTextHi : badgeTextEn}</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHindi ? titleHi : titleEn}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? titleHighlightHi : titleHighlightEn}
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            {isHindi ? descriptionHi : descriptionEn}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="btn-reveal-primary w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white font-extrabold text-base shadow-glow-lg border border-emerald-300/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            >
              <span>{isHindi ? primaryBtnTextHi : primaryBtnTextEn}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="btn-reveal-secondary w-full sm:w-auto px-9 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-900 dark:text-white font-bold text-base border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            >
              <PhoneCall className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span>{isHindi ? secondaryBtnTextHi : secondaryBtnTextEn}</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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
