"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";

interface WishlistContextType {
  wishlist: string[];
  wishlistCount: number;
  isWishlisted: (productId: string) => boolean;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  clearWishlist: () => void;
  wishlistProducts: ShopProduct[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = "jas_agro_wishlist";

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Load from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Filter out duplicates and invalid IDs
          const validIds = Array.from(
            new Set(parsed.filter((id) => typeof id === "string" && SHOP_PRODUCTS.some((p) => p.id === id)))
          );
          setWishlist(validIds);
        }
      }
    } catch {
      // Safe fallback
    }
  }, []);

  // Save to localStorage whenever wishlist changes (after initial mount)
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      // Safe fallback
    }
  }, [wishlist, isMounted]);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            setWishlist(
              Array.from(
                new Set(parsed.filter((id) => typeof id === "string" && SHOP_PRODUCTS.some((p) => p.id === id)))
              )
            );
          }
        } catch {
          // Safe fallback
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => {
      return wishlist.includes(productId);
    },
    [wishlist]
  );

  const addToWishlist = useCallback((productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  // Resolved list of full ShopProduct objects
  const wishlistProducts = useMemo(() => {
    return wishlist
      .map((id) => SHOP_PRODUCTS.find((p) => p.id === id))
      .filter((p): p is ShopProduct => Boolean(p));
  }, [wishlist]);

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        isWishlisted,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        wishlistProducts,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
