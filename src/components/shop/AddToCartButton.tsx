"use client";

import React, { useState, useRef } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AddToCartButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  justAdded?: boolean;
  quantityInCart?: number;
  isHindi?: boolean;
  className?: string;
  customLabel?: string;
  iconClassName?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  disabled = false,
  onClick,
  justAdded = false,
  quantityInCart = 0,
  className = "",
  customLabel,
  iconClassName = "w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0",
}) => {
  const { t } = useLanguage();
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || justAdded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultLabel =
    quantityInCart > 0
      ? `${t("shopAddMore")} (${quantityInCart})`
      : t("shopAddToCart");

  const label = customLabel || defaultLabel;

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-full font-bold uppercase tracking-wider select-none cursor-pointer isolate shadow-sm active:scale-[0.98] transition-all duration-200 ${
        justAdded
          ? "bg-[#4e8a14] text-white shadow-md scale-[0.99]"
          : "bg-[#3f7010] text-white"
      } disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      {/* Smooth expanding circular ripple bubble originating exactly from mouse-entry point */}
      {!justAdded && !disabled && (
        <span
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb703] transition-all will-change-[width,height,opacity]"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            width: isHovered ? "550px" : "0px",
            height: isHovered ? "550px" : "0px",
            opacity: isHovered ? 1 : 0,
            transitionDuration: isHovered ? "420ms" : "320ms",
            transitionTimingFunction: isHovered
              ? "cubic-bezier(0.16, 1, 0.3, 1)"
              : "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Button Content (Icon + Label) kept above ripple with seamless contrast transition */}
      <span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-250 pointer-events-none ${
          justAdded
            ? "text-white"
            : isHovered
            ? "text-slate-950 font-extrabold"
            : "text-white"
        }`}
      >
        {justAdded ? (
          <>
            <Check className="w-4 h-4 text-white shrink-0" />
            <span className="truncate">{t("shopAdded")}</span>
          </>
        ) : (
          <>
            <ShoppingCart className={`${iconClassName} transition-colors`} />
            <span className="truncate">{label}</span>
          </>
        )}
      </span>
    </button>
  );
};

