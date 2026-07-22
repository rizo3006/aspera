"use client";

import { useEffect, useState } from "react";

import { getProducts } from "@/services/products";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return {
    products,
    loading,
  };
}