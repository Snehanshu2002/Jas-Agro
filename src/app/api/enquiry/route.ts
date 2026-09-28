import { NextRequest, NextResponse } from "next/server";

export interface EnquiryPayload {
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
  botField?: string; // Honeypot field for spam prevention
}

export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json().catch(() => ({}));

    // 1. Bot / Honeypot Check
    if (body.botField && body.botField.trim() !== "") {
      // Silently return success to mislead spambots
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    // 2. Validate Required Fields
    const name = (body.name || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const product = (body.product || body.service || "General Inquiry").trim();
    const company = (body.company || "").trim();
    const quantity = (body.quantity || "").trim();
    const location = (body.location || "").trim();
    const source = (body.source || "Corporate Website").trim();

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name (2-100 characters)." },
        { status: 400 }
      );
    }

    // Phone validation: Indian mobile (10 digits) or international phone (7 to 15 digits)
    const phoneClean = phone.replace(/[\s\-\(\)\+]/g, "");
    if (!phoneClean || phoneClean.length < 8 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number with digits only." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 120) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Optional Webhook Dispatch (e.g. Zapier / Make / Slack / CRM)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name,
            phone,
            email,
            company,
            product,
            quantity,
            location,
            message,
            source,
          }),
        });
      } catch (err) {
        console.error("Enquiry webhook dispatch error:", err);
      }
    }

    // 4. Generate Pre-filled WhatsApp Escalation Link
    const waText = encodeURIComponent(
      `Hello JAS Agro Team,\n\nI have submitted an inquiry for *${product}*.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}${
        quantity ? `\nQuantity: ${quantity}` : ""
      }${location ? `\nLocation: ${location}` : ""}${
        message ? `\nMessage: ${message}` : ""
      }\n\nPlease share commercial details and technical advisory.`
    );
    const whatsappUrl = `https://wa.me/917372926623?text=${waText}`;

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully received by the JAS Agro Agronomy team.",
      data: {
        referenceId: `JAS-${Date.now().toString().slice(-6)}`,
        name,
        product,
        whatsappUrl,
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: `Failed to process inquiry: ${errorMsg}` },
      { status: 500 }
    );
  }
}
