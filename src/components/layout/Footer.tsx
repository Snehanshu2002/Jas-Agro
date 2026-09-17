"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  return (
    <footer className="bg-[#070A0F] text-slate-300 border-t border-slate-800/80 relative overflow-hidden font-sans">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-emerald-500/10 blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-1.5 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-glow">
                <img
                  src="https://www.jasagro.com/assets/img/JAS-Agro-Logo.png"
                  alt="JAS Agro Logo"
                  className="h-10 w-auto object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  JAS <span className="text-emerald-400">Agro</span>
                </span>
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest -mt-1 font-mono font-bold">
                  {t("brandTagline")}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isHindi
                ? "Natural organic farming और IoT automation का बेहतरीन combination। Mushroom, Azolla, Napier Grass और Vermicompost का reliable source।"
                : "Integrating natural biological cultivation with digital IoT telemetry. Empowering modern farming with sustainable inputs and automation."}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2 shadow-glass">
              <Sprout className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Smart agriculture. Sustainable future.</span>
            </div>
          </div>

          {/* Quick Solutions Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold font-heading text-white uppercase tracking-wider">
              {isHindi ? "Solutions" : "Solutions"}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/products/oyster-mushroom" className="hover:text-emerald-400 transition-colors">Oyster Mushroom</Link></li>
              <li><Link href="/products/azolla" className="hover:text-emerald-400 transition-colors">Azolla Super-Fodder</Link></li>
              <li><Link href="/products/napier-grass" className="hover:text-emerald-400 transition-colors">Hybrid Napier Grass</Link></li>
              <li><Link href="/products/vermicompost" className="hover:text-emerald-400 transition-colors">Bio Vermicompost</Link></li>
              <li><Link href="/technology" className="hover:text-emerald-400 transition-colors">IoT Automation</Link></li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold font-heading text-white uppercase tracking-wider">
              {isHindi ? "Quick Links" : "Navigation"}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">{t("navHome")}</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">{t("navAbout")}</Link></li>
              <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">{t("navSolutions")}</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition-colors">{t("navProducts")}</Link></li>
              <li><Link href="/technology" className="hover:text-emerald-400 transition-colors">{t("navTechnology")}</Link></li>
              <li><Link href="/insights" className="hover:text-emerald-400 transition-colors">{t("navInsights")}</Link></li>
            </ul>
          </div>

          {/* Contact Details & Locations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold font-heading text-white uppercase tracking-wider">
              {isHindi ? "Office & Processing Plant" : "OFFICE & PROCESSING WAREHOUSE"}
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              {/* Jaipur Office */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {isHindi ? "Corporate Office (Jaipur)" : "Corporate Office (Jaipur)"}
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  84/123, Sector 8, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033
                </p>
              </div>

              {/* Sangaria Warehouse Plant */}
              <div className="space-y-1 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="font-extrabold text-white text-[11px] uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {isHindi ? "Tudi Bales Plant & Warehouse (Sangaria)" : "Tudi Bales Plant & Warehouse (Sangaria)"}
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Amritsar-Jamnagar & Sangaria-Tibbi Highway Crossing, PFV8+8VW, Sangaria, Rajasthan 335063
                </p>
                <div className="text-[10px] text-emerald-400 font-mono font-bold pt-1">
                  ⏱️ Open 24 Hours • One Stop Place for All Tudi Needs
                </div>
              </div>

              {/* Phone & Email */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <a href="tel:+917372926623" className="hover:text-white transition-colors font-mono font-bold text-slate-200">+91 73729 26623</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href="mailto:info@jasagro.com" className="hover:text-white transition-colors font-mono">info@jasagro.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} JAS Agro. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
