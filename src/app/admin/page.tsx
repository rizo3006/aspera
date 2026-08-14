"use client";

import Link from "next/link";
import { useProducts } from "@/hooks/useProducts";

export default function AdminPage() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Cargando...
      </div>
    );
  }

  const totalProducts = products.length;

  const totalInventory = products.reduce(
    (sum: number, product: any) =>
      sum + product.price * product.stock,
    0
  );

  const featuredProducts = products.filter(
    (product: any) => product.featured
  ).length;

  const outOfStock = products.filter(
    (product: any) => product.stock === 0
  ).length;

  const tenis = products.filter(
    (product: any) => product.category === "Tenis"
  ).length;

  const playeras = products.filter(
    (product: any) => product.category === "Playeras"
  ).length;

  const accesorios = products.filter(
    (product: any) =>
      product.category === "Accesorios"
  ).length;

  return (
    <main className="min-h-screen bg-black px-8 py-36 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black">
          Panel de Administración
        </h1>

        <p className="mt-4 text-zinc-400">
          Bienvenido al panel de ASPERA.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              Productos
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {totalProducts}
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              Valor inventario
            </p>

            <h2 className="mt-3 text-4xl font-black">
              ${totalInventory.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              Destacados
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {featuredProducts}
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              Sin stock
            </p>

            <h2 className="mt-3 text-4xl font-black text-red-500">
              {outOfStock}
            </h2>
          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              👟 Tenis
            </p>

            <h2 className="mt-3 text-3xl font-black">
              {tenis}
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              👕 Playeras
            </p>

            <h2 className="mt-3 text-3xl font-black">
              {playeras}
            </h2>
          </div>

          <div className="rounded-3xl bg-zinc-900 p-8">
            <p className="text-zinc-400">
              🎒 Accesorios
            </p>

            <h2 className="mt-3 text-3xl font-black">
              {accesorios}
            </h2>
          </div>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <Link
            href="/admin/products"
            className="rounded-3xl bg-amber-500 p-8 text-center text-xl font-bold text-black transition hover:scale-105"
          >
            Administrar Productos
          </Link>

          <Link
            href="/admin"
            className="rounded-3xl bg-zinc-900 p-8 text-center text-xl font-bold transition hover:border hover:border-white"
          >
            Agregar Producto
          </Link>

          <Link
            href="/shop"
            className="rounded-3xl bg-zinc-900 p-8 text-center text-xl font-bold transition hover:border hover:border-white"
          >
            Ver Tienda
          </Link>

        </div>

      </div>

    </main>
  );
}