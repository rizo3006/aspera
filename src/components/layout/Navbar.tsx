"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  User,
  Heart,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="text-2xl font-black tracking-[0.3em] text-white"
          >
            ASPERA
          </Link>

          <nav className="hidden lg:flex gap-10 text-sm font-medium text-gray-300">
            <Link href="/">Inicio</Link>
            <Link href="/shop">Tienda</Link>
            <Link href="/collections">Colecciones</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Search className="h-5 w-5 cursor-pointer" />
            <Heart className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />

            <div className="relative cursor-pointer">
              <ShoppingBag className="h-5 w-5" />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-black">
                0
              </span>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-7 w-7 text-white" />
          </button>

        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed right-0 top-0 z-50 h-full w-72 bg-zinc-950 border-l border-white/10 p-6">

            <div className="mb-10 flex items-center justify-between">

              <h2 className="text-xl font-bold tracking-[0.3em]">
                ASPERA
              </h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>

            </div>

            <nav className="flex flex-col gap-6 text-lg">

              <Link href="/" onClick={() => setOpen(false)}>
                Inicio
              </Link>

              <Link href="/shop" onClick={() => setOpen(false)}>
                Tienda
              </Link>

              <Link href="/collections" onClick={() => setOpen(false)}>
                Colecciones
              </Link>

              <Link href="/about" onClick={() => setOpen(false)}>
                Nosotros
              </Link>

              <Link href="/contact" onClick={() => setOpen(false)}>
                Contacto
              </Link>

            </nav>

          </aside>
        </>
      )}
    </>
  );
}