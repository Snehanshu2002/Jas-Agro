"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const InsightsSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(
        isHindi
          ? "कृपया एक वैध ईमेल पता दर्ज करें।"
          : "Please enter a valid email address."
      );
      return;
    }

    setError(null);
    setLoading(true);

    // Simulated subscription completion
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F6F8EE] dark:bg-[#0B0F17] text-[#111811] dark:text-white transition-colors duration-300 select-none">
      
      {/* Normalized SVG ClipPath Definition for the Distinctive Stepped Top-Right Notch */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="notchedCardClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.025,0 
                     L 0.905,0 
                     C 0.92,0 0.928,0.015 0.932,0.045 
                     L 0.932,0.06 
                     C 0.936,0.082 0.945,0.09 0.96,0.09 
                     L 0.978,0.09 
                     C 0.992,0.09 1.0,0.115 1.0,0.15 
                     L 1.0,0.91 
                     C 1.0,0.965 0.985,1.0 0.975,1.0 
                     L 0.025,1.0 
                     C 0.01,1.0 0,0.965 0,0.91 
                     L 0,0.09 
                     C 0,0.035 0.01,0 0.025,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* LARGE CINEMATIC PROMOTIONAL CARD WITH NOTCHED CORNER */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[480px] flex items-center justify-center px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 shadow-xl overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]"
          style={{
            clipPath: "url(#notchedCardClip)",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.22)), url('/media/white-tudi-background-email.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          
          {/* CENTERED EDITORIAL CONTENT GROUP */}
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
            
            {/* EXACT TWO-LINE DISPLAY HEADING */}
            <h2
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold tracking-tight leading-[1.08] uppercase text-center"
              style={{ fontFamily: '"Jost", sans-serif' }}
            >
              <span className="text-white block whitespace-normal sm:whitespace-nowrap">
                {isHindi ? "JAS AGRO के साथ बढ़ें।" : "GROW WITH JAS AGRO."}
              </span>
              <span className="text-[#B8F21B] block mt-1 sm:mt-2 whitespace-normal sm:whitespace-nowrap">
                {isHindi ? "खेती में हमेशा आगे रहें।" : "STAY AHEAD OF THE FARM."}
              </span>
            </h2>

            {/* EMAIL FORM DIRECTLY BELOW HEADING */}
            <div className="mt-6 sm:mt-8 w-full flex flex-col items-center justify-center">
              {submitted ? (
                <div
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white/90 text-slate-900 text-sm sm:text-base font-semibold shadow-md"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2F7D16] shrink-0" />
                  <span>
                    {isHindi
                      ? "सब्सक्राइब करने के लिए धन्यवाद! JAS Agro कम्युनिटी में आपका स्वागत है।"
                      : "Thank you for subscribing! Welcome to the JAS Agro community."}
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-lg"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {/* White Rounded Email Input */}
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder={
                        isHindi ? "अपना ईमेल दर्ज करें" : "Enter your email address"
                      }
                      className="w-full pl-12 pr-5 py-3.5 sm:py-4 rounded-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium outline-none border border-transparent focus:border-white shadow-sm transition-all"
                      required
                    />
                  </div>

                  {/* Solid JAS Agro Lime Subscribe Button with Get a Quote Hover Animation */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-between min-w-[145px] sm:min-w-[165px] h-[42px] sm:h-[46px] px-5 sm:px-6 rounded-full bg-[#B8F21B] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-sm active:scale-95 shrink-0 disabled:opacity-70"
                  >
                    {/* Dark Sweep Layer from Right */}
                    <span
                      className="absolute inset-0 bg-[#123B13] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
                    />

                    {/* Dual Sliding Text */}
                    <span className="relative z-10 block pr-2">
                      <span className="block font-extrabold uppercase tracking-wider text-sm sm:text-[0.95rem] text-[#111811] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                        {loading ? "..." : isHindi ? "सब्सक्राइब करें" : "SUBSCRIBE"}
                      </span>
                      <span className="absolute inset-0 block font-extrabold uppercase tracking-wider text-sm sm:text-[0.95rem] text-[#B8F21B] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                        {loading ? "..." : isHindi ? "सब्सक्राइब करें" : "SUBSCRIBE"}
                      </span>
                    </span>

                    {/* Right Element: Resting Arrow vs Hover Circle Arrow */}
                    <span className="relative z-10 flex items-center justify-center w-5 h-5 shrink-0 pointer-events-none">
                      <ArrowRight
                        className="w-4 h-4 text-[#111811] stroke-[2.5] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                      />
                      <span
                        className="absolute inset-0 rounded-full bg-[#B8F21B] text-[#123B13] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#123B13]" strokeWidth={2.5} />
                      </span>
                    </span>
                  </button>
                </form>
              )}

              {error && (
                <p className="text-red-300 text-xs font-semibold pt-2 text-center">
                  {error}
                </p>
              )}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
