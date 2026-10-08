import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farming Insights, Agronomy Guides & Research | JAS Agro",
  description:
    "Read practical guides and expert articles on commercial Oyster Mushroom farming, Azolla feeding ratios, Super Napier propagation, Vermicompost, and IoT climate telemetry.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Agricultural Insights & Farming Guides | JAS Agro",
    description:
      "Expert knowledge base, technical growing manuals, and real-world farm case studies from JAS Agro.",
    url: "https://www.jasagro.com/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
