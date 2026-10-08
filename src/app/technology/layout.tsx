import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Climate Telemetry & Precision Agriculture | JAS Agro",
  description:
    "Discover JAS Agro's ESP32 IoT sensor architecture, real-time temperature/humidity telemetry, automated ultrasonic foggers, and smart farm management systems.",
  alternates: {
    canonical: "/technology",
  },
  openGraph: {
    title: "IoT Climate Telemetry & Precision Agriculture | JAS Agro",
    description:
      "Precision IoT environmental automation and real-time sensor cloud logging for indoor cultivation and dairy farming.",
    url: "https://www.jasagro.com/technology",
  },
};

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
