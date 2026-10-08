import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wear House",
  description: "Premium quality clothing for men and women.",
};

export const viewport = {
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="bg-[#e9dfcf] px-4 py-2 text-xs font-medium text-amber-700">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 md:justify-between">
            <span>Free Delivery on Orders Rs. 5,000 &amp; Above</span>
            <span className="hidden md:inline">
              Cash on Delivery All Over Pakistan
            </span>
            <span className="hidden md:inline">Easy Returns &amp; Exchanges</span>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}