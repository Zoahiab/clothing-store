export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-amber-700 sm:gap-3">
      <span className="font-serif text-3xl font-bold leading-none tracking-tighter sm:text-4xl">
        W<span className="-ml-1.5 sm:-ml-2">H</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-sm font-bold tracking-[0.15em] sm:text-lg sm:tracking-[0.2em] md:text-2xl">
          WEAR HOUSE
        </span>
        <span className="mt-1 hidden text-[9px] uppercase tracking-[0.35em] opacity-80 sm:block">
          Style for everyone
        </span>
      </span>
    </span>
  );
}