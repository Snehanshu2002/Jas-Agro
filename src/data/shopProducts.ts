export interface ProductHighlight {
  label: string;
  value: string;
  labelHi?: string;
  valueHi?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  labelHi?: string;
  valueHi?: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
  questionHi?: string;
  answerHi?: string;
}

export interface ShopProduct {
  id: string;
  page: number; // 1 or 2 matching shop.jasagro.com pagination
  title: string;
  titleHi: string;
  slug: string;
  category: "Biscuits & Cookies" | "Snacks & Khakhra" | "Oyster Mushrooms" | "Azolla Fodder";
  categoryHi: string;
  price: number;
  originalPrice?: number;
  unit: string;
  unitHi: string;
  img: string;
  galleryImages?: string[];
  rating?: number;
  reviewsCount?: number;
  outOfStock?: boolean;
  isPopular?: boolean;
  description: string;
  descriptionHi: string;
  longDescription?: string;
  longDescriptionHi?: string;
  highlights?: ProductHighlight[];
  specifications?: ProductSpec[];
  howToUseOrGrow?: {
    title: string;
    titleHi: string;
    points: string[];
    pointsHi: string[];
  };
  storageDelivery?: {
    shelfLife: string;
    shelfLifeHi?: string;
    storageInfo: string;
    storageInfoHi?: string;
    deliveryTime: string;
    deliveryTimeHi?: string;
  };
  faqs?: ProductFaq[];
  videoUrl?: string;
  frequentlyBoughtWith?: string[]; // IDs of complementary products
  shopUrl: string;
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  // --- Page 1 Products ---
  {
    id: "shop-1",
    page: 1,
    title: "Vanilla Chocolate Biscuit 250gm",
    titleHi: "वैनिला चॉकलेट बिस्किट 250g",
    slug: "vanilla-chocolate-biscuit-250gm",
    category: "Biscuits & Cookies",
    categoryHi: "Biscuits & Cookies",
    price: 150,
    originalPrice: 180,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/cookies.png",
    galleryImages: [
      "/products/cookies.png",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Vanilla-chocolate-Biscuit-300x300.png",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Milk-chocolate5-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Chocolate-Biscuit-300x300.jpg"
    ],
    rating: 4.8,
    reviewsCount: 18,
    outOfStock: false,
    isPopular: true,
    description: "Crunchy vanilla and chocolate organic cookies enriched with nutrient-dense oyster mushroom extracts.",
    descriptionHi: "स्वादिष्ट Vanilla और Chocolate organic cookies, Oyster Mushroom protein से भरपूर।",
    longDescription: "Crafted with care, JAS Agro Vanilla Chocolate Biscuits blend authentic natural cocoa with Madagascar vanilla notes. Each batch is subtly fortified with protein-rich dried oyster mushroom extracts for natural vitality without altering the delectable cookie flavor.",
    longDescriptionHi: "JAS Agro वैनिला चॉकलेट बिस्किट असली कोको और वैनिला के स्वाद से भरपूर हैं। इनमें पौष्टिक ऑयस्टर मशरूम का सत्व मिलाया गया है जो स्वाद में बिना कोई बदलाव किए प्राकृतिक ऊर्जा और पोषण प्रदान करता है।",
    highlights: [
      { label: "Nutritional Fortification", value: "Enriched with Oyster Mushroom Extract", labelHi: "पोषण संवर्धन", valueHi: "ऑयस्टर मशरूम अर्क से भरपूर" },
      { label: "Dietary", value: "100% Vegetarian & Trans-Fat Free", labelHi: "आहार प्रकार", valueHi: "100% शाकाहारी एवं ट्रांस-फैट मुक्त" },
      { label: "Texture", value: "Crunchy baked whole grain cookie", labelHi: "टेक्सचर", valueHi: "कुरकुरा बेक्ड होल ग्रेन" },
      { label: "Packaging", value: "Aroma-lock foil pack 250g", labelHi: "पैकिंग", valueHi: "अरोमा-लॉक फॉयल पैक 250g" }
    ],
    specifications: [
      { label: "Product Category", value: "Biscuits & Healthy Bakery", labelHi: "श्रेणी", valueHi: "बिस्किट एवं बेकरी" },
      { label: "Net Quantity", value: "250 Grams", labelHi: "नेट मात्रा", valueHi: "250 ग्राम" },
      { label: "Shelf Life", value: "6 Months from packaging", labelHi: "शेल्फ लाइफ", valueHi: "पैकिंग से 6 माह" },
      { label: "Storage Condition", value: "Store in a cool, dry place away from direct sunlight", labelHi: "भंडारण", valueHi: "ठंडी और सूखी जगह पर रखें" },
      { label: "Country of Origin", value: "India (JAS Agro Farms)", labelHi: "उत्पत्ति", valueHi: "भारत (JAS Agro)" }
    ],
    howToUseOrGrow: {
      title: "Serving Suggestion",
      titleHi: "परोसने का सुझाव",
      points: [
        "Enjoy with morning green tea, farm milk, or hot filtered coffee.",
        "Ideal healthy lunchbox snack for children and working professionals.",
        "Store in an airtight container once opened to preserve oven crunch."
      ],
      pointsHi: [
        "सुबह की चाय, ताजे दूध या कॉफी के साथ आनंद लें।",
        "बच्चों और वयस्कों के लिए स्वस्थ और पौष्टिक नाश्ता।",
        "खोलने के बाद कुरकुरापन बनाए रखने के लिए एयरटाइट डिब्बे में रखें।"
      ]
    },
    storageDelivery: {
      shelfLife: "6 Months",
      shelfLifeHi: "6 महीने",
      storageInfo: "Keep sealed in airtight container after opening",
      storageInfoHi: "खोलने के बाद एयरटाइट जार में रखें",
      deliveryTime: "Dispatched within 24-48 hrs via Express Courier",
      deliveryTimeHi: "24-48 घंटों में एक्सप्रेस कूरियर द्वारा प्रेषित"
    },
    faqs: [
      {
        question: "Does it taste like mushrooms?",
        answer: "No, our specialized mushroom extraction process preserves complete organic nutrition while keeping the mouthwatering vanilla-chocolate flavor 100% intact.",
        questionHi: "क्या इसका स्वाद मशरूम जैसा लगता है?",
        answerHi: "बिल्कुल नहीं! हमारी विशेष प्रक्रिया से चॉकलेट व वैनिला का लाजवाब स्वाद बना रहता है।"
      },
      {
        question: "Is it suitable for daily consumption?",
        answer: "Yes, it is prepared with wholesome grains, natural butter, and zero chemical trans-fats, making it a great daily snack.",
        questionHi: "क्या इसे रोज खाया जा सकता है?",
        answerHi: "हाँ, यह प्राकृतिक अनाजों और शुद्ध सामग्री से बना एक उत्तम दैनिक स्नैक है।"
      }
    ],
    frequentlyBoughtWith: ["shop-2", "shop-8", "shop-4"],
    shopUrl: "http://shop.jasagro.com/product/vanilla-chocolate-biscuit-250gm/"
  },
  {
    id: "shop-2",
    page: 1,
    title: "Milk Chocolate Biscuit 250gm",
    titleHi: "मिल्क चॉकलेट बिस्किट 250g",
    slug: "milk-chocolate-biscuit-250gm",
    category: "Biscuits & Cookies",
    categoryHi: "Biscuits & Cookies",
    price: 150,
    originalPrice: 180,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/cookies.png",
    galleryImages: [
      "/products/cookies.png",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Milk-chocolate5-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Vanilla-chocolate-Biscuit-300x300.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Butter-biscuit-300x300.jpg"
    ],
    rating: 4.9,
    reviewsCount: 24,
    outOfStock: false,
    isPopular: true,
    description: "Rich milk chocolate flavor cookies baked with healthy organic ingredients.",
    descriptionHi: "Premium Milk Chocolate cookies, pure organic ingredients के साथ बनी।",
    longDescription: "A family favorite, JAS Agro Milk Chocolate Biscuits combine velvety dairy milk solids with rich roasted cocoa beans. Packed with balanced micro-nutrients, these golden-baked cookies offer satisfying indulgence with wholesome nourishment.",
    longDescriptionHi: "JAS Agro मिल्क चॉकलेट बिस्किट शुद्ध दूध और रोस्टेड कोको से बने हैं। ये स्वादिष्ट और पौष्टिक दोनों हैं।",
    highlights: [
      { label: "Flavor Profile", value: "Smooth Creamy Milk Chocolate", labelHi: "स्वाद", valueHi: "मलाईदार मिल्क चॉकलेट" },
      { label: "Baking", value: "Slow-baked for delicate crumb", labelHi: "बेकिंग", valueHi: "धीमी आंच पर बेक्ड" },
      { label: "Preservatives", value: "No Artificial Colors or Harmful Preservatives", labelHi: "संरक्षक", valueHi: "कोई हानिकारक रसायन नहीं" }
    ],
    specifications: [
      { label: "Net Weight", value: "250g", labelHi: "वजन", valueHi: "250 ग्राम" },
      { label: "Category", value: "Biscuits & Cookies", labelHi: "श्रेणी", valueHi: "बिस्किट एवं कुकीज़" },
      { label: "Shelf Life", value: "6 Months", labelHi: "शेल्फ लाइफ", valueHi: "6 माह" }
    ],
    frequentlyBoughtWith: ["shop-1", "shop-9", "shop-3"],
    shopUrl: "http://shop.jasagro.com/product/milk-chocolate-biscuit-250gm/"
  },
  {
    id: "shop-3",
    page: 1,
    title: "Khakhra – Methi 250gm",
    titleHi: "खाकरा – मेथी 250g",
    slug: "khakhra-methi-250gm",
    category: "Snacks & Khakhra",
    categoryHi: "Snacks & Khakhra",
    price: 130,
    originalPrice: 150,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/PARATHAPRODUCT.png",
    galleryImages: [
      "/products/PARATHAPRODUCT.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Methi-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Oyster-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Chakari2-300x300.jpg"
    ],
    rating: 4.7,
    reviewsCount: 15,
    outOfStock: false,
    isPopular: false,
    description: "Crispy roasted whole wheat khakhra infused with fresh methi leaves and aromatic spices.",
    descriptionHi: "Crispy roasted whole wheat Methi Khakhra, बिना तेल का healthy snack।",
    longDescription: "Our Methi Khakhra is slow-roasted on traditional griddles using stone-ground whole wheat and fresh sun-dried fenugreek leaves. 100% roasted with minimal healthy oil, it delivers a wholesome, guilt-free crunch for fitness-conscious snacking.",
    longDescriptionHi: "हमारा मेथी खाखरा पारंपरिक तरीके से रोस्ट किया गया होल व्हीट स्नैक है। इसमें ताजी मेथी और सुगंधित मसाले मिले हैं।",
    highlights: [
      { label: "Preparation", value: "100% Roasted, Not Fried", labelHi: "बनाने की विधि", valueHi: "100% रोस्टेड (तला हुआ नहीं)" },
      { label: "Ingredients", value: "Stoneground Whole Wheat & Pure Methi", labelHi: "मुख्य सामग्री", valueHi: "चक्की का गेहूं व ताजा मेथी" },
      { label: "Dietary", value: "Low Calorie & High Fiber", labelHi: "डाइट", valueHi: "लो कैलोरी व हाई फाइबर" }
    ],
    specifications: [
      { label: "Pack Weight", value: "250g Vacuum Sealed", labelHi: "वजन", valueHi: "250g वैक्यूम सील्ड" },
      { label: "Shelf Life", value: "4 Months", labelHi: "शेल्फ लाइफ", valueHi: "4 माह" }
    ],
    frequentlyBoughtWith: ["shop-4", "shop-5", "shop-1"],
    shopUrl: "http://shop.jasagro.com/product/khakhra-methi-250gm/"
  },
  {
    id: "shop-4",
    page: 1,
    title: "Khakhra – Oyster Mushroom 250gm",
    titleHi: "खाकरा – ऑयस्टर मशरूम 250g",
    slug: "khakhra-250gm",
    category: "Snacks & Khakhra",
    categoryHi: "Snacks & Khakhra",
    price: 110,
    originalPrice: 130,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/MUSHROOM_PARATHA_PRODUCT.png",
    galleryImages: [
      "/products/MUSHROOM_PARATHA_PRODUCT.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Oyster-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Methi-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Mushroom-Powder-300x300.jpg"
    ],
    rating: 4.9,
    reviewsCount: 32,
    outOfStock: false,
    isPopular: true,
    description: "High-protein roasted khakhra blended with organic dried oyster mushroom powder.",
    descriptionHi: "High-protein roasted Khakhra, organic Oyster Mushroom powder से बना।",
    longDescription: "An innovation in healthy snacking: JAS Agro Oyster Mushroom Khakhra incorporates dehydrated gourmet oyster mushroom powder into traditional roasted whole wheat crisps. Rich in plant protein, Vitamin D, and immune-supporting antioxidants.",
    longDescriptionHi: "JAS Agro ऑयस्टर मशरूम खाखरा पारंपरिक गुजराती खाखरा और ऑयस्टर मशरूम के पोषण का अद्भुत संगम है।",
    highlights: [
      { label: "Special Feature", value: "Fortified with 100% Organic Oyster Mushroom Powder", labelHi: "विशेषता", valueHi: "ऑर्गेनिक ऑयस्टर मशरूम से भरपूर" },
      { label: "Protein Content", value: "Enhanced Plant Protein & Vitamin D", labelHi: "प्रोटीन", valueHi: "उच्च प्रोटीन और विटामिन D" },
      { label: "Cooking", value: "Vacuum Roasted Crisp", labelHi: "रोस्टिंग", valueHi: "वैक्यूम रोस्टेड क्रिस्प" }
    ],
    specifications: [
      { label: "Net Quantity", value: "250g", labelHi: "मात्रा", valueHi: "250g" },
      { label: "Shelf Life", value: "4 Months", labelHi: "शेल्फ लाइफ", valueHi: "4 माह" }
    ],
    frequentlyBoughtWith: ["shop-3", "shop-6", "shop-1"],
    shopUrl: "http://shop.jasagro.com/product/khakhra-250gm/"
  },
  {
    id: "shop-5",
    page: 1,
    title: "Chakri 200gm",
    titleHi: "चकली / चक्री 200g",
    slug: "chakri-200gm",
    category: "Snacks & Khakhra",
    categoryHi: "Snacks & Khakhra",
    price: 100,
    originalPrice: 120,
    unit: "200g pack",
    unitHi: "200g pack",
    img: "/products/CHAKLIPRODUCT.png",
    galleryImages: [
      "/products/CHAKLIPRODUCT.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Chakari2-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Methi-300x300.jpg"
    ],
    rating: 4.6,
    reviewsCount: 12,
    outOfStock: false,
    isPopular: false,
    description: "Traditional crispy savory chakri snack baked with whole grains and natural spices.",
    descriptionHi: "Crispy और tasty Chakri snack, natural मसाले और whole grains के साथ।",
    highlights: [
      { label: "Texture", value: "Extra Crisp Spiral Crunch", labelHi: "टेक्सचर", valueHi: "अति कुरकुरी चकली" },
      { label: "Spices", value: "Roasted Sesame & Carom Seeds (Ajwain)", labelHi: "मसाले", valueHi: "तिल और अजवाइन का स्वाद" }
    ],
    frequentlyBoughtWith: ["shop-3", "shop-4", "shop-1"],
    shopUrl: "http://shop.jasagro.com/product/chakri-200gm/"
  },
  {
    id: "shop-6",
    page: 1,
    title: "Oyster Mushroom Powder – Raw",
    titleHi: "ऑयस्टर मशरूम पाउडर – Raw",
    slug: "oyster-mushroom-powder-raw",
    category: "Oyster Mushrooms",
    categoryHi: "Oyster Mushrooms",
    price: 1800,
    originalPrice: 2000,
    unit: "1kg pouch",
    unitHi: "1kg pouch",
    img: "/products/Oyster Mushroom Powder.png",
    galleryImages: [
      "/products/Oyster Mushroom Powder.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Mushroom-Powder-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/04/Mushroom-300x300.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Oyster-300x300.jpg"
    ],
    rating: 5.0,
    reviewsCount: 45,
    outOfStock: false,
    isPopular: true,
    description: "100% pure sun-dried raw oyster mushroom powder. Rich in vitamin D, antioxidants, and dietary protein.",
    descriptionHi: "100% pure sun-dried Oyster Mushroom powder। Vitamin D, antioxidants और protein से भरपूर।",
    longDescription: "JAS Agro 100% Pure Raw Oyster Mushroom Powder is pulverized from organically farmed Pleurotus ostreatus fruiting bodies. Containing 28-30% bio-available crude protein, beta-glucans, and vital micro-nutrients, this culinary superfood powder blends effortlessly into soups, wheat atta, gravies, and morning protein shakes.",
    longDescriptionHi: "JAS Agro का शुद्ध ऑयस्टर मशरूम पाउडर जैविक मशरूमों से तैयार किया जाता है। यह 28-30% प्रोटीन, विटामिन D और एंटीऑक्सीडेंट से युक्त एक बेहतरीन सुपरफूड है।",
    highlights: [
      { label: "Purity", value: "100% Pure Mushroom - No Additives or Starch", labelHi: "शुद्धता", valueHi: "100% शुद्ध - कोई मिलावट नहीं" },
      { label: "Crude Protein", value: "28% to 30% Plant Bio-Protein", labelHi: "प्रोटीन", valueHi: "28% से 30% प्राकृतिक प्रोटीन" },
      { label: "Immunity", value: "High Beta-Glucans & Vitamin D2", labelHi: "इम्युनिटी", valueHi: "बीटा-ग्लूकन और विटामिन D2 से भरपूर" },
      { label: "Culinary Use", value: "Universal mix for dough, soups & shakes", labelHi: "उपयोग", valueHi: "आटा, सूप और शेक में आसानी से घुलनशील" }
    ],
    specifications: [
      { label: "Net Quantity", value: "1 Kilogram (Airtight Food-Grade Pouch)", labelHi: "मात्रा", valueHi: "1 किलोग्राम" },
      { label: "Moisture Content", value: "< 7%", labelHi: "नमी", valueHi: "< 7%" },
      { label: "Shelf Life", value: "12 Months from Manufacturing", labelHi: "शेल्फ लाइफ", valueHi: "12 माह" },
      { label: "FSSAI Grade", value: "Certified Organic Agriculture Produce", labelHi: "मानक", valueHi: "प्रमाणित ऑर्गेनिक कृषि उत्पाद" }
    ],
    howToUseOrGrow: {
      title: "How to Use Daily",
      titleHi: "दैनिक उपयोग कैसे करें",
      points: [
        "Mix 1-2 tablespoons (15-20g) into 1kg of wheat flour while kneading dough for nutrient-dense rotis.",
        "Stir 1 teaspoon into warm soups, dal tadka, or vegetable gravies as a natural thickener and umami enhancer.",
        "Blend into post-workout fruit smoothies for clean, organic vegan protein."
      ],
      pointsHi: [
        "रोटी बनाते समय 1 किलो गेहूं के आटे में 1-2 चम्मच मशरूम पाउडर मिलाएं।",
        "दाल, सूप या सब्जी की ग्रेवी में 1 चम्मच डालकर पौष्टिकता और स्वाद बढ़ाएं।",
        "वर्कआउट के बाद स्मूदी या शेक में प्रोटीन के रूप में उपयोग करें।"
      ]
    },
    storageDelivery: {
      shelfLife: "12 Months",
      shelfLifeHi: "12 महीने",
      storageInfo: "Store in a dry airtight container away from moisture",
      storageInfoHi: "नमी से बचाकर एयरटाइट डिब्बे में रखें",
      deliveryTime: "Dispatched within 24 hours",
      deliveryTimeHi: "24 घंटे के भीतर प्रेषित"
    },
    faqs: [
      {
        question: "Is this made from fresh mushrooms or cultivated spawn?",
        answer: "It is produced exclusively from 100% mature, sun-dried organic oyster mushroom fruiting bodies, ensuring maximum protein and mineral density.",
        questionHi: "क्या यह ताजे मशरूम से बना है?",
        answerHi: "हाँ, यह 100% धूप में सुखाए गए पूर्ण विकसित ऑयस्टर मशरूम से तैयार किया गया है।"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/5a2qH40s3Xg",
    frequentlyBoughtWith: ["shop-10", "shop-4", "shop-11"],
    shopUrl: "http://shop.jasagro.com/product/oyster-mushroom-powder-raw/"
  },
  {
    id: "shop-7",
    page: 1,
    title: "Naan khatai 250gm",
    titleHi: "नानखटाई कुकीज़ 250g",
    slug: "naan-khatai",
    category: "Biscuits & Cookies",
    categoryHi: "Biscuits & Cookies",
    price: 150,
    originalPrice: 175,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/NAAN KHATAI 1.png",
    galleryImages: [
      "/products/NAAN KHATAI 1.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Biscuit3-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Butter-biscuit-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Milk-chocolate5-300x300.jpg"
    ],
    rating: 4.8,
    reviewsCount: 19,
    outOfStock: false,
    isPopular: false,
    description: "Traditional melt-in-mouth Indian naan khatai cookies prepared with pure desi ghee and cardamom.",
    descriptionHi: "Traditional melt-in-mouth Naan Khatai cookies, pure Desi Ghee और इलायची के स्वाद के साथ।",
    highlights: [
      { label: "Ghee Quality", value: "Pure Cow Desi Ghee", labelHi: "घी", valueHi: "शुद्ध देसी घी" },
      { label: "Aroma", value: "Freshly crushed green cardamom", labelHi: "सुगंध", valueHi: "इलायची की ताजी खुशबू" }
    ],
    frequentlyBoughtWith: ["shop-9", "shop-1", "shop-8"],
    shopUrl: "http://shop.jasagro.com/product/naan-khatai/"
  },
  {
    id: "shop-8",
    page: 1,
    title: "Chocolate biscuit 250gm",
    titleHi: "चॉकलेट काजू बिस्किट 250g",
    slug: "chocolate-cashew-biscuit",
    category: "Biscuits & Cookies",
    categoryHi: "Biscuits & Cookies",
    price: 150,
    originalPrice: 180,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/NAAN KHATAI 3.png",
    galleryImages: [
      "/products/NAAN KHATAI 3.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Chocolate-Biscuit-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2023/02/Vanilla-chocolate-Biscuit-300x300.png"
    ],
    rating: 4.7,
    reviewsCount: 22,
    outOfStock: false,
    isPopular: false,
    description: "Rich cocoa biscuits studded with crunchy cashew bits and mushroom fortification.",
    descriptionHi: "Crunchy Cashew bits और Cocoa से बनी rich Chocolate biscuits।",
    highlights: [
      { label: "Cashew Infusion", value: "Real Roasted Cashew Bits", labelHi: "काजू", valueHi: "रोस्टेड काजू के टुकड़े" },
      { label: "Cocoa", value: "Double Dutch Cocoa Formula", labelHi: "कोको", valueHi: "प्रीमियम डच कोको" }
    ],
    frequentlyBoughtWith: ["shop-1", "shop-2", "shop-7"],
    shopUrl: "http://shop.jasagro.com/product/chocolate-cashew-biscuit/"
  },
  {
    id: "shop-9",
    page: 1,
    title: "Butter-biscuit 250gm",
    titleHi: "बटर बिस्किट 250g",
    slug: "butter-biscuit",
    category: "Biscuits & Cookies",
    categoryHi: "Biscuits & Cookies",
    price: 150,
    originalPrice: 175,
    unit: "250g pack",
    unitHi: "250g pack",
    img: "/products/NAAN KHATAI 2.png",
    galleryImages: [
      "/products/NAAN KHATAI 2.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Butter-biscuit-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Biscuit3-300x300.jpg"
    ],
    rating: 4.8,
    reviewsCount: 16,
    outOfStock: false,
    isPopular: false,
    description: "Crispy golden butter cookies made with farm-fresh butter and organic flour.",
    descriptionHi: "Crispy golden Butter cookies, fresh butter और organic flour से तैयार।",
    highlights: [
      { label: "Butter Quality", value: "Farm-Churned Sweet Cream Butter", labelHi: "मक्खन", valueHi: "फार्म-फ्रेश शुद्ध मक्खन" },
      { label: "Bake", value: "Golden Crispy Perfection", labelHi: "बेक", valueHi: "गोल्डन क्रिस्पी बेक" }
    ],
    frequentlyBoughtWith: ["shop-7", "shop-2", "shop-1"],
    shopUrl: "http://shop.jasagro.com/product/butter-biscuit/"
  },

  // --- Page 2 Products ---
  {
    id: "shop-10",
    page: 2,
    title: "Oyster Mushrooms 1kg",
    titleHi: "फ्रेश ऑयस्टर मशरूम 1kg",
    slug: "oyster-mushrooms-1kg",
    category: "Oyster Mushrooms",
    categoryHi: "Oyster Mushrooms",
    price: 200,
    originalPrice: 240,
    unit: "1kg pack",
    unitHi: "1kg pack",
    img: "/products/Oyster Mushroom FRESH.png",
    galleryImages: [
      "/products/Oyster Mushroom FRESH.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/04/Mushroom-300x300.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/05/Mushroom-Powder-300x300.jpg",
      "http://shop.jasagro.com/wp-content/uploads/2022/09/Khakhra-Oyster-300x300.jpg"
    ],
    rating: 4.9,
    reviewsCount: 38,
    outOfStock: false,
    isPopular: true,
    description: "Freshly harvested organic white Oyster Mushrooms grown in climate-controlled indoor telemetry rooms.",
    descriptionHi: "Freshly harvested organic Oyster Mushrooms, हाई nutrition और बढ़िया taste के साथ।",
    longDescription: "Harvested fresh on the morning of dispatch, JAS Agro Oyster Mushrooms (Pleurotus ostreatus) are cultivated in our state-of-the-art indoor smart micro-climate telemetry chambers. Free of any chemical sprays or artificial enhancers, they boast tender velvety caps and rich gourmet umami.",
    longDescriptionHi: "JAS Agro फ्रेश ऑयस्टर मशरूम अत्याधुनिक IoT नियंत्रित क्लाइमेट रूम में उगाए जाते हैं। ये 100% जैविक, रसायन मुक्त और ताजगी से भरपूर हैं।",
    highlights: [
      { label: "Farming Method", value: "IoT Telemetry Climate-Controlled Indoor Farm", labelHi: "खेती की विधि", valueHi: "IoT क्लाइमेट नियंत्रित इनडोर फार्मिंग" },
      { label: "Chemicals", value: "Zero Synthetic Pesticides or Hormones", labelHi: "रसायन", valueHi: "शून्य कीटनाशक व रसायन" },
      { label: "Harvest", value: "Fresh Morning Picked & Cold-Packed", labelHi: "तुड़ाई", valueHi: "सुबह की ताजा तुड़ाई और कोल्ड पैक" },
      { label: "Nutrient", value: "High Protein, Minerals & Dietary Fiber", labelHi: "पोषण", valueHi: "उच्च प्रोटीन, खनिज व फाइबर" }
    ],
    specifications: [
      { label: "Net Weight", value: "1 Kilogram (Aerated Fresh Box)", labelHi: "वजन", valueHi: "1 किलोग्राम" },
      { label: "Variety", value: "White Oyster Mushroom (Pleurotus florida / ostreatus)", labelHi: "किस्म", valueHi: "सफेद ऑयस्टर मशरूम" },
      { label: "Ideal Storage", value: "Refrigerate at 4°C to 7°C in breathable packaging", labelHi: "भंडारण", valueHi: "फ्रिज में 4°C से 7°C पर रखें" },
      { label: "Freshness Window", value: "Best consumed within 4 to 6 days", labelHi: "उपभोग अवधि", valueHi: "4 से 6 दिनों के भीतर उपयोग करें" }
    ],
    howToUseOrGrow: {
      title: "Culinary & Cooking Tips",
      titleHi: "पकाने के सुझाव",
      points: [
        "Wipe gently with a damp paper towel or rinse lightly before cooking.",
        "Saute with butter, minced garlic, and black pepper for 4-5 minutes until golden.",
        "Add into curries, biryanis, stir-fried vegetables, or rich pasta gravies."
      ],
      pointsHi: [
        "पकाने से पहले हल्के गीले कपड़े से पोंछें या हल्का धोएं।",
        "लहसुन, मक्खन और काली मिर्च के साथ 4-5 मिनट तक हल्का भूनें।",
        "सब्जी, पुलाव, पास्ता या सूप में डालकर स्वादिष्ट व्यंजन बनाएं।"
      ]
    },
    storageDelivery: {
      shelfLife: "4-6 Days (Refrigerated)",
      shelfLifeHi: "4-6 दिन (फ्रिज में)",
      storageInfo: "Keep chilled in ventilated paper or perforated bag",
      storageInfoHi: "हवादार बैग में फ्रिज में रखें",
      deliveryTime: "Same-day farm harvest & dispatch",
      deliveryTimeHi: "तुड़ाई के दिन ही प्रेषण"
    },
    videoUrl: "https://www.youtube.com/embed/5a2qH40s3Xg",
    frequentlyBoughtWith: ["shop-6", "shop-11", "shop-4"],
    shopUrl: "http://shop.jasagro.com/product/oyster-mushrooms-1kg/"
  },
  {
    id: "shop-11",
    page: 2,
    title: "Azolla 1 KG",
    titleHi: "अजोला हरा चारा 1kg",
    slug: "azolla-5-kg",
    category: "Azolla Fodder",
    categoryHi: "Azolla Fodder",
    price: 120,
    originalPrice: 150,
    unit: "1kg live culture",
    unitHi: "1kg live culture",
    img: "/products/AZOLLA.png",
    galleryImages: [
      "/products/AZOLLA.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/04/Azolla-300x300.png",
      "http://shop.jasagro.com/wp-content/uploads/2022/04/Mushroom-300x300.png"
    ],
    rating: 5.0,
    reviewsCount: 52,
    outOfStock: false,
    isPopular: true,
    description: "High-protein green bio-superfood for cattle, poultry, and fish farming (25-30% crude protein).",
    descriptionHi: "Cattle, Poultry और Fish farming के लिए 25-30% Protein युक्त live Azolla Fodder।",
    longDescription: "JAS Agro Azolla Pinnata is a fast-growing, high-protein floating aquatic bio-fern designed for dairy cattle, poultry, goats, and aquaculture. Containing 25-30% digestible crude protein and essential amino acids, daily feeding boosts cow milk yield by 15-20% while slashing concentrated feed costs.",
    longDescriptionHi: "JAS Agro अजोला पिन्नाटा दुधारू पशुओं, मुर्गी पालन और मछली पालन के लिए एक चमत्कारी हरा बायो-सुपरफूड है। इसमें 25-30% प्रोटीन होता है जिससे दूध उत्पादन 15-20% तक बढ़ता है।",
    highlights: [
      { label: "Crude Protein", value: "25% - 30% High Bio-Availability", labelHi: "प्रोटीन", valueHi: "25% - 30% उच्च पाचक प्रोटीन" },
      { label: "Dairy Yield Boost", value: "Increases milk output by 15% to 20%", labelHi: "दूध उत्पादन", valueHi: "दूध में 15% से 20% तक की वृद्धि" },
      { label: "Growth Rate", value: "Rapid biomass doubling every 3-5 days", labelHi: "वृद्धि दर", valueHi: "हर 3-5 दिन में बायोमास दोगुना" },
      { label: "Feed Savings", value: "Reduces commercial concentrate feed cost by 20-25%", labelHi: "लागत बचत", valueHi: "पशु आहार खर्च में 20-25% की कमी" }
    ],
    specifications: [
      { label: "Culture Species", value: "Azolla Pinnata (Pure Live Strains)", labelHi: "प्रजाति", valueHi: "अजोला पिन्नाटा (लाइव कल्चर)" },
      { label: "Net Inoculum", value: "1 Kilogram Live Mother Inoculum", labelHi: "मात्रा", valueHi: "1 किलोग्राम लाइव मदर कल्चर" },
      { label: "Optimum Temp", value: "20°C - 32°C (Partial Shade Recommended)", labelHi: "अनुकूल तापमान", valueHi: "20°C - 32°C (हल्की छाया)" },
      { label: "Water pH", value: "6.5 - 7.5 (Fresh Clean Water)", labelHi: "पानी का pH", valueHi: "6.5 - 7.5" }
    ],
    howToUseOrGrow: {
      title: "Step-by-Step Cultivation & Feeding Guide",
      titleHi: "उगाने और खिलाने की संपूर्ण विधि",
      points: [
        "Dig a shallow pit (2m x 2m x 0.2m) or set up a silpaulin tray under 50% green shade net.",
        "Add 10-15kg fertile soil mixed with 2-3kg decomposed cow dung slurry and 30g single super phosphate.",
        "Fill 10-12cm clean water, float this 1kg live Azolla mother culture, and stir gently.",
        "Within 10-14 days the bed covers completely. Harvest 1-1.5kg daily for direct cattle/poultry feed."
      ],
      pointsHi: [
        "50% शेड नेट के नीचे 2m x 2m का 15-20 सेमी गहरा गड्ढा बनाएं या सिलपॉलिन बेड बिछाएं।",
        "10-15 किलो उपजाऊ मिट्टी, 2-3 किलो गोबर का घोल और 30 ग्राम सुपर फॉस्फेट मिलाएं।",
        "10-12 सेमी पानी भरकर 1 किलो लाइव अजोला कल्चर फैलाएं।",
        "10-14 दिनों में बेड भर जाएगा। रोजाना 1-1.5 किलो ताजा अजोला निकालकर पशुओं को खिलाएं।"
      ]
    },
    storageDelivery: {
      shelfLife: "Plant immediately upon receipt (within 48 hrs)",
      shelfLifeHi: "प्राप्त होने के 48 घंटे के भीतर पानी में डालें",
      storageInfo: "Moist ventilated live transport pack",
      storageInfoHi: "नमीयुक्त हवादार लाइव ट्रांसपोर्ट पैक",
      deliveryTime: "Priority Live-Plant Logistics (Express)",
      deliveryTimeHi: "प्राथमिकता लाइव-प्लांट एक्सप्रेस डिलीवरी"
    },
    faqs: [
      {
        question: "How much Azolla should I feed to a dairy cow daily?",
        answer: "Mix 1.5 to 2.0 kg of fresh washed Azolla daily with regular dry fodder or cattle mash.",
        questionHi: "गाय या भैंस को रोजाना कितना अजोला खिलाना चाहिए?",
        answerHi: "प्रतिदिन 1.5 से 2 किलो ताजा धुला हुआ अजोला सूखे चारे या दाने में मिलाकर खिलाएं।"
      }
    ],
    videoUrl: "https://www.youtube.com/embed/5a2qH40s3Xg",
    frequentlyBoughtWith: ["shop-10", "shop-6"],
    shopUrl: "http://shop.jasagro.com/product/azolla-5-kg/"
  }
];
