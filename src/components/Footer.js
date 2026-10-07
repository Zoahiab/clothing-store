import Link from "next/link";
import Logo from "@/components/Logo";
import Newsletter from "@/components/Newsletter";

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:opacity-70"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#efe6d6] text-amber-700">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm opacity-90">
            We bring you the latest trends in men&apos;s and women&apos;s
            fashion. Shop with confidence and express your unique style.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/shop?category=men" className="hover:underline">Men</Link>
            </li>
            <li>
              <Link href="/shop?category=women" className="hover:underline">Women</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">All Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Customer Support</h3>
          <ul className="mt-4 space-y-2 text-sm opacity-90">
            <li>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link href="/cart" className="hover:underline">My Cart</Link>
            </li>
            <li>Cash on Delivery all over Pakistan</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Follow Us</h3>
          <div className="mt-4 flex gap-4">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </SocialIcon>
          </div>

          <h3 className="mt-6 text-sm font-semibold">
            Subscribe to our newsletter
          </h3>
          <div className="mt-3">
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="border-t border-amber-700/20 px-4 py-4 text-center text-xs opacity-80">
        <p>&copy; 2026 Wear House. All rights reserved.</p>
        <p className="mt-1">Demo store: orders are for testing only.</p>
      </div>
    </footer>
  );
}