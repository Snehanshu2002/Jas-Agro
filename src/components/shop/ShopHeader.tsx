"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingCart,
  UserCheck,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ShopSearchAutocomplete } from "@/components/shop/ShopSearchAutocomplete";
import { searchProducts, saveRecentSearch } from "@/lib/searchUtils";

interface ShopHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart: () => void;
}

const SEARCH_PHRASES_EN = [
  "Search for products...",
  "Search for mushroom...",
  "Search for biscuits...",
  "Search for khakra...",
  "Search for chakri...",
];

const SEARCH_PHRASES_HI = [
  "उत्पाद खोजें...",
  "मशरूम खोजें...",
  "बिस्कुट खोजें...",
  "खाखरा खोजें...",
  "चकली खोजें...",
];


export const ShopHeader: React.FC<ShopHeaderProps> = ({
  searchQuery,
  onSearchChange,
  cartCount: propCartCount,
  wishlistCount: propWishlistCount,
  onOpenCart,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleDarkMode } = useTheme();
  const { wishlistCount: contextWishlistCount } = useWishlist();
  const { totalCartCount: contextCartCount } = useCart();
  const wishlistCount = propWishlistCount !== undefined ? propWishlistCount : contextWishlistCount;
  const cartCount = propCartCount !== undefined ? propCartCount : contextCartCount;
  const router = useRouter();
  const pathname = usePathname();
  const isHindi = language === "hi";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isDesktopSearchFocused, setIsDesktopSearchFocused] = useState(false);
  const [isMobileSearchFocused, setIsMobileSearchFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [scrollY, setScrollY] = useState(0);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Click outside listener for search autocomplete dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target as Node)) {
        setIsDesktopSearchFocused(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target as Node)) {
        setIsMobileSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset selected keyboard index when query changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [searchQuery]);

  // Keyboard navigation handler for search suggestions
  const handleSearchKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    isMobile = false
  ) => {
    const matching = searchQuery.trim() ? searchProducts(searchQuery).slice(0, 6) : [];

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (matching.length > 0) {
        setSelectedIndex((prev) => (prev < matching.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (matching.length > 0) {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : matching.length - 1));
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      if (isMobile) {
        setIsMobileSearchFocused(false);
        setMobileSearchOpen(false);
      } else {
        setIsDesktopSearchFocused(false);
      }
      (e.target as HTMLInputElement).blur();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < matching.length) {
        const selectedProduct = matching[selectedIndex].product;
        saveRecentSearch(selectedProduct.title);
        onSearchChange(selectedProduct.title);
        if (isMobile) {
          setIsMobileSearchFocused(false);
        } else {
          setIsDesktopSearchFocused(false);
        }
        router.push(`/shop/product/${selectedProduct.slug}`);
      } else if (searchQuery.trim()) {
        const term = searchQuery.trim();
        saveRecentSearch(term);
        onSearchChange(term);
        if (isMobile) {
          setIsMobileSearchFocused(false);
        } else {
          setIsDesktopSearchFocused(false);
        }
        router.push(`/shop?search=${encodeURIComponent(term)}`);
      }
    }
  };

  // Scroll tracker & auto-dismiss search suggestion panels on page scroll
  useEffect(() => {
    let ticking = false;
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          // Close suggestion panels when the page is scrolled by user
          if (Math.abs(currentY - lastScrollY) > 5) {
            setIsMobileSearchFocused(false);
            setIsDesktopSearchFocused(false);
            lastScrollY = currentY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute scroll collapse progress for mobile search (0 = fully expanded, 1 = fully collapsed)
  const collapseProgress = Math.min(1, Math.max(0, (scrollY - 20) / 120));

  // Toggle or re-expand mobile search
  const handleToggleMobileSearch = useCallback(() => {
    setMobileSearchOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsMobileSearchFocused(true);
        setTimeout(() => {
          mobileSearchInputRef.current?.focus();
        }, 80);
      } else {
        setIsMobileSearchFocused(false);
      }
      return next;
    });
  }, []);

  // Auto-focus search input when mobileSearchOpen becomes true
  useEffect(() => {
    if (mobileSearchOpen) {
      const timer = setTimeout(() => {
        mobileSearchInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mobileSearchOpen]);

  // Animated Rotating Search Placeholder
  const phrases = isHindi ? SEARCH_PHRASES_HI : SEARCH_PHRASES_EN;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState(phrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(phrases[0].length);

  useEffect(() => {
    // If user has typed, pause the placeholder animation immediately
    if (searchQuery.trim().length > 0) {
      return;
    }

    // Respect user's motion preferences
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setDisplayedPlaceholder(phrases[0]);
        return;
      }
    }

    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedPlaceholder(currentPhrase.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedPlaceholder(currentPhrase.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases, searchQuery]);

  // Check active navigation route dynamically
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

  // Reorganized Main Navigation items (HOME, SHOP directly beside HOME, ABOUT, SOLUTIONS, PRODUCTS, TECHNOLOGY)
  const mainNavLinks = [
    { name: t("navHome"), href: "/" },
    { name: t("shopNavShop"), href: "/shop", isShop: true },
    { name: t("navAbout"), href: "/about" },
    { name: t("navSolutions"), href: "/solutions" },
    { name: t("navProducts"), href: "/products" },
    { name: t("navTechnology"), href: "/technology" },
  ];

  // MORE Dropdown items (SUSTAINABILITY, INSIGHTS, CONTACT)
  const moreNavLinks = [
    { name: t("navSustainability"), href: "/sustainability" },
    { name: t("navInsights"), href: "/insights" },
    { name: t("navContact"), href: "/contact" },
  ];

  const isMoreActive = moreNavLinks.some((link) => isLinkActive(link.href));

  // Desktop More dropdown hover & safe transition state
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
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

  // Mobile More Accordion State
  const [mobileMoreOpen, setMobileMoreOpen] = useState(isMoreActive);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#121212] border-b border-slate-200 dark:border-[#222222] text-slate-900 dark:text-white shadow-xs backdrop-blur-md transition-colors duration-200 select-none">
      {/* Main Container - Spacious Layout (1600px max-width, 40-50px horizontal padding on desktop) */}
      <div className="w-full max-w-[1600px] mx-auto box-border px-3 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ======================================================== */}
        {/* TOP ROW: Visual Order                                   */}
        {/* Mobile:  ☰ → JAS AGRO → 🔍 → ♡ → 👤 → 🛒                 */}
        {/* Desktop: JAS AGRO → [HOME SHOP ABOUT SOLUTIONS PRODUCTS TECHNOLOGY MORE ▾] → [Search] → HI → ☼ → ♡ → 👤 → 🛒 */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[66px] lg:min-h-[78px] xl:min-h-[82px] py-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
          
          {/* ---------------------------------------------------- */}
          {/* LEFT GROUP:                                          */}
          {/* [ ☰ Menu ] [ JAS AGRO Logo ]                        */}
          {/* ---------------------------------------------------- */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-2.5 xl:gap-3.5 shrink-0 min-w-0">
            
            {/* 1. Mobile 3-Bar Menu Toggle (FIRST on the left for mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* 2. Official JAS Agro Logo - Substantially larger on desktop (175-200px width) */}
            <Link href="/" className="flex items-center shrink-0" aria-label="JAS Agro Home">
              {/* Light Mode Logo */}
              <img
                src="/jas-agro-logo-for-white-background.png"
                alt="JAS Agro"
                className="dark:hidden h-[40px] sm:h-[48px] lg:h-[54px] xl:h-[60px] w-auto max-w-[105px] sm:max-w-[135px] lg:max-w-[180px] xl:max-w-[200px] object-contain select-none transition-transform group-hover:scale-105"
              />
              {/* Dark Mode Logo */}
              <img
                src="/jas-agro-logo.png"
                alt="JAS Agro"
                className="hidden dark:block h-[40px] sm:h-[48px] lg:h-[54px] xl:h-[60px] w-auto max-w-[105px] sm:max-w-[135px] lg:max-w-[180px] xl:max-w-[200px] object-contain select-none transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* ---------------------------------------------------- */}
          {/* CENTER: DESKTOP NAVIGATION (lg+ only)                */}
          {/* HOME | SHOP | ABOUT | SOLUTIONS | PRODUCTS |         */}
          {/* TECHNOLOGY | MORE ▾ (Sustainability, Insights, Contact) */}
          {/* ---------------------------------------------------- */}
          <nav className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-5 2xl:gap-7 shrink min-w-0" aria-label="Corporate Navigation">
            {mainNavLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              if (link.isShop) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`shrink-0 px-3 xl:px-4 py-1 xl:py-1.5 text-[13.5px] xl:text-[15px] 2xl:text-[15.5px] font-bold rounded-full transition-all duration-200 uppercase tracking-wide flex items-center gap-1 ${
                      isActive
                        ? "bg-[#529116] text-white shadow-xs font-black"
                        : "text-[#529116] dark:text-emerald-400 bg-[#529116]/10 dark:bg-[#529116]/20 border border-[#529116]/30 hover:bg-[#529116] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 px-1.5 xl:px-2 py-1.5 text-[13.5px] xl:text-[15px] 2xl:text-[16px] font-semibold transition-all duration-200 uppercase tracking-wide relative group whitespace-nowrap ${
                    isActive
                      ? "text-[#529116] dark:text-emerald-400 font-bold"
                      : "text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#529116] dark:bg-emerald-400 rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#529116] dark:bg-emerald-400 rounded-full opacity-0 group-hover:opacity-70 transition-opacity" />
                  )}
                </Link>
              );
            })}

            {/* MORE ▾ Dropdown (Contains SUSTAINABILITY, INSIGHTS, CONTACT) */}
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
                className={`shrink-0 px-1.5 xl:px-2 py-1.5 text-[13.5px] xl:text-[15px] 2xl:text-[16px] font-semibold transition-all duration-200 uppercase tracking-wide flex items-center gap-1.5 cursor-pointer relative whitespace-nowrap ${
                  isMoreActive || moreDropdownOpen
                    ? "text-[#529116] dark:text-emerald-400 font-bold"
                    : "text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                <span>{t("navMore")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    moreDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {isMoreActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2.5px] bg-[#529116] dark:bg-emerald-400 rounded-full" />
                )}
              </button>

              {/* Dropdown Menu Popup */}
              <div
                className={`absolute top-full right-0 pt-2 z-50 min-w-[200px] transition-all duration-200 ${
                  moreDropdownOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2a2a2a] rounded-xl shadow-xl py-1.5 overflow-hidden backdrop-blur-lg">
                  {moreNavLinks.map((subLink) => {
                    const isSubActive = isLinkActive(subLink.href);
                    return (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 text-[13px] xl:text-[14px] font-semibold tracking-wide transition-colors ${
                          isSubActive
                            ? "bg-[#529116]/10 dark:bg-[#529116]/20 text-[#529116] dark:text-emerald-400 font-bold border-l-2 border-[#529116]"
                            : "text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:text-slate-950 dark:hover:text-white"
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

          {/* ---------------------------------------------------- */}
          {/* RIGHT ACTION CLUSTER                                 */}
          {/* Mobile:  🔍 → ♡ → 👤 → 🛒                            */}
          {/* Desktop: [Search Input] → HI → ☼ → ♡ → 👤 → 🛒       */}
          {/* ---------------------------------------------------- */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 lg:gap-2.5 xl:gap-3.5 ml-auto shrink-0">
            
            {/* Desktop Search Input (Hidden on mobile top row, visible on lg+) */}
            <div
              ref={desktopSearchRef}
              className="hidden lg:flex items-center relative w-32 lg:w-40 xl:w-52 2xl:w-60 shrink-0"
            >
              <Search className="w-4.5 h-4.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/80 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsDesktopSearchFocused(true)}
                onKeyDown={(e) => handleSearchKeyDown(e, false)}
                aria-label="Search for products"
                aria-expanded={isDesktopSearchFocused}
                aria-haspopup="listbox"
                placeholder={displayedPlaceholder}
                className="w-full pl-9 xl:pl-10 pr-7 xl:pr-8 py-2 text-[12.5px] xl:text-[14px] rounded-full bg-slate-100 dark:bg-[#1c1c1c] border border-slate-300 dark:border-white/65 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/70 focus:outline-none focus:border-[#529116] dark:focus:border-white focus:ring-1 focus:ring-[#529116]/40 dark:focus:ring-white/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Desktop Autocomplete Dropdown */}
              <ShopSearchAutocomplete
                query={searchQuery}
                isOpen={isDesktopSearchFocused}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                onClose={() => setIsDesktopSearchFocused(false)}
                onSelectQuery={(term) => {
                  onSearchChange(term);
                  setIsDesktopSearchFocused(false);
                }}
                className="absolute top-full right-0 mt-2.5 w-[500px] sm:w-[580px] xl:w-[640px] 2xl:w-[680px] max-w-[calc(100vw-24px)]"
              />
            </div>

            {/* Mobile Search Icon Button (Tap opens search bar underneath) */}
            <button
              onClick={handleToggleMobileSearch}
              className={`lg:hidden text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-95 transition-all cursor-pointer ${
                mobileSearchOpen && collapseProgress < 0.9 ? "bg-[#529116]/15 dark:bg-[#529116]/20 text-[#529116]" : ""
              }`}
              aria-label={mobileSearchOpen ? "Close search" : "Open search"}
              title="Search Products"
            >
              <Search className="w-[22px] h-[22px]" />
            </button>

            {/* Desktop Language Switcher (DESKTOP ONLY - Inside hamburger on Mobile) */}
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="hidden lg:inline-flex text-[13px] xl:text-[14px] font-bold text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white transition-all px-2.5 xl:px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
              title="Change Language / भाषा बदलें"
              aria-label="Change language"
            >
              {language === "en" ? "HI" : "EN"}
            </button>

            {/* Desktop Dark / Light Mode Toggle (DESKTOP ONLY - Inside hamburger on Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="hidden lg:inline-flex text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* 4. Wishlist / Favourite Icon (Visible on BOTH Mobile & Desktop) */}
            <Link
              href="/shop/favourites"
              className="relative text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800/60 active:scale-95"
              title={t("shopWishlist")}
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className={`w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] ${wishlistCount > 0 ? "fill-red-500 text-red-500" : ""}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 sm:top-1.5 right-1 sm:right-1.5 w-[18px] h-[18px] rounded-full bg-red-500 text-white font-mono text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* 5. User / Account Icon (Visible on BOTH Mobile & Desktop) */}
            <Link
              href="/contact"
              className="text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white transition-colors min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800/60 active:scale-95"
              title={t("shopAccount")}
              aria-label="Account"
            >
              <UserCheck className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
            </Link>

            {/* 6. Cart Icon (LAST on the right for both Mobile & Desktop) */}
            <button
              onClick={onOpenCart}
              className="relative text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800/60 active:scale-95"
              aria-label={`Cart with ${cartCount} items`}
              title={t("shopCart")}
            >
              <ShoppingCart className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 sm:top-1 right-0.5 sm:right-1 w-[18px] h-[18px] rounded-full bg-[#3f7010] text-white font-mono text-[10.5px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ROW 2: EXPANDED MOBILE SEARCH WITH SCROLL-DRIVEN COLLAPSE*/}
        {/* ======================================================== */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              ref={mobileSearchRef}
              initial={{ height: 0, opacity: 0, y: -8 }}
              animate={{
                height: "auto",
                opacity: collapseProgress >= 0.9 ? 0 : 1 - collapseProgress,
                scale: 1 - collapseProgress * 0.1,
                y: 0,
              }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden"
              style={{
                pointerEvents: collapseProgress >= 0.85 ? "none" : "auto",
              }}
            >
              <div className="pb-3 pt-0.5 px-0.5 space-y-2">
                <div className="relative w-full">
                  <Search className="w-[18px] h-[18px] absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/80 pointer-events-none" />
                  <input
                    ref={mobileSearchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onFocus={() => setIsMobileSearchFocused(true)}
                    onKeyDown={(e) => handleSearchKeyDown(e, true)}
                    aria-label={t("shopSearchPlaceholder")}
                    placeholder={displayedPlaceholder}
                    className="w-full pl-10 pr-10 py-2.5 text-[13.5px] rounded-full bg-slate-100 dark:bg-[#1c1c1c] border border-slate-300 dark:border-white/65 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/70 focus:outline-none focus:border-[#529116] dark:focus:border-white focus:ring-1 focus:ring-[#529116]/40 dark:focus:ring-white/40 transition-all min-h-[46px]"
                  />
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {searchQuery ? (
                      <button
                        onClick={() => onSearchChange("")}
                        className="text-slate-500 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white p-1.5 cursor-pointer rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800"
                        aria-label="Clear search text"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsMobileSearchFocused(false);
                          setMobileSearchOpen(false);
                        }}
                        className="text-slate-400 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white p-1.5 cursor-pointer rounded-full hover:bg-slate-200 dark:hover:bg-zinc-800"
                        aria-label="Close search bar"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Mobile Autocomplete Suggestions Dropdown */}
                <ShopSearchAutocomplete
                  query={searchQuery}
                  isOpen={isMobileSearchFocused && mobileSearchOpen}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  onClose={() => {
                    setIsMobileSearchFocused(false);
                  }}
                  onSelectQuery={(term) => {
                    onSearchChange(term);
                    setIsMobileSearchFocused(false);
                  }}
                  className="w-full shadow-xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ======================================================== */}
      {/* MOBILE HAMBURGER MENU (SLIDE-DOWN WHEN OPEN)             */}
      {/* ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white dark:bg-[#161616] border-t border-slate-200 dark:border-[#222222] overflow-hidden shadow-lg"
          >
            <div className="p-4 space-y-4">
              {/* Primary Navigation Links */}
              <div className="space-y-1">
                {mainNavLinks.map((link) => {
                  const isActive = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "bg-[#3f7010]/15 dark:bg-[#3f7010]/20 text-[#529116] font-bold border-l-2 border-[#529116]"
                          : "text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.isShop && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#529116] text-white font-bold">
                          {t("shopStore")}
                        </span>
                      )}
                    </Link>
                  );
                })}

                {/* Mobile MORE Accordion (SUSTAINABILITY, INSIGHTS, CONTACT) */}
                <div className="pt-1">
                  <button
                    onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                      isMoreActive
                        ? "bg-[#3f7010]/15 dark:bg-[#3f7010]/20 text-[#529116] font-bold border-l-2 border-[#529116]"
                        : "text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60"
                    }`}
                  >
                    <span>{t("navMore")}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 dark:text-zinc-400 transition-transform duration-200 ${
                        mobileMoreOpen ? "rotate-180 text-[#529116]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileMoreOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-3.5 pt-1 space-y-1 overflow-hidden"
                      >
                        {moreNavLinks.map((subLink) => {
                          const isSubActive = isLinkActive(subLink.href);
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
                                isSubActive
                                  ? "bg-[#529116]/15 text-[#529116] font-bold border-l-2 border-[#529116]"
                                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/50"
                              }`}
                            >
                              {subLink.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Grouped Settings: Language & Theme below divider */}
              <div className="border-t border-slate-200 dark:border-[#2a2a2a] pt-3.5 space-y-2.5">
                {/* Language Setting */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-[#1f1f1f] border border-slate-200 dark:border-[#2c2c2c]">
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider">
                    {t("shopLanguage")}
                  </span>
                  <button
                    onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#2a2a2a] hover:bg-slate-100 dark:hover:bg-[#333333] border border-slate-300 dark:border-white/20 text-xs font-bold text-slate-900 dark:text-white transition-all cursor-pointer min-h-[36px] shadow-xs"
                    title="Change Language / भाषा बदलें"
                    aria-label="Change language"
                  >
                    <span className={language === "en" ? "text-[#529116]" : "text-slate-400 dark:text-zinc-400"}>EN</span>
                    <span className="text-slate-400 dark:text-zinc-600">/</span>
                    <span className={language === "hi" ? "text-[#529116]" : "text-slate-400 dark:text-zinc-400"}>HI</span>
                  </button>
                </div>

                {/* Theme Setting */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-50 dark:bg-[#1f1f1f] border border-slate-200 dark:border-[#2c2c2c]">
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 uppercase tracking-wider">
                    {t("shopTheme")}
                  </span>
                  <button
                    onClick={toggleDarkMode}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-[#2a2a2a] hover:bg-slate-100 dark:hover:bg-[#333333] border border-slate-300 dark:border-white/20 text-xs font-medium text-slate-900 dark:text-white transition-all cursor-pointer min-h-[36px] shadow-xs"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <>
                        <Sun className="w-4 h-4 text-amber-500" />
                        <span>{t("shopLightMode")}</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 text-slate-700" />
                        <span>{t("shopDarkMode")}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
