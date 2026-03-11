import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Green Batteries",
  description: "Learn about Green Batteries — Varanasi's first battery swapping network. Our mission, vision, team, and commitment to clean EV mobility.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-lime-400">Green Batteries</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Building Varanasi&apos;s cleanest and smartest battery swapping infrastructure for electric vehicles.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-3xl p-10 hover-lift">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To revolutionize urban mobility in Varanasi by providing affordable, accessible, 
                and eco-friendly battery swapping solutions. We aim to eliminate range anxiety 
                and make electric vehicles the preferred choice for every rider and fleet operator.
              </p>
            </div>
            <div className="bg-green-50 rounded-3xl p-10 hover-lift">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A pollution-free Varanasi where every electric vehicle runs on swappable green batteries.
                We envision a station at every square kilometer — ensuring no rider is ever stranded 
                and clean mobility is just a swap away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Green Batteries?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The <span className="gradient-text">Smart Choice</span> for Varanasi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "2-Minute Swap",
                desc: "100% charged battery in under 2 minutes. No downtime, maximum productivity for riders and fleet operators.",
              },
              {
                icon: "💰",
                title: "Buy EV, Not Battery",
                desc: "Save up to 40% on your EV purchase cost. Pay only for the energy you use with flexible swap plans.",
              },
              {
                icon: "🔋",
                title: "Advanced Li-Ion Batteries",
                desc: "Smart, IoT-enabled lithium-ion batteries with real-time health monitoring, GPS tracking, and OTA updates.",
              },
              {
                icon: "📍",
                title: "Dense Station Network",
                desc: "We're building stations across every key zone in Varanasi — ghats, markets, highways, and commercial hubs.",
              },
              {
                icon: "♻️",
                title: "100% Green Energy",
                desc: "Zero direct emissions from every swap. Contributing to cleaner air for the holy city of Varanasi.",
              },
              {
                icon: "🤝",
                title: "Partner Ecosystem",
                desc: "Become a station partner and earn steady income. We provide the infrastructure, you provide the location.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-green-100 hover:border-green-300 hover-lift group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Varanasi Focus */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-800 text-lime-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Made for Varanasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Starting Strong in the <span className="text-lime-400">City of Lights</span>
              </h2>
              <p className="text-green-200 text-lg leading-relaxed mb-6">
                Varanasi is our home, and we&apos;re committed to transforming how this ancient city moves. 
                With its dense lanes, high auto-rickshaw traffic, and growing e-rickshaw fleet, 
                Varanasi is the perfect launchpad for battery swapping.
              </p>
              <ul className="space-y-4">
                {[
                  "Strategic station placement near ghats, markets & transit hubs",
                  "Tailored solutions for e-rickshaws and delivery vehicles",
                  "Local partnerships with fleet operators and dealers",
                  "24/7 support with Hindi & local language assistance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-lime-400 text-green-900 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                    <span className="text-green-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "50+", label: "Planned Stations", sub: "in Varanasi" },
                { num: "1000+", label: "Target Riders", sub: "by Year 1" },
                { num: "24/7", label: "Station Access", sub: "always available" },
                { num: "₹0", label: "Joining Fee", sub: "for early riders" },
              ].map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 text-center hover-lift">
                  <div className="text-3xl font-bold text-lime-400">{s.num}</div>
                  <div className="font-semibold text-white mt-1">{s.label}</div>
                  <div className="text-green-300 text-sm">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to join the <span className="gradient-text">green revolution</span>?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a rider, fleet operator, or interested in becoming a station partner — 
            we&apos;d love to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:shadow-xl hover:shadow-green-200">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
