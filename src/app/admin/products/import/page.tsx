"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { toast } from "sonner";

interface ProductRow {
  name: string;
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
  image: string;
}

function createProduct(): ProductRow {
  return {
    name: "",
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
    image: "",
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
    value: string | boolean
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

  async function handleImport() {
    if (products.length === 0) {
      toast.error("No hay productos");
      return;
    }

    for (const product of products) {
      if (!product.name.trim()) {
        toast.error("Falta el nombre de un producto");
        return;
      }

      if (!product.price) {
        toast.error(
          `Falta el precio de ${product.name}`
        );
        return;
      }

      if (!product.image.trim()) {
        toast.error(
          `Falta la imagen de ${product.name}`
        );
        return;
      }
    }

    setLoading(true);

    try {
      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        console.log(
          `Guardando producto ${i + 1}/${products.length}:`,
          product.name
        );

        const slug = product.name
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

        await addDoc(collection(db, "products"), {
          name: product.name.trim(),

          slug,

          description:
            product.description.trim(),

          price: Number(product.price),

          comparePrice:
            Number(product.comparePrice) || 0,

          category:
            product.category,

          type:
            product.type.trim(),

          brand:
            product.brand.trim(),

          gender:
            product.gender,

          image:
            product.image.trim(),

          featured:
            product.featured,

          stock:
            Number(product.stock) || 0,

          rating:
            Number(product.rating) || 5,

          createdAt:
            new Date().toISOString(),
        });

        console.log(
          `Producto guardado: ${product.name}`
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
        "ERROR AL GUARDAR PRODUCTOS:",
        error
      );

      toast.error(
        "No se pudieron guardar los productos."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-7xl">

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

        <div className="space-y-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
            >

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
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold"
                  >
                    Eliminar
                  </button>
                )}

              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {/* IMAGEN */}

                <div className="lg:row-span-2">

                  <label className="text-sm text-zinc-400">
                    Ruta de imagen *
                  </label>

                  <input
                    value={product.image}
                    onChange={(e) =>
                      updateProduct(
                        index,
                        "image",
                        e.target.value
                      )
                    }
                    placeholder="/products/nike-air-max.jpg"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />

                  {product.image && (
                    <div className="mt-4 overflow-hidden rounded-2xl bg-zinc-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  )}

                  <p className="mt-3 text-xs text-zinc-500">
                    La imagen debe estar dentro de
                    public/products
                  </p>

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
                    placeholder="Nike Air Max"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
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
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
                  />
                </div>

                {/* MODELO */}

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
                    placeholder="Air Max"
                    className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
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

        <div className="mt-10 flex justify-end">

          <button
            type="button"
            onClick={handleImport}
            disabled={loading}
            className="rounded-2xl bg-amber-500 px-10 py-5 text-lg font-black text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Guardando productos..."
              : `Guardar ${products.length} producto${
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