"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, MessageCircle, Phone, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPANY_INFO } from "@/data/company";

interface FaqItemData {
  id: string;
  category: string;
  categoryHi: string;
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
}

const FAQ_DATA: FaqItemData[] = [
  {
    id: "systems",
    category: "TURNKEY FARMING",
    categoryHi: "टर्नकी फार्मिंग",
    question: "What smart agricultural systems and turnkey setups does JAS Agro provide?",
    questionHi: "JAS Agro कौन-से स्मार्ट फार्मिंग सिस्टम और टर्नकी सेटअप प्रदान करता है?",
    answer:
      "JAS Agro designs and installs commercial controlled-environment Oyster & Button Mushroom grow rooms, automated Azolla aquatic super-fodder cultivation pits, perennial High-Biomass Hybrid Napier grass plantations, and 100% biological Vermicompost production units. Every system comes with standardized SOPs, high-grade organic inputs, and optional IoT automated environmental monitoring.",
    answerHi:
      "JAS Agro कमर्शियल ऑयस्टर व बटन मशरूम ग्रो-रूम्स, ऑटोमेटेड अजोला सुपर-चारा पिट्स, साल भर चलने वाली हाइब्रिड नेपियर घास प्लांटेशन और 100% बायोलॉजिकल वर्मीकंपोस्ट यूनिट्स के संपूर्ण टर्नकी सेटअप प्रदान करता है। हर सेटअप के साथ संचालन नियमावली और वैकल्पिक IoT ऑटोमेशन दिया जाता है।",
  },
  {
    id: "iot",
    category: "IOT TELEMETRY",
    categoryHi: "IoT टेलीमेट्री",
    question: "How does the IoT Smart Precision Farming & Telemetry system work?",
    questionHi: "JAS Agro का IoT प्रिसिजन फार्मिंग और टेलीमेट्री सिस्टम कैसे काम करता है?",
    answer:
      "Our IoT systems integrate industrial-grade soil moisture, relative humidity, temperature, and spore/CO₂ telemetry sensors with micro-controllers. The telemetry network automatically triggers micro-misting foggers, ventilation fans, and irrigation pumps when environmental thresholds deviate. Farmers receive real-time farm health diagnostics and emergency alerts directly on their smartphone.",
    answerHi:
      "हमारा IoT नेटवर्क सोइल मॉइस्चर, रिलेटिव ह्यूमिडिटी, तापमान और CO₂ टेलीमेट्री सेंसर्स के साथ माइक्रो-कंट्रोलर्स से जुड़ा होता है। क्लाइमेट में बदलाव होते ही यह ऑटोमैटिक रूप से फॉगर्स, पंखे और सिंचाई को चालू कर देता है और किसान के फोन पर रियल-टाइम अलर्ट भेजता है।",
  },
  {
    id: "training",
    category: "TRAINING LAB",
    categoryHi: "प्रशिक्षण केंद्र",
    question: "Do you offer practical hands-on training for Mushroom Cultivation?",
    questionHi: "क्या आप मशरूम उत्पादन के लिए व्यावहारिक और प्रैक्टिकल ट्रेनिंग प्रदान करते हैं?",
    answer:
      "Yes. We conduct intensive practical workshops at our Jaipur Corporate AgTech Hub and dedicated mushroom labs. The curriculum spans raw material pasteurization, high-yield substrate formulation, pure culture spawn inoculation, climate regulation, pest/disease prevention, harvesting protocols, post-harvest packaging, and commercial market linkages.",
    answerHi:
      "हाँ, हम हमारे जयपुर कॉर्पोरेट हब और ट्रेनिंग लैब में हैंड्स-ऑन वर्कशॉप्स आयोजित करते हैं। इसमें सबस्ट्रेट पाश्चराइजेशन, हाई-क्वालिटी स्पॉनिंग, तापमान व नमी नियंत्रण, रोग रोकथाम, पैकेजिंग और कमर्शियल मार्केट लिंकेज की पूरी ट्रेनिंग दी जाती है।",
  },
  {
    id: "fodder",
    category: "LIVESTOCK NUTRITION",
    categoryHi: "पशु पोषण एवं चारा",
    question: "How do Azolla and Hybrid Napier Grass reduce dairy farming feed costs?",
    questionHi: "अजोला और हाइब्रिड नेपियर घास डेयरी की फीडिंग लागत कैसे 20-30% कम करते हैं?",
    answer:
      "Azolla is a fast-multiplying aquatic biomass delivering 25-30% bio-available crude protein, essential amino acids, and minerals that directly replace expensive commercial cattle feed concentrates by 20–30% while increasing milk fat content. Hybrid Napier is a high-biomass perennial green fodder yielding 180+ tonnes per acre annually, ensuring uninterrupted nutritious green forage throughout the year.",
    answerHi:
      "अजोला में 25-30% क्रूड प्रोटीन, अमीनो एसिड और मिनरल्स होते हैं जो महंगे कमर्शियल फीड की जरूरत 20-30% तक कम करते हैं और दूध के फैट को बढ़ाते हैं। हाइब्रिड नेपियर घास प्रति वर्ष प्रति एकड़ 180+ टन पौष्टिक हरा चारा देती है, जिससे पूरे साल चारे की कमी नहीं होती।",
  },
  {
    id: "baling",
    category: "24/7 PLANT OPERATIONS",
    categoryHi: "24/7 प्रोसेसिंग प्लांट",
    question: "What operations take place at the Sangaria 24/7 Tudi Bales Plant?",
    questionHi: "संगरिया 24/7 तूड़ी बाल्स प्लांट और वेयरहाउस में क्या कार्य होते हैं?",
    answer:
      "Our 24/7 industrial facility located at the Amritsar-Jamnagar Expressway corridor in Sangaria aggregates wheat straw biomass and compresses it into weather-resistant, high-density compact bales (Tudi). This allows commercial dairies, livestock networks, and biomass energy plants to transport and store feed with zero spillage, minimal storage space, and round-the-clock bulk dispatch.",
    answerHi:
      "संगरिया में अमृतसर-जामनगर एक्सप्रेसवे पर स्थित हमारा 24/7 प्लांट गेहूं के भूसे (तूड़ी) को हाई-डेंसिटी कॉम्पैक्ट बाल्स में प्रोसेस करता है। इससे कमर्शियल डेयरियों और बायोमास प्लांट्स को सुरक्षित ट्रांसपोर्ट, न्यूनतम स्टोरेज स्पेस और 24 घंटे त्वरित डिस्पैच की सुविधा मिलती है।",
  },
  {
    id: "vermicompost",
    category: "SOIL HEALTH",
    categoryHi: "मृदा स्वास्थ्य",
    question: "How does JAS Agro Vermicompost restore depleted soil organic carbon?",
    questionHi: "JAS Agro वर्मीकंपोस्ट मिट्टी की जैविक गुणवत्ता और जल धारण क्षमता कैसे सुधारता है?",
    answer:
      "Our 100% pure organic biological vermiculture decomposes farm biomass into nutrient-dense, microbe-rich black gold humus. It is teeming with beneficial mycorrhiza, nitrogen-fixing bacteria, and essential humic acid, restoring depleted soil organic carbon (SOC), boosting soil moisture retention, and replacing harmful chemical fertilizers.",
    answerHi:
      "हमारा 100% शुद्ध ऑर्गेनिक वर्मीकंपोस्ट केंचुओं द्वारा जैविक खाद में बदला जाता है। इसमें लाभदायक माइक्रोब्स, ह्यूमिक एसिड और पोषक तत्व होते हैं जो मिट्टी की ऑर्गेनिक कार्बन (SOC) बढ़ाते हैं, नमी बनाए रखते हैं और रासायनिक खादों पर निर्भरता खत्म करते हैं।",
  },
  {
    id: "orders",
    category: "ORDER & CONSULTATION",
    categoryHi: "ऑर्डर व परामर्श",
    question: "How can I schedule an on-site farm consultation or place bulk commercial orders?",
    questionHi: "मैं अपने खेत के लिए कंसल्टेशन कैसे बुक कर सकता हूँ या बल्क ऑर्डर कैसे दें?",
    answer:
      "You can calculate estimated farm requirements using our online Estimation Engine, submit a direct quote request on any product page, call our central hotline at +91 73729 26623, or visit our Jaipur corporate office. Our agronomists provide personalized feasibility reports and site visits across Rajasthan, Punjab, Haryana, and Northern India.",
    answerHi:
      "आप हमारी वेबसाइट पर फार्म एस्टिमेशन टूल का उपयोग कर सकते हैं, प्रोडक्ट पेज से कोटेशन रिक्वेस्ट भेज सकते हैं, या हेल्पलाइन +91 73729 26623 पर संपर्क कर सकते हैं। हमारे एग्रोनॉमिस्ट राजस्थान, पंजाब, हरियाणा व उत्तर भारत में ऑन-साइट विजिट व रिपोर्ट प्रदान करते हैं।",
  },
];

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  // Hovered item on desktop; tapped item on mobile/touch
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="faq-section"
      className="py-14 sm:py-18 lg:py-24 bg-[#F6F8EE] dark:bg-[#0B0F17] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300 font-sans"
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] rounded-full bg-[#B8F20A]/10 dark:bg-[#122a16]/30 blur-[130px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[940px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/40 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" />
            <span>{isHindi ? "स्पष्टीकरण एवं मार्गदर्शन" : "KNOWLEDGE BASE & FAQS"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-[1.2]">
            {isHindi ? "अक्सर पूछे जाने वाले " : "Frequently Asked "}
            <span className="bg-gradient-to-r from-[#2F7D16] via-[#4F9D1F] to-[#B8F21B] dark:from-[#B8F21B] dark:via-[#C8F93B] dark:to-[#4F9D1F] bg-clip-text text-transparent">
              {isHindi ? "महत्वपूर्ण प्रश्न" : "Questions"}
            </span>
          </h2>

          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {isHindi
              ? "स्मार्ट एग्रीटेक सिस्टम, मशरूम कल्टीवेशन, अजोला-नेपियर पोषण, और तूड़ी बाल्स ऑपरेशन्स के बारे में संपूर्ण जानकारी।"
              : "Clear, transparent answers about our smart farming setups, cultivation training, biomass baling, and farm telemetry."}
          </p>
        </div>

        {/* FAQ List with Hover Interaction */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((item) => {
            const isExpanded = activeId === item.id;
            const question = isHindi ? item.questionHi : item.question;
            const answer = isHindi ? item.answerHi : item.answer;
            const category = isHindi ? item.categoryHi : item.category;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId((prev) => (prev === item.id ? null : prev))}
                onClick={() => setActiveId((prev) => (prev === item.id ? null : item.id))}
                className="border-b border-[#c2d6c6]/70 dark:border-[#223824] transition-colors duration-200 cursor-pointer"
              >
                {/* Question Header */}
                <div className="w-full text-left py-4 sm:py-5 flex items-start justify-between gap-4 select-none">
                  <div className="space-y-1 pr-2">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider block transition-colors duration-200 ${
                        isExpanded
                          ? "text-[#2F7D16] dark:text-[#B8F21B]"
                          : "text-[#5A6E59] dark:text-[#72d919]/75"
                      }`}
                    >
                      {category}
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 leading-snug ${
                        isExpanded
                          ? "text-[#2F7D16] dark:text-[#B8F21B]"
                          : "text-[#111811] dark:text-[#FAFAF5]"
                      }`}
                    >
                      {question}
                    </h3>
                  </div>

                  {/* Indicator Icon */}
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full transition-colors duration-200">
                    <Plus
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded
                          ? "text-[#2F7D16] dark:text-[#B8F21B] rotate-45"
                          : "text-[#5A6E59] dark:text-[#A3C2A1]"
                      }`}
                    />
                  </div>
                </div>

                {/* CSS Grid Accordion Expansion (Maintains Light Background) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pt-0.5 text-sm sm:text-base leading-relaxed text-[#4B5E4A] dark:text-[#A3C2A1]">
                      <p>{answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout / Contact Assistance */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#111811] dark:text-[#FAFAF5]">
              {isHindi ? "क्या आपका कोई अन्य सवाल है?" : "Have a specific project in mind?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#5A6E59] dark:text-[#A3C2A1]">
              {isHindi
                ? "हमारी एग्रोनॉमी टीम से सीधी बात करें या ऑन-साइट कंसल्टेशन शेड्यूल करें।"
                : "Speak directly with our agronomists for customized farm setups and bulk supply."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Phone Button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="group relative inline-flex items-center justify-between min-w-[175px] sm:min-w-[190px] h-[40px] sm:h-[44px] px-4.5 sm:px-5 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] border border-[#2F7D16]/20 dark:border-[#B8F21B]/30 overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-xs active:scale-95 shrink-0"
            >
              {/* Sweep Layer from Right */}
              <span
                className="absolute inset-0 bg-[#2F7D16] dark:bg-[#B8F21B] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
              />

              <span className="relative z-10 flex items-center gap-2 pr-2">
                <Phone className="w-4 h-4 text-[#123B13] dark:text-[#B8F21B] group-hover:text-white dark:group-hover:text-[#0D230E] transition-colors duration-300 shrink-0" />
                <span className="relative block">
                  <span className="block font-bold text-sm sm:text-[0.95rem] text-[#123B13] dark:text-[#B8F21B] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                    {COMPANY_INFO.phone}
                  </span>
                  <span className="absolute inset-0 block font-extrabold text-sm sm:text-[0.95rem] text-white dark:text-[#0D230E] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                    {COMPANY_INFO.phone}
                  </span>
                </span>
              </span>

              {/* Dot to Arrow indicator */}
              <span className="relative z-10 flex items-center justify-center w-5 h-5 shrink-0 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0" />
                <span
                  className="absolute inset-0 rounded-full bg-white dark:bg-[#0D230E] text-[#2F7D16] dark:text-[#B8F21B] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                >
                  <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                </span>
              </span>
            </a>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between min-w-[145px] sm:min-w-[160px] h-[40px] sm:h-[44px] px-4.5 sm:px-5 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] border border-transparent dark:border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95 shrink-0"
            >
              {/* Sweep Layer from Right */}
              <span
                className="absolute inset-0 bg-[#B8F21B] dark:bg-[#123B13] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
              />

              {/* Text & Chat Icon */}
              <span className="relative z-10 flex items-center gap-2 pr-2">
                <MessageCircle className="w-4 h-4 text-white dark:text-[#0D230E] group-hover:text-[#123B13] dark:group-hover:text-[#B8F21B] transition-colors duration-300 shrink-0" />
                <span className="relative block">
                  <span className="block font-bold text-sm sm:text-[0.95rem] text-white dark:text-[#0D230E] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                    {isHindi ? "संपर्क करें" : "Contact Us"}
                  </span>
                  <span className="absolute inset-0 block font-extrabold text-sm sm:text-[0.95rem] text-[#123B13] dark:text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                    {isHindi ? "संपर्क करें" : "Contact Us"}
                  </span>
                </span>
              </span>

              {/* Right Arrow Action */}
              <span className="relative z-10 flex items-center justify-center w-5 h-5 shrink-0 pointer-events-none">
                <ArrowRight
                  className="w-3.5 h-3.5 text-white dark:text-[#0D230E] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                  strokeWidth={2.5}
                />
                <span
                  className="absolute inset-0 rounded-full bg-[#123B13] dark:bg-[#B8F21B] text-white dark:text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                >
                  <ArrowRight className="w-3 h-3 text-white dark:text-[#123B13]" strokeWidth={2.5} />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

