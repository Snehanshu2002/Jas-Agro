"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ShopVideoItem } from "@/data/shopVideos";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { AddToCartButton } from "./AddToCartButton";
import {
  X,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Pause,
  Sparkles,
  Heart,
  Share2,
  Check,
  Star,
  ShoppingBag,
} from "lucide-react";

interface ShopVideoModalProps {
  videos: ShopVideoItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ShopVideoModal: React.FC<ShopVideoModalProps> = ({
  videos,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";
  const { addToCart, getItemQuantity } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [showPlayStateFeedback, setShowPlayStateFeedback] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Sync index when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsPlaying(true);
      setProgress(0);
      setShowDetailModal(false);
      setActiveImageIndex(0);
    }
  }, [initialIndex, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const currentVideo = videos[currentIndex] || videos[0];
  const matchedProduct = currentVideo?.product;
  const isFav = matchedProduct ? isWishlisted(matchedProduct.id) : false;

  const galleryImages: string[] = matchedProduct
    ? (matchedProduct.galleryImages && matchedProduct.galleryImages.length > 0)
      ? matchedProduct.galleryImages
      : [matchedProduct.img]
    : [];

  const handleNext = useCallback(() => {
    setProgress(0);
    setShowDetailModal(false);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(true);
  }, [videos.length]);

  const handlePrev = useCallback(() => {
    setProgress(0);
    setShowDetailModal(false);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(true);
  }, [videos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showDetailModal) {
          setShowDetailModal(false);
        } else {
          onClose();
        }
      } else if (!showDetailModal && e.key === "ArrowRight") {
        handleNext();
      } else if (!showDetailModal && e.key === "ArrowLeft") {
        handlePrev();
      } else if (!showDetailModal && (e.key === " " || e.key === "k")) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (!showDetailModal && e.key === "m") {
        setIsMuted((m) => !m);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showDetailModal, handleNext, handlePrev, onClose]);

