import ProductImage from "@/components/ProductImage";
import FavoriteButton from "@/components/FavoriteButton";

export default function ProductCard({ product, onClick }) {
  const hasSale = product.oldPrice && product.oldPrice > product.price;
  const off = hasSale
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="group relative">
      <button onClick={onClick} className="block w-full text-left">
        <ProductImage product={product} />
        <h3 className="mt-3 font-medium text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm">
          <span className="font-semibold text-amber-700">
            Rs. {product.price.toLocaleString()}
          </span>
          {hasSale && (
            <>
              {" "}
              <span className="text-xs text-foreground/50 line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            </>
          )}
        </p>
      </button>

      {hasSale && (
        <span className="pointer-events-none absolute left-2 top-2 z-10 rounded bg-amber-700 px-2 py-1 text-xs font-semibold text-white">
          -{off}%
        </span>
      )}

      <FavoriteButton productId={product.id} />
    </div>
  );
}