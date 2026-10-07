import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tiles = [
  { label: "Men's Hoodies", href: "/shop?category=men#products", image: "/images/camel-pullover-hoodie.jpg" },
  { label: "Men's Jackets", href: "/shop?category=men#products", image: "/images/black-leather-jacket.jpg" },
  { label: "Men's Suits", href: "/shop?category=men#products", image: "/images/navy-two-piece-suit.jpg" },
  { label: "Women's Suits", href: "/shop?category=women#products", image: "/images/yellow-lace-suit-with-dupatta.jpg" },
  { label: "Women's Hoodies", href: "/shop?category=women#products", image: "/images/cream-bow-print-hoodie.jpg" },
  { label: "Women's T-Shirts", href: "/shop?category=women#products", image: "/images/cherry-bow-graphic-t-shirt.jpg" },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center text-amber-700">
        <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em]">
          <span className="h-px w-10 bg-amber-700" />
          Shop by Category
          <span className="h-px w-10 bg-amber-700" />
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold md:text-5xl">
          Find Your Style
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-80">
          Explore our range of clothing for men and women. Quality, comfort and
          style, all in one place.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            href={tile.href}
            className="group relative block aspect-[3/4] overflow-hidden"
          >
            <Image
              src={tile.image}
              alt={tile.label}
              fill
              sizes="(max-width: 768px) 50vw, 17vw"
              className="object-cover object-top transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-amber-700/85 px-3 py-2 text-sm font-medium text-white">
              {tile.label}
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
