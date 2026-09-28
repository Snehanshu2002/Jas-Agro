"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ExternalLink, MessageCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "@/context/LanguageContext";
import { submitEnquiry } from "@/lib/api/enquiryService";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interestedIn: "Oyster Mushroom",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const res = await submitEnquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      product: formData.interestedIn,
      message: formData.message,
      source: "Contact Page",
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#10B981", "#F59E0B", "#22C55E"],
      });
    } else {
      setErrorMessage(res.error || "Failed to send enquiry. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFBF7] text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFBF7] dark:bg-[#0B0F17] border-b border-emerald-950/10 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 border border-emerald-300/80 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "GET IN TOUCH" : "GET IN TOUCH"}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? "JAS Agro से " : "Contact "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {language === "hi" ? "Contact करें" : "JAS Agro"}
            </span>
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "Oyster Mushroom farming, Azolla fodder या IoT setup के बारे में कोई भी सवाल पूछें। हमारे Experts हमेशा आपकी मदद के लिए तैयार हैं।"
              : "Have questions about Oyster Mushroom setup, Azolla fodder ponds, or IoT telemetry? Our agronomists are here to assist."}
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#FAFBF7] dark:bg-[#0B0F17]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl border-b border-slate-200 dark:border-slate-800 pb-3">
                  {language === "hi" ? "हमारे अधिकृत केंद्र" : "Official Operating Locations"}
                </h3>

                {/* Location 1: Corporate Office Jaipur */}
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-emerald-500/30">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono font-bold uppercase">
                    🏢 {language === "hi" ? "कॉर्पोरेट कार्यालय" : "Corporate Office"}
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {COMPANY_INFO.locations.office.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {COMPANY_INFO.locations.office.address}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold pt-1 flex items-center gap-1">
                    <span>📍 Plus Code:</span>
                    <span>{COMPANY_INFO.locations.office.plusCode}</span>
                  </div>
                  <a
                    href={COMPANY_INFO.locations.office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>{language === "hi" ? "गूगल मैप्स पर देखें" : "View on Google Maps"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Location 2: Sangaria Processing Plant & Warehouse */}
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-amber-500/30">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 border border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 text-[10px] font-mono font-bold uppercase">
                    🏭 {language === "hi" ? "तूड़ी बालेस प्लांट & वेयरहाउस" : "Plant & Processing Warehouse"}
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {COMPANY_INFO.locations.warehouse.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {COMPANY_INFO.locations.warehouse.address}
                  </p>
                  <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold pt-1 flex items-center justify-between">
                    <span>⏱️ {COMPANY_INFO.locations.warehouse.hours}</span>
                    <a href={`tel:${COMPANY_INFO.locations.warehouse.phone}`} className="hover:underline font-bold">
                      📞 {COMPANY_INFO.locations.warehouse.phone}
                    </a>
                  </div>
                  <a
                    href={COMPANY_INFO.locations.warehouse.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <span>{language === "hi" ? "गूगल मैप्स पर देखें" : "View Plant Location on Maps"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* General Support */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-700 dark:text-slate-300 hover:text-amber-500 font-mono font-bold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-lg">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      {language === "hi" ? "अनुरोध प्राप्त हुआ!" : "Enquiry Received!"}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                      Thank you <span className="text-emerald-500 font-semibold">{formData.name}</span>. Your enquiry has been received under reference{" "}
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {submittedData.referenceId || "JAS-AGRO"}
                      </span>. Our specialist will respond within 24 hours.
                    </p>

                    {submittedData.whatsappUrl && (
                      <div className="pt-2">
                        <a
                          href={submittedData.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Continue Discussion on WhatsApp</span>
                        </a>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setErrorMessage(null);
                        }}
                        className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs"
                      >
                        {t("close")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                        {language === "hi" ? "हमें संदेश भेजें" : "Send Us an Enquiry"}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {language === "hi" ? "तकनीकी सहायता या उत्पाद की जानकारी के लिए नीचे फ़ॉर्म भरें।" : "Fill out the form below for technical assistance or product guidance."}
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

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
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{t("fullName")} *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Singh"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{t("emailAddress")} *</label>
                        <input
                          type="email"
                          required
                          placeholder="vikram@farm.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{t("phoneNumber")} *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          {language === "hi" ? "कंपनी / संस्था" : "Company / Organization"}
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Green Dairy Farms"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{t("selectProduct")} *</label>
                      <select
                        value={formData.interestedIn}
                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Oyster Mushroom">Oyster Mushroom Cultivation</option>
                        <option value="Azolla">Azolla Aquatic Fodder</option>
                        <option value="Napier Grass">Hybrid Napier Grass Slips</option>
                        <option value="Vermicompost">Vermicompost & Organic Manure</option>
                        <option value="Smart Farming">Smart Farming Consultation</option>
                        <option value="IoT Solutions">IoT Telemetry Hardware</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">{t("message")} *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your agricultural requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-reveal-primary w-full py-3.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>{t("submit")}</span> <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GOOGLE MAPS SECTION */}
      <section className="py-10 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-emerald-500" />
              {language === "hi" ? "लाइव गूगल मैप्स नेविगेशन" : "LIVE GOOGLE MAPS NAVIGATION"}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
              {language === "hi" ? "हमारे कार्यालय और प्लांट तक पहुंचें" : "Locate Our Office & Plant"}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              {language === "hi"
                ? "जयपुर कॉर्पोरेट कार्यालय और संगरिया तूड़ी बालेस प्रोसेसिंग प्लांट दोनों के लिए नीचे दिए गए गूगल मैप्स पर डायरेक्ट नेविगेट करें।"
                : "Explore interactive live satellite and street maps for both our Jaipur Corporate Office and Sangaria Biomass Processing Plant."}
            </p>
          </div>

          {/* Dual Interactive Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Map 1: Jaipur Corporate Office */}
            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-glass space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 font-bold text-lg">🏢</span>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-base">
                      {COMPANY_INFO.locations.office.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      📍 {COMPANY_INFO.locations.office.plusCode}
                    </p>
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.locations.office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all self-stretch sm:self-auto justify-center"
                >
                  <span>{language === "hi" ? "दिशानिर्देश लें" : "Get Directions"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[480px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-200 dark:bg-slate-900">
                <iframe
                  title="JAS Agro Jaipur Office Google Map"
                  src="https://maps.google.com/maps?q=JAS+Agro,+84/123,+Sector+8,+Pratap+Nagar,+Jaipur,+Rajasthan+302033&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98] dark:brightness-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Map 2: Sangaria Processing Plant & Warehouse */}
            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-glass space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500 font-bold text-lg">🏭</span>
                  <div>
                    <h3 className="font-heading font-extrabold text-slate-900 dark:text-white text-base">
                      {COMPANY_INFO.locations.warehouse.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      📍 {COMPANY_INFO.locations.warehouse.plusCode}
                    </p>
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.locations.warehouse.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all self-stretch sm:self-auto justify-center"
                >
                  <span>{language === "hi" ? "दिशानिर्देश लें" : "Get Directions"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[480px] sm:h-[520px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-200 dark:bg-slate-900">
                <iframe
                  title="Jas Agro Tudi Bales Plant Sangaria Google Map"
                  src="https://maps.google.com/maps?q=Jas+Agro+Tudi+Bales+Plant+Sangaria+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98] dark:brightness-[0.9]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
