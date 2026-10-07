"use client";

import { Heart } from "lucide-react";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useHydrated } from "@/lib/useHydrated";

export default function FavoriteButton({ productId }) {
  const hydrated = useHydrated();
  const isFav = useFavoritesStore((state) => state.ids.includes(productId));
  const toggle = useFavoritesStore((state) => state.toggle);
  const active = hydrated && isFav;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggle(productId);
      }}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow transition hover:scale-110"
    >
      <Heart
        size={18}
        className={
          active ? "fill-amber-700 text-amber-700" : "text-amber-700"
        }
      />
    </button>
  );
}