"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";
import { getProductExtendedInfo, ProductExtendedInfo } from "@/data/productDetailsExtended";
import { useLanguage } from "@/context/LanguageContext";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartDrawer, CartItem } from "@/components/shop/CartDrawer";
import { CheckoutModal } from "@/components/shop/CheckoutModal";
import { ProductQuickViewModal } from "@/components/shop/ProductQuickViewModal";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { ShopTrustStrip } from "@/components/shop/ShopTrustStrip";
import { ShopNewsletter } from "@/components/shop/ShopNewsletter";
import { ShopFooter } from "@/components/shop/ShopFooter";
import { DeliveryChecker } from "@/components/shop/DeliveryChecker";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import {
  Star,
  Heart,
  ShoppingCart,
  Check,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  RefreshCw,
  Share2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowUp,
  Layers,
  HelpCircle,
  FileText,
  PlayCircle,
  CheckCircle2,
  MessageSquare,
  ThumbsUp,
  Apple,
  Activity,
  Package,
  Info,
} from "lucide-react";

function ProductDetailContent() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { language } = useLanguage();
  const isHindi = language === "hi";

  // Find product by slug
  const product = useMemo(() => {
    return SHOP_PRODUCTS.find((p) => p.slug === slug) || SHOP_PRODUCTS[0];
  }, [slug]);

  // Gallery state
  const galleryImages = useMemo(() => {
    if (product.galleryImages && product.galleryImages.length > 0) {
      const list = [...product.galleryImages];
      if (product.img && !list.includes(product.img)) {
        list.unshift(product.img);
      }
      return list;
    }
    return [product.img];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    setActiveImageIndex(0);
    setZoomLevel(1);
  }, [product]);

  // Cart & Wishlist state
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
  const [quantity, setQuantity] = useState<number>(1);
  const [justAdded, setJustAdded] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const { wishlist, toggleWishlist, wishlistCount } = useWishlist();
  const isFav = wishlist.includes(product.id);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extended Product Information & Dynamic Tabs
  const extendedInfo = useMemo(() => getProductExtendedInfo(product.id), [product.id]);
  const isAgri = extendedInfo?.productType === "agriculture";

  type ProductTabKey =
    | "description"
    | "ingredients"
    | "nutrition"
    | "specifications"
    | "howToUse"
    | "storage"
    | "shipping"
    | "returns"
    | "faqs";

  const [activeTab, setActiveTab] = useState<ProductTabKey>("description");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic Tabs List respecting product classification (food vs agri)
  const tabList = useMemo(() => {
    const list: { key: ProductTabKey; label: string; labelHi: string; icon: React.ReactNode }[] = [
      {
        key: "description",
        label: "Description",
        labelHi: "उत्पाद विवरण",
        icon: <FileText className="w-4 h-4" />
      }
    ];

    if (!isAgri) {
      list.push({
        key: "ingredients",
        label: "Ingredients",
        labelHi: "सामग्री व एलर्जी",
        icon: <Apple className="w-4 h-4" />
      });
      list.push({
        key: "nutrition",
        label: "Nutrition",
        labelHi: "पोषण मूल्य",
        icon: <Activity className="w-4 h-4" />
      });
    }

    list.push({
      key: "specifications",
      label: isAgri ? "Crop Specs" : "Specifications",
      labelHi: isAgri ? "कृषि विशिष्टताएँ" : "विशिष्टताएँ",
      icon: <Layers className="w-4 h-4" />
    });

    list.push({
      key: "howToUse",
      label: isAgri
        ? (extendedInfo?.howToUse?.guideTitle || product.howToUseOrGrow?.title || "Cultivation Guide")
        : (extendedInfo?.howToUse?.guideTitle || product.howToUseOrGrow?.title || "How to Use"),
      labelHi: isAgri
        ? (extendedInfo?.howToUse?.guideTitleHi || product.howToUseOrGrow?.titleHi || "खेती व उपयोग विधि")
        : (extendedInfo?.howToUse?.guideTitleHi || product.howToUseOrGrow?.titleHi || "उपयोग विधि"),
      icon: <Sparkles className="w-4 h-4" />
    });

    list.push({
      key: "storage",
      label: "Storage",
      labelHi: "भंडारण निर्देश",
      icon: <Package className="w-4 h-4" />
    });

    list.push({
      key: "shipping",
      label: "Shipping & Delivery",
      labelHi: "शिपिंग व डिलीवरी",
      icon: <Truck className="w-4 h-4" />
    });

    list.push({
      key: "returns",
      label: "Returns & Refunds",
      labelHi: "वापसी व गारंटी",
      icon: <RotateCcw className="w-4 h-4" />
    });

    list.push({
      key: "faqs",
      label: "FAQs",
      labelHi: "अक्सर पूछे जाने वाले प्रश्न",
      icon: <HelpCircle className="w-4 h-4" />
    });

    return list;
  }, [isAgri, extendedInfo, product.howToUseOrGrow]);

  // Keep activeTab aligned if changing product to a type without that tab
  useEffect(() => {
    if (!tabList.some((t) => t.key === activeTab)) {
      setActiveTab("description");
    }
  }, [tabList, activeTab]);

  // Frequently Bought Together Bundle state
  const bundleProducts = useMemo(() => {
    if (product.frequentlyBoughtWith && product.frequentlyBoughtWith.length > 0) {
      return product.frequentlyBoughtWith
        .map((id) => SHOP_PRODUCTS.find((p) => p.id === id))
        .filter((p): p is ShopProduct => !!p);
    }
    // Fallback: related from same category
    return SHOP_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 2);
  }, [product]);

  const [selectedBundleIds, setSelectedBundleIds] = useState<string[]>([]);
  useEffect(() => {
    setSelectedBundleIds(bundleProducts.map((p) => p.id));
  }, [bundleProducts]);

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

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    updateQuantity(productId, delta);
  };

  const handleRemoveCartItem = (productId: string) => {
    removeItem(productId);
  };

  const handleAddToCart = (targetProduct: ShopProduct, qty: number = 1) => {
    addToCart(targetProduct, qty);
  };

  const handleAddMainProduct = () => {
    handleAddToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleBuyNow = (targetProduct: ShopProduct, qty: number) => {
    handleAddToCart(targetProduct, qty);
    setIsCheckoutOpen(true);
  };

  const handleAddBundleToCart = () => {
    // Add current product + checked bundle items
    handleAddToCart(product, 1);
    bundleProducts.forEach((bp) => {
      if (selectedBundleIds.includes(bp.id)) {
        handleAddToCart(bp, 1);
      }
    });
    setIsCartOpen(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related products (You might also like)
  const relatedProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  }, [product]);

  // Bundle pricing
  const bundleTotalPrice = useMemo(() => {
    let total = product.price;
    bundleProducts.forEach((bp) => {
      if (selectedBundleIds.includes(bp.id)) total += bp.price;
    });
    return total;
  }, [product, bundleProducts, selectedBundleIds]);

  const bundleOriginalPrice = useMemo(() => {
    let total = product.originalPrice || product.price;
    bundleProducts.forEach((bp) => {
      if (selectedBundleIds.includes(bp.id)) total += bp.originalPrice || bp.price;
    });
    return total;
  }, [product, bundleProducts, selectedBundleIds]);

  const title = isHindi ? product.titleHi : product.title;
  const category = isHindi ? product.categoryHi : product.category;
  const description = isHindi ? product.descriptionHi : product.description;
  const longDescription = isHindi ? (product.longDescriptionHi || product.descriptionHi) : (product.longDescription || product.description);
  const unit = isHindi ? product.unitHi : product.unit;

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const shopBreadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: product.category, url: `/shop?category=${encodeURIComponent(product.category)}` },
    { name: product.title, url: `/shop/product/${product.slug}` },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c0c0c] text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-[#3f7010] selection:text-white font-sans antialiased transition-colors duration-200">
      <ProductSchema
        name={product.title}
        description={product.description}
        image={product.img}
        sku={product.id}
        price={product.price}
        priceCurrency="INR"
        availability="InStock"
        ratingValue={product.rating || 4.9}
        reviewCount={product.reviewsCount || 48}
        url={`/shop/product/${product.slug}`}
      />
      <BreadcrumbSchema items={shopBreadcrumbs} />

      {/* Top Shop Header */}
      <ShopHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartCount}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className={`flex-1 ${cart.length > 0 ? "pb-20 sm:pb-0" : ""}`}>
        {/* Main Box-Model Container (OrganicBazar 1420px container matching shop) */}
        <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px] py-4 sm:py-6 space-y-6 sm:space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 overflow-x-auto whitespace-nowrap py-1 shop-scrollbar-x">
            <Link href="/" className="hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors">
              {isHindi ? "होम" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/shop" className="hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors">
              {isHindi ? "शॉप" : "Shop"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors"
            >
              {category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">
              {title}
            </span>
          </nav>

          {/* Top Section: Gallery (Left) + Product Info (Right) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* LEFT: Product Image Gallery (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-3.5">
              {/* Main Active Image Surface */}
              <div className="relative aspect-square w-full bg-white dark:bg-[#181818] rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-[#2a2a2a] p-4 sm:p-8 flex items-center justify-center overflow-hidden shadow-xs select-none">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${title} view ${activeImageIndex + 1}`}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-full max-w-full object-contain select-none transition-transform duration-200 origin-center"
                />

                {/* Badge: Best Seller or Discount */}
                <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.isPopular && (
                    <span className="px-2.5 py-1 rounded-lg bg-[#3f7010] text-white font-mono text-xs font-bold shadow-sm">
                      {isHindi ? "बेस्टसेलर" : "Best Seller"}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-extrabold shadow-sm">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Top-Right Wishlist Floating Button */}
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={isFav ? `Remove ${title} from favourites` : `Add ${title} to favourites`}
                  className={`absolute top-3.5 right-3.5 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center shadow-md transition-all z-10 cursor-pointer ${
                    isFav
                      ? "bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-900/60 text-red-500"
                      : "bg-white/90 dark:bg-[#252525]/90 border border-slate-200 dark:border-[#333] text-slate-600 dark:text-zinc-300 hover:text-red-500"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? "fill-red-500 text-red-500 scale-110" : ""}`} />
                </motion.button>

                {/* Left/Right Arrow Controls (if galleryImages > 1) */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setZoomLevel(1);
                        setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                      }}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md z-10 border border-white/10"
                    >
                      <ChevronLeft className="w-5 h-5 pointer-events-none" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setZoomLevel(1);
                        setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                      }}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/85 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md z-10 border border-white/10"
                    >
                      <ChevronRight className="w-5 h-5 pointer-events-none" />
                    </button>
                  </>
                )}

                {/* Floating Zoom Controls (Bottom-Left) */}
                <div className="absolute bottom-3.5 left-3.5 flex items-center bg-black/70 backdrop-blur-md rounded-full p-1 border border-white/15 shadow-md z-10 gap-0.5 select-none">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setZoomLevel((z) => Math.min(2.5, +(z + 0.25).toFixed(2)));
                    }}
                    disabled={zoomLevel >= 2.5}
                    aria-label="Zoom in"
                    title="Zoom in (+)"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ZoomIn className="w-4 h-4 pointer-events-none" />
                  </button>

                  <span className="px-1 text-[11px] font-mono font-bold text-white/85 select-none min-w-[36px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setZoomLevel((z) => Math.max(1, +(z - 0.25).toFixed(2)));
                    }}
                    disabled={zoomLevel <= 1}
                    aria-label="Zoom out"
                    title="Zoom out (−)"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ZoomOut className="w-4 h-4 pointer-events-none" />
                  </button>

                  {zoomLevel > 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setZoomLevel(1);
                      }}
                      aria-label="Reset zoom"
                      title="Reset Zoom"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-amber-400 hover:text-amber-300 hover:bg-white/20 transition-all cursor-pointer ml-0.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5 pointer-events-none" />
                    </button>
                  )}
                </div>

                {/* Image Counter Badge (Bottom-Right) if > 1 */}
                {galleryImages.length > 1 && (
                  <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-xs font-bold z-10 pointer-events-none border border-white/15">
                    {activeImageIndex + 1} / {galleryImages.length}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery Row */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-2 select-none shop-scrollbar-x">
                  {galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setZoomLevel(1);
                        setActiveImageIndex(idx);
                      }}
                      aria-label={`View thumbnail ${idx + 1}`}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white dark:bg-[#181818] border-2 p-1.5 overflow-hidden flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? "border-[#3f7010] shadow-sm scale-102 ring-2 ring-[#3f7010]/20"
                          : "border-slate-200 dark:border-[#2a2a2a] opacity-75 hover:opacity-100 hover:border-slate-400"
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Information & Purchase Panel (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              
              {/* Category & Stock Status */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="px-3.5 py-1 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-bold text-xs uppercase tracking-wider border border-[#3f7010]/15 dark:border-[#3f7010]/30">
                  {category}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  {!product.outOfStock ? (
                    <span className="flex items-center gap-2 text-[#3f7010] dark:text-[#7ec238] bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-[#3f7010] dark:bg-[#7ec238] animate-pulse" />
                      {isHindi ? "स्टॉक में उपलब्ध • 24 घंटे में प्रेषित" : "In Stock • Ships in 24 Hours"}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-red-500 bg-red-500/10 px-2.5 py-1 rounded-full">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {isHindi ? "वर्तमान में अनुपलब्ध" : "Out of Stock"}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Title */}
              <h1 className="font-heading font-extrabold text-slate-900 dark:text-white text-2xl sm:text-3xl lg:text-[32px] leading-snug tracking-tight">
                {title}
              </h1>

              {/* Star Rating & Reviews Count */}
              <div className="flex items-center gap-2.5 text-sm">
                <div className="flex items-center text-amber-500 gap-1 bg-amber-500/10 dark:bg-amber-500/15 px-2.5 py-1 rounded-lg">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating || 5) ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-zinc-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono font-bold text-slate-900 dark:text-white text-xs ml-0.5">
                    {product.rating || 4.9}
                  </span>
                </div>
                <span className="text-slate-300 dark:text-zinc-600">•</span>
                <span className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium">
                  {product.reviewsCount || 38} {isHindi ? "समीक्षाएं" : "Customer Reviews"}
                </span>
              </div>

              {/* Price Row Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#242424] space-y-1.5 shadow-xs">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-mono font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-mono text-base sm:text-lg text-slate-400 dark:text-zinc-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/25 text-[#3f7010] dark:text-[#7ec238] font-mono font-bold text-xs">
                      Save {discountPercent}%
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
                    ({unit})
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5 pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3f7010] dark:text-[#7ec238] shrink-0" />
                  <span>{isHindi ? "सभी कर शामिल हैं • ₹499 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी" : "Inclusive of all taxes • Free express shipping on orders above ₹499"}</span>
                </p>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {description}
              </p>

              {/* Key Highlights Checklist */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300 bg-slate-50 dark:bg-[#141414] p-3 rounded-xl border border-slate-100 dark:border-[#242424]">
                      <CheckCircle2 className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-slate-900 dark:text-white">{isHindi ? (h.labelHi || h.label) : h.label}:</strong>{" "}
                        <span className="text-slate-600 dark:text-zinc-300">{isHindi ? (h.valueHi || h.value) : h.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity Selector & Primary Add to Cart Action */}
              <div className="relative z-10 space-y-3 pt-2">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Stepper Pill */}
                  <div className="relative z-10 h-12 sm:h-[50px] flex items-center rounded-full bg-slate-100 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2e2e2e] p-1 shrink-0 shadow-2xs select-none">
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity((prev) => Math.max(1, prev - 1));
                      }}
                      aria-label="Decrease quantity"
                      className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-[#282828] hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-[#333] transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      <Minus className="w-4 h-4 pointer-events-none shrink-0" />
                    </button>

                    <span className="w-10 sm:w-11 text-center font-bold text-sm sm:text-base text-slate-900 dark:text-white select-none pointer-events-none">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity((prev) => prev + 1);
                      }}
                      aria-label="Increase quantity"
                      className="relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-slate-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-[#282828] hover:text-slate-900 dark:hover:text-white active:bg-slate-200 dark:active:bg-[#333] transition-colors duration-150 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 pointer-events-none shrink-0" />
                    </button>
                  </div>

                  {/* Single Primary Action: Add to Cart (Full width of remaining row) */}
                  <AddToCartButton
                    disabled={product.outOfStock}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddMainProduct();
                    }}
                    justAdded={justAdded}
                    isHindi={isHindi}
                    customLabel={isHindi ? "कार्ट में जोड़ें" : "Add to Cart"}
                    className="h-12 sm:h-[50px] flex-1 px-5 sm:px-6 text-xs sm:text-sm shadow-md"
                    iconClassName="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                  />
                </div>

                {/* Secondary Actions: Wishlist & Share */}
                <div className="flex items-center justify-between pt-2.5 text-xs text-slate-600 dark:text-zinc-400 border-t border-slate-100 dark:border-[#222]">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className="flex items-center gap-1.5 hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors cursor-pointer py-1 font-medium"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                    <span>{isFav ? (isHindi ? "पसंदीदा में जोड़ा गया" : "Added to Wishlist") : (isHindi ? "पसंदीदा में जोड़ें" : "Add to Wishlist")}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex items-center gap-1.5 hover:text-[#3f7010] dark:hover:text-[#7ec238] transition-colors cursor-pointer py-1 font-medium"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedLink ? (isHindi ? "लिंक कॉपी हो गया!" : "Link Copied!") : (isHindi ? "शेयर करें" : "Share Product")}</span>
                  </button>
                </div>

                {/* Real-time Delivery & Pincode Serviceability Checker */}
                <DeliveryChecker productId={product.id} category={product.category} />
              </div>

              {/* Trust badges strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-100 dark:border-[#222]">
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-[#222] space-y-1">
                  <ShieldCheck className="w-5 h-5 text-[#3f7010] dark:text-[#7ec238]" />
                  <span className="text-[10.5px] font-bold text-slate-800 dark:text-zinc-200">100% Organic</span>
                </div>
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-[#222] space-y-1">
                  <Truck className="w-5 h-5 text-amber-500" />
                  <span className="text-[10.5px] font-bold text-slate-800 dark:text-zinc-200">Fast Shipping</span>
                </div>
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-[#222] space-y-1">
                  <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10.5px] font-bold text-slate-800 dark:text-zinc-200">Quality Verified</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Frequently Bought Together / Create Bundle */}
          {bundleProducts.length > 0 && (
            <section className="bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4">
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                  {isHindi ? "अक्सर साथ में खरीदे जाने वाले उत्पाद (Bundle Deal)" : "Frequently Bought Together"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {isHindi ? "इन पूरक उत्पादों को एक साथ जोड़ें और समय व डिलीवरी बचाएं।" : "Combine complementary farm products together for a complete wholesome order."}
                </p>
              </div>

              {/* Bundle Items Flow */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2">
                {/* Product Cards Row */}
                <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-3 flex-1 shop-scrollbar-x">
                  {/* Current Main Product Card in Bundle */}
                  <div className="w-36 sm:w-44 shrink-0 bg-slate-50 dark:bg-[#202020] border-2 border-[#3f7010] rounded-2xl p-2.5 space-y-2 relative">
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-[#3f7010] text-white text-[9px] font-bold">
                      This Item
                    </span>
                    <div className="aspect-square bg-white dark:bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden">
                      <img src={product.img} alt={title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">{title}</h4>
                      <p className="font-mono font-bold text-xs text-[#3f7010] dark:text-[#7ec238]">₹{product.price}</p>
                    </div>
                  </div>

                  {bundleProducts.map((bp) => {
                    const isChecked = selectedBundleIds.includes(bp.id);
                    const bpTitle = isHindi ? bp.titleHi : bp.title;
                    return (
                      <React.Fragment key={bp.id}>
                        <div className="text-lg font-bold text-slate-400 shrink-0">+</div>
                        <div
                          onClick={() => {
                            setSelectedBundleIds((prev) =>
                              isChecked ? prev.filter((id) => id !== bp.id) : [...prev, bp.id]
                            );
                          }}
                          className={`w-36 sm:w-44 shrink-0 bg-slate-50 dark:bg-[#202020] border rounded-2xl p-2.5 space-y-2 cursor-pointer transition-all ${
                            isChecked
                              ? "border-[#3f7010] shadow-xs"
                              : "border-slate-200 dark:border-[#303030] opacity-60"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="w-4 h-4 accent-[#3f7010] cursor-pointer"
                            />
                            <span className="text-[10px] text-slate-500 dark:text-zinc-400">{bp.unit}</span>
                          </div>
                          <div className="aspect-square bg-white dark:bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden">
                            <img src={bp.img} alt={bpTitle} className="max-h-full max-w-full object-contain" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">{bpTitle}</h4>
                            <p className="font-mono font-bold text-xs text-slate-900 dark:text-zinc-200">₹{bp.price}</p>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Bundle Summary & Add Button */}
                <div className="w-full lg:w-72 bg-slate-50 dark:bg-[#202020] p-4 rounded-2xl border border-slate-200 dark:border-[#303030] space-y-3 shrink-0">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                      {isHindi ? "कुल बंडल मूल्य:" : "Bundle Total Price:"}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        ₹{bundleTotalPrice}
                      </span>
                      {bundleOriginalPrice > bundleTotalPrice && (
                        <span className="font-mono text-xs text-slate-400 line-through">
                          ₹{bundleOriginalPrice}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#3f7010] dark:text-[#7ec238] font-bold">
                      {selectedBundleIds.length + 1} {isHindi ? "उत्पाद शामिल" : "items selected"}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddBundleToCart}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{isHindi ? "बंडल कार्ट में जोड़ें" : "Add Bundle to Cart"}</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Section: Product Details Tabs (Description, Ingredients, Nutrition, Specifications, How to Use, Storage, Shipping, Returns, FAQs) */}
          <section className="bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 space-y-6">
            {/* Tabs Navigation Bar */}
            <div className="border-b border-slate-200 dark:border-[#262626] pb-3">
              <div
                role="tablist"
                aria-label="Product Information Tabs"
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-0.5"
              >
                {tabList.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      id={`tab-${tab.key}`}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.key}`}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border select-none shrink-0 ${
                        isActive
                          ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm shadow-[#3f7010]/20"
                          : "text-slate-600 dark:text-zinc-400 bg-slate-50 dark:bg-[#1c1c1c] border-slate-200/80 dark:border-[#282828] hover:bg-slate-100 dark:hover:bg-[#252525] hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <span className={isActive ? "text-white" : "text-[#3f7010] dark:text-[#7ec238]"}>
                        {tab.icon}
                      </span>
                      <span>{isHindi ? tab.labelHi : tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tab Panel Content */}
            <div className="min-h-[280px]">
              {/* Tab 1: Description */}
              {activeTab === "description" && (
                <div id="panel-description" role="tabpanel" aria-labelledby="tab-description" className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-4">
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                      {isHindi ? "उत्पाद विवरण एवं विशेषताएं" : "Product Description & Overview"}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                      {longDescription}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  {product.highlights && product.highlights.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#1b1b1b] border border-slate-200/80 dark:border-[#282828] space-y-3">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#3f7010] dark:text-[#7ec238] uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>{isHindi ? "मुख्य लाभ एवं विशेषताएं" : "Key Highlights & Features"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                            <Check className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-slate-900 dark:text-white">
                                {isHindi ? (highlight.labelHi || highlight.label) : highlight.label}:{" "}
                              </span>
                              <span>{isHindi ? (highlight.valueHi || highlight.value) : highlight.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Ingredients & Allergens */}
              {activeTab === "ingredients" && (
                <div id="panel-ingredients" role="tabpanel" aria-labelledby="tab-ingredients" className="space-y-5 animate-in fade-in duration-200">
                  {extendedInfo?.ingredients ? (
                    <>
                      {/* Classification Badge & Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#1b1b1b] border border-slate-200/80 dark:border-[#282828]">
                        <div className="flex items-center gap-3">
                          {/* Green Veg Dot */}
                          <div className="w-6 h-6 border-2 border-emerald-600 dark:border-emerald-500 rounded flex items-center justify-center p-0.5 shrink-0 bg-white dark:bg-[#141414]">
                            <div className="w-3 h-3 bg-emerald-600 dark:bg-emerald-500 rounded-full" />
                          </div>
                          <div>
                            <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">
                              {extendedInfo.ingredients.foodClassification}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                              {isHindi ? "100% शाकाहारी एवं प्राकृतिक कृषि उत्पाद" : "100% Vegetarian pure agricultural food product"}
                            </span>
                          </div>
                        </div>

                        {extendedInfo.ingredients.fssaiInfo && (
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{extendedInfo.ingredients.fssaiInfo}</span>
                          </div>
                        )}
                      </div>

                      {/* Ingredients List */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                          <Apple className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                          <span>{isHindi ? "सामग्री सूची (Ingredients List)" : "Ingredients List"}</span>
                        </h4>

                        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#282828] space-y-3">
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                            {isHindi ? "इस उत्पाद में केवल निम्नलिखित सत्यापित अवयव शामिल हैं:" : "Pure single/multi origin farm ingredients with no added chemical preservatives:"}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {(isHindi && extendedInfo.ingredients.ingredientsListHi
                              ? extendedInfo.ingredients.ingredientsListHi
                              : extendedInfo.ingredients.ingredientsList
                            ).map((ing, i) => (
                              <span
                                key={i}
                                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#232323] text-slate-800 dark:text-zinc-200 text-xs sm:text-sm font-medium border border-slate-200/80 dark:border-[#333]"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Allergen Alert Box */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 space-y-2">
                        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-700 dark:text-amber-400">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{isHindi ? "एलर्जी चेतावनी एवं सूचना" : "Allergen Information"}</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-amber-950 dark:text-amber-100/90 font-medium">
                          {isHindi && extendedInfo.ingredients.allergenInfoHi
                            ? extendedInfo.ingredients.allergenInfoHi
                            : extendedInfo.ingredients.allergenInfo}
                        </p>
                      </div>

                      {/* Manufacturer / Packer details */}
                      {extendedInfo.ingredients.manufacturerDetails && (
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#282828] text-xs text-slate-600 dark:text-zinc-400 space-y-1">
                          <span className="font-bold text-slate-800 dark:text-zinc-200 block">
                            {isHindi ? "निर्माता एवं पैकर विवरण:" : "Marketed & Manufactured By:"}
                          </span>
                          <p>
                            {isHindi && extendedInfo.ingredients.manufacturerDetailsHi
                              ? extendedInfo.ingredients.manufacturerDetailsHi
                              : extendedInfo.ingredients.manufacturerDetails}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-center space-y-2">
                      <Info className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {isHindi ? "सामग्री की जानकारी उपलब्ध नहीं है।" : "Information not provided"}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Nutrition */}
              {activeTab === "nutrition" && (
                <div id="panel-nutrition" role="tabpanel" aria-labelledby="tab-nutrition" className="space-y-5 animate-in fade-in duration-200">
                  {extendedInfo?.nutrition ? (
                    <div className="space-y-4">
                      {/* Nutrition Facts Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828]">
                        <div>
                          <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                            {isHindi ? "पोषण मूल्य तालिका (Nutrition Facts)" : "Nutrition Information"}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                            {isHindi
                              ? `सर्विंग साइज: ${extendedInfo.nutrition.servingSizeHi || extendedInfo.nutrition.servingSize || "100g"} • कुल सर्विंग्स: ${extendedInfo.nutrition.servingsPerPack || "विभिन्न"}`
                              : `Serving Size: ${extendedInfo.nutrition.servingSize || "100g"} • Servings Per Pack: ${extendedInfo.nutrition.servingsPerPack || "Multiple"}`}
                          </p>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-mono text-xs font-bold">
                          {product.unit} Pack
                        </span>
                      </div>

                      {/* Nutrition Table */}
                      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-[#2a2a2a] bg-white dark:bg-[#181818] shop-scrollbar-x pb-0.5">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-slate-100 dark:bg-[#202020] text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-[#2c2c2c]">
                              <th className="py-3 px-4 sm:px-5">
                                {isHindi ? "पोषक तत्व (Nutrient)" : "Nutrient Parameter"}
                              </th>
                              <th className="py-3 px-4 sm:px-5 text-right font-mono">
                                {isHindi ? "प्रति 100g" : "Per 100g"}
                              </th>
                              {extendedInfo.nutrition.energy.perServing && (
                                <th className="py-3 px-4 sm:px-5 text-right font-mono">
                                  {isHindi ? "प्रति सर्विंग" : "Per Serving"}
                                </th>
                              )}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-[#242424]">
                            {/* Energy */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 font-bold text-slate-900 dark:text-white">
                              <td className="py-3 px-4 sm:px-5">{isHindi ? "ऊर्जा (Energy)" : "Energy"}</td>
                              <td className="py-3 px-4 sm:px-5 text-right font-mono text-[#3f7010] dark:text-[#7ec238]">
                                {extendedInfo.nutrition.energy.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-3 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.energy.perServing}
                                </td>
                              )}
                            </tr>

                            {/* Protein */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 font-semibold text-slate-800 dark:text-zinc-200">
                              <td className="py-2.5 px-4 sm:px-5">{isHindi ? "प्रोटीन (Protein)" : "Protein"}</td>
                              <td className="py-2.5 px-4 sm:px-5 text-right font-mono font-bold text-slate-900 dark:text-white">
                                {extendedInfo.nutrition.protein.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.protein.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Carbohydrates */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 font-semibold text-slate-800 dark:text-zinc-200">
                              <td className="py-2.5 px-4 sm:px-5">{isHindi ? "कुल कार्बोहाइड्रेट (Carbohydrates)" : "Carbohydrates"}</td>
                              <td className="py-2.5 px-4 sm:px-5 text-right font-mono font-bold text-slate-900 dark:text-white">
                                {extendedInfo.nutrition.carbohydrates.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.carbohydrates.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Sub: Total Sugars */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-600 dark:text-zinc-400">
                              <td className="py-2 px-4 sm:px-5 pl-7 sm:pl-9">
                                └ {isHindi ? "कुल शर्करा (Total Sugars)" : "Total Sugars"}
                              </td>
                              <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                {extendedInfo.nutrition.totalSugars.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.totalSugars.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Sub: Added Sugars */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-600 dark:text-zinc-400">
                              <td className="py-2 px-4 sm:px-5 pl-7 sm:pl-9">
                                └ {isHindi ? "अतिरिक्त शर्करा (Added Sugars)" : "Added Sugars"}
                              </td>
                              <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                {extendedInfo.nutrition.addedSugars.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.addedSugars.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Total Fat */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 font-semibold text-slate-800 dark:text-zinc-200">
                              <td className="py-2.5 px-4 sm:px-5">{isHindi ? "कुल वसा (Total Fat)" : "Total Fat"}</td>
                              <td className="py-2.5 px-4 sm:px-5 text-right font-mono font-bold text-slate-900 dark:text-white">
                                {extendedInfo.nutrition.totalFat.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.totalFat.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Sub: Saturated Fat */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-600 dark:text-zinc-400">
                              <td className="py-2 px-4 sm:px-5 pl-7 sm:pl-9">
                                └ {isHindi ? "संतृप्त वसा (Saturated Fat)" : "Saturated Fat"}
                              </td>
                              <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                {extendedInfo.nutrition.saturatedFat.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.saturatedFat.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Sub: Trans Fat */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-600 dark:text-zinc-400">
                              <td className="py-2 px-4 sm:px-5 pl-7 sm:pl-9">
                                └ {isHindi ? "ट्रांस वसा (Trans Fat)" : "Trans Fat"}
                              </td>
                              <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                {extendedInfo.nutrition.transFat.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.transFat.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Dietary Fibre */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 font-semibold text-slate-800 dark:text-zinc-200">
                              <td className="py-2.5 px-4 sm:px-5">{isHindi ? "आहारीय फाइबर (Dietary Fibre)" : "Dietary Fibre"}</td>
                              <td className="py-2.5 px-4 sm:px-5 text-right font-mono font-bold text-slate-900 dark:text-white">
                                {extendedInfo.nutrition.dietaryFibre.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.dietaryFibre.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Sodium */}
                            <tr className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-800 dark:text-zinc-200">
                              <td className="py-2.5 px-4 sm:px-5">{isHindi ? "सोडियम (Sodium)" : "Sodium"}</td>
                              <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                {extendedInfo.nutrition.sodium.per100g}
                              </td>
                              {extendedInfo.nutrition.energy.perServing && (
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                  {extendedInfo.nutrition.sodium.perServing || "—"}
                                </td>
                              )}
                            </tr>

                            {/* Other Micronutrients */}
                            {extendedInfo.nutrition.otherNutrients?.map((nut, i) => (
                              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-[#1e1e1e]/50 text-slate-800 dark:text-zinc-200">
                                <td className="py-2.5 px-4 sm:px-5">
                                  {isHindi && nut.nameHi ? nut.nameHi : nut.name}
                                </td>
                                <td className="py-2.5 px-4 sm:px-5 text-right font-mono font-semibold text-slate-900 dark:text-white">
                                  {nut.per100g}
                                </td>
                                {extendedInfo.nutrition?.energy.perServing && (
                                  <td className="py-2.5 px-4 sm:px-5 text-right font-mono">
                                    {nut.perServing || "—"}
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Regulatory Footnote */}
                      <p className="text-[11px] text-slate-400 dark:text-zinc-500 italic">
                        {isHindi
                          ? "*पोषण संबंधी मान प्रयोगशाला परीक्षण और मानक कृषि डेटा पर आधारित अनुमानित मान हैं। दैनिक मान 2,000 कैलोरी आहार पर आधारित हैं।"
                          : "*Nutritional values are lab-verified approximate values per standard test batch. % Daily Values (DV) are based on a 2,000 calorie diet."}
                      </p>
                    </div>
                  ) : (
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-center space-y-2">
                      <Info className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {isHindi ? "पोषण संबंधी जानकारी उपलब्ध नहीं है।" : "Nutritional information not provided for this product"}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 4: Specifications */}
              {activeTab === "specifications" && (
                <div id="panel-specifications" role="tabpanel" aria-labelledby="tab-specifications" className="space-y-6 animate-in fade-in duration-200">
                  {/* Food Specifications */}
                  {extendedInfo?.foodSpecs && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                          <span>{isHindi ? "उत्पाद विशिष्टताएँ (Food Specifications)" : "Product & Food Specifications"}</span>
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238]">
                          {isHindi ? "सत्यापित विवरण" : "Verified Specifications"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { label: "Product Name", labelHi: "उत्पाद का नाम", val: extendedInfo.foodSpecs.productName, valHi: extendedInfo.foodSpecs.productNameHi },
                          { label: "Category", labelHi: "श्रेणी", val: extendedInfo.foodSpecs.category, valHi: extendedInfo.foodSpecs.categoryHi },
                          { label: "Net Quantity", labelHi: "शुद्ध मात्रा", val: extendedInfo.foodSpecs.netQuantity, valHi: extendedInfo.foodSpecs.netQuantityHi },
                          { label: "Pack Size", labelHi: "पैक का आकार", val: extendedInfo.foodSpecs.packSize, valHi: extendedInfo.foodSpecs.packSizeHi },
                          { label: "Ingredients", labelHi: "सामग्री (इंग्रीडिएंट्स)", val: extendedInfo.foodSpecs.ingredientsSummary, valHi: extendedInfo.foodSpecs.ingredientsSummaryHi },
                          { label: "Taste / Variant", labelHi: "स्वाद / प्रकार", val: extendedInfo.foodSpecs.tasteOrVariant, valHi: extendedInfo.foodSpecs.tasteOrVariantHi },
                          { label: "Shelf Life", labelHi: "शेल्फ लाइफ (अवधि)", val: extendedInfo.foodSpecs.shelfLife, valHi: extendedInfo.foodSpecs.shelfLifeHi },
                          { label: "Storage", labelHi: "भंडारण निर्देश", val: extendedInfo.foodSpecs.storage, valHi: extendedInfo.foodSpecs.storageHi },
                          { label: "Allergen Information", labelHi: "एलर्जेन जानकारी", val: extendedInfo.foodSpecs.allergenInfo, valHi: extendedInfo.foodSpecs.allergenInfoHi },
                          { label: "Dietary Classification", labelHi: "आहार वर्गीकरण", val: extendedInfo.foodSpecs.vegetarianClassification, valHi: extendedInfo.foodSpecs.vegetarianClassificationHi },
                          { label: "Manufacturer / Brand", labelHi: "निर्माता / ब्रांड", val: extendedInfo.foodSpecs.manufacturerBrand, valHi: extendedInfo.foodSpecs.manufacturerBrandHi },
                          { label: "FSSAI License No.", labelHi: "FSSAI लाइसेंस संख्या", val: extendedInfo.foodSpecs.fssaiNumber, valHi: extendedInfo.foodSpecs.fssaiNumber },
                          { label: "Country of Origin", labelHi: "मूल देश (Country of Origin)", val: extendedInfo.foodSpecs.countryOfOrigin, valHi: extendedInfo.foodSpecs.countryOfOriginHi },
                        ]
                          .filter((item) => Boolean(item.val && item.val.trim() !== ""))
                          .map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-1 hover:border-[#3f7010]/40 transition-colors"
                            >
                              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 block">
                                {isHindi ? item.labelHi : item.label}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block leading-snug">
                                {isHindi && item.valHi ? item.valHi : item.val}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Agriculture Specs */}
                  {extendedInfo?.agriSpecs && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                          <span>{isHindi ? "कृषि विशिष्टताएँ एवं फसल आवश्यकताएं" : "Agricultural & Agronomy Specifications"}</span>
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238]">
                          {isHindi ? "फार्म सत्यापित" : "Farm Verified"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { label: "Product / Variety", labelHi: "उत्पाद / किस्म", val: extendedInfo.agriSpecs.productVariety, valHi: extendedInfo.agriSpecs.productVarietyHi },
                          { label: "Crop Category / Type", labelHi: "फसल श्रेणी / प्रकार", val: extendedInfo.agriSpecs.cropType, valHi: extendedInfo.agriSpecs.cropTypeHi },
                          { label: "Season / Sowing", labelHi: "उपयुक्त मौसम / बुवाई", val: extendedInfo.agriSpecs.season, valHi: extendedInfo.agriSpecs.seasonHi },
                          { label: "Growing Level", labelHi: "उगाने का स्तर", val: extendedInfo.agriSpecs.growingLevel, valHi: extendedInfo.agriSpecs.growingLevelHi },
                          { label: "Germination / Spawning", labelHi: "अंकुरण व स्पॉनिंग समय", val: extendedInfo.agriSpecs.germinationOrSpawning, valHi: extendedInfo.agriSpecs.germinationOrSpawningHi },
                          { label: "Optimal Temperature", labelHi: "उपयुक्त तापमान", val: extendedInfo.agriSpecs.temperature, valHi: extendedInfo.agriSpecs.temperatureHi },
                          { label: "Soil / Substrate", labelHi: "मृदा / सबस्ट्रेट आवश्यकता", val: extendedInfo.agriSpecs.soilOrSubstrate, valHi: extendedInfo.agriSpecs.soilOrSubstrateHi },
                          { label: "Sunlight & Light", labelHi: "सूर्य का प्रकाश व छाया स्थिति", val: extendedInfo.agriSpecs.sunlight, valHi: extendedInfo.agriSpecs.sunlightHi },
                          { label: "Water Requirements", labelHi: "जल आवश्यकता", val: extendedInfo.agriSpecs.waterRequirements, valHi: extendedInfo.agriSpecs.waterRequirementsHi },
                          { label: "Container / Pit Requirement", labelHi: "पात्र / क्यारी की आवश्यकता", val: extendedInfo.agriSpecs.containerOrPitRequirement, valHi: extendedInfo.agriSpecs.containerOrPitRequirementHi },
                          { label: "Harvest Information", labelHi: "तुड़ाई समय", val: extendedInfo.agriSpecs.harvestWindow, valHi: extendedInfo.agriSpecs.harvestWindowHi },
                          { label: "Pack / Quantity", labelHi: "पैक / मात्रा", val: extendedInfo.agriSpecs.packQuantity, valHi: extendedInfo.agriSpecs.packQuantityHi },
                          { label: "Brand / Origin", labelHi: "ब्रांड / स्रोत", val: extendedInfo.agriSpecs.brandOrOrigin, valHi: extendedInfo.agriSpecs.brandOrOriginHi },
                        ]
                          .filter((item) => Boolean(item.val && item.val.trim() !== ""))
                          .map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-1 hover:border-[#3f7010]/40 transition-colors"
                            >
                              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 block">
                                {isHindi ? item.labelHi : item.label}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block leading-snug">
                                {isHindi && item.valHi ? item.valHi : item.val}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Fallback to product.specifications if extended specs are not present */}
                  {!extendedInfo?.foodSpecs && !extendedInfo?.agriSpecs && product.specifications && product.specifications.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                        <span>{isHindi ? "उत्पाद विशिष्टताएँ (Specifications)" : "Specifications"}</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {product.specifications.map((spec, i) => (
                          <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-1">
                            <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 block">
                              {isHindi ? (spec.labelHi || spec.label) : spec.label}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block">
                              {isHindi ? (spec.valueHi || spec.value) : spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!extendedInfo?.foodSpecs && !extendedInfo?.agriSpecs && (!product.specifications || product.specifications.length === 0) && (
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-center space-y-2">
                      <Info className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {isHindi ? "विशिष्टताएँ उपलब्ध नहीं हैं।" : "Information not provided"}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 5: How to Use */}
              {activeTab === "howToUse" && (
                <div id="panel-howToUse" role="tabpanel" aria-labelledby="tab-howToUse" className="space-y-5 animate-in fade-in duration-200">
                  {extendedInfo?.howToUse ? (
                    <div className="space-y-4">
                      {/* Guide Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#ecf6e3] dark:bg-[#3f7010]/25 text-[#3f7010] dark:text-[#7ec238] flex items-center justify-center shrink-0 border border-[#3f7010]/30">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                              {isHindi ? (extendedInfo.howToUse.guideTitleHi || extendedInfo.howToUse.guideTitle) : extendedInfo.howToUse.guideTitle}
                            </h4>
                            {extendedInfo.howToUse.subtitle && (
                              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                                {isHindi && extendedInfo.howToUse.subtitleHi ? extendedInfo.howToUse.subtitleHi : extendedInfo.howToUse.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3f7010]/10 text-[#3f7010] dark:text-[#7ec238] border border-[#3f7010]/20">
                          {extendedInfo.howToUse.steps.length} {isHindi ? "चरण" : "Steps"}
                        </span>
                      </div>

                      {/* Numbered Step Cards */}
                      <div className="space-y-3">
                        {extendedInfo.howToUse.steps.map((step) => (
                          <div
                            key={step.stepNumber}
                            className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] flex items-start gap-3.5 sm:gap-4 hover:border-[#3f7010]/50 dark:hover:border-[#7ec238]/40 transition-all duration-200 group"
                          >
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-mono text-xs sm:text-sm font-extrabold flex items-center justify-center shrink-0 border border-[#3f7010]/30 shadow-xs group-hover:scale-105 transition-transform">
                              {String(step.stepNumber).padStart(2, "0")}
                            </div>
                            <div className="space-y-1 pt-0.5 flex-1 min-w-0">
                              <h5 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                                {isHindi && step.titleHi ? step.titleHi : step.title}
                              </h5>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                                {isHindi && step.descriptionHi ? step.descriptionHi : step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Precautions & Tips Callout */}
                      {extendedInfo.howToUse.precautionsOrTips && extendedInfo.howToUse.precautionsOrTips.length > 0 && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 dark:border-amber-500/30 space-y-2.5">
                          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-xs sm:text-sm">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{isHindi ? "महत्वपूर्ण सुझाव एवं सावधानियां" : "Pro Tips & Handling Precautions"}</span>
                          </div>
                          <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                            {(isHindi && extendedInfo.howToUse.precautionsOrTipsHi
                              ? extendedInfo.howToUse.precautionsOrTipsHi
                              : extendedInfo.howToUse.precautionsOrTips
                            ).map((tip, idx) => (
                              <li key={idx}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : product.howToUseOrGrow ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#3f7010] dark:text-[#7ec238]" />
                        <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                          {isHindi ? (product.howToUseOrGrow.titleHi || product.howToUseOrGrow.title) : product.howToUseOrGrow.title}
                        </h4>
                      </div>

                      <div className="space-y-3">
                        {(isHindi ? (product.howToUseOrGrow.pointsHi || product.howToUseOrGrow.points) : product.howToUseOrGrow.points).map((pt, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] flex items-start gap-3.5 hover:border-[#3f7010]/50 transition-colors"
                          >
                            <span className="w-7 h-7 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/25 text-[#3f7010] dark:text-[#7ec238] font-mono text-sm font-extrabold flex items-center justify-center shrink-0 mt-0.5 border border-[#3f7010]/30">
                              {i + 1}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-medium pt-0.5">
                              {pt}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-center space-y-2">
                      <Info className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                        {isHindi ? "उपयोग निर्देश उपलब्ध नहीं हैं।" : "Instructions not provided"}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 6: Storage */}
              {activeTab === "storage" && (
                <div id="panel-storage" role="tabpanel" aria-labelledby="tab-storage" className="space-y-4 animate-in fade-in duration-200">
                  {/* Highlight Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#3f7010] dark:text-[#7ec238]">
                        <Package className="w-4 h-4" />
                        <span>{isHindi ? "शेल्फ लाइफ (Shelf Life)" : "Shelf Life Period"}</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {extendedInfo?.storage ? (isHindi ? (extendedInfo.storage.shelfLifeHi || extendedInfo.storage.shelfLife) : extendedInfo.storage.shelfLife) : "6 Months from packaging"}
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-600 dark:text-amber-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{isHindi ? "सर्वोत्तम उपयोग (Best Before)" : "Best Before / Condition"}</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {extendedInfo?.storage ? (isHindi ? (extendedInfo.storage.bestBeforeHi || extendedInfo.storage.bestBefore) : extendedInfo.storage.bestBefore) : "Best before date marked on packaging label"}
                      </p>
                    </div>
                  </div>

                  {/* Storage Guidelines Checklist */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#282828] space-y-3">
                    <h5 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      {isHindi ? "भंडारण एवं ताजगी बनाए रखने के निर्देश:" : "Storage Guidelines & Care Instructions:"}
                    </h5>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      {(extendedInfo?.storage?.guidelines && extendedInfo.storage.guidelines.length > 0
                        ? (isHindi && extendedInfo.storage.guidelinesHi ? extendedInfo.storage.guidelinesHi : extendedInfo.storage.guidelines)
                        : [
                            product.storageDelivery?.storageInfo || "Store in a cool dry place away from direct sunlight.",
                            "Keep in an airtight container once opened.",
                            "Avoid exposure to moisture or high humidity."
                          ]
                      ).map((guide, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238] shrink-0 mt-0.5" />
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 7: Shipping & Delivery */}
              {activeTab === "shipping" && (
                <div id="panel-shipping" role="tabpanel" aria-labelledby="tab-shipping" className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Dispatch */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#3f7010] dark:text-[#7ec238]">
                        <Truck className="w-4 h-4" />
                        <span>{isHindi ? "प्रेषण समय" : "Dispatch Timeline"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-semibold">
                        {extendedInfo?.shipping ? (isHindi ? (extendedInfo.shipping.dispatchTimeHi || extendedInfo.shipping.dispatchTime) : extendedInfo.shipping.dispatchTime) : "Dispatched within 24-48 business hours."}
                      </p>
                    </div>

                    {/* Couriers */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{isHindi ? "कूरियर पार्टनर्स" : "Express Couriers"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-semibold">
                        {extendedInfo?.shipping ? (isHindi ? (extendedInfo.shipping.courierPartnersHi || extendedInfo.shipping.courierPartners) : extendedInfo.shipping.courierPartners) : "Insured Express Delivery via BlueDart, Delhivery, DTDC"}
                      </p>
                    </div>

                    {/* Free Shipping */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200/80 dark:border-[#282828] space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-500">
                        <Sparkles className="w-4 h-4" />
                        <span>{isHindi ? "मुफ़्त डिलीवरी" : "Free Shipping"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-semibold">
                        {extendedInfo?.shipping ? (isHindi ? (extendedInfo.shipping.freeShippingAboveHi || extendedInfo.shipping.freeShippingAbove) : extendedInfo.shipping.freeShippingAbove) : "Free shipping on orders above ₹499"}
                      </p>
                    </div>
                  </div>

                  {/* Packaging Assurance Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#282828] space-y-2">
                    <h5 className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238]" />
                      <span>{isHindi ? "सुरक्षित एवं नमी-रोधी पैकेजिंग" : "Protective Farm Fresh Packaging"}</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {extendedInfo?.shipping ? (isHindi ? (extendedInfo.shipping.handlingNoteHi || extendedInfo.shipping.handlingNote) : extendedInfo.shipping.handlingNote) : "Every parcel is carefully sealed in protective multi-layer packaging to preserve freshness and nutrition throughout transit."}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 8: Returns & Refunds */}
              {activeTab === "returns" && (
                <div id="panel-returns" role="tabpanel" aria-labelledby="tab-returns" className="space-y-4 animate-in fade-in duration-200">
                  {/* Guarantee Banner */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-[#3f7010]/10 border border-[#3f7010]/30 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#3f7010] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                          {extendedInfo?.returns ? (isHindi ? (extendedInfo.returns.guaranteeHeadlineHi || extendedInfo.returns.guaranteeHeadline) : extendedInfo.returns.guaranteeHeadline) : "100% Quality & Freshness Guarantee"}
                        </h4>
                        <span className="text-xs text-slate-600 dark:text-zinc-300">
                          {isHindi ? "सत्यापित कृषि मानक • पारदर्शी रिफंड नीति" : "Verified farm authenticity • Transparent instant claims"}
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/917372926623?text=Hi%20JAS%20Agro,%20I%20have%20an%20inquiry%20regarding%20my%20order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#3f7010] hover:bg-[#529116] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{isHindi ? "व्हाट्सएप सहायता" : "WhatsApp Claims"}</span>
                    </a>
                  </div>

                  {/* Policy Checklist */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#282828] space-y-3">
                    <h5 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      {isHindi ? "वापसी एवं रिफंड नियम व शर्तें:" : "Returns & Refund Policy Terms:"}
                    </h5>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      {(extendedInfo?.returns?.terms
                        ? (isHindi && extendedInfo.returns.termsHi ? extendedInfo.returns.termsHi : extendedInfo.returns.terms)
                        : [
                            "Due to food hygiene standards, opened consumable products cannot be returned.",
                            "In the rare event of transit damage or quality discrepancy, report within 24 hours of delivery for a 100% refund or replacement.",
                            "Our farm support team will immediately review photos/videos and resolve your claim within 24 hours."
                          ]
                      ).map((term, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238] shrink-0 mt-0.5" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 9: FAQs */}
              {activeTab === "faqs" && (
                <div id="panel-faqs" role="tabpanel" aria-labelledby="tab-faqs" className="space-y-3 animate-in fade-in duration-200">
                  {(() => {
                    const displayFaqs = (extendedInfo?.faqs && extendedInfo.faqs.length > 0)
                      ? extendedInfo.faqs
                      : (product.faqs || []);

                    if (displayFaqs.length === 0) {
                      return (
                        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-center space-y-2">
                          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                          <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                            {isHindi ? "अक्सर पूछे जाने वाले प्रश्न उपलब्ध नहीं हैं।" : "No FAQs currently available for this product"}
                          </p>
                        </div>
                      );
                    }

                    return displayFaqs.map((faq, i) => {
                      const isOpen = openFaqIndex === i;
                      const qText = isHindi ? (faq.questionHi || faq.question) : faq.question;
                      const aText = isHindi ? (faq.answerHi || faq.answer) : faq.answer;

                      return (
                        <div
                          key={i}
                          className={`rounded-2xl bg-slate-50 dark:bg-[#1a1a1a] border transition-all duration-200 overflow-hidden ${
                            isOpen
                              ? "border-[#3f7010]/60 dark:border-[#7ec238]/40 shadow-xs"
                              : "border-slate-200/80 dark:border-[#282828] hover:border-slate-300 dark:hover:border-[#333]"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-3 cursor-pointer select-none"
                          >
                            <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2.5">
                              <HelpCircle
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isOpen ? "text-[#3f7010] dark:text-[#7ec238]" : "text-slate-400"
                                }`}
                              />
                              <span>{qText}</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                                isOpen ? "rotate-180 text-[#3f7010] dark:text-[#7ec238]" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4 pt-1 sm:px-4.5 sm:pb-4.5 border-t border-slate-200/50 dark:border-[#242424] text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed animate-in fade-in duration-150">
                              <p className="pl-6.5">
                                {aText}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>
              )}
            </div>
          </section>

          {/* Section: Customer Reviews */}
          <section className="bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-[#262626] pb-4 flex-wrap gap-3">
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {isHindi ? "ग्राहक समीक्षाएं (Customer Reviews)" : "Customer Reviews"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {isHindi ? "सत्यापित खरीदारों की वास्तविक प्रतिक्रियाएं" : "Verified farm buyer ratings and feedback"}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] font-mono text-xs font-bold">
                {product.reviewsCount || 38} {isHindi ? "समीक्षाएं" : "Total Reviews"}
              </span>
            </div>

            {/* Rating Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Overall Score */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-50 dark:bg-[#202020] border border-slate-100 dark:border-[#2c2c2c] text-center space-y-1.5">
                <span className="font-mono font-extrabold text-4xl text-slate-900 dark:text-white">
                  {product.rating || 4.9}
                </span>
                <div className="flex items-center text-amber-500 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 dark:text-zinc-400">
                  {isHindi ? `5 में से ${product.rating || 4.9} स्टार्स` : `Based on ${product.reviewsCount || 38} ratings`}
                </span>
              </div>

              {/* Progress Bars Breakdown */}
              <div className="md:col-span-8 space-y-2 text-xs">
                {[
                  { star: 5, pct: 88, count: Math.round((product.reviewsCount || 38) * 0.88) },
                  { star: 4, pct: 10, count: Math.round((product.reviewsCount || 38) * 0.1) },
                  { star: 3, pct: 2, count: Math.round((product.reviewsCount || 38) * 0.02) },
                  { star: 2, pct: 0, count: 0 },
                  { star: 1, pct: 0, count: 0 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-3">
                    <span className="w-12 font-bold text-slate-700 dark:text-zinc-300 text-right">
                      {row.star} ★
                    </span>
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3f7010] rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="w-8 font-mono text-slate-500 text-right">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1e1e1e] border border-slate-100 dark:border-[#282828] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/30 text-[#3f7010] dark:text-[#7ec238] font-bold text-xs flex items-center justify-center">
                      RS
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Ramesh Sharma</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {isHindi
                    ? "उत्कृष्ट गुणवत्ता और ताजगी! समय पर डिलीवरी हुई और पैकेजिंग बहुत सुरक्षित थी।"
                    : "Outstanding farm quality and pure taste. Dispatched promptly with protective sealed packaging."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1e1e1e] border border-slate-100 dark:border-[#282828] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/30 text-[#3f7010] dark:text-[#7ec238] font-bold text-xs flex items-center justify-center">
                      AK
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Anil Kumar</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span>Verified Buyer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {isHindi
                    ? "100% प्रामाणिक उत्पाद। पूरे परिवार को बहुत पसंद आया। दोबारा ऑर्डर करेंगे!"
                    : "100% authentic organic quality. Will definitely reorder again from JAS Agro!"}
                </p>
              </div>
            </div>
          </section>

          {/* Section: You Might Also Like (Related Products Grid) */}
          <section className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {isHindi ? "संबंधित उत्पाद (You Might Also Like)" : "You Might Also Like"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {isHindi ? "JAS Agro के अन्य लोकप्रिय जैविक उत्पाद" : "Explore other popular organic farm selections"}
                </p>
              </div>

              <Link
                href="/shop"
                className="text-xs font-bold text-[#3f7010] dark:text-[#7ec238] hover:underline flex items-center gap-1"
              >
                <span>{isHindi ? "सभी उत्पाद देखें" : "View All"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  viewMode="grid"
                  isWishlisted={wishlist.includes(relProduct.id)}
                  onToggleWishlist={toggleWishlist}
                  onQuickView={setQuickViewProduct}
                  onAddToCart={(p, q) => handleAddToCart(p, q)}
                  quantityInCart={cart.find((item) => item.product.id === relProduct.id)?.quantity || 0}
                />
              ))}
            </div>
          </section>

        </div>

        {/* Promotional Trust Strip & Newsletter */}
        <ShopTrustStrip />
        <ShopNewsletter />
      </main>

      {/* Mobile Sticky Bottom Checkout Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#262626] px-3 py-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-medium truncate uppercase tracking-wider">
                {isHindi ? "कुल राशि" : "Total"}
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
                <span>{isHindi ? `कार्ट ${totalCartCount}` : `Cart ${totalCartCount}`}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCheckoutOpen(true)}
                className="px-3.5 xs:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>{isHindi ? "चेकआउट करें" : "Proceed to Checkout"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

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

      {/* Direct 3-Step Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        cartSubtotal={cartSubtotal}
        discountAmount={0}
        shippingCharge={shippingCharge}
        cartFinalTotal={cartFinalTotal}
        couponApplied={null}
        onApplyCoupon={() => ({ success: false, message: "" })}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onClearCart={clearCart}
      />

      {/* Quick View Modal Dialog */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, q) => handleAddToCart(p, q)}
        onBuyNow={(p, q) => handleBuyNow(p, q)}
      />

      {/* Back to Top Floating Action Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={handleBackToTop}
          aria-label={isHindi ? "पृष्ठ के शीर्ष पर जाएं" : "Back to top"}
          title={isHindi ? "ऊपर जाएं" : "Back to Top"}
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

      {/* Shop Footer */}
      <ShopFooter />
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="flex items-center gap-3 text-sm text-[#529116] font-semibold">
            <span className="w-5 h-5 border-2 border-[#3f7010] border-t-transparent rounded-full animate-spin" />
            <span>Loading JAS Agro Product...</span>
          </div>
        </div>
      }
    >
      <ProductDetailContent />
    </Suspense>
  );
}
