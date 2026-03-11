import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Green Batteries"
                width={180}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-green-300 leading-relaxed mb-6">
              Varanasi&apos;s first smart battery swapping network — powering electric mobility for a cleaner tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Vehicles", href: "/vehicles" },
                { name: "How It Works", href: "/how-it-works" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-green-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {["Battery Swapping", "Fleet Solutions", "Subscription Plans", "Smart Batteries", "Station Partners"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/services" className="text-green-300 hover:text-lime-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Reach Us</h4>
            <div className="space-y-3 text-green-300 text-sm">
              <p>📍 Green Batteries HQ<br/>Sigra, Varanasi, UP 221010</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@greenbatteries.in</p>
            </div>
            <div className="flex gap-3 mt-6">
              {["T", "L", "I", "Y"].map((s) => (
                <span
                  key={s}
                  className="w-10 h-10 rounded-lg bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer font-bold text-sm text-green-300 hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-400 text-sm">
            © 2026 Green Batteries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-green-400">
            <Link href="/contact" className="hover:text-lime-400 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-lime-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
