"use client";

import React from "react";
import { Truck, Shield, CreditCard, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ShopTrustStrip: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const trustItems = [
    {
      icon: <Truck className="w-[21.5px] h-[21.5px] text-[#529116]" />,
      titleEn: "Free Shipping Above ₹499",
      titleHi: "₹499 से अधिक पर मुफ़्त डिलीवरी",
      descEn: "Fast pan-India dispatch straight from our processing facility.",
      descHi: "हमारे प्रोसेसिंग प्लांट से सीधे फास्ट पैन-इंडिया डिलीवरी।",
    },
    {
      icon: <Shield className="w-[21.5px] h-[21.5px] text-[#529116]" />,
      titleEn: "100% Farm-Fresh & Organic",
      titleHi: "100% शुद्ध एवं जैविक उत्पाद",
      descEn: "Zero chemical preservatives or synthetic additives.",
      descHi: "बिना किसी हानिकारक केमिकल या प्रिजर्वेटिव के शुद्ध उत्पादन।",
    },
    {
      icon: <CreditCard className="w-[21.5px] h-[21.5px] text-[#529116]" />,
      titleEn: "Secure UPI & Cash on Delivery",
      titleHi: "सुरक्षित UPI एवं कैश ऑन डिलीवरी",
      descEn: "Flexible payment options with instant confirmation.",
      descHi: "त्वरित पुष्टि के साथ सुविधाजनक भुगतान विकल्प।",
    },
    {
      icon: <MessageSquare className="w-[21.5px] h-[21.5px] text-[#529116]" />,
      titleEn: "Direct WhatsApp Farmer Support",
      titleHi: "सीधा WhatsApp किसान सहायता",
      descEn: "Instant guidance & order assistance at +91 73729 26623.",
      descHi: "+91 73729 26623 पर त्वरित ऑर्डर सहायता और मार्गदर्शन।",
    },
  ];

  return (
    <section className="py-7 sm:py-9 bg-slate-100 dark:bg-[#121212] border-t border-slate-200 dark:border-[#222222] transition-colors duration-200">
      <div className="w-full max-w-[1420px] mx-auto box-border px-4 sm:px-8 lg:px-[50px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] shadow-2xs hover:border-[#3f7010]/50 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-[#3f7010]/15 dark:bg-[#3f7010]/20 border border-[#3f7010]/30 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="font-heading font-bold text-[13.5px] sm:text-[14.5px] text-slate-900 dark:text-white">
                  {isHindi ? item.titleHi : item.titleEn}
                </h4>
                <p className="text-[12.5px] text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {isHindi ? item.descHi : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
