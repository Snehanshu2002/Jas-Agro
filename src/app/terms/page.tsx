import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";
import {
  FileText,
  Scale,
  ShoppingBag,
  Truck,
  CreditCard,
  RotateCcw,
  AlertTriangle,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | JAS Agro E-Commerce & Agricultural Solutions",
  description:
    "Official Terms and Conditions governing purchases, shipments, returns, delivery timelines, and website usage on the JAS Agro e-commerce store.",
  keywords: [
    "JAS Agro Terms of Service",
    "E-Commerce Terms India",
    "Return & Refund Policy",
    "Shipping Terms",
    "Agriculture Products Online",
  ],
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 23, 2026";
  const effectiveDate = "January 1, 2026";

  const tableOfContents = [
    { id: "acceptance", title: "1. Acceptance of Terms & Eligibility" },
    { id: "accounts", title: "2. Customer Responsibilities" },
    { id: "products", title: "3. Product Listings & Variations" },
    { id: "pricing", title: "4. Pricing, Taxes & Invoicing" },
    { id: "orders", title: "5. Orders & Acceptance" },
    { id: "cart", title: "6. Cart Behavior & Local Storage" },
    { id: "payments", title: "7. Payment Methods & Processing" },
    { id: "shipping", title: "8. Shipping, Delivery & PIN Serviceability" },
    { id: "cancellations", title: "9. Cancellations, Returns & Refunds" },
    { id: "restrictions", title: "10. Product-Specific Return Terms" },
    { id: "ip", title: "11. Intellectual Property Rights" },
    { id: "prohibited", title: "12. Prohibited Uses" },
    { id: "liability", title: "13. Disclaimers & Limitation of Liability" },
    { id: "law", title: "14. Governing Law & Jurisdiction" },
    { id: "contact", title: "15. Grievance Redressal & Contact" },
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
              Terms of Service
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-wider">
              <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>CONSUMER PROTECTION (E-COMMERCE) RULES COMPLIANT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              Terms of Service
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              These Terms of Service govern your access to and purchases from <strong className="text-slate-900 dark:text-white font-bold">{COMPANY_INFO.name}</strong> (&quot;JAS Agro&quot;). Please read these terms carefully before placing orders for our agricultural superfoods, cultivation supplies, fodder, or technology systems.
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
            
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h3 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Terms Overview</span>
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
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Questions about an order?</p>
                  <a
                    href="https://wa.me/917372926623?text=Hi%20JAS%20Agro,%20I%20have%20an%20inquiry%20regarding%20the%20Terms%20of%20Service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                  >
                    <span>WhatsApp Support (+91 73729 26623)</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Core Terms Text */}
            <article className="lg:col-span-8 space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              
              {/* Section 1: Acceptance & Eligibility */}
              <section id="acceptance" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    01
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    1. Acceptance of Terms & Eligibility
                  </h2>
                </div>

                <p>
                  By accessing, browsing, or placing an order on <a href="https://www.jasagro.com" className="text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-2">www.jasagro.com</a>, you confirm that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy.
                </p>
                <p>
                  You must be at least 18 years old or accessing our site under the supervision of a parent or legal guardian who agrees to these terms on your behalf.
                </p>
              </section>

              {/* Section 2: Customer Responsibilities */}
              <section id="accounts" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    02
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    2. Customer Responsibilities & Accuracy
                  </h2>
                </div>

                <p>When purchasing from JAS Agro, you agree to:</p>
                <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
                  <li>Provide accurate, complete, and current shipping address, recipient name, phone number, and 6-digit Indian PIN code.</li>
                  <li>Ensure the delivery location is accessible to standard courier representatives.</li>
                  <li>Maintain confidentiality of your order credentials, communications, and invoice documents.</li>
                </ul>
              </section>

              {/* Section 3: Product Listings */}
              <section id="products" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    03
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    3. Product Listings & Agricultural Variations
                  </h2>
                </div>

                <p>
                  JAS Agro specializes in natural agriculture, fresh and dried Oyster Mushrooms, wholesome snacks (Khakhra, Multigrain Cookies), protein animal fodder (Azolla, Hybrid Napier), and organic Bio Vermicompost.
                </p>
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-950 dark:text-amber-200 space-y-1.5">
                  <p className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    Natural Agricultural Variation Notice
                  </p>
                  <p>
                    Because agricultural goods and botanical crops grow organically, minor natural variations in color, texture, moisture content, and shape may exist between batches. All product images and packaging photographs represent verified farm goods.
                  </p>
                </div>
              </section>

              {/* Section 4: Pricing & Taxes */}
              <section id="pricing" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    04
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    4. Pricing, Taxes & Invoicing
                  </h2>
                </div>

                <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
                  <li>All prices displayed on the store are listed in <strong>Indian Rupees (INR / ₹)</strong>.</li>
                  <li>Prices are inclusive of all applicable Goods and Services Tax (GST) unless explicitly indicated otherwise.</li>
                  <li><strong>Free Delivery Threshold:</strong> Standard delivery is <strong>FREE</strong> for online orders with an item subtotal of <strong>₹499 or higher</strong>. Orders below ₹499 incur a flat standard shipping fee of ₹49.</li>
                  <li>In the rare event of an inadvertent technical pricing discrepancy, JAS Agro reserves the right to notify the customer and cancel the order prior to dispatch with a full refund.</li>
                </ul>
              </section>

              {/* Section 5: Orders */}
              <section id="orders" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    05
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    5. Orders & Acceptance
                  </h2>
                </div>

                <p>
                  Placing an order constitutes an offer to purchase. Order confirmation notifications sent via email, SMS, or WhatsApp acknowledge receipt of your order. Binding acceptance occurs upon physical parcel dispatch from our Jaipur or Sangaria processing facilities.
                </p>
              </section>

              {/* Section 6: Cart Behavior */}
              <section id="cart" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    06
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    6. Cart Behavior & Local Storage
                  </h2>
                </div>

                <p>
                  Products placed in your cart or wishlist are stored locally on your device for shopping convenience. Adding an item to the cart does not reserve inventory or lock pricing until the checkout process is fully completed.
                </p>
              </section>

              {/* Section 7: Payment Methods */}
              <section id="payments" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    07
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    7. Payment Methods & Processing
                  </h2>
                </div>

                <p>We accept the following payment options:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm block">1. UPI & Digital Wallets</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Google Pay, PhonePe, Paytm, BHIM, and QR instant payments.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm block">2. Cards & Net Banking</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Visa, Mastercard, RuPay cards and major Indian bank internet banking.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 sm:col-span-2">
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm block">3. Cash on Delivery (COD)</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Available across eligible serviceable PIN codes. Payment is tendered to the courier upon delivery.</span>
                  </div>
                </div>
              </section>

              {/* Section 8: Shipping & Delivery */}
              <section id="shipping" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    08
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    8. Shipping, Delivery & PIN Serviceability
                  </h2>
                </div>

                <p>
                  Delivery timelines and eligibility depend on your 6-digit Indian PIN code and the logistics tier assigned to your destination:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm block">Express Hubs (Rajasthan & Delhi NCR):</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">Estimated <strong>1–2 business days</strong> via Priority Farm Dispatch.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm block">Metro & Tier-1 Hubs (Mumbai, Pune, Bengaluru, Hyderabad, Chennai, Kolkata):</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">Estimated <strong>2–3 business days</strong> via Express Air/Surface Courier.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm block">Standard Mainland India:</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">Estimated <strong>3–5 business days</strong>.</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <em>*Delivery timelines are indicative estimates based on regular business days, excluding Sundays and national public holidays. External weather disruptions or regional transit restrictions may occasionally cause minor courier delays.</em>
                </p>
              </section>

              {/* Section 9: Cancellations, Returns & Refunds */}
              <section id="cancellations" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    09
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    9. Cancellations, Returns & Refunds
                  </h2>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">A. Order Cancellation</h4>
                  <p className="text-xs sm:text-sm">
                    You may cancel an order before it has been dispatched from our packaging hub by contacting WhatsApp Support at <a href="https://wa.me/917372926623" className="text-emerald-600 dark:text-emerald-400 font-bold underline">+91 73729 26623</a>. Once handed over to the courier partner, orders cannot be cancelled in transit.
                  </p>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base pt-2">B. Damage or Transit Discrepancy Claims</h4>
                  <p className="text-xs sm:text-sm">
                    In the rare event that a package is delivered damaged, seal-tampered, or defective:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm">
                    <li>Please report the issue within <strong>24 hours of delivery</strong>.</li>
                    <li>Provide photographic or video evidence of the outer package label and the affected items.</li>
                    <li>Our farm quality team will review your claim and issue an immediate replacement or 100% refund within 24 hours.</li>
                  </ul>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base pt-2">C. Refund Processing</h4>
                  <p className="text-xs sm:text-sm">
                    Approved refunds are credited directly to your original payment source (UPI/Bank Account) within <strong>5 to 7 working days</strong> in accordance with standard banking settlement cycles.
                  </p>
                </div>
              </section>

              {/* Section 10: Product Restrictions */}
              <section id="restrictions" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    10. Product-Specific Return Restrictions
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      1. Consumable Food Items (Cookies, Khakhra, Mushroom Powders)
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      In strict compliance with Indian food safety, hygiene, and FSSAI standards, opened consumable food packages cannot be returned once delivered in sound condition.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-1">
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      2. Live Cultures & Mushroom Spawn
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Live mushroom spawn and biological cultures are temperature-sensitive items. Customers must open and inspect live spawn immediately upon courier delivery.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Intellectual Property */}
              <section id="ip" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    11. Intellectual Property Rights
                  </h2>
                </div>

                <p>
                  All content published on www.jasagro.com — including logos, brand trademarks, photographic product assets, agricultural guides, IoT telemetry designs, software code, and text copy — is the exclusive intellectual property of JAS Agro and protected under Indian Copyright and Trademark laws.
                </p>
              </section>

              {/* Section 12: Prohibited Uses */}
              <section id="prohibited" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    12. Prohibited Uses & Website Integrity
                  </h2>
                </div>

                <p>You agree not to:</p>
                <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm">
                  <li>Use the website for any fraudulent, unlawful, or unauthorized commercial resale purpose.</li>
                  <li>Interfere with server security, inject malicious code, or attempt unauthorized database access.</li>
                  <li>Post misleading, defamatory, or abusive reviews or messages.</li>
                </ul>
              </section>

              {/* Section 13: Liability */}
              <section id="liability" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    13
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    13. Disclaimers & Limitation of Liability
                  </h2>
                </div>

                <p>
                  While JAS Agro provides premium verified agricultural supplies, cultivation yields depend inherently on external variables such as climate, grower handling, soil quality, and ambient hygiene.
                </p>
                <p>
                  To the maximum extent permitted by applicable Indian law, JAS Agro&apos;s total aggregate liability arising out of any product purchased shall not exceed the actual monetary amount paid for that specific item.
                </p>
              </section>

              {/* Section 14: Governing Law */}
              <section id="law" className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    14
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    14. Governing Law & Jurisdiction
                  </h2>
                </div>

                <p>
                  These Terms shall be governed by, construed, and enforced in accordance with the laws of the Republic of India. Any disputes arising in connection with these Terms or transactions shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Jaipur, Rajasthan, India</strong>.
                </p>
              </section>

              {/* Section 15: Grievance Desk */}
              <section id="contact" className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 dark:bg-[#132219]/60 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                    15
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    15. Customer Care & Grievance Officer
                  </h2>
                </div>

                <p className="text-sm">
                  For customer support, order inquiries, returns, or formal grievance escalations, please contact us:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Corporate Office
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      Warehouse & Plant
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {COMPANY_INFO.locations.warehouse.address}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1712] border border-emerald-200/60 dark:border-emerald-900/50 space-y-1.5">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Official Email
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
                      Customer Desk
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
