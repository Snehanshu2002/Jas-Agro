"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShopProduct, SHOP_PRODUCTS } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  searchProducts,
  getRecentSearches,
  saveRecentSearch,
  removeRecentSearch,
  clearAllRecentSearches,
  highlightMatchText,
} from "@/lib/searchUtils";
import {
  Search,
  TrendingUp,
  Clock,
  X,
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  ShoppingCart,
  Check,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Tag,
} from "lucide-react";

interface ShopSearchAutocompleteProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
  onSelectQuery: (term: string) => void;
  className?: string;
  selectedIndex?: number;
  onSelectProduct?: (product: ShopProduct) => void;
  setSelectedIndex?: (index: number) => void;
}

const TRENDING_SEARCHES = [
  { term: "Oyster Mushroom", labelHi: "ऑयस्टर मशरूम" },
  { term: "Mushroom Powder", labelHi: "मशरूम पाउडर" },
  { term: "Naan Khatai", labelHi: "नान खताई" },
  { term: "Butter Biscuit", labelHi: "बटर बिस्कुट" },
  { term: "Khakhra", labelHi: "खाखरा" },
  { term: "Agriculture Products", labelHi: "कृषि उत्पाद" },
  { term: "Organic Products", labelHi: "ऑर्गेनिक उत्पाद" },
  { term: "Azolla Fodder", labelHi: "अजोला चारा" },
];

