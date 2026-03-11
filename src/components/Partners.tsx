import Link from "next/link";

export default function Partners() {
  const partnerTypes = [
    {
      icon: "🏪",
      title: "Station Partners",
      desc: "Own a shop or parking space? Earn ₹25,000+/month by hosting a swap station.",
      cta: "Become a Partner",
    },
    {
      icon: "🏭",
      title: "EV Manufacturers",
      desc: "Integrate our swap-compatible batteries into your EV lineup.",
      cta: "Partner with Us",
    },
    {
      icon: "🚚",
      title: "Fleet Operators",
      desc: "Manage your delivery or transport fleet with unlimited swaps.",
      cta: "Get Fleet Plan",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-5 tracking-wide">
            PARTNERSHIPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Grow <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you&apos;re a shop owner, EV manufacturer, or fleet operator — there&apos;s a partnership model for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnerTypes.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 flex flex-col">
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-1">{p.desc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-green-600 font-bold text-sm hover:text-green-500 transition-colors group"
              >
                {p.cta}
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-0.5 transition-transform">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
