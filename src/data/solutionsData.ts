export interface SolutionSubItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  desc: {
    en: string;
    hi: string;
  };
  href: string;
  badge?: {
    en: string;
    hi: string;
  };
  iconName: string;
}

export interface SolutionCategory {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  iconName: string;
  items: SolutionSubItem[];
}

export interface SolutionMetric {
  label: { en: string; hi: string };
  value: string;
  detail: { en: string; hi: string };
}

export interface SolutionPillar {
  title: { en: string; hi: string };
  desc: { en: string; hi: string };
  iconName: string;
  tag?: { en: string; hi: string };
}

export interface SolutionSpec {
  label: { en: string; hi: string };
  value: string;
}

export interface SolutionFAQ {
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
}

export interface SolutionDetail {
  slug: string;
  category: { en: string; hi: string };
  name: { en: string; hi: string };
  tagline: { en: string; hi: string };
  badge: { en: string; hi: string };
  heroDescription: { en: string; hi: string };
  heroImage: string;
  metrics: SolutionMetric[];
  overviewHeading: { en: string; hi: string };
  overviewText: { en: string; hi: string };
  pillars: SolutionPillar[];
  specs: SolutionSpec[];
  applications: { en: string; hi: string }[];
  faqs: SolutionFAQ[];
  relatedSlugs: string[];
}

