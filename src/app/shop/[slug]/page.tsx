import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-2">

        <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-amber-500 uppercase tracking-widest">
            {product.category}
          </p>

          <h1 className="mt-4 text-5xl font-black">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-bold">
            ${product.price}
          </p>

          <p className="mt-8 text-zinc-400">
            Producto premium de Aspera.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition">
            Agregar al carrito
          </button>
        </div>

      </div>
    </main>
  );
}