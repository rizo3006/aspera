export default function Categories() {
  const categories = [
    "Playeras",
    "Cadenas",
    "Pulseras",
    "Accesorios",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
          Explora
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Compra por categoría
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-zinc-900 p-10 transition duration-300 hover:-translate-y-2 hover:border-amber-500"
          >
            <h3 className="text-2xl font-semibold">
              {category}
            </h3>

            <p className="mt-3 text-zinc-400">
              Explorar productos
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}