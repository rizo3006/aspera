import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";
import { v4 as uuid } from "uuid";

export async function uploadImage(file: File) {
  const imageRef = ref(storage, `products/${uuid()}-${file.name}`);

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}