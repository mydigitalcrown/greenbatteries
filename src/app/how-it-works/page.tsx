import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Green Batteries",
  description: "Learn how Green Batteries' swap stations work — locate, swap, pay, and ride in under 2 minutes.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Locate a Station",
      desc: "Open the Green Batteries app and find the nearest swap station in Varanasi. Real-time availability and navigation help you reach the closest point instantly.",
      icon: "📍",
      features: ["GPS-guided navigation", "Real-time battery availability", "50+ stations planned across Varanasi"],
    },
    {
      step: "02",
      title: "Swap Your Battery",
      desc: "Park your EV at the station, remove the discharged battery, and pick up a fully charged one from the swap cabinet. The entire process takes under 2 minutes.",
      icon: "🔋",
      features: ["No technical skill needed", "Under 2 minutes swap time", "Trained station partner assistance"],
    },
    {
      step: "03",
      title: "Pay & Go",
      desc: "Pay per swap or use your subscription plan. UPI, wallet, and cash options make payment quick and hassle-free.",
      icon: "💳",
      features: ["UPI / Wallet / Cash accepted", "₹49 per swap or monthly plan", "Instant digital receipt"],
    },
    {
      step: "04",
      title: "Ride Further",
      desc: "Hit the road with a fresh, fully charged battery. No charging anxiety, no idle waiting, just continuous riding and earning.",
      icon: "🚀",
      features: ["60-100 km range per swap", "Swap unlimited times per day", "Zero downtime, maximum earning"],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-green" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Simple 4-Step Process
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How <span className="text-lime-400">It Works</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Battery swapping is faster than buying chai. Locate, swap, pay, ride — all in under 2 minutes.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((s, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-green-200" />
                )}
                <div className={`grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-8 sm:p-12 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-600 text-white font-bold text-lg">{s.step}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-3">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0">✓</span>
                          <span className="text-gray-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl shadow-green-200/50">
                      <span className="text-7xl sm:text-8xl">{s.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Green Batteries <span className="text-lime-400">Advantage</span></h2>
            <p className="text-green-200">Numbers that speak for themselves</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "< 2 min", label: "Swap Time" },
              { num: "₹49", label: "Per Swap Cost" },
              { num: "24/7", label: "Station Access" },
              { num: "100 km+", label: "Range Per Swap" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-lime-400 mb-2">{stat.num}</div>
                <div className="text-green-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Do I need my own battery?", a: "No! With Green Batteries you ride without owning a battery. Buy your EV without a battery and use our subscription to swap charged batteries whenever you need." },
              { q: "How long does a swap take?", a: "Under 2 minutes. Pull up, swap, and you're back on the road — faster than a quick chai stop." },
              { q: "What if there's no charged battery available?", a: "Our app shows real-time availability at every station, so you can always find a charged battery nearby. As our Varanasi network grows, coverage only gets better." },
              { q: "Is the battery safe?", a: "Absolutely. Every battery undergoes automated health checks at the swap station. Damaged or degraded batteries are flagged and removed from circulation." },
              { q: "What are the payment options?", a: "We accept UPI (GPay, PhonePe, Paytm), digital wallets, and cash. Monthly subscription plans offer the best value." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
