import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "House Wear",
  description: "Premium quality clothing for men and women.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-amber-500 px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-black">
          Cash on Delivery all over Pakistan
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}