import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function getProduct(id: string) {
  const docRef = doc(db, "products", id);

  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    return null;
  }

  return {
    id: snap.id,
    ...snap.data(),
  };
}