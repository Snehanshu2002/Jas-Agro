import { SHOP_PRODUCTS, ShopProduct } from "./shopProducts";

export interface ShopVideoItem {
  id: string;
  videoSrc: string;
  title: string;
  titleHi: string;
  subtitle?: string;
  subtitleHi?: string;
  productId: string;
  product?: ShopProduct;
}

export const SHOP_VIDEOS: ShopVideoItem[] = [
  {
    id: "video-1",
    videoSrc: "/products/productvideo/hindi_dialague_video.mp4",
    title: "100% Pure Raw Oyster Mushroom Powder",
    titleHi: "100% शुद्ध ऑयस्टर मशरूम पाउडर",
    subtitle: "Sun-Dried Culinary Superfood",
    subtitleHi: "प्राकृतिक विटामिन D व प्रोटीन",
    productId: "shop-6",
  },
  {
    id: "video-2",
    videoSrc: "/products/productvideo/convert_this_to_ugc_product_sh.mp4",
    title: "Vanilla Chocolate Organic Cookies",
    titleHi: "वैनिला चॉकलेट ऑर्गेनिक कुकीज",
    subtitle: "Crunchy & Nutrient Dense",
    subtitleHi: "कुरकुरी व पोषण से भरपूर",
    productId: "shop-1",
  },
  {
    id: "video-3",
    videoSrc: "/products/productvideo/convert_this_to_ugc_product_sh (1).mp4",
    title: "Crispy Savory Chakri Snack",
    titleHi: "कुरकुरी स्वादिष्ट चकली स्नैक",
    subtitle: "Whole Grains & Natural Spices",
    subtitleHi: "साबुत अनाज और प्राकृतिक मसाले",
    productId: "shop-5",
  },
  {
    id: "video-4",
    videoSrc: "/products/productvideo/convert_this_to_ugc_video.mp4",
    title: "Roasted Oyster Mushroom Khakhra",
    titleHi: "रोस्टेड ऑयस्टर मशरूम खाकरा",
    subtitle: "High Protein Whole Wheat Crisp",
    subtitleHi: "हाई प्रोटीन व पौष्टिक स्नैक",
    productId: "shop-4",
  },
  {
    id: "video-5",
    videoSrc: "/products/productvideo/convert_this_to_video.mp4",
    title: "Azolla High-Protein Green Fodder",
    titleHi: "अजोला हरा बायो-सुपरफूड",
    subtitle: "Live Culture For Dairy & Livestock",
    subtitleHi: "दुधारू पशुओं के लिए उत्तम आहार",
    productId: "shop-11",
  },
].map((item) => ({
  ...item,
  product: SHOP_PRODUCTS.find((p) => p.id === item.productId),
}));

