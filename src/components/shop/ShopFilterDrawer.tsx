"use client";

import React, { useEffect } from "react";
import { X, Filter, Star, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  SortOption,
  FilterState,
  CategoryOption,
  ProductTypeOption,
} from "./ShopFilterToolbar";

interface ShopFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: CategoryOption[];
  productTypes: ProductTypeOption[];
  minProductPrice: number;
  maxProductPrice: number;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalFilteredCount: number;
  onResetFilters: () => void;
}

export const ShopFilterDrawer: React.FC<ShopFilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  categories,
  productTypes,
  minProductPrice,
  maxProductPrice,
  sortBy,
  onSortChange,
  totalFilteredCount,
  onResetFilters,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleCategory = (categoryId: string) => {
    const exists = filters.categories.includes(categoryId);
    const updated = exists
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    onFilterChange({ ...filters, categories: updated });
  };

  const toggleProductType = (typeId: string) => {
    const exists = filters.productTypes.includes(typeId);
    const updated = exists
      ? filters.productTypes.filter((t) => t !== typeId)
      : [...filters.productTypes, typeId];
    onFilterChange({ ...filters, productTypes: updated });
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-Up Bottom Sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter and Sort Products"
        className="fixed inset-x-0 bottom-0 max-h-[88vh] bg-white dark:bg-[#161616] rounded-t-3xl border-t border-slate-200 dark:border-[#2a2a2a] shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom duration-200 text-slate-900 dark:text-white transition-colors duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-[#282828]">
          <div className="flex items-center gap-2.5">
            <Filter className="w-5 h-5 text-[#3f7010] dark:text-[#529116]" />
            <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {t("shopFilterAndSort")}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close filters"
            className="p-2 rounded-full bg-slate-100 dark:bg-[#262626] text-slate-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-5 space-y-5 overflow-y-auto flex-1">
          {/* Sort By Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t("shopSortBy")}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "featured", label: t("shopSortFeatured") },
                { id: "price-low", label: t("shopSortPriceLow") },
                { id: "price-high", label: t("shopSortPriceHigh") },
                { id: "rating", label: t("shopSortRating") },
                { id: "name-asc", label: t("shopSortNameAsc") },
                { id: "name-desc", label: t("shopSortNameDesc") },
              ].map((s) => {
                const isSelected = sortBy === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => onSortChange(s.id as SortOption)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium text-left transition-colors border cursor-pointer ${
                      isSelected
                        ? "bg-[#3f7010] text-white border-[#3f7010] font-bold shadow-sm"
                        : "bg-slate-50 dark:bg-[#202020] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2e2e2e]"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories Multi-select Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t("shopCategories")}
              </h3>
              {filters.categories.length > 0 && (
                <button
                  onClick={() => onFilterChange({ ...filters, categories: [] })}
                  className="text-xs text-[#3f7010] dark:text-[#7ec238] font-semibold hover:underline"
                >
                  {t("shopClear")}
                </button>
              )}
            </div>
            <div className="space-y-1.5">
              {categories
                .filter((c) => c.id !== "All")
                .map((cat) => {
                  const isChecked = filters.categories.includes(cat.id);
                  const label = isHindi ? cat.labelHi : cat.labelEn;
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      onClick={() => toggleCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium text-left transition-colors cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50 dark:bg-[#1a2e15] border-[#3f7010] text-[#3f7010] dark:text-[#7ec238] font-bold"
                          : "bg-slate-50 dark:bg-[#202020] border-slate-200 dark:border-[#2e2e2e] text-slate-800 dark:text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? "bg-[#3f7010] border-[#3f7010] text-white"
                              : "border-slate-300 dark:border-[#404040] bg-white dark:bg-[#2a2a2a]"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{label}</span>
                      </div>
                      <span className="font-mono text-slate-400">({cat.count})</span>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Product Types Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t("shopProductTypes")}
              </h3>
              {filters.productTypes.length > 0 && (
                <button
                  type="button"
                  onClick={() => onFilterChange({ ...filters, productTypes: [] })}
                  className="text-xs text-[#3f7010] dark:text-[#7ec238] font-semibold hover:underline"
                >
                  {t("shopClear")}
                </button>
              )}
            </div>
            <div className="space-y-1.5">
              {productTypes.map((type) => {
                const isChecked = filters.productTypes.includes(type.id);
                const label = isHindi ? type.labelHi : type.labelEn;
                return (
                  <button
                    type="button"
                    key={type.id}
                    role="checkbox"
                    aria-checked={isChecked}
                    onClick={() => toggleProductType(type.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium text-left transition-colors cursor-pointer ${
                      isChecked
                        ? "bg-emerald-50 dark:bg-[#1a2e15] border-[#3f7010] text-[#3f7010] dark:text-[#7ec238] font-bold"
                        : "bg-slate-50 dark:bg-[#202020] border-slate-200 dark:border-[#2e2e2e] text-slate-800 dark:text-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked
                            ? "bg-[#3f7010] border-[#3f7010] text-white"
                            : "border-slate-300 dark:border-[#404040] bg-white dark:bg-[#2a2a2a]"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{label}</span>
                    </div>
                    <span className="font-mono text-slate-400">({type.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider Section */}
          <div className="space-y-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#202020] border border-slate-200 dark:border-[#2e2e2e]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-zinc-100">
              <span>
                {t("shopMaxPrice")}{" "}
                <strong className="text-[#3f7010] dark:text-[#7ec238] font-mono text-sm">
                  ₹{filters.maxPrice}
                </strong>
              </span>
              {filters.maxPrice < maxProductPrice && (
                <button
                  onClick={() => onFilterChange({ ...filters, maxPrice: maxProductPrice })}
                  className="text-[#3f7010] dark:text-[#7ec238] text-xs font-semibold hover:underline"
                >
                  {t("shopReset")}
                </button>
              )}
            </div>
            <input
              type="range"
              min={minProductPrice}
              max={maxProductPrice}
              step={50}
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full h-1.5 bg-slate-200 dark:bg-[#303030] rounded-lg appearance-none cursor-pointer accent-[#3f7010]"
            />
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>₹{minProductPrice}</span>
              <span>₹{maxProductPrice}</span>
            </div>
          </div>

          {/* Rating Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t("shopCustomerRating")}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 0, label: t("shopAllRatings") },
                { value: 4.5, label: "4.5★+" },
                { value: 4.8, label: "4.8★+" },
              ].map((r) => {
                const isSelected = filters.minRating === r.value;
                return (
                  <button
                    key={r.value}
                    onClick={() => onFilterChange({ ...filters, minRating: r.value })}
                    className={`py-2 px-2.5 rounded-xl text-xs font-medium text-center transition-colors border cursor-pointer ${
                      isSelected
                        ? "bg-[#3f7010] text-white border-[#3f7010] font-bold"
                        : "bg-slate-50 dark:bg-[#202020] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2e2e2e]"
                    }`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Toggles */}
          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t("shopOtherOptions")}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-medium transition-colors border cursor-pointer ${
                  filters.inStockOnly
                    ? "bg-[#3f7010] text-white border-[#3f7010] font-bold"
                    : "bg-slate-50 dark:bg-[#202020] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2e2e2e]"
                }`}
              >
                <span>{t("shopInStockOnly")}</span>
              </button>
              <button
                onClick={() => onFilterChange({ ...filters, popularOnly: !filters.popularOnly })}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-medium transition-colors border cursor-pointer ${
                  filters.popularOnly
                    ? "bg-[#3f7010] text-white border-[#3f7010] font-bold"
                    : "bg-slate-50 dark:bg-[#202020] text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-[#2e2e2e]"
                }`}
              >
                <span>{t("shopBestSelling")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-[#282828] flex items-center gap-3 bg-slate-50 dark:bg-[#121212]">
          <button
            onClick={onResetFilters}
            className="py-3 px-4 rounded-xl bg-slate-200 dark:bg-[#222222] text-slate-700 dark:text-zinc-300 font-semibold text-xs hover:bg-slate-300 cursor-pointer"
          >
            {t("shopResetAll")}
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-5 rounded-xl bg-[#3f7010] hover:bg-[#4e8a14] active:bg-[#30550c] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
          >
            {isHindi ? `दिखाएं (${totalFilteredCount} उत्पाद)` : `Show ${totalFilteredCount} Products`}
          </button>
        </div>
      </div>
    </div>
  );
};
