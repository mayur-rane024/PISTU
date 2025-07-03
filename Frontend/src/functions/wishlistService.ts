import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../database/Firebase";
import type { wishlistItem } from "../types/wishlistItem";

// Add item to cart
export const addToWishlist = async (item: wishlistItem) => {
  try {
    const wishListRef = collection(db, "Wishlist");
    await addDoc(wishListRef, item);
    return true;
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    return false;
  }
};

// Get all cart items
export const getWishListItems = async () => {
  const snapshot = await getDocs(collection(db, "Wishlist"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Remove item from cart
export const removeFromWishlist = async (docId: string) => {
  await deleteDoc(doc(db, "Wishlist", docId));
};
