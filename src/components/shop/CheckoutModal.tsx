"use client";

import React, { useState, useEffect } from "react";
import { ShopProduct } from "@/data/shopProducts";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  Tag,
  Check,
  ArrowRight,
  ChevronLeft,
  Smartphone,
  Truck,
  CreditCard,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

interface CartItem {
  product: ShopProduct;
  quantity: number;
}

interface ShippingForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  townCity: string;
  state: string;
  pincode: string;
  notes: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  cartSubtotal: number;
  discountAmount: number;
  shippingCharge: number;
  cartFinalTotal: number;
  couponApplied: { code: string; discountPercent: number } | null;
  onApplyCoupon: (code: string) => { success: boolean; message: string };
  onUpdateCartQuantity: (productId: string, delta: number) => void;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  cartSubtotal,
  discountAmount,
  shippingCharge,
  cartFinalTotal,
  couponApplied,
  onApplyCoupon,
  onClearCart,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showCouponInput, setShowCouponInput] = useState<boolean>(false);
  const [couponInput, setCouponInput] = useState<string>("");
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const [shippingForm, setShippingForm] = useState<ShippingForm>({
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

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "cod" | "card">("upi");
  const [orderConfirmed, setOrderConfirmed] = useState<{ orderId: string; total: number } | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && !orderConfirmed) onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, orderConfirmed, onClose]);

  if (!isOpen) return null;

  const handleCouponSubmit = () => {
    if (!couponInput.trim()) return;
    const res = onApplyCoupon(couponInput.trim());
    setCouponFeedback(res);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.firstName || !shippingForm.phone || !shippingForm.streetAddress || !shippingForm.townCity || !shippingForm.pincode) {
      alert(t("shopFillRequiredFields"));
      return;
    }
    setStep(2);
  };

  const handlePlaceOrder = () => {
    const orderId = `JAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed({ orderId, total: cartFinalTotal });

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }

    // Prepare WhatsApp Message
    const itemsList = cart
      .map(
        (item, i) =>
          `${i + 1}. ${isHindi ? item.product.titleHi : item.product.title} (Qty: ${item.quantity}) - ₹${item.product.price * item.quantity}`
      )
      .join("%0A");

    const addressText = `%0A%0A*Delivery Address:*%0A${shippingForm.firstName} ${shippingForm.lastName}%0A${shippingForm.streetAddress}, ${shippingForm.townCity}, ${shippingForm.state} - ${shippingForm.pincode}%0APhone: ${shippingForm.phone}`;
    const couponText = couponApplied ? `%0A*Coupon Applied:* ${couponApplied.code} (${couponApplied.discountPercent}%)` : "";
    const paymentText = `%0A%0A*Payment Method:* ${paymentMethod.toUpperCase()}${couponText}%0A*Total Amount:* ₹${cartFinalTotal}`;

    const text = `*New Order Placed on JAS Agro Shop!*%0A*Order ID:* ${orderId}%0A%0A*Items:*%0A${itemsList}${addressText}${paymentText}`;

    // Clear cart
    onClearCart();

    // Open WhatsApp
    window.open(`https://wa.me/917372926623?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => !orderConfirmed && onClose()}
        aria-hidden="true"
      />

      {/* Dialog Body */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("shopCheckoutTitle")}
        className="relative bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-[#2c2c2c] rounded-2xl sm:rounded-3xl max-w-2xl w-full p-4 sm:p-7 shadow-2xl z-10 animate-in fade-in duration-200 max-h-[92vh] overflow-y-auto text-slate-900 dark:text-white transition-colors duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={isHindi ? "चेकआउट बंद करें" : "Close checkout"}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-[#2a2a2a] text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ORDER SUCCESS SCREEN */}
        {orderConfirmed ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#529116] flex items-center justify-center mx-auto border border-[#3f7010]/30 dark:border-[#3f7010]/50">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                {t("shopOrderSuccessTitle")}
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                {isHindi
                  ? `आपका ऑर्डर #${orderConfirmed.orderId} कन्फर्म हो चुका है। पूरा विवरण WhatsApp पर भेज दिया गया है।`
                  : `Your order #${orderConfirmed.orderId} is confirmed. Our support team will process your shipment promptly.`}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-[#121212] p-5 rounded-2xl border border-slate-200 dark:border-[#2c2c2c] max-w-sm mx-auto text-sm space-y-2">
              <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                <span>{isHindi ? "ऑर्डर ID:" : "Order ID:"}</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">#{orderConfirmed.orderId}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                <span>{isHindi ? "कुल राशि:" : "Total Amount:"}</span>
                <span className="font-mono font-bold text-[#3f7010] dark:text-[#529116] text-base">₹{orderConfirmed.total}</span>
              </div>
              <div className="flex justify-between text-slate-500 dark:text-zinc-400">
                <span>{isHindi ? "डिलीवरी पता:" : "Delivery To:"}</span>
                <span className="truncate max-w-[160px] font-semibold text-slate-800 dark:text-zinc-200">{shippingForm.townCity}, {shippingForm.state}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                {isHindi ? "शॉप पर वापस जाएं" : "Continue Shopping"}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header & Steps Indicator */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                {isHindi ? "डायरेक्ट चेकआउट" : "Direct Checkout"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                {isHindi ? "आधिकारिक JAS Agro एक्सप्रेस ऑर्डर" : "Official JAS Agro Express Order"}
              </p>
            </div>

            {/* 3-Step Progress Bar */}
            <div className="flex items-center justify-between relative py-2">
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-[#2c2c2c] -translate-y-1/2 z-0" />

              {[
                { stepNum: 1, labelEn: "Shipping", labelHi: "डिलीवरी पता" },
                { stepNum: 2, labelEn: "Summary", labelHi: "ऑर्डर सारांश" },
                { stepNum: 3, labelEn: "Payment", labelHi: "भुगतान" },
              ].map(({ stepNum, labelEn, labelHi }) => {
                const isActive = step === stepNum;
                const isCompleted = step > stepNum;

                return (
                  <button
                    key={stepNum}
                    onClick={() => {
                      if (stepNum < step || (stepNum === 2 && shippingForm.firstName) || (stepNum === 3 && shippingForm.firstName)) {
                        setStep(stepNum as 1 | 2 | 3);
                      }
                    }}
                    className="relative z-10 flex flex-col items-center gap-1.5 group cursor-pointer"
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 transition-all ${isActive
                          ? "bg-amber-500 text-slate-950 border-amber-500 shadow-md scale-110"
                          : isCompleted
                            ? "bg-[#3f7010] text-white border-[#3f7010]"
                            : "bg-white dark:bg-[#121212] border-slate-300 dark:border-[#333333] text-slate-400 dark:text-zinc-500"
                        }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : stepNum}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-semibold ${isActive
                          ? "text-amber-600 dark:text-amber-400 font-bold"
                          : isCompleted
                            ? "text-[#3f7010] dark:text-[#529116]"
                            : "text-slate-400 dark:text-zinc-500"
                        }`}
                    >
                      {isHindi ? labelHi : labelEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Coupon Accordion Banner */}
            <div className="bg-slate-50 dark:bg-[#121212] p-3.5 rounded-xl border border-slate-200 dark:border-[#2c2c2c] flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300">
                <Tag className="w-4 h-4 text-amber-500" />
                <span>
                  {couponApplied
                    ? `${isHindi ? "कूपन लागू:" : "Coupon active:"} ${couponApplied.code} (${couponApplied.discountPercent}% OFF)`
                    : isHindi
                      ? "कूपन कोड है? (उदा. JAS10, WELCOME20)"
                      : "Have a promo coupon? (e.g. JAS10, WELCOME20)"}
                </span>
              </div>
              <button
                onClick={() => setShowCouponInput(!showCouponInput)}
                className="text-amber-600 dark:text-amber-400 font-bold hover:underline cursor-pointer"
              >
                {showCouponInput ? (isHindi ? "छिपाएं" : "Close") : (isHindi ? "दर्ज करें" : "Apply")}
              </button>
            </div>

            {showCouponInput && (
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 space-y-2.5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter JAS10 or WELCOME20"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-lg bg-white dark:bg-black border border-slate-300 dark:border-[#333333] text-xs sm:text-sm font-mono font-bold uppercase"
                  />
                  <button
                    onClick={handleCouponSubmit}
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    {isHindi ? "लागू करें" : "Apply"}
                  </button>
                </div>
                {couponFeedback && (
                  <p
                    className={`text-xs font-semibold flex items-center gap-1.5 ${couponFeedback.success ? "text-[#3f7010] dark:text-[#529116]" : "text-red-500"
                      }`}
                  >
                    {couponFeedback.success ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    {couponFeedback.message}
                  </p>
                )}
              </div>
            )}

            {/* STEP 1: BILLING & DELIVERY ADDRESS */}
            {step === 1 && (
              <form onSubmit={handleStep1Submit} className="space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  {isHindi ? "1. डिलीवरी एवं ग्राहक विवरण" : "1. Customer & Delivery Address"}
                </h3>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "पहला नाम *" : "First Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHindi ? "उदा. रमेश" : "e.g. Ramesh"}
                      value={shippingForm.firstName}
                      onChange={(e) => setShippingForm({ ...shippingForm, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "अंतिम नाम *" : "Last Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHindi ? "उदा. शर्मा" : "e.g. Sharma"}
                      value={shippingForm.lastName}
                      onChange={(e) => setShippingForm({ ...shippingForm, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "मोबाइल नंबर *" : "Phone Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "ईमेल आईडी" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={shippingForm.email}
                      onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                    {isHindi ? "मकान नं. / सड़क / क्षेत्र का पता *" : "Street Address / House No. *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isHindi ? "मकान/प्लॉट नं., सड़क, लैंडमार्क" : "House/Plot No., Street, Landmark"}
                    value={shippingForm.streetAddress}
                    onChange={(e) => setShippingForm({ ...shippingForm, streetAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "शहर *" : "Town / City *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isHindi ? "जयपुर" : "Jaipur"}
                      value={shippingForm.townCity}
                      onChange={(e) => setShippingForm({ ...shippingForm, townCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "राज्य *" : "State *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingForm.state}
                      onChange={(e) => setShippingForm({ ...shippingForm, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300">
                      {isHindi ? "पिन कोड *" : "Pincode *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="302033"
                      value={shippingForm.pincode}
                      onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#2c2c2c] text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#3f7010]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-7 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>{isHindi ? "ऑर्डर सारांश देखें →" : "Continue to Order Summary →"}</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: ORDER SUMMARY & REVIEW */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  {isHindi ? "2. ऑर्डर सारांश एवं मूल्य" : "2. Order Summary & Price Breakdown"}
                </h3>

                {/* Items List */}
                <div className="max-h-52 overflow-y-auto space-y-2.5 pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 bg-slate-50 dark:bg-[#121212] rounded-xl border border-slate-200 dark:border-[#2c2c2c] flex items-center justify-between text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.img}
                          alt={isHindi ? item.product.titleHi : item.product.title}
                          className="w-12 h-12 object-contain rounded-lg bg-white p-0.5"
                        />
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white line-clamp-1 max-w-[220px]">
                            {isHindi ? item.product.titleHi : item.product.title}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-zinc-400">₹{item.product.price} × {item.quantity}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="bg-slate-50 dark:bg-[#121212] p-4 rounded-xl space-y-2.5 text-xs sm:text-sm border border-slate-200 dark:border-[#2c2c2c]">
                  <div className="flex justify-between text-slate-600 dark:text-zinc-300">
                    <span>{t("shopSubtotal")}:</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">₹{cartSubtotal}</span>
                  </div>
                  {couponApplied && (
                    <div className="flex justify-between text-[#3f7010] dark:text-[#529116] font-bold">
                      <span>{isHindi ? `छूट (${couponApplied.code}):` : `Discount (${couponApplied.code}):`}</span>
                      <span className="font-mono">-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600 dark:text-zinc-300">
                    <span>{t("shopShipping")}:</span>
                    <span>{shippingCharge === 0 ? <span className="text-[#3f7010] dark:text-[#529116] font-bold">{t("shopFree")}</span> : `₹${shippingCharge}`}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white pt-2.5 border-t border-slate-200 dark:border-[#2c2c2c]">
                    <span>{isHindi ? "कुल देय राशि:" : "Total Payable:"}</span>
                    <span className="text-[#3f7010] dark:text-[#529116] font-mono text-lg">₹{cartFinalTotal}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => setStep(1)}
                    className="py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{isHindi ? "वापस" : "Back"}</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="py-3 px-7 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>{isHindi ? "भुगतान विधि चुनें →" : "Proceed to Payment →"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                  {isHindi ? "3. भुगतान विधि चुनें" : "3. Choose Payment Method"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      paymentMethod === "upi"
                        ? "bg-[#ecf6e3] dark:bg-[#3f7010]/20 border-[#3f7010] text-[#3f7010] dark:text-[#529116] font-bold shadow-sm"
                        : "bg-slate-50 dark:bg-[#121212] border-slate-200 dark:border-[#2c2c2c] text-slate-700 dark:text-zinc-300"
                    }`}
                  >
                    <Smartphone className="w-6 h-6 text-amber-500 mb-1.5" />
                    <div className="text-sm font-bold">{isHindi ? "UPI / त्वरित भुगतान" : "UPI / Instant Pay"}</div>
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-normal">GPay, PhonePe, Paytm</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      paymentMethod === "cod"
                        ? "bg-[#ecf6e3] dark:bg-[#3f7010]/20 border-[#3f7010] text-[#3f7010] dark:text-[#529116] font-bold shadow-sm"
                        : "bg-slate-50 dark:bg-[#121212] border-slate-200 dark:border-[#2c2c2c] text-slate-700 dark:text-zinc-300"
                    }`}
                  >
                    <Truck className="w-6 h-6 text-amber-500 mb-1.5" />
                    <div className="text-sm font-bold">{isHindi ? "कैश ऑन डिलीवरी" : "Cash on Delivery"}</div>
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-normal">{isHindi ? "घर पर डिलीवरी के समय भुगतान" : "Pay at your doorstep"}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      paymentMethod === "card"
                        ? "bg-[#ecf6e3] dark:bg-[#3f7010]/20 border-[#3f7010] text-[#3f7010] dark:text-[#529116] font-bold shadow-sm"
                        : "bg-slate-50 dark:bg-[#121212] border-slate-200 dark:border-[#2c2c2c] text-slate-700 dark:text-zinc-300"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-amber-500 mb-1.5" />
                    <div className="text-sm font-bold">{isHindi ? "कार्ड / नेटबैंकिंग" : "Card / Netbanking"}</div>
                    <div className="text-xs text-slate-500 dark:text-zinc-400 font-normal">{isHindi ? "डेबिट, क्रेडिट कार्ड, बैंक" : "Debit, Credit, Bank"}</div>
                  </button>
                </div>

                {paymentMethod === "upi" && (
                  <div className="p-4 bg-slate-50 dark:bg-[#121212] rounded-2xl text-center space-y-2 border border-slate-200 dark:border-[#2c2c2c]">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      {isHindi ? "आधिकारिक JAS Agro UPI ID:" : "Official JAS Agro Instant UPI ID:"}
                    </p>
                    <div className="font-mono text-sm sm:text-base font-extrabold text-amber-600 dark:text-amber-400 bg-white dark:bg-black inline-block px-4 py-1.5 rounded-xl border border-slate-200 dark:border-[#333333] shadow-sm">
                      7372926623@paytm
                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-center border-t border-slate-200 dark:border-[#2c2c2c]">
                  <button
                    onClick={() => setStep(2)}
                    className="py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{isHindi ? "वापस" : "Back"}</span>
                  </button>

                  <button
                    onClick={handlePlaceOrder}
                    className="py-3.5 px-7 rounded-2xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>
                      {isHindi ? "ऑर्डर कन्फर्म करें एवं WhatsApp भेजें" : "Confirm Order & Send to WhatsApp"}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
