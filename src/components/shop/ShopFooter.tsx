"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ShopFooter: React.FC = () => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  return (
    <footer className="bg-slate-100 dark:bg-[#121212] text-slate-700 dark:text-zinc-300 border-t border-slate-200 dark:border-[#222222] relative overflow-hidden font-sans transition-colors duration-200">
      <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-11 sm:py-13 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-200 dark:border-[#222222]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="flex items-center">
              {/* Light Mode Logo */}
              <img
                src="/jas-agro-logo-for-white-background.png"
                alt="JAS Agro - Bringing Growth to Agriculture"
                className="dark:hidden h-[50px] sm:h-[58px] w-auto object-contain select-none"
              />
              {/* Dark Mode Logo */}
              <img
                src="/jas-agro-logo.png"
                alt="JAS Agro - Bringing Growth to Agriculture"
                className="hidden dark:block h-[50px] sm:h-[58px] w-auto object-contain select-none"
              />
            </Link>

            <p className="text-[13.5px] text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              {t("shopFooterAbout")}
            </p>

            <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#3f7010]/40 text-[13.5px] font-mono text-[#529116] flex items-center gap-2">
              <Sprout className="w-4.5 h-4.5 text-[#529116] shrink-0" />
              <span>{t("shopFooterTagline")}</span>
            </div>
          </div>

          {/* Quick Solutions Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[13.5px] sm:text-[14.5px] font-bold font-heading text-slate-900 dark:text-white uppercase tracking-wider">
              {t("solutionsTitle")}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-slate-600 dark:text-zinc-400 font-medium">
              <li><Link href="/products/oyster-mushroom" className="hover:text-[#529116] transition-colors">{isHindi ? "ऑयस्टर मशरूम" : "Oyster Mushroom"}</Link></li>
              <li><Link href="/products/azolla" className="hover:text-[#529116] transition-colors">{isHindi ? "अजोला सुपर-चारा" : "Azolla Super-Fodder"}</Link></li>
              <li><Link href="/products/napier-grass" className="hover:text-[#529116] transition-colors">{isHindi ? "हाइब्रिड नेपियर घास" : "Hybrid Napier Grass"}</Link></li>
              <li><Link href="/products/vermicompost" className="hover:text-[#529116] transition-colors">{isHindi ? "जैविक वर्मीकंपोस्ट" : "Bio Vermicompost"}</Link></li>
              <li><Link href="/technology" className="hover:text-[#529116] transition-colors">{isHindi ? "IoT ऑटोमेशन" : "IoT Automation"}</Link></li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-[13.5px] sm:text-[14.5px] font-bold font-heading text-slate-900 dark:text-white uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2 text-[13.5px] text-slate-600 dark:text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-[#529116] transition-colors">{t("navHome")}</Link></li>
              <li><Link href="/about" className="hover:text-[#529116] transition-colors">{t("navAbout")}</Link></li>
              <li><Link href="/solutions" className="hover:text-[#529116] transition-colors">{t("navSolutions")}</Link></li>
              <li><Link href="/products" className="hover:text-[#529116] transition-colors">{t("navProducts")}</Link></li>
              <li><Link href="/technology" className="hover:text-[#529116] transition-colors">{t("navTechnology")}</Link></li>
              <li><Link href="/insights" className="hover:text-[#529116] transition-colors">{t("navInsights")}</Link></li>
            </ul>
          </div>

          {/* Contact & Facility Addresses */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-[13.5px] sm:text-[14.5px] font-bold font-heading text-slate-900 dark:text-white uppercase tracking-wider">
              {t("shopFooterContactHeading")}
            </h4>
            
            <div className="space-y-2 text-[13.5px] text-slate-600 dark:text-zinc-400">
              <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-[12.5px]">
                  <MapPin className="w-4 h-4 text-[#529116]" />
                  <span>{t("shopFooterCorporateOffice")}</span>
                </div>
                <p className="text-[12.5px] leading-relaxed text-slate-600 dark:text-zinc-400 pl-5.5">
                  84/123, Sector 8, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 text-[12.5px]">
                  <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>{t("shopFooterPlantWarehouse")}</span>
                </div>
                <p className="text-[12.5px] leading-relaxed text-slate-600 dark:text-zinc-400 pl-5.5">
                  Amritsar-Jamnagar & Sangaria-Tibbi Highway Crossing, FFV8+GVW, Sangaria, Rajasthan 335063
                </p>
                <div className="pl-5.5 pt-0.5">
                  <span className="inline-flex items-center gap-1 text-[11.5px] text-amber-600 dark:text-amber-300 font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    {t("shopFooterPlantTiming")}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[12.5px] text-slate-700 dark:text-zinc-300">
                <a href="tel:+917372926623" className="flex items-center gap-1.5 hover:text-[#529116] transition-colors">
                  <Phone className="w-4 h-4 text-[#529116]" />
                  <span>+91 73729 26623</span>
                </a>
                <a href="mailto:info@jasagro.com" className="flex items-center gap-1.5 hover:text-[#529116] transition-colors">
                  <Mail className="w-4 h-4 text-[#529116]" />
                  <span>info@jasagro.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13.5px] text-slate-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} JAS Agro. {t("allRightsReserved")}</p>
          <div className="flex items-center gap-4 text-[13.5px]">
            <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isHindi ? "गोपनीयता नीति" : "Privacy Policy"}</Link>
            <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isHindi ? "नियम एवं शर्तें" : "Terms of Service"}</Link>
            <Link href="/sitemap" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isHindi ? "साइटमैप" : "Sitemap"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
