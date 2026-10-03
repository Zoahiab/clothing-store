"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-black">Aap ka Cart</h1>

        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-neutral-500">Cart abhi khali hai.</p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Shopping shuru karein
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex flex-wrap items-center gap-4 py-5"
                >
                  <div className="flex h-24 w-20 items-center justify-center rounded-md bg-neutral-200 text-xs text-neutral-500">
                    Photo
                  </div>

                  <div className="flex-1">
                    <h2 className="font-medium text-black">{item.name}</h2>
                    <p className="text-sm text-neutral-500">Size: {item.size}</p>
                    <p className="text-sm text-amber-600">
                      Rs. {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrease(item.id, item.size)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800"
                    >
                      -
                    </button>
                    <span className="w-6 text-center font-medium text-black">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increase(item.id, item.size)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white hover:bg-neutral-800"
                    >
                      +
                    </button>
                  </div>

                  <p className="w-28 text-right font-semibold text-black">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Hataein
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-end gap-4">
              <p className="text-xl text-black">
                Total:{" "}
                <span className="font-bold">Rs. {total.toLocaleString()}</span>
              </p>
              <p className="text-sm text-neutral-500">
                Cash on Delivery poore Pakistan me.
              </p>
              <Link
                href="/checkout"
                className="rounded-full bg-amber-500 px-10 py-3 font-semibold text-black transition hover:bg-amber-400"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}