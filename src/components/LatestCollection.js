import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import FavoriteButton from "@/components/FavoriteButton";
import { products } from "@/data/products";

export default function LatestCollection() {
  const items = products.slice(0, 5);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex items-end justify-between text-amber-700">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em]">
            New Arrivals
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
            Latest Collection
          </h2>
        </div>
        <Link href="/shop" className="text-sm font-medium hover:underline">
          View All &rarr;
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((p) => {
          const off = Math.round((1 - p.price / p.oldPrice) * 100);
          return (
            <div key={p.id} className="flex flex-col">
              <div className="relative">
                <ProductImage product={p} />
                <span className="absolute left-2 top-2 rounded bg-amber-700 px-2 py-1 text-xs font-semibold text-white">
                  -{off}%
                </span>
                <FavoriteButton productId={p.id} />
              </div>
              <h3 className="mt-3 text-sm font-medium text-foreground">
                {p.name}
              </h3>
              <p className="mt-1 text-sm">
                <span className="font-semibold text-amber-700">
                  Rs. {p.price.toLocaleString()}
                </span>{" "}
                <span className="text-xs text-foreground/50 line-through">
                  Rs. {p.oldPrice.toLocaleString()}
                </span>
              </p>
              <Link
                href={`/shop?category=${p.category.toLowerCase()}#products`}
                className="mt-3 bg-amber-700 px-3 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-amber-600"
              >
                Shop Now
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}