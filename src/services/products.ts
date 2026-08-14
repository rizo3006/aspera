import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/firebase/config";

export async function getProducts() {
  const q = query(
    collection(db, "products"),
    orderBy("featured", "desc")
  );

  const snapshot = await getDocs(q);

  const products = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products.sort((a: any, b: any) => {
    if (a.stock === 0 && b.stock > 0) return 1;
    if (b.stock === 0 && a.stock > 0) return -1;
    return 0;
  });
}