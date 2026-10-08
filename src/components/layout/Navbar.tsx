"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ShoppingBag,
  Sun,
  Moon,
  Languages,
  ChevronDown,
  ChevronRight,
  Sprout,
  Cpu,
  Recycle,
  Building2,
  Sparkles,
  Waves,
  Wheat,
  Layers,
  Radio,
  Sun as SunIcon,
  Activity,
  Leaf,
  Droplets,
  ShieldCheck,
  Target,
  Compass,
} from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

interface SolutionSubItem {
  name: { en: string; hi: string };
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SolutionCategoryItem {
  id: string;
  title: { en: string; hi: string };
  icon: React.ComponentType<{ className?: string }>;
  items: SolutionSubItem[];
}

const SOLUTIONS_NAV_DATA: SolutionCategoryItem[] = [
  {
    id: "cultivation",
    title: { en: "Cultivation", hi: "कृषि एवं उत्पादन" },
    icon: Sprout,
    items: [
      { name: { en: "Oyster Mushroom", hi: "ऑयस्टर मशरूम" }, href: "/solutions/oyster-mushroom", icon: Sparkles },
      { name: { en: "Azolla Farming", hi: "अजोला फार्मिंग" }, href: "/solutions/azolla-farming", icon: Waves },
      { name: { en: "Hybrid Napier", hi: "हाइब्रिड नेपियर" }, href: "/solutions/hybrid-napier", icon: Wheat },
      { name: { en: "Vermicompost", hi: "वर्मीकंपोस्ट" }, href: "/solutions/vermicompost", icon: Layers },
    ],
  },
  {
    id: "smart-agriculture",
    title: { en: "Smart Agriculture", hi: "स्मार्ट एग्रीकल्चर" },
    icon: Cpu,
    items: [
      { name: { en: "IoT Farm Monitoring", hi: "IoT फार्म मॉनिटरिंग" }, href: "/solutions/iot-farm-monitoring", icon: Radio },
      { name: { en: "Climate Monitoring", hi: "क्लाइमेट मॉनिटरिंग" }, href: "/solutions/climate-monitoring", icon: SunIcon },
      { name: { en: "Automated Farm Control", hi: "ऑटोमेटेड फार्म कंट्रोल" }, href: "/solutions/automated-farm-control", icon: Activity },
    ],
  },
  {
    id: "sustainable-systems",
    title: { en: "Sustainable Systems", hi: "सतत प्रणालियाँ" },
    icon: Recycle,
    items: [
      { name: { en: "Circular Farming", hi: "सर्कुलर फार्मिंग" }, href: "/solutions/circular-farming", icon: Recycle },
      { name: { en: "Biomass Management", hi: "बायोमास प्रबंधन" }, href: "/solutions/biomass-management", icon: Leaf },
      { name: { en: "Water Efficiency", hi: "जल दक्षता" }, href: "/solutions/water-efficiency", icon: Droplets },
      { name: { en: "Soil Restoration", hi: "मृदा पुनर्जनन" }, href: "/solutions/soil-restoration", icon: ShieldCheck },
    ],
  },
  {
    id: "farm-setup",
    title: { en: "Farm Setup", hi: "फार्म सेटअप" },
    icon: Building2,
    items: [
      { name: { en: "Mushroom Farm Setup", hi: "मशरूम फार्म सेटअप" }, href: "/solutions/mushroom-farm-setup", icon: Building2 },
      { name: { en: "Integrated Farm", hi: "एकीकृत फार्म" }, href: "/solutions/integrated-farm", icon: Target },
      { name: { en: "IoT Installation", hi: "IoT इंस्टॉलेशन" }, href: "/solutions/iot-installation", icon: Cpu },
      { name: { en: "Farm Advisory", hi: "फार्म एडवाइजरी" }, href: "/solutions/farm-advisory", icon: Compass },
    ],
  },
];

interface ProductSubItem {
  name: { en: string; hi: string };
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProductNavItem {
  id: string;
  title: { en: string; hi: string };
  shortLabel: { en: string; hi: string };
  icon: React.ComponentType<{ className?: string }>;
  items: ProductSubItem[];
}

const PRODUCTS_NAV_DATA: ProductNavItem[] = [
  {
    id: "oyster-mushroom",
    title: { en: "Oyster Mushroom", hi: "ऑयस्टर मशरूम" },
    shortLabel: { en: "Climate-Controlled Cultivation", hi: "क्लाइमेट-कंट्रोल्ड फार्मिंग" },
    icon: Sparkles,
    items: [
      { name: { en: "Oyster Mushroom System", hi: "ऑयस्टर मशरूम सिस्टम" }, href: "/products/oyster-mushroom-system", icon: Sparkles },
      { name: { en: "Mushroom Cultivation Process", hi: "मशरूम उत्पादन प्रक्रिया" }, href: "/products/mushroom-cultivation-process", icon: Sprout },
      { name: { en: "Mushroom Farm Setup", hi: "मशरूम फार्म सेटअप" }, href: "/products/mushroom-farm-setup", icon: Building2 },
    ],
  },
  {
    id: "azolla-farming",
    title: { en: "Azolla Farming", hi: "अजोला फार्मिंग" },
    shortLabel: { en: "High-Protein Green Fodder", hi: "हाई-प्रोटीन ग्रीन फोडर" },
    icon: Waves,
    items: [
      { name: { en: "Azolla Production System", hi: "अजोला उत्पादन प्रणाली" }, href: "/products/azolla-production-system", icon: Waves },
      { name: { en: "Azolla Bed Setup", hi: "अजोला बेड सेटअप" }, href: "/products/azolla-bed-setup", icon: Layers },
      { name: { en: "Azolla Cultivation Process", hi: "अजोला उत्पादन प्रक्रिया" }, href: "/products/azolla-cultivation-process", icon: Sprout },
    ],
  },
  {
    id: "hybrid-napier",
    title: { en: "Hybrid Napier", hi: "हाइब्रिड नेपियर" },
    shortLabel: { en: "High-Biomass Fodder", hi: "हाई-बायोमास फोडर" },
    icon: Wheat,
    items: [
      { name: { en: "Hybrid Napier System", hi: "हाइब्रिड नेपियर सिस्टम" }, href: "/products/hybrid-napier-system", icon: Wheat },
      { name: { en: "Cultivation & Harvest", hi: "उत्पादन और कटाई" }, href: "/products/cultivation-and-harvest", icon: Sprout },
      { name: { en: "Fodder / Silage Management", hi: "चारा व साइलेज प्रबंधन" }, href: "/products/fodder-silage-management", icon: Leaf },
    ],
  },
  {
    id: "bio-vermicompost",
    title: { en: "Bio-Vermicompost", hi: "बायो-वर्मीकंपोस्ट" },
    shortLabel: { en: "Biological Soil Nutrition", hi: "जैविक मृदा पोषण" },
    icon: Layers,
    items: [
      { name: { en: "Vermicompost System", hi: "वर्मीकंपोस्ट सिस्टम" }, href: "/products/vermicompost-system", icon: Layers },
      { name: { en: "Vermicomposting Process", hi: "वर्मीकंपोस्टिंग प्रक्रिया" }, href: "/products/vermicomposting-process", icon: Recycle },
      { name: { en: "Soil & Organic Matter", hi: "मृदा व जैविक पदार्थ" }, href: "/products/soil-organic-matter", icon: ShieldCheck },
    ],
  },
  {
    id: "smart-farming-iot",
    title: { en: "Smart Farming / IoT", hi: "स्मार्ट फार्मिंग / IoT" },
    shortLabel: { en: "Farm Monitoring & Automation", hi: "फार्म मॉनिटरिंग और ऑटोमेशन" },
    icon: Cpu,
    items: [
      { name: { en: "IoT Monitoring System", hi: "IoT मॉनिटरिंग सिस्टम" }, href: "/products/iot-monitoring-system", icon: Radio },
      { name: { en: "Climate Monitoring", hi: "क्लाइमेट मॉनिटरिंग" }, href: "/products/climate-monitoring", icon: SunIcon },
      { name: { en: "Automated Farm Control", hi: "ऑटोमेटेड फार्म कंट्रोल" }, href: "/products/automated-farm-control", icon: Activity },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleDarkMode } = useTheme();
  const { totalCartCount } = useCart();
  const isHindi = language === "hi";
  const langKey = isHindi ? "hi" : "en";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compact navbar hysteresis
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setCompact(false);
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const COMPACT_AT = 120;
    const EXPAND_AT = 180;

    let leaveObserver: IntersectionObserver | null = null;
    let returnObserver: IntersectionObserver | null = null;
    let rafId = 0;
    let attempts = 0;

    const attach = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero-section]");
      if (!hero) {
        if (attempts++ < 30) rafId = window.requestAnimationFrame(attach);
        return;
      }

      leaveObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) setCompact(true);
        },
        { rootMargin: `-${COMPACT_AT}px 0px 0px 0px`, threshold: 0 }
      );
      returnObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCompact(false);
        },
        { rootMargin: `-${EXPAND_AT}px 0px 0px 0px`, threshold: 0 }
      );
      leaveObserver.observe(hero);
      returnObserver.observe(hero);
    };

    attach();

    return () => {
      window.cancelAnimationFrame(rafId);
      leaveObserver?.disconnect();
      returnObserver?.disconnect();
    };
  }, [pathname]);

  const sizeEase = "ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none";

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/shop") {
      return pathname === "/shop" || pathname.startsWith("/shop/");
    }
    if (href === "/products") {
      return pathname === "/products" || (pathname.startsWith("/products/") && !pathname.startsWith("/shop"));
    }
    if (href === "/solutions") {
      return pathname === "/solutions" || pathname.startsWith("/solutions/");
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isSolutionsActive = isLinkActive("/solutions");
  const isProductsActive = isLinkActive("/products");

  // Solutions 2-Level Dropdown State
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterSolutions = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setProductsDropdownOpen(false);
    setActiveProductIndex(null);
    setMoreDropdownOpen(false);
    setSolutionsDropdownOpen(true);
  };

  const handleMouseLeaveSolutions = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
      setActiveCategoryIndex(null);
    }, 180);
  };

  // Products 2-Level Dropdown State
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState<number | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterProducts = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setSolutionsDropdownOpen(false);
    setActiveCategoryIndex(null);
    setMoreDropdownOpen(false);
    setProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
      setActiveProductIndex(null);
    }, 180);
  };

  // More Dropdown State
  const moreNavLinks = [
    { name: t("navSustainability"), href: "/sustainability" },
    { name: t("navInsights"), href: "/insights" },
    { name: t("navContact"), href: "/contact" },
  ];

  const isMoreActive = moreNavLinks.some((link) => isLinkActive(link.href));
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(isMoreActive);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(isSolutionsActive);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<number | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(isProductsActive);
  const [mobileProductItemOpen, setMobileProductItemOpen] = useState<number | null>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterMore = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setSolutionsDropdownOpen(false);
    setActiveCategoryIndex(null);
    setProductsDropdownOpen(false);
    setActiveProductIndex(null);
    setMoreDropdownOpen(true);
  };

  const handleMouseLeaveMore = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 180);
  };

  // Auto-close on navigation
  useEffect(() => {
    setSolutionsDropdownOpen(false);
    setActiveCategoryIndex(null);
    setProductsDropdownOpen(false);
    setActiveProductIndex(null);
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${sizeEase} ${
          scrolled
            ? `bg-[#F6F8EE]/95 dark:bg-[#0D230E]/95 backdrop-blur-xl border-b border-[#EAF5D8] dark:border-[#1B4D1C] ${
                compact ? "py-1 sm:py-1" : "py-1.5 sm:py-2"
              } shadow-md text-[#111811] dark:text-[#FAFAF5]`
            : pathname === "/"
            ? "bg-[#0D230E]/60 backdrop-blur-md py-1.5 sm:py-2 border-b border-white/10 text-white"
            : "bg-[#F6F8EE]/90 dark:bg-[#0D230E]/85 backdrop-blur-md py-2 sm:py-2.5 border-b border-[#EAF5D8]/80 dark:border-[#1B4D1C]/80 text-[#111811] dark:text-[#FAFAF5]"
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-14">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${sizeEase} ${
              compact
                ? "min-h-[46px] sm:min-h-[48px] lg:min-h-[52px] xl:min-h-[54px] gap-2.5 lg:gap-5"
                : "min-h-[54px] sm:min-h-[58px] lg:min-h-[64px] xl:min-h-[66px] gap-3 lg:gap-6"
            }`}
          >
            {/* Brand Logo */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="JAS Agro Home">
              <img
                src="/media/jas-agro-logo-light.png"
                alt="JAS Agro"
                className={`${
                  pathname === "/" && !scrolled ? "hidden" : "dark:hidden"
                } ${
                  compact
                    ? "h-[32px] sm:h-[36px] lg:h-[40px] xl:h-[42px]"
                    : "h-[36px] sm:h-[42px] lg:h-[46px] xl:h-[50px]"
                } w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[175px] xl:max-w-[195px] object-contain select-none transition-[height,transform] duration-300 ${sizeEase} group-hover:scale-105`}
              />
              <img
                src="/media/jas-agro-logo-dark.png"
                alt="JAS Agro"
                className={`${
                  pathname === "/" && !scrolled ? "block" : "hidden dark:block"
                } ${
                  compact
                    ? "h-[32px] sm:h-[36px] lg:h-[40px] xl:h-[42px]"
                    : "h-[36px] sm:h-[42px] lg:h-[46px] xl:h-[50px]"
                } w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[175px] xl:max-w-[195px] object-contain select-none transition-[height,transform] duration-300 ${sizeEase} group-hover:scale-105`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className={`hidden lg:flex items-center ${
                compact ? "gap-1 xl:gap-1.5 2xl:gap-2 py-1" : "gap-1.5 xl:gap-2 2xl:gap-2.5 py-1.5"
              } ${
                pathname === "/" && !scrolled
                  ? "bg-[#0D230E]/85 border-white/15 text-white"
                  : "bg-white dark:bg-[#123B13]/90 border-[#EAF5D8] dark:border-[#1B4D1C]"
              } border rounded-full px-3.5 xl:px-4.5 backdrop-blur-xl shadow-sm transition-all duration-300 ${sizeEase}`}
            >
              {/* Home */}
              <Link
                href="/"
                className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                  isLinkActive("/")
                    ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                    : pathname === "/" && !scrolled
                    ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                    : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                }`}
              >
                {t("navHome")}
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                  isLinkActive("/about")
                    ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                    : pathname === "/" && !scrolled
                    ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                    : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                }`}
              >
                {t("navAbout")}
              </Link>

              {/* SOLUTIONS 2-LEVEL DROPDOWN (Left = Categories, Right = Sub-pages) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterSolutions}
                onMouseLeave={handleMouseLeaveSolutions}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setSolutionsDropdownOpen(false);
                }}
              >
                <Link
                  href="/solutions"
                  onClick={() => setSolutionsDropdownOpen(false)}
                  className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isSolutionsActive || solutionsDropdownOpen
                      ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                      : pathname === "/" && !scrolled
                      ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                      : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                  }`}
                >
                  <span>{t("navSolutions")}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* 2-Level Dropdown Panel Overlay */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 transition-all duration-200 ease-out origin-top ${
                    solutionsDropdownOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                  onMouseEnter={() => {
                    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeaveSolutions}
                >
                  <div className="bg-white dark:bg-[#0D230E] border border-[#EAF5D8] dark:border-[#1B4D1C] rounded-2xl shadow-2xl overflow-hidden max-w-[94vw] text-[#111811] dark:text-[#FAFAF5] flex items-start transition-all duration-200">
                    {/* Left Category Column */}
                    <div className="w-[230px] xl:w-[245px] p-2 bg-[#FBFDF8] dark:bg-[#0A1A0B] flex flex-col space-y-1 shrink-0">
                      {SOLUTIONS_NAV_DATA.map((cat, idx) => {
                        const isSelected = activeCategoryIndex === idx;
                        const CategoryIcon = cat.icon;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onMouseEnter={() => setActiveCategoryIndex(idx)}
                            onFocus={() => setActiveCategoryIndex(idx)}
                            onClick={() => setActiveCategoryIndex(idx)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer select-none ${
                              isSelected
                                ? "bg-[#EAF5D8] dark:bg-[#163824] text-[#2F7D16] dark:text-[#B8F21B] font-bold shadow-xs"
                                : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F1F6EA] dark:hover:bg-[#123B13]/60 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <CategoryIcon
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isSelected
                                    ? "text-[#2F7D16] dark:text-[#B8F21B]"
                                    : "text-[#5A6E59] dark:text-[#A3C2A1]"
                                }`}
                              />
                              <span className="text-[13.5px] xl:text-[14px]">
                                {cat.title[langKey]}
                              </span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 transition-transform ${
                                isSelected
                                  ? "text-[#2F7D16] dark:text-[#B8F21B] translate-x-0.5"
                                  : "text-[#5A6E59]/50 dark:text-[#A3C2A1]/50"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Sub-Pages Column — Content-driven natural sizing without fixed height or excess width */}
                    {activeCategoryIndex !== null && (
                      <div className="min-w-[200px] max-w-[260px] p-2 bg-white dark:bg-[#0D230E] border-l border-[#EAF5D8] dark:border-[#1B4D1C] flex flex-col space-y-1 animate-in fade-in duration-150 shrink-0">
                        {SOLUTIONS_NAV_DATA[activeCategoryIndex]?.items.map((subItem, sIdx) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              onClick={() => {
                                setSolutionsDropdownOpen(false);
                                setActiveCategoryIndex(null);
                              }}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-150 whitespace-nowrap group/link ${
                                isSubActive
                                  ? "bg-[#EAF5D8] dark:bg-[#163824] text-[#2F7D16] dark:text-[#B8F21B] font-bold"
                                  : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F6F8EE] dark:hover:bg-[#163824]/60 hover:text-[#2F7D16] dark:hover:text-[#B8F21B]"
                              }`}
                            >
                              <SubIcon
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isSubActive
                                    ? "text-[#2F7D16] dark:text-[#B8F21B]"
                                    : "text-[#5A6E59] dark:text-[#A3C2A1] group-hover/link:text-[#2F7D16] dark:group-hover/link:text-[#B8F21B]"
                                }`}
                              />
                              <span className="text-[13.5px] xl:text-[14px] font-semibold">
                                {subItem.name[langKey]}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* PRODUCTS 2-LEVEL DROPDOWN (Left = Products, Right = Related Links) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterProducts}
                onMouseLeave={handleMouseLeaveProducts}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setProductsDropdownOpen(false);
                }}
              >
                <Link
                  href="/products"
                  onClick={() => setProductsDropdownOpen(false)}
                  className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isProductsActive || productsDropdownOpen
                      ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                      : pathname === "/" && !scrolled
                      ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                      : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                  }`}
                >
                  <span>{t("navProducts")}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* 2-Level Dropdown Panel Overlay */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 transition-all duration-200 ease-out origin-top ${
                    productsDropdownOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                  onMouseEnter={() => {
                    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeaveProducts}
                >
                  <div className="bg-white dark:bg-[#0D230E] border border-[#EAF5D8] dark:border-[#1B4D1C] rounded-2xl shadow-2xl overflow-hidden max-w-[94vw] text-[#111811] dark:text-[#FAFAF5] flex transition-all duration-200">
                    {/* Left Product Column */}
                    <div className="w-[260px] xl:w-[280px] p-2 bg-[#FBFDF8] dark:bg-[#0A1A0B] flex flex-col justify-center space-y-1">
                      {PRODUCTS_NAV_DATA.map((prod, idx) => {
                        const isSelected = activeProductIndex === idx;
                        const ProductIcon = prod.icon;
                        return (
                          <button
                            key={prod.id}
                            type="button"
                            onMouseEnter={() => setActiveProductIndex(idx)}
                            onFocus={() => setActiveProductIndex(idx)}
                            onClick={() => setActiveProductIndex(idx)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer select-none ${
                              isSelected
                                ? "bg-[#EAF5D8] dark:bg-[#163824] text-[#2F7D16] dark:text-[#B8F21B] font-bold shadow-xs"
                                : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F1F6EA] dark:hover:bg-[#123B13]/60 font-medium"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <ProductIcon
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isSelected
                                    ? "text-[#2F7D16] dark:text-[#B8F21B]"
                                    : "text-[#5A6E59] dark:text-[#A3C2A1]"
                                }`}
                              />
                              <div className="flex flex-col min-w-0">
                                <span className="text-[13px] xl:text-[13.5px] font-semibold truncate leading-snug">
                                  {prod.title[langKey]}
                                </span>
                                <span className="text-[10.5px] xl:text-[11px] font-normal text-[#5A6E59] dark:text-[#A3C2A1]/80 truncate leading-none mt-0.5">
                                  {prod.shortLabel[langKey]}
                                </span>
                              </div>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 transition-transform ${
                                isSelected
                                  ? "text-[#2F7D16] dark:text-[#B8F21B] translate-x-0.5"
                                  : "text-[#5A6E59]/50 dark:text-[#A3C2A1]/50"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* Right Sub-Pages Column — Rendered ONLY when a product is hovered/focused */}
                    {activeProductIndex !== null && (
                      <div className="w-[280px] xl:w-[310px] p-3 xl:p-3.5 bg-white dark:bg-[#0D230E] border-l border-[#EAF5D8] dark:border-[#1B4D1C] flex flex-col justify-center space-y-1 min-h-[220px] animate-in fade-in duration-150">
                        {PRODUCTS_NAV_DATA[activeProductIndex]?.items.map((subItem, sIdx) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              onClick={() => {
                                setProductsDropdownOpen(false);
                                setActiveProductIndex(null);
                              }}
                              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all duration-150 group/link ${
                                isSubActive
                                  ? "bg-[#EAF5D8] dark:bg-[#163824] text-[#2F7D16] dark:text-[#B8F21B] font-bold"
                                  : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F6F8EE] dark:hover:bg-[#163824]/60 hover:text-[#2F7D16] dark:hover:text-[#B8F21B]"
                              }`}
                            >
                              <SubIcon
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isSubActive
                                    ? "text-[#2F7D16] dark:text-[#B8F21B]"
                                    : "text-[#5A6E59] dark:text-[#A3C2A1] group-hover/link:text-[#2F7D16] dark:group-hover/link:text-[#B8F21B]"
                                }`}
                              />
                              <span className="text-[13.5px] xl:text-[14px] font-semibold">
                                {subItem.name[langKey]}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technology */}
              <Link
                href="/technology"
                className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                  isLinkActive("/technology")
                    ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                    : pathname === "/" && !scrolled
                    ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                    : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                }`}
              >
                {t("navTechnology")}
              </Link>

              {/* MORE ▾ Dropdown */}
              <div
                className="relative group"
                onMouseEnter={handleMouseEnterMore}
                onMouseLeave={handleMouseLeaveMore}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setMoreDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => setMoreDropdownOpen((prev) => !prev)}
                  aria-expanded={moreDropdownOpen}
                  aria-haspopup="menu"
                  className={`px-3.5 xl:px-4 ${compact ? "py-1" : "py-1.5"} text-xs xl:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isMoreActive || moreDropdownOpen
                      ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                      : pathname === "/" && !scrolled
                      ? "text-white/80 hover:text-[#B8F21B] hover:bg-white/10"
                      : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                  }`}
                >
                  <span>{t("navMore")}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      moreDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Popup */}
                <div
                  className={`absolute top-full right-0 pt-2.5 z-50 min-w-[200px] transition-all duration-200 ${
                    moreDropdownOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-white dark:bg-[#123B13] border border-[#EAF5D8] dark:border-[#1B4D1C] rounded-2xl shadow-xl py-1.5 overflow-hidden backdrop-blur-xl">
                    {moreNavLinks.map((subLink) => {
                      const isSubActive = isLinkActive(subLink.href);
                      return (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => setMoreDropdownOpen(false)}
                          className={`flex items-center justify-between px-4 py-2.5 text-xs xl:text-sm font-bold tracking-wide transition-colors ${
                            isSubActive
                              ? "bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] border-l-2 border-[#2F7D16]"
                              : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F4F8EC] dark:hover:bg-[#1B4D1C]/80 hover:text-[#2F7D16] dark:hover:text-[#B8F21B]"
                          }`}
                        >
                          <span>{subLink.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Action CTAs & Controls */}
            <div
              className={`flex items-center shrink-0 transition-all duration-300 ${sizeEase} ${
                compact ? "gap-1 sm:gap-2.5 xl:gap-3" : "gap-1.5 sm:gap-3 xl:gap-3.5"
              }`}
            >
              {/* Language Switcher Explicit Dual Button (Visible on sm+ screens; inside drawer on mobile) */}
              <div
                className={`hidden sm:flex items-center rounded-full ${
                  pathname === "/" && !scrolled
                    ? "bg-[#0D230E]/85 border-white/15 text-white"
                    : "bg-white dark:bg-[#123B13] border-[#EAF5D8] dark:border-[#1B4D1C]"
                } border p-0.5 shadow-sm text-xs font-bold shrink-0`}
              >
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 sm:px-2.5 xl:px-3 py-1 sm:py-1.5 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
                    language === "en"
                      ? "bg-[#2F7D16] text-white shadow-sm font-extrabold"
                      : pathname === "/" && !scrolled
                      ? "text-white/70 hover:text-white"
                      : "text-[#5A6E59] dark:text-[#A3C2A1] hover:text-[#111811] dark:hover:text-white"
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-2 sm:px-2.5 xl:px-3 py-1 sm:py-1.5 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
                    language === "hi"
                      ? "bg-[#2F7D16] text-white shadow-sm font-extrabold"
                      : pathname === "/" && !scrolled
                      ? "text-white/70 hover:text-white"
                      : "text-[#5A6E59] dark:text-[#A3C2A1] hover:text-[#111811] dark:hover:text-white"
                  }`}
                  title="हिंदी में बदलें"
                >
                  हिंदी
                </button>
              </div>

              {/* 1-Click Dark/Light Mode Switcher */}
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 sm:p-2 xl:p-2.5 rounded-full ${
                  pathname === "/" && !scrolled
                    ? "bg-[#0D230E]/85 border-white/15 text-[#B8F21B] hover:bg-white/10"
                    : "bg-white dark:bg-[#123B13] border-[#EAF5D8] dark:border-[#1B4D1C] text-[#2F7D16] dark:text-[#B8F21B] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
                } border transition-colors shadow-sm cursor-pointer shrink-0`}
                title={isDark ? t("lightMode") : t("darkMode")}
                aria-label="Toggle Theme Mode"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#B8F21B]" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#123B13]" />
                )}
              </button>

              {/* Shop Link */}
              <Link
                href="/shop"
                className={`hidden xl:inline-flex items-center relative overflow-hidden ${
                  compact ? "h-[36px] xl:h-[38px]" : "h-[38px] sm:h-[40px] xl:h-[42px]"
                } min-w-[136px] sm:min-w-[146px] pr-3.5 sm:pr-4 rounded-full ${
                  pathname === "/" && !scrolled
                    ? "bg-[#142417]/90 border-[#1f3d23]"
                    : "bg-[#142417] dark:bg-[#142417] border-[#1f3d23] text-white"
                } border text-xs xl:text-sm font-bold shadow-sm group transition-all duration-300 hover:border-[#72d919] hover:shadow-[0_0_20px_rgba(114,217,25,0.35)] outline-none select-none`}
              >
                <span className="absolute top-[3px] left-[3px] bottom-[3px] w-[32px] sm:w-[34px] xl:w-[36px] bg-gradient-to-br from-[#8bf520] to-[#72d919] rounded-full z-10 flex items-center justify-center overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-[calc(100%-6px)] pointer-events-none">
                  <span className="group-hover:opacity-0 transition-opacity duration-200 flex items-center justify-center">
                    <svg width="13" height="15" viewBox="0 0 15 18" fill="none" className="shrink-0">
                      <circle cx="3" cy="2.5" r="2.2" fill="#142417" />
                      <circle cx="7.5" cy="5.8" r="2.2" fill="#142417" />
                      <circle cx="12" cy="9" r="2.2" fill="#142417" />
                      <circle cx="7.5" cy="12.2" r="2.2" fill="#142417" />
                      <circle cx="3" cy="15.5" r="2.2" fill="#142417" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-around px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250 delay-150 pointer-events-none overflow-hidden">
                    <span className="flex items-center gap-4 animate-chevron-loop shrink-0">
                      {[...Array(8)].map((_, i) => (
                        <svg key={i} width="13" height="15" viewBox="0 0 15 18" fill="none" className="shrink-0">
                          <circle cx="3" cy="2.5" r="2.2" fill="#142417" />
                          <circle cx="7.5" cy="5.8" r="2.2" fill="#142417" />
                          <circle cx="12" cy="9" r="2.2" fill="#142417" />
                          <circle cx="7.5" cy="12.2" r="2.2" fill="#142417" />
                          <circle cx="3" cy="15.5" r="2.2" fill="#142417" />
                        </svg>
                      ))}
                    </span>
                  </span>
                </span>

                <span className="relative z-20 flex items-center gap-2 ml-[36px] sm:ml-[38px] xl:ml-[40px] transition-all duration-350 ease-out group-hover:opacity-0 group-hover:translate-x-3 pointer-events-none text-white whitespace-nowrap">
                  <ShoppingBag className="w-4 h-4 text-[#8bf520]" />
                  <span>{t("navShop")}</span>
                  {totalCartCount > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#8bf520] text-[#142417] text-[10px] font-extrabold font-mono leading-none">
                      {totalCartCount}
                    </span>
                  )}
                </span>
              </Link>

              {/* Get a Quote CTA (Signature JAS Agro Dark Sweep & Morphing Circle Hover Interaction) */}
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className={`group relative hidden md:inline-flex items-center justify-between min-w-[136px] sm:min-w-[148px] xl:min-w-[154px] ${
                  compact ? "h-[36px] xl:h-[38px]" : "h-[38px] sm:h-[40px] xl:h-[42px]"
                } px-3.5 sm:px-4 rounded-full bg-[#B8F21B] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95 shrink-0`}
              >
                {/* 1. Dark Sweep Layer from Right */}
                <span
                  className="absolute inset-0 bg-[#123B13] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
                />

                {/* 2. Text Content (Default Dark vs Hover Bright Lime) */}
                <span className="relative z-10 block pr-2 text-left">
                  <span className="block font-extrabold text-xs xl:text-sm text-[#123B13] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                    {t("getQuote")}
                  </span>
                  <span className="absolute inset-0 block font-extrabold text-xs xl:text-sm text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                    {t("getQuote")}
                  </span>
                </span>

                {/* 3. Right Element: Resting Dark Circle Arrow vs Hover Lime Circle Arrow */}
                <span className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 shrink-0 pointer-events-none">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#123B13] text-[#B8F21B] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8F21B]" strokeWidth={2.5} />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-[#B8F21B] text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-[#123B13]" strokeWidth={2.5} />
                  </span>
                </span>
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                className={`lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] sm:min-w-[40px] rounded-xl cursor-pointer select-none transition-all duration-300 shrink-0 ${
                  pathname === "/" && !scrolled
                    ? "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                    : "bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#123B13] dark:text-[#FAFAF5] hover:bg-[#DDF0C5] dark:hover:bg-[#1B4D1C]"
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-current" /> : <Menu className="w-5 h-5 text-current" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0D230E]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto text-white">
          <div className="flex items-center justify-between border-b border-[#1B4D1C] pb-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center shrink-0 group"
              aria-label="JAS Agro Home"
            >
              <img
                src="/media/jas-agro-logo-dark.png"
                alt="JAS Agro"
                className="h-[40px] sm:h-[46px] w-auto max-w-[135px] object-contain select-none transition-transform group-hover:scale-105"
              />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-[#123B13] border border-[#1B4D1C] text-[#B8F21B]"
              >
                {isDark ? <Sun className="w-5 h-5 text-[#B8F21B]" /> : <Moon className="w-5 h-5 text-slate-300" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-[#123B13]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="py-6 flex flex-col gap-2">
            {/* Language Switcher */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#123B13] border border-[#1B4D1C] mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Languages className="w-4 h-4 text-[#B8F21B]" /> Select Language / भाषा
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "en" ? "bg-[#2F7D16] text-white" : "bg-[#0D230E] text-slate-300"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "hi" ? "bg-[#2F7D16] text-white" : "bg-[#0D230E] text-slate-300"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-lg font-heading rounded-xl transition-all flex items-center justify-between ${
                isLinkActive("/")
                  ? "bg-[#B8F21B] text-[#123B13] font-bold"
                  : "text-[#FAFAF5] hover:bg-[#123B13] hover:text-[#B8F21B]"
              }`}
            >
              <span>{t("navHome")}</span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-lg font-heading rounded-xl transition-all flex items-center justify-between ${
                isLinkActive("/about")
                  ? "bg-[#B8F21B] text-[#123B13] font-bold"
                  : "text-[#FAFAF5] hover:bg-[#123B13] hover:text-[#B8F21B]"
              }`}
            >
              <span>{t("navAbout")}</span>
            </Link>

            {/* SOLUTIONS MOBILE ACCORDION (Vertical 2-Level) */}
            <div className="rounded-xl overflow-hidden bg-[#123B13]/60 border border-[#1B4D1C]/60">
              <div className="flex items-center justify-between px-4 py-3">
                <Link
                  href="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-heading font-bold ${
                    isSolutionsActive ? "text-[#B8F21B]" : "text-[#FAFAF5]"
                  }`}
                >
                  {t("navSolutions")}
                </Link>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="p-1 rounded-lg hover:bg-[#1B4D1C] text-slate-300 cursor-pointer"
                  aria-label="Toggle Solutions Menu"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileSolutionsOpen ? "rotate-180 text-[#B8F21B]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileSolutionsOpen && (
                <div className="px-3 pb-3 pt-1 space-y-2 border-t border-[#1B4D1C]">
                  {SOLUTIONS_NAV_DATA.map((cat, idx) => {
                    const CategoryIcon = cat.icon;
                    const isCatOpen = mobileCategoryOpen === idx;
                    return (
                      <div key={cat.id} className="rounded-lg overflow-hidden bg-[#0A1A0B] border border-[#1B4D1C]/50">
                        <button
                          type="button"
                          onClick={() => setMobileCategoryOpen(isCatOpen ? null : idx)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-bold uppercase tracking-wider transition-colors ${
                            isCatOpen ? "text-[#B8F21B] bg-[#163824]/60" : "text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CategoryIcon className="w-3.5 h-3.5 text-[#B8F21B]" />
                            <span>{cat.title[langKey]}</span>
                          </div>
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isCatOpen ? "rotate-90 text-[#B8F21B]" : "text-slate-400"
                            }`}
                          />
                        </button>

                        {isCatOpen && (
                          <div className="px-3 py-1.5 space-y-1 bg-[#123B13]/40 border-t border-[#1B4D1C]/40">
                            {cat.items.map((item, itemIdx) => {
                              const SubIcon = item.icon;
                              return (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-2 py-1.5 px-2 text-sm rounded-lg text-slate-200 hover:text-[#B8F21B] hover:bg-[#163824] transition-colors"
                                >
                                  <SubIcon className="w-3.5 h-3.5 text-[#B8F21B]" />
                                  <span>{item.name[langKey]}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="pt-1">
                    <Link
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-center py-2 rounded-xl bg-[#B8F21B] text-[#123B13] font-extrabold text-xs uppercase tracking-wider"
                    >
                      {isHindi ? "सभी समाधान देखें →" : "View All Solutions →"}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS MOBILE ACCORDION (Vertical 2-Level) */}
            <div className="rounded-xl overflow-hidden bg-[#123B13]/60 border border-[#1B4D1C]/60">
              <div className="flex items-center justify-between px-4 py-3">
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-heading font-bold ${
                    isProductsActive ? "text-[#B8F21B]" : "text-[#FAFAF5]"
                  }`}
                >
                  {t("navProducts")}
                </Link>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="p-1 rounded-lg hover:bg-[#1B4D1C] text-slate-300 cursor-pointer"
                  aria-label="Toggle Products Menu"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180 text-[#B8F21B]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileProductsOpen && (
                <div className="px-3 pb-3 pt-1 space-y-2 border-t border-[#1B4D1C]">
                  {PRODUCTS_NAV_DATA.map((prod, idx) => {
                    const ProductIcon = prod.icon;
                    const isItemOpen = mobileProductItemOpen === idx;
                    return (
                      <div key={prod.id} className="rounded-lg overflow-hidden bg-[#0A1A0B] border border-[#1B4D1C]/50">
                        <button
                          type="button"
                          onClick={() => setMobileProductItemOpen(isItemOpen ? null : idx)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-bold uppercase tracking-wider transition-colors ${
                            isItemOpen ? "text-[#B8F21B] bg-[#163824]/60" : "text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ProductIcon className="w-3.5 h-3.5 text-[#B8F21B]" />
                            <div className="flex flex-col">
                              <span>{prod.title[langKey]}</span>
                              <span className="text-[10px] normal-case text-slate-400 font-normal">
                                {prod.shortLabel[langKey]}
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isItemOpen ? "rotate-90 text-[#B8F21B]" : "text-slate-400"
                            }`}
                          />
                        </button>

                        {isItemOpen && (
                          <div className="px-3 py-1.5 space-y-1 bg-[#123B13]/40 border-t border-[#1B4D1C]/40">
                            {prod.items.map((item, itemIdx) => {
                              const SubIcon = item.icon;
                              return (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-2 py-1.5 px-2 text-sm rounded-lg text-slate-200 hover:text-[#B8F21B] hover:bg-[#163824] transition-colors"
                                >
                                  <SubIcon className="w-3.5 h-3.5 text-[#B8F21B]" />
                                  <span>{item.name[langKey]}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="pt-1">
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-center py-2 rounded-xl bg-[#B8F21B] text-[#123B13] font-extrabold text-xs uppercase tracking-wider"
                    >
                      {isHindi ? "सभी उत्पाद देखें →" : "View All Products →"}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Technology */}
            <Link
              href="/technology"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-lg font-heading rounded-xl transition-all flex items-center justify-between ${
                isLinkActive("/technology")
                  ? "bg-[#B8F21B] text-[#123B13] font-bold"
                  : "text-[#FAFAF5] hover:bg-[#123B13] hover:text-[#B8F21B]"
              }`}
            >
              <span>{t("navTechnology")}</span>
            </Link>

            {/* Mobile MORE Accordion */}
            <div className="pt-1">
              <button
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                className={`w-full px-4 py-3 text-lg font-heading rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  isMoreActive
                    ? "bg-[#B8F21B] text-[#123B13] font-bold"
                    : "text-[#FAFAF5] hover:bg-[#123B13] hover:text-[#B8F21B]"
                }`}
              >
                <span>{t("navMore")}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    mobileMoreOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {mobileMoreOpen && (
                <div className="pl-4 pt-1 space-y-1">
                  {moreNavLinks.map((subLink) => {
                    const isSubActive = isLinkActive(subLink.href);
                    return (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-2.5 text-base font-heading rounded-xl transition-all ${
                          isSubActive
                            ? "bg-[#1B4D1C] text-[#B8F21B] font-bold border-l-2 border-[#B8F21B]"
                            : "text-[#A3C2A1] hover:bg-[#123B13] hover:text-white"
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-[#1B4D1C] pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="group relative w-full h-[44px] px-5 rounded-full bg-[#B8F21B] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95 flex items-center justify-between"
            >
              <span className="absolute inset-0 bg-[#123B13] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none" />
              <span className="relative z-10 block">
                <span className="block font-extrabold text-sm sm:text-base text-[#123B13] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                  {t("getQuote")}
                </span>
                <span className="absolute inset-0 block font-extrabold text-sm sm:text-base text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                  {t("getQuote")}
                </span>
              </span>
              <span className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-[#123B13] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0" />
                <span className="absolute inset-0 rounded-full bg-[#B8F21B] text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-[#123B13]" strokeWidth={2.5} />
                </span>
              </span>
            </button>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-[#123B13] text-center text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 border border-[#1B4D1C]"
            >
              <ShoppingBag className="w-4 h-4 text-[#B8F21B]" />
              <span>{t("navShop")}</span>
              {totalCartCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#2F7D16] text-white text-xs font-bold font-mono">
                  {totalCartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}

      {/* Global Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
