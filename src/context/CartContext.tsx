"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { SHOP_PRODUCTS, ShopProduct } from "@/data/shopProducts";

export interface CartItem {
  product: ShopProduct;
  quantity: number;
}

interface StoredCartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  totalCartCount: number;
  cartSubtotal: number;
  shippingCharge: number;
  cartFinalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: ShopProduct, quantity?: number) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  isItemInCart: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "jas_agro_cart";
const FREE_SHIPPING_THRESHOLD = 499;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Load from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const validItems: CartItem[] = [];
          for (const item of parsed) {
            // Support both { productId, quantity } and { product: { id }, quantity } formats
            const productId =
              typeof item === "object" && item !== null
                ? (item as Record<string, unknown>).productId ||
                  ((item as Record<string, unknown>).product as Record<string, unknown> | undefined)?.id ||
                  (typeof (item as Record<string, unknown>).id === "string" ? (item as Record<string, unknown>).id : undefined)
                : undefined;
            const quantity =
              typeof item === "object" && item !== null && typeof (item as Record<string, unknown>).quantity === "number" && (item as Record<string, unknown>).quantity as number > 0
                ? ((item as Record<string, unknown>).quantity as number)
                : 1;

            if (productId && typeof productId === "string") {
              const product = SHOP_PRODUCTS.find((p) => p.id === productId);
              if (product) {
                const existing = validItems.find((vi) => vi.product.id === productId);
                if (existing) {
                  existing.quantity += quantity;
                } else {
                  validItems.push({ product, quantity });
                }
              }
            }
          }
          setCart(validItems);
        }
      }
    } catch {
      // Safe fallback
    }
  }, []);

  // Save to localStorage whenever cart changes (after initial mount)
  useEffect(() => {
    if (!isMounted) return;
    try {
      const simplified: StoredCartItem[] = cart.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(simplified));
    } catch {
      // Safe fallback
    }
  }, [cart, isMounted]);

  // Sync across tabs
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed)) {
            const validItems: CartItem[] = [];
            for (const item of parsed) {
              const productId = item.productId || item.product?.id;
              const quantity = typeof item.quantity === "number" && item.quantity > 0 ? item.quantity : 1;
              if (productId) {
                const product = SHOP_PRODUCTS.find((p) => p.id === productId);
                if (product) {
                  const existing = validItems.find((vi) => vi.product.id === productId);
                  if (existing) {
                    existing.quantity += quantity;
                  } else {
                    validItems.push({ product, quantity });
                  }
                }
              }
            }
            setCart(validItems);
          }
        } catch {
          // Safe fallback
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addToCart = useCallback((product: ShopProduct, quantity: number = 1) => {
    if (quantity <= 0) return;
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const isItemInCart = useCallback(
    (productId: string) => {
      return cart.some((item) => item.product.id === productId);
    },
    [cart]
  );

  const getItemQuantity = useCallback(
    (productId: string) => {
      const found = cart.find((item) => item.product.id === productId);
      return found ? found.quantity : 0;
    },
    [cart]
  );

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);

  const shippingCharge = useMemo(() => {
    if (cartSubtotal === 0 || cartSubtotal >= FREE_SHIPPING_THRESHOLD) return 0;
    return 49;
  }, [cartSubtotal]);

  const cartFinalTotal = useMemo(() => {
    return cartSubtotal + shippingCharge;
  }, [cartSubtotal, shippingCharge]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCartCount,
        cartSubtotal,
        shippingCharge,
        cartFinalTotal,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        isItemInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
