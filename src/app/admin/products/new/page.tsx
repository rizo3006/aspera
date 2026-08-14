import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-3xl">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400">
            ASPERA ADMIN
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Nuevo producto
          </h1>

          <p className="mt-4 text-zinc-400">
            Agrega un producto individual a tu tienda.
          </p>
        </div>

        <ProductForm />

      </div>
    </main>
  );
}