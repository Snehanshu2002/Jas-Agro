import React, { useState, useEffect, useMemo } from "react";
import { ShopProduct } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { DeliveryChecker } from "@/components/shop/DeliveryChecker";
import {
  X,
  Star,
  ShoppingCart,
  ExternalLink,
  Plus,
  Minus,
  Check,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AddToCartButton } from "./AddToCartButton";

interface ProductQuickViewModalProps {
  product: ShopProduct | null;
  onClose: () => void;
  onAddToCart?: (product: ShopProduct, quantity: number) => void;
  onBuyNow?: (product: ShopProduct, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart: propOnAddToCart,
}) => {
  const { language, t } = useLanguage();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart: contextAddToCart } = useCart();
  const onAddToCart = propOnAddToCart || contextAddToCart;
  const isHindi = language === "hi";

  const [quantity, setQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Gallery images collection
  const images = useMemo(() => {
    if (!product) return [];
    if (product.galleryImages && product.galleryImages.length > 0) {
      const list = [...product.galleryImages];
      if (product.img && !list.includes(product.img)) {
        list.unshift(product.img);
      }
      return list;
    }
    return [product.img];
  }, [product]);

  useEffect(() => {
    setQuantity(1);
    setJustAdded(false);
    setActiveImageIndex(0);
  }, [product]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        } else if (e.key === "ArrowLeft" && images.length > 1) {
          setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight" && images.length > 1) {
          setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [product, onClose, images.length]);

  if (!product) return null;

  const title = isHindi ? product.titleHi : product.title;
  const desc = isHindi ? product.descriptionHi : product.description;
  const category = isHindi ? product.categoryHi : product.category;
  const unit = isHindi ? product.unitHi : product.unit;

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 850);
  };

  const isFav = isWishlisted(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#282828] rounded-2xl sm:rounded-3xl max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-[920px] w-full p-5 sm:p-7 md:p-8 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-150 max-h-[92vh] overflow-y-auto md:overflow-hidden shop-scrollbar-x text-slate-900 dark:text-white transition-colors duration-200"
      >
        {/* Top-Right Action Buttons (Wishlist & Close) */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={isFav ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
            title={isFav ? "Remove from favourites" : "Add to favourites"}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-[#222] hover:bg-slate-200 dark:hover:bg-[#2c2c2c] border border-slate-200 dark:border-[#333] transition-colors cursor-pointer shadow-xs ${
              isFav ? "text-red-500" : "text-slate-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400"
            }`}
          >
            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close dialog"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-[#222] hover:bg-slate-200 dark:hover:bg-[#2c2c2c] text-slate-600 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white border border-slate-200 dark:border-[#333] transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column: Product Image Gallery Area */}
          <div className="space-y-2.5">
            {/* Main Image Container */}
            <div className="group/img relative aspect-square bg-slate-50 dark:bg-[#101010] rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-[#222] p-4 sm:p-6 flex items-center justify-center overflow-hidden">
              <img
                src={images[activeImageIndex] || product.img}
                alt={`${title} - view ${activeImageIndex + 1}`}
                className="max-h-full max-w-full object-contain select-none transition-transform duration-300 hover:scale-105"
              />

              {/* Discount Tag */}
              {discountPercent > 0 && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#3f7010] text-white font-mono text-xs font-bold shadow-sm z-10 pointer-events-none">
                  {discountPercent}% OFF
                </span>
              )}

              {/* Gallery Navigation: Left & Right Arrows (Only when images > 1) */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous product image"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md z-10 border border-white/10"
                  >
                    <ChevronLeft className="w-5 h-5 pointer-events-none" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next product image"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md z-10 border border-white/10"
                  >
                    <ChevronRight className="w-5 h-5 pointer-events-none" />
                  </button>

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white font-mono text-[11px] font-bold z-10 pointer-events-none border border-white/10">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Indicator Dots / Mini Pills */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-1.5 pt-0.5 select-none">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "w-6 bg-[#3f7010] dark:bg-[#7ec238]"
                        : "w-1.5 bg-slate-300 dark:bg-[#333] hover:bg-slate-400 dark:hover:bg-[#444]"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information Details */}
          <div className="space-y-3.5 md:max-h-[425px] md:overflow-y-auto md:pr-2.5 shop-scrollbar-x">
            <div className="space-y-2">
              {/* Category & Badges with Safe Clearance for Close Buttons */}
              <div className="flex items-center gap-2 pr-20 sm:pr-24 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] text-xs font-bold border border-[#3f7010]/20 dark:border-[#3f7010]/30 uppercase tracking-wider">
                  {category}
                </span>
                {product.isPopular && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-500/30">
                    {t("shopBestSeller")}
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white leading-snug tracking-tight">
                {title}
              </h2>

              {/* Rating, Reviews & Pack Size */}
              <div className="flex items-center gap-2 text-xs sm:text-sm flex-wrap">
                <div className="flex items-center text-amber-500 font-bold gap-1 bg-amber-500/10 dark:bg-amber-500/15 px-2 py-0.5 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-mono text-xs">{product.rating || 4.9}</span>
                </div>
                <span className="text-slate-500 dark:text-zinc-400">
                  ({product.reviewsCount || 38} {t("shopReviews")})
                </span>
                <span className="text-slate-300 dark:text-zinc-600">•</span>
                <span className="font-medium text-slate-600 dark:text-zinc-300 text-xs sm:text-sm">
                  {unit} {t("shopPack")}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed max-h-20 overflow-y-auto">
              {desc}
            </p>

            {/* Price & Action Section */}
            <div className="pt-2.5 border-t border-slate-200 dark:border-[#262626] space-y-3">
              {/* Price Details */}
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                  ₹{product.price * quantity}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-slate-400 dark:text-zinc-500 line-through font-mono">
                    ₹{product.originalPrice * quantity}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-mono font-bold text-xs">
                    {t("shopSave")} {discountPercent}%
                  </span>
                )}
              </div>

              {/* Stepper + Single Primary Action: Add to Cart */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Quantity Stepper Pill */}
                <div className="h-11 sm:h-12 flex items-center rounded-full bg-slate-100 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2e2e2e] p-1 shrink-0 shadow-2xs select-none">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setQuantity((q) => Math.max(1, q - 1));
                    }}
                    aria-label="Decrease quantity"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-[#282828] hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  >
                    <Minus className="w-3.5 h-3.5 pointer-events-none shrink-0" />
                  </button>
                  <span className="w-8 sm:w-9 text-center font-mono font-bold text-sm sm:text-base text-slate-900 dark:text-white select-none pointer-events-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setQuantity((q) => q + 1);
                    }}
                    aria-label="Increase quantity"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-[#282828] hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 pointer-events-none shrink-0" />
                  </button>
                </div>

                {/* Primary Add to Cart Button */}
                <AddToCartButton
                  disabled={product.outOfStock}
                  onClick={handleAddToCart}
                  justAdded={justAdded}
                  customLabel={t("shopAddToCart")}
                  className="h-11 sm:h-12 flex-1 px-4 sm:px-5 text-xs sm:text-sm shadow-md"
                />
              </div>

              {/* Delivery Serviceability Checker */}
              <DeliveryChecker productId={product.id} category={product.category} />

              {/* External Shop Reference Link (if exists) */}
              {product.shopUrl && (
                <div className="pt-2 text-center">
                  <a
                    href={product.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors"
                  >
                    <span>View official product listing on shop.jasagro.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
