import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Vehicles | Green Batteries",
  description: "Green Batteries supports electric 2-wheelers, 3-wheelers, e-rickshaws, and electric loaders. See all compatible vehicles.",
};

export default function VehiclesPage() {
  const vehicleCategories = [
    {
      category: "Electric 2-Wheelers",
      emoji: "🛵",
      desc: "Scooters and motorcycles used for daily commute, food delivery, and last-mile logistics. Battery swapping eliminates downtime and keeps your 2-wheeler running all day.",
      benefits: ["Perfect for delivery riders", "60-80 km range per swap", "Fits major EV brands", "Most popular for gig workers"],
      color: "from-green-500 to-emerald-600",
    },
    {
      category: "Electric 3-Wheelers",
      emoji: "🛺",
      desc: "E-rickshaws and auto-rickshaws are the lifeline of Varanasi's transport. Our battery swap stations are designed to keep them running 24/7 with zero downtime.",
      benefits: ["Ideal for Varanasi's e-rickshaws", "80-100 km range per swap", "Higher earnings vs charging", "Bulk fleet plans available"],
      color: "from-emerald-500 to-teal-400",
    },
    {
      category: "Electric Loaders",
      emoji: "🚛",
      desc: "Cargo e-vehicles and loaders used for goods delivery, logistics, and commercial transport. Swappable batteries mean your loader never stops earning.",
      benefits: ["Built for heavy-duty use", "100+ km range per swap", "Fleet management dashboard", "Custom battery configurations"],
      color: "from-green-600 to-green-800",
    },
  ];

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
            Compatible Vehicles
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Vehicles We <span className="text-lime-400">Power</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            From delivery scooters to e-rickshaws and cargo loaders — Green Batteries swaps keep every EV going.
          </p>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {vehicleCategories.map((vehicle, index) => (
              <div key={index} className="grid lg:grid-cols-5 gap-8 items-center">
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`bg-gradient-to-br ${vehicle.color} rounded-3xl p-12 flex flex-col items-center justify-center min-h-[300px]`}>
                    <div className="text-8xl mb-4">{vehicle.emoji}</div>
                    <h3 className="text-2xl font-bold text-white text-center">{vehicle.category}</h3>
                  </div>
                </div>
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{vehicle.category}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{vehicle.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {vehicle.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3">
                        <span className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swap vs Charge for Drivers */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Earn <span className="text-lime-400">43% More</span> with Swapping
            </h2>
            <p className="text-green-200 text-lg max-w-2xl mx-auto">
              Riders using battery swapping earn significantly more than those who charge — because you never wait.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Daily Running Time", charge: "6-7 hrs", swap: "9+ hrs" },
              { label: "Average Daily Earnings", charge: "₹450", swap: "₹650" },
              { label: "Monthly Battery Cost", charge: "EMI ₹3000+", swap: "Plan ₹1499" },
            ].map((row, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center">
                <h4 className="text-green-300 text-sm font-semibold mb-4">{row.label}</h4>
                <div className="space-y-3">
                  <div className="bg-red-500/20 rounded-xl py-2 px-4">
                    <span className="text-red-300 text-xs">Charging</span>
                    <p className="text-white font-bold text-lg">{row.charge}</p>
                  </div>
                  <div className="bg-lime-400/20 rounded-xl py-2 px-4">
                    <span className="text-lime-300 text-xs">Green Batteries</span>
                    <p className="text-lime-400 font-bold text-lg">{row.swap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Note */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Growing Compatibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              We&apos;re Expanding <span className="gradient-text">Vehicle Support</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Our standardized battery packs are designed to work with major EV manufacturers. 
              As we grow in Varanasi, we&apos;re adding compatibility with more OEMs and vehicle types. 
              Don&apos;t see your vehicle? Let us know!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:shadow-xl hover:shadow-green-200">
                Check Compatibility
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all">
                See Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
