"use client";

import Image from "next/image";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

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
  const clearCart = useCartStore((state) => state.clearCart);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  function handleRemove(id: string, name: string) {
    removeFromCart(id);

    toast.success("Producto eliminado", {
      description: name,
      duration: 3000,
    });
  }

  function handleBuy() {
    if (items.length === 0) {
      return;
    }

    toast.success("Compra iniciada", {
      description: "Tu pedido está listo para continuar.",
      duration: 3000,
    });
  }

  return (
    <>
      {/* FONDO */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/70
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* CARRITO */}
      <aside
        className={`
          fixed
          right-0
          top-0
          z-[100]
          flex
          h-[100dvh]
          w-full
          max-w-[430px]
          flex-col
          border-l
          border-white/10
          bg-zinc-950
          shadow-2xl
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* HEADER */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-5 sm:p-6">

          <div>
            <h2 className="text-2xl font-black text-white">
              Mi bolsa
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {items.length === 0
                ? "No tienes productos"
                : `${items.length} producto${
                    items.length === 1 ? "" : "s"
                  }`}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
          >
            <X size={22} />
          </button>

        </div>


        {/* PRODUCTOS */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">

          {items.length === 0 ? (

            <div className="flex h-full flex-col items-center justify-center text-center">

              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900">
                <span className="text-3xl">🛍️</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Tu bolsa está vacía
              </h3>

              <p className="mt-2 max-w-xs text-sm text-zinc-500">
                Agrega productos y aparecerán aquí.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-full bg-white px-6 py-3 font-bold text-black"
              >
                Seguir comprando
              </button>

            </div>

          ) : (

            <div className="space-y-4">

              {items.map((item) => (

                <div
                  key={item.id}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-900
                    p-4
                  "
                >

                  <div className="flex gap-4">

                    {/* IMAGEN */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-20
                          w-20
                          shrink-0
                          rounded-xl
                          object-cover
                        "
                      />
                    )}

                    <div className="min-w-0 flex-1">

                      <h3 className="truncate font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-amber-400">
                        ${Number(item.price).toLocaleString()}
                      </p>

                      {/* CANTIDAD */}
                      <div className="mt-4 flex items-center justify-between">

                        <div className="flex items-center gap-2">

                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/10
                              text-white
                              hover:bg-zinc-800
                            "
                          >
                            <Minus size={15} />
                          </button>

                          <span className="w-7 text-center font-bold text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/10
                              text-white
                              hover:bg-zinc-800
                            "
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleRemove(
                              item.id,
                              item.name
                            )
                          }
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* TOTAL */}
        {items.length > 0 && (

          <div className="shrink-0 border-t border-white/10 bg-zinc-950 p-5 sm:p-6">

            <div className="mb-5 flex items-center justify-between">

              <span className="text-zinc-400">
                Total
              </span>

              <span className="text-2xl font-black text-white">
                ${total.toLocaleString()}
              </span>

            </div>

            <button
              type="button"
              onClick={handleBuy}
              className="
                w-full
                rounded-2xl
                bg-white
                py-4
                font-black
                text-black
                transition
                hover:bg-amber-500
                active:scale-[0.98]
              "
            >
              Finalizar compra
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="
                mt-3
                w-full
                py-2
                text-sm
                text-zinc-500
                hover:text-white
              "
            >
              Vaciar bolsa
            </button>

          </div>

        )}

      </aside>
    </>
  );
}