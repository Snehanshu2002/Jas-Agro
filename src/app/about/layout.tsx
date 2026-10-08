import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JAS Agro | Sustainable Agriculture & AgTech Innovations",
  description:
    "Learn about JAS Agro's journey since 2016, our mission in sustainable farming, Oyster Mushroom cultivation, Azolla fodder research, and IoT agricultural automation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About JAS Agro | Sustainable Agriculture & AgTech Innovations",
    description:
      "Pioneering sustainable farming and smart agricultural technologies in Rajasthan and across India.",
    url: "https://www.jasagro.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
