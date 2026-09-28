"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShopProduct } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import {
  Star,
  Heart,
  Eye,
  ShoppingCart,
  Check,
  AlertCircle,
} from "lucide-react";
import { AddToCartButton } from "./AddToCartButton";

interface ProductCardProps {
  product: ShopProduct;
  viewMode?: "grid" | "list";
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
  onQuickView: (product: ShopProduct) => void;
  onAddToCart?: (product: ShopProduct, quantity: number) => void;
  onBuyNow?: (product: ShopProduct, quantity: number) => void;
  quantityInCart?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = "grid",
  isWishlisted: propIsWishlisted,
  onToggleWishlist: propOnToggleWishlist,
  onQuickView,
  onAddToCart: propOnAddToCart,
  quantityInCart: propQuantityInCart,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";
  const { isWishlisted: contextIsWishlisted, toggleWishlist: contextToggleWishlist } = useWishlist();
  const { getItemQuantity, addToCart: contextAddToCart } = useCart();

  const isFav = propIsWishlisted !== undefined ? propIsWishlisted : contextIsWishlisted(product.id);
  const handleToggleFav = propOnToggleWishlist || contextToggleWishlist;
  const quantityInCart = propQuantityInCart !== undefined ? propQuantityInCart : getItemQuantity(product.id);
  const handleAddToCart = propOnAddToCart || contextAddToCart;

  const [justAdded, setJustAdded] = useState<boolean>(false);

