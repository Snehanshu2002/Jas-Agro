"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Activity,
  Layers,
  Cpu,
  Radio,
  Sun,
  Droplet,
  Shield,
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Zap,
  Feather as FeatherIcon,
  CheckCircle,
  Calendar,
  Compass,
  Target,
  ChevronRight,
  PhoneCall,
  MapPin,
  Award,
  RefreshCw,
  Clock,
  CheckSquare,
  Thermometer,
  Download,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  Grid,
} from "react-feather";

// Feather Icons compatibility mappings
const Sprout = FeatherIcon;
const Leaf = FeatherIcon;
const Wheat = FeatherIcon;
const Droplets = Droplet;
const ShieldCheck = Shield;
const ShieldAlert = Shield;
const CheckCircle2 = CheckCircle;
const Sparkles = Sun;
const Flame = Zap;
const FlaskConical = Sliders;
const Recycle = RefreshCw;
const Building2 = Grid;
const Factory = Grid;
const FileDown = Download;
const Waves = Droplet;
import { Sliders } from "react-feather";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  SOLUTION_DETAILS,
  SOLUTION_SLUG_ALIASES,
  SolutionDetail,
} from "@/data/solutionsData";

// Helper to render icons dynamically
function renderSolutionIcon(iconName: string, className = "w-5 h-5") {
  switch (iconName) {
    case "Sprout":
      return <Sprout className={className} />;
    case "Waves":
      return <Waves className={className} />;
    case "Wheat":
      return <Wheat className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Radio":
      return <Radio className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Recycle":
      return <Recycle className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Droplets":
      return <Droplets className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Target":
      return <Target className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Sparkles":
    default:
      return <Sparkles className={className} />;
  }
}

