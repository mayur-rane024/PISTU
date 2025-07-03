import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../database/Firebase";
import slugify from "slugify";
import type { Product } from "../types/product";

export const fetchProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  try {
    const snapshot = await getDocs(collection(db, "Products"));
    const products: Product[] = snapshot.docs.map(
      (doc) => doc.data() as Product
    );

    const foundProduct = products.find(
      (p) => slugify(p.name, { lower: true }) === slug
    );

    if (foundProduct?.oldPrice && foundProduct?.price) {
      foundProduct.discount = Math.round(
        ((foundProduct.oldPrice - foundProduct.price) / foundProduct.oldPrice) *
          100
      );
    }

    return foundProduct || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};



export const fetchProductsByFilters = async (
  category: string,
  gender: string = "all",
  maxPrice?: number
): Promise<Product[]> => {
  try {
    const snapshot = await getDocs(collection(db, "Products"));
    let products: Product[] = snapshot.docs.map((doc) => doc.data() as Product);

    // ✅ Filter by category if not "all"
    if (category !== "all") {
      products = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // ✅ Filter by gender
    if (gender !== "all") {
      products = products.filter(
        (product) => product.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    // ✅ Filter by price
    if (typeof maxPrice === "number") {
      products = products.filter((product) => product.price <= maxPrice);
    }

    return products;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return [];
  }
};



