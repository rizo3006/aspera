"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Heart,
} from "lucide-react";

import CartDrawer from "@/components/cart/CartDrawer";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  function openCart() {
    setCartOpen(true);
    setOpen(false);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="ASPERA"
              width={42}
              height={42}
              priority
            />

            <span className="text-lg font-black tracking-[0.25em] text-white sm:text-xl">
              ASPERA
            </span>
          </Link>


          {/* PC */}

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 lg:flex">

            <Link href="/" className="hover:text-amber-400">
              Inicio
            </Link>

            <Link href="/shop" className="hover:text-amber-400">
              Tienda
            </Link>

            <Link
              href="/collections"
              className="hover:text-amber-400"
            >
              Colecciones
            </Link>

            <Link href="/about" className="hover:text-amber-400">
              Nosotros
            </Link>

            <Link
              href="/contact"
              className="hover:text-amber-400"
            >
              Contacto
            </Link>

            <Link
              href="/admin"
              className="hover:text-amber-400"
            >
              Admin
            </Link>

          </nav>


          {/* ICONOS PC */}

          <div className="hidden items-center gap-5 lg:flex">

            <button
              type="button"
              className="hover:text-amber-400"
            >
              <Search size={20} />
            </button>

            <Link
              href="/favorites"
              className="hover:text-amber-400"
              aria-label="Favoritos"
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/login"
              className="hover:text-amber-400"
              aria-label="Cuenta"
            >
              <User size={20} />
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="relative hover:text-amber-400"
              aria-label="Abrir bolsa"
            >

              <ShoppingBag size={20} />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}

            </button>

          </div>


          {/* CELULAR */}

          <div className="flex items-center gap-5 lg:hidden">

            {/* CARRITO */}

            <button
              type="button"
              onClick={openCart}
              className="relative text-white"
              aria-label="Abrir bolsa"
            >

              <ShoppingBag size={24} />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
                  {totalItems}
                </span>
              )}

            </button>


            {/* MENU */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-white"
              aria-label="Abrir menú"
            >
              <Menu size={28} />
            </button>

          </div>

        </div>

      </header>


      {/* MENU MOVIL */}

      {open && (

        <>

          <div
            onClick={closeMenu}
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm"
          />


          <aside
            className="
              fixed
              right-0
              top-0
              z-[80]
              flex
              h-[100dvh]
              w-full
              max-w-sm
              flex-col
              border-l
              border-white/10
              bg-zinc-950
              p-6
              shadow-2xl
            "
          >

            {/* HEADER MENU */}

            <div className="flex items-center justify-between">

              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >

                <Image
                  src="/images/logo.png"
                  alt="ASPERA"
                  width={38}
                  height={38}
                />

                <span className="font-black tracking-[0.25em]">
                  ASPERA
                </span>

              </Link>


              <button
                type="button"
                onClick={closeMenu}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  hover:bg-white
                  hover:text-black
                "
                aria-label="Cerrar menú"
              >
                <X size={22} />
              </button>

            </div>


            {/* LINKS */}

            <nav className="mt-12 flex flex-col gap-6 text-lg">

              <Link
                href="/"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Inicio
              </Link>

              <Link
                href="/shop"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Tienda
              </Link>

              <Link
                href="/collections"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Colecciones
              </Link>


              {/* FAVORITOS */}

              <Link
                href="/favorites"
                onClick={closeMenu}
                className="flex items-center gap-3 hover:text-amber-400"
              >
                <Heart size={20} />
                Favoritos
              </Link>


              {/* BOLSA */}

              <button
                type="button"
                onClick={openCart}
                className="flex items-center gap-3 text-left hover:text-amber-400"
              >
                <ShoppingBag size={20} />

                Mi bolsa

                {totalItems > 0 && (
                  <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-black">
                    {totalItems}
                  </span>
                )}
              </button>


              <Link
                href="/login"
                onClick={closeMenu}
                className="flex items-center gap-3 hover:text-amber-400"
              >
                <User size={20} />
                Cuenta
              </Link>


              <Link
                href="/about"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Nosotros
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Contacto
              </Link>

              <Link
                href="/admin"
                onClick={closeMenu}
                className="hover:text-amber-400"
              >
                Admin
              </Link>

            </nav>


            <div className="mt-auto border-t border-white/10 pt-6">

              <p className="text-sm text-zinc-500">
                ASPERA
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                Premium clothing & products
              </p>

            </div>

          </aside>

        </>

      )}


      {/* CARRITO */}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  );
}