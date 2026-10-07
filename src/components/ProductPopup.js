"use client";

import { useState } from "react";
import ProductImage from "@/components/ProductImage";
import { useCartStore } from "@/store/cartStore";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function ProductPopup({ product, onClose }) {
  const [size, setSize] = useState(null);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  function handleAdd() {
    if (!size) {
      setError(true);
      return;
    }
    addItem(product, size);
    setAdded(true);
    setTimeout(onClose, 1000);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-2xl gap-6 overflow-y-auto rounded-lg bg-white p-6 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 text-white hover:bg-amber-600"
          aria-label="Close"
        >
          X
        </button>

        <ProductImage product={product} />

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-amber-600">
            {product.category} / {product.type}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-black">{product.name}</h2>
          <p className="mt-2 text-xl text-black">
            Rs. {product.price.toLocaleString()}
          </p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Select Size
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                className={`min-w-14 border px-4 py-2 text-sm font-medium transition ${
                  size === s
                    ? "border-amber-700 bg-amber-700 text-white"
                    : "border-amber-700 text-amber-700 hover:bg-amber-700/10"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {error && (
            <p className="mt-3 text-sm text-red-600">
              Please select a size first.
            </p>
          )}

          <button
            onClick={handleAdd}
            className="mt-6 w-full bg-amber-700 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-amber-600"
          >
            {added ? "Added to Cart" : "Add to Cart"}
          </button>

          <p className="mt-4 text-xs text-neutral-500">
            Cash on Delivery all over Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
}