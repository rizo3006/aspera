"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User, Heart } from "lucide-react";

export default function Navbar() {
  return (
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
          <Link href="/">Colecciones</Link>
          <Link href="/">Nosotros</Link>
          <Link href="/">Contacto</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Search className="h-5 w-5 text-white" />
          <Heart className="h-5 w-5 text-white" />
          <User className="h-5 w-5 text-white" />
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>

        <button className="lg:hidden">
          <Menu className="h-7 w-7 text-white" />
        </button>

      </div>
    </header>
  );
}