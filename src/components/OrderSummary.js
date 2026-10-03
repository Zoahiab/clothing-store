export default function OrderSummary({ items, total }) {
  return (
    <div className="h-fit rounded-lg border border-neutral-200 p-6">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
        Order Summary
      </h2>
      <div className="divide-y divide-neutral-200">
        {items.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex justify-between gap-4 py-3 text-sm"
          >
            <div>
              <p className="font-medium text-black">{item.name}</p>
              <p className="text-neutral-500">
                Size: {item.size} | Quantity: {item.quantity}
              </p>
            </div>
            <p className="font-medium text-black">
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4 text-lg">
        <span className="text-black">Total</span>
        <span className="font-bold text-black">
          Rs. {total.toLocaleString()}
        </span>
      </div>
    </div>
  );
}