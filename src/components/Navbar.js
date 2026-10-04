"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useHydrated } from "@/lib/useHydrated";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const count = useCartStore((state) =>
    state.items.reduce((total, i) => total + i.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-widest text-black">
          HOUSE WEAR
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`border-b-2 pb-1 transition ${
                    isActive
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-neutral-700 hover:text-amber-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 text-black">
          <Search size={22} className="cursor-pointer hover:text-amber-600" />
          <Link href="/cart" className="relative">
            <ShoppingBag size={22} className="hover:text-amber-600" />
            {hydrated && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-xs font-bold text-black">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}