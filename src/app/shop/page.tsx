"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ShopFooter } from "@/components/shop/ShopFooter";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { searchProducts } from "@/lib/searchUtils";

// Shop Modular Components
import { ShopHeader } from "@/components/shop/ShopHeader";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopVideoSection } from "@/components/shop/ShopVideoSection";
import { ShopCategoryNav, CategoryItem } from "@/components/shop/ShopCategoryNav";
import {
  ShopFilterToolbar,
  SortOption,
  FilterState,
  ProductTypeOption,
} from "@/components/shop/ShopFilterToolbar";
import { ShopFilterDrawer } from "@/components/shop/ShopFilterDrawer";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { ProductQuickViewModal } from "@/components/shop/ProductQuickViewModal";
import { CartDrawer, CartItem } from "@/components/shop/CartDrawer";
import { CheckoutModal } from "@/components/shop/CheckoutModal";
import { ShopTrustStrip } from "@/components/shop/ShopTrustStrip";
import { ShopNewsletter } from "@/components/shop/ShopNewsletter";
import { ShopPagination } from "@/components/shop/ShopPagination";

import { ShoppingCart, ArrowRight, ArrowUp } from "lucide-react";

// Helper to categorize products by natural type
const getProductType = (product: ShopProduct): string => {
  if (product.category === "Biscuits & Cookies") return "cookies";
  if (product.category === "Snacks & Khakhra") return "khakhra-snacks";
  if (product.slug.includes("powder")) return "powders";
  if (product.category === "Oyster Mushrooms") return "fresh-mushrooms";
  if (product.category === "Azolla Fodder") return "bio-fodder";
  return "other";
};

