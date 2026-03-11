import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Green Batteries",
  description: "Battery swapping stations, fleet solutions, subscription plans, and smart battery technology — Green Batteries powers Varanasi's EV revolution.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Battery Swapping Stations",
      desc: "Walk in, swap your depleted battery for a fully charged one in under 2 minutes. Our automated stations are located across Varanasi's key corridors — near ghats, markets, highways, and commercial zones.",
      features: ["100% charged battery guaranteed", "Under 2-minute swap time", "QR-code based authentication", "Real-time station availability on app"],
      icon: "🔋",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Fleet Management Solutions",
      desc: "Dedicated battery swapping for delivery fleets, e-rickshaw operators, and logistics companies. We help you run your fleet without downtime, with priority station access and centralized billing.",
      features: ["Priority swap access", "Centralized fleet dashboard", "Bulk pricing & monthly billing", "Dedicated account manager"],
      icon: "🚛",
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Flexible Subscription Plans",
      desc: "Choose from daily, weekly, or monthly swap plans. No upfront battery cost — just pay for the energy you consume. Perfect for individual riders and small fleet owners.",
      features: ["Pay-per-swap or unlimited plans", "No battery ownership needed", "Flexible plan switching", "Early adopter discounts in Varanasi"],
      icon: "⭐",
      color: "from-lime-400 to-green-500",
    },
    {
      title: "Station Partner Program",
      desc: "Own a shop, garage, or retail space in Varanasi? Become a Green Batteries station partner. We install the infrastructure, you earn recurring revenue from every swap.",
      features: ["Zero infrastructure cost", "Steady monthly income", "Full training & support", "Increased foot traffic to your location"],
      icon: "🤝",
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-lime-400">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive battery swapping solutions for every type of electric vehicle — from individual riders to large fleets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 hover-lift ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={`bg-gradient-to-br ${service.color} p-10 sm:p-14 text-white flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{service.desc}</p>
                </div>
                <div className={`bg-white p-10 sm:p-14 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="font-bold text-gray-900 text-lg mb-6">Key Features</h4>
                  <ul className="space-y-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                        <span className="text-gray-600 text-lg">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold mt-8 hover:gap-3 transition-all text-lg"
                  >
                    Get Started
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swap vs Charge Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Swap vs Charge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Swapping <span className="gradient-text">Wins</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Charging */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">🔌</div>
                <h3 className="text-xl font-bold text-gray-900">Traditional Charging</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "Charge Time", value: "4-6 hours", bad: true },
                  { label: "Daily Downtime", value: "High", bad: true },
                  { label: "Battery Cost", value: "Included in EV price", bad: true },
                  { label: "Range Anxiety", value: "Yes", bad: true },
                  { label: "Earnings Impact", value: "Lower by ~40%", bad: true },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-600">{item.label}</span>
                    <span className={`font-semibold ${item.bad ? 'text-red-500' : 'text-green-600'}`}>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Swapping */}
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-300 relative">
              <div className="absolute -top-3 right-6 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">RECOMMENDED</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-2xl">⚡</div>
                <h3 className="text-xl font-bold text-gray-900">Green Batteries Swap</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: "Swap Time", value: "Under 2 min" },
                  { label: "Daily Downtime", value: "Almost Zero" },
                  { label: "Battery Cost", value: "₹0 (Pay per swap)" },
                  { label: "Range Anxiety", value: "None" },
                  { label: "Earnings Impact", value: "Up to 43% more" },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-green-100">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold text-green-600">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teasers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Simple, <span className="gradient-text">Affordable</span> Plans
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Pay Per Swap",
                price: "₹49",
                unit: "/swap",
                features: ["No commitment", "Any station access", "App-based payment", "Best for occasional riders"],
                highlighted: false,
              },
              {
                name: "Unlimited Monthly",
                price: "₹1,499",
                unit: "/month",
                features: ["Unlimited swaps", "Priority access", "Fleet dashboard", "Best for daily riders"],
                highlighted: true,
              },
              {
                name: "Fleet Plan",
                price: "Custom",
                unit: "pricing",
                features: ["Volume discounts", "Dedicated support", "Analytics & reports", "Best for 10+ vehicles"],
                highlighted: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-3xl p-8 text-center hover-lift ${plan.highlighted ? 'bg-green-600 text-white ring-4 ring-green-300 scale-105' : 'bg-gray-50 border border-gray-200'}`}>
                <h3 className={`text-lg font-bold mb-2 ${plan.highlighted ? 'text-green-100' : 'text-gray-500'}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'text-green-200' : 'text-gray-400'}`}>{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-500'}`}>
                      ✓ {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full font-bold transition-all ${plan.highlighted ? 'bg-white text-green-700 hover:bg-lime-400' : 'bg-green-600 text-white hover:bg-green-500'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">* Launch pricing for Varanasi. Subject to change.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to start swapping?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Get in touch and our team will help you find the best plan for your needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 transition-all hover:shadow-xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
