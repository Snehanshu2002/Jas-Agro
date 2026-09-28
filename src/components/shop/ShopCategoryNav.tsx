"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface CategoryItem {
  id: string;
  labelEn: string;
  labelHi: string;
  count: number;
}

interface ShopCategoryNavProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const ShopCategoryNav: React.FC<ShopCategoryNavProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const label = isHindi ? cat.labelHi : cat.labelEn;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-[13.5px] sm:text-[14.5px] font-semibold whitespace-nowrap transition-all cursor-pointer select-none border ${
                isSelected
                  ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm"
                  : "bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2a2a2a] hover:border-[#3f7010]/60 hover:text-slate-950 dark:hover:text-white shadow-2xs"
              }`}
              aria-pressed={isSelected}
            >
              <span>{label}</span>
              <span
                className={`px-1.5 py-[1px] rounded-full text-[11.5px] sm:text-[12.5px] font-mono ${
                  isSelected ? "bg-[#30550c] text-white font-bold" : "bg-slate-100 dark:bg-[#262626] text-slate-600 dark:text-zinc-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
