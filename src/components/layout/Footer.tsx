import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-4">

        <div>

          <h2 className="text-3xl font-black tracking-[0.3em]">
            ASPERA
          </h2>

          <p className="mt-5 text-zinc-400">
            Premium Streetwear.
          </p>

        </div>

        <div>

          <h3 className="font-semibold">
            Tienda
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-zinc-400">

            <Link href="/shop">Productos</Link>

            <Link href="/collections">Colecciones</Link>

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Empresa
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-zinc-400">

            <Link href="/about">Nosotros</Link>

            <Link href="/contact">Contacto</Link>

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Síguenos
          </h3>

          <p className="mt-5 text-zinc-400">
            Instagram
          </p>

        </div>

      </div>

    </footer>
  );
}