export const SOLUTIONS_MEGA_MENU: SolutionCategory[] = [
  {
    id: "cultivation",
    title: {
      en: "Cultivation",
      hi: "कृषि एवं उत्पादन",
    },
    subtitle: {
      en: "Biological Crop & Fodder Systems",
      hi: "जैविक फसल एवं चारा प्रणालियाँ",
    },
    iconName: "Sprout",
    items: [
      {
        id: "oyster-mushroom",
        name: {
          en: "Oyster Mushroom",
          hi: "ऑयस्टर मशरूम",
        },
        desc: {
          en: "Climate-controlled high-yield indoor fruiting rooms",
          hi: "जलवायु-नियंत्रित उच्च उपज इंडोर फ्रूटिंग चैंबर",
        },
        href: "/solutions/oyster-mushroom",
        badge: { en: "High Yield", hi: "उच्च उपज" },
        iconName: "Sparkles",
      },
      {
        id: "azolla-farming",
        name: {
          en: "Azolla Farming",
          hi: "अजोला फार्मिंग",
        },
        desc: {
          en: "25-30% crude protein aquatic micro-fern ponds",
          hi: "25-30% कच्चा प्रोटीन युक्त जलीय सूक्ष्म-फर्न तालाब",
        },
        href: "/solutions/azolla-farming",
        badge: { en: "Super Fodder", hi: "सुपर चारा" },
        iconName: "Waves",
      },
      {
        id: "hybrid-napier",
        name: {
          en: "Hybrid Napier",
          hi: "हाइब्रिड नेपियर",
        },
        desc: {
          en: "200+ tonnes/acre annual multi-cut forage grass",
          hi: "200+ टन/एकड़ वार्षिक बहुवर्षीय हरा चारा",
        },
        href: "/solutions/hybrid-napier",
        badge: { en: "High Biomass", hi: "अधिक बायोमास" },
        iconName: "Wheat",
      },
      {
        id: "vermicompost",
        name: {
          en: "Vermicompost",
          hi: "वर्मीकंपोस्ट",
        },
        desc: {
          en: "Eisenia fetida active microbial organic compost beds",
          hi: "सक्रिय माइक्रोबियल जैविक केंचुआ खाद उत्पादन",
        },
        href: "/solutions/vermicompost",
        badge: { en: "100% Bio", hi: "100% जैविक" },
        iconName: "Layers",
      },
    ],
  },
  {
    id: "smart-agriculture",
    title: {
      en: "Smart Agriculture",
      hi: "स्मार्ट एग्रीकल्चर",
    },
    subtitle: {
      en: "IoT Sensors & Digital Intelligence",
      hi: "IoT सेंसर एवं डिजिटल नियंत्रण",
    },
    iconName: "Cpu",
    items: [
      {
        id: "iot-farm-monitoring",
        name: {
          en: "IoT Farm Monitoring",
          hi: "IoT फार्म मॉनिटरिंग",
        },
        desc: {
          en: "Sub-surface soil moisture, EC & canopy telemetry",
          hi: "मृदा नमी, EC एवं कैनोपी रियल-टाइम टेलीमेट्री",
        },
        href: "/solutions/iot-farm-monitoring",
        badge: { en: "Live Mesh", hi: "लाइव मेश" },
        iconName: "Radio",
      },
      {
        id: "climate-monitoring",
        name: {
          en: "Climate Monitoring",
          hi: "क्लाइमेट मॉनिटरिंग",
        },
        desc: {
          en: "Vapor pressure deficit, solar radiation & temp sensors",
          hi: "वाष्प दबाव घाटा (VPD), सौर विकिरण व तापमान सेंसर",
        },
        href: "/solutions/climate-monitoring",
        iconName: "Sun",
      },
      {
        id: "automated-farm-control",
        name: {
          en: "Automated Farm Control",
          hi: "ऑटोमेटेड फार्म कंट्रोल",
        },
        desc: {
          en: "ESP32-driven dynamic misting, pumps & valve actuation",
          hi: "स्मार्ट मिस्टिंग, पंप एवं ऑटोमेटेड सिंचाई एक्चुएशन",
        },
        href: "/solutions/automated-farm-control",
        iconName: "Activity",
      },
    ],
  },
  {
    id: "sustainable-systems",
    title: {
      en: "Sustainable Systems",
      hi: "सतत प्रणालियाँ",
    },
    subtitle: {
      en: "Regenerative & Zero-Waste Bio-Loops",
      hi: "शून्य-अपशिष्ट पुनर्योजी बायो-लूप्स",
    },
    iconName: "Recycle",
    items: [
      {
        id: "circular-farming",
        name: {
          en: "Circular Farming",
          hi: "सर्कुलर फार्मिंग",
        },
        desc: {
          en: "Closed-loop biological cycle converting waste into value",
          hi: "अपशिष्ट को मूल्य में बदलने वाला आत्मनिर्भर जैविक चक्र",
        },
        href: "/solutions/circular-farming",
        badge: { en: "Zero Waste", hi: "शून्य अपशिष्ट" },
        iconName: "Recycle",
      },
      {
        id: "biomass-management",
        name: {
          en: "Biomass Management",
          hi: "बायोमास प्रबंधन",
        },
        desc: {
          en: "Crop residue & straw conversion without field burning",
          hi: "पराली एवं फसल अवशेषों का बिना जलाए संपूर्ण उपयोग",
        },
        href: "/solutions/biomass-management",
        iconName: "Leaf",
      },
      {
        id: "water-efficiency",
        name: {
          en: "Water Efficiency",
          hi: "जल दक्षता प्रणालियाँ",
        },
        desc: {
          en: "Precision root-zone delivery cutting water use by 42%",
          hi: "सटीक रूट-ज़ोन सिंचाई से पानी की 42% तक बचत",
        },
        href: "/solutions/water-efficiency",
        iconName: "Droplets",
      },
      {
        id: "soil-restoration",
        name: {
          en: "Soil Restoration",
          hi: "मृदा पुनर्जनन",
        },
        desc: {
          en: "Organic carbon elevation & mycorrhizal fungal enrichment",
          hi: "जैविक कार्बन वृद्धि एवं लाभकारी सूक्ष्मजीव संवर्धन",
        },
        href: "/solutions/soil-restoration",
        iconName: "ShieldCheck",
      },
    ],
  },
  {
    id: "farm-setup",
    title: {
      en: "Farm Setup",
      hi: "फार्म सेटअप एवं परामर्श",
    },
    subtitle: {
      en: "Turnkey Engineering & Agronomy",
      hi: "टर्नकी इंफ्रास्ट्रक्चर एवं विशेषज्ञ मार्गदर्शन",
    },
    iconName: "Building2",
    items: [
      {
        id: "mushroom-farm-setup",
        name: {
          en: "Mushroom Farm Setup",
          hi: "मशरूम फार्म सेटअप",
        },
        desc: {
          en: "Commercial PUF-insulated fruiting chambers from 500+ sq.ft",
          hi: "500+ वर्गफुट से वाणिज्यिक इंसुलेटेड ग्रो चैंबर्स",
        },
        href: "/solutions/mushroom-farm-setup",
        iconName: "Building2",
      },
      {
        id: "integrated-farm",
        name: {
          en: "Integrated Farm",
          hi: "एकीकृत मॉडल फार्म",
        },
        desc: {
          en: "Combined dairy, fodder, mushroom & bio-fertilizer unit",
          hi: "डेयरी, चारा, मशरूम एवं जैविक खाद का संयुक्त सेटअप",
        },
        href: "/solutions/integrated-farm",
        badge: { en: "Turnkey", hi: "टर्नकी" },
        iconName: "Target",
      },
      {
        id: "iot-installation",
        name: {
          en: "IoT Installation",
          hi: "IoT इंस्टॉलेशन",
        },
        desc: {
          en: "Field deployment of solar LoRaWAN gateway & sensor mesh",
          hi: "सोलर LoRaWAN गेटवे एवं सेंसर मेश का ऑन-साइट इंस्टॉलेशन",
        },
        href: "/solutions/iot-installation",
        iconName: "Cpu",
      },
      {
        id: "farm-advisory",
        name: {
          en: "Farm Advisory",
          hi: "फार्म एडवाइजरी",
        },
        desc: {
          en: "Agronomy consultation, substrate formulation & yield audit",
          hi: "कृषि विशेषज्ञ परामर्श, सबस्ट्रेट फॉर्मूलेशन एवं उपज ऑडिट",
        },
        href: "/solutions/farm-advisory",
        badge: { en: "Expert", hi: "विशेषज्ञ" },
        iconName: "Compass",
      },
    ],
  },
];

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  "oyster-mushroom": {
    slug: "oyster-mushroom",
    category: { en: "Cultivation System", hi: "उत्पादन प्रणाली" },
    name: { en: "Oyster Mushroom Cultivation", hi: "ऑयस्टर मशरूम उत्पादन" },
    tagline: {
      en: "Controlled High-Yield Indoor Fruiting Chambers for Arid Climates",
      hi: "शुष्क जलवायु के लिए जलवायु-नियंत्रित उच्च उपज इंडोर फ्रूटिंग चैंबर",
    },
    badge: { en: "Turnkey Mycology", hi: "टर्नकी माइकोलॉजी" },
    heroDescription: {
      en: "Transform farm straw and agricultural residues into high-margin gourmet mushroom harvests. Our climate-insulated chambers maintain strict 22°C–26°C equilibrium even in 46°C desert conditions.",
      hi: "कृषि तूड़ी और पराली को उच्च-मार्जिन वाले स्वादिष्ट मशरूम उत्पादन में बदलें। हमारे इंसुलेटेड ग्रो रूम्स 46°C गर्मी में भी 22°C–26°C का आदर्श संतुलन बनाए रखते हैं।",
    },
    heroImage: "/media/Industrial Oyster Mushroom Farm.png",
    metrics: [
      {
        label: { en: "Biological Efficiency", hi: "जैविक रूपांतरण क्षमता" },
        value: "80%–100%",
        detail: { en: "100 kg dry straw yields 80–100 kg fresh harvest", hi: "100 किग्रा तूड़ी से 80–100 किग्रा ताज़ा मशरूम" },
      },
      {
        label: { en: "Fruiting Equilibrium", hi: "फ्रूटिंग तापमान" },
        value: "22°C–26°C",
        detail: { en: "PUF insulated panels prevent heat spikes", hi: "PUF इंसुलेटेड चैंबर तापमान को स्थिर रखते हैं" },
      },
      {
        label: { en: "Target Humidity", hi: "सापेक्ष आर्द्रता" },
        value: "90%–95% RH",
        detail: { en: "Ultrasonic dry-fog misting without soaking", hi: "अल्ट्रासोनिक ड्राई-फॉग मिस्टिंग" },
      },
      {
        label: { en: "Harvest Cycle", hi: "फसल चक्र" },
        value: "21–25 Days",
        detail: { en: "Rapid substrate turnover with 3 flushes", hi: "3 चरणों में तेजी से तुड़ाई चक्र" },
      },
    ],
    overviewHeading: {
      en: "Engineered Mycology for Commercial Farm Profitability",
      hi: "वाणिज्यिक फार्म मुनाफे के लिए वैज्ञानिक माइकोलॉजी",
    },
    overviewText: {
      en: "Oyster Mushroom (Pleurotus ostreatus & florida) is one of the most efficient bioconverters of lignocellulosic crop waste. JAS Agro provides complete commercial chamber designs, pasteurization boilers, pure grain spawn, and environmental control systems tailored for hot Indian weather.",
      hi: "ऑयस्टर मशरूम फसल अवशेषों और तूड़ी को प्रोटीनयुक्त भोजन में बदलने का सबसे प्रभावी माध्यम है। JAS एग्रो गर्म भारतीय मौसम के लिए पूर्ण वाणिज्यिक चैंबर डिजाइन, पाश्चुरीकरण बॉयलर, शुद्ध ग्रेन स्पॉन और पर्यावरण नियंत्रण प्रणाली प्रदान करता है।",
    },
    pillars: [
      {
        title: { en: "PUF-Insulated Climate Isolation", hi: "PUF इंसुलेटेड तापमान नियंत्रण" },
        desc: {
          en: "Sandwich PUF panel structure guarantees temperature stability with minimal electrical power, shielding crops from external heatwaves.",
          hi: "सैंडविच PUF पैनल बाहरी लू से सुरक्षा देते हुए न्यूनतम बिजली खपत में कमरे के तापमान को स्थिर रखते हैं।",
        },
        iconName: "ShieldCheck",
        tag: { en: "Thermal Engineering", hi: "थर्मल इंजीनियरिंग" },
      },
      {
        title: { en: "Ultrasonic Aerosol Misting", hi: "अल्ट्रासोनिक ड्राई-फॉग मिस्टिंग" },
        desc: {
          en: "Sub-5 micron aerosol droplet fogging keeps pinheads hydrated without saturating the substrate, preventing bacterial blotch.",
          hi: "5 माइक्रोन से छोटे महीन कण मशरूम पिनहेड्स को नमी देते हैं और बैग्स को अत्यधिक गीला होने से बचाते हैं।",
        },
        iconName: "Droplets",
        tag: { en: "Micro-Climate", hi: "माइक्रो-क्लाइमेट" },
      },
      {
        title: { en: "Positive-Pressure HEPA Biosecurity", hi: "HEPA पॉजिटिव प्रेशर सुरक्षा" },
        desc: {
          en: "Continuous filtered airflow flushes CO2 build-up while keeping airborne fungal competitors like Trichoderma out.",
          hi: "निरंतर फ़िल्टर्ड हवा CO2 को बाहर निकालती है और हानिकारक मोल्ड व कीटाणुओं को चैंबर में घुसने नहीं देती।",
        },
        iconName: "Activity",
        tag: { en: "Biosecurity", hi: "बायोसुरक्षा" },
      },
      {
        title: { en: "Zero-Waste Substrate Recycling", hi: "स्पेंट सबस्ट्रेट रीसाइक्लिंग" },
        desc: {
          en: "Post-harvest spent mushroom substrate (SMS) returns directly to vermicompost beds, enriching earthworms and organic manure.",
          hi: "मशरूम कटाई के बाद बचा हुआ सबस्ट्रेट वर्मीकंपोस्ट में केंचुओं के लिए उच्च-पोषक भोजन बन जाता है।",
        },
        iconName: "Recycle",
        tag: { en: "Circular Loop", hi: "सर्कुलर लूप" },
      },
    ],
    specs: [
      { label: { en: "Optimal Temperature", hi: "अनुकूल तापमान" }, value: "22°C – 26°C" },
      { label: { en: "Relative Humidity (RH)", hi: "सापेक्ष आर्द्रता" }, value: "90% – 95%" },
      { label: { en: "CO2 Concentration (Fruiting)", hi: "CO2 स्तर" }, value: "< 900 ppm" },
      { label: { en: "Spawn Run Duration", hi: "स्पॉन रन समय" }, value: "14 – 18 Days" },
      { label: { en: "Biological Efficiency", hi: "जैविक दक्षता" }, value: "80% – 100%" },
      { label: { en: "Substrate Base", hi: "सबस्ट्रेट आधार" }, value: "Wheat Straw / Paddy Straw" },
      { label: { en: "Standard Unit Sizing", hi: "मानक सेटअप आकार" }, value: "500 to 5,000 sq.ft" },
      { label: { en: "Monthly Production Range", hi: "मासिक उत्पादन क्षमता" }, value: "350 kg to 3,500+ kg" },
    ],
    applications: [
      { en: "Commercial indoor mushroom production plants", hi: "वाणिज्यिक इनडोर मशरूम उत्पादन संयंत्र" },
      { en: "Dairy farm residue monetization & supplementary revenue", hi: "डेयरी फार्म अवशेषों से अतिरिक्त मासिक आय" },
      { en: "Crop residue utilization for farm cooperatives & FPOs", hi: "FPO एवं किसान समूहों द्वारा पराली का मूल्य संवर्धन" },
      { en: "Year-round gourmet food supply for regional urban markets", hi: "नजदीकी शहरी बाजारों के लिए ताजा मशरूम आपूर्ति" },
    ],
    faqs: [
      {
        question: {
          en: "Can Oyster Mushrooms be grown in hot Rajasthan summers?",
          hi: "क्या राजस्थान की गर्मी में ऑयस्टर मशरूम उगाया जा सकता है?",
        },
        answer: {
          en: "Yes. With JAS Agro's insulated PUF chambers and automated micro-misting systems, internal temperatures are maintained at 22°C–26°C even when outside temperatures cross 45°C.",
          hi: "हाँ। JAS एग्रो के इंसुलेटेड PUF चैंबर और ऑटोमेटेड मिस्टिंग सिस्टम से बाहर 45°C तापमान होने पर भी अंदर 22°C–26°C का अनुकूल माहौल बना रहता है।",
        },
      },
      {
        question: {
          en: "What is the initial capital requirement and payback period?",
          hi: "सेटअप में कितनी लागत आती है और रिकवरी कब तक होती है?",
        },
        answer: {
          en: "A standard 500 sq.ft commercial chamber yields 350–450 kg per month. With steady local market prices, payback is typically achieved within 6–9 months.",
          hi: "500 वर्गफुट का एक मानक चैंबर हर महीने 350-450 किग्रा उपज देता है। सामान्यतः 6 से 9 महीनों में पूरी लागत की रिकवरी हो जाती है।",
        },
      },
      {
        question: {
          en: "Does JAS Agro provide mushroom spawn and technical training?",
          hi: "क्या JAS एग्रो मशरूम स्पॉन और ट्रेनिंग भी प्रदान करता है?",
        },
        answer: {
          en: "Yes. We supply lab-certified mother spawn, substrate formulation protocols, and on-site handholding for your farm operators.",
          hi: "हाँ। हम लैब-सर्टिफाइड मदर स्पॉन, सबस्ट्रेट तैयार करने की विधि और फार्म टीम को व्यावहारिक ऑन-साइट प्रशिक्षण देते हैं।",
        },
      },
    ],
    relatedSlugs: ["farm-setup", "circular-farming", "vermicompost"],
  },

  "azolla-farming": {
    slug: "azolla-farming",
    category: { en: "Aquatic Bio-Fodder", hi: "जलीय जैविक चारा" },
    name: { en: "Azolla Super-Fodder Farming", hi: "अजोला सुपर-चारा उत्पादन" },
    tagline: {
      en: "25–30% Crude Protein Live Aquatic Micro-Fern Cultivation",
      hi: "25–30% कच्चा प्रोटीन युक्त जलीय सूक्ष्म-फर्न कल्चर सिस्टम",
    },
    badge: { en: "Feed Cost Reducer", hi: "चारा खर्च में 35% कमी" },
    heroDescription: {
      en: "A high-protein aquatic fern that doubles its biomass every 48 hours. Azolla replaces 25%–30% of costly commercial cattle concentrate feed while naturally boosting milk yield and fat percentage.",
      hi: "एक अत्यधिक पौष्टिक जलीय पौधा जो हर 48 घंटे में अपनी मात्रा को दोगुना कर लेता है। अजोला महंगे दाना-खली के खर्च को 25%–30% कम करता है और दूध उत्पादन व फैट बढ़ाता है।",
    },
    heroImage: "/media/Hands Holding Lush Aquatic Greens.png",
    metrics: [
      {
        label: { en: "Crude Protein", hi: "कच्चा प्रोटीन" },
        value: "25%–30%",
        detail: { en: "Rich in essential amino acids & minerals", hi: "आवश्यक अमीनो एसिड और खनिजों से भरपूर" },
      },
      {
        label: { en: "Biomass Multiplication", hi: "बायोमास वृद्धि दर" },
        value: "100% in 48h",
        detail: { en: "Continuous daily harvest per pond", hi: "हर 48 घंटे में मात्रा दोगुनी" },
      },
      {
        label: { en: "Feed Cost Reduction", hi: "चारा खर्च बचत" },
        value: "25%–35%",
        detail: { en: "Direct replacement of commercial cattle feed", hi: "महंगे पशुआहार की आवश्यकता में कमी" },
      },
      {
        label: { en: "Milk Fat Increase", hi: "दूध फैट वृद्धि" },
        value: "+0.3–0.5%",
        detail: { en: "Observed in dairy cattle & buffaloes", hi: "गाय और भैंस के दूध में फैट व SNF सुधार" },
      },
    ],
    overviewHeading: {
      en: "The Most Resource-Efficient Animal Feed on Earth",
      hi: "पशुपालन के लिए सबसे कम लागत वाला प्राकृतिक पोषण",
    },
    overviewText: {
      en: "Azolla pinnata hosts the nitrogen-fixing cyanobacterium Anabaena azollae, drawing atmospheric nitrogen directly into bio-available protein. Raised in HDPE lined shallow beds under 50% agro-shade net, it produces daily fresh feed with minimal water footprint.",
      hi: "अजोला हवा से सीधे नाइट्रोजन सोखकर उच्च प्रोटीन बनाता है। शेडनेट और HDPE वाटरप्रूफ बेड्स में उगाया जाने वाला अजोला रोजाना ताजा चारा उपलब्ध कराता है और पानी की बहुत कम खपत करता है।",
    },
    pillars: [
      {
        title: { en: "Engineered HDPE Pond Beds", hi: "HDPE वाटरप्रूफ बेड सेटअप" },
        desc: {
          en: "Reinforced UV-stabilized geomembrane tarpaulins ensure zero ground seepage and effortless daily skimming.",
          hi: "UV-स्टेबलाइज्ड मजबूत शीट्स रिसाव रोकती हैं और रोजाना की आसान कटाई सुनिश्चित करती हैं।",
        },
        iconName: "Waves",
        tag: { en: "Infrastructure", hi: "इंफ्रास्ट्रक्चर" },
      },
      {
        title: { en: "Precision Shading & Canopy", hi: "50% एग्रो शेडनेट सुरक्षा" },
        desc: {
          en: "50% green agro-shade netting blocks scorching UV radiation while maintaining optimum photosynthetically active radiation (PAR).",
          hi: "50% ग्रीन शेडनेट तेज धूप से बचाती है और अजोला की निरंतर हरी वृद्धि बनाए रखती है।",
        },
        iconName: "Sun",
        tag: { en: "Climate Protection", hi: "धूप नियंत्रण" },
      },
      {
        title: { en: "Bio-Fertilizer Synergy", hi: "गोबर-ह्यूमस घोल पोषण" },
        desc: {
          en: "Nourished by dilute cow dung slurry and rock phosphate, turning farm livestock manure into fresh high-protein greens.",
          hi: "गोबर के घोल और जैविक तत्वों से पोषण प्राप्त करता है, जिससे अतिरिक्त खाद का खर्च नहीं होता।",
        },
        iconName: "Sparkles",
        tag: { en: "Zero Chemical", hi: "पूर्णतः प्राकृतिक" },
      },
      {
        title: { en: "Multi-Species Livestock Nutrition", hi: "बहु-पशु पोषण उपयोग" },
        desc: {
          en: "Excellent digestibility for dairy cattle, buffaloes, goats, sheep, poultry, and aquaculture fish.",
          hi: "गाय, भैंस, बकरी, मुर्गी और मछली पालन के लिए अत्यधिक सुपाच्य और पौष्टिक आहार।",
        },
        iconName: "Activity",
        tag: { en: "Livestock ROI", hi: "पशु स्वास्थ्य" },
      },
    ],
    specs: [
      { label: { en: "Crude Protein Content", hi: "कच्चा प्रोटीन प्रतिशत" }, value: "25% – 30% (Dry Basis)" },
      { label: { en: "Crude Fiber", hi: "फाइबर मात्रा" }, value: "13% – 15%" },
      { label: { en: "Water Depth Required", hi: "पानी की गहराई" }, value: "10 cm – 15 cm" },
      { label: { en: "Daily Harvest Per Standard Bed (10x6 ft)", hi: "दैनिक उपज (10x6 फीट बेड)" }, value: "1.5 kg – 2.0 kg / day" },
      { label: { en: "Pond Bed Material", hi: "बेड सामग्री" }, value: "UV-Stabilized HDPE 250+ GSM" },
      { label: { en: "Optimal Water Temperature", hi: "पानी का तापमान" }, value: "20°C – 32°C" },
      { label: { en: "Shade Factor", hi: "शेडनेट क्षमता" }, value: "50% Agricultural Green Mesh" },
    ],
    applications: [
      { en: "Commercial dairy farms reducing concentrate feed expenses", hi: "वाणिज्यिक डेयरी फार्मों में दाना खर्च कम करने हेतु" },
      { en: "Gaushalas seeking self-sufficient protein fodder", hi: "गौशालाओं में पौष्टिक व सस्ते चारे की व्यवस्था" },
      { en: "Poultry and backyard duck/goat farming enterprises", hi: "मुर्गी, बत्तख एवं बकरी पालन में प्रोटीन पूरक" },
      { en: "Organic fish farming pond feed supplement", hi: "मछली पालन में प्राकृतिक आहार के रूप में" },
    ],
    faqs: [
      {
        question: {
          en: "How much Azolla should be fed to a dairy cow per day?",
          hi: "एक दुधारू गाय को रोजाना कितना अजोला खिलाना चाहिए?",
        },
        answer: {
          en: "For an adult cow or buffalo, 1.5 to 2.0 kg of fresh Azolla mixed with regular dry and green fodder provides optimal nutrition and replaces up to 1 kg of commercial concentrate feed.",
          hi: "एक वयस्क गाय या भैंस को रोजाना 1.5 से 2.0 किग्रा ताजा अजोला नियमित चारे के साथ मिलाकर खिलाना चाहिए। इससे लगभग 1 किग्रा खली/दाने की बचत होती है।",
        },
      },
      {
        question: {
          en: "How often do we need to change the water in the Azolla bed?",
          hi: "अजोला बेड का पानी कितने दिनों में बदलना पड़ता है?",
        },
        answer: {
          en: "Water is partially refreshed once every 30–45 days. Periodic additions of fresh cow dung slurry and mineral rock phosphate every 10–15 days keep the culture vigorous.",
          hi: "पानी को हर 30-45 दिनों में आंशिक रूप से बदला जाता है। हर 10-15 दिनों में थोड़ा ताजा गोबर का घोल और सुपरफॉस्फेट डालने से विकास तेज रहता है।",
        },
      },
    ],
    relatedSlugs: ["hybrid-napier", "circular-farming", "vermicompost"],
  },

  "hybrid-napier": {
    slug: "hybrid-napier",
    category: { en: "Perennial Forage", hi: "बहुवर्षीय हरा चारा" },
    name: { en: "Hybrid Super Napier Cultivation", hi: "हाइब्रिड सुपर नेपियर घास" },
    tagline: {
      en: "200+ Tonnes Per Acre Multi-Cut Perennial Green Forage",
      hi: "200+ टन प्रति एकड़ वार्षिक पैदावार देने वाला 5-वर्षीय हरा चारा",
    },
    badge: { en: "High Biomass Yield", hi: "सर्वाधिक बायोमास" },
    heroDescription: {
      en: "A robust cross-breed perennial forage grass engineered for maximum tillering and rapid regeneration. Yields up to 200–250 tonnes of juicy, non-itchy green fodder per acre each year for 5 consecutive years.",
      hi: "अत्यधिक फुटाव और तीव्र विकास वाली 5-वर्षीय बहुवर्षीय चारा घास। कांटे-रहित, मुलायम और मीठे तनों के साथ सालाना 200 से 250 टन हरा चारा प्रति एकड़ प्रदान करती है।",
    },
    heroImage: "/media/Lush Green Forage Grass Field.png",
    metrics: [
      {
        label: { en: "Annual Forage Yield", hi: "वार्षिक कुल उपज" },
        value: "200–250 MT",
        detail: { en: "Per acre under recommended fertigation", hi: "प्रति एकड़ वैज्ञानिक सिंचाई व पोषण में" },
      },
      {
        label: { en: "Cutting Cycle", hi: "कटाई अंतराल" },
        value: "45–55 Days",
        detail: { en: "6 to 8 cuttings harvested annually", hi: "साल में 6 से 8 बार ताजा कटाई" },
      },
      {
        label: { en: "Crude Protein", hi: "कच्चा प्रोटीन" },
        value: "14%–18%",
        detail: { en: "Juicy stems with high digestibility", hi: "मुलायम तना एवं उच्च सुपाच्यता" },
      },
      {
        label: { en: "Crop Longevity", hi: "फसल जीवनकाल" },
        value: "4–5 Years",
        detail: { en: "Single planting delivers 5 years of fodder", hi: "एक बार लगाने पर 5 साल तक लगातार उपज" },
      },
    ],
    overviewHeading: {
      en: "End Fodder Scarcity Forever with Super Napier",
      hi: "सुपर नेपियर से पशु चारे की कमी का स्थायी समाधान",
    },
    overviewText: {
      en: "Hybrid Super Napier (Pakchong 1 / Super Napier) eliminates recurring seasonal field preparation costs. Its thick sugar-rich stems are free from sharp thorns and trichomes, making it highly palatable for cows, buffaloes, goats, and horses with zero feed wastage.",
      hi: "हाइब्रिड सुपर नेपियर हर सीजन में बार-बार बुवाई के झंझट और खर्च को खत्म करता है। इसके रसीले तने कांटों से मुक्त और मीठे होते हैं, जिन्हें पशु बिना किसी बर्बादी के बड़े चाव से खाते हैं।",
    },
    pillars: [
      {
        title: { en: "High Tillering Density", hi: "अत्यधिक कल्ले एवं फुटाव" },
        desc: {
          en: "Each plant root cluster produces 40–50 vigorous stems per clump, providing massive biomass density per square meter.",
          hi: "एक पौधे की जड़ से 40 से 50 कल्ले निकलते हैं, जिससे कम जमीन में भारी मात्रा में हरा चारा मिलता है।",
        },
        iconName: "Wheat",
        tag: { en: "Biomass", hi: "बायोमास" },
      },
      {
        title: { en: "Water-Use Optimization", hi: "ड्रिप सिंचाई अनुकूल" },
        desc: {
          en: "Deep root system coupled with drip or furrow irrigation maximizes biomass per liter of water delivered.",
          hi: "गहरी जड़ें शुष्क परिस्थितियों में भी नमी बनाए रखती हैं और ड्रिप सिंचाई में उत्कृष्ट उपज देती हैं।",
        },
        iconName: "Droplets",
        tag: { en: "Water Smart", hi: "कम पानी" },
      },
      {
        title: { en: "Superior Palatability & Sugar", hi: "मीठा एवं कांटे-रहित तना" },
        desc: {
          en: "Contains 8–10% soluble sugars with smooth leaves that cause zero oral irritation in livestock.",
          hi: "8-10% प्राकृतिक शर्करा और कांटे-रहित पत्तों के कारण पशु इसे पूरा खा जाते हैं।",
        },
        iconName: "Sparkles",
        tag: { en: "Palatability", hi: "स्वादिष्ट" },
      },
      {
        title: { en: "Silage Production Fit", hi: "साइलेज बनाने के लिए आदर्श" },
        desc: {
          en: "High fermentable carbohydrate content makes it an outstanding candidate for anaerobic silage bunker storage.",
          hi: "उच्च कार्बोहाइड्रेट के कारण इसका साइलेज बनाना बेहद आसान है, जिसे सालभर सुरक्षित रखा जा सकता है।",
        },
        iconName: "Layers",
        tag: { en: "Silage", hi: "साइलेज" },
      },
    ],
    specs: [
      { label: { en: "First Harvest", hi: "पहली कटाई" }, value: "75 – 90 Days after planting" },
      { label: { en: "Subsequent Cuts", hi: "बाद की कटाई" }, value: "Every 45 – 55 Days" },
      { label: { en: "Plant Height at Harvest", hi: "कटाई के समय ऊंचाई" }, value: "8 – 10 Feet" },
      { label: { en: "Planting Material", hi: "रोपाई सामग्री" }, value: "Two-Eye Mature Node Stem Cuttings" },
      { label: { en: "Plant Population per Acre", hi: "प्रति एकड़ पौधे" }, value: "10,000 – 11,000 Stems (3x2 ft or 4x2 ft spacing)" },
      { label: { en: "Crude Protein", hi: "प्रोटीन प्रतिशत" }, value: "14% – 18% (Early Stage Cut)" },
    ],
    applications: [
      { en: "Commercial dairy setups with high daily green fodder requirements", hi: "बड़े डेयरी फार्मों में दैनिक हरे चारे की निरंतर आपूर्ति" },
      { en: "Silage processing facilities creating long-term bunker stores", hi: "साइलेज पैकिंग इकाइयों के लिए थोक बायोमास" },
      { en: "Sheep and goat grazing ranches and stall-fed goat farms", hi: "बकरी एवं भेड़ फार्मिंग में पौष्टिक आहार" },
      { en: "Biofuel and biogas digester feedstock generation", hi: "बायोगैस और बायो-सीएनजी प्लांट के लिए रॉ मटेरियल" },
    ],
    faqs: [
      {
        question: {
          en: "How many stems/cuttings are needed for 1 acre?",
          hi: "1 एकड़ में सुपर नेपियर की कितनी कलमें (Stems) लगती हैं?",
        },
        answer: {
          en: "At standard 3x2 ft spacing, approximately 10,000 to 11,000 mature stem cuttings with active nodal eyes are required for 1 acre.",
          hi: "3x2 फीट की दूरी पर रोपाई करने के लिए 1 एकड़ में लगभग 10,000 से 11,000 स्वस्थ दो-आंख वाली कलमें लगती हैं।",
        },
      },
      {
        question: {
          en: "Can Super Napier tolerate winter frost or extreme summer?",
          hi: "क्या यह अत्यधिक सर्दी या 45°C+ गर्मी झेल सकती है?",
        },
        answer: {
          en: "Super Napier thrives in temperatures up to 48°C. During peak winter frost, vegetative growth slows down temporarily, then rebounds aggressively with rising spring temperatures.",
          hi: "यह 48°C तक की तेज गर्मी को आसानी से सहन करती है। सर्दियों में विकास थोड़ा धीमा होता है, लेकिन वसंत आते ही फिर से तेजी से बढ़ता है।",
        },
      },
    ],
    relatedSlugs: ["azolla-farming", "circular-farming", "farm-setup"],
  },

  "vermicompost": {
    slug: "vermicompost",
    category: { en: "Bio-Fertilizer System", hi: "जैविक खाद प्रणाली" },
    name: { en: "Bio-Vermicompost Production", hi: "वर्मीकंपोस्ट केंचुआ खाद उत्पादन" },
    tagline: {
      en: "Eisenia Fetida Organic Soil Humus & Microbial Liquid Bio-Fertilizer",
      hi: "सक्रिय केंचुआ खाद उत्पादन एवं माइक्रोबियल तरल वर्मीवाश सिस्टम",
    },
    badge: { en: "Organic Certification Ready", hi: "100% जैविक खाद" },
    heroDescription: {
      en: "Convert raw farm biomass, spent mushroom substrate, and cattle dung into rich, black humic vermicompost teeming with beneficial mycorrhizae, nitrogen-fixing bacteria, and plant growth promoters.",
      hi: "फार्म बायोमास, मशरूम सबस्ट्रेट और गोबर को उच्च गुणवत्ता वाली भुरभुरी केंचुआ खाद में बदलें। यह मिट्टी की उर्वरता, जल-धारण क्षमता और जैविक कार्बन को तेजी से बढ़ाती है।",
    },
    heroImage: "/media/Hands Holding Rich Compost.png",
    metrics: [
      {
        label: { en: "Organic Carbon", hi: "जैविक कार्बन" },
        value: "16%–22%",
        detail: { en: "Restores degraded sandy and arid soils", hi: "रेतीली और बंजर मिट्टी को उपजाऊ बनाता है" },
      },
      {
        label: { en: "NPK Potency", hi: "प्राकृतिक पोषक तत्व" },
        value: "5x vs Cow Dung",
        detail: { en: "Concentrated plant-available bio-nutrients", hi: "कच्चे गोबर की तुलना में 5 गुना अधिक सुलभ पोषक" },
      },
      {
        label: { en: "Composting Cycle", hi: "खाद बनने का समय" },
        value: "60–75 Days",
        detail: { en: "Fast bioconversion with Australian Red Earthworms", hi: "ऑस्ट्रेलियन रेड वर्म द्वारा त्वरित रूपांतरण" },
      },
      {
        label: { en: "Water Retention Boost", hi: "जल-धारण क्षमता सुधार" },
        value: "+40%",
        detail: { en: "Reduces crop irrigation frequency noticeably", hi: "मिट्टी में नमी को लंबे समय तक रोकता है" },
      },
    ],
    overviewHeading: {
      en: "Restoring Living Biology to Depleted Soil",
      hi: "रासायनिक रूप से कमजोर हो चुकी मिट्टी में जीवन का संचार",
    },
    overviewText: {
      en: "Commercial vermicomposting utilizes epigeic earthworm species (Eisenia fetida) that process organic waste at high throughput. The resulting cast is odorless, free of weed seeds and pathogens, and loaded with humic acid, fulvic acid, and beneficial actinomycetes.",
      hi: "वर्मीकंपोस्टिंग के लिए आइसीनिया फेटिडा केंचुओं का उपयोग किया जाता है। तैयार खाद गंधहीन, खरपतवार मुक्त और पौधों के विकास के लिए आवश्यक एंजाइम्स व ह्यूमिक एसिड से भरपूर होती है।",
    },
    pillars: [
      {
        title: { en: "Aerated Raised-Bed Architecture", hi: "उठे हुए हवादार बेड डिजाइन" },
        desc: {
          en: "Brick-lined or HDPE raised beds maintain optimal aeration and moisture drainage, preventing anaerobic compaction.",
          hi: "उठे हुए हवादार बेड्स अतिरिक्त पानी को निकालते हैं और केंचुओं के लिए अनुकूल हवादार वातावरण बनाए रखते हैं।",
        },
        iconName: "Layers",
        tag: { en: "Bed Engineering", hi: "बेड इंजीनियरिंग" },
      },
      {
        title: { en: "High-Activity Eisenia Fetida Colonies", hi: "सक्रिय ऑस्ट्रेलियन रेड वर्म्स" },
        desc: {
          en: "Prolific surface-feeding earthworms that consume up to their body weight daily in decomposing organic matter.",
          hi: "अत्यधिक सक्रिय केंचुए जो अपने वजन के बराबर जैविक कचरे को रोजाना खाकर पोषक खाद में बदलते हैं।",
        },
        iconName: "Sparkles",
        tag: { en: "Biology", hi: "जैविक शक्ति" },
      },
      {
        title: { en: "Vermiwash Extraction System", hi: "तरल वर्मीवाश निष्कर्षण" },
        desc: {
          en: "Integrated collection drains produce nutrient-dense liquid foliar spray rich in auxin, gibberellin, and plant enzymes.",
          hi: "बेड्स से निकलने वाला वर्मीवाश फसलों पर स्प्रे करने के लिए शक्तिशाली टॉनिक और कीट-प्रतिरोधी का काम करता है।",
        },
        iconName: "Droplets",
        tag: { en: "Liquid Bio-Fertilizer", hi: "तरल खाद" },
      },
      {
        title: { en: "Spent Mushroom Substrate Synergy", hi: "मशरूम अवशेष का उपयोग" },
        desc: {
          en: "Incorporating post-harvest mushroom straw accelerates worm reproduction and enhances final humic content.",
          hi: "मशरूम निकालने के बाद बची तूड़ी केंचुओं के लिए बेहतरीन भोजन बनती है और खाद की गुणवत्ता बढ़ाती है।",
        },
        iconName: "Recycle",
        tag: { en: "Circular Ecology", hi: "सर्कुलर इकोलॉजी" },
      },
    ],
    specs: [
      { label: { en: "Earthworm Species", hi: "केंचुआ प्रजाति" }, value: "Eisenia fetida (Red Wigglers)" },
      { label: { en: "Optimal Moisture", hi: "अनुकूल नमी" }, value: "60% – 70%" },
      { label: { en: "Bed Temperature", hi: "बेड तापमान" }, value: "20°C – 30°C" },
      { label: { en: "Standard Bed Dimensions", hi: "मानक बेड आकार" }, value: "30 ft x 4 ft x 2 ft" },
      { label: { en: "Yield Per Standard Bed", hi: "प्रति बेड उत्पादन" }, value: "1.0 – 1.2 Tonnes per cycle" },
      { label: { en: "pH Level", hi: "pH मान" }, value: "6.8 – 7.5 (Neutral)" },
      { label: { en: "C:N Ratio", hi: "कार्बन-नाइट्रोजन अनुपात" }, value: "12:1 – 15:1" },
    ],
    applications: [
      { en: "High-value horticulture, orchards, and greenhouse polyhouse cultivation", hi: "बागवानी, पॉलीहाउस एवं फलदार वृक्षों के लिए" },
      { en: "Dairy farm dung management turning disposal liabilities into revenue", hi: "डेयरी फार्म गोबर का लाभदायक व्यावसायिक उपयोग" },
      { en: "Certified organic farming input for export-quality produce", hi: "प्रमाणित जैविक खेती एवं निर्यात गुणवत्ता फसल उत्पादन" },
      { en: "Soil health rejuvenation in high-salinity and alkaline soils", hi: "खारी और क्षारीय जमीन की गुणवत्ता सुधारने हेतु" },
    ],
    faqs: [
      {
        question: {
          en: "How much vermicompost is needed per acre for crops?",
          hi: "फसलों के लिए प्रति एकड़ कितनी वर्मीकंपोस्ट खाद की जरूरत होती है?",
        },
        answer: {
          en: "For general field crops, 1.5 to 2.5 tonnes per acre during land preparation is recommended. For fruit orchards and vegetables, 3 to 5 kg per plant/tree yields excellent results.",
          hi: "सामान्य फसलों में बुवाई के समय 1.5 से 2.5 टन प्रति एकड़ की सिफारिश की जाती है। बागवानी व सब्जियों में प्रति पौधा 3 से 5 किग्रा पर्याप्त होता है।",
        },
      },
      {
        question: {
          en: "How do we protect earthworms from extreme summer heat?",
          hi: "गर्मियों में केंचुओं को तेज धूप और गर्मी से कैसे बचाएं?",
        },
        answer: {
          en: "Beds should be sheltered under agro-shade nets or thatch roofs, mulched with straw or gunny bags, and sprinkled with water once or twice daily to maintain 65% moisture.",
          hi: "बेड्स के ऊपर 75% शेडनेट या छप्पर लगाएं, बोरी या घास-फूंस से ढकें और दिन में 1-2 बार पानी का छिड़काव कर 65% नमी बनाए रखें।",
        },
      },
    ],
    relatedSlugs: ["circular-farming", "oyster-mushroom", "farm-setup"],
  },

  "iot-farm-monitoring": {
    slug: "iot-farm-monitoring",
    category: { en: "Smart Agriculture", hi: "स्मार्ट एग्रीकल्चर" },
    name: { en: "IoT Farm Monitoring & Automation", hi: "IoT फार्म मॉनिटरिंग एवं ऑटोमेशन" },
    tagline: {
      en: "LoRaWAN Soil Telemetry, Micro-Climate Sensing & Automated Actuation",
      hi: "LoRaWAN मृदा टेलीमेट्री, माइक्रो-क्लाइमेट सेंसिंग एवं ऑटोमेटेड फार्म कंट्रोल",
    },
    badge: { en: "Smart AgTech", hi: "स्मार्ट एग्री-टेक" },
    heroDescription: {
      en: "Deploy rugged ESP32 and LoRaWAN long-range telemetry nodes to monitor soil moisture, EC, nitrogen, vapor pressure deficit, and temperature in real-time, automatically triggering smart irrigation and misting pumps.",
      hi: "सटीक ESP32 और LoRaWAN सेंसर नोड्स द्वारा मिट्टी की नमी, EC, तापमान और VPD की 24x7 रियल-टाइम मॉनिटरिंग। सिंचाई पंपों और मिस्टिंग सिस्टम का स्वचालित नियंत्रण।",
    },
    heroImage: "/media/smartagri4.png",
    metrics: [
      {
        label: { en: "Water Reduction", hi: "जल बचत" },
        value: "-42%",
        detail: { en: "Eliminates over-irrigation via active root sensors", hi: "रूट-ज़ोन सेंसर से पानी की बर्बादी पर रोक" },
      },
      {
        label: { en: "LoRaWAN Range", hi: "सेंसर रेंज" },
        value: "Up to 5 km",
        detail: { en: "Long-range wireless mesh across rough terrain", hi: "बिना इंटरनेट के 5 किमी लंबी दूरी पर डेटा ट्रांसमिशन" },
      },
      {
        label: { en: "Battery Autonomy", hi: "सोलर बैटरी लाइफ" },
        value: "3+ Years",
        detail: { en: "Ultra-low power deep sleep with solar trickle charging", hi: "सोलर चार्जिंग के साथ 3 साल से अधिक लाइफ" },
      },
      {
        label: { en: "Data Interval", hi: "डेटा पिंग गति" },
        value: "Every 15s",
        detail: { en: "Continuous field health sync to cloud and mobile", hi: "हर 15 सेकंड में लाइव क्लाउड अपडेट" },
      },
    ],
    overviewHeading: {
      en: "Precision AgTech Engineered for Arid Farm Realities",
      hi: "कठिन मौसम और शुष्क जलवायु के लिए तैयार डिजिटल एग्री-टेक",
    },
    overviewText: {
      en: "Traditional farming relies on guesswork for irrigation and climate regulation. JAS Agro's IoT system embeds multi-depth soil probes, canopy micro-climate sensors, and industrial relays into an interconnected mesh network. Farmers receive instant smartphone alerts and automated valve control based on actual agronomic thresholds.",
      hi: "JAS एग्रो का IoT सिस्टम मिट्टी की अलग-अलग गहराई पर प्रोब्स, कैनोपी सेंसर और ऑटोमेटेड रिले को जोड़ता है। जब मिट्टी सूखने लगती है या तापमान बढ़ता है, तो सिस्टम अपने आप पंप चालू कर देता है और मोबाइल पर सूचना देता है।",
    },
    pillars: [
      {
        title: { en: "Sub-Surface Multi-Depth Moisture Probes", hi: "मल्टी-डेप्थ मृदा नमी प्रोब्स" },
        desc: {
          en: "Capacitive sensors measuring volumetric water content (VWC) and electrical conductivity (EC) at 15cm, 30cm, and 60cm root depths.",
          hi: "जड़ों की 15 सेमी, 30 सेमी और 60 सेमी गहराई पर नमी, तापमान और खारेपन (EC) का सटीक मापन।",
        },
        iconName: "Radio",
        tag: { en: "Root Telemetry", hi: "रूट टेलीमेट्री" },
      },
      {
        title: { en: "Canopy VPD & Solar Radiation Sensing", hi: "क्लाइमेट & VPD सेंसिंग" },
        desc: {
          en: "High-accuracy SHT3x ambient temperature and humidity probes calculate Vapor Pressure Deficit (VPD) to identify plant stress before wilting occurs.",
          hi: "पौधों के मुरझाने से पहले ही वाष्प दबाव घाटा (VPD) और सौर विकिरण मापकर तनाव की पहचान करना।",
        },
        iconName: "Sun",
        tag: { en: "Climate Intelligence", hi: "क्लाइमेट इंटेलिजेंस" },
      },
      {
        title: { en: "Automated Pump & Valve Actuation", hi: "ऑटोमेटेड पंप एवं सोलेनोइड वाल्व" },
        desc: {
          en: "Solid-state relays activate drip lines, overhead misting, or ventilation fans dynamically based on live sensor triggers.",
          hi: "सेंसर डेटा के आधार पर ड्रिप सिंचाई, मिस्टिंग और वेंटिलेशन पंखों को अपने आप ऑन/ऑफ करना।",
        },
        iconName: "Activity",
        tag: { en: "Closed-Loop Automation", hi: "ऑटोमेशन" },
      },
      {
        title: { en: "Solar-Powered Gateway & Dashboard", hi: "सोलर पावर्ड गेटवे एवं मोबाइल ऐप" },
        desc: {
          en: "Independent off-grid power supply ensures 100% uptime during rural electrical outages with 4G/GPRS and LoRa fallbacks.",
          hi: "सोलर पावर बैकअप के साथ बिजली जाने पर भी 24x7 निरंतर काम करने वाला मजबूत सिस्टम।",
        },
        iconName: "Cpu",
        tag: { en: "Off-Grid Reliability", hi: "24x7 एक्टिव" },
      },
    ],
    specs: [
      { label: { en: "Microcontroller Core", hi: "माइक्रोकंट्रोलर" }, value: "Espressif ESP32 dual-core 240MHz" },
      { label: { en: "Wireless Protocol", hi: "वायरलेस प्रोटोकॉल" }, value: "LoRaWAN 865–867 MHz (India ISM Band)" },
      { label: { en: "Soil Sensor Types", hi: "मृदा सेंसर प्रकार" }, value: "VWC (0–100%), EC (0–20 dS/m), Temp (-20°C to +85°C)" },
      { label: { en: "Ambient Climate Sensors", hi: "क्लाइमेट सेंसर" }, value: "Sensirion SHT31 (±2% RH, ±0.2°C)" },
      { label: { en: "Enclosure Ingress Rating", hi: "वॉटरप्रूफ रेटिंग" }, value: "IP67 Weatherproof UV-Resistant Polycarbonate" },
      { label: { en: "Power Source", hi: "पावर सोर्स" }, value: "5W Monocrystalline Solar Panel + LiFePO4 Battery" },
      { label: { en: "Actuator Interface", hi: "रिले क्षमता" }, value: "4-Channel 16A Optocoupled Solid State Relays" },
    ],
    applications: [
      { en: "Precision drip irrigation management for high-value crops & orchards", hi: "सब्जियों और बागवानी में सटीक ड्रिप सिंचाई नियंत्रण" },
      { en: "Mushroom fruiting chamber micro-climate automation", hi: "मशरूम ग्रो चैंबर्स में तापमान एवं नमी का स्वतः नियंत्रण" },
      { en: "Polyhouse and shade-net humidity and misting control", hi: "पॉलीहाउस और शेडनेट में फॉगर व मिस्टिंग ऑटोमेशन" },
      { en: "Arid zone moisture conservation and groundwater protection", hi: "शुष्क क्षेत्रों में भूजल बचत एवं नमी संरक्षण" },
    ],
    faqs: [
      {
        question: {
          en: "Do I need high-speed Wi-Fi in the field for the IoT nodes to work?",
          hi: "क्या खेतों में सेंसर लगाने के लिए वाई-फाई की जरूरत होती है?",
        },
        answer: {
          en: "No. The field nodes communicate with the central gateway using long-range radio (LoRa) up to 5 km without internet. Only the central gateway uses a standard 4G SIM card to upload data.",
          hi: "नहीं। सेंसर नोड्स बिना इंटरनेट के 5 किमी दूर तक मुख्य गेटवे से जुड़ते हैं। केवल मुख्य गेटवे में एक 4G सिम कार्ड लगता है जो डेटा को मोबाइल पर भेजता है।",
        },
      },
      {
        question: {
          en: "Can the system control 3-phase agricultural water pumps?",
          hi: "क्या यह सिस्टम 3-फेज के बड़े ट्यूबवेल पंप को भी ऑन/ऑफ कर सकता है?",
        },
        answer: {
          en: "Yes. Our actuator units easily integrate with standard agricultural starter panels with built-in dry-run and phase-reversal protection.",
          hi: "हाँ। हमारा ऑटोमेशन पैनल सामान्य कृषि स्टार्टर से आसानी से जुड़ जाता है और ड्राई-रन व बिजली खराबी से मोटर की सुरक्षा भी करता है।",
        },
      },
    ],
    relatedSlugs: ["farm-setup", "oyster-mushroom", "circular-farming"],
  },

  "circular-farming": {
    slug: "circular-farming",
    category: { en: "Sustainable Systems", hi: "सतत प्रणालियाँ" },
    name: { en: "Circular Farming & Biomass Systems", hi: "सर्कुलर फार्मिंग एवं बायोमास चक्र" },
    tagline: {
      en: "Zero-Waste Closed-Loop Bio-Economy Linking Crops, Livestock & Soil",
      hi: "फसलों, पशुधन एवं मिट्टी को जोड़ने वाला शून्य-अपशिष्ट बायो-इकोनॉमी मॉडल",
    },
    badge: { en: "100% Closed Loop", hi: "शून्य अपशिष्ट" },
    heroDescription: {
      en: "A synchronized agricultural architecture where every output becomes a high-value input. Farm crop straw fuels gourmet mushrooms; spent mushroom blocks feed vermicompost; dung feeds Azolla and soil humus; and fodder powers dairy productivity.",
      hi: "एक संपूर्ण आत्मनिर्भर कृषि चक्र जहाँ कोई भी चीज बर्बाद नहीं होती। पराली से मशरूम, मशरूम अवशेष से केंचुआ खाद, गोबर से अजोला और हरे चारे से भरपूर दुग्ध उत्पादन।",
    },
    heroImage: "/media/soil3.png",
    metrics: [
      {
        label: { en: "Waste Elimination", hi: "अपशिष्ट में कमी" },
        value: "95%+",
        detail: { en: "Zero straw burning or organic residue dumping", hi: "पराली जलाने और कचरा फेंकने की जरूरत नहीं" },
      },
      {
        label: { en: "External Input Cut", hi: "बाहरी खर्च बचत" },
        value: "-45%",
        detail: { en: "Drastic reduction in purchased synthetic fertilizer & feed", hi: "रासायनिक खाद और महंगे चारे की खरीद में बड़ी कमी" },
      },
      {
        label: { en: "Thermodynamic Efficiency", hi: "संसाधन उपयोग क्षमता" },
        value: "91.4%",
        detail: { en: "Measured bio-energy retention across cycles", hi: "जैविक ऊर्जा और कार्बन का अधिकतम उपयोग" },
      },
      {
        label: { en: "Soil Carbon Increase", hi: "मृदा कार्बन वृद्धि" },
        value: "+0.8%",
        detail: { en: "Observed over 3 years of closed-loop application", hi: "लगातार उपयोग से मिट्टी के जैविक कार्बन में सुधार" },
      },
    ],
    overviewHeading: {
      en: "Reinventing Agriculture Through Nature's Cycles",
      hi: "प्राकृतिक संतुलन द्वारा टिकाऊ और लाभदायक खेती",
    },
    overviewText: {
      en: "Modern industrial agriculture is fractured—buying expensive synthetic inputs while burning crop residues. JAS Agro's circular model bridges these fragments into a harmonious self-supporting ecosystem that maximizes net revenue per acre while healing farm soil.",
      hi: "आधुनिक खेती में किसान महंगे इनपुट्स खरीदता है और खेत के अवशेषों को जला देता है। JAS एग्रो का सर्कुलर मॉडल इन सभी कड़ियों को जोड़कर एक आत्मनिर्भर फार्म बनाता है जहाँ हर उत्पाद अगले चक्र को शक्ति देता है।",
    },
    pillars: [
      {
        title: { en: "Biomass Valorization", hi: "पराली एवं बायोमास का मूल्य संवर्धन" },
        desc: {
          en: "Crop residues are gathered, shredded, pasteurized, and utilized for high-margin Oyster mushroom production instead of open burning.",
          hi: "फसल अवशेषों को जलाने के बजाय मशरूम उत्पादन और वर्मीकंपोस्ट के लिए मूल्यवान सबस्ट्रेट में बदलना।",
        },
        iconName: "Leaf",
        tag: { en: "Zero Stubble Burning", hi: "पराली मुक्ति" },
      },
      {
        title: { en: "SMS & Dung Humification", hi: "स्पेंट सबस्ट्रेट से समृद्ध खाद" },
        desc: {
          en: "Spent mushroom substrate is combined with cattle dung in vermiculture beds, accelerating earthworm multiplication and high-grade organic humus.",
          hi: "मशरूम कटाई के बाद बचा सबस्ट्रेट गोबर के साथ मिलकर केंचुओं के लिए उच्च-पोषक खाद बनाता है।",
        },
        iconName: "Recycle",
        tag: { en: "Soil Enrichment", hi: "मिट्टी सुधार" },
      },
      {
        title: { en: "Aquatic & Perennial Fodder Loop", hi: "अजोला और नेपियर चारा चक्र" },
        desc: {
          en: "Cow dung slurry nourishes high-protein Azolla ponds, while Super Napier produces 200+ tonnes of forage to sustain the dairy herd.",
          hi: "गोबर के तरल से अजोला और सुपर नेपियर की सिंचाई, जिससे पशुओं को सालभर पौष्टिक चारा मिलता है।",
        },
        iconName: "Waves",
        tag: { en: "Fodder Security", hi: "चारा सुरक्षा" },
      },
      {
        title: { en: "Water Efficiency & Sensor Synergy", hi: "जल दक्षता एवं सेंसर मेश" },
        desc: {
          en: "Drip fertigation utilizes vermiwash and bio-slurry, managed by real-time IoT soil sensors that cut water application by 42%.",
          hi: "वर्मीवाश और बायो-घोल की ड्रिप सिंचाई, जिसे IoT सेंसर नियंत्रित कर 42% तक पानी बचाते हैं।",
        },
        iconName: "Droplets",
        tag: { en: "Conservation", hi: "पानी की बचत" },
      },
    ],
    specs: [
      { label: { en: "Core System Components", hi: "मुख्य सिस्टम घटक" }, value: "Mushroom Chamber + Vermi Beds + Azolla Ponds + Napier Field + IoT Mesh" },
      { label: { en: "Minimum Land Area for Full Model", hi: "न्यूनतम भूमि आवश्यकता" }, value: "1 Acre (Integrated Demo Model)" },
      { label: { en: "Organic Waste Conversion Rate", hi: "जैविक कचरा रूपांतरण दर" }, value: "> 95% converted to yield/compost" },
      { label: { en: "Synthetic NPK Replacement Potential", hi: "रासायनिक खाद बचत" }, value: "60% – 85% reduction" },
      { label: { en: "Carbon Sequestration Rate", hi: "कार्बन स्थिरीकरण" }, value: "3.2 MT CO2e / acre / year" },
    ],
    applications: [
      { en: "Turnkey integrated model farm setups for progressive landowners", hi: "प्रगतिशील किसानों के लिए टर्नकी एकीकृत मॉडल फार्म" },
      { en: "Gaushalas seeking financial self-sustainability through bio-products", hi: "गौशालाओं के लिए आत्मनिर्भर बायो-प्रोडक्ट मॉडल" },
      { en: "Corporate CSR and agricultural sustainability initiatives", hi: "कॉर्पोरेट सीएसआर एवं सतत कृषि परियोजनाएं" },
      { en: "Agri-tourism and educational regenerative agriculture centers", hi: "कृषि पर्यटन एवं जैविक प्रशिक्षण केंद्र" },
    ],
    faqs: [
      {
        question: {
          en: "Can this circular model be implemented on small 1–2 acre farms?",
          hi: "क्या यह 1-2 एकड़ के छोटे खेत में भी लगाया जा सकता है?",
        },
        answer: {
          en: "Yes. The modules are fully scalable. A 1-acre setup can easily accommodate a 500 sq.ft mushroom room, 4 vermicompost beds, 2 Azolla tanks, and 0.5 acre of Super Napier.",
          hi: "हाँ। यह मॉडल पूरी तरह लचीला है। 1 एकड़ में 500 वर्गफुट मशरूम चैंबर, 4 वर्मीकंपोस्ट बेड, 2 अजोला तालाब और आधे एकड़ में नेपियर घास आसानी से लगाई जा सकती है।",
        },
      },
    ],
    relatedSlugs: ["farm-setup", "vermicompost", "azolla-farming"],
  },

  "farm-setup": {
    slug: "farm-setup",
    category: { en: "Turnkey Engineering", hi: "टर्नकी इंफ्रास्ट्रक्चर" },
    name: { en: "Turnkey Farm Setup & Engineering", hi: "टर्नकी फार्म सेटअप एवं इंफ्रास्ट्रक्चर" },
    tagline: {
      en: "End-to-End Planning, Civil Layout, IoT Integration & Commissioning",
      hi: "फार्म प्लानिंग, शेड निर्माण, IoT इंस्टॉलेशन एवं संपूर्ण टर्नकी सेटअप",
    },
    badge: { en: "End-to-End Execution", hi: "संपूर्ण टर्नकी सेवा" },
    heroDescription: {
      en: "From raw agricultural land to a fully operational, revenue-generating bio-tech farm. JAS Agro handles complete architectural layout, insulated chamber construction, irrigation networks, sensor wiring, and agronomic handholding.",
      hi: "खाली जमीन से लेकर चालू, लाभदायक और आधुनिक फार्म तैयार करने तक। JAS एग्रो शेड निर्माण, इंसुलेटेड चैंबर्स, ड्रिप नेटवर्क, IoT सेंसर इंस्टॉलेशन और शुरुआत में पूर्ण मार्गदर्शन प्रदान करता है।",
    },
    heroImage: "/media/Industrial Oyster Mushroom Farm.png",
    metrics: [
      {
        label: { en: "Setup Execution", hi: "सेटअप समय" },
        value: "30–60 Days",
        detail: { en: "From site survey to initial harvest readiness", hi: "साइट सर्वे से लेकर पहली फसल की तैयारी तक" },
      },
      {
        label: { en: "Custom Engineering", hi: "कस्टम डिजाइन" },
        value: "100% Tailored",
        detail: { en: "Optimized for local climate, water & soil conditions", hi: "स्थानीय मौसम, पानी और जमीन के अनुकूल" },
      },
      {
        label: { en: "On-Site Support", hi: "ऑन-साइट ट्रेनिंग" },
        value: "Included",
        detail: { en: "Practical training for your farm staff", hi: "फार्म टीम के लिए व्यावहारिक प्रशिक्षण शामिल" },
      },
      {
        label: { en: "ROI Horizon", hi: "लागत रिकवरी" },
        value: "6–12 Months",
        detail: { en: "High-margin multi-stream commercial revenue", hi: "बहु-उत्पाद आय से त्वरित लागत वसूली" },
      },
    ],
    overviewHeading: {
      en: "Turnkey Agro-Engineering for Flawless Farm Execution",
      hi: "बिना किसी परेशानी के आधुनिक फार्म की स्थापना",
    },
    overviewText: {
      en: "Building an advanced agricultural facility requires coordinating civil works, thermal insulation, plumbing, micro-climate controls, and biological culture seeding. JAS Agro acts as your single EPC (Engineering, Procurement, Construction) partner, guaranteeing performance from day one.",
      hi: "एक आधुनिक फार्म बनाने में सिविल काम, थर्मल इंसुलेशन, प्लंबिंग, माइक्रो-क्लाइमेट कंट्रोल और जैविक बीजों के समन्वय की जरूरत होती है। JAS एग्रो एकल टर्नकी पार्टनर के रूप में पूरी जिम्मेदारी के साथ काम करता है।",
    },
    pillars: [
      {
        title: { en: "Mushroom Grow Chamber Setup", hi: "मशरूम ग्रो चैंबर निर्माण" },
        desc: {
          en: "Engineered PUF sandwich insulated rooms with automated ultrasonic foggers, exhaust fans, and HEPA overpressure systems.",
          hi: "अल्ट्रासोनिक फॉगर्स, एग्जॉस्ट पंखे और तापमान नियंत्रण से लैस इंसुलेटेड ग्रो रूम्स।",
        },
        iconName: "Building2",
        tag: { en: "Mycology Chambers", hi: "माइकोलॉजी चैंबर" },
      },
      {
        title: { en: "Azolla & Vermicompost Infrastructure", hi: "अजोला एवं वर्मीकंपोस्ट बेड सेटअप" },
        desc: {
          en: "Excavation, brick edging, HDPE geomembrane lining, 50% shade-net roofing, and vermiwash drainage manifold.",
          hi: "HDPE लाइनिंग वाले तालाब, ईंटों के बेड, 50% शेडनेट छत और वर्मीवाश निष्कर्षण प्रणाली।",
        },
        iconName: "Layers",
        tag: { en: "Bio-Beds", hi: "बायो-बेड्स" },
      },
      {
        title: { en: "IoT Hardware & Sensor Mesh Installation", hi: "IoT हार्डवेयर एवं सेंसर इंस्टॉलेशन" },
        desc: {
          en: "Solar gateway mounting, soil moisture probe trenching, relay panel integration, and mobile dashboard configuration.",
          hi: "सोलर गेटवे, मिट्टी के नमी प्रोब्स, ऑटोमेशन रिले और मोबाइल ऐप सेटअप।",
        },
        iconName: "Cpu",
        tag: { en: "Smart AgTech", hi: "स्मार्ट हार्डवेयर" },
      },
      {
        title: { en: "Agronomic Staff Handholding", hi: "फार्म टीम का ऑन-साइट प्रशिक्षण" },
        desc: {
          en: "Comprehensive on-ground standard operating procedures (SOPs), culture replenishment protocols, and troubleshooting guides.",
          hi: "दैनिक संचालन विधियां (SOPs), उत्पादन तकनीक और नियमित सहायता।",
        },
        iconName: "Compass",
        tag: { en: "Operations", hi: "ऑपरेशंस" },
      },
    ],
    specs: [
      { label: { en: "Project Scope", hi: "परियोजना दायरा" }, value: "Civil Layout + Climate Chambers + Bio Beds + IoT Automation + Commissioning" },
      { label: { en: "Typical Capacities", hi: "मानक क्षमताएं" }, value: "500 sq.ft to 10+ Acres" },
      { label: { en: "Warranty & Handholding", hi: "वारंटी एवं सहयोग" }, value: "1-Year Comprehensive Warranty & Advisory" },
      { label: { en: "Power Requirement", hi: "बिजली आवश्यकता" }, value: "Single-phase / Three-phase or Solar Off-Grid" },
      { label: { en: "Implementation Timeline", hi: "पूरा होने का समय" }, value: "4 to 8 Weeks based on project scale" },
    ],
    applications: [
      { en: "Progressive farmers looking to modernize and diversify income", hi: "आय में विविधता लाने के इच्छुक प्रगतिशील किसान" },
      { en: "Commercial dairy farms establishing in-house fodder and bio-fertilizer plants", hi: "वाणिज्यिक डेयरी फार्मों में चारा और खाद संयंत्र" },
      { en: "Agricultural entrepreneurs and FPOs starting commercial bio-tech ventures", hi: "एग्री-उद्यमी एवं FPO समूह" },
      { en: "Institutions, schools, and gaushalas building sustainable campuses", hi: "गौशालाएं, संस्थान एवं टिकाऊ कृषि केंद्र" },
    ],
    faqs: [
      {
        question: {
          en: "What steps are involved in the turnkey setup process?",
          hi: "टर्नकी फार्म सेटअप में कौन-कौन से चरण होते हैं?",
        },
        answer: {
          en: "1. Site survey and water/soil testing → 2. Architectural layout & 3D planning → 3. Civil and chamber construction → 4. Sensor and equipment installation → 5. Biological seeding and trial runs → 6. Staff training and handover.",
          hi: "1. साइट सर्वे व मिट्टी-पानी की जांच → 2. लेआउट और प्लानिंग → 3. शेड व चैंबर निर्माण → 4. सेंसर व उपकरण फिटिंग → 5. बीज डालना व ट्रायल रन → 6. टीम ट्रेनिंग और हैंडओवर।",
        },
      },
    ],
    relatedSlugs: ["farm-advisory", "oyster-mushroom", "iot-farm-monitoring"],
  },

  "farm-advisory": {
    slug: "farm-advisory",
    category: { en: "Agronomic Consulting", hi: "कृषि परामर्श" },
    name: { en: "Agronomic Advisory & Crop Diagnostics", hi: "फार्म एडवाइजरी एवं एग्रोनॉमी परामर्श" },
    tagline: {
      en: "Expert Consultation for Yield Optimization, Substrates & Climate Adaptation",
      hi: "उपज वृद्धि, सबस्ट्रेट फॉर्मूलेशन एवं जलवायु अनुकूलन के लिए विशेषज्ञ परामर्श",
    },
    badge: { en: "Senior Agronomists", hi: "विशेषज्ञ परामर्श" },
    heroDescription: {
      en: "Direct access to JAS Agro's seasoned agronomists and mycology specialists. Get tailored project feasibility reports, substrate recipes, irrigation scheduling, and disease management strategies.",
      hi: "JAS एग्रो के अनुभवी कृषि विशेषज्ञों और माइकोलॉजिस्ट्स से सीधा मार्गदर्शन। प्रोजेक्ट रिपोर्ट, सबस्ट्रेट फॉर्मूलेशन, रोग नियंत्रण और पैदावार बढ़ाने की सटीक सलाह प्राप्त करें।",
    },
    heroImage: "/media/Industrial Oyster Mushroom Farm.png",
    metrics: [
      {
        label: { en: "Advisory Experience", hi: "फील्ड अनुभव" },
        value: "10+ Years",
        detail: { en: "Hands-on experience in harsh arid climates", hi: "शुष्क और कठिन मौसम में व्यावहारिक अनुभव" },
      },
      {
        label: { en: "Yield Optimization", hi: "उपज में सुधार" },
        value: "+20%–35%",
        detail: { en: "Observed across client farms post-consultation", hi: "सलाह के बाद फार्म्स में देखी गई औसत वृद्धि" },
      },
      {
        label: { en: "Response Time", hi: "क्विक सपोर्ट" },
        value: "< 24 Hours",
        detail: { en: "Direct agronomist phone and WhatsApp hotline", hi: "फोन और व्हाट्सएप पर त्वरित सहायता" },
      },
      {
        label: { en: "Diagnostic Precision", hi: "सटीक डायग्नोस्टिक्स" },
        value: "Data-Driven",
        detail: { en: "Supported by live soil and micro-climate telemetry", hi: "मिट्टी और मौसम के वास्तविक डेटा पर आधारित" },
      },
    ],
    overviewHeading: {
      en: "Scientific Guidance to Protect Your Farm Investment",
      hi: "आपकी कृषि लागत और मेहनत को सुरक्षित रखने के लिए वैज्ञानिक मार्गदर्शन",
    },
    overviewText: {
      en: "Farming in extreme weather requires constant adaptation. Our advisory service provides actionable scientific recommendations—from substrate pasteurization parameters and biological pest countermeasures to precision soil nutrient balancing.",
      hi: "कठिन मौसम में सफल खेती के लिए वैज्ञानिक सलाह बहुत जरूरी है। हमारा एडवाइजरी प्रोग्राम सही सबस्ट्रेट तैयारी, जैविक कीट नियंत्रण और मिट्टी के पोषण संतुलन के लिए व्यावहारिक मार्गदर्शन देता है।",
    },
    pillars: [
      {
        title: { en: "Substrate & Spawn Chemistry", hi: "सबस्ट्रेट एवं स्पॉन फॉर्मूलेशन" },
        desc: {
          en: "Customized recipes for wheat straw, mustard husk, and paddy straw pasteurization and lime balancing.",
          hi: "गेहूं की तूड़ी, सरसों के अवशेष और पराली के उपचार की सही तकनीक।",
        },
        iconName: "Sparkles",
        tag: { en: "Mycology", hi: "माइकोलॉजी" },
      },
      {
        title: { en: "Soil & Water Diagnostic Audits", hi: "मिट्टी एवं पानी की जांच व रिपोर्ट" },
        desc: {
          en: "Laboratory and sensor analysis of pH, TDS, EC, nitrogen, organic carbon, and boron levels with clear remediation steps.",
          hi: "pH, TDS, EC और जैविक कार्बन की जांच कर जमीन सुधारने की ठोस कार्ययोजना।",
        },
        iconName: "Activity",
        tag: { en: "Soil Science", hi: "मृदा विज्ञान" },
      },
      {
        title: { en: "Fodder & Livestock Nutrition Rationing", hi: "पशु आहार एवं चारा संतुलन" },
        desc: {
          en: "Calculated feed blending combining Azolla, Super Napier, and dry straw to maximize milk yield while minimizing feed cost.",
          hi: "अजोला, नेपियर और सूखे चारे का सही अनुपात बनाकर दूध बढ़ाने और खर्च घटाने का फॉर्मूला।",
        },
        iconName: "Wheat",
        tag: { en: "Dairy Nutrition", hi: "डेयरी पोषण" },
      },
      {
        title: { en: "Commercial Bankable Project DPRs", hi: "बैंक ऋण एवं सब्सिडी DPR रिपोर्ट्स" },
        desc: {
          en: "Detailed Project Reports (DPRs) with cash flow forecasts for commercial loans, NABARD subsidies, and government schemes.",
          hi: "बैंक लोन, नाबार्ड और सरकारी सब्सिडी के लिए पूर्ण प्रोजेक्ट रिपोर्ट्स।",
        },
        iconName: "Target",
        tag: { en: "Financial Feasibility", hi: "फाइनेंशियल प्लानिंग" },
      },
    ],
    specs: [
      { label: { en: "Consultation Modes", hi: "परामर्श के माध्यम" }, value: "On-Site Farm Visit / Video Consultation / WhatsApp Agronomy Hotline" },
      { label: { en: "Agronomist Direct Line", hi: "विशेषज्ञ हेल्पलाइन" }, value: "+91 73729 26623" },
      { label: { en: "Turnaround for DPRs", hi: "DPR रिपोर्ट समय" }, value: "3 to 5 Business Days" },
      { label: { en: "Supported Crops & Systems", hi: "समर्थित प्रणालियां" }, value: "Mushroom, Azolla, Napier, Vermicompost, Greenhouse, IoT" },
    ],
    applications: [
      { en: "New farm entrepreneurs requiring pre-investment validation", hi: "नया फार्म शुरू करने वाले उद्यमी" },
      { en: "Existing farms facing yield drops, mold contamination, or water stress", hi: "कम पैदावार या बीमारियों से जूझ रहे किसान" },
      { en: "Dairy cooperatives upgrading livestock feed formulations", hi: "डेयरी समितियां और गौशालाएं" },
      { en: "FPOs applying for agricultural infrastructure subsidies", hi: "कृषि योजनाओं के लिए आवेदन करने वाले FPO" },
    ],
    faqs: [
      {
        question: {
          en: "How can I book an advisory session with a JAS Agronomist?",
          hi: "JAS एग्रो के कृषि विशेषज्ञ से सलाह के लिए कैसे संपर्क करें?",
        },
        answer: {
          en: "You can call or WhatsApp our senior advisory desk at +91 73729 26623 or click 'Request Consultation' to schedule an on-site or digital meeting.",
          hi: "आप हमारे एडवाइजरी डेस्क पर +91 73729 26623 पर कॉल या व्हाट्सएप कर सकते हैं अथवा वेबसाइट पर 'कोटेशन / परामर्श' फॉर्म भर सकते हैं।",
        },
      },
    ],
    relatedSlugs: ["farm-setup", "oyster-mushroom", "circular-farming"],
  },

  "climate-monitoring": {
    slug: "climate-monitoring",
    category: { en: "Smart Agriculture", hi: "स्मार्ट एग्रीकल्चर" },
    name: { en: "Climate & Canopy Monitoring", hi: "क्लाइमेट एवं कैनोपी मॉनिटरिंग" },
    tagline: {
      en: "Real-Time Vapor Pressure Deficit (VPD), Solar Radiation & Micro-Climate Telemetry",
      hi: "रियल-टाइम वाष्प दबाव घाटा (VPD), सौर विकिरण व माइक्रो-क्लाइमेट टेलीमेट्री",
    },
    badge: { en: "Precision Sensing", hi: "सटीक सेंसिंग" },
    heroDescription: {
      en: "Monitor ambient temperature, relative humidity, light saturation, and VPD across open fields, greenhouses, and fruiting chambers to detect crop thermal stress before tissue damage occurs.",
      hi: "खुले खेतों, पॉलीहाउस और मशरूम चैंबर्स में तापमान, आर्द्रता, धूप और VPD की रियल-टाइम निगरानी ताकि पौधों पर मौसम की मार पड़ने से पहले बचाव किया जा सके।",
    },
    heroImage: "/media/sun2.png",
    metrics: [
      {
        label: { en: "Sensor Accuracy", hi: "सेंसर सटीकता" },
        value: "±0.2°C / ±2% RH",
        detail: { en: "Swiss Sensirion calibrated digital core", hi: "स्विस सेंसिरियन कैलिब्रेटेड डिजिटल चिप" },
      },
      {
        label: { en: "VPD Range", hi: "VPD मापन रेंज" },
        value: "0.0 – 5.0 kPa",
        detail: { en: "Direct transpiration stress calculation", hi: "पौधों में वाष्पोत्सर्जन तनाव का सीधा मापन" },
      },
      {
        label: { en: "Sample Frequency", hi: "सैंपलिंग फ्रीक्वेंसी" },
        value: "Every 10s",
        detail: { en: "Instant detection of thermal micro-spikes", hi: "तापमान में अचानक बदलाव की त्वरित पहचान" },
      },
      {
        label: { en: "Field Autonomy", hi: "बैटरी बैकअप" },
        value: "Solar Off-Grid",
        detail: { en: "Continuous operation through dust & monsoons", hi: "धूल और बारिश में भी 24x7 निरंतर एक्टिव" },
      },
    ],
    overviewHeading: {
      en: "Eliminate Weather Blindspots with Micro-Climate Intelligence",
      hi: "सूक्ष्म-जलवायु की सटीक निगरानी से फसलों को तनाव-मुक्त रखें",
    },
    overviewText: {
      en: "Ambient weather reports from distant meteorology stations do not reflect true crop-canopy micro-climates. JAS Agro's Climate Monitoring nodes sit directly within the crop canopy and grow rooms, tracking Vapor Pressure Deficit (VPD), leaf temperature, and relative humidity to optimize stomatal opening and transpiration.",
      hi: "दूर के मौसम केंद्र का डेटा आपके खेत या पॉलीहाउस के अंदरूनी तापमान से काफी अलग होता है। JAS एग्रो के क्लाइमेट नोड्स सीधे पौधों के बीच लगकर पत्तियों का तापमान, नमी और VPD मापते हैं, जिससे पौधों का भोजन बनाने और सांस लेने का चक्र हमेशा सही रहता है।",
    },
    pillars: [
      {
        title: { en: "Vapor Pressure Deficit (VPD) Engine", hi: "VPD कैलकुलेशन इंजन" },
        desc: {
          en: "Computes the exact atmospheric drying power to ensure plant stomata stay open for continuous nutrient uptake without wilting.",
          hi: "हवा में वाष्प के दबाव के अंतर की गणना करता है ताकि पौधे बिना तनाव के पोषक तत्व सोख सकें।",
        },
        iconName: "Sun",
        tag: { en: "Canopy Health", hi: "कैनोपी स्वास्थ्य" },
      },
      {
        title: { en: "Solar Radiation & Lux Tracking", hi: "सौर विकिरण एवं प्रकाश तीव्रता" },
        desc: {
          en: "Pyranometer and lux sensors measure Photosynthetically Active Radiation (PAR) to optimize shading-net deployment.",
          hi: "धूप की तीव्रता और प्रकाश को मापकर शेडनेट को सही समय पर उपयोग करने में मदद करता है।",
        },
        iconName: "Sparkles",
        tag: { en: "PAR Telemetry", hi: "प्रकाश मापन" },
      },
      {
        title: { en: "Multi-Zone Thermal Mapping", hi: "मल्टी-ज़ोन तापमान मैपिंग" },
        desc: {
          en: "Multiple wireless nodes identify hot spots and humidity dead zones across large polyhouses and mushroom fruiting chambers.",
          hi: "बड़े शेड्स या कमरों के अलग-अलग कोनों में तापमान के अंतर और हवा के ठहराव की पहचान।",
        },
        iconName: "Activity",
        tag: { en: "Spatial Precision", hi: "ज़ोन मैपिंग" },
      },
      {
        title: { en: "Early Thermal Alert Broadcast", hi: "त्वरित तापमान अलर्ट" },
        desc: {
          en: "Instant WhatsApp and SMS notifications fire before critical heatwave or freezing thresholds trigger crop shock.",
          hi: "पाला पड़ने या लू चलने से पहले ही किसान के मोबाइल पर अलर्ट भेजकर फसल सुरक्षा सुनिश्चित करता है।",
        },
        iconName: "Radio",
        tag: { en: "Proactive Defense", hi: "सुरक्षा अलर्ट" },
      },
    ],
    specs: [
      { label: { en: "Temperature Measurement Range", hi: "तापमान मापन रेंज" }, value: "-40°C to +85°C (±0.2°C)" },
      { label: { en: "Humidity Measurement Range", hi: "नमी मापन रेंज" }, value: "0% to 100% RH (±2% RH)" },
      { label: { en: "Light Intensity Sensor", hi: "प्रकाश सेंसर" }, value: "0 to 188,000 Lux (PAR Compatible)" },
      { label: { en: "Wireless Protocol", hi: "संचार माध्यम" }, value: "LoRaWAN 865-867 MHz / Wi-Fi Mesh" },
      { label: { en: "Telemetry Frequency", hi: "डेटा अंतराल" }, value: "Configurable 10s to 15 min" },
      { label: { en: "Ingress Protection", hi: "मौसम सुरक्षा" }, value: "IP66 Weatherproof Polycarbonate" },
    ],
    applications: [
      { en: "High-density mushroom fruiting chamber climate stabilization", hi: "मशरूम ग्रो रूम में सटीक तापमान व नमी बनाए रखने हेतु" },
      { en: "Commercial polyhouse vegetable & floriculture canopy monitoring", hi: "पॉलीहाउस में शिमला मिर्च, खीरा एवं फूलों की खेती" },
      { en: "Open orchard frost warning and heatwave defense", hi: "फलों के बगीचों में पाला और लू से बचाव" },
      { en: "Seed breeding and tissue culture hardening tunnels", hi: "टिशू कल्चर एवं बीज उत्पादन प्रयोगशालाएं" },
    ],
    faqs: [
      {
        question: {
          en: "What is VPD and why is it better than just checking relative humidity?",
          hi: "VPD क्या है और यह केवल नमी देखने से बेहतर क्यों है?",
        },
        answer: {
          en: "VPD (Vapor Pressure Deficit) combines temperature and relative humidity into a single metric representing plant transpiration stress. It tells you whether plants are actively evaporating water and absorbing root nutrients, preventing calcium deficiencies and fungal rot.",
          hi: "VPD तापमान और नमी का संयुक्त वैज्ञानिक सूचकांक है जो बताता है कि पौधे सही ढंग से पानी और पोषक तत्व खींच रहे हैं या नहीं। इससे पौधों में पोषक तत्वों की कमी और फंगस की बीमारियां नहीं होतीं।",
        },
      },
      {
        question: {
          en: "Can the climate monitoring system connect to my existing foggers and fans?",
          hi: "क्या यह सिस्टम मेरे पुराने फॉगर्स और पंखों से जुड़ सकता है?",
        },
        answer: {
          en: "Yes. Our climate telemetry gateway interfaces directly with JAS Agro Automated Control panels or third-party electrical starters via dry contact relays.",
          hi: "हाँ। हमारा क्लाइमेट गेटवे JAS एग्रो ऑटोमेशन पैनल या किसी भी मौजूदा स्टार्टर रिले से सीधे जुड़कर फॉगर्स को स्वतः चालू कर देता है।",
        },
      },
    ],
    relatedSlugs: ["automated-farm-control", "iot-farm-monitoring", "oyster-mushroom"],
  },

  "automated-farm-control": {
    slug: "automated-farm-control",
    category: { en: "Smart Agriculture", hi: "स्मार्ट एग्रीकल्चर" },
    name: { en: "Automated Farm Control & Actuation", hi: "ऑटोमेटेड फार्म कंट्रोल एवं एक्चुएशन" },
    tagline: {
      en: "Closed-Loop ESP32 Relay Actuation for Precision Misting, Pumps & Ventilation",
      hi: "मिस्टिंग, पंप और वेंटिलेशन के लिए क्लोज्ड-लूप ESP32 रिले एक्चुएशन",
    },
    badge: { en: "Smart Automation", hi: "स्मार्ट ऑटोमेशन" },
    heroDescription: {
      en: "Eliminate manual guesswork with intelligent threshold-driven actuation. Automatically trigger irrigation solenoids, high-pressure ultrasonic foggers, and exhaust louvers based on live environmental telemetry.",
      hi: "सेंसर डेटा के आधार पर ड्रिप सिंचाई, मिस्टिंग फॉगर्स और एग्जॉस्ट पंखों का स्वतः नियंत्रण। मौसम बदलते ही सिस्टम खुद काम करता है, मैन्युअल निगरानी की जरूरत नहीं।",
    },
    heroImage: "/media/smartagri4.png",
    metrics: [
      {
        label: { en: "Switching Speed", hi: "रिस्पॉन्स टाइम" },
        value: "< 50 ms",
        detail: { en: "Solid-state zero-cross relay switching", hi: "सॉलिड-स्टेट रिले द्वारा त्वरित ऑन/ऑफ" },
      },
      {
        label: { en: "Water Conservation", hi: "जल बचत" },
        value: "35%–42%",
        detail: { en: "Eliminates over-watering and dry run losses", hi: "अत्यधिक सिंचाई और मोटर खाली चलने से बचाव" },
      },
      {
        label: { en: "Motor Protection", hi: "मोटर सुरक्षा" },
        value: "100% Fail-Safe",
        detail: { en: "Phase asymmetry & dry-run shutdown logic", hi: "ड्राई-रन और वोल्टेज उतार-चढ़ाव में ऑटो कट" },
      },
      {
        label: { en: "Channel Expansion", hi: "कंट्रोल पोर्ट्स" },
        value: "4 to 16 Relays",
        detail: { en: "Scalable modular DIN-rail industrial form factor", hi: "4 से 16 चैनल तक विस्तार योग्य" },
      },
    ],
    overviewHeading: {
      en: "Autonomous Agricultural Control for Uninterrupted Operations",
      hi: "24x7 बिना रुके चलने वाला स्वचालित फार्म नियंत्रण सिस्टम",
    },
    overviewText: {
      en: "Agricultural crops suffer when irrigation and misting depend on human presence, especially during odd hours or peak heatwaves. JAS Agro's Automated Farm Control modules execute localized feedback loops: when soil moisture drops below field capacity or VPD spikes above safe limits, pumps and foggers activate instantly for precise calibrated durations.",
      hi: "जब सिंचाई या मिस्टिंग मजदूरों पर निर्भर होती है, तो अक्सर देरी से फसल को नुकसान होता है। JAS एग्रो का ऑटोमेशन सिस्टम सेंसर से कमांड लेकर खुद ही ड्रिप लाइन या मिस्टिंग फॉगर्स को शुरू कर देता है और पर्याप्त नमी होते ही बंद कर देता है।",
    },
    pillars: [
      {
        title: { en: "Closed-Loop Dynamic Actuation", hi: "क्लोज्ड-लूप स्वचालित नियंत्रण" },
        desc: {
          en: "Local microcontrollers run deterministic automation scripts on-device, operating flawlessly even during complete internet or cloud outages.",
          hi: "बिना इंटरनेट के भी ऑन-बोर्ड चिप सेंसर के अनुसार फॉगर्स और वाल्व को अपने आप चलाती है।",
        },
        iconName: "Activity",
        tag: { en: "Local Autonomy", hi: "लोकल ऑटोमेशन" },
      },
      {
        title: { en: "Multi-Zone Solenoid Valving", hi: "मल्टी-ज़ोन सोलेनोइड वाल्विंग" },
        desc: {
          en: "Sequences sectional irrigation across multiple crop blocks or mushroom chambers to preserve water pressure and pump efficiency.",
          hi: "अलग-अलग क्यारियों या कमरों में बारी-बारी से पानी देकर प्रेशर और मोटर की क्षमता बनाए रखना।",
        },
        iconName: "Layers",
        tag: { en: "Pressure Balanced", hi: "प्रेशर संतुलन" },
      },
      {
        title: { en: "Dry-Run & Phase Protection", hi: "ड्राई-रन एवं मोटर सुरक्षा" },
        desc: {
          en: "Integrated current transformers detect pipe burst, dry well draw, or low phase voltage, instantly disconnecting motors before burnout.",
          hi: "पानी खत्म होने या बिजली का फेज उड़ने पर मोटर को सेकंडों में बंद कर जलने से बचाना।",
        },
        iconName: "ShieldCheck",
        tag: { en: "Hardware Armor", hi: "सुरक्षा कवच" },
      },
      {
        title: { en: "Mobile Manual Override", hi: "मोबाइल मैन्युअल कंट्रोल" },
        desc: {
          en: "Farmers can override automated rules anytime with a single tap on their smartphone from anywhere in the world.",
          hi: "दुनिया में कहीं से भी मोबाइल ऐप से एक क्लिक में किसी भी पंप या पंखे को ऑन/ऑफ करने की सुविधा।",
        },
        iconName: "Radio",
        tag: { en: "Remote Control", hi: "रिमोट कंट्रोल" },
      },
    ],
    specs: [
      { label: { en: "Relay Outputs", hi: "रिले आउटपुट" }, value: "4 / 8 / 16 Independent Optoisolated Channels" },
      { label: { en: "Contact Rating", hi: "रिले क्षमता" }, value: "16A @ 250V AC / 30V DC per channel" },
      { label: { en: "Supported Actuators", hi: "समर्थित उपकरण" }, value: "Solenoid Valves, 3-Phase Starter Panels, Foggers, Fans, VFDs" },
      { label: { en: "Enclosure", hi: "पैनल बॉडी" }, value: "IP65 Weatherproof Industrial Panel with DIN-Rail Mount" },
      { label: { en: "Input Power", hi: "ऑपरेटिंग वोल्टेज" }, value: "110–240V AC / 12V DC Solar Input" },
      { label: { en: "Local Manual Controls", hi: "लोकल स्विच" }, value: "Illuminated Pushbutton Overrides with Status LEDs" },
    ],
    applications: [
      { en: "Automated ultrasonic misting and CO2 exhaust in mushroom rooms", hi: "मशरूम चैंबर्स में मिस्टिंग और CO2 एग्जॉस्ट का स्वतः संचालन" },
      { en: "Sectorized drip fertigation in commercial orchards and polyhouses", hi: "बागवानी और पॉलीहाउस में स्वचालित खाद व ड्रिप सिंचाई" },
      { en: "Livestock shed cooling fans and evaporative pad automation", hi: "डेयरी शेड में तापमान अनुसार पंखे और कूलिंग पैड चलना" },
      { en: "Solar pump automated reservoir filling and overflow prevention", hi: "सोलर पंप से हौज भरने और ओवरफ्लो रोकने का ऑटोमेशन" },
    ],
    faqs: [
      {
        question: {
          en: "What happens to automated control if the internet goes down?",
          hi: "यदि इंटरनेट बंद हो जाए तो ऑटोमेशन कैसे काम करेगा?",
        },
        answer: {
          en: "The automation rules are stored and executed directly on the local ESP32 controller hardware. All sensor triggers, pump timers, and protection cutoffs continue working 100% offline without interruption.",
          hi: "ऑटोमेशन के सभी नियम सीधे लोकल कंट्रोलर हार्डवेयर में सुरक्षित रहते हैं। इंटरनेट बंद होने पर भी सभी सेंसर, टाइमर और मोटर सुरक्षा पूरी तरह सामान्य रूप से काम करते रहते हैं।",
        },
      },
      {
        question: {
          en: "Can this system start 5 HP or 7.5 HP tubewell submersible motors?",
          hi: "क्या यह 5 HP या 7.5 HP की सबमर्सिबल मोटर चला सकता है?",
        },
        answer: {
          en: "Yes. Our control panel connects to the control coil of your existing magnetic contactor starter panel (L&T, BCH, Havells, etc.), providing safe switching for high-horsepower motors.",
          hi: "हाँ। हमारा कंट्रोल पैनल आपके मौजूदा स्टार्टर के कॉन्टैक्टर से जुड़कर बड़ी सबमर्सिबल मोटरों को सुरक्षित रूप से चालू और बंद करता है।",
        },
      },
    ],
    relatedSlugs: ["climate-monitoring", "iot-farm-monitoring", "mushroom-farm-setup"],
  },

  "biomass-management": {
    slug: "biomass-management",
    category: { en: "Sustainable Systems", hi: "सतत प्रणालियाँ" },
    name: { en: "Farm Biomass & Crop Residue Management", hi: "बायोमास एवं पराली प्रबंधन" },
    tagline: {
      en: "Zero-Burning Agricultural Residue Conversion into Mushroom Substrate & Organic Humus",
      hi: "पराली को जलाए बिना मशरूम सबस्ट्रेट और जैविक खाद में रूपांतरण",
    },
    badge: { en: "Zero Stubble Burning", hi: "पराली मुक्ति" },
    heroDescription: {
      en: "Convert wheat straw, paddy straw, and crop stubble into high-value oyster mushroom cultivation substrates and premium organic vermicompost, completely halting field burning while generating multi-stream farm revenue.",
      hi: "गेहूं की तूड़ी, धान की पराली और कृषि अवशेषों को जलाने के बजाय मशरूम उत्पादन और केंचुआ खाद में बदलें। पर्यावरण सुरक्षा के साथ अतिरिक्त आय।",
    },
    heroImage: "/media/soil3.png",
    metrics: [
      {
        label: { en: "Residue Valorization", hi: "अवशेष उपयोग दर" },
        value: "100%",
        detail: { en: "Zero field burning of straw or husks", hi: "खेत में पराली जलाने की शून्य आवश्यकता" },
      },
      {
        label: { en: "Biomass to Food", hi: "भोजन रूपांतरण" },
        value: "800 kg / Ton",
        detail: { en: "Fresh oyster mushrooms per dry ton of straw", hi: "1 टन तूड़ी से 800 किग्रा तक ताजा मशरूम" },
      },
      {
        label: { en: "Carbon Preservation", hi: "कार्बन संरक्षण" },
        value: "+100%",
        detail: { en: "Soil organic matter returned to the earth", hi: "मिट्टी का जैविक कार्बन जमीन में ही सुरक्षित" },
      },
      {
        label: { en: "Added Income / Acre", hi: "अतिरिक्त आय" },
        value: "₹25,000+",
        detail: { en: "Generated from previously discarded crop waste", hi: "बेकार समझे जाने वाले कचरे से नया मुनाफा" },
      },
    ],
    overviewHeading: {
      en: "Turning Crop Residues from an Environmental Burden into Gold",
      hi: "फसल अवशेषों को जलाने के संकट से मुक्ति और नई आमदनी",
    },
    overviewText: {
      en: "Crop stubble burning damages soil biology, wastes valuable carbon, and causes severe air pollution. JAS Agro's Biomass Management framework collects farm residues (paddy straw, wheat straw, mustard stalks, sugarcane bagasse) and funnels them through a two-stage biological refining loop: first generating edible mushrooms, then producing organic vermicompost.",
      hi: "पराली जलाने से जमीन के मित्र कीट मर जाते हैं और पोषक तत्व नष्ट हो जाते हैं। JAS एग्रो का बायोमास प्रबंधन मॉडल फसल अवशेषों को दो चरणों में इस्तेमाल करता है: पहले उच्च-गुणवत्ता वाले मशरूम का उत्पादन, और फिर बचे हुए सबस्ट्रेट से जैविक केंचुआ खाद का निर्माण।",
    },
    pillars: [
      {
        title: { en: "Mechanical Residue Shredding & Sizing", hi: "पराली कटाई एवं श्रेडिंग" },
        desc: {
          en: "Custom chopping protocols reduce straw to optimum 2–4 cm fiber lengths, maximizing surface area for rapid fungal colonization.",
          hi: "पराली को 2-4 सेमी के टुकड़ों में काटकर फंगस के फैलाव के लिए अनुकूल बनाना।",
        },
        iconName: "Wheat",
        tag: { en: "Pre-Processing", hi: "प्री-प्रोसेसिंग" },
      },
      {
        title: { en: "Low-Energy Pasteurization Boiler", hi: "स्टीम पाश्चुरीकरण प्रणाली" },
        desc: {
          en: "Steam chambers eliminate competitive wild molds without using hazardous synthetic chemicals, ensuring 100% organic mushroom growth.",
          hi: "बिना किसी केमिकल के केवल भाप द्वारा सबस्ट्रेट को शुद्ध और कीटाणुरहित करना।",
        },
        iconName: "Droplets",
        tag: { en: "Clean Prep", hi: "सुरक्षित उपचार" },
      },
      {
        title: { en: "Spent Mushroom Substrate (SMS) Reclaim", hi: "स्पेंट सबस्ट्रेट का पुनर्उपयोग" },
        desc: {
          en: "Pre-digested mycelial blocks break down 3x faster in vermicompost beds, creating humic-rich organic manure in record time.",
          hi: "मशरूम के बाद बची तूड़ी केंचुओं के लिए सुपाच्य भोजन बनती है और 3 गुना तेजी से खाद बनाती है।",
        },
        iconName: "Recycle",
        tag: { en: "Circular Ecology", hi: "सर्कुलर रीसाइक्लिंग" },
      },
      {
        title: { en: "FPO Biomass Aggregation Logistics", hi: "FPO स्तर पर पराली एकत्रीकरण" },
        desc: {
          en: "Turnkey aggregation models allow Farmer Producer Organizations to turn regional stubble burning into profitable village enterprises.",
          hi: "किसान उत्पादक संगठनों (FPO) के लिए पराली एकत्रीकरण और सामूहिक कमाई का मॉडल।",
        },
        iconName: "Building2",
        tag: { en: "Community Value", hi: "सामूहिक लाभ" },
      },
    ],
    specs: [
      { label: { en: "Compatible Biomass Types", hi: "उपयुक्त बायोमास प्रकार" }, value: "Wheat Straw, Paddy Straw, Mustard Stalks, Cotton Stalks, Sugarcane Bagasse" },
      { label: { en: "Chopping Particle Size", hi: "टुकड़ों का आकार" }, value: "2 cm to 5 cm uniform fibers" },
      { label: { en: "Pasteurization Temperature", hi: "पाश्चुरीकरण तापमान" }, value: "65°C – 70°C for 2.5 hours" },
      { label: { en: "Moisture Content at Spawning", hi: "सबस्ट्रेट में नमी" }, value: "60% – 65% (Squeeze test calibrated)" },
      { label: { en: "SMS Decomposition Rate", hi: "केंचुआ खाद रूपांतरण समय" }, value: "35 – 45 Days in vermi beds" },
      { label: { en: "Air Quality Impact", hi: "प्रदूषण रोकथाम" }, value: "100% Elimination of PM2.5 emissions per ton" },
    ],
    applications: [
      { en: "FPO and cooperative biomass recycling centers", hi: "FPO एवं सहकारी बायोमास प्रोसेसिंग केंद्र" },
      { en: "Paddy growing belts seeking alternatives to stubble burning penalties", hi: "धान उत्पादक क्षेत्रों में पराली प्रबंधन का स्थायी हल" },
      { en: "Organic dairy farms converting cattle dung and leftover fodder into compost", hi: "डेयरी फार्मों में बचे चारे और गोबर का संपूर्ण रीसाइक्लिंग" },
      { en: "Corporate ESG carbon credit agro-forestry initiatives", hi: "पर्यावरण और कार्बन क्रेडिट कृषि परियोजनाएं" },
    ],
    faqs: [
      {
        question: {
          en: "Can paddy (rice) straw be used for growing Oyster mushrooms?",
          hi: "क्या धान की पराली से ऑयस्टर मशरूम उगाया जा सकता है?",
        },
        answer: {
          en: "Yes. Paddy straw is rich in cellulose and is an excellent substrate for Oyster mushroom varieties (Pleurotus florida and Pleurotus sajor-caju), delivering high yields when shredded and properly pasteurized.",
          hi: "हाँ। धान की पराली में सेल्यूलोज भरपूर मात्रा में होता है और यह ऑयस्टर मशरूम के लिए बहुत बढ़िया सबस्ट्रेट है। इसे काटकर भाप से उपचारित करने पर भरपूर पैदावार मिलती है।",
        },
      },
      {
        question: {
          en: "How does spent mushroom substrate benefit the soil?",
          hi: "मशरूम कटाई के बाद बचा हुआ सबस्ट्रेट मिट्टी के लिए कैसे फायदेमंद है?",
        },
        answer: {
          en: "Spent Mushroom Substrate (SMS) is softened organic fiber infused with fungal enzymes. When added to soil or vermiculture beds, it rapidly boosts humic acid, improves water retention, and rebuilds beneficial soil microbial colonies.",
          hi: "यह सबस्ट्रेट फंगल एंजाइम्स से भरपूर होता है। जब इसे केंचुआ खाद में या सीधे खेत में डाला जाता है, तो यह मिट्टी में ह्यूमिक एसिड बढ़ाता है और नमी रोकने की क्षमता को मजबूत करता है।",
        },
      },
    ],
    relatedSlugs: ["circular-farming", "oyster-mushroom", "vermicompost"],
  },

  "water-efficiency": {
    slug: "water-efficiency",
    category: { en: "Sustainable Systems", hi: "सतत प्रणालियाँ" },
    name: { en: "Precision Water Efficiency Systems", hi: "सटीक जल दक्षता प्रणालियाँ" },
    tagline: {
      en: "Sub-Surface Root-Zone Delivery & Micro-Misting Cutting Agricultural Water Footprint by 42%",
      hi: "रूट-ज़ोन सिंचाई एवं अल्ट्रासोनिक मिस्टिंग से पानी की 42% तक बचत",
    },
    badge: { en: "Water Smart", hi: "जल संरक्षण" },
    heroDescription: {
      en: "Maximize crop yield per liter of water delivered. Utilizing multi-depth soil moisture profiling, pressure-compensating drip manifolds, and micro-aerosol misting to thrive in arid conditions.",
      hi: "प्रति लीटर पानी से अधिकतम पैदावार। मिट्टी के नमी सेंसर, ड्रिप नेटवर्क और ड्राई-फॉग मिस्टिंग से शुष्क क्षेत्रों में भी पानी की भारी बचत।",
    },
    heroImage: "/media/Hands Holding Lush Aquatic Greens.png",
    metrics: [
      {
        label: { en: "Water Savings", hi: "पानी की बचत" },
        value: "Up to 42%",
        detail: { en: "Compared to traditional flood and furrow irrigation", hi: "पारंपरिक खुली सिंचाई की तुलना में भारी बचत" },
      },
      {
        label: { en: "Application Efficiency", hi: "जल उपयोग दक्षता" },
        value: "92%+",
        detail: { en: "Targeted delivery straight to root and foliar zone", hi: "सीधे पौधों की जड़ों तक पानी की आपूर्ति" },
      },
      {
        label: { en: "Salinity Build-Up", hi: "खारेपन से सुरक्षा" },
        value: "Zero Crust",
        detail: { en: "Prevents surface salt crumbing from over-evaporation", hi: "जमीन की ऊपरी सतह पर नमक जमने से बचाव" },
      },
      {
        label: { en: "Misting Droplet Size", hi: "मिस्टिंग कण आकार" },
        value: "5–10 μm",
        detail: { en: "Dry-fog suspension providing max humidity with min water", hi: "कम पानी में कमरे को ठंडा और नम रखने की तकनीक" },
      },
    ],
    overviewHeading: {
      en: "Thriving in Water-Stressed Realities with Precision Hydrology",
      hi: "कम पानी और खारे पानी वाले इलाकों में भी बेहतरीन पैदावार",
    },
    overviewText: {
      en: "Water tables in arid farming zones are sinking, and conventional flooding wastes over 50% of pumped groundwater to deep percolation and evaporation. JAS Agro integrates smart root-zone drip irrigation, capacitive depth moisture triggers, and high-pressure aerosol fogging to slash water consumption while enhancing plant vigor.",
      hi: "शुष्क इलाकों में भूजल का स्तर लगातार गिर रहा है और खुली सिंचाई में आधा पानी वाष्पीकरण में उड़ जाता है। JAS एग्रो का वॉटर-एफिशिएंसी सिस्टम जड़ों में नमी के स्तर को मापकर जरूरत के हिसाब से ड्रिप और मिस्टिंग चलाता है, जिससे हर बूंद का पूरा फायदा मिलता है।",
    },
    pillars: [
      {
        title: { en: "Depth-Calibrated Moisture Triggering", hi: "गहराई अनुसार नमी आधारित सिंचाई" },
        desc: {
          en: "Soil probes at 15cm and 30cm prevent over-irrigation by cutting off pumps the moment target volumetric water content is reached.",
          hi: "मिट्टी में पर्याप्त नमी होते ही पंप को तुरंत बंद कर पानी की बर्बादी रोकना।",
        },
        iconName: "Droplets",
        tag: { en: "Root Zone", hi: "रूट ज़ोन" },
      },
      {
        title: { en: "Pressure-Compensating Drip Architecture", hi: "प्रेशर-कंपनसेटिंग ड्रिप नेटवर्क" },
        desc: {
          en: "Inline PC drippers maintain uniform flow rates across undulating terrain and long pipe runs with anti-clogging silicone diaphragms.",
          hi: "उबड़-खाबड़ जमीन पर भी हर पौधे तक एक समान मात्रा में पानी और पोषण पहुंचाना।",
        },
        iconName: "Activity",
        tag: { en: "Uniform Flow", hi: "समान प्रवाह" },
      },
      {
        title: { en: "Sub-10 Micron Ultrasonic Dry-Fog", hi: "अल्ट्रासोनिक ड्राई-फॉग तकनीक" },
        desc: {
          en: "High-frequency transducers atomize water into ultra-fine fog that humidifies air without wetting floor surfaces or crop leaves.",
          hi: "पानी को इतनी महीन भाप में बदलना जिससे कमरे में 95% नमी बने और फर्श पर पानी न बहे।",
        },
        iconName: "Waves",
        tag: { en: "Aerosol Misting", hi: "ड्राई-फॉग" },
      },
      {
        title: { en: "Bio-Slurry & Vermiwash Fertigation", hi: "तरल जैविक खाद की ड्रिप सिंचाई" },
        desc: {
          en: "Inline filtration injectors deliver diluted vermiwash directly into drip lines, enriching soil biology without nozzle clogging.",
          hi: "ड्रिप के माध्यम से वर्मीवाश और जीवामृत को सीधे जड़ों तक पहुंचाना।",
        },
        iconName: "ShieldCheck",
        tag: { en: "Bio-Fertigation", hi: "जैविक ड्रिप" },
      },
    ],
    specs: [
      { label: { en: "Irrigation Delivery Method", hi: "सिंचाई विधि" }, value: "Pressure Compensating (PC) Inline Drip & Micro-Sprinklers" },
      { label: { en: "Dripper Flow Rate", hi: "ड्रिपर डिस्चार्ज" }, value: "2.0 – 4.0 LPH per emitter" },
      { label: { en: "Fogger Operating Pressure", hi: "फॉगिंग प्रेशर" }, value: "50 – 70 Bar (High-Pressure Ceramic Orifice)" },
      { label: { en: "Water Consumption Reduction", hi: "पानी बचत प्रतिशत" }, value: "35% to 45% measured field savings" },
      { label: { en: "Filtration Grade", hi: "फ़िल्टरिंग क्षमता" }, value: "120 Mesh Disc & Screen Filtration Manifold" },
      { label: { en: "Automation Integration", hi: "ऑटोमेशन सपोर्ट" }, value: "Fully compatible with LoRaWAN IoT Solenoids" },
    ],
    applications: [
      { en: "Arid and semi-arid zone crop cultivation with depleting borewells", hi: "कम पानी और गिरते भूजल वाले शुष्क क्षेत्रों में खेती" },
      { en: "High-density greenhouse, polyhouse, and shade-net micro-climate management", hi: "पॉलीहाउस और शेडनेट में नमी और तापमान प्रबंधन" },
      { en: "Commercial Super Napier forage grass drip irrigation networks", hi: "सुपर नेपियर घास की ड्रिप सिंचाई परियोजनाएं" },
      { en: "Mushroom fruiting chamber humidity control with zero puddle formation", hi: "मशरूम ग्रो रूम्स में बिना पानी जमाव के उच्च आर्द्रता" },
    ],
    faqs: [
      {
        question: {
          en: "Will hard or saline borewell water clog the drip and fogging systems?",
          hi: "क्या खारे पानी या कठोर पानी से ड्रिप और फॉगर्स बंद हो सकते हैं?",
        },
        answer: {
          en: "We deploy multi-stage disc filtration along with pressure-compensating anti-siphon drippers and acid-flush protocols that prevent calcium carbonate and mineral scale build-up.",
          hi: "हम मल्टी-स्टेज डिस्क फिल्ट्रेशन और एंटी-क्लॉगिंग ड्रिपर्स लगाते हैं, जिससे खारे पानी का जमाव नहीं होता और सिस्टम सालों-साल सुचारू रूप से चलता है।",
        },
      },
      {
        question: {
          en: "How does micro-misting save water compared to standard sprinklers?",
          hi: "माइक्रो-मिस्टिंग से सामान्य स्प्रिंकलर की तुलना में पानी कैसे बचता है?",
        },
        answer: {
          en: "Standard sprinklers spray heavy water droplets that quickly run off and pool on the ground. Micro-foggers produce tiny 5–10 micron droplets that float in the air, instantly elevating relative humidity using 80% less water.",
          hi: "सामान्य स्प्रिंकलर से पानी की मोटी बूंदें जमीन पर बह जाती हैं। माइक्रो-फॉगर्स पानी को हवा में तैरने वाली महीन धुंध में बदल देते हैं, जिससे 80% कम पानी में ही सही नमी बन जाती है।",
        },
      },
    ],
    relatedSlugs: ["automated-farm-control", "circular-farming", "iot-farm-monitoring"],
  },

  "soil-restoration": {
    slug: "soil-restoration",
    category: { en: "Sustainable Systems", hi: "सतत प्रणालियाँ" },
    name: { en: "Biological Soil Restoration & Humus Rebuilding", hi: "जैविक मृदा पुनर्जनन एवं ह्यूमस संवर्धन" },
    tagline: {
      en: "Re-establishing Soil Organic Carbon, Mycorrhizal Networks & Microbial Diversity",
      hi: "मिट्टी के जैविक कार्बन, लाभकारी फंगस और सूक्ष्मजीवों का पुनरुद्धार",
    },
    badge: { en: "Soil Health", hi: "मृदा स्वास्थ्य" },
    heroDescription: {
      en: "Restore chemically exhausted, compacted, and alkaline soils. Our microbial bio-inoculants, worm castings, and bio-slurry treatments revitalize soil structure, water percolation, and native biological life.",
      hi: "रासायनिक खादों से बंजर और सख्त हो चुकी मिट्टी को पुनः उपजाऊ बनाएं। केंचुआ खाद, माइक्रोबियल कल्चर और जैविक पोषण से मिट्टी का स्वास्थ्य सुधारें।",
    },
    heroImage: "/media/Hands Holding Rich Compost.png",
    metrics: [
      {
        label: { en: "Organic Carbon", hi: "जैविक कार्बन वृद्धि" },
        value: "+0.5%–0.8%",
        detail: { en: "Measurable increase within 24 months", hi: "24 महीनों के अंदर मिट्टी में प्रमाणित सुधार" },
      },
      {
        label: { en: "Water Infiltration", hi: "जल सोखने की क्षमता" },
        value: "+45%",
        detail: { en: "Reduces rainwater runoff and soil erosion", hi: "वर्षा जल के कटाव पर रोक और बेहतर रिसाव" },
      },
      {
        label: { en: "Microbial Diversity", hi: "सूक्ष्मजीव घनत्व" },
        value: "10^8 CFU/g",
        detail: { en: "Beneficial bacteria and mycorrhizal fungi", hi: "लाभकारी बैक्टीरिया और फंगस की प्रचुरता" },
      },
      {
        label: { en: "Fertilizer Reduction", hi: "रासायनिक खाद बचत" },
        value: "40%–60%",
        detail: { en: "Cuts synthetic urea and DAP expenditure", hi: "यूरिया और डीएपी की जरूरत में बड़ी कमी" },
      },
    ],
    overviewHeading: {
      en: "Healing Degraded Soil from the Inside Out",
      hi: "मिट्टी को रासायनिक निर्भरता से मुक्त कर प्राकृतिक रूप से जीवित बनाना",
    },
    overviewText: {
      en: "Decades of excessive chemical fertilizer application have depleted organic carbon, decimated earthworm populations, and created hardpan soil compaction. JAS Agro's Soil Restoration protocol combines Eisenia fetida vermicompost, mycorrhizae fungi, liquid vermiwash, and Azolla green manuring to re-establish living soil ecology and unlock bound nutrients.",
      hi: "सालों से रासायनिक खादों के अंधाधुंध इस्तेमाल ने जमीन को सख्त और बेजान बना दिया है। JAS एग्रो की मृदा पुनर्जनन विधि केंचुआ खाद, माइकोराइजा, तरल वर्मीवाश और अजोला हरी खाद के जरिए मिट्टी के प्राकृतिक जीवन को फिर से जगाती है।",
    },
    pillars: [
      {
        title: { en: "Humic & Fulvic Acid Infusion", hi: "ह्यूमिक एवं फुल्विक एसिड संवर्धन" },
        desc: {
          en: "Active humic substances chelate soil minerals, converting locked phosphorus and micronutrients into plant-absorbable forms.",
          hi: "मिट्टी में जमे हुए फास्फोरस और सूक्ष्म तत्वों को घोलकर पौधों के लिए सुलभ बनाना।",
        },
        iconName: "Layers",
        tag: { en: "Mineral Chelation", hi: "पोषक उपलब्धता" },
      },
      {
        title: { en: "VAM Mycorrhizal Inoculation", hi: "माइकोराइजा फंगल नेटवर्क" },
        desc: {
          en: "Symbiotic Vesicular-Arbuscular Mycorrhizae extend root surface area by up to 700%, dramatically enhancing drought resilience.",
          hi: "जड़ों के फैलाव को 7 गुना बढ़ाकर सूखे की स्थिति में भी पौधों को हरा-भरा रखना।",
        },
        iconName: "Sprout",
        tag: { en: "Root Symbiosis", hi: "जड़ विस्तार" },
      },
      {
        title: { en: "Alkaline & Salinity Buffer", hi: "क्षारीय व खारी मिट्टी सुधार" },
        desc: {
          en: "Organic carbon buffers high electrical conductivity (EC) and corrects alkaline pH toward the optimal 6.8–7.2 agronomic range.",
          hi: "खारेपन और अत्यधिक pH को संतुलित कर फसलों के अनुकूल बनाना।",
        },
        iconName: "ShieldCheck",
        tag: { en: "pH Balancing", hi: "pH संतुलन" },
      },
      {
        title: { en: "Biological Aeration & Aggregation", hi: "भुरभुरी मिट्टी संरचना" },
        desc: {
          en: "Earthworm casts and microbial glomalin bind sand and silt into water-retentive aggregates, ending surface soil crusting.",
          hi: "मिट्टी को भुरभुरा और हवादार बनाकर जड़ों में ऑक्सीजन का प्रवाह बढ़ाना।",
        },
        iconName: "Recycle",
        tag: { en: "Soil Structure", hi: "उत्कृष्ट संरचना" },
      },
    ],
    specs: [
      { label: { en: "Recommended Application Rate", hi: "अनुशंसित प्रयोग मात्रा" }, value: "2.0 to 3.5 MT Vermicompost / Acre during field prep" },
      { label: { en: "Organic Carbon Target", hi: "जैविक कार्बन लक्ष्य" }, value: "> 0.75% within 2 seasons" },
      { label: { en: "Soil Microbial Count", hi: "माइक्रोबियल घनत्व" }, value: "> 10^8 CFU per gram of active humus" },
      { label: { en: "Foliar & Soil Inoculant", hi: "तरल स्प्रे" }, value: "Vermiwash at 1:10 dilution ratio" },
      { label: { en: "Target Soil pH Correction", hi: "pH सुधार सीमा" }, value: "Reduces alkaline pH from 8.5+ toward 7.2" },
      { label: { en: "Certification Compatibility", hi: "जैविक प्रमाणन" }, value: "100% NPOP / USDA Organic Compliant" },
    ],
    applications: [
      { en: "High-value horticulture, pomegranates, citrus, and date palm orchards", hi: "अनार, किन्नू, खजूर एवं बागवानी फसलों में मिट्टी सुधार" },
      { en: "Transitioning traditional farmland to certified organic export production", hi: "रासायनिक खेतों को प्रमाणित जैविक फार्म में बदलना" },
      { en: "Reclamation of high-salinity arid zone fields with hard sub-surface layers", hi: "रेतीली और खारी जमीनों को दोबारा उपजाऊ बनाना" },
      { en: "Polyhouse continuous cropping soil exhaustion remediation", hi: "पॉलीहाउस की थकी हुई मिट्टी को नई ऊर्जा देना" },
    ],
    faqs: [
      {
        question: {
          en: "How quickly can degraded sandy soil show improvements in organic carbon?",
          hi: "रेतीली मिट्टी के जैविक कार्बन में सुधार दिखने में कितना समय लगता है?",
        },
        answer: {
          en: "With combined applications of enriched vermicompost, spent mushroom substrate, and Azolla green manuring, visible soil color deepening and moisture retention improvements occur in 1 season (3–4 months). Lab-verified organic carbon increases of 0.4%–0.6% are typically recorded within 12–18 months.",
          hi: "केंचुआ खाद, मशरूम अवशेष और अजोला के सम्मिलित उपयोग से पहली ही फसल (3-4 महीने) में मिट्टी का रंग गहरा होने लगता है और नमी रुकने लगती है। 12 से 18 महीनों में लैब टेस्ट में जैविक कार्बन में स्पष्ट वृद्धि प्रमाणित होती है।",
        },
      },
      {
        question: {
          en: "Can bio-restoration completely eliminate synthetic DAP and Urea?",
          hi: "क्या इससे यूरिया और डीएपी का खर्च पूरी तरह बंद किया जा सकता है?",
        },
        answer: {
          en: "We recommend a phased transition: reduce chemical fertilizers by 30% in year one, 60% in year two, and transition to 100% biological inputs by year three once natural nitrogen-fixing bacteria and mycorrhizae colonies are fully established.",
          hi: "हम चरणबद्ध तरीके की सलाह देते हैं: पहले साल रासायनिक खादों में 30% कमी, दूसरे साल 60% कमी और तीसरे साल तक मिट्टी पूरी तरह जैविक पोषण पर आत्मनिर्भर हो जाती है बिना उपज घटे।",
        },
      },
    ],
    relatedSlugs: ["vermicompost", "circular-farming", "biomass-management"],
  },

  "mushroom-farm-setup": {
    slug: "mushroom-farm-setup",
    category: { en: "Farm Setup & Engineering", hi: "फार्म सेटअप एवं इंफ्रास्ट्रक्चर" },
    name: { en: "Commercial Mushroom Farm Setup", hi: "वाणिज्यिक मशरूम फार्म सेटअप" },
    tagline: {
      en: "Turnkey PUF Insulated Fruiting Chambers, Pasteurization & Environmental Control",
      hi: "टर्नकी इंसुलेटेड ग्रो चैंबर्स, पाश्चुरीकरण यूनिट एवं ऑटोमेटेड क्लाइमेट कंट्रोल",
    },
    badge: { en: "Turnkey Engineering", hi: "टर्नकी इंफ्रास्ट्रक्चर" },
    heroDescription: {
      en: "Complete design and execution of commercial oyster mushroom cultivation facilities. From civil foundation and sandwich panel insulation to automated fogging, shelving racks, and boiler commissioning.",
      hi: "वाणिज्यिक ऑयस्टर मशरूम फार्म का संपूर्ण निर्माण। शेड लेआउट, PUF इंसुलेशन, स्वचालित मिस्टिंग, रैक्स और पाश्चुरीकरण बॉयलर का टर्नकी सेटअप।",
    },
    heroImage: "/media/Industrial Oyster Mushroom Farm.png",
    metrics: [
      {
        label: { en: "Standard Unit Size", hi: "मानक सेटअप आकार" },
        value: "500–5,000 sq.ft",
        detail: { en: "Modular expandable insulated chamber modules", hi: "विस्तार योग्य इंसुलेटेड चैंबर मॉड्यूल्स" },
      },
      {
        label: { en: "Monthly Output", hi: "मासिक उत्पादन" },
        value: "350–3,500+ kg",
        detail: { en: "Fresh oyster mushroom harvest capacity", hi: "ताजा मशरूम उत्पादन क्षमता" },
      },
      {
        label: { en: "Erection Timeline", hi: "निर्माण समय" },
        value: "30–45 Days",
        detail: { en: "Fast-track pre-engineered execution", hi: "साइट पर त्वरित असेंबली और टेस्टिंग" },
      },
      {
        label: { en: "Thermal Rating", hi: "थर्मल इंसुलेशन" },
        value: "R-24 PUF Panels",
        detail: { en: "Maintains 24°C internal temp in 46°C summer", hi: "भीषण गर्मी में भी कमरे का तापमान स्थिर" },
      },
    ],
    overviewHeading: {
      en: "Engineered Indoor Cultivation for Guaranteed Yields",
      hi: "मौसम की अनिश्चितता से मुक्त वैज्ञानिक मशरूम फार्मिंग",
    },
    overviewText: {
      en: "Growing commercial mushrooms in hot tropical regions fails when attempted in makeshift thatched huts. JAS Agro delivers pre-engineered, thermally insulated growing chambers equipped with ultrasonic humidity generators, positive-pressure air filtration, and heavy-duty galvanized grow racks designed for high-density production.",
      hi: "गर्म मौसम में साधारण झोपड़ियों में मशरूम उगाना नुकसानदेह हो सकता है। JAS एग्रो आधुनिक PUF इंसुलेटेड ग्रो रूम्स, ऑटोमैटिक ड्राई-फॉग मिस्टिंग, एयर वेंटिलेशन और मजबूत जीआई रैक्स के साथ पूर्ण वाणिज्यिक सेटअप तैयार करता है।",
    },
    pillars: [
      {
        title: { en: "Thermal Sandwich PUF Insulation", hi: "PUF इंसुलेटेड सैंडविच पैनल्स" },
        desc: {
          en: "50mm to 80mm high-density polyurethane panels prevent ambient heat conduction, dramatically cutting air conditioning power bills.",
          hi: "बाहरी गर्मी को अंदर आने से रोककर बिजली के खर्च में भारी बचत करने वाले मजबूत पैनल्स।",
        },
        iconName: "ShieldCheck",
        tag: { en: "Insulation", hi: "थर्मल इंसुलेशन" },
      },
      {
        title: { en: "Automated Ultrasonic Dry-Fogging", hi: "अल्ट्रासोनिक ड्राई-फॉगिंग" },
        desc: {
          en: "Multi-head transducers maintain 90%–95% relative humidity with micro-aerosol droplets that will not cause bacterial blotch disease.",
          hi: "मशरूम बैग्स को बिना गीला किए 90-95% नमी बनाए रखने वाला ऑटोमैटिक सिस्टम।",
        },
        iconName: "Droplets",
        tag: { en: "Humidity", hi: "माइक्रो-मिस्टिंग" },
      },
      {
        title: { en: "Substrate Steam Pasteurization Unit", hi: "स्टीम पाश्चुरीकरण बॉयलर" },
        desc: {
          en: "Stainless steel boiler chamber sterilizes up to 500 kg straw per batch at 70°C without chemical additives.",
          hi: "तूड़ी को कीटाणुरहित करने के लिए स्टीम बॉयलर जो बिना केमिकल के 100% सुरक्षित उपचार करता है।",
        },
        iconName: "Activity",
        tag: { en: "Pasteurization", hi: "पाश्चुरीकरण" },
      },
      {
        title: { en: "Tiered Galvanized Grow Racks", hi: "मल्टी-टियर जीआई रैक्स" },
        desc: {
          en: "Vertical 4 to 5 tier corrosion-resistant racks maximize usable floor space, accommodating up to 1,200 grow bags per 500 sq.ft room.",
          hi: "500 वर्गफुट के कमरे में 1,200 बैग्स लगाने की जगह देने वाले मजबूत रैक्स।",
        },
        iconName: "Layers",
        tag: { en: "Space Optimization", hi: "अधिकतम जगह" },
      },
    ],
    specs: [
      { label: { en: "Standard Chamber Dimensions", hi: "मानक चैंबर आकार" }, value: "30ft x 16ft x 10ft (500 sq.ft standard module)" },
      { label: { en: "Wall / Ceiling Insulation", hi: "पैनल मोटाई" }, value: "50mm / 80mm High-Density PUF (40 kg/m³ density)" },
      { label: { en: "Bag Capacity", hi: "बैग्स क्षमता" }, value: "1,000 to 1,200 fruiting bags per 500 sq.ft" },
      { label: { en: "Cooling / Climate System", hi: "क्लाइमेट कंट्रोल" }, value: "Inverter Cooling + Ultrasonic Micro-Mist + Exhaust Louver" },
      { label: { en: "Electrical Load", hi: "बिजली लोड" }, value: "3.5 kW peak / 1.8 kW operating average" },
      { label: { en: "Estimated Monthly Revenue", hi: "अनुमानित मासिक आमदनी" }, value: "₹40,000 to ₹65,000 per 500 sq.ft unit" },
    ],
    applications: [
      { en: "Progressive farmers looking for daily commercial cash flow", hi: "दैनिक आय चाहने वाले प्रगतिशील किसान एवं उद्यमी" },
      { en: "Agri-entrepreneurs establishing regional gourmet mushroom packaging units", hi: "मशरूम पैकेजिंग एवं सप्लाई का नया स्टार्टअप शुरू करने वाले" },
      { en: "Crop residue monetization for dairy farms and agro-cooperatives", hi: "डेयरी फार्मों में तूड़ी से अतिरिक्त लाभ कमाने हेतु" },
      { en: "FPO collective indoor farming infrastructure", hi: "FPO समूह आधारित इनडोर फार्मिंग सेटअप" },
    ],
    faqs: [
      {
        question: {
          en: "What is the total project cost for a 500 sq.ft commercial mushroom setup?",
          hi: "500 वर्गफुट के कमर्शियल मशरूम सेटअप की कुल लागत कितनी आती है?",
        },
        answer: {
          en: "A complete turnkey 500 sq.ft setup—including PUF panels, automated ultrasonic fogger, exhaust louvers, 5-tier GI racks, steam pasteurization boiler, and initial spawn/bags—typically ranges from ₹3.5 Lakh to ₹5.5 Lakh depending on local site readiness.",
          hi: "PUF इंसुलेटेड रूम, ऑटोमैटिक मिस्टिंग, एग्जॉस्ट पंखे, 5-लेयर जीआई रैक्स, स्टीम बॉयलर और शुरुआती बीजों सहित पूर्ण टर्नकी सेटअप की लागत लगभग ₹3.5 से ₹5.5 लाख के बीच आती है।",
        },
      },
      {
        question: {
          en: "Do you assist with mushroom spawn supply and marketing of the harvest?",
          hi: "क्या आप मशरूम बीज की नियमित आपूर्ति और बिक्री में मदद करते हैं?",
        },
        answer: {
          en: "Yes. JAS Agro provides continuous certified mother spawn supply, substrate protocols, and connects growers with local B2B vegetable mandis, hotel chains, and dried mushroom processing channels.",
          hi: "हाँ। JAS एग्रो लगातार उच्च गुणवत्ता वाला स्पॉन उपलब्ध कराता है और स्थानीय मंडियों, होटलों और ड्राई मशरूम खरीदारों से किसानों को जोड़ता है।",
        },
      },
    ],
    relatedSlugs: ["oyster-mushroom", "farm-setup", "automated-farm-control"],
  },

  "integrated-farm": {
    slug: "integrated-farm",
    category: { en: "Farm Setup & Engineering", hi: "फार्म सेटअप एवं इंफ्रास्ट्रक्चर" },
    name: { en: "Integrated Bio-Tech Model Farm", hi: "एकीकृत बायो-टेक मॉडल फार्म" },
    tagline: {
      en: "Synergistic Multi-Enterprise Dairy, Fodder, Mushroom & Bio-Fertilizer Ecosystem",
      hi: "डेयरी, सुपर नेपियर, अजोला, मशरूम एवं वर्मीकंपोस्ट का एकीकृत सेटअप",
    },
    badge: { en: "Integrated Model", hi: "एकीकृत मॉडल" },
    heroDescription: {
      en: "Establish a self-sustaining multi-enterprise agriculture facility. Synchronizes dairy cattle with high-biomass Napier fodder, aquatic Azolla ponds, indoor mushroom chambers, and vermicompost beds on a single managed parcel.",
      hi: "एक ही फार्म पर डेयरी, हरा चारा, अजोला, मशरूम और केंचुआ खाद का संतुलित समन्वय। प्रत्येक इकाई एक-दूसरे के कचरे को संसाधन में बदलकर शुद्ध मुनाफा बढ़ाती है।",
    },
    heroImage: "/media/Lush Green Forage Grass Field.png",
    metrics: [
      {
        label: { en: "Model Land Area", hi: "न्यूनतम भूमि क्षेत्र" },
        value: "1 to 5 Acres",
        detail: { en: "Custom scaled for individual landowners or FPOs", hi: "1 से 5 एकड़ तक लचीला डिजाइन" },
      },
      {
        label: { en: "Revenue Streams", hi: "आय के स्रोत" },
        value: "5+ Income Lines",
        detail: { en: "Milk, mushrooms, vermicompost, worms, fodder", hi: "दूध, मशरूम, केंचुआ खाद, केंचुए और चारा" },
      },
      {
        label: { en: "Waste Recycling", hi: "कचरा रूपांतरण दर" },
        value: "95% Closed-Loop",
        detail: { en: "Every byproduct feeds another farm module", hi: "हर उत्पाद अगले चरण के लिए कच्चा माल" },
      },
      {
        label: { en: "Operational Margin", hi: "शुद्ध मुनाफा मार्जिन" },
        value: "45%–55%",
        detail: { en: "Far higher than conventional monoculture crops", hi: "पारंपरिक एकफसली खेती से कहीं अधिक" },
      },
    ],
    overviewHeading: {
      en: "Multiplying Revenue While Eliminating External Input Costs",
      hi: "खर्चों में भारी कटौती और बहु-उत्पाद से सालभर निरंतर कमाई",
    },
    overviewText: {
      en: "Single-crop farming leaves growers vulnerable to market crashes, pest epidemics, and unseasonal weather. JAS Agro's Integrated Farm Architecture builds multi-tiered biological resilience. Dairy cattle provide dung for vermicompost and Azolla; crop straw fuels mushroom production; spent mushroom blocks enrich vermi-beds; and high-biomass Super Napier ensures round-the-year fodder security.",
      hi: "पारंपरिक एकफसली खेती में बाजार भाव गिरने या सूखा पड़ने पर भारी नुकसान होता है। JAS एग्रो का इंटीग्रेटेड फार्म 5 अलग-अलग आय के स्रोत बनाता है: गाय-भैंस से दूध और गोबर, गोबर से अजोला व केंचुआ खाद, तूड़ी से मशरूम, और नेपियर घास से पशुओं का सस्ता आहार।",
    },
    pillars: [
      {
        title: { en: "Dairy & Aquatic Azolla Synergy", hi: "डेयरी एवं अजोला समन्वय" },
        desc: {
          en: "Azolla ponds convert cow dung slurry into 25–30% protein green fodder, reducing commercial feed expenses by 30%.",
          hi: "गोबर के घोल से अजोला उगाकर दाने-खली के खर्च में 30% तक की सीधी बचत।",
        },
        iconName: "Waves",
        tag: { en: "Feed Synergy", hi: "चारा चक्र" },
      },
      {
        title: { en: "Mushroom & Crop Straw Monetization", hi: "तूड़ी से मशरूम उत्पादन" },
        desc: {
          en: "Dry fodder straw is pasteurized to harvest high-margin gourmet oyster mushrooms before returning to compost beds.",
          hi: "तूड़ी का दोहरा लाभ: पहले मशरूम की अच्छी कमाई, फिर खाद में उपयोग।",
        },
        iconName: "Sparkles",
        tag: { en: "Biomass Cash", hi: "बायोमास कैश" },
      },
      {
        title: { en: "High-Throughput Vermiculture", hi: "व्यावसायिक केंचुआ खाद इकाई" },
        desc: {
          en: "Processes spent mushroom blocks and cattle dung into certified organic manure and liquid vermiwash for farm crops.",
          hi: "खेत की सभी जैविक सामग्री से प्रीमियम केंचुआ खाद और वर्मीवाश तैयार करना।",
        },
        iconName: "Layers",
        tag: { en: "Bio-Fertilizer", hi: "जैविक खाद" },
      },
      {
        title: { en: "Central IoT Environmental Monitoring", hi: "केंद्रीय IoT मॉनिटरिंग मेश" },
        desc: {
          en: "One integrated sensor dashboard oversees soil moisture, chamber temperatures, and water levels across the entire property.",
          hi: "एक ही मोबाइल ऐप से पूरे फार्म की नमी, तापमान और मोटरों का नियंत्रण।",
        },
        iconName: "Cpu",
        tag: { en: "Unified AgTech", hi: "यूनिफाइड टेक" },
      },
    ],
    specs: [
      { label: { en: "Recommended Land Size", hi: "उपयुक्त भूमि आकार" }, value: "1 Acre (Minimum) to 10+ Acres" },
      { label: { en: "Core Modules Included", hi: "शामिल मुख्य मॉड्यूल" }, value: "Mushroom Room (500 sq.ft) + 4 Vermi-Beds + 2 Azolla Ponds + 0.5 Acre Napier + IoT" },
      { label: { en: "Execution Timeline", hi: "पूरा होने का समय" }, value: "6 to 8 Weeks Turnkey" },
      { label: { en: "Daily Harvests Available", hi: "दैनिक उत्पाद" }, value: "Fresh Milk, Fresh Mushroom, Live Azolla, Vermicompost" },
      { label: { en: "Water Source Requirement", hi: "पानी की आवश्यकता" }, value: "Standard Tubewell / Open Well / Canal connection" },
      { label: { en: "Estimated Payback Period", hi: "लागत वसूली समय" }, value: "8 to 12 Months" },
    ],
    applications: [
      { en: "Progressive farmers transforming underutilized land into high-yield model estates", hi: "अपनी जमीन को आधुनिक और लाभदायक मॉडल फार्म में बदलने वाले किसान" },
      { en: "Gaushalas aiming for 100% financial self-sufficiency through bio-products", hi: "गौशालाओं को आर्थिक रूप से स्वावलंबी बनाने हेतु" },
      { en: "Agri-tourism resorts and agricultural training institutes", hi: "कृषि पर्यटन केंद्र और जैविक प्रशिक्षण संस्थान" },
      { en: "Corporate CSR sustainable livelihood demonstration projects", hi: "कॉर्पोरेट सीएसआर और ग्रामीण आजीविका परियोजनाएं" },
    ],
    faqs: [
      {
        question: {
          en: "How much daily labor is required to run a 1-acre integrated model farm?",
          hi: "1 एकड़ के इंटीग्रेटेड फार्म को चलाने के लिए कितने मजदूरों की जरूरत होती है?",
        },
        answer: {
          en: "Because the watering, misting, and climate control are automated via IoT sensors, a 1-acre integrated farm can easily be operated by 2 trained farm workers or family members.",
          hi: "क्योंकि सिंचाई, मिस्टिंग और पंखों का संचालन IoT सेंसर द्वारा स्वचालित होता है, इसलिए 1 एकड़ का पूरा फार्म केवल 2 व्यक्ति आसानी से संभाल सकते हैं।",
        },
      },
      {
        question: {
          en: "Can we start with 1 or 2 modules first and expand later?",
          hi: "क्या हम पहले 1-2 यूनिट लगाकर बाद में विस्तार कर सकते हैं?",
        },
        answer: {
          en: "Yes. JAS Agro designs all infrastructure modularly. You can begin with a Mushroom room and Vermicompost beds, then add Azolla ponds and Super Napier fodder as your cattle herd grows.",
          hi: "हाँ। हमारा पूरा डिजाइन मॉड्यूलर है। आप पहले मशरूम और वर्मीकंपोस्ट से शुरुआत कर सकते हैं और बाद में अजोला या नेपियर जोड़ सकते हैं।",
        },
      },
    ],
    relatedSlugs: ["farm-setup", "circular-farming", "vermicompost"],
  },

  "iot-installation": {
    slug: "iot-installation",
    category: { en: "Farm Setup & Engineering", hi: "फार्म सेटअप एवं इंफ्रास्ट्रक्चर" },
    name: { en: "Farm IoT & Sensor Mesh Installation", hi: "फार्म IoT एवं सेंसर मेश इंस्टॉलेशन" },
    tagline: {
      en: "On-Site Turnkey Deployment of Solar LoRaWAN Gateways, Soil Probes & Actuators",
      hi: "सोलर LoRaWAN गेटवे, सॉइल प्रोब्स एवं रिले कंट्रोलर का ऑन-साइट इंस्टॉलेशन",
    },
    badge: { en: "Turnkey Deployment", hi: "ऑन-साइट डिप्लॉयमेंट" },
    heroDescription: {
      en: "Full on-ground deployment of smart agriculture telemetry hardware. Includes mast mounting, solar battery commissioning, sub-surface sensor trenching, electrical pump relay integration, and mobile app pairing.",
      hi: "खेतों और पॉलीहाउस में IoT हार्डवेयर का पेशेवर इंस्टॉलेशन। सोलर पोल, मिट्टी के सेंसर, मोटर स्टार्टर वायरिंग और मोबाइल ऐप कॉन्फ़िगरेशन।",
    },
    heroImage: "/media/smartagri4.png",
    metrics: [
      {
        label: { en: "Turnkey Deployment", hi: "इंस्टॉलेशन समय" },
        value: "1–3 Days",
        detail: { en: "Fast on-site engineering and calibration", hi: "साइट पर त्वरित फिटिंग और सेंसर टेस्टिंग" },
      },
      {
        label: { en: "Field Wireless Range", hi: "वायरलेस रेंज" },
        value: "Up to 5 km",
        detail: { en: "LoRa radio mesh without field internet wiring", hi: "बिना केबल के 5 किमी दूरी तक सेंसर कनेक्टिविटी" },
      },
      {
        label: { en: "Hardware Warranty", hi: "हार्डवेयर वारंटी" },
        value: "1-Year On-Site",
        detail: { en: "Full equipment replacement and lightning protection", hi: "उपकरण रिप्लेसमेंट और तड़ित सुरक्षा शामिल" },
      },
      {
        label: { en: "Zero Cloud Subscription", hi: "नो सब्सक्रिप्शन फीस" },
        value: "Lifetime Free",
        detail: { en: "Included smartphone app & local LCD display", hi: "फ्री मोबाइल ऐप और लोकल डिस्प्ले" },
      },
    ],
    overviewHeading: {
      en: "Professional Hardware Deployment for Rugged Farm Conditions",
      hi: "धूल, धूप और बारिश में बिना रुके काम करने वाला ऑन-ग्राउंड इंस्टॉलेशन",
    },
    overviewText: {
      en: "Agricultural electronics fail in rural conditions when DIY hobbyist boards are installed without lightning surge protection, IP66 waterproofing, and rodent-proof armored trenching. JAS Agro's field engineering team performs comprehensive turnkey deployment: soil probe depth calibration, solar mast erection, relay starter integration, and farmer app training.",
      hi: "खेतों में साधारण उपकरण नमी, धूल और चूहों की वजह से जल्दी खराब हो जाते हैं। JAS एग्रो के इंजीनियर वाटरप्रूफ IP66 केसिंग, आर्मर्ड केबल, सोलर पोल और मोटर स्टार्टर रिले के साथ टिकाऊ और सुरक्षित ऑन-साइट इंस्टॉलेशन करते हैं।",
    },
    pillars: [
      {
        title: { en: "Solar Mast & LoRaWAN Gateway Erection", hi: "सोलर पोल एवं LoRaWAN गेटवे" },
        desc: {
          en: "Galvanized pole mounting with monocrystalline solar panel, lightning surge arrestor, and long-range high-gain antenna.",
          hi: "सोलर पैनल, तड़ित चालक और हाई-गेन एंटीना के साथ मजबूत पोल इंस्टॉलेशन।",
        },
        iconName: "Cpu",
        tag: { en: "Gateway Hub", hi: "मुख्य गेटवे" },
      },
      {
        title: { en: "Precision Multi-Depth Soil Trenching", hi: "मृदा सेंसर भूमिगत इंस्टॉलेशन" },
        desc: {
          en: "Armored underground conduits protect sensor cables from farm tractors, ploughing blades, and rodent damage.",
          hi: "ट्रैक्टर और चूहों से सुरक्षा के लिए आर्मर्ड पाइप में सेंसर केबल्स की भूमिगत फिटिंग।",
        },
        iconName: "Radio",
        tag: { en: "Armored Cabling", hi: "सुरक्षित वायरिंग" },
      },
      {
        title: { en: "Starter Panel Relay Interfacing", hi: "मोटर स्टार्टर पैनल कनेक्शन" },
        desc: {
          en: "Clean opto-isolated wiring into 3-phase submersible starters with auto-manual bypass switches for absolute safety.",
          hi: "3-फेज मोटर स्टार्टर से सुरक्षित कनेक्शन और मैन्युअल बाईपास स्विच की सुविधा।",
        },
        iconName: "Activity",
        tag: { en: "Motor Interface", hi: "स्टार्टर इंटरफ़ेस" },
      },
      {
        title: { en: "Farmer App Pairing & Calibration", hi: "मोबाइल ऐप कॉन्फ़िगरेशन व ट्रेनिंग" },
        desc: {
          en: "Hands-on calibration of soil moisture thresholds, alert triggers, and farmer training on smartphone app navigation.",
          hi: "किसान के मोबाइल में ऐप इंस्टॉल कर सही सीमा तय करना और उपयोग सिखाना।",
        },
        iconName: "Compass",
        tag: { en: "Training", hi: "व्यावहारिक प्रशिक्षण" },
      },
    ],
    specs: [
      { label: { en: "Installation Package Scope", hi: "पैकेज का दायरा" }, value: "1 Solar Gateway + 4 Multi-Sensor Nodes + 1 Actuator Panel + Trenching" },
      { label: { en: "Radio Frequency Band", hi: "रेडियो फ्रीक्वेंसी" }, value: "865 – 867 MHz (Govt Approved India ISM Band)" },
      { label: { en: "Surge & Lightning Protection", hi: "तड़ित व बिजली सुरक्षा" }, value: "Class II SPD + Dedicated Earth Grounding Rod" },
      { label: { en: "Ingress Protection Rating", hi: "वॉटरप्रूफ रेटिंग" }, value: "IP67 Weatherproof UV-Resistant Polycarbonate" },
      { label: { en: "Power Independence", hi: "पावर बैकअप" }, value: "5W Solar Panel + 6000mAh LiFePO4 Battery per node" },
      { label: { en: "Post-Install Support", hi: "आफ्टर-सेल्स सपोर्ट" }, value: "1-Year Comprehensive Support with Remote Diagnostics" },
    ],
    applications: [
      { en: "Commercial orchards and drip-irrigated farmland", hi: "फलों के बाग और ड्रिप सिंचाई वाले खेत" },
      { en: "Polyhouses, nethouses, and commercial indoor mushroom farms", hi: "पॉलीहाउस, शेडनेट और इनडोर मशरूम ग्रो रूम्स" },
      { en: "Gaushalas and dairy farms automating cattle drinking troughs and cooling fans", hi: "डेयरी फार्मों में पानी के हौज और कूलिंग पंखों का ऑटोमेशन" },
      { en: "Agricultural research farms and soil conservation projects", hi: "कृषि अनुसंधान केंद्र और भूमि सुधार परियोजनाएं" },
    ],
    faqs: [
      {
        question: {
          en: "How long does the on-site IoT installation take?",
          hi: "खेत में IoT इंस्टॉलेशन में कितना समय लगता है?",
        },
        answer: {
          en: "For a standard farm parcel (up to 10 acres with 4 nodes and 1 pump controller), our engineering crew completes the entire installation, sensor trenching, and calibration within 1 to 2 days.",
          hi: "10 एकड़ तक के सामान्य खेत में 4 सेंसर नोड्स और 1 पंप कंट्रोलर का पूरा इंस्टॉलेशन, वायरिंग और टेस्टिंग हमारी टीम 1 से 2 दिनों में पूरा कर देती है।",
        },
      },
      {
        question: {
          en: "Will tractor ploughing damage the sensor cables in the field?",
          hi: "क्या ट्रैक्टर से जुताई करने पर सेंसर के तार टूट सकते हैं?",
        },
        answer: {
          en: "No. All main field conduits are trenched below standard plough depth (minimum 60 cm) and encased in heavy-duty PVC conduit with bright warning markers. The surface sensor node is mounted on a rugged steel marker stake.",
          hi: "नहीं। सभी केबल्स को जुताई की गहराई से नीचे (कम से कम 60 सेमी गहराई) में भारी पीवीसी पाइप में दबाया जाता है और ऊपर चेतावनी मार्कर लगाया जाता है ताकि ट्रैक्टर से कोई नुकसान न हो।",
        },
      },
    ],
    relatedSlugs: ["iot-farm-monitoring", "automated-farm-control", "farm-setup"],
  },
};

// Aliases mapping for any alternative or legacy slugs
export const SOLUTION_SLUG_ALIASES: Record<string, string> = {
  "oyster-mushroom-farming": "oyster-mushroom",
  "mushroom-cultivation": "oyster-mushroom",
  "azolla": "azolla-farming",
  "napier-grass": "hybrid-napier",
  "super-napier": "hybrid-napier",
  "vermi-compost": "vermicompost",
  "bio-vermicompost": "vermicompost",
  "iot-monitoring": "iot-farm-monitoring",
  "smart-farming": "iot-farm-monitoring",
  "turnkey-farm-setup": "farm-setup",
};

