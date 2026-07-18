import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">

      {/* Logo de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/logo.png"
          alt="Aspera Logo"
          width={700}
          height={700}
          className="opacity-[0.04] select-none"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <p className="mb-5 text-sm uppercase tracking-[0.5em] text-amber-400">
          ASPERA COLLECTION
        </p>

        <h1 className="text-5xl font-black leading-tight md:text-8xl">
          BUILT TO
          <br />
          GLORIFY
        </h1>

        <p className="mt-8 max-w-xl text-zinc-400">
          Calidad premium. Diseño minimalista.
          Inspirado para quienes buscan algo más que ropa.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/shop"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Comprar ahora
          </a>

          <a
            href="/collections"
            className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Ver colección
          </a>

        </div>

      </div>

    </section>
  );
}