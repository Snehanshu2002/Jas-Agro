import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { SHOP_PRODUCTS } from "@/data/shopProducts";
import { BLOG_POSTS } from "@/data/insights";
import { SOLUTION_DETAILS } from "@/data/solutionsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jasagro.com";

  const staticRoutes = [
    "",
    "/about",
    "/solutions",
    "/products",
    "/technology",
    "/sustainability",
    "/insights",
    "/contact",
    "/shop",
    "/shop/favourites",
    "/privacy",
    "/terms",
    "/sitemap",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/shop" ? 0.9 : 0.8,
  }));

  const solutionRoutes = Object.keys(SOLUTION_DETAILS).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const b2bProductRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const shopProductRoutes = SHOP_PRODUCTS.map((prod) => ({
    url: `${baseUrl}/shop/product/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...b2bProductRoutes,
    ...shopProductRoutes,
    ...blogRoutes,
  ];
}
