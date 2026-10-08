"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, ShieldCheck, Sparkles, MessageCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { submitEnquiry } from "@/lib/api/enquiryService";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = "",
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: defaultProduct || "Oyster Mushroom",
    quantity: "",
    location: "",
    message: "",
    botField: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceId?: string;
    whatsappUrl?: string;
  }>({});

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const res = await submitEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      product: formData.product,
      quantity: formData.quantity,
      location: formData.location,
      message: formData.message,
      source: "Quote Modal",
      botField: formData.botField,
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      if (res.data) {
        setSubmittedData({
          referenceId: res.data.referenceId,
          whatsappUrl: res.data.whatsappUrl,
        });
      }
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#F59E0B", "#22C55E"],
      });
    } else {
      setErrorMessage(res.error || (isHindi ? "अनुरोध भेजने में विफल। कृपया पुनः प्रयास करें।" : "Failed to submit enquiry. Please try again."));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      product: "Oyster Mushroom",
      quantity: "",
      location: "",
      message: "",
      botField: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl overflow-hidden bg-white dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#1B4D1C] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#111811] dark:text-[#FAFAF5] transition-colors duration-300">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F7D16] via-[#B8F21B] to-[#4F9D1F]" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-500 hover:text-[#111811] dark:text-slate-400 dark:hover:text-white rounded-full bg-[#F4F8EC] hover:bg-[#EAF5D8] dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] border border-[#2F7D16] dark:border-[#B8F21B] text-[#2F7D16] dark:text-[#B8F21B] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#2F7D16] dark:text-[#B8F21B]">
              {t("quoteTitle")}
            </h3>
            <p className="max-w-md mx-auto text-[#5A6E59] dark:text-[#EAF5D8] text-sm leading-relaxed">
              {isHindi ? (
                <>
                  धन्यवाद, <span className="font-semibold text-[#111811] dark:text-white">{formData.name}</span>।{" "}
                  <span className="text-[#2F7D16] dark:text-[#B8F21B] font-bold">{formData.product}</span> के लिए आपका व्यावसायिक अनुरोध संदर्भ संख्या{" "}
                  <span className="font-mono font-bold text-[#2F7D16] dark:text-[#B8F21B]">
                    {submittedData.referenceId || "JAS-AGRO"}
                  </span>{" "}
                  के तहत दर्ज कर लिया गया है।
                </>
              ) : (
                <>
                  Thank you, <span className="font-semibold text-[#111811] dark:text-white">{formData.name}</span>. Your commercial inquiry for{" "}
                  <span className="text-[#2F7D16] dark:text-[#B8F21B] font-bold">{formData.product}</span> has been logged with reference{" "}
                  <span className="font-mono font-bold text-[#2F7D16] dark:text-[#B8F21B]">
                    {submittedData.referenceId || "JAS-AGRO"}
                  </span>.
                </>
              )}
            </p>

            {submittedData.whatsappUrl && (
              <div className="pt-2">
                <a
                  href={submittedData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F7D16] hover:bg-[#1B4D1C] text-white text-xs font-bold shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#B8F21B]" />
                  <span>{isHindi ? "व्हाट्सएप पर तुरंत बात करें" : "Escalate on WhatsApp Now"}</span>
                </a>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#F4F8EC] hover:bg-[#EAF5D8] dark:bg-[#1B4D1C] dark:hover:bg-[#123B13] text-[#111811] dark:text-white font-semibold transition-all text-xs"
              >
                {t("close")}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] border border-[#2F7D16]/30 dark:border-[#B8F21B]/40 text-[#123B13] dark:text-[#B8F21B] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" /> {isHindi ? "JAS एग्रो कोटेशन" : "JAS Agro Quotation"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111811] dark:text-white">
                {t("quoteTitle")}
              </h2>
              <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-xs sm:text-sm">
                {t("quoteSubtitle")}
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Invisible Honeypot */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#111811] dark:text-[#EAF5D8] mb-1">
                    {t("fullName")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isHindi ? "उदा. रमेश कुमार" : "e.g. Ramesh Kumar"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2F7D16]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#111811] dark:text-[#EAF5D8] mb-1">
                    {t("phoneNumber")} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2F7D16]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#111811] dark:text-[#EAF5D8] mb-1">
                    {t("emailAddress")} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@farmcorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2F7D16]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#111811] dark:text-[#EAF5D8] mb-1">
                    {t("selectProduct")} *
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-white text-sm focus:outline-none focus:border-[#2F7D16]"
                  >
                    <option value="Oyster Mushroom">{isHindi ? "ऑयस्टर मशरूम फार्मिंग सेट-अप" : "Oyster Mushroom Cultivation"}</option>
                    <option value="Azolla Fodder">{isHindi ? "अजोला जलीय सुपर-चारा" : "Azolla Aquatic Fodder"}</option>
                    <option value="Hybrid Napier Grass">{isHindi ? "हाइब्रिड नेपियर घास स्लिप्स" : "Hybrid Napier Grass Slips"}</option>
                    <option value="Vermicompost">{isHindi ? "जैविक वर्मीकंपोस्ट खाद" : "Vermicompost & Organic Manure"}</option>
                    <option value="IoT Smart Farming">{isHindi ? "आईओटी फार्म ऑटोमेशन कंट्रोलर" : "IoT Agriculture Controller Kit"}</option>
                    <option value="Turnkey Farm Setup">{isHindi ? "टर्नकी फार्म सेटअप परामर्श" : "Turnkey Farm Setup Consultation"}</option>
                    <option value="Other">{isHindi ? "अन्य कस्टम पूछताछ" : "Other Custom Inquiry"}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#111811] dark:text-[#EAF5D8] mb-1">
                  {t("message")}
                </label>
                <textarea
                  rows={3}
                  placeholder={isHindi ? "अपने मौजूदा फार्म सेटअप या आवश्यकता के बारे में बताएं..." : "Tell us about your current farm setup or requirement..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#2F7D16] resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                  <ShieldCheck className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B]" />
                  {isHindi ? "सुरक्षित एवं गोपनीय अनुरोध" : "Private & secure request"}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-reveal-lime inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-bold transition-all disabled:opacity-50 text-sm shadow-md border border-[#A6E015] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{isHindi ? "प्रोसेस हो रहा है..." : "Processing..."}</span>
                  ) : (
                    <>
                      <span>{t("sendRequest")}</span> <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

