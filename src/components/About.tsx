import Link from "next/link";

export default function About() {
  const features = [
    {
      icon: "⚡",
      title: "2-Minute Swap",
      desc: "Pull in, swap your drained battery for a fully charged one, and ride off — faster than a chai break.",
      gradient: "from-yellow-400 to-orange-500",
      bg: "bg-amber-50",
    },
    {
      icon: "💰",
      title: "Save 40% on Costs",
      desc: "No battery ownership. Pay per swap or subscribe monthly — drastically cheaper than charging or petrol.",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50",
    },
    {
      icon: "🌿",
      title: "Zero Emissions",
      desc: "Every swap reduces carbon footprint. 100% clean energy batteries powering Varanasi's streets responsibly.",
      gradient: "from-emerald-400 to-teal-500",
      bg: "bg-emerald-50",
    },
    {
      icon: "📱",
      title: "Smart & Connected",
      desc: "IoT-enabled batteries with real-time monitoring, health checks, and an app to find the nearest station.",
      gradient: "from-blue-400 to-indigo-500",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100/50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-100/40 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-5 tracking-wide">
            WHY GREEN BATTERIES?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Powering Varanasi&apos;s <br className="hidden sm:block" />
            <span className="gradient-text">EV Revolution</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We&apos;re building a network of smart battery swap stations so EV riders 
            never worry about charging or downtime again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-16 text-center">
          <Link href="/about" className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:text-green-500 transition-colors group">
            Learn more about our mission
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 transition-transform">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
