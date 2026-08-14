"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import { toast } from "sonner";

import { useCartStore } from "@/store/cartStore";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import SearchBar from "@/components/shop/SearchBar";
import CategoryFilter from "@/components/shop/CategoryFilter";

export default function FeaturedProducts() {
  const addToCart = useCartStore((state) => state.addToCart);

  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState("featured");

  const filteredProducts = products
  .filter((product: any) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Todos" || product.category === category;

    return matchesSearch && matchesCategory;
})
.sort((a: any, b: any) => {
  switch (sort) {
    case "price-low":
      return a.price - b.price;

    case "price-high":
      return b.price - a.price;

    case "name":
      return a.name.localeCompare(b.name);

    default:
      return 0;
  }
});

  if (loading) {
    return (
      <section className="py-32 text-center">
        <p className="text-lg text-zinc-400">
          Cargando productos...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16">
          <h2 className="text-5xl font-black text-white">
            Productos Destacados
          </h2>

          <p className="mt-4 text-zinc-400">
            Explora nuestra colección premium.
          </p>
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-6 mb-12">
          <div className="mt-6 flex justify-end">

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="rounded-xl bg-zinc-900 px-5 py-3 text-white border border-white/10"
  >
    <option value="featured">
      Destacados
    </option>

    <option value="price-low">
      Precio ↑
    </option>

    <option value="price-high">
      Precio ↓
    </option>

    <option value="name">
      Nombre A-Z
    </option>

  </select>

</div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProducts.map((product: any) => (

            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-amber-500/40
              hover:shadow-2xl
              hover:shadow-amber-500/10
              "
            >

              {/* Imagen */}

              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={String(product.image)}
                  alt={product.name}
                  fill
                  unoptimized
                  className="
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <button
                  onClick={(e) => {
                    e.preventDefault();

                   toast.success("Añadido a favoritos", {
  description: product.name,
  duration: 5000,
});
                  }}
                  className="
                  absolute
                  right-4
                  top-4
                  rounded-full
                  bg-black/60
                  p-3
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-amber-500
                  "
                >
                  <Heart className="h-5 w-5 text-white" />
                </button>

                <div className="absolute left-4 top-4 flex flex-col gap-2">

  {product.featured && (

    <span className="rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-black">
      NUEVO
    </span>

  )}

  {product.comparePrice && (

    <span className="rounded-full bg-red-500 px-4 py-1 text-xs font-bold text-white">
      OFERTA
    </span>

  )}

</div>

              </div>

              {/* Información */}

              <div className="p-6">

                <div className="mb-4 flex items-center gap-2">

                  <div
                    className={`h-2 w-2 rounded-full ${
                      product.stock > 0
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  />

                  <span
                    className={`text-xs font-semibold ${
                      product.stock > 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} disponibles`
                      : "Agotado"}
                  </span>

                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                  {product.category}
                </p>

                <div className="mt-3 flex items-center gap-1">

  {[1, 2, 3, 4, 5].map((star) => (

    <Star
      key={star}
      size={16}
      className={
        star <= product.rating
          ? "fill-amber-400 text-amber-400"
          : "text-zinc-600"
      }
    />

  ))}

  <span className="ml-2 text-xs text-zinc-500">
    ({product.rating}.0)
  </span>

</div>

                <p className="mt-3 line-clamp-2 min-h-[48px] text-sm leading-6 text-zinc-400">
                  {product.description}
                </p>

                <div className="mt-6">

                  <div className="flex items-end justify-between">

  <div>

    {product.comparePrice && (

      <p className="text-sm text-zinc-500 line-through">
        ${product.comparePrice}
      </p>

    )}

    <h3 className="text-3xl font-black text-white">
      ${product.price}
    </h3>

  </div>

  {product.comparePrice && (

    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">

      {Math.round(
        ((product.comparePrice - product.price) /
          product.comparePrice) *
          100
      )}
      % OFF

    </span>

  )}

</div>

                  {product.stock > 0 ? (

                    <button
                      onClick={(e) => {
                        e.preventDefault();

                        addToCart(product);

                        toast.success("Producto agregado", {
  description: product.name,
  duration: 3000,
});
                      }}
                      className="
                      mt-6
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-white
                      py-4
                      font-bold
                      text-black
                      transition-all
                      duration-300
                      hover:bg-amber-500
                      hover:scale-[1.02]
                      hover:shadow-xl
                      hover:shadow-amber-500/20
                      active:scale-95
                      "
                    >
                      <ShoppingBag size={18} />
                      Comprar
                    </button>

                  ) : (

                    <button
                      disabled
                      className="
                      mt-6
                      w-full
                      cursor-not-allowed
                      rounded-2xl
                      bg-zinc-800
                      py-4
                      font-bold
                      text-zinc-500
                      "
                    >
                      Agotado
                    </button>

                  )}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}