# JAS Agro Corporate Portal Redesign — Phase 2: Stack & Visual Asset Strategy

> **Document:** Phase 2 — Technology Stack Audit, Visual Asset Inventory & Implementation Strategy  
> **Prerequisite:** Phase 1 Design Direction Approved  
> **Scope:** Corporate Portal Only (Excludes `shop.jas-agro`)  
> **Status:** Strategy Complete — Ready for Phase 3 Component Implementation

---

## 1. Current Stack Audit

### A. Framework & Runtime

| Technology | Version | Role | Notes |
| :--- | :--- | :--- | :--- |
| **Next.js** | `^14.2.15` | App Router, SSR/SSG, file-based routing | Mature and stable. No upgrade needed. |
| **React** | `^18.3.1` | Component rendering | Current LTS. Fully compatible. |
| **React DOM** | `^18.3.1` | DOM rendering | Matched to React version. |
| **TypeScript** | `^5.6.3` | Static typing | Modern TS features available. |

### B. Styling & CSS

| Technology | Version | Role | Notes |
| :--- | :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.14` | Utility-first CSS | Mature v3 setup. Fully sufficient. |
| **PostCSS** | `^8.4.47` | CSS processing pipeline | Standard Tailwind requirement. |
| **Autoprefixer** | `^10.4.20` | Vendor prefix automation | Standard pipeline. |
| **globals.css** | 496 lines | Custom design tokens, glassmorphism, button reveals, tech panels | Rich existing design system already in place. |

**Existing Tailwind Extensions (in `tailwind.config.ts`):**
- Custom `agro.*` color palette (darkest, dark, deep, primary, emerald, bright, accent, amber, gold, sky, cyan, muted, light)
- Custom font families: `Inter` (sans) + `Outfit` (heading), loaded via `next/font/google`
- Custom box-shadows: `glow`, `glow-lg`, `glow-gold`, `glow-cyan`, `glass`, `glass-emerald`
- Custom animations: `float-slow`, `shimmer`, `glow-pulse`, `spin-slow`
- Custom gradients: `hero-gradient`, `card-gradient`, `gold-gradient`, `cyan-gradient`, `emerald-radial`

**Existing CSS Design System Classes (in `globals.css`):**
- `.glass-panel`, `.glass-panel-gold`, `.glass-panel-dark`, `.glass-input` — Glassmorphism surfaces
- `.text-gradient-emerald`, `.text-gradient-gold`, `.text-gradient-cyan` — Text gradient utilities
- `.glow-blur-emerald`, `.glow-blur-gold` — Background glow effects
- `.btn-reveal-primary`, `.btn-reveal-secondary`, `.btn-reveal-gold` — Cursor-tracking radial reveal buttons
- `.jas-canvas`, `.jas-surface-card`, `.jas-surface-sage` — Earthy surface tokens
- `.jas-tech-chapter`, `.jas-tech-grid`, `.jas-telemetry-panel` — NVIDIA-style dark tech panels
- `.jas-eyebrow` — Monospace pill eyebrow tags
- `.jas-photo-frame` — Product image containers
- 4 theme modes: `theme-light` (default), `theme-emerald`, `theme-cyan`, `theme-harvest`

### C. Animation & Interaction Libraries

| Library | Version | Current Usage |
| :--- | :--- | :--- |
| **Framer Motion** | `^11.11.11` | Used in `HeroSection.tsx`, `QuickLeadWidget.tsx`, `ShopHeader.tsx`, `ProductCard.tsx`, shop product page |
| **canvas-confetti** | `^1.9.4` | Contact page form submission celebration effect |

### D. Icon Library

| Library | Version | Usage |
| :--- | :--- | :--- |
| **Lucide React** | `^0.454.0` | Universal icon system across all 43+ component files |

### E. Utility Libraries

| Library | Version | Role |
| :--- | :--- | :--- |
| **clsx** | `^2.1.1` | Conditional className composition |
| **tailwind-merge** | `^2.5.4` | Tailwind class deduplication and override resolution |

### F. Image & Video Handling

- **Next.js `<Image />`:** Configured with `remotePatterns` for `images.unsplash.com` and `www.jasagro.com`
- **Native `<video>` elements:** Used in HeroSection with `muted`, `playsInline`, `loop`, `autoPlay` attributes
- **No dedicated video player library** installed (no Plyr, Video.js, etc.)

### G. Context Providers (State Management)

| Provider | Purpose | Scope |
| :--- | :--- | :--- |
| `LanguageContext` | EN/HI bilingual toggling | Global |
| `ThemeContext` | Light/Dark/Emerald/Cyan/Harvest mode | Global |
| `CartContext` | Shopping cart state | Shop only |
| `WishlistContext` | Product wishlists | Shop only |
| `DeliveryContext` | Delivery pincode checking | Shop only |

### H. API Routes

| Route | Purpose | Scope |
| :--- | :--- | :--- |
| `/api/delivery/check-pincode` | Pincode delivery lookup | Shop only |
| `/api/delivery/reverse-geocode` | GPS to pincode resolution | Shop only |

### I. Existing Local Media Assets (Public Directory)

**Hero Videos (`/media/hero/`):**

| File | Size | Content |
| :--- | :--- | :--- |
| `hero.mp4` | 50.3 MB | Primary hero loop |
| `warehouse-drone-shot.mp4` | 28.3 MB | Sangaria plant aerial |
| `warehouse-vid.mp4` | 5.5 MB | Warehouse interior |
| `chhatraka-mushroom-training.mp4` | 48.5 MB | Mushroom cultivation training |
| `oyster-mushroom.mp4` | 48.5 MB | Mushroom grow room |
| `napier-grass-video.mp4` | 99.4 MB | Napier grass field footage |
| `napier-grass.mp4` | 50.3 MB | Napier grass alternative |
| `azolla-fodder-video.mp4` | 61.8 MB | Azolla pond footage |
| `azolla-fodder.mp4` | 12.0 MB | Azolla alternative (smaller) |
| `vermicompost-manure.mp4` | 7.3 MB | Vermicompost processing |
| `farm-showcase.mp4` | 7.3 MB | General farm overview |

**Hero Still Images (`/media/hero/`):**

| File | Size | Content |
| :--- | :--- | :--- |
| `azolla-fodder-visual.jpg` | 1.1 MB | Azolla pond photograph |
| `napier-grass-visual.jpg` | 1.1 MB | Napier field photograph |
| `vermicompost-manure-visual.jpg` | 950 KB | Vermicompost photograph |

**Shop Product Images (`/products/`):**

| File | Size |
| :--- | :--- |
| `Oyster Mushroom FRESH.png` | 2.2 MB |
| `Oyster Mushroom Powder.png` | 2.4 MB |
| `AZOLLA.png` | 2.4 MB |
| `cookies.png` | 1.7 MB |
| + 6 more product PNGs | ~2.2 MB each |

**Logo Assets:**

| File | Size |
| :--- | :--- |
| `jas-agro-logo.png` | 172 KB |
| `jas-agro-logo-for-white-background.png` | 1.0 MB |

**Remote Image Sources:**
- `images.unsplash.com` — Generic stock agriculture imagery (mushrooms, fields, soil, circuits)
- `www.jasagro.com/assets/img/` — Production site assets (slides, blog images, logo)

### J. Component Inventory Summary

| Directory | Components | Purpose |
| :--- | :--- | :--- |
| `components/home/` | 21 files | Corporate homepage sections |
| `components/layout/` | 2 files | Navbar, Footer |
| `components/ui/` | 5 files | AgriAI assistant, cursor follower, lead widget, quote modal, theme switcher |
| `components/shop/` | 20 files | **DO NOT TOUCH** — Shop portal components |

---

## 2. Final Recommended Stack (Minimum Required)

### Core Stack — Already Installed, Fully Sufficient

| Technology | Status | Verdict |
| :--- | :--- | :--- |
| **Next.js 14 (App Router)** | ✅ Installed | Keep. Stable, performant, excellent for SSR/SSG. |
| **React 18** | ✅ Installed | Keep. Current LTS. |
| **TypeScript 5** | ✅ Installed | Keep. Strong typing for maintainability. |
| **Tailwind CSS 3** | ✅ Installed | Keep. Already deeply integrated with custom tokens. |
| **Framer Motion 11** | ✅ Installed | Keep. Already used. Sufficient for all planned motion (scroll reveals, hero transitions, card hovers). |
| **Lucide React** | ✅ Installed | Keep. Comprehensive icon set already used across 43+ files. |
| **clsx + tailwind-merge** | ✅ Installed | Keep. Essential utilities for clean class management. |
| **Inter + Outfit (Google Fonts)** | ✅ Loaded via `next/font` | Keep. Inter for body, Outfit for headings. Clean pairing. |

**Verdict: The existing stack is complete and production-ready for a premium redesign. No new core dependencies are required.**

---

## 3. Optional Technologies — Evaluated & Decided

### A. GSAP (GreenSock Animation Platform)

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | No. |
| **Why not?** | Framer Motion `^11` already covers scroll-triggered reveals (`whileInView`), staggered card animations, layout transitions, and hero entrance choreography. GSAP would be redundant. |
| **Performance impact if added:** | +45 KB gzipped, additional runtime overhead, split animation paradigm. |
| **Decision:** | **DO NOT ADD.** |

### B. Lenis (Smooth Scroll Library)

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | No. |
| **Why not?** | The corporate portal is a content-browsing site for Indian farmers and agri-businesses, not an editorial magazine or portfolio that benefits from custom scroll physics. Native browser scroll with CSS `scroll-behavior: smooth` is sufficient and more accessible. |
| **Performance impact if added:** | Hijacks native scroll. Breaks browser find-on-page, back button scroll restoration, and keyboard navigation. |
| **Decision:** | **DO NOT ADD.** |

### C. Three.js / React Three Fiber

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | No. |
| **Why not?** | JAS Agro is an agricultural company selling real crops, real fodder, and physical IoT hardware. A 3D scene (rotating mushroom, floating sensor node) adds novelty but no business value. Authentic photography and real video footage of the Sangaria plant and Jaipur facility are far more credible than a rendered 3D model. |
| **Performance impact if added:** | +150 KB+ gzipped, WebGL context allocation, GPU strain on low-end mobile devices (primary Indian farmer audience). |
| **Decision:** | **DO NOT ADD.** |

### D. Swiper / Embla Carousel

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | Potentially useful but not required. |
| **Why not required?** | The hero already uses a custom video switcher. Product grids use CSS grids. Insights use horizontal scroll. Custom lightweight carousel logic with Framer Motion `drag` or CSS scroll-snap is sufficient. |
| **Decision:** | **DO NOT ADD.** Use CSS `scroll-snap` or Framer Motion `drag` for any carousel needs. |

### E. MDX / Content Layer

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | Not for Phase 3. |
| **Why not?** | Blog/insight content is currently stored in `src/data/insights.ts` as structured TypeScript arrays. This is adequate for the current 5 articles. MDX would only be justified if the client plans to publish 20+ articles with rich formatting. |
| **Decision:** | **DEFER.** Evaluate in Phase 4 if blog volume grows. |

### F. Database / CMS

| Question | Answer |
| :--- | :--- |
| **Does JAS Agro need it?** | Not for the redesign. |
| **Why not?** | All product data, services, insights, and company info are static TypeScript data files. Contact form currently uses client-side simulation. A headless CMS or database would only be needed if the client wants dynamic admin-managed content. |
| **Decision:** | **DEFER.** Recommend Sanity or Strapi evaluation only after client confirms content management requirements. |

---

## 4. Dependencies to Avoid Adding

| Package | Reason to Avoid |
| :--- | :--- |
| **GSAP** | Framer Motion covers all animation needs. Dual animation libraries create maintenance burden. |
| **Lenis / Locomotive Scroll** | Breaks native accessibility, keyboard nav, find-on-page. No UX gain for agricultural content site. |
| **Three.js / R3F** | No 3D requirement exists. Heavy GPU cost. Undermines authenticity of real-farm imagery. |
| **Swiper** | CSS scroll-snap + existing Framer Motion drag are sufficient. |
| **Styled Components / Emotion** | Tailwind CSS is already deeply integrated. Adding CSS-in-JS creates a split styling paradigm. |
| **Redux / Zustand** | React Context is sufficient for language, theme, and shop state. No complex cross-cutting state exists. |
| **Prisma / Drizzle** | No database requirement exists for the corporate portal. |
| **Storybook** | Adds development infrastructure complexity with no user-facing value. Component testing is sufficient inline. |

---

## 5. Visual Asset Inventory & Strategy

### A. Asset Classification

```
+-------------------------------------------------------------------------------------+
|                          VISUAL ASSET MATRIX                                        |
+-------------------------------------------------------------------------------------+
| Category          | Authentic JAS Agro  | Usable Stock   | Needs Creation/Sourcing |
|                   | Asset Available?    | Exists?        |                         |
+-------------------------------------------------------------------------------------+
| Hero background   | ✅ YES (14 videos)  | —              | Optimize existing       |
| Mushroom imagery  | ✅ YES (videos+jpg) | ✅ Unsplash    | Use JAS Agro first      |
| Azolla imagery    | ✅ YES (video+jpg)  | ✅ Unsplash    | Use JAS Agro first      |
| Napier imagery    | ✅ YES (video+jpg)  | ✅ Unsplash    | Use JAS Agro first      |
| Vermicompost      | ✅ YES (video+jpg)  | ✅ Unsplash    | Use JAS Agro first      |
| Warehouse/Plant   | ✅ YES (drone+vid)  | —              | Use existing footage    |
| IoT Hardware      | ⚠️ PARTIAL (1 jpg) | ✅ Unsplash    | Source ESP32 close-ups  |
| Product photos    | ✅ YES (10 PNGs)    | —              | Shop products covered   |
| Logo              | ✅ YES (2 variants) | —              | Sufficient              |
| Team/Founder      | ❌ NO               | —              | ⚠️ Client must provide  |
| Customer photos   | ❌ NO               | —              | ⚠️ Client must provide  |
| Certifications    | ❌ NO               | —              | ⚠️ Client must provide  |
| Icons             | ✅ Lucide React     | —              | Sufficient              |
+-------------------------------------------------------------------------------------+
```

### B. Asset Priority Actions

1. **Immediate — Use Existing JAS Agro Assets:**
   - Hero video rotation: `warehouse-drone-shot.mp4`, `chhatraka-mushroom-training.mp4`, `azolla-fodder.mp4` (12 MB version), `farm-showcase.mp4`
   - Still photography: `azolla-fodder-visual.jpg`, `napier-grass-visual.jpg`, `vermicompost-manure-visual.jpg`
   - Product imagery from `/products/` directory
   - JAS Agro logos from `/public/`

2. **Optimize — Compress Existing Heavy Assets:**
   - `napier-grass-video.mp4` at 99.4 MB is too large. Must be re-encoded to ≤8 MB for web use.
   - `azolla-fodder-video.mp4` at 61.8 MB is too large. Use the 12 MB variant instead.
   - `hero.mp4` at 50.3 MB needs compression to ≤8 MB.
   - All `/products/*.png` files at ~2.2 MB each need WebP conversion at ~200–400 KB each.

3. **Source from Client:**
   - ESP32 microcontroller close-up photographs (actual JAS Agro hardware units)
   - Founder/team professional portraits (if client wants a people section)
   - Real farmer testimonial photographs (with consent)
   - Certification badges and registration documents

4. **Acceptable Stock Fallbacks (Unsplash):**
   - Generic agricultural atmosphere shots (fields, sunrise, soil textures)
   - ESP32/electronics macro photography (if client cannot provide)
   - Soil science and composting process macro shots

---

## 6. Hero Strategy

### Option A — Premium Real Agricultural Video Showcase (RECOMMENDED)
- **Concept:** Full-viewport cinematic video loop cycling through JAS Agro's actual operational footage — Sangaria warehouse drone shot, indoor mushroom cultivation, green Napier fields, and Azolla ponds.
- **Implementation:** Reuse existing `HeroSection.tsx` multi-video architecture with optimized (re-encoded ≤8 MB) clips.
- **Overlay:** Deep forest gradient scrim (`#09110D` → transparent) + bold display headline + dual CTA buttons.
- **Fallback:** High-res still photograph for reduced-motion preference and slow networks.
- **Why Best for JAS Agro:** The company has genuine operational footage. Authentic video immediately establishes credibility that no stock photo can match. Indian agricultural buyers trust what they can see.

### Option B — Cinematic Agriculture + Technology Composition
- **Concept:** Split-hero layout — left side shows full-bleed agricultural photograph, right side shows a floating IoT telemetry console card with live sensor readouts.
- **Implementation:** CSS grid split with background image left + Framer Motion animated dashboard panel right.
- **Why Considered:** Communicates the dual identity (Agriculture + Technology) in a single viewport.
- **Downside:** More complex, potentially cluttered on mobile. The technology angle is better served on its own dedicated page section.

### Option C — Lightweight Interactive Hero
- **Concept:** Single high-resolution photograph with subtle Ken Burns slow-zoom effect + floating category pills that highlight on hover.
- **Implementation:** CSS `transform: scale()` animation on `<img>` + positioned Framer Motion category badges.
- **Why Considered:** Simpler than video, still engaging.
- **Downside:** Loses the powerful authentic video advantage that JAS Agro uniquely has.

### **PRIMARY RECOMMENDATION: Option A**
JAS Agro possesses 14 genuine video assets including drone footage of the Sangaria plant and indoor mushroom cultivation rooms. This is a rare competitive advantage. The hero should showcase this authentic footage with professional re-encoding and clean gradient overlays. Fake 3D or stock imagery would undermine the company's real operational credibility.

---

## 7. Image & Video Performance Strategy

### A. Image Format & Optimization

| Context | Format | Max Size | Resolution |
| :--- | :--- | :--- | :--- |
| **Hero poster/fallback** | WebP | 200 KB | 1920×1080 |
| **Section background photos** | WebP | 150 KB | 1600×900 |
| **Product cards** | WebP | 80 KB | 800×600 |
| **Blog/Insights thumbnails** | WebP | 60 KB | 600×400 |
| **Logo** | PNG (transparency) or SVG | 20 KB | Original vector preferred |
| **Icons** | SVG (via Lucide React) | ~1 KB each | Scalable |

### B. Responsive Image Strategy

```
Desktop (≥1280px):  Full-resolution WebP, max-width 1920px
Tablet  (768-1279): Medium-resolution, max-width 1200px
Mobile  (<768px):   Compressed WebP, max-width 800px
```

- Use Next.js `<Image />` component with `sizes` and `srcSet` for all static images.
- Use `priority` prop only for above-the-fold hero images.
- Use `loading="lazy"` (default) for all below-fold images.
- Use `placeholder="blur"` with `blurDataURL` for perceived performance.

### C. Video Usage Rules

| Rule | Specification |
| :--- | :--- |
| **Maximum file size (desktop)** | ≤ 8 MB per clip |
| **Maximum file size (mobile)** | ≤ 3 MB per clip or use poster image fallback |
| **Encoding** | H.264 MP4 (universal compatibility) |
| **Resolution** | 1080p desktop / 720p mobile |
| **Bitrate** | 2–4 Mbps desktop / 1–2 Mbps mobile |
| **Attributes** | Always: `muted`, `playsInline`, `loop` |
| **Autoplay** | Only for hero background. Never for content videos. |
| **Reduced motion** | Respect `prefers-reduced-motion` — show poster image instead. (Already implemented.) |
| **Mobile fallback** | Show high-quality still image instead of video on mobile viewports <768px or on slow connections. |

### D. Compression Pipeline (Phase 3 Action)

1. Re-encode all hero videos using FFmpeg:
   ```
   ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -vf scale=1920:-2 -an output-web.mp4
   ```
2. Convert all `/products/*.png` to WebP:
   ```
   cwebp -q 80 input.png -o output.webp
   ```
3. Generate blur placeholder data URLs for all key images.

### E. Rules to Prevent Heavy Pages

- **No page should exceed 5 MB total initial transfer** (including all images, CSS, JS).
- **No single image asset should exceed 200 KB** (except hero poster at 200 KB max).
- **No video asset should exceed 8 MB** (desktop) or 3 MB (mobile).
- **Lazy-load all images below the initial viewport fold.**
- **Do NOT preload videos.** Let them stream on-demand.
- **Avoid Unsplash hotlinks in production.** Download, compress, and serve locally or via CDN.

---

## 8. Motion Strategy

### A. Where Motion IS Appropriate

| Component | Animation Type | Library | Performance |
| :--- | :--- | :--- | :--- |
| **Hero video crossfade** | Opacity transition between clips | CSS transition | Lightweight |
| **Section header reveals** | Fade-in + 16px slide-up on viewport entry | Framer Motion `whileInView` | Lightweight |
| **Card grid stagger** | Sequential 80ms staggered entrance | Framer Motion `staggerChildren` | Lightweight |
| **Card hover elevation** | 2px translateY + border glow | CSS `transition` | Zero JS cost |
| **Button cursor reveal** | Radial gradient expanding from cursor | CSS (already built) | Zero JS cost |
| **Navigation scroll blur** | Backdrop-blur increase on scroll | CSS + scroll listener | Minimal |
| **Product image zoom** | Scale 1.0 → 1.05 on hover | CSS `transition` | Zero JS cost |
| **IoT telemetry counters** | Animated number increment | Framer Motion `animate` or CSS `@keyframes` | Minimal |
| **Tab/accordion content** | Height expansion with opacity | Framer Motion `AnimatePresence` | Lightweight |
| **Quote modal entrance** | Overlay fade + slide-up panel | Framer Motion | Lightweight |

### B. Where Motion is NOT Appropriate

| Component | Why No Animation |
| :--- | :--- |
| **Every section on every page** | Causes scroll fatigue. Breaks reading rhythm. |
| **Parallax on text blocks** | Hurts readability. Causes layout instability. |
| **3D rotations / WebGL effects** | No justification. Heavy GPU cost. Alienates low-end mobile users. |
| **Spinning logos / bouncing icons** | Unprofessional for agricultural B2B. |
| **Page-level route transitions** | Adds perceived latency. Content should appear instantly on navigation. |
| **Infinite looping decorative animation** | Distracting. Battery-draining on mobile. |

### C. Motion Principles

1. **Purpose:** Every animation must communicate hierarchy, state change, or spatial relationship. If it doesn't inform, remove it.
2. **Duration:** 200ms–400ms for micro-interactions. 500ms–700ms for section reveals. Never >800ms.
3. **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for smooth organic deceleration.
4. **Reduced Motion:** Always respect `prefers-reduced-motion: reduce`. Disable all non-essential animation. Already partially implemented.
5. **Mobile Rule:** Disable scroll-reveal stagger on mobile to prevent jank. Use simple opacity fade only.

---

## 9. 3D Strategy

**Decision: No 3D assets or WebGL rendering in the JAS Agro redesign.**

**Rationale:**
- JAS Agro's strength is **authentic physical operations** — real crops, real warehouses, real hardware. 3D renders would undermine this authenticity.
- The primary audience (Indian farmers, dairy operators, agricultural entrepreneurs) accesses the site on mid-range Android devices with limited GPU capability.
- Video footage of the actual Sangaria plant and mushroom grow rooms is infinitely more persuasive than a rendered 3D mushroom floating in space.
- Three.js/R3F would add 150+ KB to the JavaScript bundle with zero business conversion impact.

**If a future phase requires visual technology demos:** Use pre-rendered video (MP4) of the IoT telemetry dashboard rather than a real-time 3D scene. This achieves the visual impact at 1/10th the performance cost.

---

## 10. Performance Strategy

### A. Bundle Size Budget

| Metric | Target | Current Approximate |
| :--- | :--- | :--- |
| **First Load JS** | ≤ 150 KB gzipped | ~130 KB (Next.js + React + Framer Motion + Lucide) |
| **Total page weight (Home)** | ≤ 5 MB | Currently ~15 MB+ (due to uncompressed videos) |
| **Largest Contentful Paint** | ≤ 2.5s | Needs measurement after video optimization |
| **Cumulative Layout Shift** | ≤ 0.1 | Requires explicit `width`/`height` on all images |

### B. Performance Actions for Phase 3

1. **Video re-encoding** — All hero videos compressed to ≤8 MB with H.264 CRF 28.
2. **Image conversion** — All PNGs converted to WebP. All images served with explicit dimensions.
3. **Lazy loading** — All below-fold images use `loading="lazy"`. All below-fold components use `dynamic(() => import(...))` where appropriate.
4. **Font optimization** — Fonts already loaded via `next/font/google` with `display: swap`. No additional action needed.
5. **Code splitting** — Shop components are already isolated in `/components/shop/`. Corporate components naturally code-split via page routes.

### C. Lighthouse Targets

| Metric | Target Score |
| :--- | :--- |
| Performance | ≥ 85 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 95 |

---

## 11. Design Asset System (Implementation Tokens)

### A. Typography System

| Role | Font | Weight | Size Range | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `Outfit` (`--font-heading`) | 800 (ExtraBold) | 36px–56px | `-0.025em` |
| **Section Headings** | `Outfit` | 700 (Bold) | 28px–36px | `-0.02em` |
| **Card Titles** | `Outfit` | 600–700 | 18px–22px | `-0.01em` |
| **Body Copy** | `Inter` (`--font-sans`) | 400–500 | 14px–16px | `0` |
| **Captions / Meta** | `Inter` | 400 | 12px–13px | `0` |
| **Technical Eyebrows** | System monospace (`ui-monospace`) | 700 | 11px–12px | `+0.08em` |
| **Telemetry Values** | System monospace | 600 | 14px–20px | `0` |

### B. Icon Style

- **Library:** Lucide React (already installed, 1000+ icons)
- **Stroke Width:** Default 2px (standard weight)
- **Size Convention:** `w-4 h-4` (inline), `w-5 h-5` (card icons), `w-6 h-6` (section icons)
- **Color:** Inherit parent text color. Use emerald/amber accent for highlighted states.

### C. Image Aspect Ratio System

| Context | Aspect Ratio | Tailwind Class |
| :--- | :--- | :--- |
| **Hero / Full-bleed** | 16:9 | `aspect-video` |
| **Product cards** | 4:3 | `aspect-[4/3]` |
| **Blog thumbnails** | 16:9 | `aspect-video` |
| **Gallery / Square** | 1:1 | `aspect-square` |
| **Portrait (About)** | 3:4 | `aspect-[3/4]` |

### D. Border Radius Language

| Element | Radius | Tailwind |
| :--- | :--- | :--- |
| **Page-level cards** | 20px–24px | `rounded-2xl` / `rounded-3xl` |
| **Button (primary)** | Full pill | `rounded-full` |
| **Button (secondary)** | 12px | `rounded-xl` |
| **Input fields** | 12px | `rounded-xl` |
| **Badge pills** | Full pill | `rounded-full` |
| **Image containers** | 16px–20px | `rounded-2xl` |
| **Modal panels** | 24px | `rounded-3xl` |

### E. Button System

| Variant | Background | Text | Border | Radius |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `bg-emerald-600` | White | None | `rounded-full` |
| **Secondary** | Transparent | `text-emerald-700` | `border-emerald-300` | `rounded-full` |
| **Ghost** | Transparent | Current text | `border-slate-200` | `rounded-xl` |
| **Gold CTA** | `bg-amber-500` | White | None | `rounded-full` |
| **Dark** | `bg-slate-900` | White | None | `rounded-full` |

All buttons use the existing `.btn-reveal-*` cursor-tracking hover system.

### F. Card System

| Variant | Background | Border | Shadow | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Standard** | `.jas-surface-card` | 1px green-tinted hairline | `shadow-sm` | Products, solutions, insights |
| **Sage / Muted** | `.jas-surface-sage` | 1px soft green | None | Secondary info blocks |
| **Tech / Dark** | `.jas-telemetry-panel` | 1px emerald glow | `shadow-glass` | IoT telemetry, hardware specs |
| **Glassmorphic** | `.glass-panel` | 1px translucent | Blur backdrop | Floating overlays, navbar |

### G. Dark / Light Section Usage

| Section Type | Light Mode Surface | Dark Mode Surface |
| :--- | :--- | :--- |
| **Standard content** | `#FAFBF7` (`.jas-canvas`) | `#0B0F17` |
| **Elevated cards** | `#FFFFFF` | `#101726` |
| **Technology chapters** | `#080C14` (always dark) | `#080C14` |
| **CTA banners** | Deep forest gradient | Deep forest gradient |
| **Footer** | `#070A0F` (always dark) | `#070A0F` |

### H. Technology Section Visual Language

- **Always rendered on dark backgrounds** (`.jas-tech-chapter`) regardless of site theme.
- **Dotted grid overlay** (`.jas-tech-grid`) using 32px grid of faint emerald dots.
- **Telemetry panels** with glassmorphic backdrop blur and emerald-tinted borders.
- **Monospace typography** for all sensor values, microcontroller specs, and relay states.
- **Color coding:** Emerald = normal/active, Amber = warning/threshold, Red = critical alert.

---

## 12. Phase 3 Implementation Plan

Upon approval of this Phase 2 strategy, Phase 3 will execute in the following sequence:

```
Phase 3.1 — Asset Optimization (Day 1)
├── Re-encode hero videos to ≤8 MB each (FFmpeg H.264 CRF 28)
├── Convert product PNGs to WebP
├── Generate blur placeholders for key images
└── Optimize logo assets

Phase 3.2 — Design Token Refinement (Day 1–2)
├── Extend Tailwind config with Phase 1 palette tokens (Deep Forest, Clean Parchment)
├── Add new CSS utility classes as needed
├── Ensure dark/light parity across all surface tokens
└── DO NOT remove existing CSS classes (backward compatibility with Shop)

Phase 3.3 — Layout Component Overhaul (Day 2–3)
├── Redesign Navbar to match Phase 1 direction (glassmorphic, 8-page nav)
├── Redesign Footer with dual-facility cards and refined link architecture
└── Build shared page header component for consistent sub-page heroes

Phase 3.4 — Homepage Rebuild (Day 3–5)
├── Redesign HeroSection with optimized video rotation + editorial overlay
├── Rebuild core solution pillars section
├── Rebuild product explorer with new card system
├── Rebuild IoT telemetry spotlight with dark tech chapter
├── Rebuild sustainability banner
├── Rebuild insights preview grid
├── Rebuild CTA conversion banner
└── Streamline homepage from 17 sections to ~9 focused sections

Phase 3.5 — Sub-Page Refinement (Day 5–7)
├── About page with editorial storytelling layout
├── Products catalogue with category filter grid
├── Solutions page with turnkey setup cards
├── Technology page with hardware architecture breakdown
├── Sustainability page with circular agriculture flow
├── Insights page with featured article + category grid
└── Contact page with dual-facility maps

Phase 3.6 — Quality Assurance (Day 7–8)
├── Bilingual EN/HI validation across all pages
├── Responsive testing: mobile (<768px), tablet, desktop, widescreen
├── Lighthouse performance audit (target ≥85)
├── Accessibility audit (contrast, focus states, screen reader)
└── Cross-browser validation (Chrome, Safari, Firefox, Edge)
```

> **Critical Constraints for Phase 3:**
> - DO NOT modify any file in `components/shop/`.
> - DO NOT modify `CartContext`, `WishlistContext`, or `DeliveryContext`.
> - DO NOT modify `/api/delivery/` routes.
> - DO NOT remove existing CSS classes from `globals.css` (add only).
> - DO NOT remove existing Tailwind config entries (extend only).
> - Preserve all bilingual `useLanguage()` patterns.
> - Preserve existing SEO metadata structure.

---

*Phase 2 Strategy Document Completed — Ready for Phase 3 Implementation Upon Approval.*
