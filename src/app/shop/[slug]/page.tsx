import { notFound } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { getProductBySlug } from "@/services/getProductBySlug";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
 const { slug } = await params;

const product: any = await getProductBySlug(slug);

if (!product) {
  notFound();
}

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-40">

        <div className="grid gap-16 lg:grid-cols-2">

          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-amber-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-black">
              {product.name}
            </h1>

            <p className="mt-8 text-zinc-400 leading-8">
              {product.description}
            </p>
<div className="mt-8 flex items-center gap-3">

  <span
    className={`rounded-full px-4 py-2 text-sm font-semibold ${
      product.stock > 0
        ? "bg-green-500/20 text-green-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {product.stock > 0
      ? `${product.stock} disponibles`
      : "Agotado"}
  </span>

  {product.featured && (
    <span className="rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-black">
      Destacado
    </span>
  )}

</div>
            <p className="mt-10 text-5xl font-black">
              ${product.price}
            </p>

            <div className="mt-10 flex gap-5">

              <button className="rounded-full bg-white px-10 py-4 font-bold text-black transition hover:scale-105">
                Agregar al carrito
              </button>

              <button className="rounded-full border border-white/20 px-10 py-4 transition hover:bg-white hover:text-black">
                Comprar ahora
              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}