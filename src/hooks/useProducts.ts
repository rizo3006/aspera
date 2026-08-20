"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        console.log("🔎 Cargando productos...");

        const data = await getProducts();

        console.log(
          `✅ Productos encontrados: ${data.length}`
        );

        if (mounted) {
          setProducts(data);
        }
      } catch (error) {
        console.error(
          "❌ Error cargando productos:",
          error
        );

        if (mounted) {
          setError(
            error instanceof Error
              ? error.message
              : "No se pudieron cargar los productos."
          );

          setProducts([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    products,
    loading,
    error,
  };
}