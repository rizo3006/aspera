"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { uploadImage } from "@/services/storage";
import { toast } from "sonner";

interface ProductRow {
  name: string;
  slug: string;
  description: string;
  price: string;
  comparePrice: string;
  category: string;
  type: string;
  brand: string;
  gender: string;
  stock: string;
  rating: string;
  featured: boolean;
  imageFile: File | null;
  preview: string;
}

function createProduct(): ProductRow {
  return {
    name: "",
    slug: "",
    description: "",
    price: "",
    comparePrice: "",
    category: "Tenis",
    type: "",
    brand: "",
    gender: "Unisex",
    stock: "1",
    rating: "5",
    featured: false,
    imageFile: null,
    preview: "",
  };
}

export default function ImportProductsPage() {
  const [products, setProducts] = useState<ProductRow[]>([
    createProduct(),
  ]);

  const [loading, setLoading] = useState(false);

  function addProduct() {
    setProducts((current) => [
      ...current,
      createProduct(),
    ]);
  }

  function removeProduct(index: number) {
    setProducts((current) =>
      current.filter((_, i) => i !== index)
    );
  }

  function updateProduct(
    index: number,
    field: keyof ProductRow,
    value: string | boolean | File | null
  ) {
    setProducts((current) =>
      current.map((product, i) =>
        i === index
          ? {
              ...product,
              [field]: value,
            }
          : product
      )
    );
  }

  function handleImage(
    index: number,
    file: File | null
  ) {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setProducts((current) =>
      current.map((product, i) =>
        i === index
          ? {
              ...product,
              imageFile: file,
              preview,
            }
          : product
      )
    );
  }

  async function handleImport() {
  if (products.length === 0) {
    toast.error("No hay productos");
    return;
  }

  for (const product of products) {
    if (!product.name) {
      toast.error("Falta el nombre de un producto");
      return;
    }

    if (!product.price) {
      toast.error(
        `Falta el precio de ${product.name}`
      );
      return;
    }

    if (!product.imageFile) {
      toast.error(
        `Falta la imagen de ${product.name}`
      );
      return;
    }
  }

  setLoading(true);

  try {
    console.log(
      `Iniciando subida de ${products.length} productos`
    );

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      console.log(
        `Subiendo producto ${i + 1}/${products.length}:`,
        product.name
      );

      // Subir imagen
      const imageUrl = await uploadImage(
        product.imageFile!
      );

      console.log(
        "Imagen subida:",
        imageUrl
      );

      // Crear producto en Firestore
      await addDoc(collection(db, "products"), {
        name: product.name,

        slug:
          product.slug ||
          product.name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, ""),

        description: product.description,

        price: Number(product.price),

        comparePrice: Number(
          product.comparePrice || 0
        ),

        category: product.category,

        type: product.type,

        brand: product.brand,

        image: imageUrl,

        featured: product.featured,

        stock: Number(
          product.stock || 0
        ),

        rating: Number(
          product.rating || 5
        ),
      });

      console.log(
        `Producto ${i + 1} guardado correctamente`
      );
    }

    toast.success(
      `${products.length} producto${
        products.length === 1 ? "" : "s"
      } agregado${
        products.length === 1 ? "" : "s"
      } correctamente`
    );

    setProducts([createProduct()]);

  } catch (error) {
    console.error(
      "ERROR AL SUBIR PRODUCTOS:",
      error
    );

    toast.error(
      "No se pudieron subir los productos. Revisa la consola."
    );

  } finally {
    setLoading(false);
  }
}
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}

        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
              ASPERA ADMIN
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">
              Importar productos
            </h1>

            <p className="mt-3 text-zinc-400">
              Agrega varios productos rápidamente.
            </p>
          </div>

          <button
            type="button"
            onClick={addProduct}
            className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-black transition hover:bg-amber-400"
          >
            + Agregar producto
          </button>

        </div>

        {/* PRODUCTOS */}

        <div className="space-y-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
            >

              {/* TITULO */}

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  Producto #{index + 1}
                </h2>

                {products.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      removeProduct(index)
                    }
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold transition hover:bg-red-500"
                  >
                    Eliminar
                  </button>
                )}

              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {/* IMAGEN */}

                <div className="lg:row-span-2">

                  <label className="block text-sm font-semibold text-zinc-300">
                    Imagen *
                  </label>

                  <label className="mt-2 flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-zinc-900">

                    {product.preview ? (
                      <img
                        src={product.preview}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-zinc-500">
                        <p className="text-4xl">
                          +
                        </p>

                        <p className="mt-2 text-sm">
                          Seleccionar imagen
                        </p>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleImage(
                          index,
                          e.target.files?.[0] ||
                            null
                        )
                      }
                    />

                  </label>

                </div>

                {/* NOMBRE */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Nombre *
                  </label>

                  <input
                    value={product.name}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Nike Jordan 1"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* MARCA */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Marca
                  </label>

                  <input
                    value={product.brand}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "brand",
                        e.target.value
                      )
                    }
                    placeholder="Nike"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* TIPO */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Modelo / Tipo
                  </label>

                  <input
                    value={product.type}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "type",
                        e.target.value
                      )
                    }
                    placeholder="Jordan 1"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* CATEGORIA */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Categoría
                  </label>

                  <select
                    value={product.category}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "category",
                        e.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  >
                    <option value="Tenis">
                      Tenis
                    </option>

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
                </div>

                {/* GENERO */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Para
                  </label>

                  <select
                    value={product.gender}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "gender",
                        e.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  >
                    <option value="Hombre">
                      Hombre
                    </option>

                    <option value="Mujer">
                      Mujer
                    </option>

                    <option value="Unisex">
                      Unisex
                    </option>
                  </select>
                </div>

                {/* PRECIO */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Precio *
                  </label>

                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "price",
                        e.target.value
                      )
                    }
                    placeholder="1500"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />
                </div>

                {/* PRECIO ANTERIOR */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Precio anterior
                  </label>

                  <input
                    type="number"
                    value={product.comparePrice}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "comparePrice",
                        e.target.value
                      )
                    }
                    placeholder="1800"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />
                </div>

                {/* STOCK */}

                <div>
                  <label className="text-sm text-zinc-400">
                    Stock
                  </label>

                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "stock",
                        e.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />
                </div>

                {/* DESCRIPCION */}

                <div className="md:col-span-2 lg:col-span-3">

                  <label className="text-sm text-zinc-400">
                    Descripción
                  </label>

                  <textarea
                    value={product.description}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    placeholder="Descripción del producto..."
                    rows={3}
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* BOTON SUBIR */}

        <div className="mt-10 flex justify-end">

          <button
            type="button"
            onClick={handleImport}
            disabled={loading}
            className="rounded-2xl bg-amber-500 px-10 py-5 text-lg font-black text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Subiendo productos..."
              : `Subir ${products.length} producto${
                  products.length === 1
                    ? ""
                    : "s"
                }`}
          </button>

        </div>

      </div>

    </main>
  );
}