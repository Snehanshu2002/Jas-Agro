export interface Product {
  id: string;
  slug: string;
  name: string;
  nameHi: string;
  category: "Mushroom" | "Azolla" | "Napier Grass" | "Vermicompost" | "IoT Smart Farming";
  categoryHi: string;
  shortDescription: string;
  shortDescriptionHi: string;
  fullDescription: string;
  fullDescriptionHi: string;
  heroImage: string;
  gallery: string[];
  keyFeatures: string[];
  keyFeaturesHi: string[];
  specifications: { label: string; value: string }[];
  cultivationGuide?: {
    temperature: string;
    humidity: string;
    waterRequirement: string;
    harvestCycle: string;
    yieldPotential: string;
  };
  applications: string[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
  externalLink?: string;
  externalLinkLabel?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "oyster-mushroom",
    name: "Premium Oyster Mushroom Cultivation",
    nameHi: "प्रीमियम ऑयस्टर मशरूम फार्मिंग",
    category: "Mushroom",
    categoryHi: "मशरूम",
    shortDescription: "High-yield, protein-rich gourmet mushroom cultivation with climate-controlled indoor environment monitoring.",
    shortDescriptionHi: "Climate-controlled indoor setup में हाई yield और protein से भरपूर मशरूम फार्मिंग।",
    fullDescription:
      "JAS Agro Oyster Mushroom solutions deliver organic, high-protein gourmet mushrooms grown using bio-secure indoor methodologies. Combined with IoT environmental monitoring sensors, growers achieve precise temperature and humidity control for maximum yield and rapid harvest cycles.",
    fullDescriptionHi:
      "JAS Agro ऑयस्टर मशरूम solutions organic और high-protein मशरूम खेती का आसान तरीका प्रदान करते हैं। IoT सेंसर technology से सही temperature और humidity control होता है, जिससे ज़्यादा yield और fast harvesting मिलती है।",
    heroImage: "https://www.jasagro.com/assets/img/slide/slide-1.jpg",
    externalLink: "https://www.chhatraka.com/",
    externalLinkLabel: "Visit Chhatraka Mushroom Portal",
    gallery: [
      "https://www.jasagro.com/assets/img/slide/slide-1.jpg",
      "https://www.jasagro.com/assets/img/blog/Masroom.png",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    ],
    keyFeatures: [
      "100% Organic & Chemical-Free Growth",
      "Short Cultivation Cycle (21-28 Days)",
      "High Biological Efficiency (up to 100% yield per kg dry substrate)",
      "Smart Temperature & Relative Humidity Telemetry",
      "Low Space & Water Footprint",
    ],
    keyFeaturesHi: [
      "100% Organic और Chemical-free खेती",
      "कम समय का Crop Cycle (21-28 दिन)",
      "High Biological Efficiency (100% तक Yield)",
      "Smart Temperature & Humidity Sensor Monitoring",
      "कम जगह और कम पानी की ज़रूरत",
    ],
    specifications: [
      { label: "Species", value: "Pleurotus ostreatus / Pleurotus sajor-caju" },
      { label: "Optimal Temp", value: "22°C - 26°C" },
      { label: "Optimal RH", value: "80% - 90%" },
      { label: "Substrate", value: "Sterilized Wheat Straw / Paddy Straw" },
      { label: "Packaging", value: "Fresh Harvest / Spawn Bags / Dried" },
    ],
    cultivationGuide: {
      temperature: "22°C - 26°C (Fruiting Phase)",
      humidity: "85% RH (Controlled via Micro-Misters)",
      waterRequirement: "High Ambient Relative Humidity, Low Liquid Volume",
      harvestCycle: "First flush in 20-25 days, up to 3 flushes",
      yieldPotential: "800g - 1kg fresh mushrooms per kg dry straw",
    },
    applications: [
      "Commercial Gourmet Mushroom Farming",
      "High-Nutrition Superfood Supply",
      "Agri-Entrepreneurship & Rural Livelihoods",
      "Medicinal & Dietary Extract Processing",
    ],
    faqs: [
      {
        question: "Why are Oyster Mushrooms ideal for indoor smart farming?",
        answer:
          "Oyster mushrooms require precise relative humidity (80-90%) and temperature (22-26°C). Automated IoT misting systems ensure maximum fruiting without manual supervision.",
      },
      {
        question: "Does JAS Agro provide spawn and technical guidance?",
        answer:
          "Yes, JAS Agro provides high-grade pure culture spawn, sterilized substrate protocols, and complete IoT room setup support.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "prod-2",
    slug: "azolla",
    name: "Bio-Nutrient Azolla Aquatic Fodder",
    nameHi: "बायो-न्यूट्रिएंट अजोला लाइव चारा",
    category: "Azolla",
    categoryHi: "अजोला",
    shortDescription: "Fast-growing nitrogen-fixing aquatic fern providing protein-rich live biomass for livestock, poultry, and fish.",
    shortDescriptionHi: "पशुओं, Poultry और मछली पालन के लिए high-protein जलीय चारा (Livestock Feed)।",
    fullDescription:
      "Azolla pinnata is a miracle super-fodder containing 25-30% crude protein, essential amino acids, and minerals. JAS Agro provides pure strain Azolla cultures alongside custom shade-net pond kits designed for rapid daily harvesting.",
    fullDescriptionHi:
      "Azolla pinnata में 25-30% Protein, जरूरी Amino Acids और Minerals होते हैं। JAS Agro pure strain Azolla cultures और custom Shade-net Pond Kits की मदद से रोज़ाना आसान harvest देता है।",
    heroImage: "https://www.jasagro.com/assets/img/slide/slide-2.jpg",
    gallery: [
      "https://www.jasagro.com/assets/img/slide/slide-2.jpg",
      "https://www.jasagro.com/assets/img/blog/Azolla.png",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    ],
    keyFeatures: [
      "Rich in Crude Protein (25-30%) and Essential Amino Acids",
      "Doubles Biomass Every 3-5 Days under Optimal Sun & Water",
      "Reduces Commercial Dairy & Poultry Feed Costs by 20-30%",
      "Acts as Natural Nitrogen-Fixing Biofertilizer in Paddy Fields",
      "Low Labor & Extremely Low Water Consumption",
    ],
    keyFeaturesHi: [
      "25-30% Protein और Essential Amino Acids से भरपूर",
      "3-5 दिनों में Biomass डबल हो जाता है",
      "Dairy & Poultry Feed की cost 20-30% कम करता है",
      "धान के खेतों में Natural Biofertilizer का काम करता है",
      "कम Labor और बहुत कम पानी की खपत",
    ],
    specifications: [
      { label: "Botanical Name", value: "Azolla pinnata" },
      { label: "Protein Content", value: "25% - 30% Dry Matter" },
      { label: "Growth Rate", value: "Doubles every 3 to 4 days" },
      { label: "Pond Depth", value: "10cm - 15cm fresh water" },
      { label: "Sunlight Requirement", value: "50% Partial Shade (Green Net)" },
    ],
    cultivationGuide: {
      temperature: "20°C - 30°C",
      humidity: "Ambient Outdoor Shade Pond",
      waterRequirement: "Standing shallow clean water (pH 6.5 - 7.5)",
      harvestCycle: "Daily harvest of up to 1kg per 2x1m pond",
      yieldPotential: "15 - 20 Tons per hectare equivalent annually",
    },
    applications: [
      "Dairy Cattle Fodder Supplement (Increases Milk Fat & Yield)",
      "Poultry Feed Replacement (Enhances Egg Shell Quality)",
      "Aquaculture Feed for Herbivorous Fish",
      "Organic Green Manure & Biofertilizer for Rice Fields",
    ],
    faqs: [
      {
        question: "How does Azolla help dairy farmers reduce costs?",
        answer:
          "Azolla replaces up to 20-30% of costly commercial concentrate feeds while boosting milk yield and fat percentage due to its high digestible protein content.",
      },
      {
        question: "Can Azolla be grown year-round?",
        answer:
          "Yes, under 50% green shade nets with periodic water replenishment and organic manure inoculation.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "prod-3",
    slug: "napier-grass",
    name: "High-Yield Hybrid Napier Grass",
    nameHi: "हाई-यिल्ड हाइब्रिड नेपियर घास",
    category: "Napier Grass",
    categoryHi: "नेपियर घास",
    shortDescription: "Perennial high-biomass green fodder crop giving up to 6-8 harvests per year for livestock feed.",
    shortDescriptionHi: "Dairy और पशुओं के आहार के लिए साल में 6-8 बार कटाई देने वाला हरा चारा (High Biomass Fodder)।",
    fullDescription:
      "Hybrid Napier Grass (Super Napier / CO-4 / CO-5) is a high-yielding perennial forage crop that produces soft, palatable leaves rich in nutrients. Ideal for dairy farms, goat rearing, and silage production.",
    fullDescriptionHi:
      "Hybrid Napier Grass (Super Napier / CO-5) एक high-yielding मल्टी-ईयर चारा फसल है जो डेयरी फार्मिंग, बकरी पालन और Silage बनाने के लिए एकदम सही है।",
    heroImage: "https://www.jasagro.com/assets/img/slide/slide-3.jpg",
    gallery: [
      "https://www.jasagro.com/assets/img/slide/slide-3.jpg",
      "https://www.jasagro.com/assets/img/blog/Napior.png",
      "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    ],
    keyFeatures: [
      "Extremely High Green Fodder Yield (150-200 Tons/Acre/Year)",
      "Perennial Crop – Single Planting Yields for 4-5 Years",
      "High Crude Protein (10-14%) & High Palatability",
      "Rapid Regrowth – Harvestable Every 45-60 Days",
      "Drought Tolerant & Responsive to Organic Manure",
    ],
    keyFeaturesHi: [
      "बहुत ज़्यादा हरा चारा Production (150-200 टन/एकड़/साल)",
      "एक बार लगाएं, 4-5 साल तक लगातार Harvest पाएं",
      "High Protein (10-14%) और पचने में आसान",
      "Fast Regrowth – हर 45-50 दिन में तैयार",
      "कम पानी में चलने वाला (Drought Tolerant) और ऑर्गेनिक खाद के अनुकूल",
    ],
    specifications: [
      { label: "Variety", value: "Super Napier / Hybrid CO-5" },
      { label: "Crude Protein", value: "11% - 14%" },
      { label: "Plant Height", value: "8 - 10 feet" },
      { label: "Harvest Interval", value: "Every 45 to 55 days" },
      { label: "Lifespan", value: "4 to 5 years continuous yield" },
    ],
    cultivationGuide: {
      temperature: "25°C - 38°C",
      humidity: "Adaptable to diverse tropical & sub-tropical climates",
      waterRequirement: "Drip or Flood Irrigation every 10-15 days",
      harvestCycle: "First cut at 75 days, subsequent cuts every 45 days",
      yieldPotential: "180 - 220 Tons per Acre annually",
    },
    applications: [
      "Commercial Dairy Farming Green Feed",
      "Goat & Sheep High-Fibre Roughage",
      "Silage Production for Summer Feed Security",
      "Biomass & Bio-Energy Feedstock",
    ],
    faqs: [
      {
        question: "How many stems/slips are needed per acre?",
        answer:
          "Approximately 10,000 to 12,000 stem cuttings or slips are required per acre under recommended 3ft x 2ft spacing.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "prod-4",
    slug: "vermicompost",
    name: "Bio-Active Organic Vermicompost",
    nameHi: "बायो-एक्टिव ऑर्गेनिक वर्मीकंपोस्ट",
    category: "Vermicompost",
    categoryHi: "वर्मीकंपोस्ट",
    shortDescription: "Premium earthworm castings enriched with micro-nutrients and beneficial soil micro-organisms.",
    shortDescriptionHi: "Micro-nutrients और मिट्टी के लिए ज़रूरी microbes से भरपूर ऑर्गेनिक केंचुआ खाद।",
    fullDescription:
      "JAS Agro Vermicompost is produced by earthworms (Eisenia fetida) decomposing cattle dung and organic crop residue into humus-rich organic fertilizer. It restores depleted soil structure, enhances water retention, and boosts plant immunity.",
    fullDescriptionHi:
      "JAS Agro Vermicompost केंचुओं (Eisenia fetida) से तैयार शुद्ध organic fertilizer है। यह मिट्टी की क्वालिटी सुधारता है, नमी बनाए रखता है और पौधों की growth बढ़ाता है।",
    heroImage: "https://www.jasagro.com/assets/img/slide/slide-4.jpg",
    gallery: [
      "https://www.jasagro.com/assets/img/slide/slide-4.jpg",
      "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    ],
    keyFeatures: [
      "100% Pure Earthworm Castings (No Chemical Additives)",
      "High Nitrogen, Phosphorus, Potassium (NPK) & Trace Minerals",
      "Enriched with Mycorrhizae & Beneficial Bio-Control Agents",
      "Improves Soil Porosity, Moisture Retention & Aeration",
      "Suitable for Organic Farming, Horticulture & Kitchen Gardens",
    ],
    keyFeaturesHi: [
      "100% Organic & Chemical-free वर्मीकंपोस्ट",
      "High NPK (Nitrogen, Phosphorus, Potassium) और Micro-minerals",
      "Soil Fertility और Microbes बढ़ाता है",
      "मिट्टी की Moisture Retention और Quality सुधारता है",
      "Organic Farming, Polyhouse और Kitchen Gardens के लिए बेस्ट",
    ],
    specifications: [
      { label: "Moisture", value: "15% - 25%" },
      { label: "pH Range", value: "6.8 - 7.5 (Neutral)" },
      { label: "Organic Carbon", value: "> 16%" },
      { label: "C:N Ratio", value: "< 20:1" },
      { label: "Packaging", value: "25kg / 50kg Heavy-Duty HDPE Bags" },
    ],
    applications: [
      "Organic Crop Production & Horticulture",
      "Fruit Orchards & Plantation Crops",
      "Greenhouse Nursery Seedling Media",
      "Soil Reclamation & Urban Landscaping",
    ],
    faqs: [
      {
        question: "How does Vermicompost compare to traditional cow dung manure?",
        answer:
          "Vermicompost is 4-5 times richer in bio-available NPK, contains active beneficial microbes, is completely odorless, and free of weed seeds and pathogen larvae.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "prod-5",
    slug: "iot-farm-controller",
    name: "Smart Farm IoT Environmental Controller",
    nameHi: "स्मार्ट फार्म IoT कंट्रोलर",
    category: "IoT Smart Farming",
    categoryHi: "IoT Smart Farming",
    shortDescription: "Precision micro-climate sensor hub with ESP32 microcontrollers, DHT22 sensors, and real-time cloud telemetry.",
    shortDescriptionHi: "ESP32 Microcontroller, DHT22 Sensors और real-time Cloud Telemetry के साथ Smart Farming Kit।",
    fullDescription:
      "Engineered specifically for Oyster Mushroom grow rooms, green houses, and hydroponic setups. Sensors measure ambient temperature, relative humidity, and soil moisture, triggering automated misters, fans, and mobile alerts via Wi-Fi/GSM cloud infrastructure.",
    fullDescriptionHi:
      "मशरूम Grow Rooms, Greenhouses और Polyhouses के लिए ख़ास तौर पर तैयार Smart Sensor System। यह Temperature, Humidity और Water Misting को पूरी तरह Automatic बनाता है।",
    heroImage: "https://www.jasagro.com/assets/img/blog/IOT.jpg",
    gallery: [
      "https://www.jasagro.com/assets/img/blog/IOT.jpg",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    ],
    keyFeatures: [
      "ESP32 Microcontroller Core with Dual Wi-Fi / Bluetooth Telemetry",
      "High-Accuracy Calibrated DHT22 Temp & Humidity Sensor Nodes",
      "Capacitive Soil Moisture & Airflow Probes",
      "Solid-State Relay Control for Misters, Fans & Humidifiers",
      "Real-Time Cloud Dashboard with Instant WhatsApp/SMS Alerts",
    ],
    keyFeaturesHi: [
      "ESP32 Microcontroller Core, Dual Wi-Fi & Bluetooth Telemetry",
      "High-Accuracy DHT22 Temperature & Humidity Sensors",
      "Capacitive Soil Moisture & Airflow Probes",
      "Misters और Fans के लिए Automatic Relay Control",
      "Live Cloud Dashboard के साथ Instant Alerts",
    ],
    specifications: [
      { label: "Microcontroller", value: "ESP32-WROOM-32 / Arduino Compatible" },
      { label: "Sensor Array", value: "DHT22 / SHT31 / Soil Moisture Capacitive" },
      { label: "Connectivity", value: "Wi-Fi 802.11 b/g/n / GSM SIM Module" },
      { label: "Power Supply", value: "12V DC / Solar Battery Backup Compatible" },
      { label: "Relay Ports", value: "4-Channel Isolated Solid State Relays" },
    ],
    applications: [
      "Mushroom Grow Room Environmental Automation",
      "Polyhouse & Greenhouse Climate Control",
      "Precision Drip Irrigation Automation",
      "Soil Moisture & Micro-Climate Data Logging",
    ],
    faqs: [
      {
        question: "Can this controller operate without continuous internet?",
        answer:
          "Yes! The ESP32 logic controller maintains local misting and fan control rules even during offline periods, syncing data to the cloud whenever connectivity is restored.",
      },
    ],
    isFeatured: true,
  },
  {
    id: "prod-6",
    slug: "mushroom-spawn-substrate",
    name: "Pure Culture Mushroom Spawn & Grow Bags",
    nameHi: "शुद्ध मशरूम स्पॉन और सबस्ट्रेट बैग्स",
    category: "Mushroom",
    categoryHi: "मशरूम",
    shortDescription: "Laboratory-grade high-viability oyster mushroom spawn and sterilized substrate grow bags for rapid flush cycles.",
    shortDescriptionHi: "प्रयोगशाला-ग्रेड उच्च गुणवत्ता ऑयस्टर मशरूम स्पॉन और निष्फल सबस्ट्रेट बैग्स।",
    fullDescription:
      "Certified pure strain oyster mushroom spawn produced under sterile laboratory conditions. Inoculated on sterilized grain for vigorous mycelium colonization and rapid fruiting.",
    fullDescriptionHi:
      "लैब-सर्टिफाइड प्योर स्ट्रेन स्पॉन जो तेजी से मायसेलियम फैलाव और उच्च जैविक पैदावार सुनिश्चित करता है।",
    heroImage: "/products/Oyster Mushroom FRESH.png",
    gallery: [
      "/products/Oyster Mushroom FRESH.png",
      "https://www.jasagro.com/assets/img/blog/Masroom.png",
    ],
    keyFeatures: [
      "Lab-Certified Pure Strain Mycelium",
      "Rapid Colonization (14-18 Days)",
      "High Biological Fruiting Efficiency",
      "Zero Contamination Protocol",
      "Compatible with Wheat/Paddy Straw",
    ],
    keyFeaturesHi: [
      "लैब-प्रमाणित शुद्ध स्ट्रेन स्पॉन",
      "तेज़ मायसेलियम फैलाव (14-18 दिन)",
      "उच्च जैविक फ्रूटिंग क्षमता",
      "शून्य संदूषण गारंटी",
      "गेहूं और धान के भूसे के अनुकूल",
    ],
    specifications: [
      { label: "Spawn Media", value: "Sterilized Sorghum / Wheat Grain" },
      { label: "Viability", value: "99% Active Germination" },
      { label: "Storage", value: "30-45 Days at 4°C - 8°C" },
    ],
    applications: [
      "Commercial Indoor Mushroom Farms",
      "Grow Bag Inoculation & Mushroom Cultivation Units",
    ],
    faqs: [
      {
        question: "What is the recommended spawning rate?",
        answer: "Use 2% to 3% spawn based on the wet weight of pasteurized substrate.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-7",
    slug: "azolla-cultivation-kit",
    name: "Turnkey Modular Azolla Shade-Net Pond Kit",
    nameHi: "मॉड्यूलर अजोला शेड-नेट पॉन्ड किट",
    category: "Azolla",
    categoryHi: "अजोला",
    shortDescription: "Heavy-duty UV-stabilized HDPE pond kits with starter mother culture for perpetual high-protein dairy fodder.",
    shortDescriptionHi: "डेयरी किसानों के लिए हैवी-ड्यूटी एचडीपीई पॉन्ड किट, शेड-नेट और शुद्ध मदर कल्चर।",
    fullDescription:
      "Turnkey modular pond kits for dairy farms. Includes durable multi-layer HDPE pond liners, green shade-netting, bio-mineral fertilizer inoculum, and pure mother culture for 1-2kg daily yield.",
    fullDescriptionHi:
      "डेयरी फार्मों के लिए मॉड्यूलर पॉन्ड किट। टिकाऊ लाइनर, शेड-नेट और शुद्ध मदर कल्चर के साथ आसान दैनिक कटाई।",
    heroImage: "/products/AZOLLA.png",
    gallery: [
      "/products/AZOLLA.png",
      "https://www.jasagro.com/assets/img/blog/Azolla.png",
    ],
    keyFeatures: [
      "Heavy-Duty UV-Stabilized Multi-Layer Liner",
      "50% Green Shade-Netting Frame Included",
      "High-Purity Starter Mother Strain",
      "Daily 1-2kg Fresh Biomass Harvest",
      "Low Space & Extremely Low Water Footprint",
    ],
    keyFeaturesHi: [
      "मल्टी-लेयर यूवी-स्टैबिलाइज्ड एचडीपीई लाइनर",
      "50% ग्रीन शेड-नेटिंग फ्रेम",
      "शुद्ध स्टार्टर मदर कल्चर स्ट्रेन",
      "दैनिक 1-2 किग्रा ताजा चारा उपज",
      "कम जगह और बहुत कम पानी की खपत",
    ],
    specifications: [
      { label: "Standard Size", value: "10ft x 4ft x 1ft Depth" },
      { label: "Material", value: "350 GSM Virgin Multi-layer HDPE" },
      { label: "Daily Output", value: "1.2 - 1.8 kg Fresh Azolla" },
    ],
    applications: [
      "Dairy Cattle Daily Protein Supplementation",
      "Poultry, Duck & Goat High-Nutrition Feed",
    ],
    faqs: [
      {
        question: "How soon after installation can harvesting begin?",
        answer: "Full daily harvest begins 10 to 14 days after initial mother culture inoculation.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-8",
    slug: "super-napier-slips",
    name: "Super Napier CO-5 Rooted Stem Slips",
    nameHi: "सुपर नेपियर CO-5 जड़दार तना कलम",
    category: "Napier Grass",
    categoryHi: "नेपियर घास",
    shortDescription: "Certified high-germination rooted stem slips for rapid perennial green forage estate establishment.",
    shortDescriptionHi: "मल्टी-ईयर हरे चारे के लिए उच्च-अंकुरण तना कलम और जड़दार स्लिप्स।",
    fullDescription:
      "Certified disease-free Hybrid CO-5 / Super Napier stem cuttings and rooted slips. Highly adaptable to tropical soils, drought resilient, and delivers quick first cuts within 60-75 days.",
    fullDescriptionHi:
      "रोगमुक्त हाइब्रिड CO-5 सुपर नेपियर स्लिप्स जो हर 45 दिन में रिन्यू होने वाला पौष्टिक हरा चारा प्रदान करती हैं।",
    heroImage: "https://www.jasagro.com/assets/img/blog/Napior.png",
    gallery: [
      "https://www.jasagro.com/assets/img/blog/Napior.png",
      "https://www.jasagro.com/assets/img/slide/slide-3.jpg",
    ],
    keyFeatures: [
      "High Germination Viability (>95%)",
      "Dense Root & Active 2-3 Node Eyes",
      "Rapid Canopy & Tiller Establishment",
      "Sweet, Highly Palatable Forage Stems",
      "Continuous 4-5 Years Multi-Cut Yield",
    ],
    keyFeaturesHi: [
      "95%+ उच्च अंकुरण क्षमता",
      "सक्रिय 2-3 नोड आंखें व मजबूत जड़ें",
      "तेज़ फसल फैलाव व नए किल्ले",
      "स्वादिष्ट एवं आसानी से पचने वाला चारा",
      "4-5 साल तक लगातार कटाई",
    ],
    specifications: [
      { label: "Cutting Type", value: "Mature 2-3 Node Rooted Slips" },
      { label: "Planting Rate", value: "10,000 - 12,000 slips / acre" },
      { label: "Spacing", value: "3ft x 2ft or 4ft x 2ft" },
    ],
    applications: [
      "Commercial Dairy Green Forage Production",
      "Silage Pit Bundling & Summer Feed Reserves",
    ],
    faqs: [
      {
        question: "When is the first cutting ready?",
        answer: "The first harvest is ready in 65-75 days, with subsequent harvests every 45-55 days.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-9",
    slug: "vermicompost-bed-system",
    name: "Reinforced Commercial Vermi-Bed System",
    nameHi: "कमर्शियल वर्मीकंपोस्ट बेड सिस्टम",
    category: "Vermicompost",
    categoryHi: "वर्मीकंपोस्ट",
    shortDescription: "UV-treated reinforced HDPE vermi-beds with aeration windows and vermiwash drainage collection.",
    shortDescriptionHi: "हवादार खिड़कियों और वर्मीवॉश ड्रेनेज आउटलेट के साथ यूवी-ट्रीटेड एचडीपीई वर्मी-बेड।",
    fullDescription:
      "Engineered commercial vermicomposting beds manufactured from 100% virgin HDPE. Fitted with aeration net windows, vermiwash collection outlets, and UV stabilization for long outdoor lifespan.",
    fullDescriptionHi:
      "100% वर्जिन एचडीपीई से निर्मित कमर्शियल वर्मी-बेड। वेंटिलेशन विंडोज़ और वर्मीवॉश आउटलेट के साथ सर्वोत्तम कंपोस्टिंग।",
    heroImage: "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
    gallery: [
      "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
      "https://www.jasagro.com/assets/img/slide/slide-4.jpg",
    ],
    keyFeatures: [
      "100% Virgin UV-Stabilized HDPE (450 GSM)",
      "Integrated Mesh Aeration Net Windows",
      "Dedicated Vermiwash Drain Valve & Pipe",
      "Resistant to Biological & Acidic Corrosion",
      "Portable & Modular Farm Assembly",
    ],
    keyFeaturesHi: [
      "450 जीएसएम यूवी-स्टैबिलाइज्ड एचडीपीई",
      "एयर वेंटिलेशन मेश विंडोज़",
      "वर्मीवॉश ड्रेन वाल्व एवं पाइप",
      "जैविक क्षरण रोधी सामग्री",
      "सरल पोर्टेबल असेंबली",
    ],
    specifications: [
      { label: "Standard Size", value: "12ft x 4ft x 2ft Height" },
      { label: "Material", value: "450 GSM Virgin Multi-layer HDPE" },
      { label: "Capacity", value: "Up to 1.5 - 2.0 Tons Biomass" },
    ],
    applications: [
      "Commercial Bio-Fertilizer Production",
      "Organic Farm Cattle Dung & Crop Residue Recycling",
    ],
    faqs: [
      {
        question: "How long does one composting cycle take?",
        answer: "A full batch converts into fine vermicompost in 45-60 days under proper moisture management.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-10",
    slug: "mushroom-cultivation-process",
    name: "Oyster Mushroom Cultivation & Inoculation Process",
    nameHi: "ऑयस्टर मशरूम उत्पादन एवं स्पॉनिंग प्रक्रिया",
    category: "Mushroom",
    categoryHi: "मशरूम",
    shortDescription: "Scientific step-by-step protocol for substrate chopping, steam pasteurization, grain spawning, and pinhead micro-misting.",
    shortDescriptionHi: "सबस्ट्रेट तैयारी, भाप पाश्चुरीकरण, स्पॉनिंग और पिनहेड मिस्टिंग की वैज्ञानिक चरणबद्ध विधि।",
    fullDescription:
      "A complete commercial protocol designed by JAS Agro mycologists. Covers wheat/paddy straw shredding to 2-4 cm, 70°C steam pasteurization for 2.5 hours, 2.5% grain spawn inoculation, dark room incubation at 24°C, and high-humidity fruiting room management with automated dry-fog misters.",
    fullDescriptionHi:
      "JAS एग्रो माइकोलॉजिस्ट्स द्वारा विकसित व्यावसायिक विधि। तूड़ी की कटाई, 70°C स्टीम पाश्चुरीकरण, 2.5% स्पॉनिंग, 24°C पर मायसेलियम फैलाव और ऑटोमैटिक ड्राई-फॉग मिस्टिंग के साथ भरपूर तुड़ाई।",
    heroImage: "/products/Oyster Mushroom FRESH.png",
    gallery: [
      "/products/Oyster Mushroom FRESH.png",
      "/media/Industrial Oyster Mushroom Farm.png",
      "https://www.jasagro.com/assets/img/blog/Masroom.png",
    ],
    keyFeatures: [
      "Zero-Chemical Hot Steam Sterilization Protocol",
      "Calibrated 2%–3% Grain Spawn Inoculation Ratio",
      "14–18 Day Fast Mycelium Colonization in PP Bags",
      "Sub-5 Micron Micro-Fogging Preventing Bacterial Blotch",
      "3 Continuous Flushes Yielding 80%–100% Biological Efficiency",
    ],
    keyFeaturesHi: [
      "बिना किसी केमिकल के 100% सुरक्षित भाप पाश्चुरीकरण",
      "2-3% ग्रेन स्पॉन अनुपात से तेज़ विकास",
      "14-18 दिनों में संपूर्ण मायसेलियम फैलाव",
      "5 माइक्रोन से छोटे ड्राई-फॉग कणों से सुरक्षित नमी",
      "3 चरणों में 80% से 100% तक जैविक पैदावार",
    ],
    specifications: [
      { label: "Pasteurization Temp", value: "65°C – 70°C for 2.5 hours" },
      { label: "Substrate Moisture", value: "60% – 65% (Squeeze test calibrated)" },
      { label: "Incubation Temperature", value: "24°C – 26°C (Dark phase)" },
      { label: "Fruiting Relative Humidity", value: "85% – 95% RH" },
      { label: "CO2 Concentration (Fruiting)", value: "< 900 ppm" },
      { label: "Biological Efficiency", value: "80% – 100% fresh yield per dry substrate" },
    ],
    cultivationGuide: {
      temperature: "22°C – 26°C (Fruiting Phase)",
      humidity: "90% – 95% RH (Dry-Fog Ultrasonic Misting)",
      waterRequirement: "High ambient humidity without direct standing water",
      harvestCycle: "Flush 1: Day 20-22 | Flush 2: Day 28-30 | Flush 3: Day 36-38",
      yieldPotential: "800g to 1000g fresh mushrooms per kg dry straw",
    },
    applications: [
      "Commercial indoor mushroom fruiting chambers",
      "Crop residue monetization for dairy and cereal farmers",
      "Agri-entrepreneurship and women self-help groups (SHGs)",
      "Daily harvest fresh produce supply to urban vegetable mandis",
    ],
    faqs: [
      {
        question: "Why is steam pasteurization superior to chemical formalin dipping?",
        answer:
          "Steam pasteurization eliminates wild spores, mites, and competitor fungi purely through heat (70°C). It leaves zero toxic residues, ensuring 100% organic certification eligibility and healthier crops.",
      },
      {
        question: "How do you know when oyster mushrooms are ready for harvesting?",
        answer:
          "Harvest when mushroom caps have fully unrolled and are flat, just before the outer margins begin to curl upward or release spores.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-11",
    slug: "mushroom-farm-setup",
    name: "Commercial Turnkey Mushroom Farm Infrastructure",
    nameHi: "कमर्शियल टर्नकी मशरूम फार्म इंफ्रास्ट्रक्चर",
    category: "Mushroom",
    categoryHi: "मशरूम",
    shortDescription: "Pre-engineered PUF insulated chambers, tiered galvanized racking, ultrasonic foggers, and pasteurization boilers.",
    shortDescriptionHi: "PUF इंसुलेटेड ग्रो रूम्स, जीआई रैक्स, अल्ट्रासोनिक फॉगर्स और स्टीम बॉयलर का पूर्ण टर्नकी सेटअप।",
    fullDescription:
      "Engineered for high-volume commercial mushroom growers. Features 50mm-80mm PUF sandwich insulated walls to block 45°C external desert heat, heavy-duty 5-tier GI shelving accommodating 1,200 bags per 500 sq.ft, automated ultrasonic foggers, and positive-pressure HEPA fresh-air louvers.",
    fullDescriptionHi:
      "उच्च क्षमता वाले व्यावसायिक मशरूम उत्पादकों के लिए। 50-80mm PUF इंसुलेशन, 5-लेयर जीआई रैक्स, अल्ट्रासोनिक मिस्टिंग और HEPA एयर वेंटिलेशन से लैस मजबूत इनडोर ग्रो चैंबर्स।",
    heroImage: "/media/Industrial Oyster Mushroom Farm.png",
    gallery: [
      "/media/Industrial Oyster Mushroom Farm.png",
      "/products/Oyster Mushroom FRESH.png",
    ],
    keyFeatures: [
      "R-24 Thermal PUF Insulation Maintaining 24°C in 46°C Summers",
      "Corrosion-Resistant Heavy-Duty Galvanized Tiered Racks",
      "Industrial Multi-Head Ultrasonic Fogger with Digital Humidistat",
      "Positive-Pressure Filtered Air Circulation Flushing CO2",
      "Complete 500 to 5,000 sq.ft Scalable Turnkey Construction",
    ],
    keyFeaturesHi: [
      "तेज गर्मी में भी 24°C तापमान बनाए रखने वाले PUF पैनल्स",
      "जंग-रोधी मजबूत 5-लेयर जीआई ग्रो रैक्स",
      "डिजिटल आर्द्रता नियंत्रण के साथ इंडस्ट्रियल अल्ट्रासोनिक फॉगर",
      "CO2 बाहर निकालने और ताजी हवा देने वाला HEPA वेंटिलेशन",
      "500 से 5000 वर्गफुट तक मॉड्यूलर टर्नकी निर्माण",
    ],
    specifications: [
      { label: "Standard Room Size", value: "30ft x 16ft x 10ft (500 sq.ft module)" },
      { label: "PUF Panel Thickness", value: "50mm / 80mm Density 40 kg/m³" },
      { label: "Bag Capacity", value: "1,000 – 1,200 fruiting bags per 500 sq.ft" },
      { label: "Misting System", value: "Ultrasonic Sub-Micron Fog Generator" },
      { label: "Electrical Load", value: "3.5 kW peak / 1.8 kW average" },
      { label: "Warranty & Support", value: "1-Year On-Site Comprehensive Engineering Warranty" },
    ],
    applications: [
      "Commercial indoor gourmet mushroom enterprises",
      "FPO collective agro-processing units",
      "Dairy farm crop residue valorization centers",
    ],
    faqs: [
      {
        question: "How long does on-site chamber installation take?",
        answer: "A standard 500 sq.ft PUF chamber is erected, wired, and commissioned within 3 to 4 weeks from foundation readiness.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-12",
    slug: "azolla-bed-setup",
    name: "Heavy-Duty Modular Azolla Pond Bed Kit",
    nameHi: "हैवी-ड्यूटी मॉड्यूलर अजोला पॉन्ड बेड किट",
    category: "Azolla",
    categoryHi: "अजोला",
    shortDescription: "UV-stabilized 350 GSM multi-layer geomembrane pond beds with 50% green agro-shade netting.",
    shortDescriptionHi: "350 जीएसएम यूवी-स्टैबिलाइज्ड जियोमेम्ब्रेन लाइनर और 50% एग्रो शेडनेट के साथ अजोला बेड किट।",
    fullDescription:
      "Durable, easy-to-install pond bed kits designed to prevent groundwater seepage and withstand intense UV radiation. Includes 350 GSM virgin geomembrane liners, PVC corner frame anchors, 50% agro-shade net canopy, and organic bio-mineral starter mix for rapid multiplication.",
    fullDescriptionHi:
      "मजबूत और रिसाव-रहित अजोला बेड किट। 350 जीएसएम यूवी-स्टैबिलाइज्ड लाइनर, शेडनेट फ्रेम और जैविक पोषक तत्वों के साथ हर 48 घंटे में ताजा चारा तैयार करने का सिस्टम।",
    heroImage: "/products/AZOLLA.png",
    gallery: [
      "/products/AZOLLA.png",
      "/media/Hands Holding Lush Aquatic Greens.png",
      "https://www.jasagro.com/assets/img/slide/slide-2.jpg",
    ],
    keyFeatures: [
      "350 GSM Virgin Multi-Layer Geomembrane (100% Seepage Proof)",
      "50% Green Agro-Shade Netting Filtering Harsh Midday Sun",
      "Modular Dimensions: 10ft x 5ft x 1ft Depth",
      "Daily Output of 1.5–2.0 kg Fresh Super-Fodder per Bed",
      "5+ Years Outdoor Lifespan in Extreme Indian Weather",
    ],
    keyFeaturesHi: [
      "350 जीएसएम मजबूत वाटरप्रूफ जियोमेम्ब्रेन लाइनर",
      "50% ग्रीन शेडनेट जो तेज धूप से सुरक्षा देती है",
      "मानक आकार: 10x5x1 फीट गहराई",
      "प्रति बेड रोजाना 1.5 से 2.0 किग्रा ताजा चारा उपज",
      "कठिन मौसम में 5+ साल की लंबी लाइफ",
    ],
    specifications: [
      { label: "Bed Dimensions", value: "10ft Length x 5ft Width x 1ft Depth" },
      { label: "Tarpaulin GSM", value: "350 GSM Virgin Multi-Layer UV-Stabilized" },
      { label: "Water Capacity", value: "350 – 400 Liters" },
      { label: "Daily Harvest", value: "1.5 kg – 2.0 kg Fresh Biomass" },
      { label: "Lifespan", value: "5+ Years UV Resistance" },
    ],
    applications: [
      "Dairy farms reducing cattle feed and concentrate expenses",
      "Gaushalas seeking continuous low-cost green fodder",
      "Backyard poultry, goat, and aquaculture units",
    ],
    faqs: [
      {
        question: "How many beds are needed for a dairy farm with 5 cows?",
        answer: "For 5 dairy cows (consuming 1.5 to 2.0 kg Azolla each daily), we recommend 5 to 6 standard 10x5 ft beds to ensure a steady 8–10 kg daily harvest.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-13",
    slug: "azolla-cultivation-process",
    name: "Azolla Cultivation & Skimming Protocol",
    nameHi: "अजोला उत्पादन एवं कटाई प्रबंधन विधि",
    category: "Azolla",
    categoryHi: "अजोला",
    shortDescription: "Daily nutrient inoculation, cow dung slurry replenishment, water level balancing, and mesh skimming technique.",
    shortDescriptionHi: "गोबर-घोल पोषण, पानी का स्तर नियंत्रण, जाल से दैनिक कटाई और कल्चर सुरक्षा की मानक विधि।",
    fullDescription:
      "A proven operational protocol for maintaining perpetual Azolla pinnata cultures. Details pond bed soil preparation with fertile loam and single super phosphate, slurry top-up every 10–12 days, water hygiene maintenance, and daily perforated mesh skimming to keep mat thickness at optimal photosynthetic density.",
    fullDescriptionHi:
      "अजोला की निरंतर पैदावार बनाए रखने की वैज्ञानिक विधि। उपजाऊ मिट्टी और गोबर के घोल का अनुपात, 10-12 दिनों में पोषण टॉप-अप, पानी की स्वच्छता और रोजाना की आसान कटाई तकनीक।",
    heroImage: "/media/Hands Holding Lush Aquatic Greens.png",
    gallery: [
      "/media/Hands Holding Lush Aquatic Greens.png",
      "/products/AZOLLA.png",
    ],
    keyFeatures: [
      "Doubles Green Biomass Every 48 to 72 Hours",
      "Requires Zero Chemical Nitrogenous Fertilizer",
      "Maintains 25%–30% Crude Protein Content",
      "Replaces 25% of Commercial Cattle Feed Rations",
      "Simple 15-Minute Daily Maintenance Routine",
    ],
    keyFeaturesHi: [
      "हर 48 से 72 घंटे में बायोमास दोगुना",
      "बिना किसी रासायनिक यूरिया या खाद के उत्पादन",
      "25-30% कच्चा प्रोटीन लगातार बरकरार",
      "दाना-खली के खर्च में 25% की सीधी बचत",
      "रोजाना केवल 15 मिनट की सरल देखभाल",
    ],
    specifications: [
      { label: "Optimal Water Temp", value: "20°C – 32°C" },
      { label: "Water Depth", value: "10 cm – 15 cm standing water" },
      { label: "Water pH", value: "6.5 – 7.5 (Neutral to slightly acidic)" },
      { label: "Slurry Refresh Rate", value: "1 kg fresh cow dung dissolved every 10 days per bed" },
      { label: "Harvest Tool", value: "Fine Plastic Mesh Skimming Net" },
    ],
    applications: [
      "Dairy cattle, buffalo, goat, and poultry feeding programs",
      "Natural nitrogen bio-fertilization for organic paddy crops",
    ],
    faqs: [
      {
        question: "Should Azolla be washed before feeding to livestock?",
        answer: "Yes. Freshly skimmed Azolla should be rinsed in a bucket of clean water to remove any clinging dung slurry odor before mixing with cattle feed.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-14",
    slug: "cultivation-and-harvest",
    name: "Hybrid Super Napier Cultivation & Harvest Management",
    nameHi: "हाइब्रिड सुपर नेपियर रोपाई एवं कटाई प्रबंधन",
    category: "Napier Grass",
    categoryHi: "नेपियर घास",
    shortDescription: "3x2 ft stem slip transplanting, drip fertigation, ratoon maintenance, and 45-day cutting cycles.",
    shortDescriptionHi: "3x2 फीट कलम रोपाई, ड्रिप पोषण, ठूंठ प्रबंधन और हर 45 दिन में रिन्यू होने वाली कटाई चक्र।",
    fullDescription:
      "A complete field management protocol for Super Napier (Pakchong 1 / CO-5). Covers two-node mature stem cutting preparation, ridging and spacing at 3x2 ft, initial basal manuring, ratoon inter-cultivation, and cutting at ground level every 45–55 days to yield 200+ tonnes of high-protein forage annually for 5 years.",
    fullDescriptionHi:
      "सुपर नेपियर घास की सफल खेती का संपूर्ण गाइड। 3x2 फीट पर दो-आंख वाली कलमों की रोपाई, गोबर खाद पोषण और जमीन से 2-3 इंच ऊपर कटाई की तकनीक जिससे 5 साल तक हर 45 दिन में बंपर चारा मिलता रहे।",
    heroImage: "/media/Lush Green Forage Grass Field.png",
    gallery: [
      "/media/Lush Green Forage Grass Field.png",
      "https://www.jasagro.com/assets/img/blog/Napior.png",
    ],
    keyFeatures: [
      "200–250 MT Fresh Green Fodder per Acre Annually",
      "6 to 8 Harvests per Year on a Single Planting",
      "Soft, Thornless Sweet Stems with 14%–18% Crude Protein",
      "4–5 Years Continuous Multi-Cut Perennial Longevity",
      "High Drought Tolerance with Deep Underground Root System",
    ],
    keyFeaturesHi: [
      "सालाना 200 से 250 टन प्रति एकड़ ताजा हरा चारा",
      "एक बार लगाने पर साल में 6 से 8 बार ताजा कटाई",
      "मुलायम, कांटे-रहित मीठे तने और 14-18% प्रोटीन",
      "4 से 5 साल तक लगातार फसल देने वाला बहुवर्षीय चारा",
      "गहरी जड़ों के कारण तेज गर्मी और सूखे में भी टिकाऊ",
    ],
    specifications: [
      { label: "Planting Spacing", value: "3ft x 2ft or 4ft x 2ft on ridges" },
      { label: "Slips Required per Acre", value: "10,000 to 11,000 mature stem cuttings" },
      { label: "First Harvest", value: "75 – 90 Days after planting" },
      { label: "Subsequent Cuts", value: "Every 45 – 55 Days" },
      { label: "Plant Height at Cut", value: "8 – 10 Feet (Sugar peak stage)" },
    ],
    applications: [
      "Commercial dairy forage security programs",
      "Silage bunker production for dry season reserves",
      "Goat, sheep, and equestrian roughage supply",
    ],
    faqs: [
      {
        question: "Why should Super Napier be cut close to the ground?",
        answer: "Cutting 2–3 inches above ground level stimulates dormant underground nodal buds, producing 40–50 thick new tillers in the next cycle.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-15",
    slug: "fodder-silage-management",
    name: "High-Density Forage & Silage Management Systems",
    nameHi: "उच्च-गुणवत्ता हरा चारा एवं साइलेज प्रबंधन",
    category: "Napier Grass",
    categoryHi: "नेपियर घास",
    shortDescription: "Anaerobic bunker compaction, lactic fermentation inoculants, and silage bale preservation.",
    shortDescriptionHi: "अवायवीय साइलेज बंकर, लैक्टिक किण्वन कल्चर और सालभर चारे के भंडारण की तकनीक।",
    fullDescription:
      "Advanced silage preservation systems for surplus summer and monsoon forage. Utilizing precision chaff cutters (1.5-2.0 cm cut length), biological lactic acid bacteria (LAB) inoculants, and heavy-duty 150-micron oxygen-barrier silage sheets to store succulent, sweet green fodder for up to 2 years with zero nutrient degradation.",
    fullDescriptionHi:
      "गर्मी और सूखे मौसम के लिए चारे को संरक्षित करने की आधुनिक साइलेज तकनीक। 1.5 सेमी बारीक कुट्टी, लैक्टिक एसिड कल्चर और एयर-टाइट बंकर पैकिंग जिससे चारा 2 साल तक ताजा और पौष्टिक बना रहता है।",
    heroImage: "/media/Lush Green Forage Grass Field.png",
    gallery: [
      "/media/Lush Green Forage Grass Field.png",
      "https://www.jasagro.com/assets/img/slide/slide-3.jpg",
    ],
    keyFeatures: [
      "Year-Round Green Nutrition Regardless of Summer Heat or Drought",
      "Preserves 95% of Natural Forage Protein and Energy",
      "Lactic Fermentation Enhances Rumen Digestibility & Milk Yield",
      "Stores Safely in Pits, Drums, or Bunkers for up to 24 Months",
      "Completely Eliminates Daily Fodder Harvesting Emergencies",
    ],
    keyFeaturesHi: [
      "सूखे या भीषण गर्मी में भी सालभर हरे चारे की सुरक्षा",
      "चारे के 95% प्रोटीन और ऊर्जा को सुरक्षित रखता है",
      "लैक्टिक किण्वन से पचने में आसान और दूध उत्पादन में सुधार",
      "बंकर या ड्रम में 24 महीने तक बिना खराब हुए सुरक्षित",
      "रोज-रोज खेत से चारा काटने के झंझट से मुक्ति",
    ],
    specifications: [
      { label: "Optimal Moisture for Ensiling", value: "65% – 70%" },
      { label: "Chaff Cut Length", value: "1.5 cm to 2.5 cm" },
      { label: "Target Silage pH", value: "3.8 – 4.2 (Stable lactic acid state)" },
      { label: "Fermentation Duration", value: "45 Days sealed airtight" },
      { label: "Silage Bunker Density", value: "650 – 750 kg/m³ compacted" },
    ],
    applications: [
      "Commercial dairy farms ensuring feed buffer against fodder price spikes",
      "Gaushalas managing bulk monsoon forage surpluses",
      "Commercial silage baling and trade enterprises",
    ],
    faqs: [
      {
        question: "How long can properly packed silage be stored?",
        answer: "Under airtight anaerobic conditions with UV-resistant silage sheeting, Super Napier silage remains fresh, fragrant, and highly nutritious for 18 to 24 months.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-16",
    slug: "vermicomposting-process",
    name: "Commercial Vermicomposting & Humification Process",
    nameHi: "वाणिज्यिक वर्मीकंपोस्टिंग एवं केंचुआ खाद विधि",
    category: "Vermicompost",
    categoryHi: "वर्मीकंपोस्ट",
    shortDescription: "Pre-decomposition cooling, Eisenia fetida seeding, moisture regulation, and rotary trommel sieving.",
    shortDescriptionHi: "गोबर की प्राथमिक ठंडाई, ऑस्ट्रेलियन रेड वर्म संवर्धन, नमी नियंत्रण और छनाई प्रक्रिया।",
    fullDescription:
      "A complete commercial protocol for turning cattle dung, spent mushroom substrate, and crop residues into dark, crumbly organic gold. Covers 10-day thermophilic heat dissipation, bedding inoculation with Australian Red Earthworms (Eisenia fetida), 65% moisture maintenance, and 3mm mechanical trommel screening for premium granule output.",
    fullDescriptionHi:
      "गोबर और कृषि कचरे से शुद्ध केंचुआ खाद बनाने की संपूर्ण वैज्ञानिक विधि। प्राथमिक ठंडाई, आइसीनिया फेटिडा केंचुओं का संवर्धन, 65% नमी संतुलन और रोटरी छलनी से प्रीमियम दानेदार खाद की पैकेजिंग।",
    heroImage: "/media/Hands Holding Rich Compost.png",
    gallery: [
      "/media/Hands Holding Rich Compost.png",
      "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
    ],
    keyFeatures: [
      "60-Day Fast Bioconversion with Active Eisenia Fetida Worms",
      "100% Odorless, Pathogen-Free & Weed-Seed Free Granules",
      "5x Higher Bio-Available NPK than Raw Farmyard Dung",
      "Integrated Vermiwash Extraction Producing Liquid Growth Tonic",
      "High Humic and Fulvic Acid Content Rebuilding Soil Biology",
    ],
    keyFeaturesHi: [
      "60 दिनों में केंचुओं द्वारा जैविक कचरे का तीव्र रूपांतरण",
      "100% गंधहीन, खरपतवार मुक्त और भुरभुरी दानेदार खाद",
      "कच्चे गोबर से 5 गुना अधिक सुलभ प्राकृतिक NPK",
      "साथ में तरल वर्मीवाश टॉनिक का निष्कर्षण",
      "ह्यूमिक और फुल्विक एसिड से भरपूर जैविक संरचना",
    ],
    specifications: [
      { label: "Worm Inoculation Rate", value: "1.0 kg to 1.5 kg Eisenia fetida per meter of bed" },
      { label: "Bed Moisture Level", value: "60% – 70% (Sprinkled daily in summer)" },
      { label: "Bed Temperature", value: "20°C – 30°C optimal range" },
      { label: "Composting Cycle Duration", value: "60 – 75 Days per batch" },
      { label: "Sieve Mesh Size", value: "3mm – 4mm Rotary Trommel" },
    ],
    applications: [
      "Commercial organic fertilizer bagging and retail brands",
      "Dairy farm dung waste management and circular profitability",
      "Horticulture orchards, polyhouses, and kitchen gardens",
    ],
    faqs: [
      {
        question: "Why must fresh cow dung be pre-cooled before adding earthworms?",
        answer: "Fresh cow dung generates high fermentation heat (up to 60°C) and methane gas. Pre-cooling with water for 7–10 days ensures temperatures drop below 30°C, making it safe for earthworms.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-17",
    slug: "soil-organic-matter",
    name: "Biological Soil Organic Matter & Humus Inoculants",
    nameHi: "जैविक मृदा कार्बन एवं माइक्रोबियल ह्यूमस संवर्धन",
    category: "Vermicompost",
    categoryHi: "वर्मीकंपोस्ट",
    shortDescription: "Pure earthworm humus, vesicular-arbuscular mycorrhizae (VAM), and concentrated liquid vermiwash.",
    shortDescriptionHi: "शुद्ध केंचुआ ह्यूमस, माइकोराइजा फंगस और कंसंट्रेटेड तरल वर्मीवाश स्प्रे।",
    fullDescription:
      "A biological soil treatment suite engineered to reverse chemical soil exhaustion. Combines screened vermicompost castings loaded with beneficial actinomycetes, endo-mycorrhizae fungi spores, and concentrated liquid vermiwash containing plant auxins and cytokinins to revitalize compacted soil structure and unlock phosphorus.",
    fullDescriptionHi:
      "मिट्टी की उर्वरता को दोबारा जीवित करने वाला संपूर्ण जैविक समाधान। केंचुआ खाद, माइकोराइजा फंगस और तरल वर्मीवाश का प्राकृतिक मिश्रण जो सख्त जमीन को भुरभुरा बनाता है और पौधों की जड़ें मजबूत करता है।",
    heroImage: "/media/soil3.png",
    gallery: [
      "/media/soil3.png",
      "/media/Hands Holding Rich Compost.png",
    ],
    keyFeatures: [
      "Elevates Soil Organic Carbon (SOC) by 0.5%–0.8% across 2 Seasons",
      "Mycorrhizae Extends Root Surface Area by up to 700%",
      "Buffers High Soil Electrical Conductivity (EC) and Alkaline pH",
      "Improves Water Retention by 40%, Reducing Irrigation Needs",
      "100% NPOP and USDA Organic Certification Compliant",
    ],
    keyFeaturesHi: [
      "2 फसलों में मिट्टी के जैविक कार्बन में 0.5% से 0.8% की वृद्धि",
      "माइकोराइजा से जड़ों का फैलाव 7 गुना तक बढ़ता है",
      "खारेपन और अत्यधिक pH को संतुलित करने में सहायक",
      "मिट्टी में नमी रोकने की क्षमता 40% तक सुधरती है",
      "100% जैविक प्रमाणीकरण के अनुकूल",
    ],
    specifications: [
      { label: "Organic Carbon Content", value: "> 18% in dried vermicast" },
      { label: "Microbial Count", value: "> 10^8 CFU/g active beneficial bacteria" },
      { label: "pH Range", value: "6.8 – 7.4 (Neutral buffer)" },
      { label: "Heavy Metals", value: "Below NPOP detection limits" },
      { label: "Packaging", value: "25kg / 50kg Heavy-Duty HDPE Bags & 5L Vermiwash Cans" },
    ],
    applications: [
      "Soil reclamation in high-salinity and arid agricultural belts",
      "Export-grade pomegranate, citrus, and mango orchards",
      "Chemical-free vegetable and greenhouse nursery cultivation",
    ],
    faqs: [
      {
        question: "How does vermiwash liquid spray differ from vermicompost solid manure?",
        answer: "Solid vermicompost provides slow-release root nutrition and builds soil humus. Liquid vermiwash is an instant foliar bio-stimulant containing plant growth hormones (auxins, gibberellins) and disease-suppressing microbes absorbed directly through leaves.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-18",
    slug: "climate-monitoring",
    name: "Micro-Climate & VPD Farm Telemetry Node",
    nameHi: "माइक्रो-क्लाइमेट एवं VPD फार्म टेलीमेट्री नोड",
    category: "IoT Smart Farming",
    categoryHi: "IoT Smart Farming",
    shortDescription: "Ultra-accurate ambient temperature, relative humidity, light lux, and Vapor Pressure Deficit (VPD) sensor node.",
    shortDescriptionHi: "सटीक तापमान, सापेक्ष आर्द्रता, प्रकाश और VPD मापन वाला सोलर पावर्ड IoT सेंसर नोड।",
    fullDescription:
      "A commercial-grade agricultural climate telemetry node. Fitted with calibrated Sensirion SHT31 temperature and humidity sensors, silicon pyranometer, and LoRaWAN long-range radio transmitter. Computes real-time Vapor Pressure Deficit (VPD) to protect high-value greenhouse, polyhouse, and mushroom crops from environmental shock.",
    fullDescriptionHi:
      "वाणिज्यिक स्तर का स्मार्ट क्लाइमेट सेंसर नोड। स्विस सेंसिरियन सेंसर, धूप मापक और LoRaWAN वायरलेस ट्रांसमीटर के साथ खुले खेत, पॉलीहाउस और मशरूम चैंबर के अंदरूनी मौसम की 24x7 सटीक निगरानी।",
    heroImage: "/media/sun2.png",
    gallery: [
      "/media/sun2.png",
      "/media/smartagri4.png",
    ],
    keyFeatures: [
      "High-Accuracy Sensirion SHT31 Probe (±0.2°C / ±2% RH)",
      "Real-Time On-Board Vapor Pressure Deficit (VPD) Computation",
      "Long-Range LoRaWAN Wireless Mesh (Up to 5 km Range)",
      "Solar Powered with Internal 6000mAh LiFePO4 Battery Backup",
      "Weatherproof IP66 UV-Stabilized Polycarbonate Enclosure",
    ],
    keyFeaturesHi: [
      "उच्च सटीकता वाला स्विस सेंसिरियन SHT31 सेंसर",
      "रियल-टाइम VPD कैलकुलेशन जिससे पौधों में तनाव न हो",
      "बिना इंटरनेट के 5 किमी दूर तक LoRaWAN वायरलेस रेंज",
      "सोलर पैनल और लिथियम बैटरी के साथ 24x7 एक्टिव",
      "वाटरप्रूफ IP66 केसिंग जो धूप और बारिश में सुरक्षित रहती है",
    ],
    specifications: [
      { label: "Temp Range", value: "-40°C to +85°C (±0.2°C accuracy)" },
      { label: "Humidity Range", value: "0% to 100% RH (±2% RH accuracy)" },
      { label: "Light Range", value: "0 to 188,000 Lux" },
      { label: "Transmission Protocol", value: "LoRaWAN 865–867 MHz (India ISM)" },
      { label: "Power Source", value: "5W Solar Panel + LiFePO4 Battery" },
    ],
    applications: [
      "Mushroom grow chamber climate balancing",
      "Greenhouse and polyhouse micro-climate control",
      "Open orchard frost and heatwave alert monitoring",
    ],
    faqs: [
      {
        question: "How does the climate node alert the farmer during extreme heat?",
        answer: "The node syncs live data every 15 seconds to the central gateway, which triggers immediate WhatsApp and SMS alarms when temperatures or VPD exceed configured safety thresholds.",
      },
    ],
    isFeatured: false,
  },
  {
    id: "prod-19",
    slug: "automated-farm-control",
    name: "Automated Industrial Farm Actuator & Relay Panel",
    nameHi: "ऑटोमेटेड इंडस्ट्रियल फार्म एक्चुएटर रिले पैनल",
    category: "IoT Smart Farming",
    categoryHi: "IoT Smart Farming",
    shortDescription: "Closed-loop optoisolated relay panel controlling irrigation solenoids, misting pumps, and ventilation exhaust.",
    shortDescriptionHi: "सिंचाई सोलेनोइड, मिस्टिंग पंप और पंखों को सेंसर अनुसार चलाने वाला ऑटोमेशन पैनल।",
    fullDescription:
      "A rugged agricultural automation panel engineered for harsh farm environments. Interfaces directly with 3-phase submersible pump starters, 24V DC solenoid valves, ultrasonic misting foggers, and exhaust fans. Operates local closed-loop automation rules offline with fail-safe dry-run and phase-asymmetry motor protections.",
    fullDescriptionHi:
      "खेतों के कठिन वातावरण के लिए तैयार मजबूत ऑटोमेशन पैनल। 3-फेज पंप स्टार्टर, ड्रिप वाल्व, मिस्टिंग फॉगर्स और एग्जॉस्ट पंखों को सेंसर के आधार पर बिना मानवीय हस्तक्षेप के संचालित करता है।",
    heroImage: "/media/smartagri4.png",
    gallery: [
      "/media/smartagri4.png",
      "/media/sun2.png",
    ],
    keyFeatures: [
      "4 to 16 Isolated 16A Solid-State Relays with Manual Bypass",
      "Zero-Internet Offline Deterministic Automation Engine",
      "Built-In Dry-Run, Over-Current & Phase-Reversal Motor Protection",
      "Direct Mobile Smartphone Remote Control from Anywhere",
      "Modular DIN-Rail Mounted Industrial IP65 Enclosure",
    ],
    keyFeaturesHi: [
      "मैन्युअल बाईपास स्विच के साथ 4 से 16 स्वतंत्र रिले चैनल्स",
      "बिना इंटरनेट के भी 100% सुचारू रूप से चलने वाला ऑन-बोर्ड सिस्टम",
      "मोटर को ड्राई-रन और बिजली के उतार-चढ़ाव से बचाने की सुरक्षा",
      "कहीं से भी मोबाइल ऐप से एक क्लिक में ऑन/ऑफ करने की सुविधा",
      "वॉटरप्रूफ IP65 इंडस्ट्रियल पैनल बॉडी",
    ],
    specifications: [
      { label: "Relay Channels", value: "4 / 8 / 16 Independent Optoisolated Ports" },
      { label: "Switching Capacity", value: "16A @ 250V AC per channel" },
      { label: "Motor Support", value: "Up to 15 HP 3-Phase Starters via Contactor Coil" },
      { label: "Enclosure Rating", value: "IP65 Weatherproof Polycarbonate with Lock" },
      { label: "Input Power", value: "110–240V AC / 12V DC Solar Compatible" },
    ],
    applications: [
      "Automated mushroom room misting and exhaust cycles",
      "Multi-zone drip fertigation across commercial crop blocks",
      "Dairy cattle shed cooling fan and misting automation",
    ],
    faqs: [
      {
        question: "Can I manually turn on a pump if I don't want to use automation?",
        answer: "Yes! Every relay channel has an illuminated manual rocker override switch on the front panel, allowing instant physical control anytime.",
      },
    ],
    isFeatured: false,
  },
];

