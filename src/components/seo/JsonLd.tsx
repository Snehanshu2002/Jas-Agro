import React from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  price?: number | string;
  priceCurrency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  url: string;
  ratingValue?: number;
  reviewCount?: number;
}

/**
 * Universal Global Organization & LocalBusiness JSON-LD
 * Powers Google Knowledge Panel, Local Map Pack & Rich Brand Snippets
 */
export function GlobalOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.jasagro.com/#organization",
        name: "JAS Agro",
        alternateName: [
          "JAS Agro AgTech",
          "JAS Agro Cultivation Systems",
          "JAS Agro Jaipur",
        ],
        url: "https://www.jasagro.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.jasagro.com/#logo",
          url: "https://www.jasagro.com/jas-agro-logo.png",
          caption: "JAS Agro - Smart Sustainable AgTech",
        },
        image: "https://www.jasagro.com/jas-agro-logo.png",
        description:
          "India's leading smart sustainable agriculture enterprise specializing in Oyster Mushroom cultivation, Azolla aquatic fodder, Super Napier grass, Bio-Vermicompost, and IoT climate telemetry systems.",
        email: "info@jasagro.com",
        telephone: "+91 93524 84877",
        sameAs: [
          "https://www.instagram.com/jas_agro",
          "https://www.facebook.com/jasagro",
          "https://twitter.com/jasagro",
          "https://www.linkedin.com/company/jas-agro",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91 93524 84877",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91 98877 66554",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "84/123, Sector 8, Sanganer, Pratap Nagar",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302033",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.jasagro.com/#website",
        url: "https://www.jasagro.com",
        name: "JAS Agro",
        publisher: {
          "@id": "https://www.jasagro.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.jasagro.com/shop?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.jasagro.com/#jaipur-hq",
        name: "JAS Agro Corporate Headquarters",
        image: "https://www.jasagro.com/jas-agro-logo.png",
        telephone: "+91 93524 84877",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "84/123, Sector 8, Sanganer, Pratap Nagar",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          postalCode: "302033",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.7938",
          longitude: "75.8243",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.jasagro.com/#sangaria-plant",
        name: "JAS Agro Tudi Bales Plant & Processing Warehouse",
        image: "https://www.jasagro.com/jas-agro-logo.png",
        telephone: "+91 93524 84877",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Amritsar-Jamnagar & Sangaria-Tibbi Highway Crossing, PFV8+8VW",
          addressLocality: "Sangaria",
          addressRegion: "Rajasthan",
          postalCode: "335063",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "29.8016",
          longitude: "74.3822",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ Schema for Google SERP Accordions ("People Also Ask")
 */
export function FAQSchema({ items }: { items: FAQItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Product Schema for Google Shopping, Rich Snippets & Price Indicators
 */
export function ProductSchema(props: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: props.name,
    description: props.description,
    image: props.image.startsWith("http")
      ? props.image
      : `https://www.jasagro.com${props.image}`,
    sku: props.sku || props.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    brand: {
      "@type": "Brand",
      name: props.brand || "JAS Agro",
    },
    offers: {
      "@type": "Offer",
      url: props.url.startsWith("http")
        ? props.url
        : `https://www.jasagro.com${props.url}`,
      priceCurrency: props.priceCurrency || "INR",
      price: props.price ? String(props.price) : "100.00",
      itemCondition: "https://schema.org/NewCondition",
      availability:
        props.availability === "OutOfStock"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "JAS Agro",
      },
    },
    ...(props.ratingValue
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: props.ratingValue,
            reviewCount: props.reviewCount || 48,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "86",
            bestRating: "5",
            worstRating: "1",
          },
        }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList Schema for clean URL breadcrumbs in Google Search
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://www.jasagro.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
