import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">

        {/* MARCA */}

        <div>

          <h2 className="text-3xl font-black tracking-[0.35em]">
            ASPERA
          </h2>

          <p className="mt-5 text-zinc-400">
            Premium Streetwear.
          </p>

          <p className="mt-2 text-zinc-500">
            Diseños con propósito.
          </p>

        </div>

        {/* TIENDA */}

        <div>

          <h3 className="text-lg font-bold">
            Tienda
          </h3>

          <div className="mt-6 flex flex-col gap-4 text-zinc-400">

            <Link
              href="/shop"
              className="transition hover:text-white"
            >
              Productos
            </Link>

            <Link
              href="/favorites"
              className="transition hover:text-white"
            >
              Favoritos
            </Link>

            <Link
              href="/collections"
              className="transition hover:text-white"
            >
              Colecciones
            </Link>

          </div>

        </div>

        {/* EMPRESA */}

        <div>

          <h3 className="text-lg font-bold">
            Empresa
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <a
              href="https://www.instagram.com/aspera_oc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              Nosotros
            </a>

            <a
              href="https://wa.me/+523320354661"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              Contacto
            </a>

          </div>

        </div>

        {/* REDES */}

        <div>

          <h3 className="text-lg font-bold">
            Síguenos
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <a
              href="https://www.instagram.com/aspera_oc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/523320354661"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition hover:text-white"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-zinc-500">

          © {new Date().getFullYear()} ASPERA. Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}