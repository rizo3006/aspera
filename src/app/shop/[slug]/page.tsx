import { notFound } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { getProductBySlug } from "@/services/getProductBySlug";
import ProductActions from "@/components/shop/ProductActions";

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

          {/* Imagen */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-500 hover:scale-110"
            />

          </div>

          {/* Información */}
          <div>

            <p className="uppercase tracking-[0.35em] text-amber-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-black">
              {product.name}
            </h1>

            <div className="mt-6 flex items-center gap-2 text-xl text-amber-400">
              ★★★★★

              <span className="ml-2 text-sm text-zinc-400">
                ({product.rating}/5)
              </span>
            </div>

            <p className="mt-8 leading-8 text-zinc-400">
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

            {/* Precio */}
            <div className="mt-10">

              <div className="flex items-end gap-5">

                <span className="text-5xl font-black">
                  ${Number(product.price).toLocaleString()}
                </span>

                {product.comparePrice > 0 && (

                  <span className="pb-2 text-2xl text-zinc-500 line-through">
                    ${Number(product.comparePrice).toLocaleString()}
                  </span>

                )}

              </div>

              {product.comparePrice > product.price && (

                <p className="mt-3 text-green-400">

                  Ahorras $

                  {Number(
                    product.comparePrice - product.price
                  ).toLocaleString()}

                </p>

              )}

            </div>

            {/* Botones */}
           <ProductActions product={product} />

            {/* Información extra */}
            <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900 p-8">

              <h3 className="text-xl font-bold">
                Información
              </h3>

              <div className="mt-6 space-y-3 text-zinc-400">

                <p>✔ Envíos a todo México</p>

                <p>✔ Pago seguro</p>

                <p>✔ Garantía de satisfacción</p>

                <p>✔ Productos 100% originales</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}