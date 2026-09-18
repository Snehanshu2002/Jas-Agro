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
    brandTagline: "स्मार्ट, प्राकृतिक और आधुनिक कृषि",

    navHome: "मुख्य पृष्ठ",
    navAbout: "हमारे बारे में",
    navSolutions: "समाधान",
    navProducts: "उत्पाद",
    navTechnology: "तकनीक",
    navSustainability: "सतत कृषि",
    navInsights: "जानकारी व ब्लॉग",
    navContact: "संपर्क करें",
    navShop: "शॉप पोर्टल",
    getQuote: "कोटेशन लें",

    changeTheme: "थीम बदलें",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    selectLanguage: "भाषा चुनें",

    heroBadge: "आधुनिक एग्री-टेक और प्राकृतिक खेती",
    heroTitle1: "खेती के भविष्य को",
    heroTitleHighlight: "दें नया रूप",
    heroTitle2: "स्मार्ट समाधानों के साथ",
    heroDescription:
      "उच्च-प्रोटीन अजोला चारा, ऑयस्टर मशरूम, जैविक वर्मीकंपोस्ट खाद, हाइब्रिड नेपियर घास और स्मार्ट IoT सेंसर ऑटोमेशन से अपनी खेती और डेयरी व्यवसाय को बढ़ाएं।",
    exploreProducts: "उत्पाद देखें",
    viewSolutions: "समाधान देखें",

    statFarmers: "जुड़े हुए किसान व डेयरी फार्म",
    statFodder: "मासिक उच्च-प्रोटीन चारा उपज",
    statMushroom: "ऑयस्टर मशरूम वार्षिक पैदावार",
    statCarbon: "पर्यावरण-अनुकूल कार्बन बचत",

    learnMore: "विस्तार से जानें",
    contactUs: "संपर्क करें",
    submit: "जमा करें",
    readMore: "पूरा पढ़ें",
    close: "बंद करें",

    quoteTitle: "मूल्य व कोटेशन प्राप्त करें",
    quoteSubtitle: "अपनी आवश्यकता के अनुसार त्वरित सर्वोत्तम मूल्य एवं एस्टिमेट प्राप्त करें।",
    fullName: "आपका नाम",
    emailAddress: "ईमेल पता",
    phoneNumber: "मोबाइल नंबर",
    selectProduct: "उत्पाद या सेवा चुनें",
    message: "अपनी आवश्यकता बताएं",
    sendRequest: "कोटेशन भेजें",

    footerAboutText:
      "JAS एग्रो आधुनिक जैविक खेती, उच्च-प्रोटीन पशु चारा, वर्मीकंपोस्ट खाद और स्मार्ट IoT ऑटोमेशन के माध्यम से किसानों एवं डेयरी फार्मों की समृद्धि के लिए समर्पित है।",
    quickLinks: "त्वरित लिंक",
    solutionsTitle: "हमारे मुख्य समाधान",
    newsletterTitle: "कृषि समाचार व अपडेट्स",
    newsletterDesc: "खेती के नए तरीके, मौसमी टिप्स और उत्पादों की जानकारी पाने के लिए सदस्यता लें।",
    subscribe: "सदस्यता लें",
    allRightsReserved: "सर्वाधिकार सुरक्षित। JAS एग्रो टेक्नोलॉजीज।",
  },
};
