import Link from "next/link";
import Image from "next/image";

export default function SaleBanner() {
  return (
    <section className="bg-[#e9dfcf]">
      <div className="relative mx-auto max-w-7xl">
        <Image
          src="/images/sale-banner.jpeg"
          alt="Seasonal sale"
          width={1600}
          height={296}
          quality={90}
          sizes="100vw"
          className="h-48 w-full object-cover object-[70%_center] sm:h-64 lg:h-auto"
        />

        <div className="px-4 py-8 text-amber-700 lg:absolute lg:inset-0 lg:p-0">
          {/* Left text */}
          <div className="lg:absolute lg:inset-y-0 lg:left-[4%] lg:flex lg:w-[36%] lg:flex-col lg:justify-center">
            <p className="font-serif text-base italic lg:text-lg">
              Seasonal Sale
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold xl:text-4xl">
              UP TO 30% OFF
            </h2>
            <p className="mt-2 text-sm">
              On selected styles. Don&apos;t miss out!
            </p>
            <Link
              href="/shop"
              className="mt-4 inline-block w-fit bg-amber-700 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-amber-600"
            >
              Shop Now
            </Link>
          </div>

          {/* Right corner text */}
          <p className="mt-6 font-serif text-xl italic leading-snug lg:absolute lg:right-[3%] lg:top-1/2 lg:mt-0 lg:w-[17%] lg:-translate-y-1/2 lg:-rotate-6 lg:text-lg xl:text-2xl">
            Better Style.
            <br />
            Bigger Dreams.
          </p>
        </div>
      </div>
    </section>
  );
}