import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Home, ShoppingBag, Sprout, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist on JAS Agro. Explore our sustainable agriculture solutions, products, and IoT technologies.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 bg-[#F6F8EE] dark:bg-[#09170A] text-[#111811] dark:text-[#FAFAF5]">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/20 text-[#2F7D16] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest">
          Error 404 • Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Let&apos;s guide you back to the farm.
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          The link you followed may be broken or the page may have been moved.
          Explore our core offerings below:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 hover:border-[#8bf520] transition-all flex flex-col items-center gap-2 shadow-xs group"
          >
            <Home className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold">Home</span>
          </Link>

          <Link
            href="/products"
            className="p-4 rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 hover:border-[#8bf520] transition-all flex flex-col items-center gap-2 shadow-xs group"
          >
            <Sprout className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold">Products</span>
          </Link>

          <Link
            href="/shop"
            className="p-4 rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 hover:border-[#8bf520] transition-all flex flex-col items-center gap-2 shadow-xs group"
          >
            <ShoppingBag className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold">Shop</span>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 hover:border-[#8bf520] transition-all flex flex-col items-center gap-2 shadow-xs group"
          >
            <Phone className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold">Contact</span>
          </Link>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#123B13] hover:bg-[#1B4D1C] dark:bg-[#B8F21B] dark:hover:bg-[#C8F93B] text-white dark:text-[#0D230E] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
