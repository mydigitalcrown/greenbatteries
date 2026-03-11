export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="12" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <rect x="9" y="2" width="6" height="2" rx="1" fill="white"/>
                  <rect x="9" y="10" width="6" height="8" rx="1" fill="#4ade80"/>
                  <path d="M12 11L10.5 14H13.5L12 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold">
                Green<span className="text-green-400">Batteries</span>
              </span>
            </div>
            <p className="text-green-300 leading-relaxed mb-6">
              Powering the future of electric mobility with smart battery swapping technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-green-300 hover:text-lime-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {["Battery Swapping", "Fleet Solutions", "Subscription Plans", "Smart Batteries", "Station Locator"].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="text-green-300 hover:text-lime-400 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-green-300 mb-4">
              Subscribe to get the latest news and updates from Green Batteries.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-green-900 border border-green-800 text-white placeholder-green-500 focus:border-green-600 focus:outline-none"
              />
              <button className="px-4 py-3 bg-green-600 rounded-xl hover:bg-green-500 transition-colors font-bold">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-400 text-sm">
            © 2026 Green Batteries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-green-400">
            <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
