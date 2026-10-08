import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JAS Agro",
  description: "Read JAS Agro's data protection and privacy policy regarding our website, e-commerce shop, and agricultural inquiry forms.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
