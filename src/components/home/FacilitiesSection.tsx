"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink, Building2, Factory, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/company";

export const FacilitiesSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const { office, warehouse } = COMPANY_INFO.locations;

  return (
    <section className="py-12 lg:py-16 bg-[#F6F8EE] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#B8F21B]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/40 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
              <span>{isHindi ? "ऑपरेशन्स & फैसिलिटीज" : "OPERATIONAL INFRASTRUCTURE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight">
              {isHindi ? "हमारे " : "Verified Production & "}
              <span className="bg-gradient-to-r from-[#2F7D16] via-[#4F9D1F] to-[#B8F21B] dark:from-[#B8F21B] dark:via-[#C8F93B] dark:to-[#4F9D1F] bg-clip-text text-transparent">
                {isHindi ? "ऑफिस & प्रोसेसिंग प्लांट्स" : "Corporate Facilities"}
              </span>
            </h2>
            <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-sm sm:text-base max-w-2xl leading-relaxed">
              {isHindi
                ? "जयपुर कॉर्पोरेट हेडक्वार्टर और संगरिया 24/7 बायोमास प्रोसेसिंग प्लांट के साथ पूरे राजस्थान और उत्तर भारत में सेवाएं।"
                : "Serving agricultural enterprises and dairy networks through our Jaipur corporate AgTech hub and 24/7 Sangaria biomass baling plant."}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:text-[#123B13] dark:hover:text-white transition-colors group"
          >
            <span className="leading-none">{isHindi ? "लोकेशन एवं कॉन्टैक्ट डिटेल्स" : "View Location Details"}</span>
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Dual Facility Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Jaipur Corporate Hub */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white dark:bg-[#123B13] rounded-3xl border border-[#2F7D16]/15 dark:border-[#1B4D1C] hover:border-[#B8F21B]/70 p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider border border-[#2F7D16]/20 dark:border-[#B8F21B]/30">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{isHindi ? "कॉर्पोरेट हेडक्वार्टर" : "Corporate Headquarters"}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111811] dark:text-[#FAFAF5] group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors">
                    {isHindi ? office.titleHi : office.title}
                  </h3>
                  <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1] font-mono font-medium">
                    {office.type}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold shrink-0">
                  Jaipur, RJ
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-3.5 text-sm text-[#111811] dark:text-[#FAFAF5] border-y border-[#2F7D16]/10 dark:border-[#1B4D1C] py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                  <span className="font-mono text-xs">{office.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono text-xs hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-[#5A6E59] dark:text-[#A3C2A1] uppercase tracking-wider">
                  {isHindi ? "मुख्य गतिविधियां" : "Key Functions"}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "एग्रीटेक R&D" : "AgTech R&D"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "मशरूम ट्रेनिंग सेंटर" : "Mushroom Training Lab"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "क्लाइंट कंसल्टेशन" : "Client Consultation"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "IoT टेलीमेट्री सपोर्ट" : "IoT Support Desk"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[#2F7D16]/10 dark:border-[#1B4D1C] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
                Plus Code: {office.plusCode}
              </span>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:text-[#123B13] dark:hover:text-white transition-colors"
              >
                <span>{isHindi ? "गूगल मैप पर देखें" : "Open in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* 2. Sangaria Biomass Processing Plant */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white dark:bg-[#123B13] rounded-3xl border border-[#2F7D16]/15 dark:border-[#1B4D1C] hover:border-[#B8F21B]/70 p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider border border-[#2F7D16]/20 dark:border-[#B8F21B]/30">
                    <Factory className="w-3.5 h-3.5" />
                    <span>{isHindi ? "24/7 प्रोसेसिंग प्लांट" : "24/7 Biomass Processing Plant"}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#111811] dark:text-[#FAFAF5] group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors">
                    {isHindi ? warehouse.titleHi : warehouse.title}
                  </h3>
                  <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1] font-mono font-medium">
                    {warehouse.type}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold shrink-0">
                  Sangaria, RJ
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-3.5 text-sm text-[#111811] dark:text-[#FAFAF5] border-y border-[#2F7D16]/10 dark:border-[#1B4D1C] py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0 mt-0.5" />
                  <span className="leading-snug">{warehouse.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                  <span className="font-mono text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B]">{warehouse.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                  <a href={`tel:${warehouse.phone}`} className="font-mono text-xs hover:underline">
                    {warehouse.phone}
                  </a>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-[#5A6E59] dark:text-[#A3C2A1] uppercase tracking-wider">
                  {isHindi ? "मुख्य क्षमताएं" : "Plant Operations"}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "तूड़ी बाल्स निर्माण" : "Tudi Baling"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "हाई-डेंसिटी पैकेजिंग" : "High-Density Bales"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "24/7 सप्लाई नेटवर्क" : "24/7 Bulk Dispatch"}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F8EC] dark:bg-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-xs font-medium">
                    {isHindi ? "एग्री बायोमास हब" : "Biomass Aggregation"}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[#2F7D16]/10 dark:border-[#1B4D1C] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
                Plus Code: {warehouse.plusCode}
              </span>
              <a
                href={warehouse.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:text-[#123B13] dark:hover:text-white transition-colors"
              >
                <span>{isHindi ? "गूगल मैप पर देखें" : "Open in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