  // Gallery images collection for hover slideshow
  const images = React.useMemo(() => {
    if (product.galleryImages && product.galleryImages.length > 0) {
      const list = [...product.galleryImages];
      if (product.img && !list.includes(product.img)) {
        list.unshift(product.img);
      }
      return list;
    }
    return [product.img];
  }, [product]);

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (images.length <= 1) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const title = isHindi ? product.titleHi : product.title;
  const description = isHindi ? product.descriptionHi : product.description;
  const unit = isHindi ? product.unitHi : product.unit;

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  // ========================================================
  // 1. HORIZONTAL LIST VIEW PRESENTATION
  // ========================================================
  if (viewMode === "list") {
    return (
      <article
        onMouseLeave={handleMouseLeave}
        className="group bg-[#1e1e1e] border border-[#2c2c2c] hover:border-[#3f7010]/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center w-full relative min-w-0"
      >
        {/* LEFT: Inset White Image Surface */}
        <Link
          href={`/shop/product/${product.slug}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full sm:w-[42%] md:w-[40%] aspect-square shrink-0 bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 cursor-pointer"
        >
          <img
            src={images[currentImageIndex] || product.img}
            alt={title}
            loading="lazy"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-300 ease-out select-none"
          />

          {/* Out of Stock Overlay */}
          {product.outOfStock && (
            <div className="absolute inset-0 bg-black/75 backdrop-blur-2xs flex items-center justify-center p-2 text-center z-30">
              <span className="px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-bold text-xs sm:text-sm flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{t("shopOutOfStock")}</span>
              </span>
            </div>
          )}

          {/* Top-Left Best Seller Corner Ribbon / Discount Badge */}
          {product.isPopular ? (
            <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden pointer-events-none z-10">
              <div className="absolute top-[12px] sm:top-[16px] left-[-28px] sm:left-[-26px] w-[110px] sm:w-[125px] py-0.5 sm:py-1 -rotate-45 bg-[#4e8218] text-white text-center font-bold text-[9px] sm:text-[10.5px] tracking-wide shadow-xs select-none">
                {t("shopBestSeller")}
              </div>
            </div>
          ) : discountPercent > 0 ? (
            <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-auto z-10">
              <span className="px-2 py-0.5 rounded-md bg-[#3f7010] text-white font-mono text-[10px] sm:text-[11px] font-bold shadow-sm">
                {discountPercent}% OFF
              </span>
            </div>
          ) : null}

          {/* Mobile Quick Action Buttons on Image */}
          <div className="sm:hidden absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label={`Quick view ${title}`}
              className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-2xs text-white flex items-center justify-center shadow-sm cursor-pointer"
            >
              <Eye className="w-4 h-4" />
            </button>
            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleFav(product.id);
              }}
              aria-label={isFav ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
              className={`w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-2xs flex items-center justify-center shadow-sm cursor-pointer ${
                isFav ? "text-red-500" : "text-white"
              }`}
            >
              <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
            </motion.button>
          </div>

          {/* Prominent Sliding Quick View Pill on Image */}
          {!product.outOfStock && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label={`Quick view ${title}`}
              className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 hidden sm:inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:!bg-[#3f7010] hover:!text-white transition-all duration-200 cursor-pointer translate-y-6 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto whitespace-nowrap border border-black/10"
            >
              <Eye className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-colors" />
              <span>{t("shopQuickView")}</span>
            </button>
          )}
        </Link>

        {/* RIGHT: Clean Information Area */}
        <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-3.5 w-full min-w-0 py-1">
          {/* 1. Product Title */}
          <h3 className="min-w-0">
            <Link
              href={`/shop/product/${product.slug}`}
              className="font-sans font-semibold sm:font-bold text-white text-base sm:text-lg md:text-xl leading-snug cursor-pointer group-hover:underline underline-offset-4 decoration-1 hover:text-[#7ec238] transition-all line-clamp-2 break-words block"
            >
              {title}
            </Link>
          </h3>

          {/* 2. Star Rating & Reviews Score */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <div className="flex items-center text-amber-400 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 sm:w-[17px] sm:h-[17px] ${
                    i < Math.floor(product.rating || 5)
                      ? "fill-amber-400 text-amber-400"
                      : "text-zinc-600"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs sm:text-sm text-white font-bold ml-0.5">
              {product.rating || 4.8}
            </span>
            <span className="text-xs text-zinc-400">
              ({product.reviewsCount || 18} {t("shopReviews")})
            </span>
          </div>

          {/* 3. Price Row + Wishlist Button */}
          <div className="flex items-center justify-between gap-3 pt-0.5">
            <div className="flex items-baseline gap-2 sm:gap-2.5 flex-wrap">
              <span className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-white">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-sm md:text-[15px] text-zinc-400 line-through font-mono">
                  ₹{product.originalPrice}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-xs sm:text-[13px] text-[#7ec238] font-mono font-bold">
                  -{discountPercent}%
                </span>
              )}
              <span className="text-xs text-zinc-400 font-medium ml-1">{unit}</span>
            </div>

            {/* Circular Wishlist Button */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleFav(product.id);
              }}
              aria-label={isFav ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
              className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all cursor-pointer shrink-0 ${
                isFav
                  ? "bg-[#f43f5e]/25 border border-[#f43f5e]/60 text-[#f43f5e]"
                  : "bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#f43f5e] hover:bg-[#f43f5e]/25"
              }`}
            >
              <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFav ? "fill-[#f43f5e] text-[#f43f5e]" : ""}`} />
            </motion.button>
          </div>

          {/* 4. Full-Width ADD TO CART Button */}
          <div className="pt-1">
            <AddToCartButton
              disabled={product.outOfStock}
              onClick={handleAddToCartClick}
              justAdded={justAdded}
              quantityInCart={quantityInCart}
              className="w-full py-2.5 sm:py-3 px-4 text-xs sm:text-sm"
              iconClassName="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
            />
          </div>
        </div>
      </article>
    );
  }

  // ========================================================
  // 2. COMPACT VERTICAL GRID VIEW PRESENTATION (DEFAULT)
  // ========================================================
  return (
    <article
      onMouseLeave={handleMouseLeave}
      className="group bg-[#1e1e1e] border border-[#2c2c2c] hover:border-[#3f7010]/80 rounded-2xl sm:rounded-3xl p-3 sm:p-3.5 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative min-w-0 w-full"
    >
      {/* Product Image Surface (Links to product details) */}
      <Link
        href={`/shop/product/${product.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-square w-full bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 cursor-pointer"
      >
        <img
          src={images[currentImageIndex] || product.img}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-300 ease-out select-none"
        />

        {/* Out of Stock Overlay */}
        {product.outOfStock && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-2xs flex items-center justify-center p-2 text-center z-30">
            <span className="px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-bold text-xs sm:text-sm flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t("shopOutOfStock")}</span>
            </span>
          </div>
        )}

        {/* Top-Left Best Seller Corner Ribbon */}
        {product.isPopular && (
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-[12px] sm:top-[16px] left-[-28px] sm:left-[-26px] w-[110px] sm:w-[125px] py-0.5 sm:py-1 -rotate-45 bg-[#4e8218] text-white text-center font-bold text-[9px] sm:text-[10.5px] tracking-wide shadow-xs select-none">
              {t("shopBestSeller")}
            </div>
          </div>
        )}

        {/* Top Badges & Quick Action Icons */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between pointer-events-none z-10">
          {/* Discount Badge if not popular */}
          <div className="flex flex-col gap-1 pointer-events-auto">
            {!product.isPopular && discountPercent > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-[#3f7010] text-white font-mono text-[10px] sm:text-[11px] font-bold shadow-sm">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Quick Actions (Wishlist & Mobile Quick View) */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {/* Mobile-only Quick View button for touch devices */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              aria-label={`Quick view ${title}`}
              className="sm:hidden w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-2xs text-white flex items-center justify-center shadow-sm hover:text-[#7ec238] transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            <motion.button
              whileTap={{ scale: 0.85 }}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggleFav(product.id);
              }}
              aria-label={isFav ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
              title={isFav ? "Remove from favourites" : "Add to favourites"}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-2xs flex items-center justify-center shadow-sm transition-all cursor-pointer ${
                isFav ? "text-red-500" : "text-white hover:text-red-400"
              }`}
            >
              <Heart className={`w-4 h-4 transition-transform ${isFav ? "fill-red-500 text-red-500 scale-110" : ""}`} />
            </motion.button>
          </div>
        </div>

        {/* Larger Sliding Quick View Pill on Hover */}
        {!product.outOfStock && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(product);
            }}
            aria-label={`Quick view ${title}`}
            className="absolute bottom-3 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-20 hidden sm:inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:!bg-[#3f7010] hover:!text-white transition-all duration-200 cursor-pointer translate-y-6 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto whitespace-nowrap border border-black/10"
          >
            <Eye className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-colors" />
            <span>{t("shopQuickView")}</span>
          </button>
        )}
      </Link>

      {/* Product Information Content */}
      <div className="pt-3 pb-1 px-1 flex-1 flex flex-col justify-between space-y-2.5 min-w-0">
        <div className="space-y-1.5 min-w-0">
          {/* Title (Links to product details) */}
          <h3 className="min-w-0">
            <Link
              href={`/shop/product/${product.slug}`}
              className="font-sans font-bold text-white text-[14.5px] sm:text-[16.5px] leading-snug line-clamp-2 cursor-pointer hover:text-[#7ec238] group-hover:underline underline-offset-2 decoration-1 transition-all min-h-[38px] sm:min-h-[44px] break-words block"
            >
              {title}
            </Link>
          </h3>

          {/* Star Rating & Review Count in brackets */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm">
            <div className="flex items-center text-amber-400 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                    i < Math.floor(product.rating || 5)
                      ? "fill-amber-400 text-amber-400"
                      : "text-zinc-600"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs sm:text-sm text-white font-bold ml-0.5">
              {product.rating || 4.8}
            </span>
            <span className="text-xs text-zinc-400">
              ({product.reviewsCount || 18} {t("shopReviews")})
            </span>
          </div>

          {/* Price Hierarchy & Pack Size */}
          <div className="flex items-baseline justify-between pt-0.5 flex-wrap gap-1">
            <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-bold font-mono text-white">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs sm:text-[13px] text-zinc-400 line-through font-mono">
                  ₹{product.originalPrice}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="text-xs sm:text-[13px] text-[#7ec238] font-mono font-bold">
                  -{discountPercent}%
                </span>
              )}
            </div>

            <span className="text-xs text-zinc-400 font-medium ml-auto">{unit}</span>
          </div>
        </div>

        {/* Rounded Green Add to Cart Button (Hover: ripple bubble expanding from mouse-entry point) */}
        <div className="pt-1">
          <AddToCartButton
            disabled={product.outOfStock}
            onClick={handleAddToCartClick}
            justAdded={justAdded}
            quantityInCart={quantityInCart}
            className="w-full py-2.5 sm:py-3 px-4 text-xs sm:text-sm"
          />
        </div>
      </div>
    </article>
  );
};

