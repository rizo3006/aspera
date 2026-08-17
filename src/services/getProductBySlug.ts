import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";

import { db } from "@/firebase/config";

export async function getProductBySlug(
  slug: string
) {
  try {
    console.log("🔎 Buscando producto:", slug);

    const productsRef = collection(
      db,
      "products"
    );

    const q = query(
      productsRef,
      where("slug", "==", slug),
      limit(1)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log(
        "❌ No se encontró producto con slug:",
        slug
      );

      return null;
    }

    const doc = snapshot.docs[0];

    console.log(
      "✅ Producto encontrado:",
      doc.id
    );

    return {
      id: doc.id,
      ...doc.data(),
    };
  } catch (error) {
    console.error(
      "❌ Error buscando producto:",
      error
    );

    return null;
  }
}