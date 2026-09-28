"use client";

import React from "react";
import { Grid } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ShopPaginationProps {
  currentPage: number;
  showAllPages: boolean;
  onPageChange: (page: number) => void;
  onToggleShowAll: () => void;
  totalFilteredCount: number;
  totalAvailableCount: number;
}

export const ShopPagination: React.FC<ShopPaginationProps> = ({
  currentPage,
  showAllPages,
  onPageChange,
  onToggleShowAll,
  totalFilteredCount,
  totalAvailableCount,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-200 dark:border-[#222222] text-[13.5px] transition-colors duration-200">
      <div className="text-slate-500 dark:text-zinc-400 font-medium text-[13.5px]">
        {isHindi ? (
          <>
            कुल <strong className="text-slate-900 dark:text-white font-mono">{totalAvailableCount}</strong> में से{" "}
            <strong className="text-[#529116] font-mono">{totalFilteredCount}</strong> उत्पाद दिखाए जा रहे हैं
          </>
        ) : (
          <>
            Showing <strong className="text-[#529116] font-mono">{totalFilteredCount}</strong> of{" "}
            <strong className="text-slate-900 dark:text-white font-mono">{totalAvailableCount}</strong> products
          </>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Page 1 Button */}
        <button
          onClick={() => onPageChange(1)}
          className={`w-[34px] h-[34px] rounded-full text-[13.5px] font-bold font-mono transition-all border cursor-pointer ${
            !showAllPages && currentPage === 1
              ? "bg-[#3f7010] text-white border-[#3f7010] shadow-2xs"
              : "bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2a2a2a] hover:border-[#3f7010] hover:text-slate-950 dark:hover:text-white"
          }`}
        >
          1
        </button>

        {/* Page 2 Button */}
        <button
          onClick={() => onPageChange(2)}
          className={`w-[34px] h-[34px] rounded-full text-[13.5px] font-bold font-mono transition-all border cursor-pointer ${
            !showAllPages && currentPage === 2
              ? "bg-[#3f7010] text-white border-[#3f7010] shadow-2xs"
              : "bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2a2a2a] hover:border-[#3f7010] hover:text-slate-950 dark:hover:text-white"
          }`}
        >
          2
        </button>

        {/* View All Toggle */}
        <button
          onClick={onToggleShowAll}
          className={`px-3.5 h-[34px] rounded-full text-[13.5px] font-semibold transition-all border inline-flex items-center gap-1.5 cursor-pointer ${
            showAllPages
              ? "bg-[#3f7010] text-white border-[#3f7010] shadow-2xs"
              : "bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2a2a2a] hover:border-[#3f7010] hover:text-slate-950 dark:hover:text-white"
          }`}
        >
          <Grid className="w-4 h-4" />
          <span>{t("shopViewAll")}</span>
        </button>
      </div>
    </div>
  );
};
