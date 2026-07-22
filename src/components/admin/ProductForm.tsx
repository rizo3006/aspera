"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { toast } from "sonner";
import { uploadImage } from "@/services/storage";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    comparePrice: "",
    category: "",
    image: "",
    featured: false,
    stock: "",
    rating: "5",
  });
const [imageFile, setImageFile] = useState<File | null>(null);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
if (!imageFile) {
  toast.error("Selecciona una imagen");
  setLoading(false);
  return;
}

const imageUrl = await uploadImage(imageFile);
    await addDoc(collection(db, "products"), {
      ...product,
      image: imageUrl,
      price: Number(product.price),
      comparePrice: Number(product.comparePrice),
      stock: Number(product.stock),
      rating: Number(product.rating),
    });

    toast.success("Producto creado");

    setProduct({
      name: "",
      slug: "",
      description: "",
      price: "",
      comparePrice: "",
      category: "",
      image: "",
      featured: false,
      stock: "",
      rating: "5",
    });

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl bg-zinc-900 p-8"
    >

      <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImageFile(e.target.files?.[0] || null)
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
/>

      <input
        placeholder="Slug"
        value={product.slug}
        onChange={(e)=>
          setProduct({...product,slug:e.target.value})
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <textarea
        placeholder="Descripción"
        value={product.description}
        onChange={(e)=>
          setProduct({...product,description:e.target.value})
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Precio"
        value={product.price}
        onChange={(e)=>
          setProduct({...product,price:e.target.value})
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Precio anterior"
        value={product.comparePrice}
        onChange={(e)=>
          setProduct({...product,comparePrice:e.target.value})
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <select
  value={product.category}
  onChange={(e)=>
    setProduct({
      ...product,
      category: e.target.value,
    })
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
>

  <option value="">Categoría</option>

  <option value="Playeras">
    Playeras
  </option>

  <option value="Cadenas">
    Cadenas
  </option>

  <option value="Esclavas">
    Esclavas
  </option>

  <option value="Accesorios">
    Accesorios
  </option>

</select>


      <input
        placeholder="Stock"
        value={product.stock}
        onChange={(e)=>
          setProduct({...product,stock:e.target.value})
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={product.featured}
          onChange={(e)=>
            setProduct({...product,featured:e.target.checked})
          }
        />

        Destacado

      </label>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-white py-4 font-bold text-black"
      >
        {loading ? "Guardando..." : "Crear Producto"}
      </button>

    </form>
  );
}