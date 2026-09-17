export interface Service {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  shortDescription: string;
  shortDescriptionHi: string;
  fullDescription: string;
  fullDescriptionHi: string;
  iconName: string;
  features: string[];
  featuresHi: string[];
  deliverables: string[];
  deliverablesHi: string[];
}

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    slug: "mushroom-farm-setup",
    title: "Oyster Mushroom Turnkey Farm Setup",
    titleHi: "ऑयस्टर मशरूम Turnkey Farm Setup",
    shortDescription: "End-to-end design, indoor insulation, misting systems, and spawn supply for high-yield mushroom cultivation.",
    shortDescriptionHi: "High-yield मशरूम फार्मिंग के लिए complete end-to-end design, indoor insulation, misting system और spawn supply।",
    fullDescription:
      "We build commercial indoor oyster mushroom grow units equipped with thermal insulation, HEPA air filtration, automated misting, and IoT sensors to guarantee optimal fruiting conditions year-round.",
    fullDescriptionHi:
      "हम commercial indoor oyster mushroom grow units तैयार करते हैं जो thermal insulation, HEPA air filter, automatic misting और IoT sensors से लैस होते हैं, ताकि पूरे साल बेहतरीन yield मिले।",
    iconName: "Sprout",
    features: [
      "Custom Grow Room Layout & Thermal Insulation",
      "Automated Misting & Air Exhaust Ventilation",
      "Pure Culture Spawn Supply & Substrate Pasteurization Units",
      "IoT Sensor Integration for Remote Monitoring",
    ],
    featuresHi: [
      "Custom Grow Room Layout और Thermal Insulation",
      "Automated Misting और Air Exhaust Ventilation",
      "Pure Culture Spawn Supply और Substrate Pasteurization Units",
      "Remote Monitoring के लिए IoT Sensors Integration",
    ],
    deliverables: [
      "Complete Grow Room Architecture",
      "Substrate Steaming / Pasteurization Equipment",
      "1-on-1 Agronomist Training & Operating Manuals",
    ],
    deliverablesHi: [
      "Complete Grow Room Architecture & Design",
      "Substrate Steaming & Pasteurization Setup",
      "Agri Expert द्वारा 1-on-1 Training और Operating Manual",
    ],
  },
  {
    id: "serv-2",
    slug: "azolla-fodder-consultation",
    title: "Azolla Fodder System Integration",
    titleHi: "अजोला Fodder System Integration",
    shortDescription: "Turnkey shade-net pond construction, culture inoculation, and daily harvesting protocols for dairy farmers.",
    shortDescriptionHi: "Dairy farmers के लिए turnkey Shade-net Pond setup, pure Azolla culture और daily harvesting guide।",
    fullDescription:
      "Transform your dairy feed budget by establishing sustainable Azolla cultivation ponds. We design space-efficient pit systems, supply pure Azolla strain starter cultures, and train farm staff on daily harvesting.",
    fullDescriptionHi:
      "Azolla cultivation ponds बनाकर अपनी Dairy Feed Cost को 20-30% कम करें। हम space-efficient pit systems design करते हैं, pure Azolla culture देते हैं और staff को daily harvesting की training देते हैं।",
    iconName: "Waves",
    features: [
      "50% HDPE Shade-Net & Heavy Liner Installation",
      "Soil & Bio-Nutrient Inoculation Techniques",
      "Harvesting Net Equipment & Daily Feed Ratios",
    ],
    featuresHi: [
      "50% HDPE Shade-Net और Heavy Liner Installation",
      "Soil और Bio-Nutrient Inoculation Techniques",
      "Harvesting Net Setup और Daily Feed Ratio Guide",
    ],
    deliverables: [
      "Custom Pond Layout (10m x 2m or custom modular size)",
      "High-Purity Starter Strain Inoculum",
      "Feed Formulation Guide for Cows, Buffaloes & Poultry",
    ],
    deliverablesHi: [
      "Custom Pond Layout (10m x 2m या Modular size)",
      "Pure Starter Culture Strain",
      "गाय, भैंस और Poultry के लिए Feed Ratio Guide",
    ],
  },
  {
    id: "serv-3",
    slug: "napier-grass-cultivation",
    title: "Hybrid Napier Fodder Estate Setup",
    titleHi: "हाइब्रिड नेपियर Fodder Farm Setup",
    shortDescription: "High-density planting, stem cutting supply, drip irrigation layout, and multi-cut harvest management.",
    shortDescriptionHi: "High-density planting, stem cuttings supply, drip irrigation layout और multi-cut harvest management।",
    fullDescription:
      "Establish high-yield Super Napier grass estates capable of producing 180+ tons of green fodder per acre per year. Ideal for commercial dairy farms seeking perpetual fodder security.",
    fullDescriptionHi:
      "Per acre per year 180+ tons green fodder पैदा करने वाला Super Napier Grass farm बनाएं। Commercial dairy farms के लिए 12 महीने चारा सुरक्षा का सबसे अच्छा तरीका।",
    iconName: "Wheat",
    features: [
      "High-Yield CO-5 / Super Napier Slips Supply",
      "Precision Drip Irrigation & Fertigation Layout",
      "Multi-Cut Harvest Schedule & Silage Processing",
    ],
    featuresHi: [
      "High-Yield CO-5 / Super Napier Slips Supply",
      "Precision Drip Irrigation और Fertigation Layout",
      "Multi-Cut Harvest Schedule और Silage Processing",
    ],
    deliverables: [
      "Rooted Slips / Stem Cutting Supply",
      "Field Preparation & Soil Conditioning",
      "Silage Pit Creation & Preservation Training",
    ],
    deliverablesHi: [
      "Rooted Slips / Stem Cutting Supply",
      "Land Preparation और Soil Conditioning Guide",
      "Silage Pit Creation और Storage Training",
    ],
  },
  {
    id: "serv-4",
    slug: "vermicompost-plant-setup",
    title: "Commercial Vermicomposting Units",
    titleHi: "Commercial Vermicomposting Unit Setup",
    shortDescription: "Biological waste decomposition units, earthworm bed establishment, and high-purity compost processing.",
    shortDescriptionHi: "Organic waste decomposition units, earthworm bed setup और pure vermicompost processing।",
    fullDescription:
      "Turn agricultural biomass and dairy cattle waste into premium organic vermicompost. We construct shaded vermi-beds, supply Eisenia fetida earthworms, and provide sieving/packaging lines.",
    fullDescriptionHi:
      "Agri waste और गोवंश के गोबर को premium organic vermicompost में बदलें। हम shaded vermi-beds बनाते हैं, Eisenia fetida केंचुए supply करते हैं और sieving & packaging unit set up करते हैं।",
    iconName: "Recycle",
    features: [
      "Shaded Vermi-Bed Design (HDPE / Brick Beds)",
      "Red Worm (Eisenia fetida) Breeding Stock",
      "Moisture Maintenance & Bio-Enrichment Protocols",
    ],
    featuresHi: [
      "Shaded Vermi-Bed Design (HDPE / Brick Beds)",
      "Red Worm (Eisenia fetida) Breeding Stock",
      "Moisture Maintenance और Bio-Enrichment Protocols",
    ],
    deliverables: [
      "Vermi-Bed Construction & Earthworm Inoculation",
      "Compost Sieving & Moisture Testing Kits",
      "Quality Certification Guidance",
    ],
    deliverablesHi: [
      "Vermi-Bed Setup और Earthworm Inoculation",
      "Compost Sieving Setup और Moisture Testing Kits",
      "Quality Certification और Marketing Guidance",
    ],
  },
  {
    id: "serv-5",
    slug: "iot-smart-farming-consultation",
    title: "IoT Agriculture Telemetry & Automation",
    titleHi: "IoT Agriculture Telemetry & Automation",
    shortDescription: "Custom sensor deployment, ESP32 microcontrollers, cloud analytics, and automated micro-climate actuators.",
    shortDescriptionHi: "Custom Sensor Deployment, ESP32 Microcontrollers, Cloud Analytics और Automatic Climate Control।",
    fullDescription:
      "Digitize your farm with precision IoT sensor networks. Monitor soil moisture, ambient humidity, temperature, and solar irradiance from your smartphone, with automatic trigger relays for pumps and misters.",
    fullDescriptionHi:
      "Smart IoT sensor network के साथ अपने farm को digital बनाएं। अपने smartphone पर soil moisture, humidity, temperature की live monitoring करें और pumps/misters को auto-control करें।",
    iconName: "Radio",
    features: [
      "Sensor Node Deployment (DHT22, Soil Moisture, Light, CO2)",
      "Wi-Fi / GSM Gateway Setup with Cloud Sync",
      "Automated Actuator Controls (Relay Switches for Pumps & Fans)",
    ],
    featuresHi: [
      "Sensor Node Deployment (DHT22, Soil Moisture, Light, CO2)",
      "Wi-Fi / GSM Gateway Setup Cloud Sync के साथ",
      "Automated Actuator Controls (Pumps और Fans के लिए Relay Switches)",
    ],
    deliverables: [
      "Hardware Controller Units & Sensors",
      "Mobile / Web Dashboard Access",
      "Automated WhatsApp / SMS Threshold Alerts",
    ],
    deliverablesHi: [
      "Hardware Controller Units और Sensors",
      "Mobile & Web Dashboard Access",
      "Automatic WhatsApp & SMS Threshold Alerts",
    ],
  },
];
