"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShoppingBag, Sun, Moon, Languages } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleDarkMode } = useTheme();

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

  const navLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("navAbout"), href: "/about" },
    { name: t("navSolutions"), href: "/solutions" },
    { name: t("navProducts"), href: "/products" },
    { name: t("navTechnology"), href: "/technology" },
    { name: t("navSustainability"), href: "/sustainability" },
    { name: t("navInsights"), href: "/insights" },
    { name: t("navContact"), href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-emerald-500/30 py-3 shadow-md dark:shadow-glow text-slate-900 dark:text-white"
            : "bg-white/90 dark:bg-slate-950/85 backdrop-blur-md py-4 border-b border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white"
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Official JAS Agro Logo Image */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-emerald-500/40 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <img
                  src="https://www.jasagro.com/assets/img/JAS-Agro-Logo.png"
                  alt="JAS Agro Logo"
                  className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm brightness-100 dark:brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
                  JAS <span className="text-emerald-600 dark:text-emerald-400">Agro</span>
                </span>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-widest -mt-1 font-bold">
                  {t("brandTagline")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-full px-3.5 py-1.5 backdrop-blur-xl shadow-sm dark:shadow-glass">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-600 text-white shadow-md shadow-emerald-600/20"
                        : "text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/80 dark:hover:bg-slate-800/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs & Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher Explicit Dual Button */}
              <div className="flex items-center rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-0.5 shadow-sm text-xs font-bold">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "en"
                      ? "bg-emerald-600 text-white shadow-sm font-extrabold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-2.5 py-1 rounded-full transition-all ${
                    language === "hi"
                      ? "bg-emerald-600 text-white shadow-sm font-extrabold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  title="हिंदी में बदलें"
                >
                  हिंदी
                </button>
              </div>

              {/* 1-Click Dark/Light Mode Switcher */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-amber-500 dark:text-amber-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                title={isDark ? t("lightMode") : t("darkMode")}
                aria-label="Toggle Theme Mode"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Shop Link */}
              <Link
                href="/shop"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                {t("navShop")}
              </Link>

              {/* Get Quote CTA */}
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 text-white font-extrabold text-xs sm:text-sm shadow-glow hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-emerald-300/30"
              >
                {t("getQuote")} <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
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
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto text-white">
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <img
                src="https://www.jasagro.com/assets/img/JAS-Agro-Logo.png"
                alt="JAS Agro Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading font-bold text-xl text-white">JAS Agro</span>
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-300" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="py-6 flex flex-col gap-2">
            {/* Language switch inside mobile menu */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 mb-2">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <Languages className="w-4 h-4 text-emerald-400" /> Select Language / भाषा
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "en" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "hi" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-heading rounded-xl transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white font-bold"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-center shadow-glow"
            >
              {t("getQuote")}
            </button>

            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-900 text-center text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 border border-slate-800"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" /> {t("navShop")}
            </Link>
          </div>
        </div>
      )}

      {/* Global Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};
