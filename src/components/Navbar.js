"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Heart } from "lucide-react";
import Logo from "@/components/Logo";
import { useCartStore } from "@/store/cartStore";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useHydrated } from "@/lib/useHydrated";

const links = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/shop?category=men#products" },
  { label: "Women", href: "/shop?category=women#products" },
  { label: "Shop", href: "/search" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const count = useCartStore((state) =>
    state.items.reduce((total, i) => total + i.quantity, 0)
  );
  const favCount = useFavoritesStore((state) => state.ids.length);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-300 bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label="Wear House home">
          <Logo />
        </Link>

        <ul className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest md:gap-8 md:text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.label === "Shop" && pathname === "/search";
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`border-b-2 pb-1 transition ${
                    isActive
                      ? "border-amber-700 text-amber-700"
                      : "border-transparent text-amber-700/70 hover:text-amber-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 text-amber-700">
          <Link href="/search" aria-label="Search">
            <Search size={22} className="hover:text-amber-600" />
          </Link>

          <Link href="/favorites" className="relative" aria-label="Favorites">
            <Heart size={22} className="hover:text-amber-600" />
            {hydrated && favCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-xs font-bold text-white">
                {favCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative" aria-label="Cart">
            <ShoppingBag size={22} className="hover:text-amber-600" />
            {hydrated && count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}