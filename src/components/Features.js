import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const items = [
  { icon: Truck, title: "Cash on Delivery", text: "All over Pakistan" },
  { icon: ShieldCheck, title: "Safe Ordering", text: "Your details stay private" },
  { icon: RefreshCw, title: "Easy Returns", text: "Within 7 days" },
  { icon: Headphones, title: "Support", text: "We are here to help" },
];

export default function Features() {
  return (
    <section className="border-b border-neutral-300">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-center gap-3 text-amber-700">
            <Icon size={32} strokeWidth={1.5} />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs opacity-80">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}