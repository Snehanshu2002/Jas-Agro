"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Sparkles, X, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const QuickLeadWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Floating Bottom Right Action Button */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
        {/* Quick Menu Popover Panel */}
        {isOpen && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl w-80 space-y-4 animate-scaleUp text-slate-900 dark:text-white">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  🌱
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {language === "hi" ? "JAS Agro सहायता केंद्र" : "JAS Agro Quick Assist"}
                  </h4>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {language === "hi" ? "विशेषज्ञ उपलब्ध हैं" : "Experts Online Now"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917372926623?text=Hi%20JAS%20Agro,%20I%20want%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>{language === "hi" ? "WhatsApp पर चैट करें" : "Chat on WhatsApp"}</span>
                </div>
                <Send className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Call Button */}
              <a
                href="tel:+917372926623"
                className="w-full p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm flex items-center justify-between border border-slate-200 dark:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>{language === "hi" ? "कृषि विशेषज्ञ से कॉल करें" : "Call Agri Specialist"}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500">Free</span>
              </a>

              {/* Get Quote Modal Trigger */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-slate-950" />
                  <span>{language === "hi" ? "कस्टम कोटेशन प्राप्त करें" : "Request Bulk Pricing"}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white shadow-2xl border-2 border-white/20 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Quick Assistance"
        >
          {/* Glowing Ping Effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6 text-white relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
          )}
        </button>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
