import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">

      <Image
  src="/images/logo.png"
  alt="ASPERA"
  width={900}
  height={900}
  className="absolute opacity-[0.12] pointer-events-none select-none"
  priority
/>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 lg:grid-cols-2">

  {/* Texto */}
  <div>

    <p className="mb-5 text-sm uppercase tracking-[0.45em] text-amber-400">
      PREMIUM STREETWEAR
    </p>

    <h1 className="text-6xl font-black leading-none md:text-8xl">
      BUILT TO
      <br />
      GLORIFY
    </h1>
    <div className="mt-8 h-[2px] w-32 bg-amber-400 rounded-full" />

    <p className="mt-8 max-w-lg text-lg text-zinc-400">
      Moda premium inspirada en la fe. Diseños exclusivos, materiales de calidad y una identidad que trasciende tendencias.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">

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
        Colecciones
      </a>

    </div>

  </div>

  {/* Espacio para imagen principal */}
  <div className="relative hidden h-[700px] lg:block">

    <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-zinc-900" />

    <p className="absolute bottom-8 left-8 text-zinc-500">
      Próximamente: fotografía del producto.
    </p>

  </div>

</div>
    </section>
  );
}