import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { QuickLeadWidget } from "@/components/ui/QuickLeadWidget";

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
    <html lang="en" className={`theme-light ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-900 dark:bg-agro-darkest dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <QuickLeadWidget />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

