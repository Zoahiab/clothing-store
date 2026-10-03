import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold tracking-widest">HOUSE WEAR</h2>
          <p className="mt-3 text-sm text-neutral-400">
            Premium quality clothing for men and women.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>
              <Link href="/" className="hover:text-amber-500">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber-500">Shop</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber-500">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Delivery
          </h3>
          <p className="mt-3 text-sm text-neutral-300">
            Cash on Delivery all over Pakistan.
          </p>
          <p className="mt-2 text-sm text-neutral-300">
            Phone: +92 300 0000000
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © 2026 House Wear. All rights reserved.
      </div>
    </footer>
  );
}