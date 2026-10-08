import Link from "next/link";
import Image from "next/image";

const base =
  "px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border border-amber-700 transition";
const filled = "bg-amber-700 text-white hover:bg-amber-600";
const outline = "text-amber-700 hover:bg-amber-700 hover:text-white";

function Buttons({ active }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
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
  );
}

export default function Hero({ active = null }) {
  return (
    <section className="bg-[#f7f2ea]">
      <div className="mx-auto max-w-7xl">
        {/* Phone */}
        <div className="md:hidden">
          <div className="relative">
            <div className="grid grid-cols-2">
              <div
                className="aspect-[1.03] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/hero.jpeg)",
                  backgroundSize: "285.7% auto",
                  backgroundPosition: "0% 50%",
                }}
              />
              <div
                className="aspect-[1.03] bg-no-repeat"
                style={{
                  backgroundImage: "url(/images/hero.jpeg)",
                  backgroundSize: "285.7% auto",
                  backgroundPosition: "100% 50%",
                }}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "linear-gradient(to top, #f7f2ea 15%, rgba(247,242,234,0.85) 45%, rgba(247,242,234,0) 100%)",
              }}
            />
          </div>

          <div className="relative -mt-24 px-4 pb-8 text-center text-amber-700">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em]">
              Men &amp; Women Fashion
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-wide">
              WEAR HOUSE
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em]">
              Style for everyone.
            </p>
            <div className="mt-5">
              <Buttons active={active} />
            </div>
          </div>
        </div>

        {/* Computer */}
        <div className="relative hidden md:block">
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

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-amber-700">
            <div className="md:max-w-[34%]">
              <p className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] lg:text-xs">
                <span className="h-px w-6 bg-amber-700" />
                Men &amp; Women Fashion
                <span className="h-px w-6 bg-amber-700" />
              </p>
              <h1 className="mt-3 font-serif text-3xl font-bold tracking-wide lg:text-5xl">
                WEAR HOUSE
              </h1>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] lg:text-base">
                Style for everyone.
              </p>
              <div className="mt-5 lg:mt-7">
                <Buttons active={active} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}