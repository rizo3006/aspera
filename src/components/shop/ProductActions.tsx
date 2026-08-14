"use client";

import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import type { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductActions({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="mt-10 space-y-4">

      <button
        onClick={() => {
          addToCart(product);

          toast.success("Producto agregado al carrito");
        }}
        className="
        w-full
        rounded-2xl
        bg-white
        py-5
        text-lg
        font-black
        text-black
        transition
        hover:scale-[1.02]
        "
      >
        Agregar al carrito
      </button>

      <button
        className="
        w-full
        rounded-2xl
        bg-amber-500
        py-5
        text-lg
        font-black
        text-black
        transition
        hover:scale-[1.02]
        "
      >
        Comprar ahora
      </button>

    </div>
  );
}