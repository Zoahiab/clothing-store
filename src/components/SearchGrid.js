"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductPopup from "@/components/ProductPopup";
import { products } from "@/data/products";

const tabs = ["All", "Women", "Men", "New In", "Sale"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const sorts = [
  { value: "featured", label: "Featured" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
  { value: "name", label: "Name: A to Z" },
];

function discount(p) {
  return Math.round((1 - p.price / p.oldPrice) * 100);
}

export default function SearchGrid() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const [size, setSize] = useState(null);
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState(null);

  const list = useMemo(() => {
    const text = query.trim().toLowerCase();

    let items = products.filter((p) => {
      const matchText =
        !text ||
        p.name.toLowerCase().includes(text) ||
        p.type.toLowerCase().includes(text) ||
        p.category.toLowerCase().includes(text);

      let matchTab = true;
      if (tab === "Women") matchTab = p.category === "Women";
      if (tab === "Men") matchTab = p.category === "Men";
      if (tab === "New In") matchTab = p.id <= 5;
      if (tab === "Sale") matchTab = discount(p) >= 25;

      const matchSize =
        !size || p.sizes.includes(size) || p.sizes.includes("Free Size");

      return matchText && matchTab && matchSize;
    });

    items = [...items];
    if (sort === "low") items.sort((a, b) => a.price - b.price);
    if (sort === "high") items.sort((a, b) => b.price - a.price);
    if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }, [query, tab, size, sort]);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-12 text-amber-700">
      <div className="text-center">
        <h1 className="font-serif text-5xl font-light">Shop</h1>
        <p className="mt-3 text-sm opacity-80">
          {list.length} {list.length === 1 ? "product" : "products"}
        </p>
      </div>

      <hr className="mt-10 border-amber-700/30" />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name"
        autoFocus
        className="mt-8 w-full border border-amber-700/30 bg-white px-5 py-4 text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-amber-700"
      />

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.2em]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`border-b-2 pb-1 transition ${
              tab === t
                ? "border-amber-700 text-amber-700"
                : "border-transparent text-amber-700/60 hover:text-amber-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-2 text-xs font-medium uppercase tracking-[0.2em] opacity-80">
            Size
          </span>
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(size === s ? null : s)}
              className={`h-11 w-14 border text-sm transition ${
                size === s
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-amber-700/40 bg-white text-neutral-800 hover:border-amber-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
            Sort
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 border border-amber-700/40 bg-white px-4 text-sm text-neutral-800 outline-none focus:border-amber-700"
          >
            {sorts.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="py-20 text-center opacity-80">
          No products found. Try a different search.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {list.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      )}

      {selected && (
        <ProductPopup
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}