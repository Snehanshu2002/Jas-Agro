"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-[#F6F8EE] dark:bg-[#09170A] text-[#111811] dark:text-[#FAFAF5]">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
          System Notice • Temporary Error
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Something went wrong
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          We encountered a temporary issue while loading this page. You can retry
          loading or return to the main dashboard.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#123B13] hover:bg-[#1B4D1C] text-white font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#123B13] border border-[#2F7D16]/20 text-[#123B13] dark:text-[#FAFAF5] font-bold text-xs hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
