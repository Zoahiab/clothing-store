import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center px-4 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
            New Collection
          </p>
          <h1 className="text-4xl font-light leading-tight md:text-6xl">
            Style that defines you.
          </h1>
          <p className="mt-6 max-w-md text-neutral-300">
            Premium quality clothing, great fit and fair prices.
            Cash on Delivery all over Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop?category=men"
              className="bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-amber-400"
            >
              Shop Men
            </Link>
            <Link
              href="/shop?category=women"
              className="border border-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Shop Women
            </Link>
          </div>
        </div>

        {/* Picture */}
        <div className="relative min-h-[420px] bg-neutral-800 md:min-h-[600px]">
          <Image
            src="/images/shalwar-kameez.jpg"
            alt="House Wear collection"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}