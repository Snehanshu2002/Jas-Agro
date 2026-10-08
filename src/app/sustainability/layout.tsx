import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circular Agriculture & Environmental Sustainability | JAS Agro",
  description:
    "How JAS Agro drives circular bio-economy in agriculture: zero-chemical crop residue utilization, water-efficient aquatic fodder, soil regeneration, and reduced carbon footprint.",
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Circular Agriculture & Sustainability | JAS Agro",
    description:
      "Transforming agricultural crop residue and organic inputs into high-value food, fodder, and bio-nutrients.",
    url: "https://www.jasagro.com/sustainability",
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
