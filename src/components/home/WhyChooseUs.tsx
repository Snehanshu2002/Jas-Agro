"use client";

import React from "react";
import { Award, Leaf, Lightbulb, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const points = [
    {
      titleEn: "Agriculture Expertise",
      titleHi: "एग्री एक्सपर्टाइज",
      descEn: "Deep knowledge in spawn multiplication, aquatic bio-cultures, and fodder crop agronomy.",
      descHi: "मशरूम कल्टीवेशन, अजोला चारा और ऑर्गेनिक फार्मिंग में खास एक्सपर्टाइज।",
      icon: Award,
    },
    {
      titleEn: "Sustainable Approach",
      titleHi: "सस्टेनेबल अप्रोच",
      descEn: "Zero reliance on harmful chemicals; focus on organic matter restoration and water conservation.",
      descHi: "ज़ीरो केमिकल्स, सोइल हेल्थ सुधार और पानी की बचत पर ध्यान।",
      icon: Leaf,
    },
    {
      titleEn: "Innovative Solutions",
      titleHi: "इनोवेटिव सॉल्यूशंस",
      descEn: "High-yielding crop varieties and compact bio-reactors for max yield per square foot.",
      descHi: "हाई-यील्ड फॉडर क्रॉप्स और स्मार्ट फार्मिंग सेटअप्स।",
      icon: Lightbulb,
    },
    {
      titleEn: "Smart Technology",
      titleHi: "स्मार्ट टेक",
      descEn: "Custom ESP32 microcontrollers, DHT22 sensor arrays, and instant mobile cloud telemetry.",
      descHi: "ESP32 माइक्रोकंट्रोलर्स, सेंसर्स और इंस्टेंट मोबाइल अलर्ट्स।",
      icon: Cpu,
    },
    {
      titleEn: "Quality Focus",
      titleHi: "क्वालिटी फर्स्ट",
      descEn: "Rigorously tested pure culture strains, pasteurization protocols, and certified earthworm beds.",
      descHi: "टेस्टेड मशरूम स्पॉन, प्योर कल्चर और सर्टिफाइड वर्मीकंपोस्ट बेड्स।",
      icon: ShieldCheck,
    },
    {
      titleEn: "Farmer-Centric Thinking",
      titleHi: "फार्मर-सेंट्रिक",
      descEn: "Practical, cost-effective solutions engineered to maximize profit margins for farm owners.",
      descHi: "फार्मर्स और डेयरी ओनर्स की इनकम बढ़ाने वाले कॉस्ट-इफेक्टिव सॉल्यूशंस।",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "JAS एग्रो क्यों चुनें?" : "THE JAS AGRO ADVANTAGE"}
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "JAS एग्रो ही " : "Why Choose "}
            <span className="text-amber-600 dark:text-amber-400">
              {language === "hi" ? "क्यों?" : "JAS Agro?"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            {language === "hi"
              ? "हम ट्रेडिशनल फार्मिंग एक्सपीरियंस और मॉडर्न स्मार्ट एग्रीटेक का बेहतरीन संगम देते हैं।"
              : "We bridge the gap between traditional agricultural wisdom and modern precision agri-tech."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            const title = language === "hi" ? pt.titleHi : pt.titleEn;
            const desc = language === "hi" ? pt.descHi : pt.descEn;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all space-y-4 hover:-translate-y-1 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
