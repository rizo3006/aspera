"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { toast } from "sonner";

interface Product {
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
  image: string;
}

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [product, setProduct] = useState<Product>({
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
    image: "",
  });

  // =========================
  // CARGAR PRODUCTO
  // =========================

  useEffect(() => {
    async function loadProduct() {
      try {
        console.log("Buscando producto:", id);

        const productRef = doc(
          db,
          "products",
          id
        );

        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
          toast.error("Producto no encontrado");
          setLoading(false);
          return;
        }

        const data = snapshot.data();

        setProduct({
          name: data.name || "",
          slug: data.slug || "",
          description: data.description || "",
          price: String(data.price || ""),
          comparePrice: String(
            data.comparePrice || ""
          ),
          category: data.category || "Tenis",
          type: data.type || "",
          brand: data.brand || "",
          gender: data.gender || "Unisex",
          stock: String(data.stock || 0),
          rating: String(data.rating || 5),
          featured: Boolean(data.featured),
          image: data.image || "",
        });

        console.log(
          "Producto cargado correctamente"
        );

      } catch (error) {
        console.error(
          "Error cargando producto:",
          error
        );

        toast.error(
          "No se pudo cargar el producto"
        );

      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  // =========================
  // CAMBIAR DATOS
  // =========================

  function updateField(
    field: keyof Product,
    value: string | boolean
  ) {
    setProduct((current) => ({
      ...current,
      [field]: value,
    }));
  }

  // =========================
  // GUARDAR
  // =========================

  async function handleSave() {
    if (!product.name.trim()) {
      toast.error(
        "El producto necesita un nombre"
      );
      return;
    }

    if (!product.price) {
      toast.error(
        "El producto necesita un precio"
      );
      return;
    }

    setSaving(true);

    try {
      const productRef = doc(
        db,
        "products",
        id
      );

      await updateDoc(productRef, {
        name: product.name,

        slug:
          product.slug ||
          product.name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, ""),

        description:
          product.description,

        price:
          Number(product.price),

        comparePrice:
          Number(
            product.comparePrice || 0
          ),

        category:
          product.category,

        type:
          product.type,

        brand:
          product.brand,

        gender:
          product.gender,

        stock:
          Number(product.stock || 0),

        rating:
          Number(product.rating || 5),

        featured:
          product.featured,
      });

      toast.success(
        "Producto actualizado correctamente"
      );

      setTimeout(() => {
        router.push("/admin/products");
      }, 700);

    } catch (error) {
      console.error(
        "Error actualizando:",
        error
      );

      toast.error(
        "No se pudo actualizar el producto"
      );

    } finally {
      setSaving(false);
    }
  }

  // =========================
  // CARGANDO
  // =========================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-lg text-zinc-400">
          Cargando producto...
        </p>
      </main>
    );
  }

  // =========================
  // PRODUCTO NO ENCONTRADO
  // =========================

  if (!product.name && !product.image) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">

        <h1 className="text-3xl font-black">
          Producto no encontrado
        </h1>

        <button
          onClick={() =>
            router.push("/admin/products")
          }
          className="mt-6 rounded-xl bg-white px-6 py-3 font-bold text-black"
        >
          Volver a productos
        </button>

      </main>
    );
  }

  // =========================
  // PÁGINA
  // =========================

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-5xl">

        {/* REGRESAR */}

        <button
          onClick={() =>
            router.push("/admin/products")
          }
          className="mb-8 rounded-xl bg-zinc-800 px-5 py-3 transition hover:bg-zinc-700"
        >
          ← Regresar
        </button>

        {/* TITULO */}

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            ASPERA ADMIN
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Editar producto
          </h1>

          <p className="mt-3 text-zinc-400">
            Modifica la información del producto.
          </p>

        </div>

        {/* FORMULARIO */}

        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8">

          <div className="grid gap-6 md:grid-cols-2">

            {/* NOMBRE */}

            <div>

              <label className="text-sm text-zinc-400">
                Nombre
              </label>

              <input
                value={product.name}
                onChange={(e) =>
                  updateField(
                    "name",
                    e.target.value
                  )
                }
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
                  updateField(
                    "brand",
                    e.target.value
                  )
                }
                placeholder="Nike"
                className="mt-2 w-full rounded-xl bg-zinc-900 p-4 outline-none focus:ring-2 focus:ring-amber-500"
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
                  updateField(
                    "type",
                    e.target.value
                  )
                }
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
                  updateField(
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
                  updateField(
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
                Precio
              </label>

              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  updateField(
                    "price",
                    e.target.value
                  )
                }
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
                  updateField(
                    "comparePrice",
                    e.target.value
                  )
                }
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
                  updateField(
                    "stock",
                    e.target.value
                  )
                }
                className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
              />

            </div>

          </div>

          {/* DESCRIPCIÓN */}

          <div className="mt-6">

            <label className="text-sm text-zinc-400">
              Descripción
            </label>

            <textarea
              value={product.description}
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              rows={5}
              className="mt-2 w-full rounded-xl bg-zinc-900 p-4"
            />

          </div>

          {/* DESTACADO */}

          <label className="mt-6 flex cursor-pointer items-center gap-3">

            <input
              type="checkbox"
              checked={product.featured}
              onChange={(e) =>
                updateField(
                  "featured",
                  e.target.checked
                )
              }
              className="h-5 w-5 accent-amber-500"
            />

            <span>
              Producto destacado
            </span>

          </label>

          {/* IMAGEN ACTUAL */}

          {product.image && (

            <div className="mt-8">

              <p className="mb-3 text-sm text-zinc-400">
                Imagen actual
              </p>

              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-64 rounded-2xl object-cover"
              />

            </div>

          )}

          {/* GUARDAR */}

          <div className="mt-10 flex justify-end gap-4">

            <button
              type="button"
              onClick={() =>
                router.push(
                  "/admin/products"
                )
              }
              className="rounded-xl bg-zinc-800 px-6 py-4 font-bold transition hover:bg-zinc-700"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-xl bg-amber-500 px-8 py-4 font-black text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Guardando..."
                : "Guardar cambios"}
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}