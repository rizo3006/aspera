"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

interface ProductActionsProps {
  product: any;
}

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const [adding, setAdding] = useState(false);

  function handleAddToCart() {
    if (product.stock <= 0) {
      toast.error("Producto agotado");
      return;
    }

    setAdding(true);

    addToCart(product);

    toast.success("Producto agregado al carrito", {
      description: product.name,
      duration: 3000,
    });

    setTimeout(() => {
      setAdding(false);
    }, 300);
  }

  function handleBuyNow() {
    if (product.stock <= 0) {
      toast.error("Producto agotado");
      return;
    }

    addToCart(product);

    toast.success("Producto agregado al carrito", {
      description: "Abriendo carrito...",
      duration: 3000,
    });

    window.dispatchEvent(
      new CustomEvent("open-cart")
    );
  }

  return (
    <div className="mt-10 space-y-4">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={
          adding || product.stock <= 0
        }
        className="w-full rounded-2xl bg-white py-5 text-lg font-black text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {product.stock <= 0
          ? "Agotado"
          : adding
          ? "Agregando..."
          : "Agregar al carrito"}
      </button>

      <button
        type="button"
        onClick={handleBuyNow}
        disabled={product.stock <= 0}
        className="w-full rounded-2xl bg-amber-500 py-5 text-lg font-black text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Comprar ahora
      </button>
    </div>
  );
}