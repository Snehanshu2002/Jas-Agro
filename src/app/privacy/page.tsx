import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Database,
  Smartphone,
  CreditCard,
  Truck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | JAS Agro - Data Protection & Customer Privacy",
  description:
    "Read the JAS Agro Privacy Policy to understand how we collect, use, store, and safeguard your personal data, delivery addresses, and PIN codes under the Digital Personal Data Protection Act, 2023.",
  keywords: [
    "JAS Agro Privacy Policy",
    "Data Protection JAS Agro",
    "DPDP Act 2023 Compliance",
    "E-Commerce Privacy India",
    "Customer Data Security",
  ],
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 23, 2026";
  const effectiveDate = "January 1, 2026";

  const tableOfContents = [
    { id: "intro", title: "1. Introduction & Scope" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "methods", title: "3. How Information Is Collected" },
    { id: "usage", title: "4. Purpose & Use of Personal Data" },
    { id: "cookies", title: "5. Cookies & Local Storage Technologies" },
    { id: "location", title: "6. Geolocation & PIN Code Processing" },
    { id: "payments", title: "7. Payment Security & Processing" },
    { id: "third-parties", title: "8. Third-Party Service Providers" },
    { id: "sharing", title: "9. Data Sharing & Disclosures" },
    { id: "retention", title: "10. Data Retention & Storage" },
    { id: "rights", title: "11. Your Data Rights & Choices" },
    { id: "security", title: "12. Information Security Measures" },
    { id: "children", title: "13. Children's Privacy" },
    { id: "updates", title: "14. Policy Updates" },
    { id: "grievance", title: "15. Grievance Redressal & Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFBF7] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-28 pb-12 sm:pb-16 bg-white dark:bg-[#0E131F] border-b border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold" aria-current="page">
              Privacy Policy
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>DPDP ACT 2023 & CONSUMER PROTECTION COMPLIANT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              At <strong className="text-slate-900 dark:text-white font-bold">{COMPANY_INFO.name}</strong>, we respect your privacy and are committed to protecting the personal and delivery data you share with us. This policy details how your information is handled across our e-commerce store, services, and online platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                Effective Date: <span className="font-bold text-slate-700 dark:text-slate-200">{effectiveDate}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-500" />
                Last Updated: <span className="font-bold text-slate-700 dark:text-slate-200">{lastUpdated}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sidebar Table of Contents (Sticky on desktop) */}
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h3 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Table of Contents</span>
                </h3>
                <nav className="space-y-1 text-xs">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1.5 px-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors font-medium"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Need immediate assistance?</p>
                  <a
                    href="mailto:info@jasagro.com"
                    className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@jasagro.com</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Core Policy Text */}
            <article className="lg:col-span-8 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              
              {/* Section 1: Introduction */}
              <section id="intro" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    1. Introduction & Scope
                  </h2>
                </div>

                <p>
                  Welcome to <strong>JAS Agro</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website <a href="https://www.jasagro.com" className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">www.jasagro.com</a>, including our e-commerce store, product catalogs, agricultural technologies, and related services.
                </p>
                <p>
                  This Privacy Policy applies to all customers, website visitors, farmers, institutional buyers, and users who access our website, order agricultural products (including Oyster Mushroom cultivation supplies, organic cookies, snacks, Azolla fodder, Hybrid Napier grass, and Bio Vermicompost), or interact with our customer support channels.
                </p>
                <p>
                  We process personal data in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and other applicable Indian regulations.
                </p>
              </section>

              {/* Section 2: Information We Collect */}
              <section id="collection" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    2. Information We Collect
                  </h2>
                </div>

                <p>We collect only the information necessary to fulfill your orders, deliver products, and provide customer support. The categories of data collected include:</p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <Database className="w-4 h-4 text-emerald-500" />
                      A. Personal Identification & Contact Details
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Your full name, mobile telephone number, email address, and communication preferences provided during checkout, inquiry submissions, or quotation requests.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <Truck className="w-4 h-4 text-emerald-500" />
                      B. Delivery & Postal Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Shipping and billing addresses, 6-digit Indian Postal Index Numbers (PIN codes), city, state, district, landmark notes, and delivery recipient phone numbers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <CreditCard className="w-4 h-4 text-emerald-500" />
                      C. Order & Transaction Records
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Product selections, quantities, order totals, applied coupons, payment transaction IDs, invoice references, and delivery dispatch status. <em>(Note: We never store complete credit/debit card numbers or CVV codes on our servers.)</em>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <Smartphone className="w-4 h-4 text-emerald-500" />
                      D. Technical & Session Data
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Device type, browser version, operating system, IP address, preferred language (English/Hindi), active color theme, and client-side storage keys for cart and wishlist persistence.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: How Information Is Collected */}
              <section id="methods" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    3. How We Collect Information
                  </h2>
                </div>

                <ul className="space-y-2.5 list-disc pl-5 text-sm sm:text-base">
                  <li><strong>Direct Submission:</strong> When you place an order, complete the checkout form, fill out the Quick Lead / Quote modal, or contact us via WhatsApp/Email.</li>
                  <li><strong>User-Initiated Geolocation:</strong> When you explicitly click &quot;Use my current location&quot; in the Pincode Delivery Checker to resolve your 6-digit PIN code.</li>
                  <li><strong>Automated Client Storage:</strong> Through browser localStorage to remember your shopping cart items, wishlist, active theme, and confirmed delivery PIN across page reloads.</li>
                  <li><strong>Customer Support Interactions:</strong> Details shared when seeking order status updates, delivery tracking assistance, or product cultivation guidance.</li>
                </ul>
              </section>

              {/* Section 4: Purpose & Use */}
              <section id="usage" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    04
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    4. Purpose & Use of Personal Data
                  </h2>
                </div>

                <p>We process your personal data strictly for lawful and legitimate business purposes:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Order processing, packaging & invoice generation</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Courier handover & real-time delivery tracking</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Postal serviceability verification & shipping calculations</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Customer service, grievance resolution & returns handling</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Fraud detection, payment safety & transaction verification</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium">Compliance with statutory tax & GST invoicing laws</span>
                  </div>
                </div>
              </section>

              {/* Section 5: Cookies & Local Storage */}
              <section id="cookies" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    05
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    5. Cookies & Local Storage Technologies
                  </h2>
                </div>

                <p>
                  Our website utilizes modern browser local storage (<code>localStorage</code>) to deliver a frictionless shopping experience without requiring mandatory account registration. Specific keys used on your browser include:
                </p>

                <div className="overflow-x-auto shop-scrollbar-x pb-1">
                  <table className="w-full text-left text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 dark:bg-slate-900 font-mono text-slate-900 dark:text-white">
                      <tr>
                        <th className="p-3 border-b border-slate-200 dark:border-slate-800">Storage Key</th>
                        <th className="p-3 border-b border-slate-200 dark:border-slate-800">Purpose</th>
                        <th className="p-3 border-b border-slate-200 dark:border-slate-800">Lifespan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-normal">
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">jas_agro_cart</td>
                        <td className="p-3">Maintains added product IDs and item quantities across pages.</td>
                        <td className="p-3">Persistent locally until cleared</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">jas_agro_wishlist</td>
                        <td className="p-3">Saves your bookmarked favourite products.</td>
                        <td className="p-3">Persistent locally until cleared</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">jas_agro_delivery_info</td>
                        <td className="p-3">Saves your confirmed 6-digit delivery PIN & estimated timeline.</td>
                        <td className="p-3">Persistent locally until cleared</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">jas_agro_theme</td>
                        <td className="p-3">Stores your interface theme preference (Light/Dark/Emerald).</td>
                        <td className="p-3">Persistent locally until cleared</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">jas_agro_language</td>
                        <td className="p-3">Remembers your preferred language setting (EN/HI).</td>
                        <td className="p-3">Persistent locally until cleared</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  You can clear or reset local storage data at any time through your browser settings without impacting your ability to browse our catalog.
                </p>
              </section>

              {/* Section 6: Geolocation & PIN Code */}
              <section id="location" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    06
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    6. Geolocation & PIN Code Processing
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200">
                  <h4 className="font-bold flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                    <MapPin className="w-4 h-4" />
                    Explicit User-Consent Location Request
                  </h4>
                  <p>
                    We <strong>never silently track or request your precise GPS coordinates</strong> in the background. Browser location access is invoked ONLY when you intentionally tap &quot;Use my current location&quot; in our delivery checker.
                  </p>
                </div>

                <p>
                  When permission is granted, coordinates are sent via an encrypted server-side reverse-geocoding API to resolve the corresponding 6-digit Indian PIN code and city name. We do not store or track continuous travel routes or historical real-time location logs.
                </p>
              </section>

              {/* Section 7: Payment Security */}
              <section id="payments" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    07
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    7. Payment Security & Processing
                  </h2>
                </div>

                <p>
                  All online payments (UPI, Debit/Credit Cards, Net Banking) are securely processed through RBI-authorized, PCI-DSS Level 1 compliant payment gateway providers.
                </p>
                <ul className="space-y-2 list-disc pl-5 text-sm">
                  <li>Payment transactions are encrypted using 256-bit SSL/TLS protocol during transmission.</li>
                  <li>JAS Agro does not collect, record, or store confidential card authentication credentials (such as 3D Secure OTPs or CVV numbers).</li>
                  <li>For Cash on Delivery (COD) orders, payment is collected directly by our authorized logistics partner upon physical delivery.</li>
                </ul>
              </section>

              {/* Section 8: Third Parties */}
              <section id="third-parties" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    08
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    8. Third-Party Service Providers
                  </h2>
                </div>

                <p>We work with trusted third-party service partners to operate our e-commerce logistics:</p>
                <ul className="space-y-2 list-disc pl-5 text-sm">
                  <li><strong>Courier & Logistics Partners:</strong> Third-party shipping carriers (e.g. Delhivery, BlueDart, India Post) receive customer delivery addresses, names, and contact numbers solely to complete physical parcel delivery.</li>
                  <li><strong>Postal Lookup Directories:</strong> Official India Post directory APIs are used to validate 6-digit PIN codes.</li>
                  <li><strong>Communication Gateways:</strong> SMS and WhatsApp API gateways used strictly to send order confirmation notifications and dispatch tracking links.</li>
                </ul>
              </section>

              {/* Section 9: Data Sharing */}
              <section id="sharing" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    09
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    9. Data Sharing & Non-Sale Commitment
                  </h2>
                </div>

                <p className="font-bold text-slate-900 dark:text-white">
                  JAS Agro does not sell, rent, trade, or monetize your personal information to third-party data brokers or advertisers under any circumstances.
                </p>
                <p>
                  Information is disclosed only under the following strict conditions:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-sm">
                  <li>To authorized logistics and courier partners for executing delivery.</li>
                  <li>When required by statutory legal notices, court orders, or competent law enforcement authorities under Indian jurisdiction.</li>
                  <li>To enforce our Terms of Service or protect the rights, property, and safety of our customers and community.</li>
                </ul>
              </section>

              {/* Section 10: Retention */}
              <section id="retention" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    10. Data Retention & Storage
                  </h2>
                </div>

                <p>
                  We retain order and transaction records for the duration required to satisfy business fulfillment, customer support warranty periods, accounting audits, and statutory tax preservation mandates under the Goods and Services Tax (GST) Act and Companies Act.
                </p>
                <p>
                  Client-side local storage information (such as your active cart and wishlist) remains under your direct control and can be deleted instantly through your browser settings.
                </p>
              </section>

              {/* Section 11: User Rights */}
              <section id="rights" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    11. Your Data Rights under DPDP Act, 2023
                  </h2>
                </div>

                <p>As a data principal under Indian law, you have the following rights regarding your personal information:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Right to Access</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Request a summary of personal data held about you and processing activities undertaken.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Right to Correction</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Request rectification of inaccurate or outdated address, contact, or billing information.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Right to Erasure</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Request deletion of personal data no longer necessary for statutory accounting or delivery purposes.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Right to Grievance Redressal</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Access a transparent and expedited grievance redressal process for any data privacy concerns.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                  To exercise any of these rights, please email our grievance desk at <a href="mailto:info@jasagro.com" className="text-emerald-600 dark:text-emerald-400 font-bold underline">info@jasagro.com</a>.
                </p>
              </section>

              {/* Section 12: Security */}
              <section id="security" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    12. Information Security Measures
                  </h2>
                </div>

                <p>
                  We implement robust technical, administrative, and physical safeguards to prevent unauthorized access, loss, misuse, or alteration of your personal data. These include SSL/TLS data transmission encryption, restricted database access on a need-to-know basis, and periodic security evaluations.
                </p>
              </section>

              {/* Section 13: Children's Privacy */}
              <section id="children" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    13
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    13. Children&apos;s Privacy
                  </h2>
                </div>

                <p>
                  Our website and e-commerce services are intended for individuals who are at least 18 years of age or accessing under the supervision of a parent or guardian. We do not knowingly solicit or collect personal data from minors.
                </p>
              </section>

              {/* Section 14: Updates */}
              <section id="updates" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    14
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    14. Updates to This Privacy Policy
                  </h2>
                </div>

                <p>
                  We may periodically update this policy to reflect enhancements in our store services, changes in logistics processes, or updates to applicable Indian regulations. Any revisions will be published on this page with an updated &quot;Last Updated&quot; date.
                </p>
              </section>

              {/* Section 15: Grievance Officer & Contact */}
              <section id="grievance" className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 dark:bg-[#132219]/60 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                    15
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    15. Grievance Redressal & Contact Information
                  </h2>
                </div>

                <p className="text-sm">
                  In accordance with the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020, if you have any questions, concerns, or grievances regarding your data, please contact our Grievance Desk:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Corporate Headquarters
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      Processing Warehouse Plant
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {COMPANY_INFO.locations.warehouse.address}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Phone Support
                    </h4>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{COMPANY_INFO.businessHours}</p>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
