export interface ProductNutrition {
  servingSize?: string;
  servingSizeHi?: string;
  servingsPerPack?: string;
  energy: { per100g: string; perServing?: string };
  protein: { per100g: string; perServing?: string };
  carbohydrates: { per100g: string; perServing?: string };
  totalSugars: { per100g: string; perServing?: string };
  addedSugars: { per100g: string; perServing?: string };
  totalFat: { per100g: string; perServing?: string };
  saturatedFat: { per100g: string; perServing?: string };
  transFat: { per100g: string; perServing?: string };
  dietaryFibre: { per100g: string; perServing?: string };
  sodium: { per100g: string; perServing?: string };
  otherNutrients?: {
    name: string;
    nameHi?: string;
    per100g: string;
    perServing?: string;
  }[];
}

export interface ProductIngredients {
  ingredientsList: string[];
  ingredientsListHi?: string[];
  allergenInfo: string;
  allergenInfoHi?: string;
  foodClassification: "Vegetarian" | "Vegan" | "Non-Vegetarian" | "Agriculture Produce";
  fssaiInfo?: string;
  fssaiInfoHi?: string;
  manufacturerDetails?: string;
  manufacturerDetailsHi?: string;
}

export interface ProductFoodSpecs {
  productName: string;
  productNameHi?: string;
  category: string;
  categoryHi?: string;
  netQuantity: string;
  netQuantityHi?: string;
  packSize: string;
  packSizeHi?: string;
  ingredientsSummary: string;
  ingredientsSummaryHi?: string;
  tasteOrVariant: string;
  tasteOrVariantHi?: string;
  shelfLife: string;
  shelfLifeHi?: string;
  storage: string;
  storageHi?: string;
  allergenInfo: string;
  allergenInfoHi?: string;
  vegetarianClassification: string;
  vegetarianClassificationHi?: string;
  manufacturerBrand: string;
  manufacturerBrandHi?: string;
  fssaiNumber?: string;
  countryOfOrigin: string;
  countryOfOriginHi?: string;
}

export interface ProductAgriSpecs {
  productVariety: string;
  productVarietyHi?: string;
  cropType: string;
  cropTypeHi?: string;
  season: string;
  seasonHi?: string;
  growingLevel: string;
  growingLevelHi?: string;
  germinationOrSpawning: string;
  germinationOrSpawningHi?: string;
  temperature: string;
  temperatureHi?: string;
  soilOrSubstrate: string;
  soilOrSubstrateHi?: string;
  sunlight: string;
  sunlightHi?: string;
  waterRequirements: string;
  waterRequirementsHi?: string;
  containerOrPitRequirement: string;
  containerOrPitRequirementHi?: string;
  harvestWindow: string;
  harvestWindowHi?: string;
  packQuantity: string;
  packQuantityHi?: string;
  brandOrOrigin: string;
  brandOrOriginHi?: string;
}

export interface HowToUseStep {
  stepNumber: number;
  title: string;
  titleHi?: string;
  description: string;
  descriptionHi?: string;
}

export interface ProductHowToUseDetailed {
  guideTitle: string;
  guideTitleHi: string;
  subtitle?: string;
  subtitleHi?: string;
  steps: HowToUseStep[];
  precautionsOrTips?: string[];
  precautionsOrTipsHi?: string[];
}

export interface ProductDetailedFaq {
  question: string;
  questionHi: string;
  answer: string;
  answerHi: string;
}

export interface ProductStorageExtended {
  shelfLife: string;
  shelfLifeHi?: string;
  bestBefore: string;
  bestBeforeHi?: string;
  guidelines: string[];
  guidelinesHi?: string[];
}

export interface ProductShippingExtended {
  dispatchTime: string;
  dispatchTimeHi?: string;
  courierPartners: string;
  courierPartnersHi?: string;
  freeShippingAbove: string;
  freeShippingAboveHi?: string;
  handlingNote?: string;
  handlingNoteHi?: string;
}

export interface ProductReturnsExtended {
  policyType: "Food & Consumables" | "Live Agricultural Culture" | "General";
  policyTypeHi?: string;
  guaranteeHeadline: string;
  guaranteeHeadlineHi?: string;
  terms: string[];
  termsHi?: string[];
}

export interface ProductExtendedInfo {
  productId: string;
  productType: "food" | "agriculture";
  nutrition?: ProductNutrition;
  ingredients?: ProductIngredients;
  foodSpecs?: ProductFoodSpecs;
  agriSpecs?: ProductAgriSpecs;
  howToUse?: ProductHowToUseDetailed;
  faqs?: ProductDetailedFaq[];
  storage: ProductStorageExtended;
  shipping: ProductShippingExtended;
  returns: ProductReturnsExtended;
}

export const COMMON_SHIPPING_POLICY: ProductShippingExtended = {
  dispatchTime: "Dispatched within 24 to 48 business hours",
  dispatchTimeHi: "24 से 48 कार्य घंटों के भीतर प्रेषित",
  courierPartners: "Insured Express Delivery via BlueDart, Delhivery, DTDC, XpressBees",
  courierPartnersHi: "BlueDart, Delhivery, DTDC द्वारा बीमित एक्सप्रेस डिलीवरी",
  freeShippingAbove: "Free Express Shipping on all prepaid orders above ₹499",
  freeShippingAboveHi: "₹499 से अधिक के प्रीपेड ऑर्डर्स पर मुफ़्त एक्सप्रेस डिलीवरी",
  handlingNote: "Dispatched in protective multi-layer moisture-resistant packaging",
  handlingNoteHi: "मल्टी-लेयर नमी-रोधी सुरक्षात्मक पैकेजिंग में प्रेषित"
};

export const COMMON_FOOD_RETURNS_POLICY: ProductReturnsExtended = {
  policyType: "Food & Consumables",
  policyTypeHi: "खाद्य एवं उपभोग्य उत्पाद",
  guaranteeHeadline: "100% Quality & Freshness Transit Guarantee",
  guaranteeHeadlineHi: "100% गुणवत्ता एवं सुरक्षित डिलीवरी गारंटी",
  terms: [
    "Due to food safety hygiene and FSSAI guidelines, opened consumable products are not returnable.",
    "If your package arrives damaged, unsealed, or spoiled, contact us within 24 hours of delivery for a free instant replacement or 100% refund.",
    "Proof of damage (unboxing photo or video) via WhatsApp support (+91 73729 26623) enables immediate dispatch of replacement."
  ],
  termsHi: [
    "खाद्य सुरक्षा मानकों के अनुसार खुले हुए खाद्य उत्पादों की सामान्य वापसी स्वीकार्य नहीं है।",
    "यदि पार्सल क्षतिग्रस्त या सील खुला मिलता है, तो डिलीवरी के 24 घंटे के भीतर संपर्क करने पर तत्काल रिप्लेसमेंट या पूरा रिफंड मिलेगा।",
    "व्हाट्सएप सपोर्ट (+91 73729 26623) पर अनबॉक्सिंग फोटो/वीडियो साझा करके तुरंत सहायता प्राप्त करें।"
  ]
};

export const COMMON_AGRI_RETURNS_POLICY: ProductReturnsExtended = {
  policyType: "Live Agricultural Culture",
  policyTypeHi: "लाइव कृषि संवर्धन / फार्म उत्पाद",
  guaranteeHeadline: "100% Live Delivery & Transit Freshness Guarantee",
  guaranteeHeadlineHi: "100% लाइव डिलीवरी एवं फार्म ताजगी गारंटी",
  terms: [
    "Live agricultural inoculums and fresh produce are packed in breathable specialized moisture-retaining media.",
    "Report any transit stress or delivery damage within 24 hours with an unboxing photo/video on WhatsApp (+91 73729 26623).",
    "Eligible damaged live cultures will be replaced immediately free of cost."
  ],
  termsHi: [
    "लाइव कृषि कल्चर और ताजे उत्पाद विशेष हवादार नमीयुक्त मीडिया में पैक किए जाते हैं।",
    "डिलीवरी के 24 घंटे के भीतर व्हाट्सएप (+91 73729 26623) पर अनबॉक्सिंग वीडियो/फोटो भेजकर क्लेम दर्ज करें।",
    "क्षतिग्रस्त लाइव कल्चर के लिए तत्काल मुफ़्त रिप्लेसमेंट भेजा जाएगा।"
  ]
};

