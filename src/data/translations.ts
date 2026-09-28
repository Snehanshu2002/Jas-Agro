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
  navMore: string;
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

  // Shop Portal Localization
  shopTitle: string;
  shopNavHome: string;
  shopNavShop: string;
  shopNavStore: string;
  shopDeliverTo: string;
  shopSelectLocation: string;
  shopEnterPincode: string;
  shopApply: string;
  shopPopularCities: string;
  shopWishlist: string;
  shopAccount: string;
  shopCart: string;
  shopCartItems: string;
  shopCartItem: string;
  shopTotal: string;
  shopSubtotal: string;
  shopShipping: string;
  shopFree: string;
  shopProceedToCheckout: string;
  shopBackToTop: string;
  shopSearchPlaceholder: string;
  shopSearchRecent: string;
  shopClearAll: string;
  shopTrendingSearches: string;
  shopRecommendedForYou: string;
  shopProductMatch: string;
  shopProductMatches: string;
  shopPressEnterToView: string;
  shopViewAllResultsFor: string;
  shopNoProductsFound: string;
  shopNoProductsFoundFor: string;
  shopSearchHelpText: string;
  shopSuggestedSearches: string;
  shopCategoryAll: string;
  shopFilter: string;
  shopFilterAndSort: string;
  shopCategory: string;
  shopSelectCategory: string;
  shopProductType: string;
  shopSelectType: string;
  shopAvailability: string;
  shopInStockOnly: string;
  shopPrice: string;
  shopMaxPrice: string;
  shopRating: string;
  shopCustomerRating: string;
  shopAllRatings: string;
  shopBestSelling: string;
  shopReset: string;
  shopResetAll: string;
  shopClear: string;
  shopProductsCount: string;
  shopListView: string;
  shopGridView: string;
  shopSortBy: string;
  shopSortFeatured: string;
  shopSortPriceLow: string;
  shopSortPriceHigh: string;
  shopSortRating: string;
  shopSortNameAsc: string;
  shopSortNameDesc: string;
  shopShowProducts: string;
  shopAddToCart: string;
  shopAddMore: string;
  shopAdded: string;
  shopOutOfStock: string;
  shopBestSeller: string;
  shopOff: string;
  shopQuickView: string;
  shopReviews: string;
  shopSave: string;
  shopNoProductsMatch: string;
  shopNoProductsMatchDesc: string;
  shopPaginationShowing: string;
  shopPaginationOf: string;
  shopPaginationProducts: string;
  shopViewAll: string;
  shopTrustFreeShippingTitle: string;
  shopTrustFreeShippingDesc: string;
  shopTrustOrganicTitle: string;
  shopTrustOrganicDesc: string;
  shopTrustSecureTitle: string;
  shopTrustSecureDesc: string;
  shopTrustSupportTitle: string;
  shopTrustSupportDesc: string;
  shopNewsletterTitle: string;
  shopNewsletterDesc: string;
  shopNewsletterSuccess: string;
  shopNewsletterPlaceholder: string;
  shopNewsletterSubscribe: string;
  shopVideoReelsTitle: string;
  shopVideoTalkToUs: string;
  shopVideoFavourite: string;
  shopVideoSaved: string;
  shopVideoShare: string;
  shopVideoLinkCopied: string;
  shopVideoMoreInfo: string;
  shopCheckDeliveryTitle: string;
  shopCheckDeliverySubtitle: string;
  shopPincodePlaceholder: string;
  shopCheck: string;
  shopChecking: string;
  shopUseCurrentLocation: string;
  shopDetectingLocation: string;
  shopDeliveryServiceable: string;
  shopDeliveryUnserviceable: string;
  shopEstimatedDelivery: string;
  shopShippingCost: string;
  shopCodAvailable: string;
  shopPrepaidOnly: string;
  shopDeliveryNotServiceableTitle: string;
  shopDeliveryNotServiceableDesc: string;
  shopChange: string;
  shopEnterValidPincode: string;
  shopCartTitle: string;
  shopCartEmpty: string;
  shopCartEmptyDesc: string;
  shopExploreShop: string;
  shopFreeDeliveryUnlocked: string;
  shopAddMoreForFreeDelivery: string;
  shopPopularProducts: string;
  shopDirectCheckout: string;
  shopTotalAmount: string;
  shopMobileCartTotal: string;
  shopCheckoutTitle: string;
  shopOrderSuccessTitle: string;
  shopOrderSuccessDesc: string;
  shopFillRequiredFields: string;
  shopFooterTagline: string;
  shopFooterAbout: string;
  shopFooterCorporateOffice: string;
  shopFooterPlantWarehouse: string;
  shopFooterPlantTiming: string;
  shopFooterContactHeading: string;
  shopFooterSolutionsHeading: string;
  shopFooterNavHeading: string;
  shopCheckDeliveryDesc: string;
  shopEnterPincodePlaceholder: string;
  shopFreeAbove499: string;
  shopNoProductsDesc: string;
  shopResetAllFilters: string;
  shopPack: string;
  shopCategories: string;
  shopProductTypes: string;
  shopOtherOptions: string;
  shopFilterRating: string;
  shopFilterCategory: string;
  shopFilterProductType: string;
  shopFilterAvailability: string;
  shopFilterPrice: string;
  shopProductCountSingle: string;
  shopProductCountPlural: string;
  shopStore: string;
  shopLanguage: string;
  shopTheme: string;
  shopLightMode: string;
  shopDarkMode: string;
  shopSelectDeliveryLocation: string;
  shopHeroTitle: string;
  shopNewsletterButton: string;
  shopRecentSearches: string;
  shopAddedBadge: string;
  shopLinkCopied: string;
  shopTalkToUs: string;
  shopSaved: string;
  shopFavourite: string;
  shopShare: string;
  shopMoreInfo: string;
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
    navMore: "More",
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

    // Shop Portal English
    shopTitle: "Agriculture & Organic Products",
    shopNavHome: "Home",
    shopNavShop: "Shop",
    shopNavStore: "Store",
    shopDeliverTo: "Deliver to",
    shopSelectLocation: "Select Delivery Location",
    shopEnterPincode: "Enter Pincode",
    shopApply: "Apply",
    shopPopularCities: "Popular Cities",
    shopWishlist: "Wishlist",
    shopAccount: "Account & Support",
    shopCart: "Shopping Cart",
    shopCartItems: "items",
    shopCartItem: "item",
    shopTotal: "Total Amount",
    shopSubtotal: "Subtotal",
    shopShipping: "Shipping",
    shopFree: "FREE",
    shopProceedToCheckout: "Proceed to Checkout",
    shopBackToTop: "Back to top",
    shopSearchPlaceholder: "Search for products...",
    shopSearchRecent: "Recent Searches",
    shopClearAll: "Clear all",
    shopTrendingSearches: "Trending Searches",
    shopRecommendedForYou: "Recommended For You",
    shopProductMatch: "Product Match",
    shopProductMatches: "Product Matches",
    shopPressEnterToView: "Press Enter to view all",
    shopViewAllResultsFor: "View all results for",
    shopNoProductsFound: "No products found",
    shopNoProductsFoundFor: "No products found for",
    shopSearchHelpText: "Check your spelling or try searching for keywords like mushroom, cookies, naan khatai, or azolla.",
    shopSuggestedSearches: "Suggested Searches",
    shopCategoryAll: "All Products",
    shopFilter: "Filter",
    shopFilterAndSort: "Filter & Sort",
    shopCategory: "Category",
    shopSelectCategory: "Select Category",
    shopProductType: "Product Type",
    shopSelectType: "Select Type",
    shopAvailability: "Availability",
    shopInStockOnly: "In Stock Only",
    shopPrice: "Price",
    shopMaxPrice: "Max Price:",
    shopRating: "Rating",
    shopCustomerRating: "Customer Rating",
    shopAllRatings: "All Ratings",
    shopBestSelling: "Best Selling",
    shopReset: "Reset",
    shopResetAll: "Reset All Filters",
    shopClear: "Clear",
    shopProductsCount: "Products",
    shopListView: "List View",
    shopGridView: "Grid View",
    shopSortBy: "Sort by:",
    shopSortFeatured: "Featured",
    shopSortPriceLow: "Price: Low to High",
    shopSortPriceHigh: "Price: High to Low",
    shopSortRating: "Highest Rating",
    shopSortNameAsc: "Name: A to Z",
    shopSortNameDesc: "Name: Z to A",
    shopShowProducts: "Show Products",
    shopAddToCart: "ADD TO CART",
    shopAddMore: "ADD TO CART",
    shopAdded: "Added!",
    shopOutOfStock: "Out of Stock",
    shopBestSeller: "Best Seller",
    shopOff: "OFF",
    shopQuickView: "QUICK VIEW",
    shopReviews: "reviews",
    shopSave: "Save",
    shopNoProductsMatch: "No Products Match Your Filters",
    shopNoProductsMatchDesc: "We couldn't find any products matching your current search terms or filters. Try adjusting your selections.",
    shopPaginationShowing: "Showing",
    shopPaginationOf: "of",
    shopPaginationProducts: "products",
    shopViewAll: "View All",
    shopTrustFreeShippingTitle: "Free Shipping Above ₹499",
    shopTrustFreeShippingDesc: "Fast pan-India dispatch straight from our processing facility.",
    shopTrustOrganicTitle: "100% Farm-Fresh & Organic",
    shopTrustOrganicDesc: "Zero chemical preservatives or synthetic additives.",
    shopTrustSecureTitle: "Secure UPI & Cash on Delivery",
    shopTrustSecureDesc: "Flexible payment options with instant confirmation.",
    shopTrustSupportTitle: "Direct WhatsApp Farmer Support",
    shopTrustSupportDesc: "Instant guidance & order assistance at +91 73729 26623.",
    shopNewsletterTitle: "Join Our Agriculture & Nutrition Club",
    shopNewsletterDesc: "Get seasonal harvesting updates, nutrition tips & exclusive discounts delivered to your inbox.",
    shopNewsletterSuccess: "Thank you! You have been subscribed.",
    shopNewsletterPlaceholder: "Enter your email address...",
    shopNewsletterSubscribe: "Subscribe",
    shopVideoReelsTitle: "Video Shopping",
    shopVideoTalkToUs: "Talk to us",
    shopVideoFavourite: "Favourite",
    shopVideoSaved: "Saved",
    shopVideoShare: "Share",
    shopVideoLinkCopied: "Product link copied to clipboard!",
    shopVideoMoreInfo: "MORE INFO",
    shopCheckDeliveryTitle: "Check Delivery & Availability",
    shopCheckDeliverySubtitle: "Enter PIN code for estimated dispatch & delivery date",
    shopPincodePlaceholder: "Enter 6-digit PIN (e.g. 302001)",
    shopCheck: "Check",
    shopChecking: "Checking...",
    shopUseCurrentLocation: "Use my current location",
    shopDetectingLocation: "Detecting location...",
    shopDeliveryServiceable: "Delivery available to this location",
    shopDeliveryUnserviceable: "Currently unserviceable for direct courier",
    shopEstimatedDelivery: "Estimated Delivery",
    shopShippingCost: "Shipping Cost",
    shopCodAvailable: "Cash on Delivery (COD) available for this location",
    shopPrepaidOnly: "Prepaid orders only",
    shopDeliveryNotServiceableTitle: "Delivery Not Serviceable",
    shopDeliveryNotServiceableDesc: "We are currently expanding to this region. Please try another PIN code or contact JAS Agro for special bulk farm transport.",
    shopChange: "Change",
    shopEnterValidPincode: "Please enter a valid 6-digit Indian PIN code.",
    shopCartTitle: "Shopping Cart",
    shopCartEmpty: "Your cart is empty",
    shopCartEmptyDesc: "Explore and add our most loved organic farm products below.",
    shopExploreShop: "Explore Shop",
    shopFreeDeliveryUnlocked: "🎉 You've unlocked FREE Delivery!",
    shopAddMoreForFreeDelivery: "more for FREE Delivery",
    shopPopularProducts: "Popular Products",
    shopDirectCheckout: "Proceed to Checkout",
    shopTotalAmount: "Total Amount:",
    shopMobileCartTotal: "Total",
    shopCheckoutTitle: "Direct Farm Checkout",
    shopOrderSuccessTitle: "Order Placed Successfully!",
    shopOrderSuccessDesc: "Your order is confirmed. Details have been sent via WhatsApp.",
    shopFillRequiredFields: "Please fill in all required fields (*)",
    shopFooterTagline: "Smart agriculture. Sustainable future.",
    shopFooterAbout: "Integrating natural biological cultivation with digital IoT telemetry. Empowering modern farming with sustainable inputs and automation.",
    shopFooterCorporateOffice: "CORPORATE OFFICE (JAIPUR)",
    shopFooterPlantWarehouse: "TUDI BALES PLANT & WAREHOUSE (SANGARIA)",
    shopFooterPlantTiming: "Open 24 Hours • One Stop Place For All Tudi Needs",
    shopFooterContactHeading: "Office & Processing Warehouse",
    shopFooterSolutionsHeading: "Solutions",
    shopFooterNavHeading: "Navigation",
    shopCheckDeliveryDesc: "Enter PIN code for estimated dispatch & delivery date",
    shopEnterPincodePlaceholder: "Enter 6-digit PIN (e.g. 302001)",
    shopFreeAbove499: "FREE Above ₹499",
    shopNoProductsDesc: "We couldn't find any products matching your current search terms or filters. Try adjusting your selections.",
    shopResetAllFilters: "Reset All Filters",
    shopPack: "Pack",
    shopCategories: "Categories",
    shopProductTypes: "Product Types",
    shopOtherOptions: "Other Options",
    shopFilterRating: "Customer Rating",
    shopFilterCategory: "Select Category",
    shopFilterProductType: "Select Type",
    shopFilterAvailability: "Availability",
    shopFilterPrice: "Price Range",
    shopProductCountSingle: "Product",
    shopProductCountPlural: "Products",
    shopStore: "Store",
    shopLanguage: "Language",
    shopTheme: "Theme",
    shopLightMode: "Light Mode",
    shopDarkMode: "Dark Mode",
    shopSelectDeliveryLocation: "Select Delivery Location",
    shopHeroTitle: "Agriculture & Organic Products",
    shopNewsletterButton: "Subscribe",
    shopRecentSearches: "Recent Searches",
    shopAddedBadge: "Added!",
    shopLinkCopied: "Product link copied to clipboard!",
    shopTalkToUs: "Talk to us",
    shopSaved: "Saved",
    shopFavourite: "Favourite",
    shopShare: "Share",
    shopMoreInfo: "MORE INFO",
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
    navMore: "अन्य",
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

    // Shop Portal Hindi (Natural, Professional Indian Hindi)
    shopTitle: "कृषि और जैविक उत्पाद",
    shopNavHome: "होम",
    shopNavShop: "शॉप",
    shopNavStore: "स्टोर",
    shopDeliverTo: "डिलीवरी",
    shopSelectLocation: "डिलीवरी स्थान चुनें",
    shopEnterPincode: "पिन कोड दर्ज करें",
    shopApply: "लागू करें",
    shopPopularCities: "लोकप्रिय शहर",
    shopWishlist: "पसंदीदा उत्पाद",
    shopAccount: "खाता एवं सहायता",
    shopCart: "शॉपिंग कार्ट",
    shopCartItems: "आइटम",
    shopCartItem: "आइटम",
    shopTotal: "कुल राशि",
    shopSubtotal: "उप-योग",
    shopShipping: "डिलीवरी शुल्क",
    shopFree: "मुफ़्त",
    shopProceedToCheckout: "चेकआउट करें",
    shopBackToTop: "ऊपर जाएं",
    shopSearchPlaceholder: "उत्पाद खोजें...",
    shopSearchRecent: "हालिया खोजें",
    shopClearAll: "सभी हटाएं",
    shopTrendingSearches: "ट्रेंडिंग खोजें",
    shopRecommendedForYou: "आपके लिए अनुशंसित",
    shopProductMatch: "उत्पाद मिला",
    shopProductMatches: "उत्पाद मिले",
    shopPressEnterToView: "सभी देखने के लिए Enter दबाएं",
    shopViewAllResultsFor: "के लिए सभी परिणाम देखें",
    shopNoProductsFound: "कोई उत्पाद नहीं मिला",
    shopNoProductsFoundFor: "के लिए कोई उत्पाद नहीं मिला",
    shopSearchHelpText: "कृपया वर्तनी जांचें या मशरूम, कुकीज, खाखरा, या अजोला जैसे कीवर्ड खोजें।",
    shopSuggestedSearches: "सुझाई गई खोजें",
    shopCategoryAll: "सभी उत्पाद",
    shopFilter: "फ़िल्टर",
    shopFilterAndSort: "फ़िल्टर और क्रमबद्ध",
    shopCategory: "श्रेणी",
    shopSelectCategory: "श्रेणी चुनें",
    shopProductType: "उत्पाद प्रकार",
    shopSelectType: "प्रकार चुनें",
    shopAvailability: "उपलब्धता",
    shopInStockOnly: "स्टॉक में उपलब्ध",
    shopPrice: "मूल्य",
    shopMaxPrice: "अधिकतम मूल्य:",
    shopRating: "रेटिंग",
    shopCustomerRating: "ग्राहक रेटिंग",
    shopAllRatings: "सभी रेटिंग",
    shopBestSelling: "बेस्ट सेलर",
    shopReset: "रीसेट",
    shopResetAll: "फ़िल्टर रीसेट करें",
    shopClear: "साफ़ करें",
    shopProductsCount: "उत्पाद",
    shopListView: "सूची दृश्य",
    shopGridView: "ग्रिड दृश्य",
    shopSortBy: "क्रम:",
    shopSortFeatured: "अनुशंसित",
    shopSortPriceLow: "मूल्य: कम से अधिक",
    shopSortPriceHigh: "मूल्य: अधिक से कम",
    shopSortRating: "उच्चतम रेटिंग",
    shopSortNameAsc: "नाम: A से Z",
    shopSortNameDesc: "नाम: Z से A",
    shopShowProducts: "उत्पाद दिखाएं",
    shopAddToCart: "कार्ट में जोड़ें",
    shopAddMore: "और जोड़ें",
    shopAdded: "जोड़ा गया!",
    shopOutOfStock: "स्टॉक समाप्त",
    shopBestSeller: "बेस्टसेलर",
    shopOff: "छूट",
    shopQuickView: "त्वरित दृश्य",
    shopReviews: "समीक्षाएं",
    shopSave: "बचत",
    shopNoProductsMatch: "कोई उत्पाद नहीं मिला",
    shopNoProductsMatchDesc: "आपके द्वारा चुने गए फ़िल्टर या खोज शब्दों के अनुसार कोई उत्पाद नहीं मिला। कृपया फ़िल्टर रीसेट करें।",
    shopPaginationShowing: "दिखाए जा रहे हैं",
    shopPaginationOf: "में से कुल",
    shopPaginationProducts: "उत्पाद",
    shopViewAll: "सभी देखें",
    shopTrustFreeShippingTitle: "₹499 से अधिक पर मुफ़्त डिलीवरी",
    shopTrustFreeShippingDesc: "हमारे प्रोसेसिंग प्लांट से सीधे फास्ट पैन-इंडिया डिलीवरी।",
    shopTrustOrganicTitle: "100% शुद्ध एवं जैविक उत्पाद",
    shopTrustOrganicDesc: "बिना किसी हानिकारक केमिकल या प्रिजर्वेटिव के शुद्ध उत्पादन।",
    shopTrustSecureTitle: "सुरक्षित UPI एवं कैश ऑन डिलीवरी",
    shopTrustSecureDesc: "त्वरित पुष्टि के साथ सुविधाजनक भुगतान विकल्प।",
    shopTrustSupportTitle: "सीधा WhatsApp किसान सहायता",
    shopTrustSupportDesc: "+91 73729 26623 पर त्वरित ऑर्डर सहायता और मार्गदर्शन।",
    shopNewsletterTitle: "हमारे किसान एवं ग्राहक क्लब से जुड़ें",
    shopNewsletterDesc: "ताज़ा हार्वेस्टिंग अपडेट, पोषण टिप्स और विशेष छूट सीधे अपने इनबॉक्स में पाएं।",
    shopNewsletterSuccess: "धन्यवाद! आप सब्सक्राइब हो चुके हैं।",
    shopNewsletterPlaceholder: "अपना ईमेल दर्ज करें...",
    shopNewsletterSubscribe: "सब्सक्राइब करें",
    shopVideoReelsTitle: "वीडियो शॉपिंग",
    shopVideoTalkToUs: "बात करें",
    shopVideoFavourite: "पसंद",
    shopVideoSaved: "पसंदीदा",
    shopVideoShare: "शेयर",
    shopVideoLinkCopied: "लिंक कॉपी हो गया!",
    shopVideoMoreInfo: "पूरी जानकारी",
    shopCheckDeliveryTitle: "डिलीवरी और सेवा उपलब्धता जाँचें",
    shopCheckDeliverySubtitle: "अनुमानित डिलीवरी समय और शिपिंग शुल्क देखें",
    shopPincodePlaceholder: "6 अंकों का पिन कोड (उदा. 302001)",
    shopCheck: "जाँचें",
    shopChecking: "जाँच की जा रही है...",
    shopUseCurrentLocation: "मेरे वर्तमान स्थान का उपयोग करें",
    shopDetectingLocation: "स्थान का पता लगाया जा रहा है...",
    shopDeliveryServiceable: "डिलीवरी उपलब्ध है",
    shopDeliveryUnserviceable: "सीधी डिलीवरी अनुपलब्ध",
    shopEstimatedDelivery: "अनुमानित डिलीवरी",
    shopShippingCost: "शिपिंग शुल्क",
    shopCodAvailable: "कैश ऑन डिलीवरी (COD) उपलब्ध है",
    shopPrepaidOnly: "केवल प्रीपेड ऑर्डर",
    shopDeliveryNotServiceableTitle: "इस क्षेत्र में सीधी डिलीवरी उपलब्ध नहीं है",
    shopDeliveryNotServiceableDesc: "हम जल्द ही इस पिन कोड पर विस्तार कर रहे हैं। कृपया दूसरा पिन कोड आज़माएँ या कस्टम फ्रेट के लिए संपर्क करें।",
    shopChange: "बदलें",
    shopEnterValidPincode: "कृपया 6 अंकों का मान्य भारतीय पिन कोड दर्ज करें।",
    shopCartTitle: "आपकी कार्ट",
    shopCartEmpty: "आपकी कार्ट खाली है",
    shopCartEmptyDesc: "हमारे लोकप्रिय ऑर्गेनिक उत्पाद और स्नैक्स नीचे से जोड़ें।",
    shopExploreShop: "दुकान देखें",
    shopFreeDeliveryUnlocked: "🎉 मुफ़्त डिलीवरी अनलॉक हो गई!",
    shopAddMoreForFreeDelivery: "और जोड़ने पर मुफ़्त डिलीवरी",
    shopPopularProducts: "लोकप्रिय उत्पाद",
    shopDirectCheckout: "चेकआउट करें",
    shopTotalAmount: "कुल राशि:",
    shopMobileCartTotal: "कुल राशि",
    shopCheckoutTitle: "डायरेक्ट चेकआउट",
    shopOrderSuccessTitle: "ऑर्डर सफलतापूर्वक दर्ज हो गया!",
    shopOrderSuccessDesc: "आपका ऑर्डर कन्फर्म हो चुका है। विवरण WhatsApp पर भेज दिया गया है।",
    shopFillRequiredFields: "कृपया सभी आवश्यक फ़ील्ड भरें (*)",
    shopFooterTagline: "स्मार्ट कृषि। सतत भविष्य।",
    shopFooterAbout: "प्राकृतिक जैविक खेती और डिजिटल IoT ऑटोमेशन का संयोजन। आधुनिक किसानों और डेयरी फार्मों के लिए विश्वसनीय उत्पाद।",
    shopFooterCorporateOffice: "कॉरपोरेट कार्यालय (जयपुर)",
    shopFooterPlantWarehouse: "तुड़ी बेल्स प्लांट एवं वेयरहाउस (संगरिया)",
    shopFooterPlantTiming: "24 घंटे खुला • सभी तुड़ी आवश्यकताओं के लिए एक स्थान",
    shopFooterContactHeading: "संपर्क एवं केंद्र",
    shopFooterSolutionsHeading: "सॉल्यूशंस",
    shopFooterNavHeading: "नेविगेशन",
    shopCheckDeliveryDesc: "अनुमानित डिलीवरी समय और शिपिंग शुल्क देखें",
    shopEnterPincodePlaceholder: "6 अंकों का पिन कोड दर्ज करें (उदा. 302001)",
    shopFreeAbove499: "₹499 से अधिक पर मुफ़्त",
    shopNoProductsDesc: "आपके द्वारा चुने गए फ़िल्टर या खोज शब्दों के अनुसार कोई उत्पाद नहीं मिला। कृपया फ़िल्टर रीसेट करें।",
    shopResetAllFilters: "फ़िल्टर रीसेट करें",
    shopPack: "पैक",
    shopCategories: "श्रेणियां",
    shopProductTypes: "उत्पाद प्रकार",
    shopOtherOptions: "अन्य विकल्प",
    shopFilterRating: "ग्राहक रेटिंग",
    shopFilterCategory: "श्रेणी चुनें",
    shopFilterProductType: "प्रकार चुनें",
    shopFilterAvailability: "उपलब्धता",
    shopFilterPrice: "मूल्य सीमा",
    shopProductCountSingle: "उत्पाद",
    shopProductCountPlural: "उत्पाद",
    shopStore: "स्टोर",
    shopLanguage: "भाषा",
    shopTheme: "थीम",
    shopLightMode: "लाइट मोड",
    shopDarkMode: "डार्क मोड",
    shopSelectDeliveryLocation: "डिलीवरी स्थान चुनें",
    shopHeroTitle: "कृषि और जैविक उत्पाद",
    shopNewsletterButton: "सब्सक्राइब करें",
    shopRecentSearches: "हालिया खोजें",
    shopAddedBadge: "जोड़ा गया!",
    shopLinkCopied: "लिंक कॉपी हो गया!",
    shopTalkToUs: "बात करें",
    shopSaved: "पसंदीदा",
    shopFavourite: "पसंद",
    shopShare: "शेयर",
    shopMoreInfo: "पूरी जानकारी",
  },
};
