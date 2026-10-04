import ProductImage from "@/components/ProductImage";

export default function ProductCard({ product, onClick }) {
  return (
    <button onClick={onClick} className="group block w-full text-left">
      <ProductImage product={product} />
      <h3 className="mt-3 font-medium text-foreground">{product.name}</h3>
      <p className="text-sm text-amber-500">
        Rs. {product.price.toLocaleString()}
      </p>
    </button>
  );
}