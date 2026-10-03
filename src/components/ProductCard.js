export default function ProductCard({ product, onClick }) {
  return (
    <button onClick={onClick} className="group block w-full text-left">
      <div className="flex aspect-[3/4] items-center justify-center rounded-lg bg-neutral-200 text-neutral-500 transition group-hover:bg-neutral-300">
        Photo
      </div>
      <h3 className="mt-3 font-medium text-black">{product.name}</h3>
      <p className="text-sm text-amber-600">
        Rs. {product.price.toLocaleString()}
      </p>
    </button>
  );
}