export const EXTENDED_PRODUCT_DATA: Record<string, ProductExtendedInfo> = {
  // 1. Vanilla Chocolate Biscuit 250gm
  "shop-1": {
    productId: "shop-1",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 2 biscuits)",
      servingSizeHi: "25g (लगभग 2 बिस्किट)",
      servingsPerPack: "10",
      energy: { per100g: "472 kcal", perServing: "118 kcal" },
      protein: { per100g: "9.2 g", perServing: "2.3 g" },
      carbohydrates: { per100g: "68.4 g", perServing: "17.1 g" },
      totalSugars: { per100g: "22.5 g", perServing: "5.6 g" },
      addedSugars: { per100g: "18.0 g", perServing: "4.5 g" },
      totalFat: { per100g: "18.6 g", perServing: "4.65 g" },
      saturatedFat: { per100g: "8.4 g", perServing: "2.1 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "5.8 g", perServing: "1.45 g" },
      sodium: { per100g: "140 mg", perServing: "35 mg" },
      otherNutrients: [
        { name: "Vitamin D2 (from Mushroom)", nameHi: "विटामिन D2 (मशरूम से)", per100g: "4.8 mcg", perServing: "1.2 mcg" },
        { name: "Beta-Glucans", nameHi: "बीटा-ग्लूकन", per100g: "320 mg", perServing: "80 mg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Stone-ground Whole Wheat Flour",
        "Pure Cocoa Powder",
        "Natural Vanilla Extract",
        "Dehydrated Oyster Mushroom Extract (Pleurotus ostreatus)",
        "Farm Butter",
        "Unrefined Cane Sugar",
        "Milk Solids",
        "Baking Soda",
        "Iodized Salt"
      ],
      ingredientsListHi: [
        "चक्की का शुद्ध गेहूं का आटा",
        "प्राकृतिक कोको पाउडर",
        "प्राकृतिक वैनिला अर्क",
        "शुद्ध ऑयस्टर मशरूम सत्व",
        "फार्म बटर",
        "अपरिष्कृत खांड/शक्कर",
        "दूध के ठोस पदार्थ",
        "बेकिंग सोडा",
        "सेंधा/आयोडीनयुक्त नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten) and Milk (Dairy). Processed in a facility that also handles tree nuts and sesame.",
      allergenInfoHi: "इसमें गेहूं (ग्लूटेन) और दूध शामिल है। यह उसी परिसर में निर्मित है जहाँ सूखे मेवे भी संसाधित होते हैं।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Standards Compliant • 100% Vegetarian Certified",
      fssaiInfoHi: "FSSAI मानकों के अनुरूप • 100% शाकाहारी प्रमाणित",
      manufacturerDetails: "JAS Agro Organic Processing Facility, Bihar, India",
      manufacturerDetailsHi: "JAS Agro ऑर्गेनिक प्रोसेसिंग यूनिट, बिहार, भारत"
    },
    foodSpecs: {
      productName: "Vanilla Chocolate Biscuit 250gm",
      productNameHi: "वैनिला चॉकलेट बिस्किट 250g",
      category: "Biscuits & Cookies",
      categoryHi: "बिस्किट एवं कुकीज़",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Aroma-Lock Multi-Layer Foil Pack",
      packSizeHi: "250g अरोमा-लॉक मल्टी-लेयर फॉयल पैक",
      tasteOrVariant: "Balanced Rich Cocoa & Madagascar Vanilla",
      tasteOrVariantHi: "लाजवाब कोको एवं मदगास्कर वैनिला स्वाद",
      ingredientsSummary: "Whole Wheat, Pure Cocoa, Vanilla, Oyster Mushroom Extract, Butter, Milk Solids",
      ingredientsSummaryHi: "गेहूं का आटा, कोको, वैनिला, ऑयस्टर मशरूम अर्क, मक्खन, दूध",
      shelfLife: "6 Months from manufacturing date",
      shelfLifeHi: "उत्पादन तिथि से 6 महीने",
      storage: "Store in a cool, dry place in an airtight container away from direct sunlight",
      storageHi: "धूप से दूर ठंडी व सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat (Gluten) and Dairy (Milk)",
      allergenInfoHi: "गेहूं (ग्लूटेन) और दूध शामिल है",
      vegetarianClassification: "100% Vegetarian (Certified Green Dot)",
      vegetarianClassificationHi: "100% शाकाहारी (हरा प्रतीक)",
      manufacturerBrand: "JAS Agro Farms & Processing Unit",
      manufacturerBrandHi: "JAS Agro फार्म्स एवं प्रोसेसिंग यूनिट",
      fssaiNumber: "FSSAI Regulated & Certified",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Recommended Serving & Storage Guide",
      guideTitleHi: "उपभोग एवं भंडारण विधि",
      subtitle: "Enjoy premium bakery taste fortified with daily natural mushroom wellness.",
      subtitleHi: "प्राकृतिक मशरूम पोषण के साथ बेहतरीन बेकरी स्वाद का आनंद लें।",
      steps: [
        {
          stepNumber: 1,
          title: "Daily Tea & Coffee Companion",
          titleHi: "चाय व कॉफी के साथ",
          description: "Pair 2-3 crispy biscuits with your morning green tea, farm milk, or hot filtered coffee for wholesome energy.",
          descriptionHi: "सुबह की चाय, ताजे दूध या गर्म कॉफी के साथ 2-3 क्रिस्पी बिस्किट का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Wholesome Lunchbox & Snack on-the-go",
          titleHi: "बच्चों और ऑफिस के लिए स्नैक",
          description: "Perfect for kids' school tiffins, travel snacking, and midday office hunger without artificial sugar crashes.",
          descriptionHi: "बच्चों के टिफिन, यात्रा और ऑफिस में दिन के नाश्ते के लिए एक पौष्टिक और सुरक्षित विकल्प।"
        },
        {
          stepNumber: 3,
          title: "Dessert Crumble & Shake Topping",
          titleHi: "डिजर्ट और शेक टॉपिंग",
          description: "Coarsely crush over vanilla ice cream, fruit custard, or blend into milkshakes for rich chocolate crunch.",
          descriptionHi: "आइसक्रीम, कस्टर्ड या मिल्कशेक में क्रश करके स्वादिष्ट चॉकलेट क्रंच जोड़ें।"
        },
        {
          stepNumber: 4,
          title: "Airtight Storage After Opening",
          titleHi: "खोलने के बाद एयरटाइट भंडारण",
          description: "Transfer remaining biscuits into a clean, dry airtight container immediately after opening to retain oven-fresh crispness.",
          descriptionHi: "पैकेट खोलने के बाद बिस्किट का कुरकुरापन बनाए रखने के लिए तुरंत एयरटाइट डिब्बे में बंद करके रखें।"
        }
      ],
      precautionsOrTips: [
        "Do not leave the opened pack exposed to humid air.",
        "Store away from strong-smelling spices to preserve pure vanilla-cocoa aroma."
      ],
      precautionsOrTipsHi: [
        "खुले पैकेट को नमी वाली हवा में खुला न छोड़ें।",
        "वैनिला और कोको की शुद्ध खुशबू बनाए रखने के लिए तेज गंध वाले मसालों से अलग रखें।"
      ]
    },
    faqs: [
      {
        question: "Does the biscuit have any mushroom smell or pungent taste?",
        questionHi: "क्या बिस्किट में मशरूम की कोई गंध या अजीब स्वाद आता है?",
        answer: "Not at all. Our proprietary extraction isolates bio-active mushroom nutrients (Beta-Glucans, Protein, Vitamin D2) while keeping the mouth-watering vanilla chocolate bakery flavor 100% authentic and delicious.",
        answerHi: "बिल्कुल नहीं! हमारी विशेष निष्कर्षण तकनीक मशरूम के शुद्ध पोषण को बिना किसी गंध या स्वाद बदलाव के वैनिला-चॉकलेट के लाजवाब स्वाद में बनाए रखती है।"
      },
      {
        question: "What is the net pack weight and how many biscuits are inside?",
        questionHi: "पैकेट का कुल वजन कितना है और इसमें कितने बिस्किट होते हैं?",
        answer: "Each pack contains 250 grams net weight, which equates to approximately 20 to 22 generously sized, crunchy oven-baked cookies.",
        answerHi: "प्रत्येक पैक का कुल वजन 250 ग्राम है, जिसमें लगभग 20 से 22 कुरकुरी और स्वादिष्ट कुकीज होती हैं।"
      },
      {
        question: "Are there any artificial preservatives or trans-fats?",
        questionHi: "क्या इसमें कोई कृत्रिम संरक्षक या ट्रांस-फैट है?",
        answer: "No, JAS Agro biscuits are prepared with whole grains, real butter, and zero chemical trans-fats or artificial food colorings.",
        answerHi: "नहीं, JAS Agro बिस्किट शुद्ध अनाज, असली मक्खन से बनाए जाते हैं और इनमें शून्य ट्रांस-फैट व कोई कृत्रिम रंग नहीं होता।"
      },
      {
        question: "How long does this product remain fresh after opening?",
        questionHi: "पैकेट खोलने के बाद यह कितने दिनों तक ताजा रहता है?",
        answer: "When stored in a dry, sealed airtight jar at room temperature, the biscuits stay oven-crisp and fresh for up to 3 to 4 weeks after opening.",
        answerHi: "एयरटाइट डिब्बे में ठीक से बंद करके रखने पर खोलने के बाद भी यह 3 से 4 हफ्तों तक पूरी तरह कुरकुरा और ताजा रहता है।"
      },
      {
        question: "Is it suitable for daily consumption by children and elderly?",
        questionHi: "क्या यह बच्चों और बुजुर्गों के दैनिक उपभोग के लिए उपयुक्त है?",
        answer: "Yes, it is formulated as a wholesome, clean-label family snack suitable for all age groups seeking natural nourishment.",
        answerHi: "हाँ, यह पूरे परिवार के लिए एक पौष्टिक, स्वच्छ और प्राकृतिक स्नैक है जिसे बच्चे और बुजुर्ग दोनों खा सकते हैं।"
      },
      {
        question: "How are orders packed and dispatched?",
        questionHi: "ऑर्डर कैसे पैक और भेजे जाते हैं?",
        answer: "Orders are safely packed in protective multi-layer cushioned corrugated boxes and dispatched within 24-48 business hours via insured express couriers.",
        answerHi: "ऑर्डर्स को सुरक्षात्मक मल्टी-लेयर बॉक्स में पैक किया जाता है और 24-48 कार्य घंटों में एक्सप्रेस कूरियर द्वारा भेजा जाता है।"
      }
    ],
    storage: {
      shelfLife: "6 Months from manufacturing date",
      shelfLifeHi: "उत्पादन तिथि से 6 महीने",
      bestBefore: "Best before 180 days when sealed in cool storage",
      bestBeforeHi: "सील पैक रहने पर 180 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in a cool, dry place away from direct sunlight and heat.",
        "Transfer to an airtight container once the foil pouch is opened.",
        "Do not refrigerate; room temperature storage is recommended."
      ],
      guidelinesHi: [
        "धूप और अत्यधिक गर्मी से दूर ठंडी व सूखी जगह पर रखें।",
        "फॉयल पाउच खोलने के बाद एयरटाइट जार में रखें।",
        "फ्रिज में रखने की आवश्यकता नहीं है; सामान्य तापमान पर रखें।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 2. Milk Chocolate Biscuit 250gm
  "shop-2": {
    productId: "shop-2",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 2 biscuits)",
      servingSizeHi: "25g (लगभग 2 बिस्किट)",
      servingsPerPack: "10",
      energy: { per100g: "480 kcal", perServing: "120 kcal" },
      protein: { per100g: "9.5 g", perServing: "2.38 g" },
      carbohydrates: { per100g: "67.0 g", perServing: "16.75 g" },
      totalSugars: { per100g: "24.0 g", perServing: "6.0 g" },
      addedSugars: { per100g: "19.0 g", perServing: "4.75 g" },
      totalFat: { per100g: "19.5 g", perServing: "4.88 g" },
      saturatedFat: { per100g: "9.1 g", perServing: "2.28 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "5.4 g", perServing: "1.35 g" },
      sodium: { per100g: "150 mg", perServing: "37.5 mg" },
      otherNutrients: [
        { name: "Calcium (from Milk Solids)", nameHi: "कैल्शियम", per100g: "160 mg", perServing: "40 mg" },
        { name: "Vitamin D2 (Mushroom fortified)", nameHi: "विटामिन D2", per100g: "4.5 mcg", perServing: "1.1 mcg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Whole Grain Wheat Flour",
        "Dairy Milk Solids",
        "Pure Roasted Cocoa Powder",
        "Dehydrated Oyster Mushroom Powder",
        "Organic Farm Butter",
        "Unrefined Sugar",
        "Natural Milk Flavoring",
        "Baking Leavening Agents",
        "Salt"
      ],
      ingredientsListHi: [
        "होल ग्रेन गेहूं का आटा",
        "शुद्ध दूध के ठोस पदार्थ",
        "रोस्टेड कोको पाउडर",
        "ऑयस्टर मशरूम पाउडर",
        "ऑर्गेनिक फार्म बटर",
        "शक्कर",
        "प्राकृतिक मिल्क फ्लेवर",
        "बेकिंग एजेंट्स",
        "नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten) and Milk Solids. May contain traces of nuts.",
      allergenInfoHi: "गेहूं (ग्लूटेन) और दूध शामिल है। इसमें सूखे मेवों के अंश हो सकते हैं।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Quality Approved • Pure Vegetarian",
      fssaiInfoHi: "FSSAI गुणवत्ता स्वीकृत • 100% शाकाहारी",
      manufacturerDetails: "JAS Agro Organic Food Processing, Bihar",
      manufacturerDetailsHi: "JAS Agro ऑर्गेनिक फूड प्रोसेसिंग, बिहार"
    },
    foodSpecs: {
      productName: "Milk Chocolate Biscuit 250gm",
      productNameHi: "मिल्क चॉकलेट बिस्किट 250g",
      category: "Biscuits & Cookies",
      categoryHi: "बिस्किट एवं कुकीज़",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Sealed Aroma Barrier Pouch",
      packSizeHi: "250g सीलबंद एरोमा बैरियर पाउच",
      tasteOrVariant: "Creamy Sweet Milk & Smooth Cocoa",
      tasteOrVariantHi: "मलाईदार मीठा दूध और स्मूथ कोको",
      ingredientsSummary: "Whole Wheat, Milk Solids, Cocoa, Farm Butter, Mushroom Fortification",
      ingredientsSummaryHi: "गेहूं का आटा, दूध, कोको, मक्खन, मशरूम पोषण",
      shelfLife: "6 Months from packing",
      shelfLifeHi: "पैकिंग से 6 महीने",
      storage: "Keep in a cool, dry place in an airtight jar",
      storageHi: "ठंडी, सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat and Milk",
      allergenInfoHi: "गेहूं और दूध शामिल है",
      vegetarianClassification: "100% Vegetarian",
      vegetarianClassificationHi: "100% शाकाहारी",
      manufacturerBrand: "JAS Agro",
      manufacturerBrandHi: "JAS Agro",
      fssaiNumber: "FSSAI Standards Compliant",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Serving & Usage Recommendations",
      guideTitleHi: "उपभोग एवं परोसने का तरीका",
      subtitle: "Rich dairy goodness combined with wholesome baked nutrition.",
      subtitleHi: "शुद्ध दूध की पौष्टिकता और बेक्ड कुकीज का बेहतरीन संगम।",
      steps: [
        {
          stepNumber: 1,
          title: "Morning Milk & Beverage Dip",
          titleHi: "दूध व गर्म पेय के साथ",
          description: "Dip into warm milk, hot cocoa, or tea for a melt-in-mouth creamy cookie experience.",
          descriptionHi: "गर्म दूध, हॉट चॉकलेट या चाय के साथ डिप करके मलाईदार स्वाद का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Midday Work & Study Snack",
          titleHi: "पढ़ाई और काम के दौरान स्नैक",
          description: "Provides balanced carbohydrates and dairy calcium for kids studying or professionals working long hours.",
          descriptionHi: "पढ़ाई करने वाले बच्चों और कामकाजी युवाओं को ऊर्जा और कैल्शियम प्रदान करता है।"
        },
        {
          stepNumber: 3,
          title: "Party Dessert & Platter",
          titleHi: "पार्टी व फैमिली प्लेटर",
          description: "Serve on dessert platters paired with fresh strawberries or sliced bananas.",
          descriptionHi: "पारिवारिक समारोहों में ताजे फलों और मेवों के साथ परोसें।"
        },
        {
          stepNumber: 4,
          title: "Reseal for Long-Lasting Crunch",
          titleHi: "कुरकुरापन बनाए रखने के लिए सील करें",
          description: "Close pack tightly with a food clip or store in an airtight tin to protect from moisture.",
          descriptionHi: "पैकेट को क्लिप से बंद करें या नमी से बचाने के लिए एयरटाइट टिन में रखें।"
        }
      ],
      precautionsOrTips: [
        "Keep sealed to avoid softening during monsoon seasons.",
        "Store in a clean and insect-free pantry."
      ],
      precautionsOrTipsHi: [
        "बारिश के मौसम में सीलन से बचाने के लिए अच्छी तरह बंद रखें।",
        "साफ और कीट-मुक्त अलमारी में रखें।"
      ]
    },
    faqs: [
      {
        question: "What gives this biscuit its rich milk chocolate taste?",
        questionHi: "इस बिस्किट को मलाईदार मिल्क चॉकलेट स्वाद कैसे मिलता है?",
        answer: "We blend genuine dairy milk solids with roasted cocoa beans and churned farm butter, delivering an authentic melt-in-mouth creamy profile.",
        answerHi: "हम शुद्ध दूध के ठोस पदार्थों, भुने हुए कोको और फार्म बटर का मिश्रण करते हैं, जो इसे स्वाभाविक मलाईदार स्वाद देता है।"
      },
      {
        question: "Is this biscuit 100% vegetarian?",
        questionHi: "क्या यह बिस्किट 100% शाकाहारी है?",
        answer: "Yes, it contains only plant-based wheat flour, dairy milk solids, butter, cocoa, and mushroom extract. It is 100% vegetarian certified.",
        answerHi: "हाँ, इसमें केवल गेहूं, दूध, मक्खन, कोको और मशरूम अर्क शामिल है। यह 100% शाकाहारी है।"
      },
      {
        question: "What is the shelf life of Milk Chocolate Biscuits?",
        questionHi: "मिल्क चॉकलेट बिस्किट की शेल्फ लाइफ क्या है?",
        answer: "The sealed pack has a shelf life of 6 months from the date of packaging when stored in a cool, dry place.",
        answerHi: "ठंडी और सूखी जगह पर रखने पर सीलबंद पैकेट की शेल्फ लाइफ पैकिंग तिथि से 6 महीने है।"
      },
      {
        question: "Can I feed this to small children?",
        questionHi: "क्या इसे छोटे बच्चों को दिया जा सकता है?",
        answer: "Yes, it is free from artificial preservatives and chemicals, making it a wholesome snack for growing kids.",
        answerHi: "हाँ, यह कृत्रिम संरक्षकों और रसायनों से मुक्त है, जिससे यह बच्चों के लिए सुरक्षित और पौष्टिक है।"
      },
      {
        question: "How fast is delivery across India?",
        questionHi: "पूरे भारत में डिलीवरी कितनी जल्दी होती है?",
        answer: "Orders are dispatched within 24-48 business hours and typically delivered within 3-5 days depending on your pincode.",
        answerHi: "ऑर्डर 24-48 घंटों में भेजे जाते हैं और पिनकोड के आधार पर 3-5 कार्य दिवसों में डिलीवर होते हैं।"
      },
      {
        question: "What is the return policy for transit damages?",
        questionHi: "ट्रांजिट में खराबी होने पर क्या पॉलिसी है?",
        answer: "If your parcel arrives crushed or unsealed, notify our WhatsApp support (+91 73729 26623) within 24 hours for a prompt replacement or refund.",
        answerHi: "यदि पार्सल क्षतिग्रस्त मिलता है, तो 24 घंटे के भीतर व्हाट्सएप (+91 73729 26623) पर संपर्क करने पर तत्काल समाधान मिलेगा।"
      }
    ],
    storage: {
      shelfLife: "6 Months from manufacturing date",
      shelfLifeHi: "उत्पादन तिथि से 6 महीने",
      bestBefore: "Best before 6 months from packaging",
      bestBeforeHi: "पैकिंग से 6 महीने तक सर्वोत्तम",
      guidelines: [
        "Store in a cool, dry place away from heat sources.",
        "Reseal pouch or transfer to an airtight container after opening.",
        "Protect from high humidity."
      ],
      guidelinesHi: [
        "गर्मी से दूर ठंडी व सूखी जगह पर रखें।",
        "खोलने के बाद एयरटाइट डिब्बे में रखें।",
        "अत्यधिक नमी से बचाएं।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 3. Khakhra – Methi 250gm
  "shop-3": {
    productId: "shop-3",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 1 large crisp)",
      servingSizeHi: "25g (लगभग 1 बड़ा खाखरा)",
      servingsPerPack: "10",
      energy: { per100g: "410 kcal", perServing: "102.5 kcal" },
      protein: { per100g: "11.2 g", perServing: "2.8 g" },
      carbohydrates: { per100g: "72.0 g", perServing: "18.0 g" },
      totalSugars: { per100g: "2.1 g", perServing: "0.52 g" },
      addedSugars: { per100g: "0.0 g", perServing: "0.0 g" },
      totalFat: { per100g: "8.5 g", perServing: "2.12 g" },
      saturatedFat: { per100g: "1.8 g", perServing: "0.45 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "9.8 g", perServing: "2.45 g" },
      sodium: { per100g: "480 mg", perServing: "120 mg" },
      otherNutrients: [
        { name: "Iron (from Green Methi)", nameHi: "आयरन (मेथी से)", per100g: "3.6 mg", perServing: "0.9 mg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "100% Stone-ground Whole Wheat Flour (Atta)",
        "Sun-dried Fenugreek Leaves (Methi)",
        "Cold-pressed Edible Vegetable Oil",
        "Ajwain (Carom Seeds)",
        "Turmeric Powder (Haldi)",
        "Red Chilli Powder",
        "Iodized Salt"
      ],
      ingredientsListHi: [
        "चक्की का शुद्ध साबुत गेहूं का आटा",
        "धूप में सुखाई गई हरी मेथी की पत्तियां",
        "कोल्ड-प्रेस्ड खाद्य तेल",
        "अजवाइन",
        "हल्दी पाउडर",
        "लाल मिर्च पाउडर",
        "आयोडीनयुक्त नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten). 100% Nut-Free, Dairy-Free, and Vegan.",
      allergenInfoHi: "गेहूं (ग्लूटेन) शामिल है। 100% नट-फ्री, डेयरी-फ्री और वीगन।",
      foodClassification: "Vegan",
      fssaiInfo: "FSSAI Certified Healthy Traditional Snack",
      fssaiInfoHi: "FSSAI प्रमाणित पौष्टिक पारंपरिक स्नैक",
      manufacturerDetails: "JAS Agro Traditional Roasters, Bihar",
      manufacturerDetailsHi: "JAS Agro ट्रेडिशनल रोस्टर्स, बिहार"
    },
    foodSpecs: {
      productName: "Khakhra – Methi 250gm",
      productNameHi: "खाकरा – मेथी 250g",
      category: "Snacks & Khakhra",
      categoryHi: "स्नैक्स एवं खाखरा",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Vacuum-Sealed Freshness Pack",
      packSizeHi: "250g वैक्यूम-सील्ड फ्रेशनेस पैक",
      tasteOrVariant: "Savory Roasted Whole Wheat & Spiced Fenugreek (Methi)",
      tasteOrVariantHi: "कुरकुरा रोस्टेड गेहूं और स्वादिष्ट मेथी-अजवाइन",
      ingredientsSummary: "Whole Wheat, Fresh Fenugreek, Ajwain, Turmeric, Cold Pressed Oil, Salt",
      ingredientsSummaryHi: "गेहूं का आटा, मेथी, अजवाइन, हल्दी, खाद्य तेल, नमक",
      shelfLife: "4 Months from manufacturing",
      shelfLifeHi: "उत्पादन से 4 महीने",
      storage: "Keep in a dry, cool place in an airtight container",
      storageHi: "सूखी और ठंडी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat (Gluten)",
      allergenInfoHi: "गेहूं (ग्लूटेन) शामिल है",
      vegetarianClassification: "100% Vegan & 100% Vegetarian",
      vegetarianClassificationHi: "100% वीगन एवं शाकाहारी",
      manufacturerBrand: "JAS Agro Natural Snacks",
      manufacturerBrandHi: "JAS Agro नेचुरल स्नैक्स",
      fssaiNumber: "FSSAI Approved Quality",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "How to Enjoy Methi Khakhra",
      guideTitleHi: "मेथी खाखरा का आनंद कैसे लें",
      subtitle: "100% roasted traditional crisp, ready to eat anytime.",
      subtitleHi: "100% रोस्टेड पारंपरिक स्नैक, कभी भी खाने के लिए तैयार।",
      steps: [
        {
          stepNumber: 1,
          title: "Ready-to-Eat Crispy Munch",
          titleHi: "सीधे पैकेट से खाएं",
          description: "Open the vacuum pack and enjoy straight away without needing any oil, cooking, or heating.",
          descriptionHi: "वैक्यूम पैक खोलें और बिना किसी पकाने या गर्म करने की झंझट के सीधे कुरकुरे खाखरे का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Top with Ghee, Chutney, or Pickle",
          titleHi: "घी, चटनी या अचार के साथ",
          description: "Spread a touch of cow ghee, mint chutney, mango pickle, or mild curd over the crisp surface for authentic Gujarati flavor.",
          descriptionHi: "खाखरे पर हल्का देसी घी, पुदीने की चटनी, आम का अचार या दही लगाकर पारंपरिक स्वाद का आनंद लें।"
        },
        {
          stepNumber: 3,
          title: "Low-Calorie Morning & Evening Snack",
          titleHi: "लो-कैलोरी नाश्ता",
          description: "Pair with morning masala tea or afternoon herbal green tea for a high-fiber, low-calorie diet meal.",
          descriptionHi: "सुबह की मसाला चाय या ग्रीन टी के साथ एक स्वस्थ, उच्च फाइबर वाला नाश्ता।"
        },
        {
          stepNumber: 4,
          title: "Store in an Airtight Tin",
          titleHi: "एयरटाइट टिन में सुरक्षित रखें",
          description: "Transfer unused discs to a clean, dry steel tin or airtight container immediately to maintain crunch.",
          descriptionHi: "बचे हुए खाखरे को कुरकुरा रखने के लिए तुरंत सूखे स्टील के डिब्बे या एयरटाइट कंटेनर में रखें।"
        }
      ],
      precautionsOrTips: [
        "Do not leave in direct contact with humid air.",
        "Store in a completely moisture-free container."
      ],
      precautionsOrTipsHi: [
        "नमी वाली खुली हवा में न छोड़ें।",
        "पूरी तरह सूखे डिब्बे में ही रखें।"
      ]
    },
    faqs: [
      {
        question: "Is this Methi Khakhra fried or roasted?",
        questionHi: "क्या यह मेथी खाखरा तला हुआ है या रोस्टेड?",
        answer: "JAS Agro Methi Khakhra is 100% slow-roasted on hot iron griddles using minimal healthy oil. It is never deep-fried, making it exceptionally light and healthy.",
        answerHi: "JAS Agro मेथी खाखरा 100% तवे पर धीमी आंच पर रोस्ट किया जाता है। इसे कभी भी तला नहीं जाता, इसलिए यह बहुत हल्का और पौष्टिक होता है।"
      },
      {
        question: "Is this suitable for weight management and diabetic diets?",
        questionHi: "क्या यह वजन नियंत्रण और डायबिटिक डाइट के लिए उपयुक्त है?",
        answer: "Yes, made with 100% whole wheat, fenugreek (methi), zero added sugar, and high dietary fibre (9.8g/100g), it is ideal for fitness-conscious snacking.",
        answerHi: "हाँ, साबुत गेहूं, मेथी और शून्य अतिरिक्त शर्करा तथा उच्च फाइबर होने के कारण यह डाइट के लिए उत्तम है।"
      },
      {
        question: "How is the crispness protected during transit?",
        questionHi: "रास्ते में इसका कुरकुरापन कैसे सुरक्षित रहता है?",
        answer: "We use heavy-duty vacuum-sealed barrier packaging that locks out all moisture and air until opened by you.",
        answerHi: "हम हेवी-ड्यूटी वैक्यूम-सील्ड पैकेजिंग का उपयोग करते हैं जो हवा और नमी को पूरी तरह रोककर ताजगी बनाए रखती है।"
      },
      {
        question: "What is the shelf life of this 250g pack?",
        questionHi: "250g पैक की शेल्फ लाइफ कितनी है?",
        answer: "The shelf life is 4 months from the manufacturing date when kept in its original sealed pack.",
        answerHi: "सील पैक में रखने पर उत्पादन तिथि से इसकी शेल्फ लाइफ 4 महीने है।"
      },
      {
        question: "Are there any artificial colors or flavor enhancers?",
        questionHi: "क्या इसमें कोई कृत्रिम रंग या रसायन हैं?",
        answer: "No, the golden hue comes from natural turmeric and the aroma is from pure dried fenugreek leaves and ajwain.",
        answerHi: "नहीं, इसका रंग प्राकृतिक हल्दी से और सुगंध असली मेथी व अजवाइन से आती है।"
      },
      {
        question: "What is the delivery timeline?",
        questionHi: "डिलीवरी में कितना समय लगता है?",
        answer: "Orders are dispatched within 24-48 business hours via express couriers across India.",
        answerHi: "ऑर्डर 24 से 48 घंटों के भीतर एक्सप्रेस कूरियर द्वारा प्रेषित किए जाते हैं।"
      }
    ],
    storage: {
      shelfLife: "4 Months from manufacturing",
      shelfLifeHi: "उत्पादन से 4 महीने",
      bestBefore: "Best before 120 days from packing",
      bestBeforeHi: "पैकिंग से 120 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in a cool and dry location.",
        "Transfer to an airtight container once vacuum seal is broken.",
        "Keep away from steam or damp kitchen areas."
      ],
      guidelinesHi: [
        "ठंडी और सूखी जगह पर रखें।",
        "वैक्यूम सील खोलने के बाद एयरटाइट कंटेनर में रखें।",
        "रसोई की भाप या नमी से दूर रखें।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 4. Khakhra – Oyster Mushroom 250gm
  "shop-4": {
    productId: "shop-4",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 1 disc)",
      servingSizeHi: "25g (लगभग 1 डिस्क)",
      servingsPerPack: "10",
      energy: { per100g: "418 kcal", perServing: "104.5 kcal" },
      protein: { per100g: "13.8 g", perServing: "3.45 g" },
      carbohydrates: { per100g: "69.5 g", perServing: "17.38 g" },
      totalSugars: { per100g: "1.8 g", perServing: "0.45 g" },
      addedSugars: { per100g: "0.0 g", perServing: "0.0 g" },
      totalFat: { per100g: "9.2 g", perServing: "2.3 g" },
      saturatedFat: { per100g: "1.9 g", perServing: "0.48 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "10.5 g", perServing: "2.62 g" },
      sodium: { per100g: "460 mg", perServing: "115 mg" },
      otherNutrients: [
        { name: "Vitamin D2 (from Oyster Mushroom)", nameHi: "विटामिन D2", per100g: "5.2 mcg", perServing: "1.3 mcg" },
        { name: "Beta-Glucans", nameHi: "बीटा-ग्लूकन", per100g: "410 mg", perServing: "102.5 mg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Stone-ground Whole Wheat Flour",
        "100% Organic Dehydrated Oyster Mushroom Powder (Pleurotus ostreatus)",
        "Cold-pressed Edible Vegetable Oil",
        "Ajwain (Carom Seeds)",
        "Cumin Seeds (Jeera)",
        "Turmeric Powder",
        "Red Chilli Powder",
        "Iodized Salt"
      ],
      ingredientsListHi: [
        "चक्की का साबुत गेहूं का आटा",
        "100% शुद्ध डिहाइड्रेटेड ऑयस्टर मशरूम पाउडर",
        "खाद्य वनस्पति तेल",
        "अजवाइन",
        "जीरा",
        "हल्दी पाउडर",
        "लाल मिर्च पाउडर",
        "नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten) and Mushroom protein. 100% Vegetarian and Dairy-Free.",
      allergenInfoHi: "गेहूं (ग्लूटेन) और मशरूम प्रोटीन शामिल है। 100% शाकाहारी और डेयरी-मुक्त।",
      foodClassification: "Vegan",
      fssaiInfo: "FSSAI Registered Innovative Superfood Snack",
      fssaiInfoHi: "FSSAI पंजीकृत सुपरफूड स्नैक",
      manufacturerDetails: "JAS Agro Farms & Processing Facility, Bihar",
      manufacturerDetailsHi: "JAS Agro फार्म्स एवं प्रोसेसिंग यूनिट, बिहार"
    },
    foodSpecs: {
      productName: "Khakhra – Oyster Mushroom 250gm",
      productNameHi: "खाकरा – ऑयस्टर मशरूम 250g",
      category: "Snacks & Khakhra",
      categoryHi: "स्नैक्स एवं खाखरा",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Vacuum-Sealed Protective Pack",
      packSizeHi: "250g वैक्यूम-सील्ड सुरक्षात्मक पैक",
      tasteOrVariant: "Savory Roasted Wheat with Gourmet Mushroom Umami Spices",
      tasteOrVariantHi: "कुरकुरा रोस्टेड गेहूं और पौष्टिक मशरूम उमामी स्वाद",
      ingredientsSummary: "Whole Wheat, Oyster Mushroom Powder, Ajwain, Cumin, Turmeric, Oil, Salt",
      ingredientsSummaryHi: "गेहूं का आटा, ऑयस्टर मशरूम पाउडर, अजवाइन, जीरा, हल्दी, तेल, नमक",
      shelfLife: "4 Months from packaging",
      shelfLifeHi: "पैकिंग से 4 महीने",
      storage: "Store in a dry, cool cabinet in an airtight container",
      storageHi: "सूखी और ठंडी अलमारी में एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat and Mushroom protein",
      allergenInfoHi: "गेहूं और मशरूम प्रोटीन शामिल है",
      vegetarianClassification: "100% Vegan / 100% Vegetarian",
      vegetarianClassificationHi: "100% वीगन / 100% शाकाहारी",
      manufacturerBrand: "JAS Agro Superfoods",
      manufacturerBrandHi: "JAS Agro सुपरफूड्स",
      fssaiNumber: "FSSAI Standards Certified",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "How to Serve Oyster Mushroom Khakhra",
      guideTitleHi: "ऑयस्टर मशरूम खाखरा खाने का तरीका",
      subtitle: "High-protein roasted superfood snack with authentic Indian crunch.",
      subtitleHi: "उच्च प्रोटीन युक्त रोस्टेड सुपरफूड स्नैक।",
      steps: [
        {
          stepNumber: 1,
          title: "Protein-Rich Ready Snack",
          titleHi: "हाई-प्रोटीन स्नैक",
          description: "Enjoy right out of the pack as a wholesome, 13.8% protein-packed roasted snack.",
          descriptionHi: "पैकेट से सीधे एक पौष्टिक, 13.8% प्रोटीन युक्त रोस्टेड स्नैक के रूप में खाएं।"
        },
        {
          stepNumber: 2,
          title: "Make Healthy Khakhra Chaat",
          titleHi: "हेल्दी खाखरा चाट बनाएं",
          description: "Break into bite-sized pieces, top with chopped onions, tomatoes, coriander, green chillies, lemon juice, and chaat masala.",
          descriptionHi: "टुकड़े करके ऊपर से कटा प्याज, टमाटर, धनिया, हरी मिर्च, नींबू और चाट मसाला डालकर स्वादिष्ट चाट बनाएं।"
        },
        {
          stepNumber: 3,
          title: "Pre/Post Workout Clean Fuel",
          titleHi: "वर्कआउट के पहले या बाद का आहार",
          description: "Eat 1-2 discs before or after exercise for clean plant protein, dietary fiber, and natural Vitamin D.",
          descriptionHi: "व्यायाम के पहले या बाद में प्राकृतिक प्रोटीन और विटामिन D के लिए 1-2 खाखरे खाएं।"
        },
        {
          stepNumber: 4,
          title: "Airtight Storage Precautions",
          titleHi: "भंडारण में सावधानी",
          description: "Store in a dry airtight jar immediately after opening to keep the discs crisp and delicious.",
          descriptionHi: "खोलने के बाद कुरकुरापन बनाए रखने के लिए तुरंत एयरटाइट जार में रखें।"
        }
      ],
      precautionsOrTips: [
        "Avoid keeping exposed in humid weather.",
        "Store away from water or steam."
      ],
      precautionsOrTipsHi: [
        "बरसाती मौसम में खुला न छोड़ें।",
        "पानी या भाप से दूर रखें।"
      ]
    },
    faqs: [
      {
        question: "How is Oyster Mushroom infused into this Khakhra?",
        questionHi: "इस खाखरे में ऑयस्टर मशरूम कैसे मिलाया जाता है?",
        answer: "We dehydrate farm-fresh organic oyster mushrooms and finely mill them into a protein-dense powder, which is kneaded directly into the stoneground whole wheat dough before slow roasting.",
        answerHi: "हम जैविक ऑयस्टर मशरूम को सुखाकर बारीक पाउडर बनाते हैं और रोस्टिंग से पहले इसे सीधे गेहूं के आटे में गूंथते हैं।"
      },
      {
        question: "What are the key health benefits of Mushroom Khakhra?",
        questionHi: "मशरूम खाखरे के मुख्य स्वास्थ्य लाभ क्या हैं?",
        answer: "It provides enhanced plant protein (13.8g/100g), natural Vitamin D2, beta-glucans for immunity support, and over 10g of gut-healthy dietary fibre per 100g.",
        answerHi: "यह उच्च पाचक प्रोटीन (13.8g), प्राकृतिक विटामिन D2, रोग प्रतिरोधक क्षमता के लिए बीटा-ग्लूकन और 10g से अधिक फाइबर प्रदान करता है।"
      },
      {
        question: "Is this Khakhra fried in oil?",
        questionHi: "क्या यह खाखरा तेल में तला हुआ है?",
        answer: "No, it is 100% roasted on traditional griddles without deep-frying, keeping calories low and crispness natural.",
        answerHi: "नहीं, यह बिना तले 100% पारंपरिक तवे पर रोस्ट किया गया है, जिससे कैलोरी कम और कुरकुरापन प्राकृतिक रहता है।"
      },
      {
        question: "Is it suitable for vegans and gluten-sensitive diets?",
        questionHi: "क्या यह वीगन लोगों के लिए उपयुक्त है?",
        answer: "It is 100% Vegan and dairy-free. However, because it is made from whole wheat, it contains natural wheat gluten.",
        answerHi: "यह 100% वीगन और डेयरी-मुक्त है। चूँकि यह गेहूं से बना है, इसलिए इसमें प्राकृतिक ग्लूटेन होता है।"
      },
      {
        question: "How many khakhras are in a 250g pack?",
        questionHi: "250g पैकेट में कितने खाखरे होते हैं?",
        answer: "A 250g vacuum pack typically contains 10 to 12 full-sized crispy roasted discs.",
        answerHi: "250 ग्राम वैक्यूम पैक में आमतौर पर 10 से 12 बड़े आकार के कुरकुरे खाखरे होते हैं।"
      },
      {
        question: "What is your replacement policy for broken items?",
        questionHi: "टूटे हुए सामान के लिए क्या पॉलिसी है?",
        answer: "We vacuum-pack and bubble-wrap all khakhra boxes. In case of transit damage, share an unboxing photo on WhatsApp (+91 73729 26623) within 24 hours for a prompt free replacement.",
        answerHi: "हम सुरक्षित वैक्यूम और बबल-रैप पैकिंग करते हैं। यदि रास्ते में कोई क्षति होती है, तो 24 घंटे में व्हाट्सएप पर फोटो साझा करके तुरंत रिप्लेसमेंट पाएं।"
      }
    ],
    storage: {
      shelfLife: "4 Months from packaging",
      shelfLifeHi: "पैकिंग से 4 महीने",
      bestBefore: "Best before 120 days from manufacturing",
      bestBeforeHi: "उत्पादन से 120 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in a cool, dry place away from moisture.",
        "Keep sealed in an airtight container once opened.",
        "Do not refrigerate."
      ],
      guidelinesHi: [
        "नमी से दूर ठंडी व सूखी जगह पर रखें।",
        "खोलने के बाद एयरटाइट डिब्बे में बंद रखें।",
        "फ्रिज में न रखें।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 5. Chakri 200gm
  "shop-5": {
    productId: "shop-5",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 3 pieces)",
      servingSizeHi: "25g (लगभग 3 पीस)",
      servingsPerPack: "8",
      energy: { per100g: "485 kcal", perServing: "121.25 kcal" },
      protein: { per100g: "8.8 g", perServing: "2.2 g" },
      carbohydrates: { per100g: "62.0 g", perServing: "15.5 g" },
      totalSugars: { per100g: "1.2 g", perServing: "0.3 g" },
      addedSugars: { per100g: "0.0 g", perServing: "0.0 g" },
      totalFat: { per100g: "22.5 g", perServing: "5.62 g" },
      saturatedFat: { per100g: "5.5 g", perServing: "1.38 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "4.8 g", perServing: "1.2 g" },
      sodium: { per100g: "520 mg", perServing: "130 mg" },
      otherNutrients: [
        { name: "Calcium (from Sesame Seeds)", nameHi: "कैल्शियम (सफेद तिल से)", per100g: "140 mg", perServing: "35 mg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Rice Flour",
        "Roasted Bengal Gram Flour (Besan)",
        "Whole Wheat Flour",
        "White Sesame Seeds (Til)",
        "Ajwain (Carom Seeds)",
        "Cumin Seeds (Jeera)",
        "Hing (Asafoetida)",
        "Red Chilli Powder",
        "Cold-pressed Edible Vegetable Oil",
        "Iodized Salt"
      ],
      ingredientsListHi: [
        "चावल का आटा",
        "भुने चने का बेसन",
        "गेहूं का आटा",
        "सफेद तिल",
        "अजवाइन",
        "जीरा",
        "हींग",
        "लाल मिर्च पाउडर",
        "खाद्य वनस्पति तेल",
        "नमक"
      ],
      allergenInfo: "Contains Sesame Seeds and Wheat (Gluten).",
      allergenInfoHi: "तिल और गेहूं (ग्लूटेन) शामिल है।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Certified Traditional Crispy Savory",
      fssaiInfoHi: "FSSAI प्रमाणित पारंपरिक नमकीन",
      manufacturerDetails: "JAS Agro Snacks Division, Bihar",
      manufacturerDetailsHi: "JAS Agro स्नैक्स डिवीजन, बिहार"
    },
    foodSpecs: {
      productName: "Chakri 200gm (Traditional Spiral Snack)",
      productNameHi: "चकली / चक्री 200g",
      category: "Snacks & Khakhra",
      categoryHi: "स्नैक्स एवं खाखरा",
      netQuantity: "200 Grams",
      netQuantityHi: "200 ग्राम",
      packSize: "200g Moisture-Barrier Pillow Pouch",
      packSizeHi: "200g नमी-रोधी पिलो पाउच",
      tasteOrVariant: "Crispy Savory with Toasted Sesame & Ajwain Zing",
      tasteOrVariantHi: "कुरकुरी नमकीन, भुने तिल और अजवाइन का स्वाद",
      ingredientsSummary: "Rice Flour, Gram Flour, Wheat, Sesame Seeds, Ajwain, Spices, Vegetable Oil, Salt",
      ingredientsSummaryHi: "चावल का आटा, बेसन, गेहूं, तिल, अजवाइन, मसाले, तेल, नमक",
      shelfLife: "4 Months from packaging",
      shelfLifeHi: "पैकिंग से 4 महीने",
      storage: "Store in a cool, dry place in an airtight container",
      storageHi: "ठंडी और सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Sesame and Wheat",
      allergenInfoHi: "तिल और गेहूं शामिल है",
      vegetarianClassification: "100% Vegetarian",
      vegetarianClassificationHi: "100% शाकाहारी",
      manufacturerBrand: "JAS Agro Natural Snacks",
      manufacturerBrandHi: "JAS Agro नेचुरल स्नैक्स",
      fssaiNumber: "FSSAI Quality Standards",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Serving & Storage Tips for Chakri",
      guideTitleHi: "चकली परोसने और रखने के सुझाव",
      subtitle: "Authentic multi-grain spiral crunch for tea time and celebrations.",
      subtitleHi: "चाय और त्योहारों के लिए पारंपरिक मल्टी-ग्रेन क्रंची चकली।",
      steps: [
        {
          stepNumber: 1,
          title: "Classic Tea-Time Crunch",
          titleHi: "चाय के साथ कुरकुरा नाश्ता",
          description: "Serve 3-4 spiral chakris with hot masala chai, ginger tea, or filter coffee.",
          descriptionHi: "गर्म मसाला चाय, अदरक चाय या कॉफी के साथ 3-4 स्पाइरल चकली परोसें।"
        },
        {
          stepNumber: 2,
          title: "Festive & Party Platter",
          titleHi: "त्योहार और मेहमानों के लिए",
          description: "An essential celebratory snack for Diwali, Holi, and festive family gatherings.",
          descriptionHi: "दिवाली, होली और पारिवारिक उत्सवों में मेहमानों को परोसने के लिए उत्तम पारंपरिक नमकीन।"
        },
        {
          stepNumber: 3,
          title: "Pair with Chutneys & Dips",
          titleHi: "चटनी और डिप्स के साथ",
          description: "Delicious when paired with mint-coriander chutney, garlic curd dip, or sweet tamarind sauce.",
          descriptionHi: "पुदीना चटनी, लहसुन-दही डिप या इमली की मीठी चटनी के साथ लाजवाब स्वाद।"
        },
        {
          stepNumber: 4,
          title: "Keep Airtight",
          titleHi: "एयरटाइट डिब्बे में बंद रखें",
          description: "Transfer to a sealed airtight tin immediately to preserve signature spiral crispness.",
          descriptionHi: "खोलने के तुरंत बाद एयरटाइट टिन में रखें ताकि इसका कुरकुरापन बना रहे।"
        }
      ],
      precautionsOrTips: [
        "Handle gently to prevent spiral breakage.",
        "Store away from damp surroundings."
      ],
      precautionsOrTipsHi: [
        "टूटने से बचाने के लिए सावधानी से निकालें।",
        "नमी से दूर रखें।"
      ]
    },
    faqs: [
      {
        question: "What ingredients make JAS Agro Chakri light and crispy?",
        questionHi: "JAS Agro चकली को हल्का और कुरकुरा क्या बनाता है?",
        answer: "We use a balanced blend of stone-ground rice flour, roasted gram flour (besan), and toasted sesame seeds, seasoned with carom seeds and cold-pressed oil.",
        answerHi: "हम चावल के आटे, भुने बेसन और सफेद तिल का संतुलित मिश्रण करते हैं, जो इसे अत्यंत कुरकुरा और स्वादिष्ट बनाता है।"
      },
      {
        question: "Does it contain palm oil or harmful additives?",
        questionHi: "क्या इसमें पाम ऑयल या हानिकारक तत्व हैं?",
        answer: "No, we use quality refined vegetable oils and natural whole spices with zero chemical preservatives or synthetic colors.",
        answerHi: "नहीं, हम गुणवत्तापूर्ण तेल और प्राकृतिक मसालों का उपयोग करते हैं और कोई हानिकारक रसायन नहीं मिलाते।"
      },
      {
        question: "Is this Chakri very spicy?",
        questionHi: "क्या यह चकली बहुत तीखी है?",
        answer: "It has a mild, balanced savory flavor with the warm aroma of ajwain and sesame, making it enjoyable for all ages.",
        answerHi: "इसका स्वाद हल्का और संतुलित नमकीन है, जिसमें अजवाइन और तिल का स्वाद प्रमुख है। यह सभी उम्र के लोगों के लिए उपयुक्त है।"
      },
      {
        question: "How long does it stay fresh after opening?",
        questionHi: "खोलने के बाद यह कितने दिन तक ताजा रहती है?",
        answer: "When stored in an airtight container at room temperature, it retains its crunch for 3 to 4 weeks.",
        answerHi: "एयरटाइट डिब्बे में रखने पर यह 3 से 4 हफ्तों तक पूरी तरह कुरकुरी रहती है।"
      },
      {
        question: "What is the net pack weight?",
        questionHi: "पैकेट का वजन कितना है?",
        answer: "Each pouch contains 200 grams of fresh spiral chakris.",
        answerHi: "प्रत्येक पैकेट में 200 ग्राम ताजी चकली होती है।"
      },
      {
        question: "How is it packed to prevent breakage?",
        questionHi: "टूटने से बचाने के लिए इसे कैसे पैक किया जाता है?",
        answer: "We pack each pouch inside a protective cushioned corrugated outer carton to minimize breakage during transit.",
        answerHi: "हम कूरियर के दौरान चकली को टूटने से बचाने के लिए कुशन वाले मजबूत डिब्बों में पैक करते हैं।"
      }
    ],
    storage: {
      shelfLife: "4 Months from packaging",
      shelfLifeHi: "पैकिंग से 4 महीने",
      bestBefore: "Best before 120 days from packing",
      bestBeforeHi: "पैकिंग से 120 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in an airtight container in a dry pantry.",
        "Keep away from sunlight and moisture.",
        "Consume within 3 weeks of opening for best crunch."
      ],
      guidelinesHi: [
        "सूखी अलमारी में एयरटाइट डिब्बे में रखें।",
        "धूप और नमी से दूर रखें।",
        "बेहतर स्वाद के लिए खोलने के 3 हफ्तों के भीतर खाएं।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 6. Oyster Mushroom Powder – Raw (1kg)
  "shop-6": {
    productId: "shop-6",
    productType: "food",
    nutrition: {
      servingSize: "10g (approx 1 tablespoon)",
      servingSizeHi: "10g (लगभग 1 बड़ा चम्मच)",
      servingsPerPack: "100",
      energy: { per100g: "348 kcal", perServing: "34.8 kcal" },
      protein: { per100g: "29.4 g", perServing: "2.94 g" },
      carbohydrates: { per100g: "51.2 g", perServing: "5.12 g" },
      totalSugars: { per100g: "4.8 g", perServing: "0.48 g" },
      addedSugars: { per100g: "0.0 g", perServing: "0.0 g" },
      totalFat: { per100g: "2.2 g", perServing: "0.22 g" },
      saturatedFat: { per100g: "0.4 g", perServing: "0.04 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "23.6 g", perServing: "2.36 g" },
      sodium: { per100g: "38 mg", perServing: "3.8 mg" },
      otherNutrients: [
        { name: "Vitamin D2 (Natural Calciferol)", nameHi: "विटामिन D2", per100g: "38.5 mcg", perServing: "3.85 mcg" },
        { name: "Beta-Glucans (Immunity Bio-Polymer)", nameHi: "बीटा-ग्लूकन", per100g: "3,800 mg", perServing: "380 mg" },
        { name: "Potassium", nameHi: "पोटैशियम", per100g: "1,420 mg", perServing: "142 mg" },
        { name: "Iron", nameHi: "आयरन", per100g: "8.4 mg", perServing: "0.84 mg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "100% Pure Mature Dehydrated Oyster Mushroom (Pleurotus ostreatus / florida)",
        "Zero Additives • Zero Starch • Zero Maltodextrin • Zero Preservatives"
      ],
      ingredientsListHi: [
        "100% शुद्ध धूप में सुखाया गया ऑयस्टर मशरूम (Pleurotus ostreatus)",
        "शून्य मिलावट • कोई स्टार्च नहीं • कोई संरक्षक नहीं"
      ],
      allergenInfo: "Pure Single-Origin Fungi Superfood. Gluten-Free, Dairy-Free, Nut-Free, Soy-Free, Non-GMO.",
      allergenInfoHi: "शुद्ध प्राकृतिक मशरूम उत्पाद। ग्लूटेन-फ्री, डेयरी-फ्री, नट-फ्री, सोया-फ्री।",
      foodClassification: "Vegan",
      fssaiInfo: "FSSAI Registered Organic Farm Processing Unit",
      fssaiInfoHi: "FSSAI पंजीकृत ऑर्गेनिक फार्म प्रोसेसिंग",
      manufacturerDetails: "JAS Agro Organic Smart Telemetry Mushroom Unit, Bihar",
      manufacturerDetailsHi: "JAS Agro ऑर्गेनिक स्मार्ट टेलीमेट्री मशरूम यूनिट, बिहार"
    },
    foodSpecs: {
      productName: "100% Pure Raw Oyster Mushroom Powder 1kg",
      productNameHi: "ऑयस्टर मशरूम पाउडर – Raw (1kg)",
      category: "Oyster Mushrooms Superfood",
      categoryHi: "ऑयस्टर मशरूम सुपरफूड",
      netQuantity: "1 Kilogram (1000 Grams)",
      netQuantityHi: "1 किलोग्राम (1000 ग्राम)",
      packSize: "1kg Heavy-Duty Resealable Zipper Pouch",
      packSizeHi: "1kg रीसीलेबल जिपर पाउच",
      tasteOrVariant: "Mild Earthy Natural Mushroom Flavor (Neutral in cooking)",
      tasteOrVariantHi: "हल्का प्राकृतिक मशरूम स्वाद (पकाने में न्यूट्रल)",
      ingredientsSummary: "100% Pure Sun-Dried Oyster Mushroom Fruiting Bodies",
      ingredientsSummaryHi: "100% शुद्ध सुखाए गए ऑयस्टर मशरूम",
      shelfLife: "12 Months from packaging date",
      shelfLifeHi: "पैकिंग से 12 महीने",
      storage: "Store in a cool, dry place in an airtight container away from moisture and steam",
      storageHi: "नमी और भाप से दूर ठंडी, सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Pure Mushroom Produce (Gluten-Free & Allergen-Free)",
      allergenInfoHi: "शुद्ध मशरूम उत्पाद (ग्लूटेन-फ्री व एलर्जी-मुक्त)",
      vegetarianClassification: "100% Vegan & 100% Vegetarian",
      vegetarianClassificationHi: "100% वीगन एवं 100% शाकाहारी",
      manufacturerBrand: "JAS Agro Organics",
      manufacturerBrandHi: "JAS Agro ऑर्गेनिक्स",
      fssaiNumber: "Certified Organic Agriculture Standard",
      countryOfOrigin: "India (JAS Agro Farms)",
      countryOfOriginHi: "भारत (JAS Agro फार्म्स)"
    },
    howToUse: {
      guideTitle: "Step-by-Step Daily Superfood Usage Guide",
      guideTitleHi: "दैनिक उपयोग एवं सेवन की संपूर्ण विधि",
      subtitle: "Effortlessly enrich everyday home meals with 29.4% plant protein and natural Vitamin D2.",
      subtitleHi: "दैनिक भोजन में 29.4% प्राकृतिक प्रोटीन और विटामिन D2 शामिल करने की आसान विधि।",
      steps: [
        {
          stepNumber: 1,
          title: "Daily Dough & Roti Fortification",
          titleHi: "रोटी व पराठे के आटे में मिलाएं",
          description: "Mix 1-2 tablespoons (15-20g) of mushroom powder per 1kg of wheat, multigrain, or millet flour while kneading dough for nutrient-dense rotis without altering taste.",
          descriptionHi: "रोटी का आटा गूंथते समय 1 किलो आटे में 1-2 बड़े चम्मच (15-20g) मशरूम पाउडर मिलाएं। इससे बिना स्वाद बदले रोटियां प्रोटीन व विटामिन D से भरपूर बनती हैं।"
        },
        {
          stepNumber: 2,
          title: "Soups, Dals, and Curry Gravies",
          titleHi: "दाल, सूप और सब्जी की ग्रेवी में",
          description: "Whisk 1 teaspoon (5g) into boiling dal tadka, vegetable soups, or curry gravies as a natural healthy thickener and gourmet umami booster.",
          descriptionHi: "उबलती दाल, सूप या सब्जी की ग्रेवी में 1 चम्मच पाउडर घोलकर डालें। यह ग्रेवी को गाढ़ा और पौष्टिक बनाता है।"
        },
        {
          stepNumber: 3,
          title: "Post-Workout Smoothies & Health Shakes",
          titleHi: "स्मूदी और प्रोटीन शेक में",
          description: "Blend 1 scoop (5-10g) with bananas, plant milk, or fruit smoothies for clean, easily digestible vegan protein and beta-glucan immunity.",
          descriptionHi: "वर्कआउट के बाद 1 चम्मच पाउडर केले, दूध या स्मूदी में मिलाकर पिएं। यह सुपाच्य वीगन प्रोटीन प्रदान करता है।"
        },
        {
          stepNumber: 4,
          title: "Moisture-Free Storage Precaution",
          titleHi: "नमी से बचाव एवं सही भंडारण",
          description: "Always use a completely dry spoon. Tightly zip-lock the bag or transfer to a sealed glass jar immediately after use to prevent clumping from atmospheric humidity.",
          descriptionHi: "हमेशा पूरी तरह सूखे चम्मच का उपयोग करें। उपयोग के बाद जिपलॉक बंद करें या कांच के जार में रखें ताकि नमी से गांठें न बनें।"
        }
      ],
      precautionsOrTips: [
        "Do not insert a wet or damp spoon into the pouch.",
        "Store in a dry pantry away from the cooking stove steam."
      ],
      precautionsOrTipsHi: [
        "पाउच में कभी भी गीला चम्मच न डालें।",
        "रसोई के चूल्हे की भाप से दूर सूखी जगह पर रखें।"
      ]
    },
    faqs: [
      {
        question: "Is this mushroom powder pure or does it contain additives/starch?",
        questionHi: "क्या यह मशरूम पाउडर शुद्ध है या इसमें कोई मिलावट है?",
        answer: "JAS Agro Raw Oyster Mushroom Powder contains 100% pure dehydrated oyster mushrooms (Pleurotus ostreatus). It has ZERO maltodextrin, ZERO starch, ZERO preservatives, and ZERO fillers.",
        answerHi: "JAS Agro ऑयस्टर मशरूम पाउडर 100% शुद्ध सुखाए गए मशरूम से बना है। इसमें कोई स्टार्च, माल्टोडेक्सट्रिन या कृत्रिम मिलावट नहीं है।"
      },
      {
        question: "What is the protein and Vitamin D content?",
        questionHi: "इसमें प्रोटीन और विटामिन D की मात्रा कितनी है?",
        answer: "It contains approximately 29.4% bio-available crude plant protein, 23.6% dietary fibre, and 38.5 mcg of natural Vitamin D2 per 100g, along with immunity-boosting beta-glucans.",
        answerHi: "इसमें प्रति 100 ग्राम 29.4% सुपाच्य प्राकृतिक प्रोटीन, 23.6% फाइबर, 38.5 माइक्रोग्राम प्राकृतिक विटामिन D2 और बीटा-ग्लूकन होता है।"
      },
      {
        question: "Does mixing it into roti dough change the taste or color of rotis?",
        questionHi: "क्या आटे में मिलाने से रोटी का स्वाद या रंग बदलता है?",
        answer: "When added at the recommended dosage of 15-20g per 1kg flour, rotis remain soft and delicious with virtually no change in flavor or appearance.",
        answerHi: "1 किलो आटे में 15-20 ग्राम मिलाने पर रोटियों के स्वाद या रंग में कोई खास बदलाव नहीं आता और वे बेहद मुलायम बनती हैं।"
      },
      {
        question: "Is this made from mature mushroom fruiting bodies or mycelium spawn?",
        questionHi: "क्या यह पूर्ण विकसित मशरूम से बना है या स्पॉन से?",
        answer: "It is milled exclusively from 100% mature, sun-dried oyster mushroom caps and stems, ensuring maximum mineral and beta-glucan concentration.",
        answerHi: "यह 100% पूर्ण विकसित और धूप में सुखाए गए ऑयस्टर मशरूम के फ्रूटिंग बॉडीज से तैयार किया गया है।"
      },
      {
        question: "How long does the 1kg pouch last?",
        questionHi: "1kg का पाउच कितने समय तक चलता है?",
        answer: "For an average family of 4 using 15-20g daily in dough and curries, a 1kg pouch lasts approximately 50 to 60 days.",
        answerHi: "4 सदस्यों वाले परिवार के लिए (15-20g दैनिक उपयोग पर) 1kg पाउच लगभग 50 से 60 दिनों तक चलता है।"
      },
      {
        question: "What is the shelf life and storage requirement?",
        questionHi: "इसकी शेल्फ लाइफ और भंडारण कैसे करें?",
        answer: "The shelf life is 12 months from manufacturing. Keep it in a dry airtight jar away from kitchen steam.",
        answerHi: "इसकी शेल्फ लाइफ 12 महीने है। इसे भाप और नमी से बचाकर एयरटाइट जार में रखें।"
      },
      {
        question: "How is it packaged for safe courier transit?",
        questionHi: "सुरक्षित डिलीवरी के लिए पैकेजिंग कैसे की जाती है?",
        answer: "It is sealed in a heavy-duty food-grade moisture-lock zipper pouch and shipped inside a corrugated shipping box to prevent puncture or moisture leakage.",
        answerHi: "इसे हेवी-ड्यूटी फूड-ग्रेड जिपर पाउच और मजबूत कार्टन में पैक करके भेजा जाता है।"
      }
    ],
    storage: {
      shelfLife: "12 Months from packaging date",
      shelfLifeHi: "पैकिंग तिथि से 12 महीने",
      bestBefore: "Best before 1 year when stored airtight",
      bestBeforeHi: "एयरटाइट रखने पर 1 वर्ष तक सर्वोत्तम",
      guidelines: [
        "Store in a clean, dry, and cool location.",
        "Always use a dry spoon; never introduce moisture into the pouch.",
        "Keep zipper tightly sealed after every use or transfer to a glass jar."
      ],
      guidelinesHi: [
        "साफ, सूखी और ठंडी जगह पर रखें।",
        "हमेशा सूखे चम्मच का इस्तेमाल करें; पाउच में पानी न जाने दें।",
        "उपयोग के बाद जिपर अच्छी तरह बंद करें या कांच के जार में रखें।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 7. Naan khatai 250gm
  "shop-7": {
    productId: "shop-7",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 2 cookies)",
      servingSizeHi: "25g (लगभग 2 कुकीज़)",
      servingsPerPack: "10",
      energy: { per100g: "510 kcal", perServing: "127.5 kcal" },
      protein: { per100g: "8.2 g", perServing: "2.05 g" },
      carbohydrates: { per100g: "62.5 g", perServing: "15.62 g" },
      totalSugars: { per100g: "22.0 g", perServing: "5.5 g" },
      addedSugars: { per100g: "18.5 g", perServing: "4.62 g" },
      totalFat: { per100g: "25.8 g", perServing: "6.45 g" },
      saturatedFat: { per100g: "14.2 g", perServing: "3.55 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "3.8 g", perServing: "0.95 g" },
      sodium: { per100g: "95 mg", perServing: "23.75 mg" },
      otherNutrients: [
        { name: "Vitamin D2 (Mushroom Extract)", nameHi: "विटामिन D2", per100g: "4.0 mcg", perServing: "1.0 mcg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Whole Wheat Flour",
        "Fine Semolina (Rava / Suji)",
        "Gram Flour (Besan)",
        "Pure Cow Desi Ghee",
        "Unrefined Cane Sugar",
        "Freshly Ground Green Cardamom (Elaichi)",
        "Nutmeg (Jaiphal)",
        "Oyster Mushroom Extract",
        "Baking Soda"
      ],
      ingredientsListHi: [
        "गेहूं का आटा",
        "बारीक सूजी",
        "चने का बेसन",
        "शुद्ध गाय का देसी घी",
        "अपरिष्कृत खांड/शक्कर",
        "पिसी हुई हरी इलायची",
        "जायफल",
        "ऑयस्टर मशरूम सत्व",
        "बेकिंग सोडा"
      ],
      allergenInfo: "Contains Wheat (Gluten) and Dairy (Cow Desi Ghee). Eggless & 100% Vegetarian.",
      allergenInfoHi: "गेहूं (ग्लूटेन) और दूध उत्पाद (देसी घी) शामिल है। अंडा-रहित व 100% शाकाहारी।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Standards Traditional Mithai-Bakery",
      fssaiInfoHi: "FSSAI मानकों के अनुरूप पारंपरिक बेकरी",
      manufacturerDetails: "JAS Agro Traditional Bakery, Bihar",
      manufacturerDetailsHi: "JAS Agro ट्रेडिशनल बेकरी, बिहार"
    },
    foodSpecs: {
      productName: "Traditional Desi Ghee Naan Khatai 250gm",
      productNameHi: "नानखटाई कुकीज़ 250g",
      category: "Biscuits & Cookies",
      categoryHi: "बिस्किट एवं कुकीज़",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Protective Sealed Tray Box",
      packSizeHi: "250g सीलबंद ट्रे बॉक्स",
      tasteOrVariant: "Melt-in-Mouth Sweet Pure Cow Desi Ghee & Cardamom",
      tasteOrVariantHi: "मुंह में घुलने वाला शुद्ध देसी घी और इलायची का स्वाद",
      ingredientsSummary: "Wheat, Rava, Besan, Pure Cow Ghee, Sugar, Cardamom, Mushroom Extract",
      ingredientsSummaryHi: "गेहूं, सूजी, बेसन, गाय का देसी घी, शक्कर, इलायची, मशरूम अर्क",
      shelfLife: "4 Months from baking date",
      shelfLifeHi: "बेकिंग से 4 महीने",
      storage: "Store in a cool, dry place in an airtight jar",
      storageHi: "ठंडी व सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat and Cow Ghee (Dairy)",
      allergenInfoHi: "गेहूं और देसी घी (डेयरी) शामिल है",
      vegetarianClassification: "100% Vegetarian (Eggless)",
      vegetarianClassificationHi: "100% शाकाहारी (अंडा-रहित)",
      manufacturerBrand: "JAS Agro Traditional Bakery",
      manufacturerBrandHi: "JAS Agro ट्रेडिशनल बेकरी",
      fssaiNumber: "FSSAI Quality Certified",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Serving Suggestions & Care Instructions",
      guideTitleHi: "परोसने और रखने की विधि",
      subtitle: "Royal Indian heritage cookie baked with pure cow desi ghee.",
      subtitleHi: "शुद्ध गाय के देसी घी में पकाई गई पारंपरिक शाही नानखटाई।",
      steps: [
        {
          stepNumber: 1,
          title: "Traditional Tea-Time Treat",
          titleHi: "चाय के साथ शाही नाश्ता",
          description: "Enjoy these melt-in-mouth crumbly cookies alongside hot ginger tea, cardamom chai, or warm saffron milk.",
          descriptionHi: "गर्म अदरक चाय, इलायची वाली चाय या केसर दूध के साथ इन स्वादिष्ट कुकीज का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Festive Hospitality & Celebrations",
          titleHi: "त्योहार और मेहमान नवाजी",
          description: "An authentic Indian heritage sweet treat to serve guests during family gatherings and festive occasions.",
          descriptionHi: "पारिवारिक समारोहों और त्योहारों पर मेहमानों का स्वागत करने के लिए बेहतरीन मिष्ठान्न कुकी।"
        },
        {
          stepNumber: 3,
          title: "Handle with Gentle Care",
          titleHi: "सावधानी से निकालें",
          description: "Because it is prepared with genuine cow ghee without binding chemicals, handle pieces gently to prevent crumbling.",
          descriptionHi: "चूँकि यह शुद्ध देसी घी से बनी है, इसलिए इसे टूटने से बचाने के लिए डिब्बे से धीरे से निकालें।"
        },
        {
          stepNumber: 4,
          title: "Airtight Storage",
          titleHi: "एयरटाइट डिब्बे में रखें",
          description: "Keep tightly sealed in a glass jar or tin at room temperature to preserve the fresh aroma of cardamom and ghee.",
          descriptionHi: "इलायची और शुद्ध घी की ताजी खुशबू बनाए रखने के लिए कांच या टिन के एयरटाइट जार में रखें।"
        }
      ],
      precautionsOrTips: [
        "Do not refrigerate; cow ghee cookies stay soft at normal room temperature.",
        "Keep sealed to avoid absorbing moisture from humid air."
      ],
      precautionsOrTipsHi: [
        "फ्रिज में न रखें; सामान्य तापमान पर देसी घी की कुकीज सबसे अच्छी रहती हैं।",
        "नमी से बचाने के लिए ढक्कन अच्छी तरह बंद रखें।"
      ]
    },
    faqs: [
      {
        question: "Is real cow desi ghee used in JAS Agro Naan Khatai?",
        questionHi: "क्या इस नानखटाई में असली गाय का देसी घी इस्तेमाल होता है?",
        answer: "Yes, we bake our Naan Khatai exclusively with 100% pure cow desi ghee, giving it a rich aroma and authentic melt-in-mouth texture.",
        answerHi: "हाँ, हम अपनी नानखटाई को 100% शुद्ध गाय के देसी घी में बेक करते हैं, जो इसे अनोखी खुशबू और स्वाद देता है।"
      },
      {
        question: "Does this contain eggs or gelatin?",
        questionHi: "क्या इसमें अंडा या जिलेटिन है?",
        answer: "No, JAS Agro Naan Khatai is 100% eggless and completely vegetarian.",
        answerHi: "नहीं, JAS Agro नानखटाई पूरी तरह अंडा-रहित और 100% शुद्ध शाकाहारी है।"
      },
      {
        question: "What is the shelf life of Naan Khatai?",
        questionHi: "नानखटाई की शेल्फ लाइफ कितनी है?",
        answer: "It has a shelf life of 4 months from the date of baking when stored in a cool, dry place.",
        answerHi: "ठंडी और सूखी जगह पर रखने पर बेकिंग तिथि से इसकी शेल्फ लाइफ 4 महीने है।"
      },
      {
        question: "How is it packaged to prevent breaking during delivery?",
        questionHi: "डिलीवरी के दौरान टूटने से बचाने के लिए इसे कैसे पैक किया जाता है?",
        answer: "The cookies are placed in a molded protective tray, heat-sealed, and packaged in a rigid corrugated carton with bubble cushioning.",
        answerHi: "कुकीज को ट्रे में रखकर सील किया जाता है और बबल कुशनिंग वाले मजबूत डिब्बे में पैक किया जाता है।"
      },
      {
        question: "What is the net weight and how many pieces are in the box?",
        questionHi: "कुल वजन कितना है और डिब्बे में कितने पीस होते हैं?",
        answer: "Each box contains 250 grams net weight (approx 16 to 18 cookies).",
        answerHi: "प्रत्येक डिब्बे का कुल वजन 250 ग्राम है (लगभग 16 से 18 नानखटाई)।"
      },
      {
        question: "What should I do if my package arrives damaged?",
        questionHi: "यदि पार्सल क्षतिग्रस्त मिलता है तो क्या करें?",
        answer: "Share a photo of the damaged package with our WhatsApp support (+91 73729 26623) within 24 hours for a prompt free replacement.",
        answerHi: "24 घंटे के भीतर व्हाट्सएप (+91 73729 26623) पर फोटो भेजें, हम तुरंत नया पैकेट भेजेंगे।"
      }
    ],
    storage: {
      shelfLife: "4 Months from baking date",
      shelfLifeHi: "बेकिंग तिथि से 4 महीने",
      bestBefore: "Best before 120 days from packaging",
      bestBeforeHi: "पैकिंग से 120 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store at room temperature in a dry, airtight jar.",
        "Do not store in refrigerator.",
        "Keep away from direct sunlight."
      ],
      guidelinesHi: [
        "सामान्य तापमान पर सूखे, एयरटाइट जार में रखें।",
        "फ्रिज में न रखें।",
        "सीधी धूप से बचाएं।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 8. Chocolate Cashew Biscuit 250gm
  "shop-8": {
    productId: "shop-8",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 2 biscuits)",
      servingSizeHi: "25g (लगभग 2 बिस्किट)",
      servingsPerPack: "10",
      energy: { per100g: "492 kcal", perServing: "123 kcal" },
      protein: { per100g: "10.4 g", perServing: "2.6 g" },
      carbohydrates: { per100g: "64.2 g", perServing: "16.05 g" },
      totalSugars: { per100g: "21.5 g", perServing: "5.38 g" },
      addedSugars: { per100g: "17.0 g", perServing: "4.25 g" },
      totalFat: { per100g: "21.8 g", perServing: "5.45 g" },
      saturatedFat: { per100g: "8.8 g", perServing: "2.2 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "6.2 g", perServing: "1.55 g" },
      sodium: { per100g: "135 mg", perServing: "33.75 mg" },
      otherNutrients: [
        { name: "Magnesium (from Cashews)", nameHi: "मैग्नीशियम", per100g: "82 mg", perServing: "20.5 mg" },
        { name: "Vitamin D2 (Mushroom fortified)", nameHi: "विटामिन D2", per100g: "4.6 mcg", perServing: "1.15 mcg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Stone-ground Whole Wheat Flour",
        "Roasted Cashew Nut Bits (Kaju)",
        "Rich Cocoa Powder",
        "Dehydrated Oyster Mushroom Extract",
        "Pure Farm Butter",
        "Unrefined Cane Sugar",
        "Milk Solids",
        "Vanilla Extract",
        "Baking Leaveners",
        "Iodized Salt"
      ],
      ingredientsListHi: [
        "चक्की का साबुत गेहूं का आटा",
        "रोस्टेड काजू के टुकड़े",
        "शुद्ध कोको पाउडर",
        "ऑयस्टर मशरूम सत्व",
        "फार्म बटर",
        "अपरिष्कृत शक्कर",
        "दूध के ठोस पदार्थ",
        "वैनिला अर्क",
        "बेकिंग एजेंट्स",
        "नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten), Tree Nuts (Cashews), and Milk (Dairy).",
      allergenInfoHi: "गेहूं (ग्लूटेन), काजू (ट्री नट) और दूध शामिल है।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Registered Nut & Bakery Product",
      fssaiInfoHi: "FSSAI पंजीकृत नट एवं बेकरी उत्पाद",
      manufacturerDetails: "JAS Agro Farms & Bakery Unit, Bihar",
      manufacturerDetailsHi: "JAS Agro फार्म्स एवं बेकरी यूनिट, बिहार"
    },
    foodSpecs: {
      productName: "Chocolate Cashew Biscuit 250gm",
      productNameHi: "चॉकलेट काजू बिस्किट 250g",
      category: "Biscuits & Cookies",
      categoryHi: "बिस्किट एवं कुकीज़",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Foil-Lined Aroma Pouch",
      packSizeHi: "250g फॉयल-लाइन्ड एरोमा पाउच",
      tasteOrVariant: "Rich Cocoa with Crunchy Roasted Cashew Nut Bites",
      tasteOrVariantHi: "रिच कोको और कुरकुरा रोस्टेड काजू स्वाद",
      ingredientsSummary: "Whole Wheat, Roasted Cashews, Cocoa, Butter, Milk Solids, Mushroom Extract",
      ingredientsSummaryHi: "गेहूं, रोस्टेड काजू, कोको, मक्खन, दूध, मशरूम अर्क",
      shelfLife: "6 Months from packaging",
      shelfLifeHi: "पैकिंग से 6 महीने",
      storage: "Store in a cool, dry place in an airtight jar",
      storageHi: "ठंडी और सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat, Cashews, and Milk",
      allergenInfoHi: "गेहूं, काजू और दूध शामिल है",
      vegetarianClassification: "100% Vegetarian",
      vegetarianClassificationHi: "100% शाकाहारी",
      manufacturerBrand: "JAS Agro",
      manufacturerBrandHi: "JAS Agro",
      fssaiNumber: "FSSAI Quality Standards",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Serving Suggestions & Care",
      guideTitleHi: "परोसने और रखने के सुझाव",
      subtitle: "Crunchy roasted cashews blended with double cocoa richness.",
      subtitleHi: "रोस्टेड काजू और रिच कोको का बेहतरीन कुरकुरा मेल।",
      steps: [
        {
          stepNumber: 1,
          title: "Nutty Afternoon Tea Dip",
          titleHi: "शाम की चाय के साथ",
          description: "Pair 2-3 nutty biscuits with cold coffee, masala chai, or warm milk for sustained energy.",
          descriptionHi: "कोल्ड कॉफी, मसाला चाय या गर्म दूध के साथ 2-3 काजू-चॉकलेट बिस्किट का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Energy Snack for Busy Days",
          titleHi: "ऊर्जावान दैनिक स्नैक",
          description: "Rich in healthy plant fats from cashews and whole grain dietary fiber for lasting fullness.",
          descriptionHi: "काजू के प्राकृतिक फैट्स और गेहूं के फाइबर से भरपूर, जो लंबे समय तक ऊर्जा बनाए रखता है।"
        },
        {
          stepNumber: 3,
          title: "Ice Cream & Sundae Crumble",
          titleHi: "आइसक्रीम और संडे क्रंबल",
          description: "Crumble coarsely over vanilla or chocolate ice cream sundaes for an artisanal crunch.",
          descriptionHi: "आइसक्रीम या संडे के ऊपर क्रश करके क्रंची टॉपिंग की तरह इस्तेमाल करें।"
        },
        {
          stepNumber: 4,
          title: "Airtight Storage",
          titleHi: "एयरटाइट डिब्बे में सुरक्षित रखें",
          description: "Seal immediately in an airtight container to keep cashew nut pieces crisp.",
          descriptionHi: "काजू के टुकड़ों का कुरकुरापन बनाए रखने के लिए एयरटाइट डिब्बे में रखें।"
        }
      ],
      precautionsOrTips: [
        "Contains tree nuts (cashews).",
        "Keep sealed away from moisture."
      ],
      precautionsOrTipsHi: [
        "इसमें काजू (ट्री नट्स) शामिल हैं।",
        "नमी से दूर एयरटाइट रखें।"
      ]
    },
    faqs: [
      {
        question: "Are real cashew nut pieces used in this biscuit?",
        questionHi: "क्या इसमें असली काजू के टुकड़े इस्तेमाल किए जाते हैं?",
        answer: "Yes, every biscuit is packed with roasted crunchy cashew nut pieces combined with pure cocoa powder.",
        answerHi: "हाँ, प्रत्येक बिस्किट में भुने हुए असली काजू के टुकड़े और शुद्ध कोको पाउडर मिलाया गया है।"
      },
      {
        question: "Is this suitable for people with nut allergies?",
        questionHi: "क्या यह नट एलर्जी वाले लोगों के लिए सुरक्षित है?",
        answer: "No, this product contains real cashews and is not recommended for individuals with tree nut allergies.",
        answerHi: "नहीं, इसमें असली काजू होते हैं, इसलिए नट एलर्जी वाले लोगों को इसका सेवन नहीं करना चाहिए।"
      },
      {
        question: "What is the net weight and shelf life?",
        questionHi: "इसका वजन और शेल्फ लाइफ क्या है?",
        answer: "Each pack contains 250 grams with a shelf life of 6 months from the date of packaging.",
        answerHi: "प्रत्येक पैकेट का वजन 250 ग्राम है और शेल्फ लाइफ पैकिंग तिथि से 6 महीने है।"
      },
      {
        question: "Does it contain palm oil or artificial colors?",
        questionHi: "क्या इसमें पाम ऑयल या कृत्रिम रंग है?",
        answer: "No, we use pure farm butter, whole grains, and cocoa with zero artificial food colorings.",
        answerHi: "नहीं, इसमें केवल शुद्ध मक्खन, अनाज और कोको का उपयोग किया जाता है।"
      },
      {
        question: "How fast is express delivery?",
        questionHi: "एक्सप्रेस डिलीवरी कितनी जल्दी होती है?",
        answer: "Dispatched within 24-48 hours via top courier partners (BlueDart, Delhivery, DTDC).",
        answerHi: "24-48 घंटों में प्रमुख कूरियर पार्टनर्स द्वारा प्रेषित किया जाता है।"
      },
      {
        question: "What is the refund policy?",
        questionHi: "रिफंड की क्या नीति है?",
        answer: "Report any transit issue within 24 hours on WhatsApp (+91 73729 26623) with a photo for an instant replacement or refund.",
        answerHi: "पार्सल में कोई समस्या होने पर 24 घंटे में व्हाट्सएप पर फोटो भेजें, तुरंत समाधान किया जाएगा।"
      }
    ],
    storage: {
      shelfLife: "6 Months from packaging",
      shelfLifeHi: "पैकिंग से 6 महीने",
      bestBefore: "Best before 180 days from packing",
      bestBeforeHi: "पैकिंग से 180 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in an airtight container in a cool, dry area.",
        "Keep away from direct sunlight.",
        "Reseal pouch immediately after opening."
      ],
      guidelinesHi: [
        "ठंडी, सूखी जगह पर एयरटाइट डिब्बे में रखें।",
        "सीधी धूप से दूर रखें।",
        "उपयोग के बाद तुरंत पैकेट बंद करें।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 9. Butter Biscuit 250gm
  "shop-9": {
    productId: "shop-9",
    productType: "food",
    nutrition: {
      servingSize: "25g (approx 2 biscuits)",
      servingSizeHi: "25g (लगभग 2 बिस्किट)",
      servingsPerPack: "10",
      energy: { per100g: "490 kcal", perServing: "122.5 kcal" },
      protein: { per100g: "8.6 g", perServing: "2.15 g" },
      carbohydrates: { per100g: "65.4 g", perServing: "16.35 g" },
      totalSugars: { per100g: "22.0 g", perServing: "5.5 g" },
      addedSugars: { per100g: "18.0 g", perServing: "4.5 g" },
      totalFat: { per100g: "21.5 g", perServing: "5.38 g" },
      saturatedFat: { per100g: "11.2 g", perServing: "2.8 g" },
      transFat: { per100g: "0.0 g", perServing: "0.0 g" },
      dietaryFibre: { per100g: "4.5 g", perServing: "1.12 g" },
      sodium: { per100g: "160 mg", perServing: "40 mg" },
      otherNutrients: [
        { name: "Vitamin D2 (Mushroom extract)", nameHi: "विटामिन D2", per100g: "4.2 mcg", perServing: "1.05 mcg" }
      ]
    },
    ingredients: {
      ingredientsList: [
        "Whole Wheat Flour",
        "Farm-Churned Sweet Cream Butter",
        "Dehydrated Oyster Mushroom Extract",
        "Unrefined Cane Sugar",
        "Milk Solids",
        "Natural Vanilla Extract",
        "Baking Soda",
        "Salt"
      ],
      ingredientsListHi: [
        "गेहूं का आटा",
        "शुद्ध फार्म बटर (मक्खन)",
        "ऑयस्टर मशरूम सत्व",
        "अपरिष्कृत शक्कर",
        "दूध के ठोस पदार्थ",
        "प्राकृतिक वैनिला अर्क",
        "बेकिंग सोडा",
        "नमक"
      ],
      allergenInfo: "Contains Wheat (Gluten) and Milk (Dairy).",
      allergenInfoHi: "गेहूं (ग्लूटेन) और दूध शामिल है।",
      foodClassification: "Vegetarian",
      fssaiInfo: "FSSAI Certified Premium Bakery Product",
      fssaiInfoHi: "FSSAI प्रमाणित प्रीमियम बेकरी उत्पाद",
      manufacturerDetails: "JAS Agro Bakery, Bihar",
      manufacturerDetailsHi: "JAS Agro बेकरी, बिहार"
    },
    foodSpecs: {
      productName: "Farm-Fresh Butter Biscuit 250gm",
      productNameHi: "बटर बिस्किट 250g",
      category: "Biscuits & Cookies",
      categoryHi: "बिस्किट एवं कुकीज़",
      netQuantity: "250 Grams",
      netQuantityHi: "250 ग्राम",
      packSize: "250g Sealed Moisture-Lock Pack",
      packSizeHi: "250g सीलबंद नमी-रोधी पैक",
      tasteOrVariant: "Classic Golden-Baked Rich Creamy Butter",
      tasteOrVariantHi: "पारंपरिक गोल्डन-बेक्ड रिच मक्खन स्वाद",
      ingredientsSummary: "Whole Wheat, Farm Churned Butter, Milk Solids, Mushroom Extract, Vanilla",
      ingredientsSummaryHi: "गेहूं, शुद्ध मक्खन, दूध, मशरूम अर्क, वैनिला",
      shelfLife: "6 Months from packaging",
      shelfLifeHi: "पैकिंग से 6 महीने",
      storage: "Store in a cool dry place in an airtight container",
      storageHi: "ठंडी और सूखी जगह पर एयरटाइट डिब्बे में रखें",
      allergenInfo: "Contains Wheat and Milk",
      allergenInfoHi: "गेहूं और दूध शामिल है",
      vegetarianClassification: "100% Vegetarian",
      vegetarianClassificationHi: "100% शाकाहारी",
      manufacturerBrand: "JAS Agro",
      manufacturerBrandHi: "JAS Agro",
      fssaiNumber: "FSSAI Quality Standards",
      countryOfOrigin: "India",
      countryOfOriginHi: "भारत"
    },
    howToUse: {
      guideTitle: "Serving Suggestions & Kitchen Tips",
      guideTitleHi: "उपभोग और उपयोग के सुझाव",
      subtitle: "Classic golden butter cookies baked to crispy perfection.",
      subtitleHi: "शुद्ध मक्खन से बेक की गई पारंपरिक क्रिस्पी कुकीज।",
      steps: [
        {
          stepNumber: 1,
          title: "Morning Chai & Coffee Dip",
          titleHi: "सुबह की चाय व कॉफी के साथ",
          description: "Dip into morning English breakfast tea, masala chai, or hot milk.",
          descriptionHi: "सुबह की गरमा-गरम चाय या दूध में डुबोकर पारंपरिक स्वाद का आनंद लें।"
        },
        {
          stepNumber: 2,
          title: "Children's Lunchbox Snack",
          titleHi: "बच्चों का टिफिन स्नैक",
          description: "Packed with clean calories, farm butter, and wholesome grains without hydrogenated fats.",
          descriptionHi: "शुद्ध मक्खन और गेहूं से बना स्वस्थ स्नैक जो बच्चों के टिफिन के लिए उत्तम है।"
        },
        {
          stepNumber: 3,
          title: "Cheesecake & Tart Crust Base",
          titleHi: "चीजकेक व पाई का बेस",
          description: "Crush finely and mix with melted butter as a premium biscuit crust for homemade cheesecakes and tarts.",
          descriptionHi: "घर पर चीजकेक या पाई बनाते समय इसका बारीक चूरा बनाकर बेस के रूप में उपयोग करें।"
        },
        {
          stepNumber: 4,
          title: "Airtight Storage",
          titleHi: "एयरटाइट डिब्बे में रखें",
          description: "Keep lid tightly closed to prevent humidity from softening the cookies.",
          descriptionHi: "कुकीज को नरम होने से बचाने के लिए डिब्बे का ढक्कन हमेशा अच्छी तरह बंद रखें।"
        }
      ],
      precautionsOrTips: [
        "Store in a dry container away from kitchen heat.",
        "Do not refrigerate."
      ],
      precautionsOrTipsHi: [
        "रसोई की गर्मी से दूर सूखे डिब्बे में रखें।",
        "फ्रिज में रखने की आवश्यकता नहीं है।"
      ]
    },
    faqs: [
      {
        question: "Is real dairy butter used in these cookies?",
        questionHi: "क्या इन कुकीज में असली मक्खन इस्तेमाल होता है?",
        answer: "Yes, we bake our butter cookies with genuine sweet cream farm butter, avoiding margarine or hydrogenated fats entirely.",
        answerHi: "हाँ, हम अपनी कुकीज में असली क्रीम बटर का इस्तेमाल करते हैं और डालडा या वनस्पति तेल का बिल्कुल उपयोग नहीं करते।"
      },
      {
        question: "Are there any artificial preservatives or colors?",
        questionHi: "क्या इसमें कोई कृत्रिम रंग या संरक्षक हैं?",
        answer: "No, they are baked naturally using whole wheat, butter, cane sugar, and vanilla extract.",
        answerHi: "नहीं, ये पूरी तरह प्राकृतिक सामग्री (गेहूं, मक्खन, शक्कर, वैनिला) से बनाई जाती हैं।"
      },
      {
        question: "What is the net weight and pack size?",
        questionHi: "कुल वजन और पैक साइज क्या है?",
        answer: "Each pack contains 250 grams net weight (approx 20-22 cookies).",
        answerHi: "प्रत्येक पैकेट में 250 ग्राम वजन होता है (लगभग 20-22 कुकीज)।"
      },
      {
        question: "How long will the biscuits stay crispy after opening?",
        questionHi: "खोलने के बाद बिस्किट कितने समय तक कुरकुरे रहते हैं?",
        answer: "When kept in a sealed airtight jar at room temperature, they stay fresh and crisp for 3 to 4 weeks.",
        answerHi: "एयरटाइट जार में रखने पर ये 3 से 4 हफ्तों तक पूरी तरह कुरकुरे रहते हैं।"
      },
      {
        question: "How quickly are online orders dispatched?",
        questionHi: "ऑनलाइन ऑर्डर कितनी जल्दी भेजे जाते हैं?",
        answer: "Orders are dispatched within 24-48 hours via express insured couriers across India.",
        answerHi: "ऑर्डर 24-48 घंटों के भीतर एक्सप्रेस कूरियर से भेजे जाते हैं।"
      },
      {
        question: "What is the policy for transit damages?",
        questionHi: "रास्ते में नुकसान होने पर क्या पॉलिसी है?",
        answer: "Share a photo of the damaged pack on WhatsApp (+91 73729 26623) within 24 hours of delivery for a free replacement.",
        answerHi: "डिलीवरी के 24 घंटे में व्हाट्सएप पर फोटो भेजें, तुरंत मुफ़्त रिप्लेसमेंट भेजा जाएगा।"
      }
    ],
    storage: {
      shelfLife: "6 Months from packaging",
      shelfLifeHi: "पैकिंग से 6 महीने",
      bestBefore: "Best before 180 days from packing",
      bestBeforeHi: "पैकिंग से 180 दिनों तक सर्वोत्तम",
      guidelines: [
        "Store in a cool, dry place away from moisture.",
        "Reseal airtight after opening.",
        "Keep away from direct sunlight."
      ],
      guidelinesHi: [
        "नमी से दूर ठंडी व सूखी जगह पर रखें।",
        "खोलने के बाद एयरटाइट बंद रखें।",
        "सीधी धूप से बचाएं।"
      ]
    },
    shipping: COMMON_SHIPPING_POLICY,
    returns: COMMON_FOOD_RETURNS_POLICY
  },

  // 10. Fresh Oyster Mushrooms 1kg
  "shop-10": {
    productId: "shop-10",
    productType: "agriculture",
    agriSpecs: {
      productVariety: "White Oyster Mushroom (Pleurotus florida / ostreatus)",
      productVarietyHi: "सफेद ऑयस्टर मशरूम (Pleurotus ostreatus)",
      cropType: "Gourmet & Medicinal Edible Mushroom Produce",
      cropTypeHi: "खाद्य एवं औषधीय गॉरमे मशरूम उत्पाद",
      season: "Year-Round (Climate-Controlled Indoor Smart Chambers)",
      seasonHi: "वर्ष भर (IoT क्लाइमेट नियंत्रित इनडोर फार्म)",
      growingLevel: "Ready-to-Cook Fresh Produce (Morning Harvested)",
      growingLevelHi: "ताजा तुड़ाई उत्पाद (पकाने के लिए तैयार)",
      germinationOrSpawning: "Harvested at peak maturity (4-6 days fresh shelf life)",
      germinationOrSpawningHi: "पूर्ण ताजगी पर सुबह की तुड़ाई (4-6 दिन शेल्फ लाइफ)",
      temperature: "Grown at 20°C - 26°C; Store chilled at 4°C - 7°C",
      temperatureHi: "उगाने का तापमान: 20°C-26°C; भंडारण: 4°C-7°C",
      soilOrSubstrate: "Pasteurized Organic Paddy Straw & Wheat Straw Substrate",
      soilOrSubstrateHi: "पाश्चुरीकृत जैविक धान व गेहूं का भूसा सबस्ट्रेट",
      sunlight: "Diffused indirect cool LED spectrum in growth rooms",
      sunlightHi: "ग्रोथ रूम में डिफ्यूज्ड कूल स्पेक्ट्रम लाइट",
      waterRequirements: "85% - 90% Relative Humidity maintained via micro-misting",
      waterRequirementsHi: "85% - 90% सापेक्ष आर्द्रता (माइक्रो-मिस्टिंग)",
      containerOrPitRequirement: "Aerated Fresh Produce Moisture-Retaining Cold Box",
      containerOrPitRequirementHi: "हवादार नमी-रोधी कोल्ड फ्रेश बॉक्स",
      harvestWindow: "Hand-picked fresh on morning of dispatch",
      harvestWindowHi: "डिलीवरी के दिन सुबह हाथ से ताजा तुड़ाई",
      packQuantity: "1 Kilogram (1000g) Fresh Clusters",
      packQuantityHi: "1 किलोग्राम (1000 ग्राम) ताजे मशरूम गुच्छे",
      brandOrOrigin: "JAS Agro Smart Telemetry Farms, Bihar, India",
      brandOrOriginHi: "JAS Agro स्मार्ट टेलीमेट्री फार्म्स, बिहार"
    },
    howToUse: {
      guideTitle: "Culinary Preparation & Freshness Care Guide",
      guideTitleHi: "पकाने एवं ताजगी बनाए रखने की संपूर्ण विधि",
      subtitle: "Gourmet, velvety organic oyster mushrooms harvested fresh for your kitchen.",
      subtitleHi: "आपकी रसोई के लिए सुबह ताजा तोड़े गए 100% जैविक ऑयस्टर मशरूम।",
      steps: [
        {
          stepNumber: 1,
          title: "Gentle Dry Cleaning",
          titleHi: "हल्की सफाई",
          description: "Do not soak in water as mushrooms absorb moisture. Gently wipe with a damp paper towel or rinse quickly under cold running water just before cooking and pat dry.",
          descriptionHi: "मशरूम को पानी में न भिगोएं क्योंकि ये पानी सोख लेते हैं। पकाने से ठीक पहले हल्के गीले कपड़े से पोंछें या ठंडे पानी में हल्का धोकर सुखा लें।"
        },
        {
          stepNumber: 2,
          title: "Trimming & Shredding",
          titleHi: "डंठल काटना और टुकड़े करना",
          description: "Trim off the bottom woody cluster base. Tear or slice the tender velvety caps along the gills into even strips.",
          descriptionHi: "नीचे का सूखा डंठल हटा दें। मुलायम मशरूम के ऊपरी हिस्से को हाथ से या चाकू से मनचाहे टुकड़ों में काट लें।"
        },
        {
          stepNumber: 3,
          title: "High-Heat Sautéing for Golden Crust",
          titleHi: "मक्खन व लहसुन के साथ भूनना",
          description: "Sauté in butter or olive oil with minced garlic, salt, and crushed black pepper on medium-high heat for 4-5 minutes until edges are crisp and golden brown.",
          descriptionHi: "मक्खन या तेल में लहसुन, नमक और काली मिर्च के साथ मध्यम-तेज आंच पर 4-5 मिनट भूनें जब तक कि किनारे हल्के भूरे और कुरकुरे न हो जाएं।"
        },
        {
          stepNumber: 4,
          title: "Curries, Stir-Fries & Soups",
          titleHi: "सब्जी, सूप और पुलाव में",
          description: "Add into mushroom masala gravies, vegetable biryanis, pasta sauces, stir-fried noodles, or clear immunity soups.",
          descriptionHi: "मशरूम मसाला, पुलाव, पास्ता या सूप में डालकर स्वादिष्ट और पौष्टिक व्यंजनों का आनंद लें।"
        },
        {
          stepNumber: 5,
          title: "Proper Refrigerated Storage",
          titleHi: "फ्रिज में सही भंडारण",
          description: "Store unwashed in a breathable paper bag or perforated container in the refrigerator crisper drawer at 4°C-7°C. Best consumed within 4 to 6 days.",
          descriptionHi: "बिना धोए हवादार पेपर बैग में फ्रिज में 4°C से 7°C पर रखें। 4 से 6 दिनों के भीतर उपयोग करें।"
        }
      ],
      precautionsOrTips: [
        "Do not store in a sealed plastic bag without air holes, as condensation can spoil fresh mushrooms.",
        "Always cook thoroughly before eating."
      ],
      precautionsOrTipsHi: [
        "बिना हवा वाले बंद प्लास्टिक बैग में न रखें।",
        "सेवन करने से पहले अच्छी तरह पकाएं।"
      ]
    },
    faqs: [
      {
        question: "How fresh are the oyster mushrooms upon delivery?",
        questionHi: "डिलीवरी के समय मशरूम कितने ताजे होते हैं?",
        answer: "Our mushrooms are harvested fresh on the morning of dispatch from our indoor smart farms and packed in breathable, temperature-protected containers.",
        answerHi: "हमारे मशरूम डिस्पैच के दिन सुबह ही इनडोर फार्म से तोड़े जाते हैं और विशेष हवादार बॉक्स में सुरक्षित पैक किए जाते हैं।"
      },
      {
        question: "Are synthetic pesticides or chemical fertilizers used?",
        questionHi: "क्या खेती में कोई कीटनाशक या रासायनिक खाद इस्तेमाल होती है?",
        answer: "Zero chemicals. We cultivate our mushrooms on pasteurized organic straw inside sealed, IoT-monitored micro-climate rooms with clean filtered air.",
        answerHi: "शून्य रसायन। हम स्वच्छ इनडोर वातावरण में पाश्चुरीकृत जैविक भूसे पर बिना किसी कीटनाशक के मशरूम उगाते हैं।"
      },
      {
        question: "How should I clean fresh oyster mushrooms before cooking?",
        questionHi: "पकाने से पहले मशरूम की सफाई कैसे करें?",
        answer: "Never soak them in water. Simply wipe with a damp paper towel or rinse quickly under cold running water right before putting them in the pan.",
        answerHi: "इन्हें पानी में न भिगोएं। पकाने से तुरंत पहले हल्के गीले कपड़े से पोंछें या ठंडे पानी से हल्का धो लें।"
      },
      {
        question: "How long do fresh oyster mushrooms stay good in the fridge?",
        questionHi: "फ्रिज में यह कितने दिनों तक ताजा रहते हैं?",
        answer: "When stored in a breathable paper bag in your refrigerator crisper drawer at 4°C to 7°C, they stay fresh for 4 to 6 days.",
        answerHi: "फ्रिज के क्रिस्पर बॉक्स में हवादार पेपर बैग में 4°C से 7°C पर रखने पर ये 4 से 6 दिनों तक ताजे रहते हैं।"
      },
      {
        question: "What are the nutritional highlights of fresh oyster mushrooms?",
        questionHi: "ताजे ऑयस्टर मशरूम के पोषण लाभ क्या हैं?",
        answer: "They are rich in plant protein, Vitamin D2, beta-glucans, potassium, and antioxidants, with virtually zero fat and low calories.",
        answerHi: "ये उच्च प्रोटीन, विटामिन D2, बीटा-ग्लूकन और एंटीऑक्सीडेंट से भरपूर हैं और इनमें वसा नगण्य होती है।"
      },
      {
        question: "What if the mushrooms arrive damaged or spoiled in transit?",
        questionHi: "यदि डिलीवरी के दौरान मशरूम खराब हो जाएं तो?",
        answer: "Send an unboxing photo/video to our WhatsApp support (+91 73729 26623) within 24 hours of delivery for an immediate free replacement or refund.",
        answerHi: "डिलीवरी के 24 घंटे में व्हाट्सएप (+91 73729 26623) पर फोटो भेजें, तुरंत रिप्लेसमेंट या रिफंड किया जाएगा।"
      }
    ],
    storage: {
      shelfLife: "4 to 6 Days (Refrigerated at 4°C - 7°C)",
      shelfLifeHi: "4 से 6 दिन (फ्रिज में 4°C - 7°C पर)",
      bestBefore: "Best consumed within 5 days of harvest",
      bestBeforeHi: "तुड़ाई के 5 दिनों के भीतर उपभोग करें",
      guidelines: [
        "Keep refrigerated in a breathable paper bag or original aerated carton.",
        "Do not seal tightly in airtight plastic bags.",
        "Wash only immediately prior to cooking."
      ],
      guidelinesHi: [
        "हवादार पेपर बैग या मूल कार्टन में फ्रिज में रखें।",
        "एयरटाइट प्लास्टिक बैग में बंद न करें।",
        "पकाने से ठीक पहले ही धोएं।"
      ]
    },
    shipping: {
      dispatchTime: "Harvested & dispatched same day via Express Logistics",
      dispatchTimeHi: "तुड़ाई के दिन ही एक्सप्रेस कूरियर द्वारा प्रेषित",
      courierPartners: "Priority Cold / Fresh Express Delivery Partners",
      courierPartnersHi: "प्राथमिकता कोल्ड / फ्रेश एक्सप्रेस डिलीवरी पार्टनर्स",
      freeShippingAbove: "Free shipping on orders above ₹499",
      freeShippingAboveHi: "₹499 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी",
      handlingNote: "Packed in ventilated, moisture-insulating farm boxes to preserve firmness",
      handlingNoteHi: "ताजगी और कड़ापन बनाए रखने के लिए हवादार बॉक्स में सुरक्षित पैकिंग"
    },
    returns: COMMON_AGRI_RETURNS_POLICY
  },

  // 11. Azolla 1 KG (Live Fodder Mother Culture)
  "shop-11": {
    productId: "shop-11",
    productType: "agriculture",
    agriSpecs: {
      productVariety: "Azolla Pinnata (Pure Live Strain Mother Inoculum)",
      productVarietyHi: "अजोला पिन्नाटा (प्योर लाइव मदर कल्चर)",
      cropType: "High-Protein Aquatic Bio-Fern / Livestock Super Fodder",
      cropTypeHi: "उच्च प्रोटीन जलीय बायो-फर्न / पशु हरा चारा",
      season: "All Seasons (Optimal fast multiplication: Feb – Nov)",
      seasonHi: "सभी मौसम (सर्वोत्तम वृद्धि: फरवरी से नवंबर)",
      growingLevel: "Beginner-Friendly / Rapid Biomass Multiplier",
      growingLevelHi: "शुरुआती किसानों के लिए आसान / तीव्र वृद्धि",
      germinationOrSpawning: "Doubles biomass every 3 to 5 days under standard conditions",
      germinationOrSpawningHi: "सामान्य स्थिति में हर 3 से 5 दिन में बायोमास दोगुना",
      temperature: "Optimal: 20°C – 32°C (Survives 10°C to 38°C with shade)",
      temperatureHi: "अनुकूल: 20°C – 32°C (शेड नेट में 38°C तक सुरक्षित)",
      soilOrSubstrate: "10-15kg fertile sieved farm soil mixed with 2kg cow dung slurry & 30g SSP",
      soilOrSubstrateHi: "10-15 किलो उपजाऊ मिट्टी, 2 किलो गोबर का घोल व 30g सुपर फॉस्फेट",
      sunlight: "50% Green Shade Net (Avoid extreme harsh scorching noon sun)",
      sunlightHi: "50% हरा शेड नेट (कड़ी सीधी धूप से बचाएं)",
      waterRequirements: "10cm - 15cm standing fresh water; Maintain pH 6.5 - 7.5",
      waterRequirementsHi: "10 से 15 सेमी साफ पानी; pH 6.5 - 7.5",
      containerOrPitRequirement: "UV Silpaulin lined pit (2m x 2m x 0.2m), HDPE tray, or cemented shallow tank",
      containerOrPitRequirementHi: "सिलपॉलिन शीट गड्ढा (2m x 2m), प्लास्टिक ट्रे या सीमेंटेड टैंक",
      harvestWindow: "Daily continuous harvesting of 1.0 - 1.5 kg after 10-14 days of bed setup",
      harvestWindowHi: "बेड तैयार होने के 10-14 दिन बाद प्रतिदिन 1 से 1.5 किलो निरंतर तुड़ाई",
      packQuantity: "1 Kilogram (1000g) Live Mother Inoculum",
      packQuantityHi: "1 किलोग्राम लाइव मदर कल्चर",
      brandOrOrigin: "JAS Agro Bio-Agri Farms, India",
      brandOrOriginHi: "JAS Agro बायो-एग्री फार्म्स, भारत"
    },
    howToUse: {
      guideTitle: "Step-by-Step Cultivation & Animal Feeding Guide",
      guideTitleHi: "अजोला उगाने और पशुओं को खिलाने की संपूर्ण विधि",
      subtitle: "Produce 1-1.5kg of high-protein green cattle feed daily from a single 2m x 2m pit.",
      subtitleHi: "एक 2m x 2m गड्ढे से प्रतिदिन 1-1.5 किलो उच्च प्रोटीन युक्त हरा चारा प्राप्त करें।",
      steps: [
        {
          stepNumber: 1,
          title: "Bed Selection & Pit Preparation",
          titleHi: "स्थान चयन एवं गड्ढा निर्माण",
          description: "Choose a partially shaded area under trees or erect a 50% green agro shade net. Dig a shallow flat pit of 2m x 2m with a depth of 15-20cm and line it smoothly with a heavy-duty UV-stabilized silpaulin sheet.",
          descriptionHi: "छायादार स्थान चुनें या 50% हरा शेड नेट लगाएं। 2m x 2m आकार का 15-20 सेमी गहरा गड्ढा खोदकर उस पर मजबूत सिलपॉलिन शीट बिछाएं।"
        },
        {
          stepNumber: 2,
          title: "Soil & Nutrient Slurry Inoculation",
          titleHi: "मिट्टी और गोबर के घोल का मिश्रण",
          description: "Spread 10-15kg of fertile sieved garden/farm soil evenly over the sheet. Mix 2kg of fresh decomposed cow dung slurry and 30g Single Super Phosphate (SSP) in 10 liters of water and pour into the pit.",
          descriptionHi: "शीट पर 10-15 किलो छानी हुई उपजाऊ मिट्टी फैलाएं। 2 किलो ताजे गोबर का घोल और 30 ग्राम सुपर फॉस्फेट 10 लीटर पानी में मिलाकर गड्ढे में डालें।"
        },
        {
          stepNumber: 3,
          title: "Water Filling & Mother Culture Release",
          titleHi: "पानी भरना और कल्चर डालना",
          description: "Fill the bed with clean fresh water to a depth of 10-12cm. Rinse this 1kg JAS Agro live Azolla mother culture gently in fresh water to remove transit dust and release it evenly across the water surface.",
          descriptionHi: "गड्ढे में 10-12 सेमी साफ पानी भरें। पार्सल से प्राप्त 1 किलो लाइव अजोला को साफ पानी से हल्का धोकर पानी की सतह पर समान रूप से फैला दें।"
        },
        {
          stepNumber: 4,
          title: "Maintenance & Weekly Nutrient Top-Up",
          titleHi: "साप्ताहिक रखरखाव एवं पोषण",
          description: "Every 7 days, add 1kg fresh cow dung slurry mixed with 15g SSP. Maintain the 10cm water level regularly and stir the bed gently once a week to prevent mosquito breeding.",
          descriptionHi: "हर 7 दिन में 1 किलो गोबर का घोल और 15 ग्राम सुपर फॉस्फेट डालें। पानी का स्तर 10-12 सेमी बनाए रखें और हफ्ते में एक बार हल्का हिलाएं।"
        },
        {
          stepNumber: 5,
          title: "Daily Harvesting & Feeding Protocol",
          titleHi: "दैनिक तुड़ाई और पशु आहार विधि",
          description: "Within 10-14 days, the bed forms a thick green carpet. Harvest 1.0 - 1.5kg daily using a plastic mesh sieve. Wash thoroughly in clean freshwater to remove dung odor, and mix with dry straw or concentrate feed for dairy cows, buffaloes, poultry, and goats.",
          descriptionHi: "10-14 दिनों में अजोला पूरे गड्ढे में फैल जाएगा। रोजाना छलनी से 1 से 1.5 किलो अजोला निकालें, साफ पानी में अच्छी तरह धोएं और सूखे चारे या दाने में मिलाकर खिलाएं।"
        }
      ],
      precautionsOrTips: [
        "Always wash harvested Azolla in clean water before feeding to eliminate cow dung smell so cattle eat readily.",
        "Change 25% of the pit water and soil every 4-6 months to maintain vigorous multiplication."
      ],
      precautionsOrTipsHi: [
        "पशुओं को खिलाने से पहले अजोला को साफ पानी से धो लें ताकि गोबर की गंध निकल जाए और पशु चाव से खाएं।",
        "लगातार अच्छी पैदावार के लिए हर 4-6 महीने में 25% पानी और मिट्टी बदलें।"
      ]
    },
    faqs: [
      {
        question: "How quickly should I transfer Azolla into water after receiving the parcel?",
        questionHi: "पार्सल मिलने के कितने समय बाद अजोला पानी में डालना चाहिए?",
        answer: "Open the package immediately upon delivery and release the live culture into your prepared water bed within 24 to 48 hours for best multiplication results.",
        answerHi: "पार्सल मिलते ही तुरंत खोलें और 24 से 48 घंटे के भीतर तैयार पानी के गड्ढे में डाल दें ताकि कल्चर तेजी से बढ़ सके।"
      },
      {
        question: "How much Azolla should I feed to a dairy cow or buffalo daily?",
        questionHi: "गाय या भैंस को रोजाना कितना अजोला खिलाना चाहिए?",
        answer: "Feed 1.5 to 2.0 kg of fresh washed Azolla per dairy animal daily, mixed with regular dry fodder or concentrate feed. This boosts milk yield by 15-20% and improves fat content.",
        answerHi: "प्रतिदिन प्रति गाय/भैंस 1.5 से 2.0 किलो ताजा धुला हुआ अजोला सूखे चारे में मिलाकर खिलाएं। इससे दूध उत्पादन 15-20% बढ़ता है।"
      },
      {
        question: "What is the crude protein percentage of JAS Agro Azolla Pinnata?",
        questionHi: "JAS Agro अजोला में कितना प्रोटीन होता है?",
        answer: "Our pure Azolla Pinnata strains contain 25% to 30% highly digestible crude protein, rich in essential amino acids, minerals, and Vitamin A.",
        answerHi: "हमारे अजोला पिन्नाटा कल्चर में 25% से 30% सुपाच्य प्रोटीन, आवश्यक अमीनो एसिड, खनिज और विटामिन A होता है।"
      },
      {
        question: "How much space is needed to grow daily feed for one dairy animal?",
        questionHi: "एक गाय के दैनिक चारे के लिए कितनी जगह चाहिए?",
        answer: "A single 2m x 2m shallow bed (approx 45 sq ft) produces 1.0 to 1.5 kg of fresh Azolla daily, sufficient for one milking cow.",
        answerHi: "2m x 2m का एक छोटा बेड (लगभग 45 वर्ग फीट) रोजाना 1 से 1.5 किलो अजोला देता है, जो एक दुधारू पशु के लिए पर्याप्त है।"
      },
      {
        question: "Can Azolla be fed to poultry birds, ducks, goats, and fish?",
        questionHi: "क्या इसे मुर्गियों, बत्तखों, बकरियों और मछलियों को खिलाया जा सकता है?",
        answer: "Yes, Azolla is an exceptional bio-superfood for backyard poultry, ducks, goats, rabbits, and carp fish, significantly cutting commercial grain feed costs.",
        answerHi: "हाँ, अजोला मुर्गी पालन, बत्तख, बकरी और मछली पालन के लिए एक उत्तम सुपरफूड है जो महंगे दाने का खर्च 25-30% कम करता है।"
      },
      {
        question: "How is the live culture packed to survive shipping?",
        questionHi: "रास्ते में अजोला जीवित रहे इसके लिए कैसी पैकिंग होती है?",
        answer: "We pack live mother fronds in specialized breathable micro-porous pouches with moisture retention media to ensure live delivery for up to 5-7 days of transit.",
        answerHi: "हम लाइव कल्चर को हवादार और नमीयुक्त विशेष माइक्रो-पोरस बैग में पैक करते हैं जिससे यह 5-7 दिन के रास्ते में भी जीवित और ताजा रहता है।"
      },
      {
        question: "What if the live culture arrives damaged or dehydrated?",
        questionHi: "यदि कल्चर रास्ते में खराब हो जाए तो क्या पॉलिसी है?",
        answer: "Send an unboxing video or clear photo to our WhatsApp (+91 73729 26623) within 24 hours of delivery, and we will dispatch a free fresh culture immediately.",
        answerHi: "डिलीवरी के 24 घंटे में व्हाट्सएप (+91 73729 26623) पर अनबॉक्सिंग वीडियो/फोटो भेजें, हम तुरंत मुफ़्त नया कल्चर भेजेंगे।"
      }
    ],
    storage: {
      shelfLife: "Plant immediately upon receipt (within 24-48 hrs)",
      shelfLifeHi: "प्राप्त होने के 24-48 घंटे के भीतर पानी में डालें",
      bestBefore: "Live perishable culture; requires water inoculation upon arrival",
      bestBeforeHi: "लाइव कल्चर; आते ही पानी में डालना अनिवार्य है",
      guidelines: [
        "Open transport bag immediately upon arrival.",
        "Rinse gently with clean freshwater before introducing into the prepared manure-rich pit.",
        "Do not store in sealed dry conditions."
      ],
      guidelinesHi: [
        "पार्सल मिलते ही बैग तुरंत खोलें।",
        "तैयार गड्ढे में डालने से पहले साफ पानी से हल्का धो लें।",
        "सूखी या बंद जगह पर न रखें।"
      ]
    },
    shipping: {
      dispatchTime: "Packed fresh from live farm beds on day of courier pickup",
      dispatchTimeHi: "कूरियर पिकअप के दिन ही लाइव फार्म बेड से ताजा पैक",
      courierPartners: "Fast-Track Express Logistics with Moist Micro-Porous Packaging",
      courierPartnersHi: "नमीयुक्त माइक्रो-पोरस बैग में फास्ट-ट्रैक एक्सप्रेस डिलीवरी",
      freeShippingAbove: "Free shipping on orders above ₹499",
      freeShippingAboveHi: "₹499 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी",
      handlingNote: "Moisture-sealed with breathable ventilation to keep fronds alive during transit",
      handlingNoteHi: "रास्ते में अजोला जीवित रखने के लिए विशेष हवादार व नमीयुक्त पैकिंग"
    },
    returns: COMMON_AGRI_RETURNS_POLICY
  }
};

export const getProductExtendedInfo = (productId: string): ProductExtendedInfo | null => {
  return EXTENDED_PRODUCT_DATA[productId] || null;
};
