"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShoppingBag, Sun, Moon, Languages, ChevronDown } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleDarkMode } = useTheme();
  const { totalCartCount } = useCart();

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
    return pathname === href || pathname.startsWith(href + "/");
  };

  const mainNavLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navSolutions"), href: "/solutions" },
    { name: t("navProducts"), href: "/products" },
    { name: t("navTechnology"), href: "/technology" },
  ];

  const moreNavLinks = [
    { name: t("navSustainability"), href: "/sustainability" },
    { name: t("navInsights"), href: "/insights" },
    { name: t("navContact"), href: "/contact" },
  ];

  const isMoreActive = moreNavLinks.some((link) => isLinkActive(link.href));

  // Desktop More dropdown hover & transition state
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(isMoreActive);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterMore = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreDropdownOpen(true);
  };

  const handleMouseLeaveMore = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF5]/95 dark:bg-[#0D230E]/95 backdrop-blur-xl border-b border-[#EAF5D8] dark:border-[#1B4D1C] py-2 shadow-md text-[#111811] dark:text-[#FAFAF5]"
            : "bg-[#FAFAF5]/90 dark:bg-[#0D230E]/85 backdrop-blur-md py-2.5 border-b border-[#EAF5D8]/80 dark:border-[#1B4D1C]/80 text-[#111811] dark:text-[#FAFAF5]"
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between min-h-[60px] sm:min-h-[68px] lg:min-h-[78px] xl:min-h-[82px] gap-3 lg:gap-6">
            {/* Brand Logo with Official JAS Agro Logo Image */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="JAS Agro Home">
              {/* Light Mode Logo */}
              <img
                src="/jas-agro-logo-for-white-background.png"
                alt="JAS Agro"
                className="dark:hidden h-[42px] sm:h-[48px] lg:h-[56px] xl:h-[62px] w-auto max-w-[110px] sm:max-w-[145px] lg:max-w-[190px] xl:max-w-[215px] object-contain select-none transition-transform group-hover:scale-105"
              />
              {/* Dark Mode Logo */}
              <img
                src="/jas-agro-logo.png"
                alt="JAS Agro"
                className="hidden dark:block h-[42px] sm:h-[48px] lg:h-[56px] xl:h-[62px] w-auto max-w-[110px] sm:max-w-[145px] lg:max-w-[190px] xl:max-w-[215px] object-contain select-none transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation (HOME ABOUT SOLUTIONS PRODUCTS TECHNOLOGY MORE ▾) */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 bg-white dark:bg-[#123B13]/90 border border-[#EAF5D8] dark:border-[#1B4D1C] rounded-full px-3.5 xl:px-5 py-1.5 backdrop-blur-xl shadow-sm">
              {mainNavLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 xl:px-4 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
                        : "text-[#111811] dark:text-[#EAF5D8] hover:text-[#2F7D16] dark:hover:text-[#B8F21B] hover:bg-[#EAF5D8]/70 dark:hover:bg-[#1B4D1C]/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

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
                  className={`px-3.5 xl:px-4 py-1.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isMoreActive || moreDropdownOpen
                      ? "bg-[#123B13] dark:bg-[#B8F21B] text-[#B8F21B] dark:text-[#123B13] shadow-md font-extrabold"
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
                  className={`absolute top-full right-0 pt-2 z-50 min-w-[200px] transition-all duration-200 ${
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
            <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 shrink-0">
              {/* Language Switcher Explicit Dual Button */}
              <div className="flex items-center rounded-full bg-white dark:bg-[#123B13] border border-[#EAF5D8] dark:border-[#1B4D1C] p-0.5 shadow-sm text-xs font-bold">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    language === "en"
                      ? "bg-[#2F7D16] text-white shadow-sm font-extrabold"
                      : "text-[#5A6E59] dark:text-[#A3C2A1] hover:text-[#111811] dark:hover:text-white"
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    language === "hi"
                      ? "bg-[#2F7D16] text-white shadow-sm font-extrabold"
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
                className="p-2 xl:p-2.5 rounded-full bg-white dark:bg-[#123B13] border border-[#EAF5D8] dark:border-[#1B4D1C] text-[#2F7D16] dark:text-[#B8F21B] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C] transition-colors shadow-sm cursor-pointer"
                title={isDark ? t("lightMode") : t("darkMode")}
                aria-label="Toggle Theme Mode"
              >
                {isDark ? <Sun className="w-4.5 h-4.5 text-[#B8F21B]" /> : <Moon className="w-4.5 h-4.5 text-[#123B13]" />}
              </button>

              {/* Shop Link */}
              <Link
                href="/shop"
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/20 dark:border-[#B8F21B]/30 text-xs xl:text-sm font-bold text-[#123B13] dark:text-[#B8F21B] hover:bg-[#DDF0C5] dark:hover:bg-[#1B4D1C] transition-colors shadow-sm relative"
              >
                <ShoppingBag className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B]" />
                <span>{t("navShop")}</span>
                {totalCartCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-[#2F7D16] text-white text-[10px] font-extrabold font-mono leading-none">
                    {totalCartCount}
                  </span>
                )}
              </Link>

              {/* Get Quote CTA (Lime Button as in Reference) */}
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="btn-reveal-lime hidden md:inline-flex items-center gap-2 px-5 sm:px-6 xl:px-7 py-2.5 xl:py-3 rounded-full bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-extrabold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-[#A6E015]"
              >
                <span>{t("getQuote")}</span> <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#123B13] dark:text-[#FAFAF5] hover:bg-[#DDF0C5] dark:hover:bg-[#1B4D1C] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                src="/jas-agro-logo.png"
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
            {/* Language switch inside mobile menu */}
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

            {mainNavLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-heading rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#B8F21B] text-[#123B13] font-bold"
                      : "text-[#FAFAF5] hover:bg-[#123B13] hover:text-[#B8F21B]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

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
              className="w-full py-3.5 rounded-xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-extrabold text-center shadow-md border border-[#A6E015]"
            >
              {t("getQuote")}
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
