import Link from "next/link";

const categories = [
  {
    title: "Playeras",
    image: "/products/shirt1.jpg",
  },
  {
    title: "Cadenas",
    image: "/products/chain1.jpg",
  },
  {
    title: "Pulseras",
    image: "/products/bracelet1.jpg",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-12">
        <p className="text-amber-400 uppercase tracking-[0.4em] text-sm">
          Explora
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Categorías
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {categories.map((category) => (

          <Link
            key={category.title}
            href="/shop"
            className="group relative h-[420px] overflow-hidden rounded-3xl"
          >

            <img
              src={category.image}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl font-bold text-white">
                {category.title}
              </h3>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}