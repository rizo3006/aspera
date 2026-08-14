"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { getProduct } from "@/services/getProduct";
import { updateProduct } from "@/services/updateProduct";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getProduct(id as string);

      setProduct(data);

      setLoading(false);
    }

    load();
  }, [id]);

  async function save() {
    if (!product.name) {
      toast.error("Escribe el nombre del producto");
      return;
    }

    setSaving(true);

    try {
      await updateProduct(id as string, {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: Number(product.price),
        comparePrice: Number(product.comparePrice),
        category: product.category,
        image: product.image,
        featured: product.featured,
        stock: Number(product.stock),
        rating: Number(product.rating),
      });

      toast.success("Producto actualizado");

      router.push("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Cargando...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black py-32">
      <div className="mx-auto max-w-3xl px-6">

        <button
          onClick={() => router.back()}
          className="mb-8 rounded-xl bg-zinc-800 px-5 py-3 text-white"
        >
          ← Regresar
        </button>

        <h1 className="mb-10 text-5xl font-black text-white">
          Editar Producto
        </h1>

        <div className="space-y-5 rounded-3xl bg-zinc-900 p-8">

          <input
            placeholder="Nombre"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          />

          <input
            placeholder="Slug"
            value={product.slug}
            onChange={(e) =>
              setProduct({
                ...product,
                slug: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
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
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          />

          <input
            type="number"
            placeholder="Precio"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          />

          <input
            type="number"
            placeholder="Precio anterior"
            value={product.comparePrice}
            onChange={(e) =>
              setProduct({
                ...product,
                comparePrice: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          />

          <select
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          >
            <option value="Playeras">Playeras</option>
            <option value="Tenis">Tenis</option>
            <option value="Cadenas">Cadenas</option>
            <option value="Esclavas">Esclavas</option>
            <option value="Accesorios">Accesorios</option>
          </select>

          <input
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={(e) =>
              setProduct({
                ...product,
                stock: e.target.value,
              })
            }
            className="w-full rounded-xl bg-zinc-800 p-4 text-white"
          />

          <label className="flex items-center gap-3 text-white">
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

            Producto destacado
          </label>

          <button
            onClick={save}
            disabled={saving}
            className="w-full rounded-xl bg-amber-500 py-4 font-bold text-black transition hover:bg-amber-400"
          >
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>

        </div>

      </div>
    </main>
  );
}