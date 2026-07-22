"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-36 text-white">

      <div className="mx-auto max-w-7xl">

        <h1 className="text-5xl font-black">
          Panel de Administración
        </h1>

        <p className="mt-4 text-zinc-400">
          Administra todos los productos de ASPERA.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          <Link
            href="/admin/products"
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-amber-500"
          >
            <h2 className="text-2xl font-bold">
              Productos
            </h2>

            <p className="mt-3 text-zinc-400">
              Crear, editar y eliminar productos.
            </p>
          </Link>

          <Link
            href="/admin/orders"
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-amber-500"
          >
            <h2 className="text-2xl font-bold">
              Pedidos
            </h2>

            <p className="mt-3 text-zinc-400">
              Ver pedidos de clientes.
            </p>
          </Link>

          <Link
            href="/admin/users"
            className="rounded-3xl border border-white/10 bg-zinc-900 p-8 transition hover:border-amber-500"
          >
            <h2 className="text-2xl font-bold">
              Usuarios
            </h2>

            <p className="mt-3 text-zinc-400">
              Administrar clientes.
            </p>
          </Link>

        </div>

      </div>

    </main>
  );
}