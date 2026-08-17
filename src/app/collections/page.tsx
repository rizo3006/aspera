import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black px-6 py-40 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            ASPERA
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Colecciones
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Explora nuestras colecciones.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <Link
              href="/shop?category=Tenis"
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-amber-500"
            >
              <h2 className="text-2xl font-black">
                Tenis
              </h2>

              <p className="mt-3 text-zinc-400">
                Sneakers y modelos seleccionados.
              </p>
            </Link>

            <Link
              href="/shop?category=Playeras"
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-amber-500"
            >
              <h2 className="text-2xl font-black">
                Playeras
              </h2>

              <p className="mt-3 text-zinc-400">
                Prendas de nuestra colección.
              </p>
            </Link>

            <Link
              href="/shop?category=Accesorios"
              className="rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:-translate-y-1 hover:border-amber-500"
            >
              <h2 className="text-2xl font-black">
                Accesorios
              </h2>

              <p className="mt-3 text-zinc-400">
                Complementos ASPERA.
              </p>
            </Link>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}