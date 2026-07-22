import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function deleteProduct(id: string) {
  await deleteDoc(doc(db, "products", id));
}