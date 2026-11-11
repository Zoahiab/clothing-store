"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductPopup from "@/components/ProductPopup";
import { products } from "@/data/products";

const categories = ["All", "Men", "Women"];

export default function ShopGrid({ initialCategory = null }) {
  const [category, setCategory] = useState(initialCategory);
  const [selected, setSelected] = useState(null);
  const productsRef = useRef(null);

  useEffect(() => {
    if (initialCategory && productsRef.current) {
      const t = setTimeout(() => {
        productsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
      return () => clearTimeout(t);
    }
  }, [initialCategory]);

  const filtered = category
    ? category === "All"
      ? products
      : products.filter((p) => p.category === category)
    : [];

  return (
    <>
      <Hero active={category} />

      <section
        id="products"
        ref={productsRef}
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-md border-2 px-10 py-3 text-lg font-medium transition ${
                category === cat
                  ? "border-amber-500 bg-white text-black"
                  : "border-black bg-black text-white hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {!category && (
          <p className="mt-10 text-center text-neutral-500">
            Choose a category above.
          </p>
        )}

        {category && (
          <>
            <p className="mb-6 mt-10 text-sm text-neutral-500">
              {filtered.length} products
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelected(product)}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {selected && (
        <ProductPopup
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}