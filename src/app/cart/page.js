"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductImage from "@/components/ProductImage";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useHydrated } from "@/lib/useHydrated";
import { FREE_DELIVERY_MIN, getDelivery } from "@/lib/delivery";

export default function CartPage() {
  const hydrated = useHydrated();
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const delivery = getDelivery(subtotal);
  const total = subtotal + delivery;
  const remaining = FREE_DELIVERY_MIN - subtotal;

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

      <main className="mx-auto min-h-screen max-w-4xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-black">Your Cart</h1>

        {items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-neutral-500">Your cart is empty.</p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id) || {
                  name: item.name,
                };

                return (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex flex-wrap items-center gap-4 py-5"
                  >
                    <div className="w-20 shrink-0">
                      <ProductImage product={product} />
                    </div>

                    <div className="flex-1">
                      <h2 className="font-medium text-black">{item.name}</h2>
                      <p className="text-sm text-neutral-500">
                        Size: {item.size}
                      </p>
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
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-end gap-2">
              <p className="text-sm text-black">
                Subtotal: Rs. {subtotal.toLocaleString()}
              </p>
              <p className="text-sm text-black">
                Delivery:{" "}
                {delivery === 0 ? "Free" : `Rs. ${delivery.toLocaleString()}`}
              </p>
              {delivery > 0 && (
                <p className="text-xs text-amber-700">
                  Add Rs. {remaining.toLocaleString()} more for free delivery.
                </p>
              )}
              <p className="mt-2 text-xl text-black">
                Total:{" "}
                <span className="font-bold">Rs. {total.toLocaleString()}</span>
              </p>
              <p className="text-sm text-neutral-500">
                Cash on Delivery all over Pakistan.
              </p>
              <Link
                href="/checkout"
                className="mt-2 rounded-full bg-amber-500 px-10 py-3 font-semibold text-black transition hover:bg-amber-400"
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