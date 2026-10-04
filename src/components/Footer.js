import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold tracking-widest">HOUSE WEAR</h2>
          <p className="mt-3 text-sm text-neutral-400">
            Premium quality clothing for men and women.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Shop
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>
              <a href="/shop?category=men" className="hover:text-amber-500">Men</a>
            </li>
            <li>
              <a href="/shop?category=women" className="hover:text-amber-500">Women</a>
            </li>
            <li>
              <Link href="/shop" className="hover:text-amber-500">All Products</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Company
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>
              <Link href="/about" className="hover:text-amber-500">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-500">Contact</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber-500">Cart</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>hello@housewear.pk</li>
            <li>+92 300 0000000</li>
            <li>Cash on Delivery all over Pakistan.</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm text-neutral-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        <p>© 2026 House Wear. All rights reserved.</p>
        <p className="mt-1">Demo store: orders are for testing only.</p>
      </div>
    </footer>
  );
}