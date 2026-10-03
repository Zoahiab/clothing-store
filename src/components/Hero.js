import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
          New Collection
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Style Jo Aap Ki Pehchan Bane
        </h1>
        <p className="mt-6 max-w-xl text-neutral-300">
          Premium quality kapre, behtareen fitting aur munasib qeemat.
          Cash on Delivery poore Pakistan me.
        </p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-amber-500 px-8 py-3 font-semibold text-black transition hover:bg-amber-400"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}