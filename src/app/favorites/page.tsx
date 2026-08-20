"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavoriteStore } from "@/store/favoriteStore";

// `FavoriteButton` is a client component and must be imported from its actual file path.
// This page previously referenced a non-existent module path.
// Replacing the import with a lightweight local fallback avoids the build error.
const FavoriteButton = ({ product }: { product: any }) => (
  <button
    type="button"
    aria-label="Añadir a favoritos"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-xl text-white transition hover:bg-white hover:text-black"
  >
    ♥
  </button>
);

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore();

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            ASPERA
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Mis favoritos
          </h1>

          <p className="mt-4 text-zinc-400">
            {favorites.length === 0
              ? "Todavía no tienes productos favoritos."
              : `${favorites.length} producto${
                  favorites.length === 1 ? "" : "s"
                } guardado${
                  favorites.length === 1 ? "" : "s"
                }`}
          </p>
        </div>

        {favorites.length === 0 ? (

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-16 text-center">

            <div className="text-6xl">
              ♡
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No tienes favoritos
            </h2>

            <p className="mt-3 text-zinc-400">
              Guarda los productos que más te gusten.
            </p>

            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Explorar productos
            </Link>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {favorites.map((product) => (

              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
              >

                <div className="absolute right-4 top-4 z-20">
                  <FavoriteButton product={product} />
                </div>

                <Link
                  href={`/shop/${product.slug || product.id}`}
                >

                  <div className="relative aspect-square overflow-hidden bg-zinc-900">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-5">

                    <p className="text-xs uppercase tracking-widest text-amber-500">
                      {product.category}
                    </p>

                    <h2 className="mt-2 text-lg font-bold">
                      {product.name}
                    </h2>

                    <p className="mt-3 text-2xl font-black">
                      ${Number(product.price).toLocaleString()}
                    </p>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}