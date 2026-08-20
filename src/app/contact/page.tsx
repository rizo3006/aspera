import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        <section className="mx-auto max-w-7xl px-6 py-32">

          <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-500">
            ASPERA
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Contacto
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            ¿Tienes alguna pregunta sobre nuestros productos, pedidos o
            colecciones? Estamos para ayudarte.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/523320354661"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:border-green-500"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-2xl">
                ◉
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                WhatsApp
              </h2>

              <p className="mt-3 text-zinc-400">
                Escríbenos directamente para resolver tus dudas.
              </p>

              <p className="mt-6 font-bold text-green-400">
                +52 33 2035 4661 →
              </p>

            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/aspera_oc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:border-pink-500"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl text-black">
                ◎
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Instagram
              </h2>

              <p className="mt-3 text-zinc-400">
                Síguenos y escríbenos por Instagram.
              </p>

              <p className="mt-6 font-bold text-pink-400">
                @aspera_oc →
              </p>

            </a>

          </div>

        </section>

        {/* AYUDA */}
        <section className="border-y border-white/10 bg-zinc-950">

          <div className="mx-auto max-w-7xl px-6 py-20">

            <h2 className="text-3xl font-black">
              ¿Necesitas ayuda con un pedido?
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Ten a la mano tu información de pedido y escríbenos por
              WhatsApp para poder ayudarte más rápido.
            </p>

            <a
              href="https://wa.me/523320354661"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-4 font-black text-black transition hover:scale-105"
            >
              Hablar por WhatsApp
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}