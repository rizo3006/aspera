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
            Descubre todas nuestras colecciones premium.
          </p>

        </div>
      </section>

      <FeaturedProducts />

      <Footer />
    </>
  );
}