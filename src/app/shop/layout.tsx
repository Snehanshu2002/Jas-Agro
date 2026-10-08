import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Organic Farm Inputs, Mushroom Kits & Fodder Seeds | JAS Agro",
  description:
    "Buy premium certified Oyster Mushroom Spawn, Azolla culture, Super Napier cuttings, organic Vermicompost, HDPE Grow Bags, and IoT climate sensors online. Pan-India fast delivery.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "JAS Agro Online Shop | Agricultural Inputs & Spawn Supplies",
    description:
      "Direct-to-farmer certified agriculture inputs, mushroom grow bags, pure spawn strains, and organic farm essentials.",
    url: "https://www.jasagro.com/shop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
