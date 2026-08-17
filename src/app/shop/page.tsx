import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FeaturedProducts from "../../components/home/FeaturedProducts";


export default function ShopPage() {
  return (
    <>
      <Navbar />

      <section className="border-b border-white/10 bg-zinc-950 pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">

          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            ASPERA
          </p>

          <h1 className="mt-4 text-5xl font-black text-white">
            Tienda
          </h1>

          <p className="mt-4 max-w-xl text-zinc-400">
            Descubre todas nuestras colecciones.
          </p>

        </div>
      </section>
<section className="border-b border-white/10 bg-zinc-900 py-6">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 text-sm font-semibold text-zinc-300">

    <span>🔥 Productos 100% Premium</span>

    <span>👟 Tenis desde $1,500 MXN</span>

    <span>🚚 Envíos a todo México</span>

    <span>⭐ Calidad garantizada</span>

  </div>
</section>
      <FeaturedProducts />

      <Footer />
    </>
  );
}