  // Play/Pause effect on current video
  useEffect(() => {
    if (!isOpen || !videoRef.current) return;

    if (showDetailModal) {
      videoRef.current.pause();
      return;
    }

    if (isPlaying) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    } else {
      videoRef.current.pause();
    }
  }, [currentIndex, isPlaying, isOpen, showDetailModal]);

  const togglePlayPause = () => {
    if (showDetailModal) return;
    setIsPlaying((prev) => !prev);
    setShowPlayStateFeedback(true);
    setTimeout(() => setShowPlayStateFeedback(false), 700);
  };

  // Video progress tracking
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration > 0) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  // Auto-next when video finishes naturally
  const handleVideoEnded = () => {
    handleNext();
  };

  // Add to cart handler
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!matchedProduct || matchedProduct.outOfStock) return;

    addToCart(matchedProduct, 1);
    setJustAddedId(matchedProduct.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1800);
  };

  // Open product detail overlay on the same page
  const handleOpenProductDetail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDetailModal(true);
    setActiveImageIndex(0);
    setIsPlaying(false);
  };

  // WhatsApp Contact Handler
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const productName = matchedProduct ? matchedProduct.title : "JAS Agro Products";
    const text = `Hi JAS Agro, I am watching your video about ${productName} and would like more details.`;
    window.open(`https://wa.me/917372926623?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Wishlist Toggle Handler
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (matchedProduct) {
      toggleWishlist(matchedProduct.id);
    }
  };

  // Share Handler (Web Share API with Clipboard fallback)
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!matchedProduct) return;

    const shareUrl = typeof window !== "undefined"
      ? `${window.location.origin}/shop/product/${matchedProduct.slug}`
      : `http://shop.jasagro.com/product/${matchedProduct.slug}`;

    if (navigator.share) {
      navigator
        .share({
          title: matchedProduct.title,
          text: `Check out ${matchedProduct.title} on JAS Agro!`,
          url: shareUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 2200);
      });
    }
  };

  // Touch swipe support for main video
  const handleTouchStart = (e: React.TouchEvent) => {
    if (showDetailModal) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showDetailModal || touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !currentVideo) return null;

  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
  const nextIndex = (currentIndex + 1) % videos.length;
  const prevVideo = videos[prevIndex];
  const nextVideo = videos[nextIndex];

  const discountPercent =
    matchedProduct && matchedProduct.originalPrice
      ? Math.round(
          ((matchedProduct.originalPrice - matchedProduct.price) /
            matchedProduct.originalPrice) *
            100
        )
      : 0;

  const quantityInCart = matchedProduct ? getItemQuantity(matchedProduct.id) : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video Shopping Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Toast Notification for Clipboard Copy */}
      {copiedToast && (
        <div className="fixed top-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 text-white border border-white/20 shadow-2xl backdrop-blur-md animate-in slide-in-from-top duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold">
            {t("shopLinkCopied")}
          </span>
        </div>
      )}

      {/* Main Full-Screen Layout Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center px-2 sm:px-12 py-2 sm:py-4 max-w-7xl mx-auto">
        {/* Large Previous Arrow (Desktop & Tablet) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous video"
          className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md items-center justify-center transition-all shadow-2xl cursor-pointer active:scale-90 border border-white/15"
        >
          <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8 -translate-x-0.5" />
        </button>

        {/* Previous Video Preview Card (Desktop Side Preview) */}
        {prevVideo && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden lg:block relative shrink-0 h-[380px] xl:h-[450px] aspect-[9/16] w-auto rounded-2xl overflow-hidden opacity-30 hover:opacity-60 transition-all duration-300 cursor-pointer mr-6 shadow-2xl scale-95 border border-white/10 bg-zinc-900 group"
          >
            <video
              src={prevVideo.videoSrc}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-4">
              <span className="text-white text-xs font-semibold line-clamp-1">
                {isHindi ? prevVideo.titleHi : prevVideo.title}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                <ChevronLeft className="w-5 h-5" />
              </span>
            </div>
          </div>
        )}

        {/* 1. STRICT 9:16 PORTRAIT VIDEO VIEWER CONTAINER */}
        <div
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[84vh] max-h-[760px] min-h-[480px] aspect-[9/16] w-auto max-w-[calc(100vw-16px)] rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/15 flex flex-col justify-between isolate select-none shrink-0"
        >
          {/* TOP VIDEO PROGRESS TIMELINE */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-white/20 z-30 overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#ffb703] via-[#ffd166] to-[#ffb703] transition-all duration-100 ease-linear rounded-r-full shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Active Video Player */}
          <div
            onClick={togglePlayPause}
            className="absolute inset-0 w-full h-full cursor-pointer bg-black"
          >
            <video
              ref={videoRef}
              key={currentVideo.id}
              src={currentVideo.videoSrc}
              autoPlay
              playsInline
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover"
            />

            {/* Play/Pause Feedback Animation Overlay */}
            {showPlayStateFeedback && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 animate-in zoom-in-50 fade-in duration-200">
                <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-2xl">
                  {isPlaying ? (
                    <Play className="w-7 h-7 fill-white ml-1" />
                  ) : (
                    <Pause className="w-7 h-7 fill-white" />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* TOP CONTROLS BAR */}
          <div className="relative z-20 flex items-center justify-between p-3 sm:p-3.5 pt-3.5 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-auto">
            {/* Farm Tag / Video Info */}
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-white border border-white/15">
                <Sparkles className="w-3 h-3 text-[#ffb703]" />
                <span className="truncate max-w-[130px] sm:max-w-[160px]">
                  {isHindi ? currentVideo.titleHi : currentVideo.title}
                </span>
              </span>
            </div>

            {/* Action Buttons: Sound & Close */}
            <div className="flex items-center gap-1.5">
              {/* Mute / Unmute Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted((prev) => !prev);
                }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                title={isMuted ? "Unmute" : "Mute"}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 cursor-pointer active:scale-95"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#ffb703]" />
                )}
              </button>

              {/* Close Modal Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                aria-label="Close video viewer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/55 hover:bg-rose-600 text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 cursor-pointer active:scale-95"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT-SIDE VERTICAL ACTIONS (WhatsApp, Favourite, Share) */}
          <div className="absolute right-2 sm:right-3 bottom-28 sm:bottom-32 z-30 flex flex-col items-center gap-3 select-none pointer-events-auto">
            {/* Action A: Talk to us (WhatsApp) */}
            <div className="flex flex-col items-center group">
              <button
                type="button"
                onClick={handleWhatsApp}
                aria-label="Talk to us on WhatsApp"
                title="Chat with us on WhatsApp"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl transition-transform active:scale-90 cursor-pointer"
              >
                <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
              <span className="text-[10px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-0.5 tracking-tight">
                {t("shopTalkToUs")}
              </span>
            </div>

            {/* Action B: Add to Favourite */}
            <div className="flex flex-col items-center group">
              <button
                type="button"
                onClick={handleToggleWishlist}
                aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
                title={isFav ? "In Favourites" : "Add to Favourites"}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl transition-transform active:scale-90 cursor-pointer border ${
                  isFav
                    ? "bg-[#f43f5e]/25 border-[#f43f5e]/80 text-[#f43f5e]"
                    : "bg-black/55 hover:bg-black/80 border-white/20 text-white"
                }`}
              >
                <Heart
                  className={`w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors ${
                    isFav ? "fill-[#f43f5e] text-[#f43f5e]" : "text-white"
                  }`}
                />
              </button>
              <span className="text-[10px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-0.5 tracking-tight">
                {isFav ? t("shopSaved") : t("shopFavourite")}
              </span>
            </div>

            {/* Action C: Share */}
            <div className="flex flex-col items-center group">
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share product"
                title="Share this product"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/55 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl transition-transform active:scale-90 cursor-pointer"
              >
                <Share2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
              </button>
              <span className="text-[10px] font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-0.5 tracking-tight">
                {t("shopShare")}
              </span>
            </div>
          </div>

          {/* 2. COMPACT BOTTOM WHITE PRODUCT CARD */}
          <div className="relative z-20 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-auto">
            {matchedProduct ? (
              <div
                onClick={handleOpenProductDetail}
                className="w-full bg-white text-slate-900 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-200/90 transition-all cursor-pointer hover:shadow-2xl hover:border-slate-300"
              >
                {/* Product Info Row */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {/* Product Thumbnail */}
                  <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-slate-50 p-0.5 border border-slate-200 flex items-center justify-center shadow-xs">
                    <img
                      src={matchedProduct.img}
                      alt={matchedProduct.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title & Pricing */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-[11px] sm:text-xs text-slate-900 line-clamp-1 leading-tight hover:text-[#3f7010] transition-colors">
                        {isHindi ? matchedProduct.titleHi : matchedProduct.title}
                      </span>
                      <button
                        type="button"
                        onClick={handleOpenProductDetail}
                        aria-label="View product details"
                        className="text-slate-400 hover:text-slate-900 transition-colors shrink-0 p-0.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Price and Discount */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="font-extrabold text-xs sm:text-sm text-[#3f7010]">
                        ₹{matchedProduct.price}
                      </span>
                      {matchedProduct.originalPrice && (
                        <span className="text-[10px] sm:text-[11px] text-slate-400 line-through">
                          ₹{matchedProduct.originalPrice}
                        </span>
                      )}
                      {discountPercent > 0 && (
                        <span className="text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded">
                          -{discountPercent}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* ADD TO CART Action Button */}
                <div className="mt-2">
                  <AddToCartButton
                    disabled={matchedProduct.outOfStock}
                    onClick={handleAddToCart}
                    justAdded={justAddedId === matchedProduct.id}
                    quantityInCart={quantityInCart}
                    isHindi={isHindi}
                    className="w-full py-1.5 sm:py-2 text-[11px] sm:text-xs shadow-xs"
                    iconClassName="w-3.5 h-3.5 shrink-0"
                  />
                </div>
              </div>
            ) : (
              <div className="p-2 bg-white text-slate-900 rounded-xl text-xs text-center border border-slate-200 font-medium">
                <span>{isHindi ? currentVideo.titleHi : currentVideo.title}</span>
              </div>
            )}
          </div>

          {/* 3. SAME-PAGE IN-VIEWER PRODUCT DETAIL OVERLAY (Natural Content Height - NO Empty Blank Space) */}
          {showDetailModal && matchedProduct && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-2.5 bottom-2.5 sm:inset-x-3.5 sm:bottom-3.5 max-h-[92%] z-40 bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 p-3 sm:p-3.5 flex flex-col overflow-y-auto shop-scrollbar-y animate-in zoom-in-95 fade-in duration-200"
            >
              {/* Header: Category Badge + Close Button */}
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#3f7010] bg-[#3f7010]/10 px-2 py-0.5 rounded-full">
                  {isHindi ? matchedProduct.categoryHi : matchedProduct.category}
                </span>

                <button
                  type="button"
                  onClick={() => setShowDetailModal(false)}
                  aria-label="Back to video"
                  title="Close and return to video"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Multiple Images Gallery Carousel with PROMINENT Left/Right Arrows */}
              <div className="relative mt-2">
                {/* Main Active Image Display */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square max-h-[190px] sm:max-h-[210px] rounded-xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <img
                    src={galleryImages[activeImageIndex] || matchedProduct.img}
                    alt={matchedProduct.title}
                    className="w-full h-full object-contain p-2"
                  />

                  {/* Image Counter Badge */}
                  {galleryImages.length > 1 && (
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-bold backdrop-blur-xs">
                      {activeImageIndex + 1} / {galleryImages.length}
                    </span>
                  )}

                  {/* Left/Right Navigation Arrows for Multi-image browsing */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) =>
                            (prev - 1 + galleryImages.length) % galleryImages.length
                          );
                        }}
                        aria-label="Previous photo"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform border border-slate-200/80 z-10"
                      >
                        <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) =>
                            (prev + 1) % galleryImages.length
                          );
                        }}
                        aria-label="Next photo"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-md flex items-center justify-center cursor-pointer active:scale-90 transition-transform border border-slate-200/80 z-10"
                      >
                        <ChevronRight className="w-5 h-5 translate-x-0.5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Horizontal Thumbnail Previews Row */}
                {galleryImages.length > 1 && (
                  <div className="flex items-center gap-1.5 mt-1.5 overflow-x-auto shop-scrollbar-x pb-0.5">
                    {galleryImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative shrink-0 w-10 h-10 rounded-lg overflow-hidden border p-0.5 transition-all bg-slate-50 cursor-pointer ${
                          activeImageIndex === idx
                            ? "border-[#3f7010] ring-2 ring-[#3f7010]/30 scale-105"
                            : "border-slate-200 opacity-65 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Preview ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Titles, Rating, Pricing & Description */}
              <div className="mt-2 space-y-1">
                <div className="flex items-start justify-between gap-1.5">
                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                    {isHindi ? matchedProduct.titleHi : matchedProduct.title}
                  </h3>
                  <Link
                    href={`/shop/product/${matchedProduct.slug}`}
                    target="_blank"
                    aria-label="Open full product page"
                    title="Open full page in new tab"
                    className="text-slate-400 hover:text-slate-900 transition-colors shrink-0 p-0.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {matchedProduct.rating && (
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{matchedProduct.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({matchedProduct.reviewsCount || 18} {t("shopReviews")})
                    </span>
                  </div>
                )}

                {/* Pricing Row */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="font-black text-sm sm:text-base text-[#3f7010]">
                    ₹{matchedProduct.price}
                  </span>
                  {matchedProduct.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ₹{matchedProduct.originalPrice}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-md">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                  {isHindi ? matchedProduct.descriptionHi : matchedProduct.description}
                </p>
              </div>

              {/* Bottom Actions Row: ADD TO CART + MORE INFO + BAG (Immediately following content!) */}
              <div className="pt-2.5 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <AddToCartButton
                      disabled={matchedProduct.outOfStock}
                      onClick={handleAddToCart}
                      justAdded={justAddedId === matchedProduct.id}
                      quantityInCart={quantityInCart}
                      className="w-full py-2 text-xs shadow-sm"
                      iconClassName="w-4 h-4 shrink-0"
                    />
                  </div>

                  <Link
                    href={`/shop/product/${matchedProduct.slug}`}
                    className="px-3.5 py-2 rounded-full bg-slate-700 hover:bg-slate-800 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm flex items-center gap-1"
                  >
                    <span>{t("shopMoreInfo")}</span>
                  </Link>

                  {quantityInCart > 0 && (
                    <span className="relative shrink-0 w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center text-xs font-bold">
                      <ShoppingBag className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#3f7010] text-white text-[9px] flex items-center justify-center font-bold">
                        {quantityInCart}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Next Video Preview Card (Desktop Side Preview) */}
        {nextVideo && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden lg:block relative shrink-0 h-[380px] xl:h-[450px] aspect-[9/16] w-auto rounded-2xl overflow-hidden opacity-30 hover:opacity-60 transition-all duration-300 cursor-pointer ml-6 shadow-2xl scale-95 border border-white/10 bg-zinc-900 group"
          >
            <video
              src={nextVideo.videoSrc}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-4">
              <span className="text-white text-xs font-semibold line-clamp-1">
                {isHindi ? nextVideo.titleHi : nextVideo.title}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                <ChevronRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        )}

        {/* Large Next Arrow (Desktop & Tablet) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next video"
          className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md items-center justify-center transition-all shadow-2xl cursor-pointer active:scale-90 border border-white/15"
        >
          <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
