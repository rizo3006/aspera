"use client";

import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/70 transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[420px] flex-col border-l border-white/10 bg-zinc-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-2xl font-black">
            Carrito
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {items.length === 0 && (
            <p className="text-zinc-400">
              Tu carrito está vacío.
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
            >
              <h3 className="text-lg font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-zinc-400">
                ${item.price}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-zinc-800"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="w-6 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:bg-zinc-800"
                  >
                    <Plus size={15} />
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 transition hover:scale-110"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-6">

          <div className="mb-6 flex justify-between text-xl font-bold">

            <span>Total</span>

            <span>${total}</span>

          </div>

          <button className="w-full rounded-full bg-white py-4 font-bold text-black transition hover:scale-105">
            Finalizar compra
          </button>

        </div>
      </aside>
    </>
  );
}