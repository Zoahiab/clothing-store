export default function Logo() {
  return (
    <span className="inline-flex items-center gap-3 text-amber-700">
      <span className="font-serif text-4xl font-bold leading-none tracking-tighter">
        W<span className="-ml-2">H</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-[0.2em] md:text-2xl">
          WEAR HOUSE
        </span>
        <span className="mt-1 hidden text-[9px] uppercase tracking-[0.35em] opacity-80 sm:block">
          Style for everyone
        </span>
      </span>
    </span>
  );
}