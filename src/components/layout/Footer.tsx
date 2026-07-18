export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.3em]">
            ASPERA
          </h2>

          <p className="mt-2 text-zinc-400">
            Built to Glorify
          </p>
        </div>

        <p className="text-zinc-500">
          © 2026 Aspera. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}