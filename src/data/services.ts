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
    titleHi: "ऑयस्टर मशरूम टर्नकी फार्म सेटअप",
    shortDescription: "End-to-end design, indoor insulation, misting systems, and spawn supply for high-yield mushroom cultivation.",
    shortDescriptionHi: "उच्च उपज मशरूम खेती के लिए इंडोर इंसुलेशन, ऑटोमेटेड मिस्टिंग और स्पॉन सप्लाई व्यवस्था।",
    fullDescription:
      "We build commercial indoor oyster mushroom grow units equipped with thermal insulation, HEPA air filtration, automated misting, and IoT sensors to guarantee optimal fruiting conditions year-round.",
    fullDescriptionHi:
      "हम कमर्शियल इंडोर ऑयस्टर मशरूम ग्रो यूनिट्स तैयार करते हैं जो थर्मल इंसुलेशन, HEPA एयर फिल्टर, ऑटोमैटिक मिस्टिंग और IoT सेंसर से लैस होते हैं, ताकि पूरे साल बेहतरीन उपज मिले।",
    iconName: "Sprout",
    features: [
      "Custom Grow Room Layout & Thermal Insulation",
      "Automated Misting & Air Exhaust Ventilation",
      "Pure Culture Spawn Supply & Substrate Pasteurization Units",
      "IoT Sensor Integration for Remote Monitoring",
    ],
    featuresHi: [
      "कस्टम ग्रो रूम लेआउट एवं थर्मल इंसुलेशन",
      "ऑटोमेटेड मिस्टिंग व एयर एग्जॉस्ट वेंटिलेशन",
      "शुद्ध स्पॉन कल्चर सप्लाई एवं पाश्चराइजेशन यूनिट",
      "रिमोट मॉनिटरिंग के लिए IoT सेंसर इंटीग्रेशन",
    ],
    deliverables: [
      "Complete Grow Room Architecture",
      "Substrate Steaming / Pasteurization Equipment",
      "1-on-1 Agronomist Training & Operating Manuals",
    ],
    deliverablesHi: [
      "सम्पूर्ण ग्रो रूम आर्किटेक्चर एवं डिज़ाइन",
      "सबस्ट्रेट स्टीमिंग एवं पाश्चराइजेशन सेटअप",
      "कृषि विशेषज्ञों द्वारा प्रशिक्षण व ऑपरेटिंग मैनुअल",
    ],
  },
  {
    id: "serv-2",
    slug: "azolla-fodder-consultation",
    title: "Azolla Fodder System Integration",
    titleHi: "अजोला चारा उत्पादन सिस्टम सेटअप",
    shortDescription: "Turnkey shade-net pond construction, culture inoculation, and daily harvesting protocols for dairy farmers.",
    shortDescriptionHi: "डेयरी किसानों के लिए शेड-नेट पॉन्ड निर्माण, शुद्ध अजोला कल्चर और दैनिक कटाई मार्गदर्शन।",
    fullDescription:
      "Transform your dairy feed budget by establishing sustainable Azolla cultivation ponds. We design space-efficient pit systems, supply pure Azolla strain starter cultures, and train farm staff on daily harvesting.",
    fullDescriptionHi:
      "अजोला चारा तालाब बनाकर अपनी डेयरी फ़ीड लागत को 20-30% कम करें। हम स्थान-कुशल पॉन्ड डिज़ाइन करते हैं, शुद्ध अजोला कल्चर प्रदान करते हैं और कर्मचारियों को दैनिक कटाई का प्रशिक्षण देते हैं।",
    iconName: "Waves",
    features: [
      "50% HDPE Shade-Net & Heavy Liner Installation",
      "Soil & Bio-Nutrient Inoculation Techniques",
      "Harvesting Net Equipment & Daily Feed Ratios",
    ],
    featuresHi: [
      "50% एचडीपीई शेड-नेट एवं हैवी लाइनर इंस्टॉलेशन",
      "मृदा एवं बायो-न्यूट्रिएंट इनोक्यूलेशन तकनीक",
      "हार्वेस्टिंग नेट सेटअप और दैनिक चारा मात्रा गाइड",
    ],
    deliverables: [
      "Custom Pond Layout (10m x 2m or custom modular size)",
      "High-Purity Starter Strain Inoculum",
      "Feed Formulation Guide for Cows, Buffaloes & Poultry",
    ],
    deliverablesHi: [
      "कस्टम पॉन्ड लेआउट (10m x 2m या आवश्यकतानुसार)",
      "शुद्ध स्टार्टर कल्चर स्ट्रेन",
      "गाय, भैंस और पोल्ट्री के लिए फ़ीड अनुपात गाइड",
    ],
  },
  {
    id: "serv-3",
    slug: "napier-grass-cultivation",
    title: "Hybrid Napier Fodder Estate Setup",
    titleHi: "हाइब्रिड नेपियर हरा चारा फार्म सेटअप",
    shortDescription: "High-density planting, stem cutting supply, drip irrigation layout, and multi-cut harvest management.",
    shortDescriptionHi: "उच्च-घनत्व रोपण, तना कटिंग आपूर्ति, ड्रिप सिंचाई लेआउट और बहु-कटाई प्रबंधन।",
    fullDescription:
      "Establish high-yield Super Napier grass estates capable of producing 180+ tons of green fodder per acre per year. Ideal for commercial dairy farms seeking perpetual fodder security.",
    fullDescriptionHi:
      "प्रति एकड़ 180+ टन हरा चारा देने वाला सुपर नेपियर ग्रास फार्म बनाएं। व्यावसायिक डेयरी फार्मों के लिए 12 महीने हरे चारे की पूर्ण सुरक्षा का सबसे अच्छा तरीका।",
    iconName: "Wheat",
    features: [
      "High-Yield CO-5 / Super Napier Slips Supply",
      "Precision Drip Irrigation & Fertigation Layout",
      "Multi-Cut Harvest Schedule & Silage Processing",
    ],
    featuresHi: [
      "उच्च उपज CO-5 / सुपर नेपियर कलम आपूर्ति",
      "प्रिसिजन ड्रिप सिंचाई एवं फर्टिगेशन लेआउट",
      "मल्टी-कट हार्वेस्ट शेड्यूल एवं साइलेज प्रोसेसिंग",
    ],
    deliverables: [
      "Rooted Slips / Stem Cutting Supply",
      "Field Preparation & Soil Conditioning",
      "Silage Pit Creation & Preservation Training",
    ],
    deliverablesHi: [
      "जड़दार कलमों / तना कटिंग की आपूर्ति",
      "भूमि तैयारी एवं मिट्टी सुधार गाइड",
      "साइलेज गड्ढा निर्माण और भंडारण प्रशिक्षण",
    ],
  },
  {
    id: "serv-4",
    slug: "vermicompost-plant-setup",
    title: "Commercial Vermicomposting Units",
    titleHi: "कमर्शियल वर्मीकंपोस्ट खाद यूनिट सेटअप",
    shortDescription: "Biological waste decomposition units, earthworm bed establishment, and high-purity compost processing.",
    shortDescriptionHi: "जैविक कचरा अपघटन यूनिट, केंचुआ बेड स्थापना और उच्च शुद्धता वर्मीकंपोस्ट प्रसंस्करण।",
    fullDescription:
      "Turn agricultural biomass and dairy cattle waste into premium organic vermicompost. We construct shaded vermi-beds, supply Eisenia fetida earthworms, and provide sieving/packaging lines.",
    fullDescriptionHi:
      "कृषि अवशेषों और गोबर को प्रीमियम जैविक वर्मीकंपोस्ट खाद में बदलें। हम छायादार वर्मी-बेड बनाते हैं, केंचुए प्रदान करते हैं और छनाई व पैकेजिंग यूनिट सेट करते हैं।",
    iconName: "Recycle",
    features: [
      "Shaded Vermi-Bed Design (HDPE / Brick Beds)",
      "Red Worm (Eisenia fetida) Breeding Stock",
      "Moisture Maintenance & Bio-Enrichment Protocols",
    ],
    featuresHi: [
      "छायादार वर्मी-बेड डिज़ाइन (HDPE / ईंट बेड)",
      "रेड वॉर्म (आइसीनिया फेटिडा) ब्रीडिंग स्टॉक",
      "नमी नियंत्रण एवं बायो-एनरिचमेंट प्रोटोकॉल",
    ],
    deliverables: [
      "Vermi-Bed Construction & Earthworm Inoculation",
      "Compost Sieving & Moisture Testing Kits",
      "Quality Certification Guidance",
    ],
    deliverablesHi: [
      "वर्मी-बेड स्थापना एवं केंचुआ इनोक्यूलेशन",
      "खाद छानने की मशीन एवं नमी परीक्षण किट",
      "गुणवत्ता प्रमाणन एवं मार्केटिंग मार्गदर्शन",
    ],
  },
  {
    id: "serv-5",
    slug: "iot-smart-farming-consultation",
    title: "IoT Agriculture Telemetry & Automation",
    titleHi: "स्मार्ट IoT कृषि ऑटोमेशन व टेलीमेट्री",
    shortDescription: "Custom sensor deployment, ESP32 microcontrollers, cloud analytics, and automated micro-climate actuators.",
    shortDescriptionHi: "कस्टम सेंसर तैनाती, कंट्रोलर, क्लाउड एनालिटिक्स और ऑटोमैटिक माइक्रो-क्लाइमेट कंट्रोल।",
    fullDescription:
      "Digitize your farm with precision IoT sensor networks. Monitor soil moisture, ambient humidity, temperature, and solar irradiance from your smartphone, with automatic trigger relays for pumps and misters.",
    fullDescriptionHi:
      "स्मार्ट IoT सेंसर नेटवर्क के साथ अपने फार्म को डिजिटल बनाएं। अपने स्मार्टफोन पर मिट्टी की नमी, तापमान की लाइव निगरानी करें और ऑटो-कंट्रोल करें।",
    iconName: "Radio",
    features: [
      "Sensor Node Deployment (DHT22, Soil Moisture, Light, CO2)",
      "Wi-Fi / GSM Gateway Setup with Cloud Sync",
      "Automated Actuator Controls (Relay Switches for Pumps & Fans)",
    ],
    featuresHi: [
      "सेंसर नोड तैनाती (तापमान, आर्द्रता, मृदा नमी, CO2)",
      "वाई-फाई / जीएसएम गेटवे सेटअप क्लाउड सिंक के साथ",
      "ऑटोमेटेड पंप एवं फैन कंट्रोल रिले",
    ],
    deliverables: [
      "Hardware Controller Units & Sensors",
      "Mobile / Web Dashboard Access",
      "Automated WhatsApp / SMS Threshold Alerts",
    ],
    deliverablesHi: [
      "हार्डवेयर कंट्रोलर यूनिट्स एवं सेंसर्स",
      "मोबाइल व वेब डैशबोर्ड एक्सेस",
      "ऑटोमैटिक व्हाट्सएप एवं एसएमएस अलर्ट्स",
    ],
  },
];
