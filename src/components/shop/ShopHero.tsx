"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const ShopHero: React.FC = () => {
  const { t } = useLanguage();

  const title = t("shopHeroTitle");
  const homeText = t("shopNavHome");
  const shopText = t("shopNavShop");

  return (
    <section className="relative w-full overflow-hidden min-h-[140px] sm:min-h-[210px] lg:min-h-[260px] flex items-center bg-[#f2f8ec] dark:bg-[#07160b] border-b border-slate-200 dark:border-[#222222] select-none transition-colors duration-200">
      {/* 1. Full-Width Edge-to-Edge Background Image (Cropped without letterbox bars) */}
      <img
        src="/grow_bags_banner_cropped.png"
        alt="JAS Agro Agriculture & Organic Products Collection"
        className="absolute inset-0 w-full h-full object-cover object-[center_left_15%] sm:object-center select-none pointer-events-none opacity-95 dark:opacity-100"
      />

      {/* 2. Soft Feathered Scrim for Text Readability */}
      <div
        className="dark:hidden absolute left-0 top-0 bottom-0 w-full sm:w-[75%] lg:w-[65%] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 90% 100% at 15% 50%, rgba(244, 250, 238, 0.94) 0%, rgba(236, 246, 227, 0.85) 45%, rgba(225, 240, 214, 0.5) 75%, rgba(255, 255, 255, 0) 100%)",
          filter: "blur(6px)",
        }}
      />
      <div
        className="hidden dark:block absolute left-0 top-0 bottom-0 w-full sm:w-[75%] lg:w-[65%] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 90% 100% at 15% 50%, rgba(1, 15, 5, 0.82) 0%, rgba(3, 24, 9, 0.70) 40%, rgba(4, 28, 10, 0.40) 70%, rgba(0, 0, 0, 0) 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* 3. Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4faee]/90 via-[#f4faee]/75 to-transparent dark:from-[#020d04]/80 dark:via-[#041508]/65 dark:to-[#051c0b]/40 pointer-events-none z-[2]" />

      {/* 4. Shop Content Container */}
      <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-4 sm:py-8 lg:py-10 relative z-10">
        <div className="max-w-3xl flex flex-col justify-center">
          {/* Main Collection Heading */}
          <h1 className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-extrabold font-['Jost',sans-serif] text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-1.5 sm:mb-2.5 drop-shadow-xs dark:drop-shadow-sm">
            {title}
          </h1>

          {/* Semantic Clean Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[14px] md:text-[15px] font-['Inter',sans-serif] text-slate-700 dark:text-white/90 font-medium">
            <Link
              href="/"
              className="text-slate-800 dark:text-white/95 hover:text-[#3f7010] dark:hover:text-[#84d936] transition-colors underline-offset-4 hover:underline"
            >
              {homeText}
            </Link>
            <span className="text-slate-400 dark:text-white/50 text-[11px] sm:text-xs font-light select-none">/</span>
            <Link
              href="/shop"
              className="text-slate-800 dark:text-white/95 hover:text-[#3f7010] dark:hover:text-[#84d936] transition-colors underline-offset-4 hover:underline"
            >
              {shopText}
            </Link>
            <span className="text-slate-400 dark:text-white/50 text-[11px] sm:text-xs font-light select-none">/</span>
            <span className="text-[#3f7010] dark:text-[#84d936] font-semibold truncate max-w-[220px] sm:max-w-none" aria-current="page">
              {title}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};
