import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function duplicateProduct(id: string) {
  const ref = doc(db, "products", id);

  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  const data = snap.data();

  await addDoc(collection(db, "products"), {
    ...data,
    name: `${data.name} (Copia)`,
    slug: `${data.slug}-${Date.now()}`,
  });
}