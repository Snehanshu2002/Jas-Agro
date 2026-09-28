import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { DeliveryProvider } from "@/context/DeliveryContext";
import { QuickLeadWidget } from "@/components/ui/QuickLeadWidget";
import { CursorFollower } from "@/components/ui/CursorFollower";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "JAS Agro | Modern Agriculture. Sustainable Growth. Smarter Farming.",
    template: "%s | JAS Agro",
  },
  description:
    "Leading agri-tech and sustainable farming solutions in Oyster Mushroom cultivation, Azolla fodder, Super Napier grass, Vermicompost, and IoT climate telemetry.",
  authors: [{ name: "JAS Agro" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jasagro.com",
    siteName: "JAS Agro",
    title: "JAS Agro | Modern Agriculture & Smart Farming",
    description:
      "Combining sustainable farming practices with IoT micro-climate telemetry, high-protein fodder, and gourmet mushroom cultivation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`theme-light ${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
