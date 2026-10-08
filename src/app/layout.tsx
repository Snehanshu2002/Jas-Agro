import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { DeliveryProvider } from "@/context/DeliveryContext";
import { QuickLeadWidget } from "@/components/ui/QuickLeadWidget";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { GlobalOrganizationSchema } from "@/components/seo/JsonLd";

const jost = localFont({
  src: [
    {
      path: "../../public/media/Jost/static/Jost-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/media/Jost/static/Jost-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/media/Jost/static/Jost-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/media/Jost/static/Jost-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jasagro.com"),
  title: {
    default: "JAS Agro | Modern Agriculture. Sustainable Growth. Smarter Farming.",
    template: "%s | JAS Agro",
  },
  description:
    "India's premier smart sustainable agriculture enterprise. Specializing in commercial Oyster Mushroom cultivation, Azolla aquatic protein fodder, Hybrid Super Napier grass, Bio-Vermicompost, and IoT climate automation.",
  keywords: [
    "JAS Agro",
    "Oyster Mushroom cultivation Jaipur",
    "Mushroom spawn supplier Rajasthan",
    "Azolla aquatic fodder seeds India",
    "Super Napier grass stems",
    "Bio Vermicompost fertilizer",
    "IoT smart farming telemetry ESP32",
    "Tudi bales supplier Sangaria",
    "Sustainable agriculture India",
    "AgTech automation solutions",
  ],
  authors: [{ name: "JAS Agro", url: "https://www.jasagro.com" }],
  creator: "JAS Agro",
  publisher: "JAS Agro",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jasagro.com",
    siteName: "JAS Agro",
    title: "JAS Agro | Modern Agriculture. Sustainable Growth. Smarter Farming.",
    description:
      "Precision biological cultivation combined with digital IoT telemetry. Empowering Indian farmers and commercial agri-enterprises with verified spawn, super-fodder, and turnkey automated grow chambers.",
    images: [
      {
        url: "/jas-agro-logo.png",
        width: 1200,
        height: 630,
        alt: "JAS Agro - Agriculture Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAS Agro | Modern Agriculture & Smart Sustainable Farming",
    description:
      "Leading Indian AgTech enterprise for Oyster Mushroom, Azolla, Super Napier grass, Vermicompost & IoT farm automation.",
    images: ["/jas-agro-logo.png"],
    creator: "@jasagro",
  },
  verification: {
    google: "google-site-verification-jasagro",
  },
  category: "Agriculture & AgTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`theme-light ${jost.variable}`} suppressHydrationWarning>
      <head>
        <GlobalOrganizationSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('jas_agro_theme') || 'light';
                  document.documentElement.classList.remove('theme-emerald', 'theme-cyan', 'theme-light', 'theme-harvest', 'dark');
                  document.documentElement.classList.add('theme-' + theme);
                  if (theme !== 'light') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 dark:bg-agro-darkest dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <WishlistProvider>
              <CartProvider>
                <DeliveryProvider>
                  <CursorFollower />
                  {children}
                  <QuickLeadWidget />
                </DeliveryProvider>
              </CartProvider>
            </WishlistProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
