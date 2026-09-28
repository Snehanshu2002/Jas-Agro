"use client";

import React from "react";
import { ShopProduct } from "@/data/shopProducts";
import { ProductCard } from "./ProductCard";
import { RefreshCw, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CartItem {
  product: ShopProduct;
  quantity: number;
}

interface ProductGridProps {
  products: ShopProduct[];
  viewMode?: "grid" | "list";
  isLoading?: boolean;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: ShopProduct) => void;
  onAddToCart: (product: ShopProduct, quantity: number) => void;
  onBuyNow: (product: ShopProduct, quantity: number) => void;
  cart: CartItem[];
  onResetFilters: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  viewMode = "grid",
  isLoading = false,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  onBuyNow,
  cart,
  onResetFilters,
}) => {
  const { t } = useLanguage();

  // Skeleton Loading State
  if (isLoading) {
    if (viewMode === "list") {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-[#2c2c2c] rounded-2xl sm:rounded-3xl p-5 flex flex-col sm:flex-row gap-5 animate-pulse"
            >
              <div className="w-full sm:w-[40%] aspect-square bg-slate-100 dark:bg-zinc-800 rounded-xl" />
              <div className="flex-1 space-y-3 py-2">
                <div className="h-4 bg-slate-100 dark:bg-zinc-800 rounded w-1/4" />
                <div className="h-6 bg-slate-100 dark:bg-zinc-800 rounded w-3/4" />
                <div className="h-3 bg-slate-100 dark:bg-zinc-800 rounded w-full" />
                <div className="h-8 bg-slate-100 dark:bg-zinc-800 rounded w-1/3 pt-4" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3.5 sm:gap-x-4 lg:gap-x-5 gap-y-5 sm:gap-y-6 lg:gap-y-7">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-[#2c2c2c] rounded-2xl p-3.5 space-y-3 animate-pulse"
          >
            <div className="aspect-square bg-slate-100 dark:bg-zinc-800 rounded-xl w-full" />
            <div className="h-4 bg-slate-100 dark:bg-zinc-800 rounded-md w-3/4" />
            <div className="h-3 bg-slate-100 dark:bg-zinc-800 rounded-md w-1/2" />
            <div className="h-7 bg-slate-100 dark:bg-zinc-800 rounded-md w-full pt-2" />
          </div>
        ))}
      </div>
    );
  }

  // Empty State
  if (products.length === 0) {
    return (
      <div className="py-14 px-4 text-center bg-white dark:bg-[#1a1a1a] rounded-3xl border border-slate-200 dark:border-[#2a2a2a] space-y-4 max-w-lg mx-auto shadow-sm transition-colors duration-200">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
          <Search className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold font-heading text-slate-900 dark:text-white">
            {t("shopNoProductsFound")}
          </h3>
          <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
            {t("shopNoProductsDesc")}
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t("shopResetAllFilters")}</span>
          </button>
        </div>
      </div>
    );
  }

  // LIST VIEW Container (Exactly 2 product cards per row on desktop)
  if (viewMode === "list") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 w-full">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.product.id === product.id);
          const quantityInCart = cartItem ? cartItem.quantity : 0;
          const isWishlisted = wishlist.includes(product.id);

          return (
            <ProductCard
              key={product.id}
              product={product}
              viewMode="list"
              isWishlisted={isWishlisted}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
              quantityInCart={quantityInCart}
            />
          );
        })}
      </div>
    );
  }

  // GRID VIEW Container (Default 4 columns)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3.5 sm:gap-x-4 lg:gap-x-5 gap-y-5 sm:gap-y-6 lg:gap-y-7">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.product.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;
        const isWishlisted = wishlist.includes(product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            viewMode="grid"
            isWishlisted={isWishlisted}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
            quantityInCart={quantityInCart}
          />
        );
      })}
    </div>
  );
};
