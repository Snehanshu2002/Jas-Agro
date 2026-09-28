export interface DeliveryLocationInfo {
  pincode: string;
  city: string;
  state: string;
  district: string;
  postOffice?: string;
  serviceable: boolean;
  estimatedDays: string;
  estimatedDeliveryDate: string;
  shippingFee: number;
  freeShippingThreshold: number;
  shippingMessage: string;
  cashOnDeliveryAvailable: boolean;
  courierPartner: string;
  expressAvailable: boolean;
  serviceTier: "express_hub" | "metro" | "standard" | "unserviceable";
  message?: string;
}

export interface PincodeLookupResult {
  valid: boolean;
  pincode: string;
  city: string;
  state: string;
  district: string;
  postOffice?: string;
  error?: string;
}

// Format a realistic delivery date skipping Sundays
export function calculateDeliveryDate(daysToAdd: number): string {
  const date = new Date();
  let added = 0;
  while (added < daysToAdd) {
    date.setDate(date.getDate() + 1);
    // Skip Sunday (0) for courier delivery estimation
    if (date.getDay() !== 0) {
      added++;
    }
  }

  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

// Postal Circle Fallback Directory for Indian PIN Prefixes (10 - 99)
const POSTAL_PREFIX_MAP: Record<string, { state: string; district: string; city: string; tier: "express_hub" | "metro" | "standard" | "unserviceable" }> = {
  // Delhi
  "11": { state: "Delhi", district: "New Delhi", city: "New Delhi", tier: "express_hub" },
  // Haryana
  "12": { state: "Haryana", district: "Gurugram / Faridabad", city: "Gurugram", tier: "express_hub" },
  "13": { state: "Haryana", district: "Ambala / Karnal", city: "Karnal", tier: "standard" },
  // Punjab & Chandigarh
  "14": { state: "Punjab", district: "Ludhiana / Jalandhar", city: "Ludhiana", tier: "standard" },
  "15": { state: "Punjab", district: "Bathinda / Ferozepur", city: "Bathinda", tier: "standard" },
  "16": { state: "Chandigarh", district: "Chandigarh", city: "Chandigarh", tier: "metro" },
  // Himachal Pradesh
  "17": { state: "Himachal Pradesh", district: "Shimla / Kangra", city: "Shimla", tier: "standard" },
  // Jammu & Kashmir & Ladakh
  "18": { state: "Jammu and Kashmir", district: "Jammu", city: "Jammu", tier: "standard" },
  "19": { state: "Jammu and Kashmir", district: "Srinagar / Leh", city: "Srinagar", tier: "standard" },
  // Uttar Pradesh & Uttarakhand
  "20": { state: "Uttar Pradesh", district: "Noida / Aligarh", city: "Noida", tier: "express_hub" },
  "21": { state: "Uttar Pradesh", district: "Prayagraj / Fatehpur", city: "Prayagraj", tier: "standard" },
  "22": { state: "Uttar Pradesh", district: "Lucknow / Ayodhya", city: "Lucknow", tier: "standard" },
  "23": { state: "Uttar Pradesh", district: "Varanasi / Mirzapur", city: "Varanasi", tier: "standard" },
  "24": { state: "Uttarakhand", district: "Dehradun / Haridwar", city: "Dehradun", tier: "standard" },
  "25": { state: "Uttar Pradesh", district: "Meerut / Saharanpur", city: "Meerut", tier: "standard" },
  "26": { state: "Uttarakhand", district: "Nainital / Udham Singh Nagar", city: "Haldwani", tier: "standard" },
  "27": { state: "Uttar Pradesh", district: "Gorakhpur / Basti", city: "Gorakhpur", tier: "standard" },
  "28": { state: "Uttar Pradesh", district: "Agra / Jhansi", city: "Agra", tier: "standard" },
  // Rajasthan (JAS Agro Regional Core Hub)
  "30": { state: "Rajasthan", district: "Jaipur", city: "Jaipur", tier: "express_hub" },
  "31": { state: "Rajasthan", district: "Udaipur / Bhilwara", city: "Udaipur", tier: "express_hub" },
  "32": { state: "Rajasthan", district: "Kota / Bharatpur", city: "Kota", tier: "express_hub" },
  "33": { state: "Rajasthan", district: "Bikaner / Sikar", city: "Bikaner", tier: "express_hub" },
  "34": { state: "Rajasthan", district: "Jodhpur / Barmer", city: "Jodhpur", tier: "express_hub" },
  // Gujarat
  "36": { state: "Gujarat", district: "Rajkot / Jamnagar", city: "Rajkot", tier: "standard" },
  "37": { state: "Gujarat", district: "Kutch / Gandhidham", city: "Gandhidham", tier: "standard" },
  "38": { state: "Gujarat", district: "Ahmedabad / Gandhinagar", city: "Ahmedabad", tier: "metro" },
  "39": { state: "Gujarat", district: "Surat / Vadodara", city: "Surat", tier: "metro" },
  // Maharashtra & Goa
  "40": { state: "Maharashtra", district: "Mumbai / Thane / Goa", city: "Mumbai", tier: "metro" },
  "41": { state: "Maharashtra", district: "Pune / Kolhapur", city: "Pune", tier: "metro" },
  "42": { state: "Maharashtra", district: "Nashik / Dhule", city: "Nashik", tier: "standard" },
  "43": { state: "Maharashtra", district: "Aurangabad / Nanded", city: "Chhatrapati Sambhajinagar", tier: "standard" },
  "44": { state: "Maharashtra", district: "Nagpur / Amravati", city: "Nagpur", tier: "metro" },
  // Madhya Pradesh & Chhattisgarh
  "45": { state: "Madhya Pradesh", district: "Indore / Ujjain", city: "Indore", tier: "metro" },
  "46": { state: "Madhya Pradesh", district: "Bhopal", city: "Bhopal", tier: "metro" },
  "47": { state: "Madhya Pradesh", district: "Gwalior", city: "Gwalior", tier: "standard" },
  "48": { state: "Madhya Pradesh", district: "Jabalpur", city: "Jabalpur", tier: "standard" },
  "49": { state: "Chhattisgarh", district: "Raipur / Bilaspur", city: "Raipur", tier: "standard" },
  // Andhra Pradesh & Telangana
  "50": { state: "Telangana", district: "Hyderabad / Secunderabad", city: "Hyderabad", tier: "metro" },
  "51": { state: "Andhra Pradesh", district: "Tirupati / Kadapa", city: "Tirupati", tier: "standard" },
  "52": { state: "Andhra Pradesh", district: "Vijayawada / Guntur", city: "Vijayawada", tier: "standard" },
  "53": { state: "Andhra Pradesh", district: "Visakhapatnam", city: "Visakhapatnam", tier: "metro" },
  // Karnataka
  "56": { state: "Karnataka", district: "Bengaluru Urban", city: "Bengaluru", tier: "metro" },
  "57": { state: "Karnataka", district: "Mangaluru / Mysuru", city: "Mysuru", tier: "standard" },
  "58": { state: "Karnataka", district: "Hubballi-Dharwad / Belagavi", city: "Hubballi", tier: "standard" },
  "59": { state: "Karnataka", district: "Kalaburagi / Ballari", city: "Kalaburagi", tier: "standard" },
  // Tamil Nadu & Puducherry
  "60": { state: "Tamil Nadu", district: "Chennai", city: "Chennai", tier: "metro" },
  "61": { state: "Tamil Nadu", district: "Thanjavur / Tiruchirappalli", city: "Tiruchirappalli", tier: "standard" },
  "62": { state: "Tamil Nadu", district: "Madurai / Dindigul", city: "Madurai", tier: "standard" },
  "63": { state: "Tamil Nadu", district: "Salem / Vellore", city: "Salem", tier: "standard" },
  "64": { state: "Tamil Nadu", district: "Coimbatore", city: "Coimbatore", tier: "metro" },
  // Kerala & Lakshadweep
  "67": { state: "Kerala", district: "Kozhikode / Kannur", city: "Kozhikode", tier: "standard" },
  "68": { state: "Kerala", district: "Ernakulam / Thrissur", city: "Kochi", tier: "metro" },
  "69": { state: "Kerala", district: "Thiruvananthapuram / Kollam", city: "Thiruvananthapuram", tier: "standard" },
  // West Bengal, Sikkim & Andaman
  "70": { state: "West Bengal", district: "Kolkata", city: "Kolkata", tier: "metro" },
  "71": { state: "West Bengal", district: "Howrah / Hooghly", city: "Howrah", tier: "metro" },
  "72": { state: "West Bengal", district: "Midnapore / Bankura", city: "Kharagpur", tier: "standard" },
  "73": { state: "West Bengal", district: "Siliguri / Darjeeling / Sikkim", city: "Siliguri", tier: "standard" },
  "74": { state: "West Bengal", district: "North 24 Parganas / Nadia", city: "Barasat", tier: "standard" },
  // Odisha
  "75": { state: "Odisha", district: "Bhubaneswar / Puri", city: "Bhubaneswar", tier: "metro" },
  "76": { state: "Odisha", district: "Cuttack / Sambalpur", city: "Cuttack", tier: "standard" },
  "77": { state: "Odisha", district: "Rourkela / Sundargarh", city: "Rourkela", tier: "standard" },
  // North Eastern States
  "78": { state: "Assam", district: "Guwahati / Kamrup", city: "Guwahati", tier: "standard" },
  "79": { state: "North East", district: "Shillong / Agartala / Imphal", city: "Shillong", tier: "standard" },
  // Bihar & Jharkhand
  "80": { state: "Bihar", district: "Patna", city: "Patna", tier: "metro" },
  "81": { state: "Bihar", district: "Bhagalpur / Munger", city: "Bhagalpur", tier: "standard" },
  "82": { state: "Bihar", district: "Gaya / Nawada", city: "Gaya", tier: "standard" },
  "83": { state: "Jharkhand", district: "Ranchi / Jamshedpur", city: "Ranchi", tier: "metro" },
  "84": { state: "Bihar", district: "Muzaffarpur / Darbhanga", city: "Muzaffarpur", tier: "standard" },
  "85": { state: "Bihar", district: "Purnia / Katihar", city: "Purnia", tier: "standard" },
  // Non-Serviceable Remote & Military Restricted zones
  "682": { state: "Lakshadweep", district: "Lakshadweep Islands", city: "Kavaratti", tier: "unserviceable" },
  "90": { state: "Army Postal Service", district: "Field Post Office", city: "APO/FPO", tier: "unserviceable" },
  "99": { state: "Army Postal Service", district: "Field Post Office", city: "APO/FPO", tier: "unserviceable" },
};

// Evaluate JAS Agro Serviceability for a given PIN code and postal info
export function evaluateServiceability(
  pincode: string,
  postalInfo: { city: string; state: string; district: string; postOffice?: string }
): DeliveryLocationInfo {
  const prefix2 = pincode.substring(0, 2);
  const prefix3 = pincode.substring(0, 3);
  const fallback = POSTAL_PREFIX_MAP[prefix3] || POSTAL_PREFIX_MAP[prefix2];

  const city = postalInfo.city || fallback?.city || "Local Area";
  const state = postalInfo.state || fallback?.state || "India";
  const district = postalInfo.district || fallback?.district || city;
  const postOffice = postalInfo.postOffice || "";

  // Check if explicitly unserviceable
  if (fallback && fallback.tier === "unserviceable") {
    return {
      pincode,
      city,
      state,
      district,
      postOffice,
      serviceable: false,
      estimatedDays: "Unavailable",
      estimatedDeliveryDate: "Not Available",
      shippingFee: 0,
      freeShippingThreshold: 499,
      shippingMessage: "Direct delivery is currently not serviceable in this postal zone.",
      cashOnDeliveryAvailable: false,
      courierPartner: "Standard Cargo Only",
      expressAvailable: false,
      serviceTier: "unserviceable",
      message: "Direct courier service is currently unavailable for this PIN code. Please contact JAS Agro support for bulk or custom freight orders.",
    };
  }

  // Determine service tier
  let tier: "express_hub" | "metro" | "standard" =
    fallback && fallback.tier !== "unserviceable" ? fallback.tier : "standard";
  let estimatedDays = "3–5 Business Days";
  let daysToAdd = 4;
  let expressAvailable = false;
  let courierPartner = "Delhivery / BlueDart Express";

  if (tier === "express_hub") {
    estimatedDays = "1–2 Business Days";
    daysToAdd = 2;
    expressAvailable = true;
    courierPartner = "JAS Agro Priority Dispatch";
  } else if (tier === "metro") {
    estimatedDays = "2–3 Business Days";
    daysToAdd = 3;
    expressAvailable = true;
    courierPartner = "Bluedart / Delhivery Express";
  }

  const estimatedDeliveryDate = calculateDeliveryDate(daysToAdd);

  return {
    pincode,
    city,
    state,
    district,
    postOffice,
    serviceable: true,
    estimatedDays,
    estimatedDeliveryDate,
    shippingFee: 49,
    freeShippingThreshold: 499,
    shippingMessage: "FREE Delivery on orders above ₹499",
    cashOnDeliveryAvailable: true,
    courierPartner,
    expressAvailable,
    serviceTier: tier,
    message: `Delivery available to ${city}, ${state} (${pincode})`,
  };
}
