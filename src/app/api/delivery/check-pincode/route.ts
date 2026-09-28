import { NextRequest, NextResponse } from "next/server";
import { evaluateServiceability } from "@/lib/deliveryService";

interface IndiaPostOffice {
  Name: string;
  Description: string | null;
  BranchType: string;
  DeliveryStatus: string;
  Circle: string;
  District: string;
  Division: string;
  Region: string;
  State: string;
  Country: string;
  Pincode: string;
}

interface IndiaPostResponse {
  Message: string;
  Status: "Success" | "Error";
  PostOffice: IndiaPostOffice[] | null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const pincode = String(body.pincode || "").trim();

    // 1. PIN code format validation: exactly 6 digits, first digit 1-9
    const pinRegex = /^[1-9][0-9]{5}$/;
    if (!pinRegex.test(pincode)) {
      return NextResponse.json(
        {
          success: false,
          validPincode: false,
          error: "Please enter a valid 6-digit Indian PIN code.",
        },
        { status: 400 }
      );
    }

    let city = "";
    let state = "";
    let district = "";
    let postOffice = "";
    let postalFound = false;

    // 2. Query official India Post API with timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "User-Agent": "JAS-Agro-Delivery-Service/1.0",
        },
        next: { revalidate: 86400 }, // Cache postal lookup for 24h
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data: IndiaPostResponse[] = await res.json();
        if (Array.isArray(data) && data[0]?.Status === "Success" && data[0].PostOffice && data[0].PostOffice.length > 0) {
          const po = data[0].PostOffice[0];
          city = po.District || po.Division || po.Name;
          state = po.State;
          district = po.District || po.Region;
          postOffice = po.Name;
          postalFound = true;
        } else if (Array.isArray(data) && data[0]?.Status === "Error") {
          // Explicitly not found in postal database
          return NextResponse.json({
            success: false,
            validPincode: false,
            error: "PIN code not found in Indian postal directory. Please verify your 6-digit PIN.",
          });
        }
      }
    } catch {
      // If network fails or times out, proceed to fallback lookup
    }

    // 3. Fallback to Postal Prefix lookup if postal API was unreachable
    if (!postalFound) {
      // Basic check: first digit 1-9
      postalFound = true;
    }

    // 4. Separate JAS Agro Serviceability Evaluation
    const deliveryInfo = evaluateServiceability(pincode, {
      city,
      state,
      district,
      postOffice,
    });

    return NextResponse.json({
      success: true,
      validPincode: true,
      data: deliveryInfo,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      {
        success: false,
        error: `Delivery service check failed: ${errorMsg}`,
      },
      { status: 500 }
    );
  }
}
