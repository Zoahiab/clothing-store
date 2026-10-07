import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="mt-6 text-foreground">
          Have a question about an order or a product? Reach us here.
        </p>
        <ul className="mt-6 space-y-2 text-foreground">
          <li>Email: hello@wearhouse.pk</li>
          <li>Phone: +92 300 0000000</li>
          <li>Delivery: Cash on Delivery all over Pakistan</li>
        </ul>
        <p className="mt-6 text-sm text-neutral-500">
          Demo store: these contact details are samples.
        </p>
      </main>
    </>
  );
}