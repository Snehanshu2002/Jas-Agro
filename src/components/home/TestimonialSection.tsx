"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TestimonialSection: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      quoteEn:
        "The Azolla culture ponds and Super Napier grass slips transformed our dairy feed program. Our daily milk yield increased while commercial feed expenditures dropped by over 25%.",
      quoteHi:
        "अजोला पॉन्ड्स और सुपर नेपियर घास से हमारे डेयरी फीड का सिस्टम बहुत बढ़िया हो गया। डेली मिल्क यील्ड बढ़ी और फीड कॉस्ट 25% से ज़्यादा कम हो गई।",
      authorEn: "Commercial Dairy Farm Partner",
      authorHi: "डेयरी फार्म ओनर",
      locationEn: "Rajasthan, India",
      locationHi: "राजस्थान, भारत",
      solutionEn: "Azolla & Super Napier Fodder",
      solutionHi: "अजोला और सुपर नेपियर चारा",
      badgeEn: "Client Case Study",
      badgeHi: "क्लाइंट रिव्यू",
    },
    {
      quoteEn:
        "JAS Agro's IoT grow room controller for Oyster Mushrooms provided precise temperature and humidity monitoring. Automated misters eliminated crop drying during hot summer months.",
      quoteHi:
        "ऑयस्टर मशरूम के लिए JAS एग्रो के IoT कंट्रोलर ने टेम्परेचर और ह्यूमिडिटी का सटीक कंट्रोल दिया। ऑटोमैटिक मिस्टिंग से गर्मियों में भी क्रॉप बिलकुल सेफ रहती है।",
      authorEn: "Agri-Entrepreneur & Grower",
      authorHi: "एग्री प्रोड्यूसर",
      locationEn: "North India",
      locationHi: "उत्तर भारत",
      solutionEn: "Oyster Mushroom + IoT Telemetry",
      solutionHi: "ऑयस्टर मशरूम + IoT सेटअप",
      badgeEn: "Grower Case Study",
      badgeHi: "ग्रोअर स्टोरी",
    },
    {
      quoteEn:
        "Transitioning to bio-active vermicompost restored topsoil health across our horticulture orchards. Tree root vigor and moisture retention improved significantly within one season.",
      quoteHi:
        "ऑर्गेनिक वर्मीकंपोस्ट यूज़ करने से हमारी सोइल क्वालिटी बहुत बेहतर हो गई। एक ही सीजन में रूट्स की मजबूती और मॉइस्चर होल्डिंग कैपेसिटी काफ़ी बढ़ गई।",
      authorEn: "Horticulture Orchard Manager",
      authorHi: "फार्म मैनेजर",
      locationEn: "Central India",
      locationHi: "मध्य भारत",
      solutionEn: "Organic Vermicompost",
      solutionHi: "जैविक वर्मीकंपोस्ट खाद",
      badgeEn: "Orchard Case Study",
      badgeHi: "फार्म रिव्यू",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300 border-t border-[#123B13]/10 dark:border-[#B8F21B]/15">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest">
            {language === "hi" ? "फार्मर फीडबैक & रिव्यू" : "FARMER & PARTNER FEEDBACK"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5]">
            {language === "hi" ? "हमारे फार्मर्स और पार्टनर्स के " : "What Our "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "अनुभव" : "Partners Say"}
            </span>
          </h2>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base">
            {language === "hi"
              ? "हमारे फार्मर्स और डेयरी पार्टनर्स के रियल एक्सपीरियंस और रिजल्ट्स।"
              : "Sample client experiences demonstrating real-world agricultural outcomes and fodder feed security."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const quote = language === "hi" ? t.quoteHi : t.quoteEn;
            const author = language === "hi" ? t.authorHi : t.authorEn;
            const location = language === "hi" ? t.locationHi : t.locationEn;
            const solution = language === "hi" ? t.solutionHi : t.solutionEn;
            const badge = language === "hi" ? t.badgeHi : t.badgeEn;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#123B13]/70 p-8 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] hover:border-[#2F7D16]/50 transition-all flex flex-col justify-between space-y-6 relative shadow-xs hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#4F9D1F] dark:text-[#B8F21B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#0D230E] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] font-bold">
                      {badge}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#2F7D16]/30 dark:text-[#B8F21B]/30" />

                  <p className="text-[#111811]/90 dark:text-[#FAFAF5]/90 text-sm italic leading-relaxed font-normal">
                    "{quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#123B13]/10 dark:border-[#1B4D1C] flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-sm">{author}</h4>
                    <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">{location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-[#2F7D16] dark:text-[#B8F21B] block">
                      {solution}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
