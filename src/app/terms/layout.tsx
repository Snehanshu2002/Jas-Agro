import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | JAS Agro",
  description: "Terms and conditions governing the use of JAS Agro's website, products, agricultural orders, and delivery services.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
