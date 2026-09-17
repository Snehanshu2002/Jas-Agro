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
        "Azolla ponds और Super Napier Grass से हमारे dairy feed का सिस्टम बहुत बढ़िया हो गया। Daily milk yield बढ़ी और feed cost 25% से ज़्यादा कम हो गई।",
      authorEn: "Commercial Dairy Farm Partner",
      authorHi: "Dairy Farm Owner",
      locationEn: "Rajasthan, India",
      locationHi: "राजस्थान, भारत",
      solutionEn: "Azolla & Super Napier Fodder",
      solutionHi: "अजोला और सुपर नेपियर चारा",
      badgeEn: "Client Case Study",
      badgeHi: "Client Review",
    },
    {
      quoteEn:
        "JAS Agro's IoT grow room controller for Oyster Mushrooms provided precise temperature and humidity monitoring. Automated misters eliminated crop drying during hot summer months.",
      quoteHi:
        "Oyster Mushroom के लिए JAS Agro के IoT controller ने Temperature और Humidity का सटीक control दिया। Automatic misting से गर्मियों में भी crop बिलकुल safe रहती है।",
      authorEn: "Agri-Entrepreneur & Grower",
      authorHi: "Agri Producer",
      locationEn: "North India",
      locationHi: "उत्तर भारत",
      solutionEn: "Oyster Mushroom + IoT Telemetry",
      solutionHi: "ऑयस्टर मशरूम + IoT सेट-अप",
      badgeEn: "Grower Case Study",
      badgeHi: "Grower Story",
    },
    {
      quoteEn:
        "Transitioning to bio-active vermicompost restored topsoil health across our horticulture orchards. Tree root vigor and moisture retention improved significantly within one season.",
      quoteHi:
        "Organic Vermicompost use करने से हमारी soil quality बहुत बेहतर हो गई। एक ही season में roots की मजबूती और moisture holding capacity काफ़ी बढ़ गई।",
      authorEn: "Horticulture Orchard Manager",
      authorHi: "Farm Manager",
      locationEn: "Central India",
      locationHi: "मध्य भारत",
      solutionEn: "Organic Vermicompost",
      solutionHi: "जैविक वर्मीकंपोस्ट खाद",
      badgeEn: "Orchard Case Study",
      badgeHi: "Farm Review",
    },
  ];

  return (
    <section className="py-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "Farmer Feedback & Reviews" : "FARMER & PARTNER FEEDBACK"}
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "हमारे Farmers और Partners के " : "What Our "}
            <span className="text-emerald-600 dark:text-amber-400">
              {language === "hi" ? "अनुभव" : "Partners Say"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            {language === "hi"
              ? "हमारे Farmers और Dairy Partners के real experience और results।"
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
                className="bg-slate-50 dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-6 relative shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                      {badge}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-emerald-600/40 dark:text-amber-400/40" />

                  <p className="text-slate-700 dark:text-slate-200 text-sm italic leading-relaxed">
                    "{quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">{author}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 block">
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
