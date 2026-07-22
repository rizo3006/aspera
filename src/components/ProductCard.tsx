"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  // ✅ AQUÍ ADENTRO
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-amber-500">

      <div className="relative h-[420px] overflow-hidden bg-zinc-900">

        <button className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 backdrop-blur">
          <Heart className="h-5 w-5 text-white" />
        </button>

        <Image
          src={product.images?.[0] || ""}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {product.name}
        </h3>

        <p className="mt-2 text-zinc-400">
          {product.category}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="text-2xl font-bold">
            ${product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Agregar
          </button>

        </div>

        <Link
          href={`/shop/${product.slug}`}
          className="mt-4 block text-center text-sm text-amber-400 hover:underline"
        >
          Ver producto
        </Link>

      </div>

    </div>
  );
}