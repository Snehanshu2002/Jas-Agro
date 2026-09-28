"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { ShopFooter } from "@/components/shop/ShopFooter";
import { ShopTrustStrip } from "@/components/shop/ShopTrustStrip";
import { ShopNewsletter } from "@/components/shop/ShopNewsletter";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductQuickViewModal } from "@/components/shop/ProductQuickViewModal";
import { CartDrawer, CartItem } from "@/components/shop/CartDrawer";
import { CheckoutModal } from "@/components/shop/CheckoutModal";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { ShopProduct } from "@/data/shopProducts";
import { Heart, ShoppingBag, ArrowRight, ShoppingCart } from "lucide-react";

export default function FavouritesPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const { wishlistProducts, wishlistCount, toggleWishlist, isWishlisted } = useWishlist();

  // Search query for header
  const [searchQuery, setSearchQuery] = useState("");

  // Cart & UI Interactive States
  const {
    cart,
    totalCartCount,
    cartSubtotal,
    shippingCharge,
    cartFinalTotal,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);

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

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c0c0c] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-[#3f7010] selection:text-white font-sans antialiased transition-colors duration-200">
      {/* Header */}
      <ShopHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartCount}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Quick Cart Trigger (Mobile) */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label={`View cart with ${totalCartCount} items`}
          className="sm:hidden fixed bottom-5 right-5 z-40 px-4 py-2.5 rounded-full bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-xs shadow-2xl flex items-center gap-2 border border-[#568e1a]/60"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{isHindi ? "कार्ट" : "Cart"}</span>
          <span className="bg-[#30550c] px-1.5 py-[1px] rounded-full font-mono text-[11px]">
            {totalCartCount}
          </span>
        </button>
      )}

      <main className="flex-1">
        {/* Page Banner / Header */}
        <section className="bg-white dark:bg-[#141414] border-b border-slate-200 dark:border-[#222222] py-6 sm:py-8 transition-colors">
          <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px]">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mb-3 font-medium">
              <Link href="/" className="hover:text-[#3f7010] dark:hover:text-[#529116] transition-colors">
                {isHindi ? "होम" : "Home"}
              </Link>
              <span className="text-slate-400 dark:text-zinc-600">/</span>
              <Link href="/shop" className="hover:text-[#3f7010] dark:hover:text-[#529116] transition-colors">
                {isHindi ? "शॉप" : "Shop"}
              </Link>
              <span className="text-slate-400 dark:text-zinc-600">/</span>
              <span className="text-[#3f7010] dark:text-[#529116] font-semibold" aria-current="page">
                {isHindi ? "पसंदीदा उत्पाद" : "Favourite Products"}
              </span>
            </nav>

            {/* Title & Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-500 border border-red-200 dark:border-red-900/50 shadow-xs">
                  <Heart className="w-6 h-6 fill-red-500" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                    {isHindi ? "पसंदीदा उत्पाद" : "Favourite Products"}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                    {isHindi
                      ? "आपके द्वारा सहेजे गए सभी पसंदीदा कृषि और जैविक उत्पाद"
                      : "All your saved agricultural and organic favourites"}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#202020] border border-slate-200 dark:border-[#2a2a2a] text-xs font-bold text-slate-700 dark:text-zinc-300 self-start sm:self-auto">
                <span>{wishlistCount}</span>
                <span>{isHindi ? "उत्पाद सहेजे गए" : "Products saved"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wishlist Content Grid / Empty State */}
        <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-8">
          {wishlistProducts.length === 0 ? (
            /* Empty State */
            <div className="bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#262626] rounded-3xl p-8 sm:p-14 text-center max-w-xl mx-auto shadow-xs space-y-5 my-8">
              <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-950/30 text-red-400 dark:text-red-400/80 flex items-center justify-center mx-auto border border-red-200 dark:border-red-900/40">
                <Heart className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  {isHindi ? "अभी कोई पसंदीदा उत्पाद नहीं है" : "No Favourite Products Yet"}
                </h2>
                <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  {isHindi
                    ? "स्टोर में किसी भी उत्पाद के दिल (❤️) आइकन पर क्लिक करके अपने पसंदीदा उत्पादों को यहाँ सुरक्षित रखें।"
                    : "Save products you love by clicking the heart icon on any item across the shop."}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isHindi ? "शॉप पर जाएं (Continue Shopping)" : "Continue Shopping"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            /* Products Grid matching the Shop exact 4-column desktop / 2-column mobile layout */
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {wishlistProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={isWishlisted(product.id)}
                    onToggleWishlist={toggleWishlist}
                    onQuickView={setQuickViewProduct}
                    onAddToCart={handleAddToCart}
                    onBuyNow={handleBuyNow}
                    quantityInCart={cart.find((item) => item.product.id === product.id)?.quantity || 0}
                  />
                ))}
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#3f7010] dark:text-[#529116] hover:underline cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>{isHindi ? "शॉप पर और उत्पाद देखें" : "Explore more products in Shop"}</span>
                </Link>

                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm transition-all shadow-sm cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{isHindi ? `कार्ट देखें (${totalCartCount})` : `View Cart (${totalCartCount})`}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <ShopTrustStrip />
        <ShopNewsletter />
      </main>

      <ShopFooter />

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Cart Drawer */}
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
        shippingCharge={cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49}
        cartFinalTotal={cartSubtotal + (cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49)}
        totalCartCount={totalCartCount}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        cartSubtotal={cartSubtotal}
        discountAmount={0}
        shippingCharge={cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49}
        cartFinalTotal={cartSubtotal + (cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49)}
        couponApplied={null}
        onApplyCoupon={() => ({ success: false, message: "" })}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}
