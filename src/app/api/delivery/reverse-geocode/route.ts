import { NextRequest, NextResponse } from "next/server";
import { evaluateServiceability } from "@/lib/deliveryService";

interface NominatimAddress {
  postcode?: string;
  city?: string;
  town?: string;
  village?: string;
  suburb?: string;
  county?: string;
  district?: string;
  state_district?: string;
  state?: string;
  country?: string;
  country_code?: string;
}

interface NominatimResponse {
  address?: NominatimAddress;
  display_name?: string;
  error?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { latitude, longitude } = body;

    if (
      typeof latitude !== "number" ||
      typeof longitude !== "number" ||
      isNaN(latitude) ||
      isNaN(longitude) ||
      latitude < -90 ||
      latitude > 90 ||
      longitude < -180 ||
      longitude > 180
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid coordinates provided.",
        },
        { status: 400 }
      );
    }

    let detectedPincode = "";
    let city = "";
    let state = "";
    let district = "";

    // 1. Check if Google Geocoding API Key is available in environment
    const googleApiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.GEOCODING_API_KEY;

    if (googleApiKey) {
      try {
        const gRes = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
        );
        if (gRes.ok) {
          const gData = await gRes.json();
          if (gData.status === "OK" && gData.results?.[0]) {
            const result = gData.results[0];
            for (const component of result.address_components) {
              if (component.types.includes("postal_code")) {
                detectedPincode = component.long_name.replace(/\D/g, "");
              }
              if (component.types.includes("locality") || component.types.includes("administrative_area_level_2")) {
                city = component.long_name;
              }
              if (component.types.includes("administrative_area_level_1")) {
                state = component.long_name;
              }
            }
          }
        }
      } catch {
        // Fall back to Nominatim
      }
    }

    // 2. Fallback to OpenStreetMap Nominatim if no PIN code detected yet
    if (!detectedPincode || detectedPincode.length !== 6) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const nomRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
          {
            signal: controller.signal,
            headers: {
              Accept: "application/json",
              "User-Agent": "JAS-Agro-Delivery-Service/1.0 (contact@jasagro.com)",
            },
          }
        );

        clearTimeout(timeoutId);

        if (nomRes.ok) {
          const nomData: NominatimResponse = await nomRes.json();
          if (nomData.address) {
            const addr = nomData.address;
            const rawPostcode = (addr.postcode || "").replace(/\D/g, "");
            if (rawPostcode.length === 6 && /^[1-9]/.test(rawPostcode)) {
              detectedPincode = rawPostcode;
            }

            city = addr.city || addr.town || addr.village || addr.suburb || addr.state_district || addr.county || "";
            state = addr.state || "";
            district = addr.state_district || addr.district || addr.county || city;
          }
        }
      } catch {
        // Geolocation reverse lookup network failure
      }
    }

    // 3. If no PIN was extracted from address details, return informative guidance
    if (!detectedPincode || detectedPincode.length !== 6) {
      return NextResponse.json({
        success: false,
        error: "Could not automatically resolve a 6-digit postal code from this location. Please enter your PIN code manually.",
        partialLocation: { city, state, district },
      });
    }

    // 4. Run through JAS Agro Serviceability Engine
    const deliveryInfo = evaluateServiceability(detectedPincode, {
      city,
      state,
      district,
    });

    return NextResponse.json({
      success: true,
      pincode: detectedPincode,
      location: { city, state, district },
      data: deliveryInfo,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Reverse geocoding failed";
    return NextResponse.json(
      {
        success: false,
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
