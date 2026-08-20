"use client";

import { useFavoriteStore } from "@/store/favoriteStore";
import { toast } from "sonner";

interface FavoriteButtonProps {
  product: any;
}

export default function FavoriteButton({
  product,
}: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavoriteStore();

  const favorite = isFavorite(product.id);

  function handleClick() {
    toggleFavorite(product);

    if (favorite) {
      toast("Eliminado de favoritos");
    } else {
      toast.success("Agregado a favoritos");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        favorite
          ? "Quitar de favoritos"
          : "Agregar a favoritos"
      }
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xl backdrop-blur transition hover:scale-110"
    >
      <span
        className={
          favorite
            ? "text-red-500"
            : "text-white"
        }
      >
        {favorite ? "♥" : "♡"}
      </span>
    </button>
  );
}
