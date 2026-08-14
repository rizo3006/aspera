import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/firebase/config";

export async function uploadImage(file: File) {
  if (!file) {
    throw new Error("No se seleccionó ninguna imagen");
  }

  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(
    storage,
    `products/${fileName}`
  );

  console.log("Subiendo imagen:", file.name);

  await uploadBytes(storageRef, file);

  console.log("Imagen subida correctamente");

  const url = await getDownloadURL(storageRef);

  console.log("URL obtenida:", url);

  return url;
}