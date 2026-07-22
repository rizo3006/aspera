import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
// Placeholder FeaturedProducts component to avoid missing-module errors
const FeaturedProducts = () => {
  return (
    <section aria-label="Featured products">
      <h2>Productos destacados</h2>
      <p>Contenido de ejemplo disponible temporalmente.</p>
    </section>
  );
};
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}