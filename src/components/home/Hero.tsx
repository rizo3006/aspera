import Image from "next/image";
import Link from "next/link";
import Stat from "@/components/common/Stat";

export default function Hero() {
  return (
   <section className="relative overflow-hidden bg-black pb-12">

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

      {/* Logo como marca de agua */}
      <Image
  src="/images/logo.png"
  alt="ASPERA"
  width={900}
  height={900}
  className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    opacity-[0.18]
  "
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

            <Stat number="+50" label="Producto" />
            <Stat number="24/7" label="Soporte" />
            <Stat number="100%" label="Calidad" />

          </div>

        </div>

        {/* Imagen principal */}
        <div className="relative flex justify-center">

          <div className="relative flex h-[380px] w-[320px] items-center justify-center">

  {/* Resplandor */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />

  {/* Círculo de fondo */}
  <div className="absolute h-[420px] w-[420px] rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-[0_0_80px_rgba(255,255,255,.08)]" />

  {/* Logo */}
  <Image
    src="/images/logo.png"
    alt="ASPERA"
    width={360}
    height={360}
    priority
    className="relative z-10 transition duration-700 hover:scale-105"
  />

</div>
        </div>

      </div>

    </section>
  );
}