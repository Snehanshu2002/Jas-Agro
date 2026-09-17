"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ShoppingBag,
  ShoppingCart,
  Search,
  SlidersHorizontal,
  Star,
  Heart,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Eye,
  X,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus,
  Minus,
  CreditCard,
  QrCode,
  Tag,
  Check,
  ArrowRight,
  User,
  MapPin,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";
import Link from "next/link";

interface CartItem {
  product: ShopProduct;
  quantity: number;
}

export default function ShopPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  // State Management
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllPages, setShowAllPages] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("latest");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<ShopProduct | null>(null);

  // Per-card selected quantity state
  const [cardQuantities, setCardQuantities] = useState<Record<string, number>>({});
  const [quickViewQty, setQuickViewQty] = useState<number>(1);

  // Cart & Checkout State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);

  // Coupon State
  const [showCouponInput, setShowCouponInput] = useState<boolean>(false);
  const [couponInput, setCouponInput] = useState<string>("");
  const [couponApplied, setCouponApplied] = useState<{ code: string; discountPercent: number } | null>(null);
  const [couponError, setCouponError] = useState<string>("");

  // Shipping Form State
  const [shippingForm, setShippingForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    streetAddress: "",
    townCity: "",
    state: "Rajasthan",
    pincode: "",
    notes: "",
  });

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "cod" | "card">("upi");
  const [orderSuccess, setOrderSuccess] = useState<{ orderId: string; total: number } | null>(null);

  // Categories list
  const categories = [
    { id: "All", labelEn: "All Products", labelHi: "सभी Products", count: 11 },
    { id: "Biscuits & Cookies", labelEn: "Biscuits & Cookies", labelHi: "Biscuits & Cookies", count: 5 },
    { id: "Snacks & Khakhra", labelEn: "Snacks & Khakhra", labelHi: "Snacks & Khakhra", count: 3 },
    { id: "Oyster Mushrooms", labelEn: "Oyster Mushrooms", labelHi: "Oyster Mushrooms", count: 2 },
    { id: "Azolla Fodder", labelEn: "Azolla Fodder", labelHi: "Azolla Fodder", count: 1 },
  ];

  // Cart Calculation Helpers
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const discountAmount = useMemo(() => {
    if (!couponApplied) return 0;
    return Math.round((cartSubtotal * couponApplied.discountPercent) / 100);
  }, [cartSubtotal, couponApplied]);

  const shippingCharge = useMemo(() => {
    if (cartSubtotal === 0 || cartSubtotal >= 499) return 0;
    return 49;
  }, [cartSubtotal]);

  const cartFinalTotal = useMemo(() => {
    return Math.max(0, cartSubtotal - discountAmount + shippingCharge);
  }, [cartSubtotal, discountAmount, shippingCharge]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Cart Functions
  const addToCart = (product: ShopProduct, quantity: number = 1) => {
    if (product.outOfStock) return;
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleBuyNow = (product: ShopProduct, quantity: number = 1) => {
    addToCart(product, quantity);
    setIsCheckoutOpen(true);
    setCheckoutStep(1);
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter((prod) => {
      if (!showAllPages && searchQuery === "" && selectedCategory === "All") {
        if (prod.page !== currentPage) return false;
      }
      if (selectedCategory !== "All" && prod.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = prod.title.toLowerCase().includes(q) || prod.titleHi.includes(q);
        const matchDesc = prod.description.toLowerCase().includes(q) || prod.descriptionHi.includes(q);
        const matchCat = prod.category.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }, [currentPage, showAllPages, selectedCategory, searchQuery, sortBy]);

  // Apply Coupon Code
  const handleApplyCoupon = () => {
    setCouponError("");
    const cleanCode = couponInput.trim().toUpperCase();
    if (cleanCode === "JAS10" || cleanCode === "JASAGRO10" || cleanCode === "SAVE10") {
      setCouponApplied({ code: cleanCode, discountPercent: 10 });
    } else if (cleanCode === "WELCOME20") {
      setCouponApplied({ code: cleanCode, discountPercent: 20 });
    } else if (cleanCode === "FREESHIP") {
      setCouponApplied({ code: cleanCode, discountPercent: 5 });
    } else {
      setCouponError(isHindi ? "अमान्य कूपन कोड। कृपया JAS10 या WELCOME20 आज़माएं।" : "Invalid coupon code. Try JAS10 or WELCOME20.");
    }
  };

  // Handle Place Order & WhatsApp Dispatch
  const handleCompleteOrder = () => {
    const orderId = `JAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderSuccess({ orderId, total: cartFinalTotal });

    // Format WhatsApp message
    const itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.title} (x${item.quantity}) - ₹${item.product.price * item.quantity}`
      )
      .join("%0A");

    const addressText = `%0A%0A*Delivery Address:*%0A${shippingForm.firstName} ${shippingForm.lastName}%0A${shippingForm.streetAddress}, ${shippingForm.townCity}, ${shippingForm.state} - ${shippingForm.pincode}%0APhone: ${shippingForm.phone}`;
    const paymentText = `%0A%0A*Payment Method:* ${paymentMethod.toUpperCase()}%0A*Total Amount:* ₹${cartFinalTotal}`;

    const text = `*New Order Placed on JAS Agro Shop!*%0A*Order ID:* ${orderId}%0A%0A*Items:*%0A${itemsList}${addressText}${paymentText}`;

    // Clear cart after placement
    setCart([]);

    // Open WhatsApp
    window.open(`https://wa.me/917372926623?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 border border-emerald-400/40"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center">
              {totalCartCount}
            </span>
          </div>
          <span>{isHindi ? "कार्ट देखें" : "View Cart"}</span>
          <span className="bg-emerald-700/60 px-2.5 py-0.5 rounded-full font-mono text-xs">
            ₹{cartFinalTotal}
          </span>
        </button>
      )}

      {/* Hero Store Banner */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4 text-amber-500" />
            {isHindi ? "JAS AGRO OFFICIAL ONLINE STORE" : "OFFICIAL JAS AGRO STORE"}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Bringing Growth to <span className="text-amber-600 dark:text-amber-400">Agriculture</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {isHindi
              ? "Organic Oyster Mushroom Biscuits, Mushroom Khakhra, Raw Mushroom Powder और Azolla Fodder online order करें।"
              : "Shop certified Organic Mushroom Biscuits, Oyster Mushroom Khakhra, Pure Dried Mushroom Powder, and Live Azolla Bio-Fodder."}
          </p>

          {/* Quick Action Controls & Cart Trigger */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isHindi ? "Checkout करें" : "Direct Checkout"}</span>
              {totalCartCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
                  {totalCartCount}
                </span>
              )}
            </button>
            <a
              href="http://shop.jasagro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:border-amber-500 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-amber-500" />
              <span>shop.jasagro.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Catalog & Checkout Portal */}
      <section className="py-8 bg-slate-50 dark:bg-[#0B0F17]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
          {/* Filter, Search & Categories Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 rounded-3xl space-y-4 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={isHindi ? "उत्पाद खोजें..." : "Search product..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  {isHindi ? "क्रमबद्ध करें:" : "Sort:"}
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="latest">{isHindi ? "नवीनतम (Latest)" : "Latest"}</option>
                  <option value="price-low">{isHindi ? "मूल्य: कम से अधिक" : "Price: Low to High"}</option>
                  <option value="price-high">{isHindi ? "मूल्य: अधिक से कम" : "Price: High to Low"}</option>
                  <option value="rating">{isHindi ? "उच्च रेटिंग" : "Highest Rating"}</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
              {categories.map((cat) => {
                const label = isHindi ? cat.labelHi : cat.labelEn;
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                      isSelected
                        ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md"
                        : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-amber-500"
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                        isSelected ? "bg-slate-950/20 text-slate-950" : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const title = isHindi ? product.titleHi : product.title;
                const desc = isHindi ? product.descriptionHi : product.description;
                const category = isHindi ? product.categoryHi : product.category;
                const unit = isHindi ? product.unitHi : product.unit;
                const isWishlisted = wishlist.includes(product.id);
                const inCart = cart.find((item) => item.product.id === product.id);

                // Local card quantity
                const qty = cardQuantities[product.id] || 1;

                return (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Image Box */}
                    <div className="relative h-56 bg-slate-100 dark:bg-slate-800/60 overflow-hidden flex items-center justify-center p-4">
                      <img
                        src={product.img}
                        alt={title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {product.outOfStock && (
                        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center">
                          <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 font-bold text-xs flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {isHindi ? "स्टॉक समाप्त" : "Out of Stock"}
                          </span>
                        </div>
                      )}

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-slate-800 dark:bg-slate-900/90 dark:text-slate-200 text-[10px] font-bold border border-slate-200 dark:border-slate-700 shadow-xs">
                          {category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setQuickViewProduct(product)}
                            aria-label="Quick View"
                            className="p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-amber-500 transition-colors shadow-xs"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            aria-label="Add to Wishlist"
                            className="p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors shadow-xs"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1 text-amber-500 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-500" />
                            <span>{product.rating || 4.8}</span>
                            <span className="text-slate-400 font-normal">({product.reviewsCount || 20})</span>
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{unit}</span>
                        </div>

                        <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                          {title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                          {desc}
                        </p>
                      </div>

                      {/* Pricing, Quantity Selector & Cart Action Buttons */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400">
                              ₹{product.price * qty}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-slate-400 line-through">₹{product.originalPrice * qty}</span>
                            )}
                          </div>

                          {/* DIRECT CARD QUANTITY SELECTOR (- 1 +) */}
                          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700/80">
                            <button
                              disabled={qty <= 1}
                              onClick={() =>
                                setCardQuantities((prev) => ({
                                  ...prev,
                                  [product.id]: Math.max(1, qty - 1),
                                }))
                              }
                              className="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-extrabold flex items-center justify-center text-xs shadow-xs disabled:opacity-30 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xs font-extrabold font-mono text-emerald-600 dark:text-emerald-400 min-w-[18px] text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() =>
                                setCardQuantities((prev) => ({
                                  ...prev,
                                  [product.id]: qty + 1,
                                }))
                              }
                              className="w-6 h-6 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-white font-extrabold flex items-center justify-center text-xs shadow-xs hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            disabled={product.outOfStock}
                            onClick={() => addToCart(product, qty)}
                            className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                              inCart
                                ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-amber-500"
                            }`}
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>{inCart ? `${isHindi ? "और जोड़ें" : "Add More"} (${inCart.quantity})` : isHindi ? "कार्ट में जोड़ें" : "Add to Cart"}</span>
                          </button>

                          <button
                            disabled={product.outOfStock}
                            onClick={() => handleBuyNow(product, qty)}
                            className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-sm flex items-center justify-center gap-1"
                          >
                            <span>{isHindi ? "अभी खरीदें" : "Buy Now"}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-4">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                {isHindi ? "कोई उत्पाद नहीं मिला" : "No Products Found"}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {isHindi ? "कृपया अपनी खोज या फ़िल्टर श्रेणी बदलें।" : "Please try adjusting your search terms or filter selection."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl border-l border-slate-200 dark:border-slate-800">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-amber-500" />
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {isHindi ? "आपकी खरीदारी कार्ट" : "Your Shopping Cart"} ({totalCartCount})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length > 0 ? (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex items-center gap-3"
                    >
                      <img
                        src={item.product.img}
                        alt={item.product.title}
                        className="w-14 h-14 object-contain rounded-xl bg-white p-1"
                      />
                      <div className="flex-1 space-y-1">
                        <h4 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                          {isHindi ? item.product.titleHi : item.product.title}
                        </h4>
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          ₹{item.product.price}
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, -1)}
                            className="p-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, 1)}
                            className="p-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-slate-500 text-sm">
                  {isHindi ? "आपकी कार्ट खाली है।" : "Your cart is empty."}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-4">
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>{isHindi ? "उपयोगित राशि:" : "Subtotal:"}</span>
                    <span className="font-bold font-mono">₹{cartSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isHindi ? "डिलीवरी शुल्क:" : "Shipping:"}</span>
                    <span>{shippingCharge === 0 ? <span className="text-emerald-500 font-bold">FREE</span> : `₹${shippingCharge}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span>{isHindi ? "कुल योग:" : "Total Amount:"}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-base">₹{cartFinalTotal}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                    setCheckoutStep(1);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{isHindi ? "चेकआउट प्रक्रिया शुरू करें (Proceed to Checkout)" : "Proceed to Checkout"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Interactive 3-Step Checkout Modal (Matching shop.jasagro.com/checkout/) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in duration-200 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Banner */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                {isHindi ? "चेकआउट (Checkout)" : "Checkout"}
              </h2>
              <p className="text-xs text-slate-500">Home / Checkout</p>
            </div>

            {/* 3-Step Progress Indicator matching shop.jasagro.com/checkout/ */}
            <div className="flex items-center justify-between relative py-2">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
              
              <div
                onClick={() => setCheckoutStep(1)}
                className={`relative z-10 flex flex-col items-center gap-1 cursor-pointer ${
                  checkoutStep >= 1 ? "text-amber-500" : "text-slate-400"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                    checkoutStep === 1
                      ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md scale-110"
                      : checkoutStep > 1
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  }`}
                >
                  1
                </div>
                <span className="text-[11px] font-bold">{isHindi ? "बिलिंग एवं पता" : "Billing & Shipping"}</span>
              </div>

              <div
                onClick={() => cart.length > 0 && setCheckoutStep(2)}
                className={`relative z-10 flex flex-col items-center gap-1 cursor-pointer ${
                  checkoutStep >= 2 ? "text-amber-500" : "text-slate-400"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                    checkoutStep === 2
                      ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md scale-110"
                      : checkoutStep > 2
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  }`}
                >
                  2
                </div>
                <span className="text-[11px] font-bold">{isHindi ? "ऑर्डर सारांश" : "Order Summary"}</span>
              </div>

              <div
                onClick={() => cart.length > 0 && setCheckoutStep(3)}
                className={`relative z-10 flex flex-col items-center gap-1 cursor-pointer ${
                  checkoutStep >= 3 ? "text-amber-500" : "text-slate-400"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                    checkoutStep === 3
                      ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md scale-110"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  }`}
                >
                  3
                </div>
                <span className="text-[11px] font-bold">{isHindi ? "भुगतान" : "Payment"}</span>
              </div>
            </div>

            {/* Coupon Code Top Notice Bar */}
            <div className="bg-slate-100 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Tag className="w-4 h-4 text-amber-500" />
                <span>
                  {isHindi ? "कूपन कोड है? कोड दर्ज करने के लिए यहाँ क्लिक करें।" : "Have a coupon? Click here to enter your code"}
                </span>
              </div>
              <button
                onClick={() => setShowCouponInput(!showCouponInput)}
                className="text-amber-600 dark:text-amber-400 font-bold underline hover:text-amber-500"
              >
                {showCouponInput ? (isHindi ? "छिपाएं" : "Hide") : (isHindi ? "कूपन दर्ज करें" : "Enter Code")}
              </button>
            </div>

            {/* Collapsible Coupon Code Drawer */}
            {showCouponInput && (
              <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/30 space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. JAS10, WELCOME20)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white uppercase font-mono font-bold"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400"
                  >
                    Apply
                  </button>
                </div>
                {couponApplied && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Coupon "{couponApplied.code}" Applied! ({couponApplied.discountPercent}% Discount)
                  </p>
                )}
                {couponError && <p className="text-xs text-red-500 font-bold">{couponError}</p>}
              </div>
            )}

            {/* STEP 1: BILLING & SHIPPING FORM */}
            {checkoutStep === 1 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Step 1: Billing & Shipping Address
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh"
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sharma"
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="info@example.com"
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House / Flat No., Street, Area"
                    value={shippingForm.streetAddress}
                    onChange={(e) => setShippingForm({ ...shippingForm, streetAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jaipur"
                      value={shippingForm.townCity}
                      onChange={(e) => setShippingForm({ ...shippingForm, townCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.state}
                      onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="302033"
                      value={shippingForm.pincode}
                      onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => {
                      if (!shippingForm.firstName || !shippingForm.streetAddress || !shippingForm.townCity) {
                        alert(isHindi ? "कृपया नाम, पता और शहर भरें।" : "Please fill in your name, address, and city.");
                        return;
                      }
                      setCheckoutStep(2);
                    }}
                    className="py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-2"
                  >
                    <span>{isHindi ? "आगे बढ़ें: ऑर्डर देखें →" : "Proceed to Order Summary →"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: ORDER SUMMARY */}
            {checkoutStep === 2 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Step 2: Order Items & Pricing
                </h3>

                {cart.length > 0 ? (
                  <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.img}
                            alt={item.product.title}
                            className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                          />
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">
                              {isHindi ? item.product.titleHi : item.product.title}
                            </h4>
                            <span className="text-slate-500">₹{item.product.price} / unit</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-lg">
                            <button onClick={() => updateCartQuantity(item.product.id, -1)} className="font-bold">-</button>
                            <span className="font-mono px-1 font-bold">{item.quantity}</span>
                            <button onClick={() => updateCartQuantity(item.product.id, 1)} className="font-bold">+</button>
                          </div>
                          <span className="font-bold font-mono text-emerald-600 dark:text-emerald-400">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 text-center py-4">No items in cart.</div>
                )}

                <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Subtotal:</span>
                    <span className="font-mono font-bold">₹{cartSubtotal}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount ({couponApplied.code}):</span>
                      <span className="font-mono">-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Delivery Charge:</span>
                    <span>{shippingCharge === 0 ? <span className="text-emerald-500 font-bold">FREE</span> : `₹${shippingCharge}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span>Total Payable Amount:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono text-lg">₹{cartFinalTotal}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between">
                  <button
                    onClick={() => setCheckoutStep(1)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCheckoutStep(3)}
                    className="py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md"
                  >
                    Proceed to Payment →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT SELECTION */}
            {checkoutStep === 3 && (
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Step 3: Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all ${
                      paymentMethod === "upi"
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-amber-500" />
                    <div className="text-xs font-bold">UPI / Instant QR</div>
                    <div className="text-[10px] text-slate-500">GPay, PhonePe, Paytm</div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all ${
                      paymentMethod === "cod"
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <Truck className="w-5 h-5 text-amber-500" />
                    <div className="text-xs font-bold">Cash on Delivery</div>
                    <div className="text-[10px] text-slate-500">Pay on Delivery</div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border text-left space-y-2 transition-all ${
                      paymentMethod === "card"
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-amber-500" />
                    <div className="text-xs font-bold">Card / Netbanking</div>
                    <div className="text-[10px] text-slate-500">Visa, Mastercard, Bank</div>
                  </button>
                </div>

                {paymentMethod === "upi" && (
                  <div className="bg-slate-100 dark:bg-slate-800/80 p-4 rounded-2xl text-center space-y-2 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Pay ₹{cartFinalTotal} to Official JAS Agro UPI ID:
                    </p>
                    <div className="font-mono text-sm font-extrabold text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-900 inline-block px-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      7372926623@paytm
                    </div>
                  </div>
                )}

                <div className="pt-3 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={handleCompleteOrder}
                    className="py-3.5 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-xl flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{isHindi ? "ऑर्डर की पुष्टि करें एवं व्हाट्सएप भेजें" : "Confirm Order & WhatsApp Dispatch"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl animate-in fade-in duration-200">
            <button
              onClick={() => {
                setQuickViewProduct(null);
                setQuickViewQty(1);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-100 dark:bg-slate-800/80 rounded-2xl p-4 h-64 flex items-center justify-center">
                <img
                  src={quickViewProduct.img}
                  alt={quickViewProduct.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-500/30">
                  {isHindi ? quickViewProduct.categoryHi : quickViewProduct.category}
                </span>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  {isHindi ? quickViewProduct.titleHi : quickViewProduct.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isHindi ? quickViewProduct.descriptionHi : quickViewProduct.description}
                </p>

                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-2xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400">
                    ₹{quickViewProduct.price * quickViewQty}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">₹{quickViewProduct.originalPrice * quickViewQty}</span>
                  )}
                  <span className="text-xs text-slate-500">
                    ({isHindi ? quickViewProduct.unitHi : quickViewProduct.unit})
                  </span>
                </div>

                {/* Quick View Quantity Selector (- 1 +) */}
                <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-2 rounded-xl">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    {isHindi ? "मात्रा चुनें:" : "Select Quantity:"}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={quickViewQty <= 1}
                      onClick={() => setQuickViewQty(Math.max(1, quickViewQty - 1))}
                      className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 font-bold flex items-center justify-center text-xs shadow-xs disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {quickViewQty}
                    </span>
                    <button
                      onClick={() => setQuickViewQty(quickViewQty + 1)}
                      className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 font-bold flex items-center justify-center text-xs shadow-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  {!quickViewProduct.outOfStock ? (
                    <button
                      onClick={() => {
                        handleBuyNow(quickViewProduct, quickViewQty);
                        setQuickViewProduct(null);
                        setQuickViewQty(1);
                      }}
                      className="flex-1 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {isHindi ? "अभी खरीदें (Buy Now)" : "Buy Now"}
                    </button>
                  ) : (
                    <div className="flex-1 py-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-500 text-xs font-bold text-center">
                      Currently Out of Stock
                    </div>
                  )}

                  <a
                    href={quickViewProduct.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
