export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleHi?: string;
  category: string;
  categoryHi?: string;
  readTime: string;
  readTimeHi?: string;
  publishedAt: string;
  image: string;
  excerpt: string;
  excerptHi?: string;
  content: string[];
  contentHi?: string[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "benefits-of-oyster-mushroom-cultivation",
    title: "Benefits of Oyster Mushroom Cultivation: A High-Yield Agri-Business",
    titleHi: "ऑयस्टर मशरूम Farming के फायदे: High Return Agri-Business",
    category: "Mushroom Farming",
    categoryHi: "मशरूम फार्मिंग",
    readTime: "5 min read",
    readTimeHi: "5 min read",
    publishedAt: "September 05, 2026",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Explore why oyster mushrooms offer one of the highest returns per square foot in indoor agriculture, requiring minimal water and short growth cycles.",
    excerptHi:
      "जानिए क्यों Oyster Mushroom indoor setup में सबसे ज़्यादा profit देता है, जिसमें कम जगह, कम पानी और fast growth cycles होते हैं।",
    content: [
      "Oyster mushroom (Pleurotus ostreatus) cultivation has emerged as one of the most profitable, space-efficient agri-enterprises globally. Unlike traditional crops that depend on expansive outdoor acreage and seasonal rainfall, oyster mushrooms are cultivated indoors on pasteurized agricultural waste such as wheat or paddy straw.",
      "The biological efficiency of oyster mushrooms can reach 80% to 100%, meaning 1 kilogram of dry straw can produce nearly 1 kilogram of fresh mushrooms across 2 to 3 harvest flushes within 30 days.",
      "Integrating IoT climate controllers enables growers to maintain temperature between 22°C and 26°C and relative humidity above 85%. Automated misters and exhaust fans guarantee optimal pileus expansion and prevent fungal disease, producing pristine gourmet mushrooms.",
    ],
    contentHi: [
      "Oyster Mushroom (Pleurotus ostreatus) की खेती दुनिया भर में सबसे profitable और space-efficient agri-businesses में से एक बन चुकी है। ज़मीन और बारिश पर निर्भर पारंपरिक खेती के उलट, ऑयस्टर मशरूम indoor pasteurized agricultural waste (जैसे गेहूं/धान का भूसा) पर उगाए जाते हैं।",
      "Oyster Mushroom की Biological Efficiency 80% से 100% तक होती है – यानी 1 kg सूखे भूसे से 30 दिनों के अंदर 2-3 flushes में करीब 1 kg fresh mushroom मिलता है।",
      "IoT Climate Controllers लगाने से Temperature 22°C-26°C और Humidity 85% से ऊपर maintain रहती है। Automatic misters और exhaust fans से बेहतरीन quality के gourmet mushrooms तैयार होते हैं।",
    ],
    tags: ["Mushroom", "Agri-Tech", "Smart Farming", "Organic"],
  },
  {
    id: "post-2",
    slug: "understanding-azolla-farming-for-livestock",
    title: "Understanding Azolla Farming: The Super Fodder Revolutionizing Dairy",
    titleHi: "Azolla Farming को समझें: Dairy Feed Cost कम करने वाला Super Fodder",
    category: "Sustainable Livestock",
    categoryHi: "Sustainable Livestock",
    readTime: "4 min read",
    readTimeHi: "4 min read",
    publishedAt: "August 28, 2026",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Azolla is an aquatic fern packed with 25-30% crude protein that dramatically lowers commercial cattle feed costs while boosting milk yield.",
    excerptHi:
      "Azolla 25-30% Protein से भरपूर एक जलीय पौधा (fern) है जो milk yield बढ़ाते हुए dairy feed cost को 20-30% कम करता है।",
    content: [
      "Feed costs typically account for 60% to 70% of total expenditure in commercial dairy farming. High prices of oil cakes and concentrate feeds frequently squeeze profit margins. Azolla pinnata offers a sustainable, zero-chemical solution.",
      "Floating on shallow shade ponds, Azolla fixes atmospheric nitrogen in symbiosis with Anabaena azollae cyanobacteria. It rapidly doubles its biomass every 3 to 4 days, producing continuous fresh green fodder daily.",
      "Studies show that supplementing dairy cattle diets with 1.5 to 2 kg of fresh Azolla daily improves milk fat percentage and overall yield by 10-15%, making it an indispensable asset for sustainable dairy management.",
    ],
    contentHi: [
      "Commercial Dairy Farming में पशु आहार (feed) की लागत कुल ख़र्चे का 60-70% होती है। महंगे बाज़ारी दाने profit margin कम कर देते हैं। Azolla pinnata एक natural और organic solution है।",
      "Shade-net ponds पर तैरने वाला Azolla हर 3-4 दिन में अपना biomass double कर लेता है, जिससे रोज़ाना fresh green fodder मिलता है।",
      "Research दिखाती है कि मवेशियों की diet में 1.5 से 2 kg fresh Azolla शामिल करने से milk yield और fat percentage 10-15% तक बढ़ जाता है।",
    ],
    tags: ["Azolla", "Dairy Farming", "Fodder", "Sustainability"],
  },
  {
    id: "post-3",
    slug: "why-organic-manure-vermicompost-matters",
    title: "Why Organic Manure & Vermicompost Matter for Soil Health",
    titleHi: "Soil Health के लिए Vermicompost और Organic Manure क्यों ज़रूरी है",
    category: "Soil Science",
    categoryHi: "Soil Health & Organic",
    readTime: "6 min read",
    readTimeHi: "6 min read",
    publishedAt: "August 18, 2026",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Chemical fertilizers degrade soil microflora over time. Discover how earthworm bio-conversion restores organic carbon and water retention.",
    excerptHi:
      "Chemical fertilizers समय के साथ मिट्टी की क्वालिटी ख़राब कर देते हैं। जानिए कैसे Vermicompost organic carbon और moisture retention को वापस सुधारता है।",
    content: [
      "Intensive synthetic fertilizer use over past decades has reduced organic matter content in topsoil, causing soil compaction, reduced water-holding capacity, and depletion of essential soil micro-organisms.",
      "Vermicomposting uses epigeic earthworms like Eisenia fetida to digest cattle manure and organic residue, producing nutrient-rich humus filled with bio-available nitrogen, phosphorus, potassium, and trace minerals.",
      "Applying vermicompost enhances soil porosity, fosters beneficial mycorrhizal fungi, and reduces crop water requirements by up to 30% by retaining soil moisture in root zones.",
    ],
    contentHi: [
      "लगातार chemical fertilizers के इस्तेमाल से मिट्टी में organic carbon कम हुआ है, जिससे मिट्टी कड़क हो गई है और पानी रोकने की क्षमता घट गई है।",
      "Vermicomposting में Eisenia fetida केंचुए गोबर और कृषि वेस्ट को पचाकर bio-available NPK और micronutrients से भरपूर humus बनाते हैं।",
      "Vermicompost इस्तेमाल करने से मिट्टी की fertility बढ़ती है और फसलों में पानी की ज़रूरत 30% तक कम होती है।",
    ],
    tags: ["Vermicompost", "Soil Health", "Organic Manure", "Biofertilizer"],
  },
  {
    id: "post-4",
    slug: "hybrid-napier-grass-for-livestock-security",
    title: "Hybrid Napier Grass: Maximizing High-Biomass Green Fodder",
    titleHi: "Hybrid Napier Grass: 365 दिन भरपूर हरा चारा",
    category: "Fodder Crop",
    categoryHi: "Fodder Crop",
    readTime: "4 min read",
    readTimeHi: "4 min read",
    publishedAt: "August 10, 2026",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Discover how Super Napier produces over 180 tons of green fodder per acre annually with multi-cut harvests spanning 4-5 years.",
    excerptHi:
      "जानिए Super Napier प्रति एकड़ प्रति साल 180+ tons हरा चारा कैसे देता है और 4-5 सालों तक continuous harvesting देता है।",
    content: [
      "Securing round-the-year green fodder is a major challenge for livestock producers. Hybrid Napier grass (Super Napier / CO-5) solves fodder shortages by delivering soft, palatable, nutrient-dense forage.",
      "Once established via rooted slips, Super Napier yields its first harvest in 75 days, followed by subsequent cuts every 45 to 50 days. A single planting remains productive for up to 5 years.",
      "With crude protein levels between 11% and 14%, Napier grass can be fed fresh or preserved as high-quality silage for summer drought periods.",
    ],
    contentHi: [
      "साल भर हरा चारा तैयार रखना डेयरी किसानों के लिए बड़ा challenge है। Hybrid Napier Grass (Super Napier / CO-5) soft और nutrient-rich fodder का पक्का solution है।",
      "Rooted slips लगाने के 75 दिन बाद पहली कटाई मिलती है, और फिर हर 45-50 दिन में repeat harvesting होती है। एक बार लगाकर 5 साल तक लगातार फसल पाएं।",
      "11-14% crude protein के साथ यह घास ताज़ा खिलाई जा सकती है या गर्मियों के लिए Silage बनाकर store की जा सकती है।",
    ],
    tags: ["Napier Grass", "Fodder", "Livestock", "Green Feed"],
  },
  {
    id: "post-5",
    slug: "how-iot-is-transforming-modern-agriculture",
    title: "How IoT & Microcontrollers Are Transforming Smart Agriculture",
    titleHi: "How IoT & Sensors Smart Farming को बदल रहे हैं",
    category: "Agri-Tech",
    categoryHi: "Agri-Tech",
    readTime: "7 min read",
    readTimeHi: "7 min read",
    publishedAt: "July 29, 2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "From ESP32 sensor telemetry to cloud dashboard alerts, see how precision monitoring optimizes mushroom grow rooms and greenhouse yields.",
    excerptHi:
      "ESP32 sensor telemetry से लेकर cloud dashboard alerts तक, जानिए कैसे automation मशरूम grow rooms और green houses की yield बढ़ाता है।",
    content: [
      "Precision agriculture relies on real-time environmental data to eliminate guesswork in farming. Microcontrollers like the ESP32 paired with DHT22 temperature-humidity sensors and capacitive soil moisture probes allow continuous micro-climate monitoring.",
      "In Oyster Mushroom cultivation, relative humidity dropping below 80% can cause cap drying and crop failure. IoT telemetry detects humidity drops instantly and activates fogging misters automatically.",
      "By transmitting data to cloud dashboards, farmers receive instant alerts on mobile devices, preventing crop losses and optimizing energy and water usage.",
    ],
    contentHi: [
      "Precision farming अंदाज़े पर नहीं बल्कि live environmental data पर काम करती है। ESP32 microcontrollers और DHT22 sensors 24/7 micro-climate monitoring करते हैं।",
      "Oyster Mushroom cultivation में relative humidity 80% से नीचे जाते ही फसल ख़राब हो सकती है। IoT telemetry नमी कम होते ही fogging misters को automatically on कर देती है।",
      "Cloud dashboard पर data sync होने से किसानों को mobile पर instant alerts मिलते हैं, जिससे crop loss बचता है और energy/water usage optimize होता है।",
    ],
    tags: ["IoT", "ESP32", "Smart Farming", "Sensors", "Automation"],
  },
];
