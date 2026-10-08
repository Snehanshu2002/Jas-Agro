import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JAS Agro | Smart Sustainable AgTech & Cultivation Systems",
    short_name: "JAS Agro",
    description:
      "Modern sustainable agriculture enterprise specializing in Oyster Mushroom cultivation, Azolla aquatic fodder, Super Napier grass, Vermicompost, and IoT climate telemetry.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D230E",
    theme_color: "#0D230E",
    icons: [
      {
        src: "/jas-agro-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/jas-agro-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
