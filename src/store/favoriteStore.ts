"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FavoriteProduct {
  id: string;
  name: string;
  slug?: string;
  price: number;
  comparePrice?: number;
  image: string;
  category?: string;
  description?: string;
  stock?: number;
  rating?: number;
  featured?: boolean;
  brand?: string;
  type?: string;
  gender?: string;
}

interface FavoriteStore {
  favorites: FavoriteProduct[];

  addFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (product: FavoriteProduct) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (product) =>
        set((state) => {
          if (state.favorites.some((item) => item.id === product.id)) {
            return state;
          }

          return {
            favorites: [...state.favorites, product],
          };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (item) => item.id !== id
          ),
        })),

      toggleFavorite: (product) => {
        const exists = get().favorites.some(
          (item) => item.id === product.id
        );

        if (exists) {
          get().removeFavorite(product.id);
        } else {
          get().addFavorite(product);
        }
      },

      isFavorite: (id) => {
        return get().favorites.some(
          (item) => item.id === id
        );
      },

      clearFavorites: () =>
        set({
          favorites: [],
        }),
    }),
    {
      name: "aspera-favorites",
    }
  )
);