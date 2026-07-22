"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useProducts } from "@/hooks/useProducts";
import { deleteProduct } from "@/services/deleteProduct";

export default function ProductList() {

  const { products, loading } = useProducts();

  async function remove(id: string) {
    await deleteProduct(id);
    toast.success("Producto eliminado");
    window.location.reload();
  }

  if (loading) {
    return (
      <p className="py-10 text-center text-zinc-400">
        Cargando...
      </p>
    );
  }

  return (
    <div className="mt-12 space-y-6">

      {products.map((product: any) => (

        <div
          key={product.id}
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-zinc-900 p-6"
        >

          <div className="flex items-center gap-6">

            <Image
              src={product.image}
              alt={product.name}
              width={90}
              height={90}
              className="rounded-2xl object-cover"
            />

            <div>

              <h2 className="text-xl font-bold text-white">
                {product.name}
              </h2>

              <p className="text-zinc-400">
                ${product.price}
              </p>

            </div>

          </div>

          <button
            onClick={() => remove(product.id)}
            className="rounded-full bg-red-500 p-4 transition hover:scale-110"
          >
            <Trash2 />
          </button>

        </div>

      ))}

    </div>
  );
}