function ShopCatalog() {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Dynamic price bounds
  const minProductPrice = useMemo(() => Math.min(...SHOP_PRODUCTS.map((p) => p.price)), []);
  const maxProductPrice = useMemo(() => Math.max(...SHOP_PRODUCTS.map((p) => p.price)), []);

  // State initialized with URL search params where available
  const initialCategory = searchParams.get("category") || "All";
  const initialSort = (searchParams.get("sort") as SortOption) || "featured";
  const initialSearch = searchParams.get("search") || "";
  const initialPage = searchParams.get("page") ? parseInt(searchParams.get("page")!, 10) : 1;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [showAllPages, setShowAllPages] = useState<boolean>(true);

  // Filter System V2 Comprehensive State
  const [filters, setFilters] = useState<FilterState>({
    categories: initialCategory !== "All" ? [initialCategory] : [],
    productTypes: [],
    maxPrice: 1800,
    minRating: 0,
    inStockOnly: false,
    popularOnly: false,
  });

  // Presentation Layout: Grid vs List view
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // UI Interactive States
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  // Global Wishlist from WishlistContext
  const { wishlist, toggleWishlist, wishlistCount } = useWishlist();

  // Global Cart from CartContext
  const {
    cart,
    totalCartCount,
    cartSubtotal,
    shippingCharge,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  // Coupon State
  const [couponApplied, setCouponApplied] = useState<{ code: string; discountPercent: number } | null>(null);

  // Scroll Progress & Back to Top state
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

          if (scrollHeight > 0) {
            const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }

          setShowBackToTop(scrollTop > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Sync state to URL parameters smoothly
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.categories.length === 1) {
      params.set("category", filters.categories[0]);
    } else if (filters.categories.length > 1) {
      params.set("category", filters.categories.join(","));
    }
    if (sortBy !== "featured") params.set("sort", sortBy);
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (!showAllPages && currentPage > 1) params.set("page", currentPage.toString());

    const queryString = params.toString();
    const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;
    window.history.replaceState(null, "", targetUrl);
  }, [filters.categories, sortBy, searchQuery, currentPage, showAllPages, pathname]);

  // Sync state when URL searchParams change (handles external navigations, Enter search, and query links)
  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch !== null && urlSearch !== searchQuery) {
      setSearchQuery(urlSearch);
      if (urlSearch.trim() && !searchParams.get("category")) {
        setSelectedCategory("All");
        setFilters((prev) => ({ ...prev, categories: [] }));
      }
    }

    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      const cats = urlCategory.split(",").filter(Boolean);
      setFilters((prev) => ({ ...prev, categories: cats }));
      setSelectedCategory(cats[0] || "All");
    }
  }, [searchParams]);

  // Categories Definition with dynamic counts
  const categories: CategoryItem[] = useMemo(() => {
    const catMap: Record<string, number> = {
      "Biscuits & Cookies": 0,
      "Snacks & Khakhra": 0,
      "Oyster Mushrooms": 0,
      "Azolla Fodder": 0,
    };

    SHOP_PRODUCTS.forEach((p) => {
      if (catMap[p.category] !== undefined) {
        catMap[p.category]++;
      }
    });

    return [
      { id: "All", labelEn: "All Products", labelHi: "सभी उत्पाद", count: SHOP_PRODUCTS.length },
      { id: "Biscuits & Cookies", labelEn: "Biscuits & Cookies", labelHi: "बिस्कुट एवं कुकीज़", count: catMap["Biscuits & Cookies"] || 0 },
      { id: "Snacks & Khakhra", labelEn: "Snacks & Khakhra", labelHi: "स्नैक्स एवं खाखरा", count: catMap["Snacks & Khakhra"] || 0 },
      { id: "Oyster Mushrooms", labelEn: "Oyster Mushrooms", labelHi: "ऑयस्टर मशरूम", count: catMap["Oyster Mushrooms"] || 0 },
      { id: "Azolla Fodder", labelEn: "Azolla Fodder", labelHi: "अजोला हरा चारा", count: catMap["Azolla Fodder"] || 0 },
    ];
  }, []);

  // Product Types Options derived from actual JAS Agro catalog
  const productTypes: ProductTypeOption[] = useMemo(() => {
    const counts: Record<string, number> = {
      cookies: 0,
      "khakhra-snacks": 0,
      "fresh-mushrooms": 0,
      powders: 0,
      "bio-fodder": 0,
    };

    SHOP_PRODUCTS.forEach((p) => {
      const type = getProductType(p);
      if (counts[type] !== undefined) counts[type]++;
    });

    return [
      { id: "cookies", labelEn: "Organic Cookies & Biscuits", labelHi: "ऑर्गेनिक कुकीज़ एवं बिस्कुट", count: counts.cookies },
      { id: "khakhra-snacks", labelEn: "Roasted Khakhra & Snacks", labelHi: "रोस्टेड खाखरा एवं स्नैक्स", count: counts["khakhra-snacks"] },
      { id: "fresh-mushrooms", labelEn: "Fresh Mushrooms", labelHi: "ताजा ऑयस्टर मशरूम", count: counts["fresh-mushrooms"] },
      { id: "powders", labelEn: "Powder & Supplements", labelHi: "मशरूम पाउडर एवं पोषण", count: counts.powders },
      { id: "bio-fodder", labelEn: "Live Bio-Fodder", labelHi: "लाइव अजोला चारा", count: counts["bio-fodder"] },
    ];
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    const isSearching = searchQuery.trim() !== "";
    const matchingResults = isSearching ? searchProducts(searchQuery) : [];
    const matchingIds = isSearching ? new Set(matchingResults.map((r) => r.product.id)) : null;

    return SHOP_PRODUCTS.filter((prod) => {
      // 1. Search Query filter (matches English & Hindi fields with typo tolerance)
      if (matchingIds !== null) {
        if (!matchingIds.has(prod.id)) return false;
      }

      // 2. Pagination filter if default viewing (only when not searching)
      if (
        !isSearching &&
        !showAllPages &&
        filters.categories.length === 0 &&
        filters.productTypes.length === 0 &&
        filters.maxPrice >= maxProductPrice &&
        filters.minRating === 0 &&
        !filters.inStockOnly &&
        !filters.popularOnly
      ) {
        if (prod.page !== currentPage) return false;
      }

      // 3. Category filter (multi-select)
      if (filters.categories.length > 0 && !filters.categories.includes(prod.category)) {
        return false;
      }

      // 4. Product Type filter (multi-select)
      if (filters.productTypes.length > 0) {
        const pType = getProductType(prod);
        if (!filters.productTypes.includes(pType)) return false;
      }

      // 5. Max Price filter
      if (prod.price > filters.maxPrice) return false;

      // 6. Minimum Rating filter
      if (filters.minRating > 0 && (prod.rating || 0) < filters.minRating) return false;

      // 7. In stock only filter
      if (filters.inStockOnly && prod.outOfStock) return false;

      // 8. Popular only filter
      if (filters.popularOnly && !prod.isPopular) return false;

      return true;
    }).sort((a, b) => {
      // If user is searching and sort is default 'featured', sort by search relevance score
      if (isSearching && sortBy === "featured" && matchingResults.length > 0) {
        const scoreA = matchingResults.find((r) => r.product.id === a.id)?.score || 0;
        const scoreB = matchingResults.find((r) => r.product.id === b.id)?.score || 0;
        return scoreB - scoreA;
      }
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "name-asc") {
        const nameA = isHindi ? a.titleHi : a.title;
        const nameB = isHindi ? b.titleHi : b.title;
        return nameA.localeCompare(nameB);
      }
      if (sortBy === "name-desc") {
        const nameA = isHindi ? a.titleHi : a.title;
        const nameB = isHindi ? b.titleHi : b.title;
        return nameB.localeCompare(nameA);
      }
      return 0; // "featured" maintains canonical curated order
    });
  }, [
    filters,
    sortBy,
    searchQuery,
    currentPage,
    showAllPages,
    maxProductPrice,
    isHindi,
  ]);

  // Calculate active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.categories.length > 0) count += filters.categories.length;
    if (filters.productTypes.length > 0) count += filters.productTypes.length;
    if (filters.maxPrice < maxProductPrice) count++;
    if (filters.minRating > 0) count++;
    if (filters.inStockOnly) count++;
    if (filters.popularOnly) count++;
    if (searchQuery.trim() !== "") count++;
    if (sortBy !== "featured") count++;
    return count;
  }, [filters, maxProductPrice, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setFilters({
      categories: [],
      productTypes: [],
      maxPrice: maxProductPrice,
      minRating: 0,
      inStockOnly: false,
      popularOnly: false,
    });
    setSearchQuery("");
    setSortBy("featured");
    setShowAllPages(true);
    setCurrentPage(1);
  };

  // Cart Operations
  const handleAddToCart = (product: ShopProduct, quantity: number = 1) => {
    if (product.outOfStock) return;
    addToCart(product, quantity);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    updateQuantity(productId, delta);
  };

  const handleRemoveCartItem = (productId: string) => {
    removeItem(productId);
  };

  const handleBuyNow = (product: ShopProduct, quantity: number = 1) => {
    handleAddToCart(product, quantity);
    setIsCheckoutOpen(true);
  };

  // Discount & Totals with coupon
  const discountAmount = useMemo(() => {
    if (!couponApplied) return 0;
    return Math.round((cartSubtotal * couponApplied.discountPercent) / 100);
  }, [cartSubtotal, couponApplied]);

  const cartFinalTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - discountAmount + shippingCharge);
  }, [cartSubtotal, discountAmount, shippingCharge]);

  // Coupon Verification
  const handleApplyCoupon = (code: string): { success: boolean; message: string } => {
    const clean = code.trim().toUpperCase();
    if (clean === "JAS10" || clean === "JASAGRO10" || clean === "SAVE10") {
      setCouponApplied({ code: clean, discountPercent: 10 });
      return { success: true, message: `Coupon "${clean}" applied! 10% discount added.` };
    } else if (clean === "WELCOME20") {
      setCouponApplied({ code: clean, discountPercent: 20 });
      return { success: true, message: `Coupon "${clean}" applied! 20% discount added.` };
    } else if (clean === "FREESHIP") {
      setCouponApplied({ code: clean, discountPercent: 5 });
      return { success: true, message: `Coupon "${clean}" applied! Extra discount added.` };
    } else {
      return {
        success: false,
        message: isHindi ? "अमान्य कूपन कोड। कृपया JAS10 या WELCOME20 का उपयोग करें।" : "Invalid coupon code. Try JAS10 or WELCOME20.",
      };
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c0c0c] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-[#3f7010] selection:text-white font-sans antialiased transition-colors duration-200">
      {/* Sleek Dedicated E-Commerce Header */}
      <ShopHeader
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            setFilters((prev) => ({ ...prev, categories: [], productTypes: [] }));
            setSelectedCategory("All");
          }
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Storefront Area */}
      <main className={`flex-1 ${cart.length > 0 ? "pb-20 sm:pb-0" : ""}`}>
        {/* Compact Collection Banner */}
        <ShopHero />

        {/* Premium Instagram-Reels-style Video Shopping Section */}
        <ShopVideoSection />

        {/* Discovery, Filter Toolbar & Product Grid Container (OrganicBazar Box-Model Match: max-w-[1420px], 50px desktop padding) */}
        <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-4 sm:py-5 space-y-3 sm:space-y-3.5">
          {/* Category Navigation Bar */}
          <ShopCategoryNav
            categories={categories}
            selectedCategory={filters.categories.length === 1 ? filters.categories[0] : filters.categories.length === 0 ? "All" : ""}
            onSelectCategory={(id) => {
              setSelectedCategory(id);
              setFilters((prev) => ({
                ...prev,
                categories: id === "All" ? [] : [id],
              }));
              setShowAllPages(true);
            }}
          />

          {/* Clean OrganicBazar-inspired Filter & Sort Toolbar */}
          <ShopFilterToolbar
            filters={filters}
            onFilterChange={setFilters}
            categories={categories}
            productTypes={productTypes}
            minProductPrice={minProductPrice}
            maxProductPrice={maxProductPrice}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalFilteredCount={filteredProducts.length}
            activeFilterCount={activeFilterCount}
            onResetFilters={handleResetFilters}
            onOpenMobileFilters={() => setIsMobileFilterOpen(true)}
          />

          {/* Product Grid / List Layout */}
          <ProductGrid
            products={filteredProducts}
            viewMode={viewMode}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onQuickView={setQuickViewProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            cart={cart}
            onResetFilters={handleResetFilters}
          />

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <ShopPagination
              currentPage={currentPage}
              showAllPages={showAllPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                setShowAllPages(false);
              }}
              onToggleShowAll={() => setShowAllPages(!showAllPages)}
              totalFilteredCount={filteredProducts.length}
              totalAvailableCount={SHOP_PRODUCTS.length}
            />
          )}
        </div>

        {/* Promotional Trust Strip */}
        <ShopTrustStrip />

        {/* Farm Newsletter Advisory */}
        <ShopNewsletter />
      </main>

      {/* Mobile Sticky Bottom Checkout Bar (Restores direct Proceed to Checkout on smartphones) */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#262626] px-3 py-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-medium truncate uppercase tracking-wider">
                {t("shopMobileCartTotal")}
              </div>
              <div className="font-mono font-extrabold text-sm xs:text-base text-slate-900 dark:text-white truncate">
                ₹{cartSubtotal}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label={`View cart with ${totalCartCount} items`}
                className="px-3 py-2 rounded-xl border border-slate-300 dark:border-[#333] bg-slate-50 dark:bg-[#1f1f1f] hover:bg-slate-100 dark:hover:bg-[#282828] text-slate-800 dark:text-zinc-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-[#3f7010] dark:text-[#7ec238]" />
                <span>{isHindi ? `कार्ट (${totalCartCount})` : `Cart (${totalCartCount})`}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCheckoutOpen(true)}
                className="px-3.5 xs:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{t("shopProceedToCheckout")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter & Sort Drawer */}
      <ShopFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        categories={categories}
        productTypes={productTypes}
        minProductPrice={minProductPrice}
        maxProductPrice={maxProductPrice}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalFilteredCount={filteredProducts.length}
        onResetFilters={handleResetFilters}
      />

      {/* Quick View Modal Dialog */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        cartSubtotal={cartSubtotal}
        shippingCharge={shippingCharge}
        cartFinalTotal={cartFinalTotal}
        totalCartCount={totalCartCount}
        onAddToCart={handleAddToCart}
      />

      {/* 3-Step Direct Checkout Experience */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        cartSubtotal={cartSubtotal}
        discountAmount={discountAmount}
        shippingCharge={shippingCharge}
        cartFinalTotal={cartFinalTotal}
        couponApplied={couponApplied}
        onApplyCoupon={handleApplyCoupon}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onClearCart={clearCart}
      />

      {/* Back to Top Floating Action Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={handleBackToTop}
          aria-label={t("shopBackToTop")}
          title={t("shopBackToTop")}
          className={`fixed ${
            cart.length > 0 ? "bottom-16 sm:bottom-6" : "bottom-5 sm:bottom-6"
          } right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-[#1a1a1a]/95 text-slate-800 dark:text-zinc-200 hover:bg-[#3f7010] hover:text-white dark:hover:bg-[#3f7010] dark:hover:text-white border border-slate-300 dark:border-[#383838] shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer group animate-in fade-in slide-in-from-bottom-3 select-none`}
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </button>
      )}

      {/* Fixed Bottom Scroll Progress Timeline */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
        className="fixed bottom-0 inset-x-0 h-1 sm:h-1.5 bg-black/10 dark:bg-white/5 z-40 pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-[#3f7010] via-[#529116] to-[#7ec238] transition-all duration-75 ease-out rounded-r-full"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <ShopFooter />
    </div>
  );
}

export default function ShopPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-sm text-[#529116] font-semibold">
            <span className="w-5 h-5 border-2 border-[#3f7010] border-t-transparent rounded-full animate-spin" />
            <span>{isHindi ? "JAS एग्रो स्टोर लोड हो रहा है..." : "Loading JAS Agro Store..."}</span>
          </div>
        </div>
      }
    >
      <ShopCatalog />
    </Suspense>
  );
}
