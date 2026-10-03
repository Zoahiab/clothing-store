"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CheckoutForm from "@/components/CheckoutForm";
import OrderSummary from "@/components/OrderSummary";
import { useCartStore } from "@/store/cartStore";
import { supabase } from "@/lib/supabase";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [orderNumber, setOrderNumber] = useState(null);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  async function handlePlaced(customer) {
    const number = Math.floor(100000 + Math.random() * 900000);

    const { error } = await supabase.from("orders").insert({
      order_number: number,
      name: customer.name,
      phone: customer.phone,
      city: customer.city,
      address: customer.address,
      note: customer.note || null,
      items: items,
      total: total,
    });

    if (error) {
      return "Sorry, we could not place your order. Please try again.";
    }

    setOrderNumber(number);
    clearCart();
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-5xl px-4 py-12">
        {orderNumber && (
          <div className="py-16 text-center">
            <h1 className="text-3xl font-bold text-white">Thank You!</h1>
            <p className="mt-4 text-white">
              Your order has been received. Order number:{" "}
              <span className="font-bold text-amber-500">#{orderNumber}</span>
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              Please pay cash on delivery.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {!orderNumber && items.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-neutral-500">Your cart is empty.</p>
            <Link
              href="/shop"
              className="mt-6 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {!orderNumber && items.length > 0 && (
          <>
            <h1 className="mb-8 text-3xl font-bold text-black">Checkout</h1>
            <div className="grid gap-10 md:grid-cols-2">
              <CheckoutForm onPlaced={handlePlaced} />
              <OrderSummary items={items} total={total} />
            </div>
          </>
        )}
      </main>
    </>
  );
}