export const ShopSearchAutocomplete: React.FC<ShopSearchAutocompleteProps> = ({
  query,
  isOpen,
  onClose,
  onSelectQuery,
  className = "",
  selectedIndex = -1,
  onSelectProduct,
  setSelectedIndex,
}) => {
  const router = useRouter();
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [recommendedPage, setRecommendedPage] = useState<number>(0);
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const listRef = useRef<HTMLDivElement>(null);
  const recommendedScrollRef = useRef<HTMLDivElement>(null);

  // Curated recommended products from existing JAS Agro catalog
  const recommendedProducts = useMemo(() => {
    // Prioritize popular items, high rating, and core categories
    const featured = SHOP_PRODUCTS.filter(
      (p) => p.isPopular || (p.rating && p.rating >= 4.7)
    );
    return featured.length >= 6 ? featured.slice(0, 6) : SHOP_PRODUCTS.slice(0, 6);
  }, []);

  // Load recent searches on mount / open
  useEffect(() => {
    setMounted(true);
    setRecentSearches(getRecentSearches());
  }, [isOpen]);

  // Execute live matching query
  const matchingResults = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query).slice(0, 7);
  }, [query]);

  // Scroll selected item into view when navigating with keyboard
  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const selectedEl = listRef.current.children[selectedIndex] as HTMLElement | undefined;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  const handleSelectTerm = (term: string) => {
    saveRecentSearch(term);
    setRecentSearches(getRecentSearches());
    onSelectQuery(term);
    onClose();
    router.push(`/shop?search=${encodeURIComponent(term)}`);
  };

  const handleSelectProduct = (product: ShopProduct) => {
    saveRecentSearch(product.title);
    setRecentSearches(getRecentSearches());
    onClose();
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      router.push(`/shop/product/${product.slug}`);
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: ShopProduct) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(productId);
  };

  const handleRemoveRecent = (e: React.MouseEvent, term: string) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = removeRecentSearch(term);
    setRecentSearches(updated);
  };

  const handleClearAllRecent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    clearAllRecentSearches();
    setRecentSearches([]);
  };

  // Carousel navigation for recommended items
  const handleNextRecommended = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (recommendedScrollRef.current) {
      const scrollAmount = recommendedScrollRef.current.clientWidth * 0.85;
      recommendedScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setRecommendedPage(1);
    }
  };

  const handlePrevRecommended = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (recommendedScrollRef.current) {
      const scrollAmount = recommendedScrollRef.current.clientWidth * 0.85;
      recommendedScrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setRecommendedPage(0);
    }
  };

  if (!isOpen || !mounted) return null;

  return (
    <div
      role="listbox"
      aria-label="Smart Search suggestions"
      className={`bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2 ${className}`}
      onMouseDown={(e) => {
        // Prevent search input from losing focus when clicking inside the dropdown
        e.preventDefault();
      }}
    >
      {/* ---------------------------------------------------------------- */}
      {/* CASE A: EMPTY QUERY -> SHOW TRENDING SEARCHES & RECOMMENDED      */}
      {/* ---------------------------------------------------------------- */}
      {!query.trim() ? (
        <div className="p-3.5 sm:p-5 space-y-5 max-h-[75vh] sm:max-h-[520px] overflow-y-auto shop-scrollbar-x">
          {/* 1. Recent Searches (if available) */}
          {recentSearches.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#529116]" />
                  <span>{t("shopRecentSearches")}</span>
                </span>
                <button
                  type="button"
                  onClick={handleClearAllRecent}
                  className="text-[11px] text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer lowercase"
                >
                  {t("shopClearAll")}
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {recentSearches.map((term) => (
                  <div
                    key={term}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#242424] hover:bg-slate-200 dark:hover:bg-[#2c2c2c] text-xs text-slate-800 dark:text-zinc-200 transition-colors group cursor-pointer border border-slate-200/80 dark:border-white/5"
                    onClick={() => handleSelectTerm(term)}
                  >
                    <span>{term}</span>
                    <button
                      type="button"
                      onClick={(e) => handleRemoveRecent(e, term)}
                      className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 p-0.5 rounded-full transition-colors"
                      aria-label={`Remove ${term}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. TRENDING SEARCHES SECTION */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              <TrendingUp className="w-4 h-4 text-amber-500" />
              <span>{t("shopTrendingSearches")}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {TRENDING_SEARCHES.map(({ term, labelHi }) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => handleSelectTerm(term)}
                  className="px-3 py-1.5 rounded-full bg-emerald-50/70 dark:bg-[#202b16] hover:bg-[#3f7010] hover:text-white dark:hover:bg-[#529116] dark:hover:text-white text-[#3f7010] dark:text-[#7ec238] text-xs font-semibold transition-all border border-[#3f7010]/30 dark:border-[#529116]/40 cursor-pointer flex items-center gap-1.5 group shadow-2xs"
                >
                  <span>{isHindi ? labelHi : term}</span>
                  <ArrowRight className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>

          {/* 3. RECOMMENDED PRODUCTS SECTION */}
          <div className="pt-3 border-t border-slate-100 dark:border-[#262626] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-[#529116]" />
                <span>{t("shopRecommendedForYou")}</span>
              </div>

              {/* Slider Controls */}
              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevRecommended}
                  className="w-6 h-6 rounded-full bg-slate-100 dark:bg-[#252525] hover:bg-slate-200 dark:hover:bg-[#333] text-slate-600 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous recommended products"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextRecommended}
                  className="w-6 h-6 rounded-full bg-slate-100 dark:bg-[#252525] hover:bg-slate-200 dark:hover:bg-[#333] text-slate-600 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next recommended products"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Recommended Products Carousel / Row */}
            <div
              ref={recommendedScrollRef}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 overflow-x-auto pb-1 shop-scrollbar-x snap-x"
            >
              {recommendedProducts.map((product) => {
                const isAdded = !!addedItemIds[product.id];
                const isItemWishlisted = isWishlisted(product.id);
                const discountPercent =
                  product.originalPrice && product.originalPrice > product.price
                    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                    : 0;

                return (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product)}
                    className="bg-slate-50 dark:bg-[#202020] rounded-2xl border border-slate-200/90 dark:border-[#2c2c2c] p-2.5 sm:p-3 flex flex-col justify-between hover:border-[#529116]/60 dark:hover:border-[#529116]/60 hover:shadow-md transition-all group cursor-pointer relative snap-start"
                  >
                    {/* Top Image Box */}
                    <div className="relative w-full aspect-square rounded-xl bg-white dark:bg-[#121212] p-2 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-[#262626]">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                      />

                      {/* Discount Badge */}
                      {discountPercent > 0 && (
                        <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-red-500 text-white font-bold text-[9px] sm:text-[10px] shadow-xs">
                          {discountPercent}% OFF
                        </span>
                      )}

                      {/* Quick Wishlist Button */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleWishlist(e, product.id)}
                        className={`absolute top-1.5 right-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all bg-white/90 dark:bg-[#202020]/90 backdrop-blur-xs border border-slate-200 dark:border-[#333] shadow-xs cursor-pointer ${
                          isItemWishlisted
                            ? "text-red-500"
                            : "text-slate-400 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400"
                        }`}
                        aria-label="Wishlist product"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${isItemWishlisted ? "fill-red-500" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Content Details */}
                    <div className="pt-2 space-y-1">
                      {/* Product Title */}
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-[#529116] transition-colors">
                        {isHindi ? product.titleHi : product.title}
                      </h4>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-zinc-400">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        </div>
                        <span className="font-semibold text-slate-800 dark:text-zinc-200 text-[10.5px]">
                          {product.rating || 4.8}
                        </span>
                        <span className="text-[10px]">
                          ({product.reviewsCount || 45})
                        </span>
                      </div>

                      {/* Price Hierarchy */}
                      <div className="flex items-baseline gap-1.5 pt-0.5">
                        <span className="font-mono font-extrabold text-sm text-slate-900 dark:text-white">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <span className="font-mono text-[11px] text-slate-400 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Green ADD TO CART Action Button */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`w-full mt-2.5 py-1.5 sm:py-2 px-3 rounded-xl font-bold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{t("shopAddedBadge")}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>{t("shopAddToCart")}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : matchingResults.length > 0 ? (
        /* ---------------------------------------------------------------- */
        /* CASE B: RESULTS MATCHED -> SHOW PRODUCTS LIST WITH METRICS       */
        /* ---------------------------------------------------------------- */
        <div className="max-h-[75vh] sm:max-h-[500px] overflow-y-auto divide-y divide-slate-100 dark:divide-[#262626] shop-scrollbar-x">
          {/* Header Count */}
          <div className="px-4 py-2 bg-slate-50/90 dark:bg-[#1c1c1c] text-[11px] font-mono text-slate-500 dark:text-zinc-400 flex items-center justify-between border-b border-slate-100 dark:border-[#262626]">
            <span>
              {matchingResults.length} {matchingResults.length === 1 ? t("shopProductMatch") : t("shopProductMatches")}
            </span>
            <span className="text-[10px] text-[#529116] dark:text-emerald-400 font-bold">
              {t("shopPressEnterToView")}
            </span>
          </div>

          {/* Product Rows */}
          <div ref={listRef} className="p-2 space-y-1.5">
            {matchingResults.map(({ product }, idx) => {
              const isSelected = selectedIndex === idx;
              const title = isHindi ? product.titleHi : product.title;
              const titleParts = highlightMatchText(title, query);
              const isAdded = !!addedItemIds[product.id];
              const isItemWishlisted = isWishlisted(product.id);
              const discountPercent =
                product.originalPrice && product.originalPrice > product.price
                  ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                  : 0;

              return (
                <div
                  key={product.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex && setSelectedIndex(idx)}
                  onClick={() => handleSelectProduct(product)}
                  className={`p-2.5 sm:p-3 rounded-2xl transition-all cursor-pointer flex items-center gap-3 group border ${
                    isSelected
                      ? "bg-emerald-50/80 dark:bg-[#283818] border-emerald-400/60 dark:border-emerald-500/50 shadow-xs"
                      : "border-transparent hover:bg-slate-100/80 dark:hover:bg-[#242424]"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white dark:bg-[#121212] p-1.5 shrink-0 border border-slate-200 dark:border-[#2e2e2e] flex items-center justify-center overflow-hidden relative">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform select-none"
                    />
                    {discountPercent > 0 && (
                      <span className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-[8px] font-bold text-center leading-tight py-0.5">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Title, Category & Ratings */}
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white truncate group-hover:text-[#529116] transition-colors">
                      {titleParts.map((part, i) => (
                        <span
                          key={i}
                          className={
                            part.isMatch
                              ? "bg-emerald-100 dark:bg-emerald-950/90 text-emerald-800 dark:text-emerald-300 font-extrabold px-0.5 rounded"
                              : ""
                          }
                        >
                          {part.text}
                        </span>
                      ))}
                    </h4>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-zinc-400">
                      <span className="truncate">{isHindi ? product.categoryHi : product.category}</span>
                      <span>•</span>
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500 inline mr-0.5" />
                        <span className="font-semibold text-slate-700 dark:text-zinc-300 text-[10.5px]">
                          {product.rating || 4.8}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Quick Actions */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="text-right">
                      <span className="font-mono font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white block">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-[10px] text-slate-400 line-through font-mono">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Wishlist Icon */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, product.id)}
                      className={`p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#303030] transition-colors cursor-pointer ${
                        isItemWishlisted
                          ? "text-red-500"
                          : "text-slate-400 hover:text-red-500 dark:text-zinc-400"
                      }`}
                      aria-label="Wishlist product"
                    >
                      <Heart
                        className={`w-4 h-4 ${isItemWishlisted ? "fill-red-500" : ""}`}
                      />
                    </button>

                    {/* Quick Add To Cart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`p-2 rounded-xl text-white font-bold text-xs transition-all shadow-xs cursor-pointer ${
                        isAdded
                          ? "bg-emerald-600"
                          : "bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c]"
                      }`}
                      aria-label={t("shopAddToCart")}
                      title={t("shopAddToCart")}
                    >
                      {isAdded ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <ShoppingCart className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer View All Search Results */}
          <div className="p-3 bg-slate-50 dark:bg-[#1a1a1a] border-t border-slate-100 dark:border-[#262626]">
            <button
              type="button"
              onClick={() => handleSelectTerm(query)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:scale-[0.99] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span>
                {isHindi ? `"${query}" के लिए सभी उत्पाद देखें` : `View all results for "${query}"`}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* ---------------------------------------------------------------- */
        /* CASE C: NO RESULTS FOUND -> HELPFUL CLEAR / SUGGESTION STATE    */
        /* ---------------------------------------------------------------- */
        <div className="p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {isHindi ? `"${query}" के लिए कोई उत्पाद नहीं मिला` : `No products found for "${query}"`}
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
              {isHindi
                ? "कृपया वर्तनी जांचें या मशरूम, कुकीज, खाखरा, या अजोला जैसे कीवर्ड खोजें।"
                : "Check your spelling or try searching for keywords like mushroom, cookies, naan khatai, or azolla."}
            </p>
          </div>

          {/* Quick Trending Fallbacks */}
          <div className="pt-2 border-t border-slate-100 dark:border-[#262626] space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {t("shopSuggestedSearches")}
            </span>
            <div className="flex flex-wrap justify-center gap-1.5">
              {["Oyster Mushroom", "Naan Khatai", "Mushroom Powder", "Khakhra", "Azolla Fodder"].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => handleSelectTerm(term)}
                  className="px-3 py-1 rounded-full bg-slate-100 dark:bg-[#242424] hover:bg-emerald-50 dark:hover:bg-[#3f7010]/20 text-xs text-slate-700 dark:text-zinc-300 font-medium transition-colors cursor-pointer border border-slate-200/60 dark:border-white/5"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
