"use client";

import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ShopNewsletter: React.FC = () => {
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#78590B] text-white py-6 sm:py-7 border-y border-[#5E4405]">
      <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Title & Subtitle (+1.5px) */}
          <div className="space-y-0.5 text-center md:text-left">
            <h3 className="font-heading font-bold text-[15.5px] sm:text-[17.5px] md:text-[19.5px] text-white tracking-tight">
              {t("shopNewsletterTitle")}
            </h3>
            <p className="text-[13.5px] text-amber-100/90 max-w-xl">
              {t("shopNewsletterDesc")}
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-white text-[13.5px] font-bold flex items-center gap-2 shadow-2xs">
                <CheckCircle className="w-4.5 h-4.5 text-[#529116] shrink-0" />
                <span>
                  {t("shopNewsletterSuccess")}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <label htmlFor="shop-newsletter-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="shop-newsletter-email"
                  type="email"
                  required
                  placeholder={t("shopNewsletterPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 text-[13.5px] sm:text-[14.5px] rounded-xl bg-black/40 border border-white/25 text-white placeholder:text-amber-200/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-4.5 py-2 rounded-xl bg-[#3f7010] hover:bg-[#345d0d] text-white font-bold text-[13.5px] border border-white/20 transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-2xs active:scale-98 cursor-pointer"
                >
                  <span>{t("shopNewsletterButton")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
