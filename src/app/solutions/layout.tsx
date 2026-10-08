import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farming Solutions & Turnkey Setups | JAS Agro",
  description:
    "Explore commercial turnkey farming setups: Oyster Mushroom grow chambers, high-protein Azolla aquatic ponds, Super Napier perennial forage, and bio-organic vermicompost units.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Commercial Agricultural Solutions & Turnkey Setups | JAS Agro",
    description:
      "Turnkey grow chambers, aquatic fodder ponds, and bio-fertilizer production with automated IoT monitoring.",
    url: "https://www.jasagro.com/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
