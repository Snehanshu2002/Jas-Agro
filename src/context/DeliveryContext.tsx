"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DeliveryLocationInfo } from "@/lib/deliveryService";

interface DeliveryContextType {
  deliveryInfo: DeliveryLocationInfo | null;
  isLoading: boolean;
  isDetectingLocation: boolean;
  error: string | null;
  checkPincode: (pincode: string) => Promise<boolean>;
  detectLocation: () => Promise<boolean>;
  clearDeliveryInfo: () => void;
  savedPincode: string;
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "jas_agro_delivery_info";

export const DeliveryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryLocationInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed: DeliveryLocationInfo = JSON.parse(stored);
        if (parsed && parsed.pincode && /^[1-9][0-9]{5}$/.test(parsed.pincode)) {
          setDeliveryInfo(parsed);
        }
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  // Save to localStorage when deliveryInfo changes
  useEffect(() => {
    if (!isMounted) return;
    try {
      if (deliveryInfo) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deliveryInfo));
      } else {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    } catch {
      // LocalStorage fallback
    }
  }, [deliveryInfo, isMounted]);

  // Check manual PIN Code
  const checkPincode = useCallback(async (pincode: string): Promise<boolean> => {
    const cleanedPin = pincode.replace(/\D/g, "").trim();

    if (!/^[1-9][0-9]{5}$/.test(cleanedPin)) {
      setError("Please enter a valid 6-digit Indian PIN code.");
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/delivery/check-pincode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pincode: cleanedPin }),
      });

      const json = await res.json();

      if (res.ok && json.success && json.data) {
        setDeliveryInfo(json.data);
        setError(null);
        return true;
      } else {
        setError(json.error || "Could not verify PIN code. Please try again.");
        return false;
      }
    } catch {
      setError("Network error while checking delivery. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Detect current location via browser Geolocation API
  const detectLocation = useCallback(async (): Promise<boolean> => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setError("Geolocation is not supported by your browser. Please enter PIN code manually.");
      return false;
    }

    setIsDetectingLocation(true);
    setError(null);

    return new Promise<boolean>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;

            const res = await fetch("/api/delivery/reverse-geocode", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ latitude, longitude }),
            });

            const json = await res.json();

            if (res.ok && json.success && json.data) {
              setDeliveryInfo(json.data);
              setError(null);
              setIsDetectingLocation(false);
              resolve(true);
            } else {
              setError(json.error || "Could not detect postal PIN from your location. Please enter it manually.");
              setIsDetectingLocation(false);
              resolve(false);
            }
          } catch {
            setError("Failed to reverse-geocode your location. Please enter PIN code manually.");
            setIsDetectingLocation(false);
            resolve(false);
          }
        },
        (geoError) => {
          setIsDetectingLocation(false);
          switch (geoError.code) {
            case geoError.PERMISSION_DENIED:
              setError("Location permission was denied. Please enter your 6-digit PIN code manually.");
              break;
            case geoError.POSITION_UNAVAILABLE:
              setError("Location information is unavailable. Please enter your PIN code manually.");
              break;
            case geoError.TIMEOUT:
              setError("Location request timed out. Please enter your PIN code manually.");
              break;
            default:
              setError("Could not retrieve your location. Please enter your PIN code manually.");
              break;
          }
          resolve(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    });
  }, []);

  const clearDeliveryInfo = useCallback(() => {
    setDeliveryInfo(null);
    setError(null);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  return (
    <DeliveryContext.Provider
      value={{
        deliveryInfo,
        isLoading,
        isDetectingLocation,
        error,
        checkPincode,
        detectLocation,
        clearDeliveryInfo,
        savedPincode: deliveryInfo?.pincode || "",
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDelivery = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error("useDelivery must be used within a DeliveryProvider");
  }
  return context;
};
