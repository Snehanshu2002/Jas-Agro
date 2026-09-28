"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { ShopProduct, SHOP_PRODUCTS } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Truck,
  ShoppingBag,
  Star,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export interface CartItem {
  product: ShopProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  cartSubtotal: number;
  shippingCharge: number;
  cartFinalTotal: number;
  totalCartCount: number;
  onAddToCart?: (product: ShopProduct, quantity?: number) => void;
}

const FREE_SHIPPING_THRESHOLD = 499;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  cartSubtotal,
  shippingCharge,
  cartFinalTotal,
  totalCartCount,
  onAddToCart,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const carouselRef = useRef<HTMLDivElement>(null);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  // IDs currently in cart
  const cartProductIds = useMemo(() => new Set(cart.map((item) => item.product.id)), [cart]);

  // Exclude products already in cart and prioritize popular / top-rated items
  const recommendedProducts = useMemo(() => {
    return SHOP_PRODUCTS
      .filter((p) => !cartProductIds.has(p.id) && !p.outOfStock)
      .sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return (b.rating || 4.8) - (a.rating || 4.8);
      });
  }, [cartProductIds]);

  const handleScrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -170 : 170;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAddRecommended = (product: ShopProduct) => {
    setAddedIds((prev) => new Set(prev).add(product.id));
    if (onAddToCart) {
      onAddToCart(product, 1);
    } else {
      onUpdateQuantity(product.id, 1);
    }
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1200);
  };

  const freeShippingDifference = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Over Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <aside
          role="dialog"
          aria-modal="true"
          aria-label={t("shopCartTitle")}
          className="w-screen max-w-full sm:max-w-md bg-white dark:bg-[#121212] border-l border-slate-200 dark:border-[#222222] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200 text-slate-900 dark:text-white transition-colors duration-200"
        >
          {/* Cart Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-[#2c2c2c] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#529116] flex items-center justify-center">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {t("shopCartTitle")}
                </h2>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                  {totalCartCount} {isHindi ? t("shopCartItems") : totalCartCount === 1 ? t("shopCartItem") : t("shopCartItems")}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label={isHindi ? "कार्ट बंद करें" : "Close cart"}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#2a2a2a] text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && (
            <div className="bg-slate-50 dark:bg-[#1a1a1a] p-4 border-b border-slate-200 dark:border-[#2c2c2c] space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                  <Truck className="w-4 h-4 text-[#3f7010] dark:text-[#529116]" />
                  <span>
                    {freeShippingDifference === 0 ? (
                      <strong className="text-[#3f7010] dark:text-[#529116]">
                        {t("shopFreeDeliveryUnlocked")}
                      </strong>
                    ) : isHindi ? (
                      `मुफ़्त डिलीवरी के लिए ₹${freeShippingDifference} और जोड़ें`
                    ) : (
                      `Add ₹${freeShippingDifference} more for FREE Delivery`
                    )}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-zinc-400">{freeShippingProgress}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#3f7010] transition-all duration-300 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Scrollable Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 bg-slate-50 dark:bg-[#181818] rounded-2xl border border-slate-200/80 dark:border-[#282828]">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#222] text-slate-400 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    {t("shopCartEmpty")}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-xs leading-relaxed">
                    {t("shopCartEmptyDesc")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  {t("shopExploreShop")}
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => {
                  const title = isHindi ? item.product.titleHi : item.product.title;
                  return (
                    <div
                      key={item.product.id}
                      className="p-3.5 bg-slate-50 dark:bg-[#1a1a1a] rounded-2xl border border-slate-200 dark:border-[#2c2c2c] flex items-center gap-3.5 shadow-xs"
                    >
                      {/* Item Image */}
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-[#0D0D0D] p-1 flex items-center justify-center shrink-0 border border-slate-200 dark:border-[#2a2a2a]">
                        <img
                          src={item.product.img}
                          alt={title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Item Metadata */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                          {title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <span className="font-extrabold font-mono text-slate-900 dark:text-white">
                            ₹{item.product.price * item.quantity}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">
                            (₹{item.product.price} / unit)
                          </span>
                        </div>

                        {/* Stepper */}
                        <div className="flex items-center gap-2.5 pt-1">
                          <div className="inline-flex items-center bg-white dark:bg-[#262626] rounded-lg p-0.5 border border-slate-200 dark:border-[#333333]">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              aria-label={isHindi ? "मात्रा घटाएं" : "Decrease quantity"}
                              className="w-6 h-6 rounded-md flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700 text-xs transition-colors cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center font-mono font-bold text-sm text-slate-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              aria-label={isHindi ? "मात्रा बढ़ाएं" : "Increase quantity"}
                              className="w-6 h-6 rounded-md flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700 text-xs transition-colors cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            aria-label={isHindi ? `${title} हटाएं` : `Remove ${title}`}
                            className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Popular Products Carousel Section */}
            {recommendedProducts.length > 0 && (
              <div className="pt-3 pb-1 border-t border-slate-200/80 dark:border-[#282828] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                    <h3 className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {t("shopPopularProducts")}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleScrollCarousel("left")}
                      aria-label={isHindi ? "पिछले अनुशंसित उत्पाद" : "Previous recommended products"}
                      className="w-6 h-6 rounded-full bg-slate-100 dark:bg-[#252525] hover:bg-slate-200 dark:hover:bg-[#333] text-slate-600 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleScrollCarousel("right")}
                      aria-label={isHindi ? "अगले अनुशंसित उत्पाद" : "Next recommended products"}
                      className="w-6 h-6 rounded-full bg-slate-100 dark:bg-[#252525] hover:bg-slate-200 dark:hover:bg-[#333] text-slate-600 dark:text-zinc-300 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                  ref={carouselRef}
                  className="flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-0.5"
                >
                  {recommendedProducts.map((p) => {
                    const pTitle = isHindi ? p.titleHi : p.title;
                    const rating = p.rating || 4.8;
                    const reviewsCount = p.reviewsCount || 24;
                    const mrp = p.originalPrice || Math.round(p.price * 1.25);
                    const isAdded = addedIds.has(p.id);

                    return (
                      <div
                        key={p.id}
                        className="w-[142px] sm:w-[155px] shrink-0 snap-start bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] rounded-2xl p-2.5 flex flex-col justify-between hover:border-[#3f7010]/50 dark:hover:border-[#7ec238]/40 transition-all duration-200 shadow-xs group"
                      >
                        <div>
                          {/* Product Image */}
                          <div className="aspect-square w-full rounded-xl bg-white dark:bg-[#0D0D0D] p-1.5 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-[#222] relative">
                            {mrp > p.price && (
                              <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded-md bg-[#3f7010] text-white text-[9px] font-extrabold tracking-tight z-10 shadow-xs">
                                -{Math.round(((mrp - p.price) / mrp) * 100)}%
                              </span>
                            )}
                            <img
                              src={p.img}
                              alt={pTitle}
                              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>

                          {/* Star Rating + Review Count */}
                          <div className="flex items-center gap-1 text-[11px] mt-2">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                            <span className="font-bold text-slate-800 dark:text-zinc-200 text-[11px]">
                              {rating}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-zinc-500">
                              ({reviewsCount})
                            </span>
                          </div>

                          {/* Product Name */}
                          <h4
                            className="font-bold text-xs text-slate-900 dark:text-white line-clamp-2 leading-snug mt-1 min-h-[32px]"
                            title={pTitle}
                          >
                            {pTitle}
                          </h4>

                          {/* Price & MRP */}
                          <div className="flex items-baseline gap-1.5 mt-1.5">
                            <span className="font-extrabold font-mono text-xs sm:text-sm text-slate-900 dark:text-white">
                              ₹{p.price}
                            </span>
                            {mrp > p.price && (
                              <span className="font-mono text-[10px] text-slate-400 dark:text-zinc-500 line-through">
                                ₹{mrp}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Green ADD Button */}
                        <button
                          type="button"
                          onClick={() => handleAddRecommended(p)}
                          className={`w-full mt-2.5 py-1.5 px-3 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer active:scale-95 ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-[#ecf6e3] dark:bg-[#3f7010]/20 hover:bg-[#3f7010] dark:hover:bg-[#3f7010] text-[#3f7010] dark:text-[#7ec238] hover:text-white dark:hover:text-white border border-[#3f7010]/30"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>{t("shopAdded")}</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>{isHindi ? "जोड़ें" : "ADD"}</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Cart Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 dark:border-[#2c2c2c] bg-slate-50 dark:bg-[#161616] space-y-4">
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <div className="flex justify-between">
                  <span>{t("shopSubtotal")}:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("shopShipping")}:</span>
                  <span>
                    {shippingCharge === 0 ? (
                      <span className="text-[#3f7010] dark:text-[#529116] font-bold">{t("shopFree")}</span>
                    ) : (
                      `₹${shippingCharge}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white pt-2.5 border-t border-slate-200 dark:border-[#2c2c2c]">
                  <span>{t("shopTotal")}:</span>
                  <span className="text-[#3f7010] dark:text-[#529116] font-mono text-lg">
                    ₹{cartFinalTotal}
                  </span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{t("shopProceedToCheckout")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};
