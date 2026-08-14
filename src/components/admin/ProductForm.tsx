"use client";

import { useState } from "react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { toast } from "sonner";
import { uploadImage } from "@/services/storage";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
const [preview, setPreview] = useState("");
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    comparePrice: "",
    category: "",
    type: "",
    brand: "",
     size: "",
     discount: "",
    image: "",
    featured: false,
    stock: "",
    rating: "5",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Selecciona una imagen");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage(imageFile);

      await addDoc(collection(db, "products"), {
        ...product,
        image: imageUrl,
        price: Number(product.price),
        comparePrice: Number(product.comparePrice),
        discount: Number(product.discount),
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
        type: "",
        brand: "",
         size: "",
     discount: "",
        image: "",
        featured: false,
        stock: "",
        rating: "5",
      });

      setImageFile(null);
    } catch (error) {
      toast.error("Error al crear el producto");
      console.error(error);
    }

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
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImageFile(file);

    setPreview(URL.createObjectURL(file));
  }}
  className="w-full rounded-xl bg-zinc-800 p-4"
/>
{preview && (
  <div className="overflow-hidden rounded-2xl border border-white/10">

    <Image
      src={preview}
      alt="Vista previa"
      width={600}
      height={600}
      className="h-72 w-full object-cover"
      unoptimized
    />

  </div>
)}
      <input
  placeholder="Nombre"
  value={product.name}
  onChange={(e) =>
    setProduct({
      ...product,
      name: e.target.value,
      slug: e.target.value
        .toLowerCase()
        .replace(/\s+/g, "-"),
    })
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
/>

      <textarea
        placeholder="Descripción"
        value={product.description}
        onChange={(e) =>
          setProduct({
            ...product,
            description: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Precio"
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: e.target.value })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Precio anterior"
        value={product.comparePrice}
        onChange={(e) =>
          setProduct({
            ...product,
            comparePrice: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />
      <input
  placeholder="Descuento (%)"
  value={product.discount}
  onChange={(e) =>
    setProduct({
      ...product,
      discount: e.target.value,
    })
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
/>

      <select
        value={product.category}
        onChange={(e) =>
          setProduct({
            ...product,
            category: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      >
        <option value="">Categoría</option>
<option value="Playeras">Playeras</option>
<option value="Tenis">Tenis</option>
<option value="Cadenas">Cadenas</option>
<option value="Esclavas">Esclavas</option>
<option value="Accesorios">Accesorios</option>
      </select>
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
  <option value="Playeras">Playeras</option>
  <option value="Cadenas">Cadenas</option>
  <option value="Esclavas">Esclavas</option>
  <option value="Accesorios">Accesorios</option>
</select>

{/* 👇 PÉGALO AQUÍ */}

<select
  value={product.type}
  onChange={(e)=>
    setProduct({
      ...product,
      type: e.target.value,
    })
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
>
  <option value="">Tipo de producto</option>

  <option value="Ropa">Ropa</option>
  <option value="Tenis">Tenis</option>
  <option value="Accesorio">Accesorio</option>
  <option value="Joyería">Joyería</option>
</select>

{/* 👆 Y DESPUÉS SIGUE EL STOCK */}
<input
  placeholder="Talla (S, M, L, XL o 26, 27, 28...)"
  value={product.size || ""}
  onChange={(e) =>
    setProduct({
      ...product,
      size: e.target.value,
    })
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
/>

<input
  placeholder="Stock"
  value={product.stock}
  onChange={(e)=>
    setProduct({...product,stock:e.target.value})
  }
  className="w-full rounded-xl bg-zinc-800 p-4"
/>

      <select
        value={product.type}
        onChange={(e) =>
          setProduct({
            ...product,
            type: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      >
        <option value="">Tipo</option>
        <option value="Templa">Templa</option>
        <option value="Reventa">Reventa</option>
      </select>

      <input
        placeholder="Marca (Nike, Adidas, Templa...)"
        value={product.brand}
        onChange={(e) =>
          setProduct({
            ...product,
            brand: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <input
        placeholder="Stock"
        value={product.stock}
        onChange={(e) =>
          setProduct({
            ...product,
            stock: e.target.value,
          })
        }
        className="w-full rounded-xl bg-zinc-800 p-4"
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={product.featured}
          onChange={(e) =>
            setProduct({
              ...product,
              featured: e.target.checked,
            })
          }
        />

        Destacado
      </label>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-white py-4 font-bold text-black transition hover:bg-amber-500"
      >
        {loading ? "Guardando..." : "Crear Producto"}
      </button>
    </form>
  );
}