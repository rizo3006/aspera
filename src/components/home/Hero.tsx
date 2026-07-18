import Image from "next/image";
import Link from "next/link";
import Stat from "@/components/common/Stat";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      {/* Logo como marca de agua */}
      <Image
        src="/images/logo.png"
        alt="ASPERA"
        width={900}
        height={900}
        className="absolute -right-60 top-1/2 hidden -translate-y-1/2 opacity-10 lg:block"
        priority
      />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-20 px-6 pt-24 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <p className="mb-5 tracking-[0.45em] uppercase text-amber-400">
            PREMIUM STREETWEAR
          </p>

          <h1 className="text-6xl font-black leading-none md:text-8xl">
            BUILT TO
            <br />
            GLORIFY
          </h1>

          <div className="mt-8 h-[2px] w-28 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400">
            Diseños premium inspirados en la fe.
            Calidad, elegancia y propósito en cada colección.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/shop"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Comprar
            </Link>

            <Link
              href="/collections"
              className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
            >
              Colecciones
            </Link>

          </div>

          <div className="mt-20 grid grid-cols-3 gap-8">

            <Stat number="100+" label="Productos" />
            <Stat number="24/7" label="Soporte" />
            <Stat number="100%" label="Calidad" />

          </div>

        </div>

        {/* Imagen principal */}
        <div className="relative flex justify-center">

          <div className="relative h-[650px] w-[430px] overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900 shadow-2xl">

            <Image
              src="/images/hero/modelo.jpg"
              alt="Modelo"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}