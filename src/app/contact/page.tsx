import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Green Batteries",
  description: "Get in touch with Green Batteries in Varanasi. Reach us for battery swap queries, fleet partnerships, or station partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-lime-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            We&apos;re Here to Help
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-lime-400">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about battery swapping, fleet plans, or becoming a station partner in Varanasi? Reach out and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Aditya Pandey"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="aditya@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">I&apos;m Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="rider">Battery Swap Subscription (Rider)</option>
                    <option value="fleet">Fleet Management Solution</option>
                    <option value="station">Become a Station Partner</option>
                    <option value="dealer">EV Dealer / OEM Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:shadow-xl hover:shadow-green-200 cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Varanasi Office</h4>
                      <p className="text-gray-600 leading-relaxed">Sigra, Varanasi<br />Uttar Pradesh 221010</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-400 text-sm">Mon - Sat, 9 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@greenbatteries.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Cards */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <Link href="/services" className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors font-medium">
                    <span className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-sm">→</span>
                    View Subscription Plans
                  </Link>
                  <Link href="/vehicles" className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors font-medium">
                    <span className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-sm">→</span>
                    Check Vehicle Compatibility
                  </Link>
                  <Link href="/how-it-works" className="flex items-center gap-3 text-green-700 hover:text-green-600 transition-colors font-medium">
                    <span className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-sm">→</span>
                    Learn How Swapping Works
                  </Link>
                </div>
              </div>

              {/* Partner CTA */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-2">Become a Station Partner</h4>
                <p className="text-green-100 text-sm mb-4 leading-relaxed">
                  Own a shop or parking spot in Varanasi? Earn extra income by hosting a Green Batteries swap station — low investment, high returns.
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-50 transition-all">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🗺️</span>
              <p className="text-gray-500 font-medium">Varanasi Station Map — Coming Soon</p>
              <p className="text-gray-400 text-sm">Interactive map of all swap stations across Varanasi</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
