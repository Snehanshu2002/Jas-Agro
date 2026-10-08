import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Regional Hubs | JAS Agro Jaipur & Sangaria",
  description:
    "Get in touch with JAS Agro. Contact our Corporate Headquarters in Jaipur or our 24/7 Tudi Bales Processing Warehouse in Sangaria, Rajasthan. Commercial inquiries & agronomy support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact JAS Agro | Corporate Hub Jaipur & Sangaria Plant",
    description:
      "Direct telephone, email, and Google Maps directions for JAS Agro offices and warehouse facilities in Rajasthan.",
    url: "https://www.jasagro.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
