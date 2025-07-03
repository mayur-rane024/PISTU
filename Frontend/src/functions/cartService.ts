import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../database/Firebase";
import type { CartItem } from "../types/cartItem";

// Add item to cart
export const addToCart = async (item: CartItem) => {
  try {
    const cartRef = collection(db, "Cart");
    await addDoc(cartRef, item);
    return true;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return false;
  }
};

// Get all cart items
export const getCartItems = async () => {
  const snapshot = await getDocs(collection(db, "Cart"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Remove item from cart
export const removeFromCart = async (docId: string) => {
  await deleteDoc(doc(db, "Cart", docId));
};
