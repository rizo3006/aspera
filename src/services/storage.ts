import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/firebase/config";

export async function uploadImage(
  file: File
): Promise<string> {
  if (!file) {
    throw new Error("No se recibió ninguna imagen");
  }

  const extension =
    file.name.split(".").pop() || "jpg";

  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 10)}.${extension}`;

  const storageRef = ref(
    storage,
    `products/${fileName}`
  );

  console.log("📤 Subiendo imagen a Firebase Storage...");
  console.log("Archivo:", file.name);
  console.log("Tamaño:", file.size);
  console.log("Ruta:", `products/${fileName}`);

  const snapshot = await uploadBytes(
    storageRef,
    file
  );

  console.log("✅ Imagen subida");

  const url = await getDownloadURL(
    snapshot.ref
  );

  console.log("✅ URL obtenida:", url);

  return url;
}