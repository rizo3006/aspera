import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 pt-20">

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="max-w-2xl">

          <p className="mb-5 text-sm uppercase tracking-[0.5em] text-amber-400">
            ASPERA COLLECTION
          </p>

          <h1 className="text-6xl font-black leading-none md:text-8xl">
            BUILT
            <br />
            TO
            <br />
            GLORIFY
          </h1>

          <p className="mt-8 max-w-lg text-lg text-zinc-300">
            Diseños con identidad.
            Calidad premium.
            Pensados para personas que buscan algo más que ropa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              Comprar ahora
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
              Ver colección
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
    