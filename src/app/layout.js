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
        {children}
        <Footer />
      </body>
    </html>
  );
}