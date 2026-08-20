import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-32">

          <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-500">
            ASPERA
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Diseños con propósito.
            <br />
            Calidad que permanece.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            ASPERA nace con una idea sencilla: crear productos que representen
            nuestro estilo.
          </p>

        </section>

        {/* HISTORIA */}
        <section className="border-y border-white/10 bg-zinc-950">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
                Nuestra esencia
              </p>

              <h2 className="mt-5 text-4xl font-black">
                Más que una tienda.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-400">

              <p>
               ASPERA nace con una idea sencilla: crear productos que representen
            nuestro estilo.
              </p>

              <p>
                Cada colección busca representar una idea, un mensaje o una
                forma de expresión.
              </p>

              <p>
                Queremos construir una comunidad que quiera llevar
                aquello.
              </p>

            </div>

          </div>

        </section>

        {/* VALORES */}
        <section className="mx-auto max-w-7xl px-6 py-24">

          <h2 className="text-4xl font-black">
            Lo que representa ASPERA
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
              <div className="text-3xl">✦</div>

              <h3 className="mt-5 text-xl font-bold">
                Propósito
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Diseños que tienen un significado más allá de la apariencia.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
              <div className="text-3xl">◆</div>

              <h3 className="mt-5 text-xl font-bold">
                Calidad
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Buscamos ofrecer productos que puedas disfrutar y conservar.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
              <div className="text-3xl">∞</div>

              <h3 className="mt-5 text-xl font-bold">
                Comunidad
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                ASPERA busca crear tu estilo.
              </p>
            </div>

          </div>

        </section>

        {/* INSTAGRAM */}
        <section className="border-t border-white/10">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
              Síguenos
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Conoce ASPERA
            </h2>

            <p className="mt-5 max-w-xl text-zinc-400">
              Síguenos en Instagram para conocer nuestras nuevas colecciones,
              productos y novedades.
            </p>

            <Link
              href="https://www.instagram.com/aspera_oc/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              @aspera_oc
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}