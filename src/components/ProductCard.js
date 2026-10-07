import ProductImage from "@/components/ProductImage";
import FavoriteButton from "@/components/FavoriteButton";

export default function ProductCard({ product, onClick }) {
  return (
    <div className="group relative">
      <button onClick={onClick} className="block w-full text-left">
        <ProductImage product={product} />
        <h3 className="mt-3 font-medium text-foreground">{product.name}</h3>
        <p className="text-sm text-amber-500">
          Rs. {product.price.toLocaleString()}
        </p>
      </button>
      <FavoriteButton productId={product.id} />
    </div>
  );
}