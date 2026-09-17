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
];
