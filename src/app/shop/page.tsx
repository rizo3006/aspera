import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-28">
      <h1 className="mb-10 text-5xl font-black">
        Tienda
      </h1>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}