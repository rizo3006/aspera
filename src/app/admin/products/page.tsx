"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";
import Image from "next/image";
import { deleteProduct } from "@/services/deleteProduct";
import { duplicateProduct } from "@/services/duplicateProduct";
import { toast } from "sonner";

export default function AdminProductsPage() {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product: any) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  async function handleDuplicate(id: string) {
    try {
      await duplicateProduct(id);

      toast.success("Producto duplicado");

      window.location.reload();
    } catch {
      toast.error("Error al duplicar");
    }
  }

  async function handleDelete(id: string) {
    const ok = confirm("¿Eliminar este producto?");

    if (!ok) return;

    try {
      await deleteProduct(id);

      toast.success("Producto eliminado");

      window.location.reload();
    } catch {
      toast.error("No se pudo eliminar");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Cargando productos...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

  <h1 className="text-5xl font-black">
    Productos
  </h1>

  <div className="flex flex-col gap-3 sm:flex-row">

    <Link
      href="/admin/products/import"
      className="rounded-xl bg-amber-500 px-6 py-3 text-center font-bold text-black transition hover:bg-amber-400"
    >
      Importar productos
    </Link>

    <Link
  href="/admin/products/new"
  className="rounded-xl bg-white px-6 py-3 text-center font-bold text-black transition hover:bg-zinc-200"
>
  Nuevo Producto
</Link>

  </div>

</div>

        <div className="overflow-hidden rounded-3xl border border-white/10">

          <table className="w-full">

            <thead className="bg-zinc-900">

              <tr>
                <th className="p-5 text-left">Imagen</th>
                <th className="text-left">Producto</th>
                <th className="text-left">Precio</th>
                <th className="text-left">Stock</th>
                <th className="text-left">Acciones</th>
              </tr>

            </thead>

            <tbody>

              {filteredProducts.map((product: any) => (

                <tr
                  key={product.id}
                  className="border-t border-white/10"
                >

                  <td className="p-5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover"
                    />
                  </td>

                  <td>
                    <p className="font-bold">{product.name}</p>

                    <p className="text-sm text-zinc-400">
                      {product.category}
                    </p>
                  </td>

                  <td>

                    <div>

                      <p className="text-lg font-bold">
                        ${Number(product.price).toLocaleString()}
                      </p>

                      {product.comparePrice > 0 && (

                        <p className="text-sm text-zinc-500 line-through">
                          ${Number(product.comparePrice).toLocaleString()}
                        </p>

                      )}

                    </div>

                  </td>

                  <td>

                    {product.stock > 10 ? (

                      <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold">
                        {product.stock} disponibles
                      </span>

                    ) : product.stock > 0 ? (

                      <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-black">
                        {product.stock} restantes
                      </span>

                    ) : (

                      <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold">
                        Agotado
                      </span>

                    )}

                  </td>

                  <td>

                    <div className="flex gap-3">

                      <Link
                        href={`/admin/edit/${product.id}`}
                        className="rounded-lg bg-amber-500 px-4 py-2 text-black"
                      >
                        Editar
                      </Link>

                      <button
                        onClick={() => handleDuplicate(product.id)}
                        className="rounded-lg bg-blue-600 px-4 py-2"
                      >
                        Duplicar
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="rounded-lg bg-red-600 px-4 py-2"
                      >
                        Eliminar
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}