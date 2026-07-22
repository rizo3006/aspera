import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function updateProduct(
  id: string,
  data: any
) {
  await updateDoc(doc(db, "products", id), data);
}