export interface EnquiryRequestData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  product?: string;
  service?: string;
  quantity?: string;
  location?: string;
  message?: string;
  source?: string;
  botField?: string;
}

export interface EnquiryResponseData {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    referenceId: string;
    name: string;
    product: string;
    whatsappUrl: string;
  };
}

export async function submitEnquiry(payload: EnquiryRequestData): Promise<EnquiryResponseData> {
  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data: EnquiryResponseData = await res.json();
    return data;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Network communication error";
    return {
      success: false,
      error: `Could not submit enquiry: ${msg}. Please contact JAS Agro at +91 73729 26623 directly.`,
    };
  }
}
