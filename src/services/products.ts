import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/firebase/config";

export async function getProducts() {
  try {
    console.log("🔎 Consultando Firestore...");

    const snapshot = await getDocs(
      collection(db, "products")
    );

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(
      `✅ Firestore devolvió ${products.length} productos`
    );

    return products;
  } catch (error) {
    console.error(
      "❌ Error consultando Firestore:",
      error
    );

    throw error;
  }
}