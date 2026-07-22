import ProductForm from "@/components/admin/ProductForm";
import ProductList from "@/components/admin/ProductList";

export default function ProductsAdmin() {
  return (
    <main className="min-h-screen bg-black py-32">

      <div className="mx-auto max-w-4xl px-6">

        <h1 className="mb-10 text-5xl font-black text-white">
          Nuevo Producto
        </h1>

        <ProductForm />
        
        <ProductList />

      </div>

    </main>
  );
}