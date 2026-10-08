"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";
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

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/shop?category=men#products" },
  { label: "Women", href: "/shop?category=women#products" },
  { label: "Shop", href: "/search" },
  { label: "Favorites", href: "/favorites", count: "fav" },
  { label: "Cart", href: "/cart", count: "cart" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);

  const count = useCartStore((state) =>
    state.items.reduce((total, i) => total + i.quantity, 0)
  );
  const favCount = useFavoritesStore((state) => state.ids.length);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-300 bg-background">
      <nav className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-3 md:flex md:justify-between md:gap-4">
        {/* Menu button (phone only) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-amber-700"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="Wear House home"
          className="justify-self-center"
        >
          <Logo />
        </Link>

        {/* Links (computer only) */}
        <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
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

        {/* Icons */}
        <div className="flex items-center justify-end gap-4 text-amber-700">
          <Link href="/search" aria-label="Search">
            <Search size={22} className="hover:text-amber-600" />
          </Link>

          <Link
            href="/favorites"
            className="relative hidden md:block"
            aria-label="Favorites"
          >
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

      {/* Phone menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-72 max-w-[85%] flex-col overflow-y-auto bg-background p-6 text-amber-700 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="space-y-1 text-sm font-medium uppercase tracking-widest">
              {menuLinks.map((link) => {
                const n =
                  link.count === "fav"
                    ? favCount
                    : link.count === "cart"
                    ? count
                    : 0;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-amber-700/15 py-4 hover:opacity-70"
                    >
                      {link.label}
                      {hydrated && n > 0 && (
                        <span className="rounded-full bg-amber-700 px-2 py-0.5 text-xs font-bold text-white">
                          {n}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      )}
    </header>
  );
}