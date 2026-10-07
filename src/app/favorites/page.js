"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useHydrated } from "@/lib/useHydrated";

export default function FavoritesPage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const ids = useFavoritesStore((state) => state.ids);
  const items = products.filter((p) => ids.includes(p.id));

  if (!hydrated) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen" />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-6xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-foreground">
          Your Favorites
        </h1>

        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-foreground">
              You have no favorites yet. Tap the heart on any product to save it.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-block bg-amber-700 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-amber-600"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {items.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() =>
                  router.push(
                    `/shop?category=${p.category.toLowerCase()}#products`
                  )
                }
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}