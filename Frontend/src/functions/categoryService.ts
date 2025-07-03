import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/Firebase";

export const getCategories = async (): Promise<{ name: string }[]> => {
  const snapshot = await getDocs(collection(db, "Categories"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    if (!data.name || typeof data.name !== "string") {
      throw new Error("Invalid category data");
    }
    return { name: data.name };
  });
};
