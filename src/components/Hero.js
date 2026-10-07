import Link from "next/link";
import Image from "next/image";

const base =
  "px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border border-amber-700 transition";
const filled = "bg-amber-700 text-white hover:bg-amber-600";
const outline = "text-amber-700 hover:bg-amber-700 hover:text-white";

export default function Hero({ active = null }) {
  return (
    <section className="bg-[#f7f2ea]">
      <div className="relative mx-auto max-w-7xl">
        <Image
          src="/images/hero.jpeg"
          alt="Wear House men and women collection"
          width={1536}
          height={522}
          priority
          quality={90}
          sizes="100vw"
          className="h-auto w-full"
        />

        <div className="flex flex-col items-center justify-center px-4 py-10 text-center text-amber-700 md:absolute md:inset-0 md:py-0">
          <div className="md:max-w-[34%]">
            <p className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] lg:text-xs">
              <span className="hidden h-px w-6 bg-amber-700 md:block" />
              Men &amp; Women Fashion
              <span className="hidden h-px w-6 bg-amber-700 md:block" />
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-wide md:text-3xl lg:text-5xl">
              WEAR HOUSE
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] lg:text-base">
              Style for everyone.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:mt-7">
              <Link
                href="/shop?category=men#products"
                className={`${base} ${active === "Men" ? filled : outline}`}
              >
                Shop Men
              </Link>
              <Link
                href="/shop?category=women#products"
                className={`${base} ${active === "Women" ? filled : outline}`}
              >
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}