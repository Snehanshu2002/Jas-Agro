import { ShopProduct, SHOP_PRODUCTS } from "@/data/shopProducts";

export interface SearchMatchResult {
  product: ShopProduct;
  score: number;
  matchedField: "title" | "titleHi" | "category" | "description" | "tags";
}

export const POPULAR_SEARCH_TERMS = [
  "Oyster Mushrooms",
  "Khakhra Methi",
  "Multigrain Cookies",
  "Mushroom Powder",
  "Azolla Fodder",
  "Vanilla Chocolate Biscuit",
  "Moringa Paratha",
];

// Common typo corrections & phonetic synonyms for agricultural e-commerce products
const TYPO_SYNONYMS: Record<string, string[]> = {
  mushroom: ["mushrom", "mushroms", "mushrooms", "musrhoom", "dhingri", "dhingari", "mush", "oyster"],
  biscuit: ["biscut", "biscit", "biscuits", "cookie", "cookies", "bisc", "biskit"],
  khakhra: ["khakra", "khakhara", "khakraa", "khakhra", "khakh"],
  azolla: ["azola", "azoola", "azollaa", "azol"],
  paratha: ["parata", "pratha", "parotha"],
  moringa: ["moriga", "sahjan", "moringo", "drumstick"],
  vanilla: ["vanila", "vanilaa"],
  chocolate: ["choclate", "choclet", "choco", "chocolat"],
  powder: ["powdr", "poudar", "puder"],
  khatai: ["nankhatai", "naankhatai", "nan khatai", "khataee", "khati", "khatai"],
  naan: ["nan", "nann", "naankhatai", "nankhatai"],
  cookies: ["cookie", "biscuit", "biscuits", "biscut"],
  spawn: ["seed", "seeds", "beej", "spwan"],
};

// Levenshtein edit distance for basic typo tolerance
function levenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Check if query token matches a target word (substring, prefix, synonym, or typo distance)
function isTokenMatch(token: string, targetWord: string): boolean {
  const t = token.toLowerCase();
  const w = targetWord.toLowerCase();

  // Exact or substring match
  if (w.includes(t) || t.includes(w)) {
    return true;
  }

  // Check synonym dictionary
  for (const [canonical, typos] of Object.entries(TYPO_SYNONYMS)) {
    if (canonical.includes(w) || w.includes(canonical)) {
      if (typos.some((typo) => typo.includes(t) || t.includes(typo))) {
        return true;
      }
    }
    if (typos.includes(t) && (w.includes(canonical) || canonical.includes(w))) {
      return true;
    }
    if (typos.includes(w) && typos.includes(t)) {
      return true;
    }
  }

  // Edit distance check for words of length >= 4
  if (t.length >= 4 && w.length >= 4) {
    const maxDistance = t.length >= 7 ? 2 : 1;
    if (levenshteinDistance(t, w) <= maxDistance) {
      return true;
    }
  }

  return false;
}

// Perform instant smart search over SHOP_PRODUCTS
export function searchProducts(query: string): SearchMatchResult[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const results: SearchMatchResult[] = [];

  for (const product of SHOP_PRODUCTS) {
    let score = 0;
    let matchedField: SearchMatchResult["matchedField"] = "title";

    const titleLower = product.title.toLowerCase();
    const titleHiLower = product.titleHi ? product.titleHi.toLowerCase() : "";
    const slugLower = product.slug ? product.slug.toLowerCase().replace(/-/g, " ") : "";
    const catLower = product.category.toLowerCase();
    const catHiLower = product.categoryHi ? product.categoryHi.toLowerCase() : "";
    const descLower = product.description.toLowerCase();
    const descHiLower = product.descriptionHi ? product.descriptionHi.toLowerCase() : "";

    const titleWords = titleLower.split(/[\s-]+/);
    const slugWords = slugLower.split(/[\s-]+/);
    const catWords = catLower.split(/[\s-&]+/);
    const descWords = descLower.split(/[\s,.-]+/);

    // 1. Direct Full Phrase / Exact Substring Check
    if (titleLower.includes(trimmed)) {
      score += 120;
      matchedField = "title";
    } else if (titleHiLower && titleHiLower.includes(trimmed)) {
      score += 110;
      matchedField = "titleHi";
    } else if (slugLower.includes(trimmed)) {
      score += 100;
      matchedField = "title";
    }

    // 2. Multi-Token Matching
    let allTokensMatch = true;

    for (const token of tokens) {
      let tokenMatched = false;

      // Title exact or prefix
      if (titleLower.includes(token)) {
        score += 50;
        matchedField = "title";
        tokenMatched = true;
      } else if (titleHiLower && titleHiLower.includes(token)) {
        score += 45;
        matchedField = "titleHi";
        tokenMatched = true;
      } else if (slugLower.includes(token)) {
        score += 40;
        matchedField = "title";
        tokenMatched = true;
      } else if (titleWords.some((tw) => isTokenMatch(token, tw)) || slugWords.some((sw) => isTokenMatch(token, sw))) {
        score += 35;
        matchedField = "title";
        tokenMatched = true;
      } else if (catLower.includes(token) || (catHiLower && catHiLower.includes(token))) {
        score += 25;
        matchedField = "category";
        tokenMatched = true;
      } else if (catWords.some((cw) => isTokenMatch(token, cw))) {
        score += 20;
        matchedField = "category";
        tokenMatched = true;
      } else if (descLower.includes(token) || (descHiLower && descHiLower.includes(token))) {
        score += 10;
        matchedField = "description";
        tokenMatched = true;
      } else if (descWords.some((dw) => isTokenMatch(token, dw))) {
        score += 8;
        matchedField = "description";
        tokenMatched = true;
      }

      if (!tokenMatched) {
        allTokensMatch = false;
        break;
      }
    }

    if ((allTokensMatch || score >= 100) && score > 0) {
      // Prioritize in-stock items slightly
      if (!product.outOfStock) score += 5;
      if (product.isPopular) score += 3;

      results.push({
        product,
        score,
        matchedField,
      });
    }
  }

  // Sort by highest relevance score
  return results.sort((a, b) => b.score - a.score);
}

// Manage Recent Searches in LocalStorage
const RECENT_SEARCHES_KEY = "jas_agro_recent_searches";
const MAX_RECENT_SEARCHES = 5;

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_RECENT_SEARCHES) : [];
  } catch {
    return [];
  }
}

export function saveRecentSearch(term: string): string[] {
  if (typeof window === "undefined") return [];
  const cleaned = term.trim();
  if (!cleaned) return getRecentSearches();

  try {
    const current = getRecentSearches();
    const updated = [cleaned, ...current.filter((t) => t.toLowerCase() !== cleaned.toLowerCase())].slice(
      0,
      MAX_RECENT_SEARCHES
    );
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function removeRecentSearch(termToRemove: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getRecentSearches();
    const updated = current.filter((t) => t.toLowerCase() !== termToRemove.toLowerCase());
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function clearAllRecentSearches(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch {
    // safe fallback
  }
}

// Text highlighting helper for search suggestions
export function highlightMatchText(text: string, query: string): { text: string; isMatch: boolean }[] {
  if (!query.trim() || !text) {
    return [{ text, isMatch: false }];
  }

  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const regexPattern = `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`;
  const regex = new RegExp(regexPattern, "gi");

  const parts = text.split(regex);
  return parts.map((part) => ({
    text: part,
    isMatch: tokens.some((t) => part.toLowerCase() === t.toLowerCase()),
  }));
}
