"use client";

import React, { useState } from "react";
import { ArrowRight, Radio, Sparkles, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const CtaSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-teal-100/30 to-slate-100 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-white dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Ambient Top Beam */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" />
            <span>{isHindi ? "Smart Farming की शुरुआत करें" : "START YOUR FARM JOURNEY"}</span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHindi ? "क्या आप तैयार हैं " : "READY TO BUILD "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "Smart Farm बनाने के लिए?" : "A SMARTER FARM?"}
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            {isHindi
              ? "अपनी requirement बताएं, हमारी team सही crop और IoT smart system design करने में आपकी पूरी मदद करेगी।"
              : "Tell us what you're planning. We'll help you design the right cultivation and technology system."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-base shadow-glow-lg border border-emerald-300/40 hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2.5"
            >
              {isHindi ? "Get a Quote" : "Get a Quote"} <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold text-base border border-slate-300 dark:border-slate-700 shadow-glass transition-all flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <PhoneCall className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              {isHindi ? "JAS Agro से बात करें" : "Talk to JAS Agro"}
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Dedicated AgTech Expert Advisory • Zero Obligation Consultation</span>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </section>
  );
};
