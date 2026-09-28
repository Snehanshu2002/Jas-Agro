"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Sparkles, X, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const QuickLeadWidget: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [constraints, setConstraints] = useState({ top: -300, bottom: 300, left: -300, right: 10 });

  // Visible ONLY on Home ("/") and Shop main page ("/shop")
  const isAllowedPage = pathname === "/" || pathname === "/shop" || pathname === "/shop/";

  useEffect(() => {
    // Reset open popover if navigating to another page
    if (!isAllowedPage) {
      setIsOpen(false);
    }
  }, [isAllowedPage, pathname]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (typeof window !== "undefined") {
        const halfH = window.innerHeight / 2;
        setConstraints({
          top: -(halfH - 80),
          bottom: halfH - 80,
          left: -(window.innerWidth - 65),
          right: 10,
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAllowedPage) {
    return null;
  }

  return (
    <>
      {/* Floating Action Button (Vertically centered on the right side of the viewport) */}
      <motion.div
        drag={isMobile}
        dragConstraints={constraints}
        dragElastic={0.08}
        dragMomentum={false}
        className="fixed top-1/2 -translate-y-1/2 right-3 sm:right-5 z-50 flex flex-col items-end gap-2.5 touch-none sm:touch-auto"
      >
        {/* Quick Menu Popover Panel */}
        {isOpen && (
          <div className="bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/20 dark:border-[#B8F21B]/30 rounded-3xl p-4 sm:p-5 shadow-2xl w-[calc(100vw-2rem)] max-w-xs sm:w-80 max-h-[80vh] overflow-y-auto space-y-4 animate-scaleUp text-[#111811] dark:text-[#FAFAF5] mb-1">
            <div className="flex items-center justify-between border-b border-[#123B13]/10 dark:border-[#B8F21B]/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] flex items-center justify-center text-[#2F7D16] dark:text-[#B8F21B] font-bold text-xs border border-[#2F7D16]/30 dark:border-[#B8F21B]/30">
                  🌱
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#111811] dark:text-[#FAFAF5]">
                    {language === "hi" ? "JAS Agro सहायता केंद्र" : "JAS Agro Quick Assist"}
                  </h4>
                  <p className="text-[11px] text-[#2F7D16] dark:text-[#B8F21B] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F21B] animate-ping" />
                    {language === "hi" ? "विशेषज्ञ उपलब्ध हैं" : "Experts Online Now"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#5A6E59] hover:text-[#111811] dark:text-[#A3C2A1] dark:hover:text-white cursor-pointer"
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
                className="w-full p-3 rounded-2xl bg-[#2F7D16] hover:bg-[#256312] text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-md transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>{language === "hi" ? "WhatsApp पर चैट करें" : "Chat on WhatsApp"}</span>
                </div>
                <Send className="w-4 h-4 text-[#B8F21B] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Call Button */}
              <a
                href="tel:+917372926623"
                className="w-full p-3 rounded-2xl bg-[#F4F8EC] dark:bg-[#123B13] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] font-bold text-xs sm:text-sm flex items-center justify-between border border-[#123B13]/10 dark:border-[#B8F21B]/20 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B]" />
                  <span>{language === "hi" ? "कृषि विशेषज्ञ से कॉल करें" : "Call Agri Specialist"}</span>
                </div>
                <span className="text-[11px] font-semibold text-[#5A6E59] dark:text-[#A3C2A1]">Free</span>
              </a>

              {/* Get Quote Modal Trigger */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full p-3 rounded-2xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-bold text-xs sm:text-sm flex items-center justify-between shadow-glow-lime transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#123B13]" />
                  <span>{language === "hi" ? "कस्टम कोटेशन प्राप्त करें" : "Request Bulk Pricing"}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#123B13]" />
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 1.08 }}
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#123B13] to-[#2F7D16] text-[#B8F21B] shadow-glow-lime border border-[#B8F21B]/40 transition-transform flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          aria-label="Quick Assistance"
        >
          {/* Glowing Ping Effect */}
          <span className="absolute inset-0 rounded-full bg-[#B8F21B] animate-ping opacity-30 pointer-events-none" />

          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8F21B] relative z-10" />
          ) : (
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8F21B] relative z-10" />
          )}
        </motion.button>
      </motion.div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
