"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

const categories = ["All", "Men", "Women"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

function FilterButton({ label, isActive, onClick, big }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border-2 font-medium transition ${
        big ? "px-10 py-3 text-lg" : "min-w-14 px-4 py-2 text-sm"
      } ${
        isActive
          ? "border-amber-500 bg-white text-black"
          : "border-black bg-black text-white hover:bg-neutral-800"
      }`}
    >
      {label}
    </button>
  );
}

export default function ShopGrid({ initialCategory = null }) {
  const [category, setCategory] = useState(initialCategory);
  const [selected, setSelected] = useState(null);
  const [size, setSize] = useState(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
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

  function openProduct(product) {
    setSelected(product);
    setSize(null);
    setError(false);
    setAdded(false);
  }

  function closePopup() {
    setSelected(null);
    setSize(null);
    setError(false);
    setAdded(false);
  }

  function handleAdd() {
    if (!size) {
      setError(true);
      return;
    }
    addItem(selected, size);
    setAdded(true);
    setTimeout(closePopup, 1000);
  }

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
            <FilterButton
              key={cat}
              big
              label={cat}
              isActive={category === cat}
              onClick={() => setCategory(cat)}
            />
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
                  onClick={() => openProduct(product)}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={closePopup}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-2xl gap-6 overflow-y-auto rounded-lg bg-white p-6 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800"
              aria-label="Close"
            >
              X
            </button>

            <ProductImage product={selected} />

            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-widest text-amber-600">
                {selected.category} / {selected.type}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-black">
                {selected.name}
              </h2>
              <p className="mt-2 text-xl text-black">
                Rs. {selected.price.toLocaleString()}
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Select Size
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <FilterButton
                    key={s}
                    label={s}
                    isActive={size === s}
                    onClick={() => {
                      setSize(s);
                      setError(false);
                    }}
                  />
                ))}
              </div>

              {error && (
                <p className="mt-3 text-sm text-red-600">
                  Please select a size first.
                </p>
              )}

              <button
                onClick={handleAdd}
                className="mt-6 w-full rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
              >
                {added ? "Added to Cart" : "Add to Cart"}
              </button>

              <p className="mt-4 text-xs text-neutral-500">
                Cash on Delivery all over Pakistan.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}