export default function SolutionDetailPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "";
  const effectiveSlug = SOLUTION_SLUG_ALIASES[rawSlug] || rawSlug;
  const solution: SolutionDetail | undefined = SOLUTION_DETAILS[effectiveSlug];

  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "applications" | "faqs">("specs");

  if (!solution) {
    return (
      <main className="min-h-screen bg-[#F6F9F4] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] font-['Jost',sans-serif] flex flex-col justify-between">
        <Navbar />
        <div className="py-40 text-center space-y-4 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isHindi ? "समाधान नहीं मिला" : "Solution Not Found"}
          </h1>
          <p className="text-[#424843] dark:text-[#E8F4E8]/70 max-w-md mx-auto">
            {isHindi
              ? "अनुरोधित कृषि समाधान पृष्ठ उपलब्ध नहीं है।"
              : "The requested agriculture solution portfolio route does not exist."}
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-[#163824] transition-all"
          >
            <span>{isHindi ? "सभी समाधान देखें" : "View All Solutions"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const langKey = isHindi ? "hi" : "en";

  return (
    <div className="min-h-screen bg-[#F6F9F4] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] font-['Jost',sans-serif] antialiased selection:bg-[#A6F85F] selection:text-[#0D2000] transition-colors duration-300">
      <Navbar />

      <main className="w-full pt-16 sm:pt-20">
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section
          data-hero-section
          className="relative w-full overflow-hidden bg-[#002210] text-[#E8F4E8] py-12 sm:py-16 lg:py-20 transition-colors duration-300"
        >
          {/* Background image & lighting gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={solution.heroImage}
              alt={solution.name[langKey]}
              className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002210] via-[#002210]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002210] via-transparent to-[#002210]/70" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(rgba(166, 248, 95, 0.4) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Breadcrumb Navigation (Issue 4 fix: min 12px font) */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-[#E8F4E8]/80">
              <Link href="/" className="hover:text-[#A6F85F] transition-colors">
                {isHindi ? "होम" : "Home"}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E8F4E8]/40" />
              <Link href="/solutions" className="hover:text-[#A6F85F] transition-colors">
                {isHindi ? "सॉल्यूशंस" : "Solutions"}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E8F4E8]/40" />
              <span className="text-[#A6F85F] font-bold" aria-current="page">{solution.name[langKey]}</span>
            </nav>

            {/* Badge & Category (Issue 4 & 5 fix: sentence case, min 12px font) */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#B8F21B] text-xs font-semibold border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F21B] animate-pulse" />
                {solution.badge[langKey]}
              </span>
              <span className="text-[#E8F4E8]/40 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-[#E8F4E8]/90 font-medium">
                {solution.category[langKey]}
              </span>
            </div>

            {/* Headline & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.12]">
                  {solution.name[langKey]}
                </h1>
                <p className="text-base sm:text-lg text-[#B8F21B] font-medium leading-snug">
                  {solution.tagline[langKey]}
                </p>
                <p className="text-sm sm:text-base text-[#E8F4E8]/90 max-w-2xl font-normal leading-relaxed">
                  {solution.heroDescription[langKey]}
                </p>

                {/* CTAs (Issue 3 & 8 fix: consistent bright lime primary button) */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#B8F21B] text-[#123B13] font-bold text-xs sm:text-sm shadow-md hover:bg-[#a8e20b] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <span>{isHindi ? "प्राइस & कोटेशन प्राप्त करें" : "Request Solution Quote"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:+917372926623"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#163824] text-white font-medium text-xs sm:text-sm hover:bg-[#163824]/80 border border-white/15 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#B8F21B]" />
                    <span>{isHindi ? "विशेषज्ञ से बात करें: +91 73729 26623" : "Call Expert: +91 73729 26623"}</span>
                  </a>
                </div>
              </div>

              {/* Visual Thumbnail Card */}
              <div className="lg:col-span-4 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#163824]/80 backdrop-blur-md">
                  <img
                    src={solution.heroImage}
                    alt={solution.name[langKey]}
                    className="w-full h-[240px] sm:h-[280px] object-cover"
                  />
                  <div className="p-4 bg-[#002210]/95 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#E8F4E8]/80 font-medium">
                      {isHindi ? "सत्यापित JAS एग्रो सिस्टम" : "Verified JAS Agro System"}
                    </span>
                    <span className="text-xs font-bold text-[#B8F21B]">TURNKEY READY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Telemetry / Verification Metrics Banner (Issue 5 fix: remove uppercase from metric label) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
              {solution.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex flex-col px-3 py-1.5 border-r border-white/10 last:border-none"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs font-bold text-[#B8F21B] mt-0.5">
                    {metric.label[langKey]}
                  </span>
                  <span className="text-xs text-[#E8F4E8]/80 font-normal mt-1 hidden sm:block">
                    {metric.detail[langKey]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. OVERVIEW & AGRONOMIC CONTEXT
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 bg-[#EBF7EB] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-6 text-left">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824]/60 text-[#2F7D16] dark:text-[#B8F21B] font-semibold border border-[#2F7D16]/20 dark:border-[#B8F21B]/20 select-none">
                {isHindi ? "सिस्टम आर्किटेक्चर" : "System Architecture"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111811] dark:text-[#FAFAF5] tracking-tight">
                {solution.overviewHeading[langKey]}
              </h2>
              <p className="text-sm sm:text-base text-[#5A6E59] dark:text-[#A3C2A1] leading-relaxed font-normal">
                {solution.overviewText[langKey]}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. CORE PILLARS & ENGINEERING SPECS (4-Grid)
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#F6F9F4] dark:bg-[#071508] text-[#111811] dark:text-[#FAFAF5] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14 text-left">
            <div className="space-y-2 max-w-3xl">
              <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824]/60 text-[#2F7D16] dark:text-[#B8F21B] font-semibold border border-[#2F7D16]/20 dark:border-[#B8F21B]/20 select-none">
                {isHindi ? "मुख्य इंजीनियरिंग स्तंभ" : "Core Engineering Pillars"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111811] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "वैज्ञानिक डिजाइन और परिचालन मानक" : "Scientific Design & Operational Standards"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/50 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#002210] text-[#B8F21B] flex items-center justify-center">
                        {renderSolutionIcon(pillar.iconName)}
                      </div>
                      {/* Issue 6 Fix: Prominent category tag chip with high contrast */}
                      {pillar.tag && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 shadow-xs">
                          {pillar.tag[langKey]}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#111811] dark:text-[#FAFAF5]">
                      {pillar.title[langKey]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E59] dark:text-[#A3C2A1] leading-relaxed font-normal">
                      {pillar.desc[langKey]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TECHNICAL SPECIFICATIONS & APPLICATIONS TABS
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 bg-[#EBF7EB] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border-t border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 text-left">
            {/* Tab Controls */}
            <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#C2C8C0]/40 dark:border-white/10 pb-4 max-w-4xl mx-auto">
              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "specs"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-md font-extrabold"
                    : "bg-[#F6F9F4] dark:bg-[#163824] text-[#111811] dark:text-[#FAFAF5] hover:bg-[#EBF7EB]"
                }`}
              >
                {isHindi ? "तकनीकी विशिष्टताएँ (Specs)" : "Technical Specifications"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("applications")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "applications"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-md font-extrabold"
                    : "bg-[#F6F9F4] dark:bg-[#163824] text-[#111811] dark:text-[#FAFAF5] hover:bg-[#EBF7EB]"
                }`}
              >
                {isHindi ? "अनुप्रयोग एवं उपयोग (Applications)" : "Applications & Target Use"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("faqs")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "faqs"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-md font-extrabold"
                    : "bg-[#F6F9F4] dark:bg-[#163824] text-[#111811] dark:text-[#FAFAF5] hover:bg-[#EBF7EB]"
                }`}
              >
                {isHindi ? `अक्सर पूछे जाने वाले सवाल (${solution.faqs.length})` : `FAQs (${solution.faqs.length})`}
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === "specs" && (
              <div className="bg-[#F6F9F4] dark:bg-[#163824]/40 p-6 sm:p-8 rounded-3xl border border-[#C2C8C0]/40 dark:border-white/10 space-y-4 max-w-4xl mx-auto">
                <h3 className="text-lg font-bold text-[#111811] dark:text-[#FAFAF5]">
                  {isHindi ? "प्रणाली विशिष्टता डेटा" : "System Technical Parameters"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {solution.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#002210]/60 border border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs sm:text-sm"
                    >
                      <span className="text-[#5A6E59] dark:text-[#A3C2A1] font-medium">
                        {spec.label[langKey]}
                      </span>
                      <span className="text-[#123B13] dark:text-[#B8F21B] font-bold font-mono text-right pl-2">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="bg-[#F6F9F4] dark:bg-[#163824]/40 p-6 sm:p-8 rounded-3xl border border-[#C2C8C0]/40 dark:border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-[#111811] dark:text-[#FAFAF5]">
                  {isHindi ? "लक्षित क्षेत्र एवं अनुप्रयोग" : "Deployment Sectors & Applications"}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {solution.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#111811] dark:text-[#FAFAF5] font-medium">
                        {app[langKey]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="space-y-4 max-w-4xl">
                {solution.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F6F9F4] dark:bg-[#163824]/40 border border-[#C2C8C0]/40 dark:border-white/10 space-y-2"
                  >
                    <h4 className="text-base font-bold text-[#111811] dark:text-[#FAFAF5] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                      {faq.question[langKey]}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A6E59] dark:text-[#A3C2A1] leading-relaxed pl-6">
                      {faq.answer[langKey]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            5. RELATED SOLUTIONS NAVIGATION
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 bg-[#F6F9F4] dark:bg-[#071508] text-[#111811] dark:text-[#FAFAF5] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 text-left">
            {/* Issue 7 Fix: Place Portfolio link in cohesive proximity with section title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#C2C8C0]/40 dark:border-white/10 pb-4">
              <div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824] text-[#123B13] dark:text-[#B8F21B] font-semibold tracking-wide">
                  {isHindi ? "संबंधित समाधान" : "Related Portfolio"}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111811] dark:text-[#FAFAF5] mt-2">
                  {isHindi ? "अन्य एकीकृत प्रणालियाँ देखें" : "Explore Interconnected Systems"}
                </h3>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:underline shrink-0"
              >
                <span>{isHindi ? "सभी समाधान देखें →" : "View Full Solutions Portfolio →"}</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.relatedSlugs.map((relSlug) => {
                const relItem = SOLUTION_DETAILS[relSlug];
                if (!relItem) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/solutions/${relItem.slug}`}
                    className="p-6 rounded-2xl bg-white dark:bg-[#163824]/50 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F]">
                        {relItem.category[langKey]}
                      </span>
                      <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5] group-hover:text-[#376B00] dark:group-hover:text-[#A6F85F] transition-colors">
                        {relItem.name[langKey]}
                      </h4>
                      {/* Issue 6 Fix: Accessible min 13-14px text */}
                      <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/85 line-clamp-2 leading-relaxed">
                        {relItem.tagline[langKey]}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#002210] dark:text-[#FAFAF5]">
                      <span>{isHindi ? "विस्तृत विवरण देखें" : "Explore Solution"}</span>
                      <ArrowRight className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. BOTTOM CONSULTATION CTA BANNER
           ========================================================================= */}
        <section className="w-full py-12 sm:py-16 bg-[#002210] text-[#E8F4E8] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {isHindi
                ? "क्या आप अपने फार्म पर यह समाधान स्थापित करना चाहते हैं?"
                : "Ready to Deploy This Solution on Your Farm?"}
            </h2>
            <p className="text-sm sm:text-base text-[#E8F4E8]/80 max-w-2xl mx-auto font-light">
              {isHindi
                ? "हमारे अनुभवी कृषि वैज्ञानिकों से परामर्श लें और अपनी जमीन व बजट के अनुसार टर्नकी एस्टिमेट प्राप्त करें।"
                : "Speak directly with JAS Agro agronomists to evaluate site feasibility, customize engineering blueprints, and review financial ROI."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A6F85F] text-[#002210] font-bold text-xs sm:text-sm shadow-md hover:bg-[#8cdb46] transition-all cursor-pointer"
              >
                <span>{isHindi ? "प्राइस कोटेशन का अनुरोध करें" : "Request Turnkey Quote"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/917372926623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#163824] text-white font-medium text-xs sm:text-sm hover:bg-[#163824]/80 border border-white/15 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#A6F85F]" />
                <span>{isHindi ? "WhatsApp सहायता: +91 73729 26623" : "WhatsApp Desk: +91 73729 26623"}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={solution.name[langKey]}
      />
    </div>
  );
}
