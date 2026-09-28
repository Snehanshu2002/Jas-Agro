"use client";

import React from "react";
import { CartItem } from "./CartDrawer";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, Plus, Minus, ArrowRight, Trash2 } from "lucide-react";

interface ShopCartSummaryProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCart: () => void;
  cartSubtotal: number;
  totalCartCount: number;
}

export const ShopCartSummary: React.FC<ShopCartSummaryProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCart,
  cartSubtotal,
  totalCartCount,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  if (cart.length === 0) {
    return null;
  }

  return (
    <section
      aria-label={isHindi ? "वर्तमान कार्ट सारांश" : "Current Cart Order Summary"}
      className="w-full bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs transition-colors duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 dark:border-[#262626]">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </div>
          <div className="min-w-0">
            <h2 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
              {t("shopCartTitle")}
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 hidden xs:block truncate">
              {isHindi ? "ऑर्डर सारांश और त्वरित मात्रा समायोजन" : "Order summary & quick quantity adjustments"}
            </p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-mono text-xs font-bold whitespace-nowrap shrink-0">
          {totalCartCount} {isHindi ? t("shopCartItems") : totalCartCount === 1 ? t("shopCartItem") : t("shopCartItems")}
        </span>
      </div>

      {/* Grouped Cart Items List (Normal Document Flow) */}
      <div className="divide-y divide-slate-100 dark:divide-[#242424] py-1">
        {cart.map((item) => {
          const title = isHindi ? item.product.titleHi : item.product.title;
          const unit = isHindi ? item.product.unitHi : item.product.unit;
          const itemTotal = item.product.price * item.quantity;

          return (
            <div
              key={item.product.id}
              className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 transition-colors min-w-0"
            >
              {/* Product Thumbnail & Details */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-slate-50 dark:bg-white overflow-hidden p-1 shrink-0 flex items-center justify-center border border-slate-100 dark:border-zinc-700">
                  <img
                    src={item.product.img}
                    alt={title}
                    className="max-h-full max-w-full object-contain select-none"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-[13.5px] font-bold text-slate-900 dark:text-white truncate">
                    {title}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    <span className="font-mono font-semibold text-slate-800 dark:text-zinc-200">
                      ₹{item.product.price}
                    </span>
                    <span>•</span>
                    <span className="truncate">{unit}</span>
                  </div>
                </div>
              </div>

              {/* Controls: Stepper on left, item total on right */}
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 shrink-0 pl-14 sm:pl-0">
                {/* Quantity Stepper: [-] qty [+] */}
                <div className="flex items-center rounded-xl bg-slate-100 dark:bg-[#202020] border border-slate-200 dark:border-[#303030] p-0.5 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.product.id, -1)}
                    aria-label={isHindi ? `${title} की मात्रा घटाएं` : `Decrease quantity of ${title}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:text-red-500 hover:bg-white dark:hover:bg-[#2a2a2a] transition-all cursor-pointer"
                  >
                    {item.quantity === 1 ? (
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <Minus className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <span className="w-7 sm:w-8 text-center font-mono font-bold text-xs sm:text-sm text-slate-900 dark:text-white select-none">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.product.id, 1)}
                    aria-label={isHindi ? `${title} की मात्रा बढ़ाएं` : `Increase quantity of ${title}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:text-[#3f7010] hover:bg-white dark:hover:bg-[#2a2a2a] transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Item Total Price */}
                <div className="text-right sm:min-w-[70px]">
                  <span className="font-mono font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    ₹{itemTotal}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Row: Subtotal & Go to Cart Button */}
      <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
          <span className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            {t("shopSubtotal")}:
          </span>
          <span className="font-mono font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
            ₹{cartSubtotal}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenCart}
          className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
        >
          <span>{isHindi ? "कार्ट देखें" : "Go to Cart"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
