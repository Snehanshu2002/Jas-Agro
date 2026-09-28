import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  X,
  Star,
  Check,
  List,
  LayoutGrid,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type SortOption = "featured" | "price-low" | "price-high" | "rating" | "name-asc" | "name-desc";
export type ViewMode = "grid" | "list";

export interface FilterState {
  categories: string[];
  productTypes: string[];
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  popularOnly: boolean;
}

export interface CategoryOption {
  id: string;
  labelEn: string;
  labelHi: string;
  count: number;
}

export interface ProductTypeOption {
  id: string;
  labelEn: string;
  labelHi: string;
  count: number;
}

interface ShopFilterToolbarProps {
  // Filter state
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  // Options
  categories: CategoryOption[];
  productTypes: ProductTypeOption[];
  minProductPrice: number;
  maxProductPrice: number;
  // View mode
  viewMode?: ViewMode;
  onViewModeChange?: (mode: ViewMode) => void;
  // Sort & Count
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalFilteredCount: number;
  // Reset & Mobile Drawer
  activeFilterCount: number;
  onResetFilters: () => void;
  onOpenMobileFilters: () => void;
}

export const ShopFilterToolbar: React.FC<ShopFilterToolbarProps> = ({
  filters,
  onFilterChange,
  categories,
  productTypes,
  minProductPrice,
  maxProductPrice,
  viewMode = "grid",
  onViewModeChange,
  sortBy,
  onSortChange,
  totalFilteredCount,
  activeFilterCount,
  onResetFilters,
  onOpenMobileFilters,
}) => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Category Multi-select toggle
  const toggleCategory = (categoryId: string) => {
    const exists = filters.categories.includes(categoryId);
    const updated = exists
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    onFilterChange({ ...filters, categories: updated });
  };

  // Product Type Multi-select toggle
  const toggleProductType = (typeId: string) => {
    const exists = filters.productTypes.includes(typeId);
    const updated = exists
      ? filters.productTypes.filter((t) => t !== typeId)
      : [...filters.productTypes, typeId];
    onFilterChange({ ...filters, productTypes: updated });
  };

  // Rating select
  const setRating = (rating: number) => {
    onFilterChange({ ...filters, minRating: rating });
    setOpenDropdown(null);
  };

  // Price range slider change
  const handlePriceChange = (val: number) => {
    onFilterChange({ ...filters, maxPrice: val });
  };

  const resetPrice = () => {
    onFilterChange({ ...filters, maxPrice: maxProductPrice });
  };

  // Rating label helper
  const getRatingLabel = () => {
    if (filters.minRating === 4.8) return "4.8★ & above";
    if (filters.minRating === 4.5) return "4.5★ & above";
    return t("shopFilterRating");
  };

  return (
    <div
      ref={toolbarRef}
      className="relative z-20 flex flex-wrap items-center justify-between gap-3 py-3 border-y border-slate-200/90 dark:border-[#222222] text-xs sm:text-[13px] select-none transition-colors duration-200"
    >
      {/* ----------------- LEFT: DESKTOP PILL FILTERS ----------------- */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {/* Mobile Filter Button (<1024px) */}
        <button
          onClick={onOpenMobileFilters}
          className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-[#141414] border border-[#3f7010]/50 dark:border-[#529116]/50 text-[#3f7010] dark:text-[#7ec238] font-bold shadow-2xs hover:bg-[#3f7010]/10 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>{t("shopFilter")}</span>
          {activeFilterCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-[#3f7010] text-white font-mono text-[11px] font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* 1. Category Pill */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => toggleDropdown("category")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
              filters.categories.length > 0
                ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
                : openDropdown === "category"
                ? "bg-emerald-50 dark:bg-[#1a2e15] text-[#3f7010] dark:text-[#7ec238] border-[#3f7010]"
                : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
            }`}
            aria-expanded={openDropdown === "category"}
          >
            <span>
              {t("shopFilterCategory")}
              {filters.categories.length > 0 && ` (${filters.categories.length})`}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === "category" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Category Dropdown */}
          {openDropdown === "category" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 mt-2 w-64 p-3 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl shadow-xl space-y-1.5 animate-in fade-in zoom-in-95 duration-150 z-30"
            >
              <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-slate-100 dark:border-[#262626] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>{t("shopSelectCategory")}</span>
                {filters.categories.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onFilterChange({ ...filters, categories: [] })}
                    className="text-[#3f7010] dark:text-[#7ec238] hover:underline cursor-pointer"
                  >
                    {t("shopClear")}
                  </button>
                )}
              </div>
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
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer border ${
                        isChecked
                          ? "bg-[#ecf6e3] dark:bg-[#1a2e15] border-[#3f7010]/50 text-[#3f7010] dark:text-[#7ec238] font-bold"
                          : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-[#222222] text-slate-800 dark:text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-[#3f7010] border-[#3f7010] text-white"
                              : "border-slate-300 dark:border-[#404040] bg-white dark:bg-[#202020]"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs">{label}</span>
                      </div>
                      <span className="text-[11px] font-mono opacity-70">({cat.count})</span>
                    </button>
                  );
                })}
            </div>
          )}
        </div>

        {/* 2. Product Type Pill */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => toggleDropdown("productType")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
              filters.productTypes.length > 0
                ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
                : openDropdown === "productType"
                ? "bg-emerald-50 dark:bg-[#1a2e15] text-[#3f7010] dark:text-[#7ec238] border-[#3f7010]"
                : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
            }`}
            aria-expanded={openDropdown === "productType"}
          >
            <span>
              {t("shopFilterProductType")}
              {filters.productTypes.length > 0 && ` (${filters.productTypes.length})`}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === "productType" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Product Type Dropdown */}
          {openDropdown === "productType" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 mt-2 w-64 p-3 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl shadow-xl space-y-1.5 animate-in fade-in zoom-in-95 duration-150 z-30"
            >
              <div className="flex items-center justify-between pb-1.5 mb-1 border-b border-slate-100 dark:border-[#262626] text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>{t("shopSelectType")}</span>
                {filters.productTypes.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onFilterChange({ ...filters, productTypes: [] })}
                    className="text-[#3f7010] dark:text-[#7ec238] hover:underline cursor-pointer"
                  >
                    {t("shopClear")}
                  </button>
                )}
              </div>
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
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer border ${
                      isChecked
                        ? "bg-[#ecf6e3] dark:bg-[#1a2e15] border-[#3f7010]/50 text-[#3f7010] dark:text-[#7ec238] font-bold"
                        : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-[#222222] text-slate-800 dark:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                          isChecked
                            ? "bg-[#3f7010] border-[#3f7010] text-white"
                            : "border-slate-300 dark:border-[#404040] bg-white dark:bg-[#202020]"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs">{label}</span>
                    </div>
                    <span className="text-[11px] font-mono opacity-70">({type.count})</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. Availability Pill */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => toggleDropdown("availability")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
              filters.inStockOnly
                ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
                : openDropdown === "availability"
                ? "bg-emerald-50 dark:bg-[#1a2e15] text-[#3f7010] dark:text-[#7ec238] border-[#3f7010]"
                : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
            }`}
            aria-expanded={openDropdown === "availability"}
          >
            <span>{t("shopFilterAvailability")}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === "availability" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Availability Dropdown */}
          {openDropdown === "availability" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 mt-2 w-56 p-3 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl shadow-xl space-y-2 animate-in fade-in zoom-in-95 duration-150 z-30"
            >
              <button
                type="button"
                role="checkbox"
                aria-checked={filters.inStockOnly}
                onClick={() => onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer border ${
                  filters.inStockOnly
                    ? "bg-[#ecf6e3] dark:bg-[#1a2e15] border-[#3f7010]/50 text-[#3f7010] dark:text-[#7ec238] font-bold"
                    : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-[#222222] text-slate-800 dark:text-zinc-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      filters.inStockOnly
                        ? "bg-[#3f7010] border-[#3f7010] text-white"
                        : "border-slate-300 dark:border-[#404040] bg-white dark:bg-[#202020]"
                    }`}
                  >
                    {filters.inStockOnly && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-medium">{t("shopInStockOnly")}</span>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* 4. Price Pill (OrganicBazar Range Slider Dropdown) */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => toggleDropdown("price")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
              filters.maxPrice < maxProductPrice
                ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
                : openDropdown === "price"
                ? "bg-emerald-50 dark:bg-[#1a2e15] text-[#3f7010] dark:text-[#7ec238] border-[#3f7010]"
                : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
            }`}
            aria-expanded={openDropdown === "price"}
          >
            <span>
              {filters.maxPrice < maxProductPrice
                ? `≤ ₹${filters.maxPrice}`
                : t("shopFilterPrice")}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === "price" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Price Range Dropdown (OrganicBazar Structure) */}
          {openDropdown === "price" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 mt-2 w-64 p-4 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl shadow-xl space-y-3.5 animate-in fade-in zoom-in-95 duration-150 z-30"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-zinc-100">
                <span>
                  {t("shopMaxPrice")}{" "}
                  <strong className="text-[#3f7010] dark:text-[#7ec238] font-mono text-sm">
                    ₹{filters.maxPrice}
                  </strong>
                </span>
                {filters.maxPrice < maxProductPrice && (
                  <button
                    type="button"
                    onClick={resetPrice}
                    className="text-[#3f7010] dark:text-[#7ec238] text-xs font-semibold hover:underline cursor-pointer"
                  >
                    {t("shopReset")}
                  </button>
                )}
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min={minProductPrice}
                max={maxProductPrice}
                step={50}
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 dark:bg-[#2c2c2c] rounded-lg appearance-none cursor-pointer accent-[#3f7010]"
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>₹{minProductPrice}</span>
                <span>₹{maxProductPrice}</span>
              </div>
            </div>
          )}
        </div>

        {/* 5. Rating Pill */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => toggleDropdown("rating")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
              filters.minRating > 0
                ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
                : openDropdown === "rating"
                ? "bg-emerald-50 dark:bg-[#1a2e15] text-[#3f7010] dark:text-[#7ec238] border-[#3f7010]"
                : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
            }`}
            aria-expanded={openDropdown === "rating"}
          >
            <span>{getRatingLabel()}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === "rating" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Rating Dropdown */}
          {openDropdown === "rating" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-full left-0 mt-2 w-52 p-2.5 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2e2e2e] rounded-2xl shadow-xl space-y-1 animate-in fade-in zoom-in-95 duration-150 z-30"
            >
              {[
                { value: 0, label: t("shopAllRatings") },
                { value: 4.8, label: "4.8★ & above" },
                { value: 4.5, label: "4.5★ & above" },
              ].map((r) => {
                const isSelected = filters.minRating === r.value;
                return (
                  <button
                    key={r.value}
                    onClick={() => setRating(r.value)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#3f7010] text-white font-bold"
                        : "hover:bg-slate-50 dark:hover:bg-[#222222] text-slate-800 dark:text-zinc-200"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {r.value > 0 && <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}
                      <span>{r.label}</span>
                    </div>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 6. Popular / Best Selling Pill */}
        <button
          onClick={() => onFilterChange({ ...filters, popularOnly: !filters.popularOnly })}
          className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer font-semibold ${
            filters.popularOnly
              ? "bg-[#3f7010] text-white border-[#3f7010] shadow-sm font-bold"
              : "bg-white dark:bg-[#141414] text-[#2d520b] dark:text-[#7ec238] border-[#3f7010]/40 dark:border-[#529116]/40 hover:bg-[#3f7010]/10 dark:hover:bg-[#3f7010]/20"
          }`}
        >
          <span>{t("shopBestSelling")}</span>
        </button>

        {/* 7. Clear All Active Filters Button */}
        {activeFilterCount > 0 && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-[#3f7010] dark:text-[#7ec238] hover:text-red-600 dark:hover:text-red-400 font-bold transition-colors cursor-pointer text-xs"
          >
            <X className="w-3.5 h-3.5" />
            <span>{t("shopReset")}</span>
          </button>
        )}
      </div>

      {/* ----------------- RIGHT: PRODUCT COUNT, VIEW TOGGLE & SORT DROPDOWN ----------------- */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 ml-auto">
        {/* Product Count */}
        <span className="text-slate-500 dark:text-zinc-400 font-medium whitespace-nowrap text-xs sm:text-[13px]">
          <strong className="text-slate-900 dark:text-white font-bold">{totalFilteredCount}</strong>{" "}
          {totalFilteredCount === 1 ? t("shopProductCountSingle") : t("shopProductCountPlural")}
        </span>

        {/* List / Grid Layout View Toggle */}
        {onViewModeChange && (
          <div className="flex items-center p-0.5 rounded-full bg-slate-100 dark:bg-[#1c1c1c] border border-slate-200 dark:border-[#2a2a2a] shadow-2xs">
            {/* 3-line icon = LIST VIEW */}
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              title={t("shopListView")}
              aria-label="List View"
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-[#3f7010] text-white shadow-xs font-bold"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800"
              }`}
            >
              <List className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </button>

            {/* 4-square icon = GRID VIEW */}
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              title={t("shopGridView")}
              aria-label="Grid View"
              className={`p-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[#3f7010] text-white shadow-xs font-bold"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </button>
          </div>
        )}

        {/* Sort Dropdown */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 text-xs hidden md:inline">
            {t("shopSortBy")}
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="py-1.5 pl-3 pr-7 rounded-full bg-white dark:bg-[#161616] border border-slate-200 dark:border-[#2a2a2a] text-xs font-semibold text-slate-800 dark:text-zinc-200 focus:outline-none focus:border-[#3f7010] cursor-pointer shadow-2xs"
          >
            <option value="featured">{t("shopSortFeatured")}</option>
            <option value="price-low">{t("shopSortPriceLow")}</option>
            <option value="price-high">{t("shopSortPriceHigh")}</option>
            <option value="rating">{t("shopSortRating")}</option>
            <option value="name-asc">{t("shopSortNameAsc")}</option>
            <option value="name-desc">{t("shopSortNameDesc")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};
