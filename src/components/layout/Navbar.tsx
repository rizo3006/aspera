"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDrawer from "@/components/cart/CartDrawer";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Heart,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
<CartDrawer
  open={cartOpen}
  onClose={() => setCartOpen(false)}
/>
  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 lef t-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/images/logo.png"
              alt="ASPERA"
              width={42}
              height={42}
              priority
            />

            <span className="text-xl font-black tracking-[0.25em] text-white">
              ASPERA
            </span>

          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-300">

            <Link
              href="/"
              className="transition duration-300 hover:text-amber-400"
            >
              Inicio
            </Link>

            <Link
              href="/shop"
              className="transition duration-300 hover:text-amber-400"
            >
              Tienda
            </Link>

            <Link
              href="/collections"
              className="transition duration-300 hover:text-amber-400"
            >
              Colecciones
            </Link>

            <Link
              href="/about"
              className="transition duration-300 hover:text-amber-400"
            >
              Nosotros
            </Link>

            <Link
              href="/contact"
              className="transition duration-300 hover:text-amber-400"
            >
              Contacto
            </Link>
            <Link
  href="/admin"
  className="transition duration-300 hover:text-amber-400"
>
  Admin
</Link>

          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-6">

            <button className="transition hover:scale-110 hover:text-amber-400">
              <Search className="h-5 w-5" />
            </button>

            <Link
  href="/favorites"
  className="transition hover:scale-110 hover:text-amber-400"
>
  <Heart className="h-5 w-5" />
</Link>

            <Link
  href="/login"
  className="transition hover:scale-110 hover:text-amber-400"
>
  <User className="h-5 w-5" />
</Link>
            <button className="relative transition hover:scale-110">

              <ShoppingBag className="h-5 w-5" />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}

            </button>

          </div>

          {/* Mobile Button */}
          <button
  onClick={() => setCartOpen(true)}
  className="relative transition hover:scale-110"
>
  <ShoppingBag className="h-5 w-5" />

  {totalItems > 0 && (
    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
      {totalItems}
    </span>
  )}
</button>

        </div>
      </header>

      {/* Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Menu */}
          <aside
            className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-80
            flex-col
            border-l
            border-white/10
            bg-zinc-950
            p-8
            shadow-2xl
            "
          >

            <div className="mb-12 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Image
                  src="/images/logo.png"
                  alt="ASPERA"
                  width={38}
                  height={38}
                />

                <span className="font-black tracking-[0.25em]">
                  ASPERA
                </span>

              </div>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>

            </div>

            <nav className="flex flex-col gap-7 text-lg">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-400"
              >
                Inicio
              </Link>

              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-400"
              >
                Tienda
              </Link>

              <Link
                href="/collections"
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-400"
              >
                Colecciones
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-400"
              >
                Nosotros
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="transition hover:text-amber-400"
              >
                Contacto
              </Link>
              <Link
  href="/admin"
  className="transition duration-300 hover:text-amber-400"
>
  Admin
</Link>

            </nav>

            <div className="mt-auto border-t border-white/10 pt-8">

              <button className="flex w-full items-center justify-center rounded-full bg-white py-4 font-semibold text-black transition hover:scale-105">
                Iniciar sesión
              </button>

            </div>

          </aside>
        </>
      )}
    </>
  );
}