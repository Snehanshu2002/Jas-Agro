export type Language = "en" | "hi";

export interface Translations {
  // Brand
  brandName: string;
  brandTagline: string;

  // Navigation
  navHome: string;
  navAbout: string;
  navSolutions: string;
  navProducts: string;
  navTechnology: string;
  navSustainability: string;
  navInsights: string;
  navContact: string;
  navShop: string;
  getQuote: string;

  // Theme & Language Controls
  changeTheme: string;
  lightMode: string;
  darkMode: string;
  selectLanguage: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroDescription: string;
  exploreProducts: string;
  viewSolutions: string;

  // Stats
  statFarmers: string;
  statFodder: string;
  statMushroom: string;
  statCarbon: string;

  // General Buttons & Titles
  learnMore: string;
  contactUs: string;
  submit: string;
  readMore: string;
  close: string;

  // Quote Modal
  quoteTitle: string;
  quoteSubtitle: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  selectProduct: string;
  message: string;
  sendRequest: string;

  // Footer
  footerAboutText: string;
  quickLinks: string;
  solutionsTitle: string;
  newsletterTitle: string;
  newsletterDesc: string;
  subscribe: string;
  allRightsReserved: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    brandName: "JAS Agro",
    brandTagline: "Smart Sustainable Agriculture",

    navHome: "Home",
    navAbout: "About",
    navSolutions: "Solutions",
    navProducts: "Products",
    navTechnology: "Technology",
    navSustainability: "Sustainability",
    navInsights: "Insights",
    navContact: "Contact",
    navShop: "Shop Portal",
    getQuote: "Get a Quote",

    changeTheme: "Change Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    selectLanguage: "Language",

    heroBadge: "Next-Gen Agri-Tech & Bio-Farming",
    heroTitle1: "Pioneering Sustainable",
    heroTitleHighlight: "Agri-Tech Solutions",
    heroTitle2: "For Future Generations",
    heroDescription:
      "Empowering farmers and businesses with high-protein Azolla fodder, gourmet Oyster Mushrooms, organic Vermicompost, Super Napier grass, and IoT micro-climate automation.",
    exploreProducts: "Explore Products",
    viewSolutions: "View Solutions",

    statFarmers: "Active Farmers Empowered",
    statFodder: "Monthly High-Protein Fodder",
    statMushroom: "Gourmet Mushroom Production",
    statCarbon: "Carbon Footprint Reduction",

    learnMore: "Learn More",
    contactUs: "Contact Us",
    submit: "Submit Request",
    readMore: "Read More",
    close: "Close",

    quoteTitle: "Request a Custom Quote",
    quoteSubtitle: "Get tailored pricing and bulk supply estimates from our agricultural experts.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    selectProduct: "Select Product / Solution",
    message: "Requirement Details",
    sendRequest: "Submit Quote Request",

    footerAboutText:
      "JAS Agro is committed to revolutionary bio-farming, high-protein animal feeds, organic fertilizers, and IoT climate telemetry for sustainable agricultural prosperity.",
    quickLinks: "Quick Navigation",
    solutionsTitle: "Core Solutions",
    newsletterTitle: "Agri-Tech Newsletter",
    newsletterDesc: "Subscribe for seasonal farming tips, tech updates, and product releases.",
    subscribe: "Subscribe",
    allRightsReserved: "All rights reserved. JAS Agro Technologies.",
  },
  hi: {
    brandName: "JAS एग्रो",
    brandTagline: "स्मार्ट, नेचुरल और आधुनिक फार्मिंग",

    navHome: "होम",
    navAbout: "अबाउट अस",
    navSolutions: "सॉल्यूशंस",
    navProducts: "प्रोडक्ट्स",
    navTechnology: "स्मार्ट टेक्नोलॉजी",
    navSustainability: "ग्रीन फार्मिंग",
    navInsights: "ब्लॉग & गाइड",
    navContact: "कांटैक्ट करें",
    navShop: "ऑनलाइन शॉप",
    getQuote: "रेट / प्राइस पूछें",

    changeTheme: "थीम बदलें",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा चुनें",

    heroBadge: "आधुनिक एग्री-टेक और नेचुरल फार्मिंग",
    heroTitle1: "खेती के फ्यूचर को",
    heroTitleHighlight: "दें नया रूप",
    heroTitle2: "स्मार्ट सॉल्यूशंस के साथ",
    heroDescription:
      "हाई-प्रोटीन अजोला चारा, ऑयस्टर मशरूम, जैविक वर्मीकंपोस्ट खाद, हाइब्रिड नेपियर घास और स्मार्ट IoT सेंसर ऑटोमेशन से अपनी खेती और डेयरी बिजनेस को बढ़ाएं।",
    exploreProducts: "प्रोडक्ट्स देखें",
    viewSolutions: "सॉल्यूशंस देखें",

    statFarmers: "जुड़े हुए किसान व डेयरी फार्म",
    statFodder: "मासिक उच्च-प्रोटीन चारा उपज",
    statMushroom: "ऑयस्टर मशरूम वार्षिक पैदावार",
    statCarbon: "पर्यावरण-अनुकूल कार्बन बचत",

    learnMore: "डिटेल्स देखें",
    contactUs: "कांटैक्ट करें",
    submit: "सबमिट करें",
    readMore: "पूरा पढ़ें",
    close: "बंद करें",

    quoteTitle: "प्राइस & रेट कोटेशन लें",
    quoteSubtitle: "अपनी जरूरत के हिसाब से तुरंत बेस्ट प्राइस और सेटअप एस्टिमेट प्राप्त करें।",
    fullName: "आपका नाम",
    emailAddress: "ईमेल आईडी",
    phoneNumber: "मोबाइल नंबर",
    selectProduct: "प्रोडक्ट या सर्विस चुनें",
    message: "अपनी जरूरत या सवाल बताएं",
    sendRequest: "रिक्वेस्ट भेजें",

    footerAboutText:
      "JAS एग्रो आधुनिक जैविक खेती, हाई-प्रोटीन पशु चारा, वर्मीकंपोस्ट खाद और स्मार्ट IoT ऑटोमेशन के ज़रिए किसानों और डेयरी फार्मों की उन्नति के लिए समर्पित है।",
    quickLinks: "क्विक लिंक्स",
    solutionsTitle: "हमारे मुख्य सॉल्यूशंस",
    newsletterTitle: "फार्मिंग टिप्स & अपडेट्स",
    newsletterDesc: "खेती के नए तरीके, सीजनल टिप्स और प्रोडक्ट्स की जानकारी पाने के लिए सब्सक्राइब करें।",
    subscribe: "सब्सक्राइब करें",
    allRightsReserved: "सर्वाधिकार सुरक्षित। JAS एग्रो टेक्नोलॉजीज।",
  },
};
