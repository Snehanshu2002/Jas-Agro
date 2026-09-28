"use client";

import React, { useState } from "react";
import {
  MapPin,
  Truck,
  CheckCircle2,
  XCircle,
  Navigation,
  Loader2,
  Calendar,
  AlertCircle,
  Banknote,
  RotateCcw,
} from "lucide-react";
import { useDelivery } from "@/context/DeliveryContext";
import { useLanguage } from "@/context/LanguageContext";

interface DeliveryCheckerProps {
  productId?: string;
  category?: string;
  className?: string;
}

export const DeliveryChecker: React.FC<DeliveryCheckerProps> = ({
  className = "",
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const {
    deliveryInfo,
    isLoading,
    isDetectingLocation,
    error,
    checkPincode,
    detectLocation,
    clearDeliveryInfo,
  } = useDelivery();

  const [inputPin, setInputPin] = useState<string>(deliveryInfo?.pincode || "");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric characters, max 6 digits
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setInputPin(val);
    if (localError) setLocalError(null);
  };

  const handleCheck = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputPin || inputPin.length !== 6) {
      setLocalError(
        isHindi
          ? "कृपया 6 अंकों का मान्य भारतीय पिन कोड दर्ज करें।"
          : "Please enter a valid 6-digit Indian PIN code."
      );
      return;
    }
    setLocalError(null);
    await checkPincode(inputPin);
  };

  const handleDetectLocation = async () => {
    setLocalError(null);
    const success = await detectLocation();
    if (!success && error) {
      setLocalError(error);
    }
  };

  const displayError = localError || error;

  return (
    <div
      className={`w-full rounded-2xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] p-3.5 sm:p-4 shadow-xs transition-all duration-200 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-[#222]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#ecf6e3] dark:bg-[#3f7010]/20 text-[#3f7010] dark:text-[#7ec238] flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
              {t("shopCheckDeliveryTitle")}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400">
              {t("shopCheckDeliveryDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* When NO PIN is checked or user is changing PIN */}
      {!deliveryInfo ? (
        <div className="mt-3 space-y-2.5">
          <form onSubmit={handleCheck} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={inputPin}
                onChange={handleInputChange}
                placeholder={t("shopEnterPincodePlaceholder")}
                className="w-full h-10 sm:h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#1d1d1d] border border-slate-200 dark:border-[#333] focus:border-[#3f7010] focus:ring-1 focus:ring-[#3f7010] text-slate-900 dark:text-white text-xs sm:text-sm font-mono placeholder:text-slate-400 dark:placeholder:text-zinc-500 placeholder:font-sans outline-hidden transition-colors"
              />
              {inputPin.length > 0 && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 dark:text-zinc-400">
                  {inputPin.length}/6
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || isDetectingLocation || inputPin.length !== 6}
              className="h-10 sm:h-11 px-4 sm:px-5 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:scale-95 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>{t("shopChecking")}</span>
                </>
              ) : (
                <span>{t("shopCheck")}</span>
              )}
            </button>
          </form>

          {/* Location Detection Button */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isLoading || isDetectingLocation}
              className="flex items-center gap-1.5 text-xs text-[#3f7010] dark:text-[#7ec238] hover:text-[#529116] dark:hover:text-[#9de057] transition-colors cursor-pointer py-1 font-medium disabled:opacity-50"
            >
              {isDetectingLocation ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#3f7010] dark:text-[#7ec238]" />
                  <span>{t("shopDetectingLocation")}</span>
                </>
              ) : (
                <>
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t("shopUseCurrentLocation")}</span>
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {displayError && (
            <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{displayError}</span>
            </div>
          )}
        </div>
      ) : (
        /* When Delivery Info is Checked & Active */
        <div className="mt-3 space-y-3">
          {/* Location Status Bar */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#1c1c1c] border border-slate-200 dark:border-[#2e2e2e]">
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  deliveryInfo.serviceable
                    ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                    : "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400"
                }`}
              >
                {deliveryInfo.serviceable ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  <XCircle className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {deliveryInfo.city}, {deliveryInfo.state}{" "}
                  <span className="font-mono text-[#3f7010] dark:text-[#7ec238]">({deliveryInfo.pincode})</span>
                </p>
                <p className="text-[10.5px] text-slate-500 dark:text-zinc-400 truncate">
                  {deliveryInfo.serviceable
                    ? isHindi
                      ? "डिलीवरी उपलब्ध है"
                      : `Serviceable via ${deliveryInfo.courierPartner}`
                    : isHindi
                    ? "सीधी डिलीवरी अनुपलब्ध"
                    : "Currently unserviceable for direct courier"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                clearDeliveryInfo();
                setInputPin(deliveryInfo.pincode);
              }}
              className="text-xs text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold px-2.5 py-1 rounded-lg hover:bg-slate-200/60 dark:hover:bg-white/5 transition-colors cursor-pointer shrink-0 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t("shopChange")}</span>
            </button>
          </div>

          {/* Serviceable Details Grid */}
          {deliveryInfo.serviceable ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {/* Delivery Estimate */}
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#181818] border border-slate-100 dark:border-[#282828]">
                <Calendar className="w-4 h-4 text-[#3f7010] dark:text-[#7ec238] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400">{t("shopEstimatedDelivery")}</p>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{deliveryInfo.estimatedDeliveryDate}</p>
                  <p className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">({deliveryInfo.estimatedDays})</p>
                </div>
              </div>

              {/* Shipping Charges */}
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#181818] border border-slate-100 dark:border-[#282828]">
                <Truck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400">{t("shopShippingCost")}</p>
                  <p className="font-bold text-emerald-600 dark:text-emerald-400">
                    {t("shopFreeAbove499")}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-zinc-400">Standard: ₹{deliveryInfo.shippingFee}</p>
                </div>
              </div>

              {/* Cash On Delivery & Fast Dispatch */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#181818] border border-slate-100 dark:border-[#282828] sm:col-span-2">
                <Banknote className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-700 dark:text-zinc-300">
                  {deliveryInfo.cashOnDeliveryAvailable
                    ? isHindi
                      ? "कैश ऑन डिलीवरी (COD) उपलब्ध है"
                      : "Cash on Delivery (COD) available for this location"
                    : isHindi
                    ? "केवल प्रीपेड ऑर्डर"
                    : "Prepaid orders only"}
                </span>
              </div>
            </div>
          ) : (
            /* Unserviceable Notification */
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/25 space-y-1.5 text-xs text-amber-800 dark:text-amber-300">
              <p className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{isHindi ? "इस क्षेत्र में सीधी डिलीवरी उपलब्ध नहीं है" : "Delivery Not Serviceable"}</span>
              </p>
              <p className="text-[11px] text-amber-700 dark:text-amber-200/80 leading-relaxed">
                {deliveryInfo.message ||
                  (isHindi
                    ? "हम जल्द ही इस पिन कोड पर विस्तार कर रहे हैं। कृपया दूसरा पिन कोड आज़माएँ या कस्टम फ्रेट के लिए संपर्क करें।"
                    : "We are currently expanding to this region. Please try another PIN code or contact JAS Agro for special bulk farm transport.")}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
