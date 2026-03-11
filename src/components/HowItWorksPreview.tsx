import Link from "next/link";

export default function HowItWorksPreview() {
  const steps = [
    { step: "01", icon: "📍", title: "Find a Station", desc: "Open the app and locate the nearest swap station in Varanasi." },
    { step: "02", icon: "🔋", title: "Swap Battery", desc: "Drop your drained battery, pick up a fully charged one." },
    { step: "03", icon: "💳", title: "Quick Payment", desc: "Pay per swap or use your subscription — UPI, wallet, or cash." },
    { step: "04", icon: "🚀", title: "Ride Away", desc: "Back on the road in under 2 minutes with full charge." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-green-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-5 tracking-wide">
            SIMPLE PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Battery swapping is faster than a chai break. Four simple steps and you&apos;re back on the road.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="bg-gray-50 rounded-3xl p-7 h-full border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-sm">{s.step}</span>
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              {/* Connector arrow on desktop */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-green-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-500 transition-all hover:shadow-xl hover:shadow-green-200 active:scale-95">
            Learn More
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
