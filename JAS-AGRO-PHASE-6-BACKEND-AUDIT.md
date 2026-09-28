# JAS Agro Corporate Portal — Phase 6 Backend & Data Audit

## 1. Existing Backend & Data Architecture

The JAS Agro corporate platform is built on **Next.js 14 App Router** (React 18, TypeScript, Tailwind CSS), providing fullstack serverless capabilities without requiring a separate backend service.

### Existing Architecture Layers:
- **API Runtime**: Next.js Serverless Route Handlers (`src/app/api/`)
  - `src/app/api/delivery/check-pincode/route.ts`: Postal serviceability & India Post API integration.
  - `src/app/api/delivery/reverse-geocode/route.ts`: Geocoding & coordinate lookups.
- **Structured Data Layer (`src/data/`)**:
  - `company.ts`: Central source of truth for headquarters (Sector 8 Pratap Nagar, Jaipur), biomass plant (Sangaria, Rajasthan), phone numbers, verified pillars, and operational hours.
  - `products.ts`: Complete data models for 6 verified offerings (Oyster Mushroom, Super Napier, Azolla, Vermicompost, IoT Automation, Biomass & Tudi Bales) with technical specs and cultivation parameters.
  - `services.ts`: 5 verified corporate solutions (Turnkey setups, spawn culture, livestock nutrition, soil enrichment, IoT telemetry).
  - `insights.ts`: Verified agronomy articles, technical cultivation guides, and operational research.
  - `translations.ts`: Centralized bilingual English & Hindi dictionary.

---

## 2. Existing Working Integrations

1. **Direct WhatsApp Support (`wa.me/917372926623`)**:
   - Pre-fills verified enquiry text for immediate direct consultation.
2. **Direct Telephony (`tel:+917372926623`)**:
   - Direct click-to-call links across headers, CTAs, floating widgets, and footers.
3. **Interactive Google Maps**:
   - Live satellite/street navigation embeds for Jaipur Corporate HQ and Sangaria Processing Plant.
4. **Chhatraka Mushroom Ecosystem (`chhatraka.com`)**:
   - Contextual external links for specialized oyster mushroom research, supplies, and cultivation guides.
5. **India Post API Serviceability (`api.postalpincode.in`)**:
   - Pincode validation with fallback logic.

---

## 3. Required Corporate Website Backend

For the corporate portal, the backend requirements are strictly limited to **high-reliability lead capture, validation, and contextual enquiry routing**:

1. **Dedicated Corporate Enquiry API (`/api/enquiry`)**:
   - Handles consultation requests, quotation inquiries, and contact form submissions.
   - Accepts contextual metadata (`product`, `service`, `sourcePage`, `quantity`, `location`).
2. **Server-Side Validation & Sanitization**:
   - Name, phone (Indian/international regex), email format, and message size enforcement.
3. **Bot & Spam Protection**:
   - Invisible honeypot field verification (`botField`).
   - Request payload validation and rate limits.
4. **Contextual Escalation**:
   - Generates a pre-filled WhatsApp link upon successful submission so users can immediately escalate to an agronomist if desired.
5. **Webhook / Notification Dispatcher (Extensible)**:
   - Serverless dispatch to an optional webhook (`ENQUIRY_WEBHOOK_URL`) if configured via environment variables.

---

## 4. Unnecessary Backend Features (Explicitly Excluded)

Following the *Premium Website Workflow* principle of avoiding unnecessary complexity:
- ❌ **No User Authentication / Sign-up / Login / JWT** (Not needed for corporate presence).
- ❌ **No Heavy Relational/NoSQL Database** (PostgreSQL, MySQL, MongoDB, Supabase, Neon are unnecessary overhead for static corporate content + form leads).
- ❌ **No Separate Backend Frameworks** (Spring Boot, Express, Django, FastAPI) — Next.js Route Handlers natively provide sub-millisecond serverless execution.
- ❌ **No Headless CMS** (Static TypeScript data files provide type-safety, instant compilation, and zero external latency).
- ❌ **No Payment Gateway** on corporate portal (eCommerce resides in `shop.jas-agro`).

---

## 5. Recommended Minimal Architecture

```
User Action (Product Card / Solution Card / CTA / Contact Page)
                    │
                    ▼
           Modal / Contact Form
                    │  (Client-side validation & honeypot)
                    ▼
          POST /api/enquiry  (Next.js Route Handler)
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 Server Validation      Honeypot Check
 (Name, Phone, Email)   (Drop Bot Requests)
        │                       │
        └───────────┬───────────┘
                    ▼
        Structured JSON Response
  (Success status + Direct WhatsApp Escalation Link)
                    │
                    ▼
     Client UI Confirmation & Confetti
```

---

## 6. Security Considerations

1. **Environment Variables**: No API tokens or private keys exposed in client bundles (`NEXT_PUBLIC_` restricted strictly to client-safe constants).
2. **Input Sanitization**: Strip dangerous HTML tags and enforce length limits on all form inputs.
3. **Honeypot Protection**: Filter out automated bot submissions without adding intrusive CAPTCHAs that damage conversion rates.
4. **Error Masking**: Return friendly error messages to clients without leaking server error stacks.

---

## 7. Implementation Plan

1. **Create `/api/enquiry/route.ts`**:
   - Type-safe handler for quotes, general inquiries, and solution discussions.
   - Server-side validation and optional webhook integration.
2. **Create `src/lib/api/enquiryService.ts`**:
   - Centralized client service for sending form data with proper error handling.
3. **Wire Components**:
   - Connect [`QuoteModal.tsx`](file:///c:/Users/admin/Desktop/abhishek_jasagro/src/components/ui/QuoteModal.tsx) to `/api/enquiry`.
   - Connect [`src/app/contact/page.tsx`](file:///c:/Users/admin/Desktop/abhishek_jasagro/src/app/contact/page.tsx) to `/api/enquiry`.
4. **Validate & Build**:
   - Verify zero TypeScript or linting errors with `next build`.
