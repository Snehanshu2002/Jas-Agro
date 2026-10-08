"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  return (
    <footer className="relative w-full overflow-hidden font-sans select-none">
      
      {/* 1. FULL-WIDTH CINEMATIC MOUNTAIN BACKGROUND WITH VERTICAL GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[center_55%] pointer-events-none"
        style={{
          backgroundImage: `url('/media/mountainbottom.jpg')`,
        }}
      />

      {/* 2. MULTI-TIER VERTICAL OVERLAY: LIGHT TOP → NATURAL MOUNTAIN → SUBTLE LOW-OPACITY GREEN ATMOSPHERE */}
      {/* Light Mode Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:hidden"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(246, 248, 238, 0.98) 0%, 
            rgba(246, 248, 238, 0.85) 18%, 
            rgba(246, 248, 238, 0.42) 42%, 
            rgba(20, 70, 30, 0.18) 72%, 
            rgba(8, 45, 15, 0.28) 100%)`,
        }}
      />

      {/* Dark Mode Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(13, 35, 14, 0.94) 0%, 
            rgba(13, 35, 14, 0.78) 18%, 
            rgba(13, 35, 14, 0.38) 42%, 
            rgba(18, 59, 19, 0.24) 72%, 
            rgba(8, 35, 12, 0.45) 100%)`,
        }}
      />

      {/* Ambient Film Layer */}
      <div className="absolute inset-0 z-0 bg-black/5 pointer-events-none" />

      {/* 3. EXISTING FOOTER CONTENT (MULTI-COLUMN EDITORIAL LAYOUT) */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-8 sm:pb-12">
          
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-5">
            {/* Standalone Static JAS Agro Brand Logo (Directly on Footer Background) */}
            <Link href="/" className="inline-block w-fit mb-2" aria-label="JAS Agro Home">
              {/* Light Mode Logo */}
              <img
                src="/media/jas-agro-logo-light.png"
                alt="JAS Agro"
                className="dark:hidden h-12 sm:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[240px] lg:max-w-[270px] object-contain"
              />
              {/* Dark Mode Logo */}
              <img
                src="/media/jas-agro-logo-dark.png"
                alt="JAS Agro"
                className="hidden dark:block h-12 sm:h-14 lg:h-16 w-auto max-w-[200px] sm:max-w-[240px] lg:max-w-[270px] object-contain"
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-[#2C3E2D] dark:text-[#EAF5D8] leading-relaxed max-w-sm font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
              {isHindi
                ? "Natural organic farming और IoT automation का बेहतरीन combination। Mushroom, Azolla, Napier Grass और Vermicompost का reliable source।"
                : "Integrating natural biological cultivation with digital IoT telemetry. Empowering modern farming with sustainable inputs and automation."}
            </p>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#123B13]/85 border border-[#2F7D16]/25 dark:border-[#2F7D16]/50 text-xs font-mono text-[#123B13] dark:text-[#EAF5D8] flex items-center gap-2.5 shadow-sm backdrop-blur-md">
              <Sprout className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
              <span className="font-semibold">
                {isHindi ? "स्मार्ट कृषि। सतत भविष्य।" : "Smart agriculture. Sustainable future."}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Solutions Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-wide">
              {isHindi ? "सॉल्यूशंस" : "Solutions"}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-[#2C3E2D] dark:text-[#A3C2A1]">
              <li><Link href="/products/oyster-mushroom" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "ऑयस्टर मशरूम" : "Oyster Mushroom"}</Link></li>
              <li><Link href="/products/azolla" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "अजोला सुपर-चारा" : "Azolla Super-Fodder"}</Link></li>
              <li><Link href="/products/napier-grass" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "हाइब्रिड नेपियर घास" : "Hybrid Napier Grass"}</Link></li>
              <li><Link href="/products/vermicompost" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "जैविक वर्मीकंपोस्ट" : "Bio Vermicompost"}</Link></li>
              <li><Link href="/technology" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "IoT ऑटोमेशन" : "IoT Automation"}</Link></li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-wide">
              {isHindi ? "नेविगेशन" : "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-[#2C3E2D] dark:text-[#A3C2A1]">
              <li><Link href="/" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navHome")}</Link></li>
              <li><Link href="/about" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navAbout")}</Link></li>
              <li><Link href="/solutions" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navSolutions")}</Link></li>
              <li><Link href="/products" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navProducts")}</Link></li>
              <li><Link href="/technology" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navTechnology")}</Link></li>
              <li><Link href="/insights" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{t("navInsights")}</Link></li>
            </ul>
          </div>

          {/* Column 4: Office & Processing Warehouse */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-wide">
              {isHindi ? "कार्यालय एवं प्रोसेसिंग प्लांट" : "Office & Processing Warehouse"}
            </h3>
            <div className="space-y-3.5 text-xs text-[#2C3E2D] dark:text-[#A3C2A1]">
              
              {/* Jaipur Office */}
              <div className="space-y-1 p-3.5 rounded-2xl bg-white/80 dark:bg-[#123B13]/90 border border-[#2F7D16]/20 dark:border-[#1B4D1C] backdrop-blur-md shadow-sm">
                <div className="font-bold text-xs text-[#2F7D16] dark:text-[#B8F21B] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
                  <span>{isHindi ? "कॉर्पोरेट कार्यालय (जयपुर)" : "Corporate Office (Jaipur)"}</span>
                </div>
                <p className="text-[#111811] dark:text-[#EAF5D8] text-xs sm:text-[13px] leading-relaxed font-medium">
                  84/123, Sector 8, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033
                </p>
              </div>

              {/* Sangaria Warehouse Plant */}
              <div className="space-y-1 p-3.5 rounded-2xl bg-white/80 dark:bg-[#123B13]/90 border border-[#2F7D16]/20 dark:border-[#1B4D1C] backdrop-blur-md shadow-sm">
                <div className="font-bold text-xs text-[#2F7D16] dark:text-[#B8F21B] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
                  <span>{isHindi ? "तूड़ी बेल्स प्लांट एवं वेयरहाउस (संगरिया)" : "Tudi Bales Plant & Warehouse (Sangaria)"}</span>
                </div>
                <p className="text-[#111811] dark:text-[#EAF5D8] text-xs sm:text-[13px] leading-relaxed font-medium">
                  Amritsar-Jamnagar & Sangaria-Tibbi Highway Crossing, PFV8+8VW, Sangaria, Rajasthan 335063
                </p>
                <div className="text-[11px] sm:text-xs text-[#2F7D16] dark:text-[#B8F21B] font-mono font-bold pt-1">
                  {isHindi ? "⏱️ 24 घंटे खुला • तूड़ी की सभी ज़रूरतों के लिए एक स्थान" : "⏱️ Open 24 Hours • One Stop Place for All Tudi Needs"}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
                  <a href="tel:+917372926623" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors font-mono font-bold text-[#111811] dark:text-[#FAFAF5]">
                    +91 73729 26623
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
                  <a href="mailto:info@jasagro.com" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors font-mono font-bold text-[#111811] dark:text-[#FAFAF5]">
                    info@jasagro.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Large Editorial Brand Wordmark (Watermark spanning broad footer width) */}
        <div className="w-full text-center overflow-hidden pointer-events-none select-none pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-4">
          <span className="font-heading font-bold tracking-[-0.035em] text-white/20 leading-none whitespace-nowrap block text-[clamp(4.5rem,20vw,22rem)]">
            Jas Agro
          </span>
        </div>

        {/* Bottom Legal & Copyright Bar - Seamless transparent overlay */}
        <div className="pt-6 pb-2 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-semibold text-[#111811]/90 dark:text-[#FAFAF5]/90">
          <div>
            © {new Date().getFullYear()} JAS Agro. {isHindi ? "सर्वाधिकार सुरक्षित।" : "All Rights Reserved."}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "प्राइवेसी पॉलिसी" : "Privacy Policy"}</Link>
            <Link href="/terms" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "नियम व शर्तें" : "Terms of Service"}</Link>
            <Link href="/sitemap" className="hover:text-[#2F7D16] dark:hover:text-[#B8F21B] transition-colors">{isHindi ? "साइटमैप" : "Sitemap"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
