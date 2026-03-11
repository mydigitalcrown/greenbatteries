export default function Services() {
  const services = [
    {
      title: "Battery Swapping Stations",
      desc: "Our automated stations let you swap a depleted battery for a fully charged one in seconds. Located across highways, cities, and commercial hubs for maximum convenience.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
          <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2"/>
          <path d="M12 11v6M9 14h6" strokeLinecap="round"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Fleet Management",
      desc: "Dedicated battery swapping solutions for delivery fleets, logistics companies, and ride-sharing services. Bulk plans with priority access and 24/7 support.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="6" width="15" height="10" rx="2"/>
          <path d="M16 9h4l3 3v4h-7V9z"/>
          <circle cx="6.5" cy="18" r="2"/>
          <circle cx="19.5" cy="18" r="2"/>
        </svg>
      ),
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Subscription Plans",
      desc: "Flexible monthly and annual subscription plans for individuals. Unlimited swaps, priority access, and exclusive member perks at every station.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-lime-400 to-green-500",
    },
    {
      title: "Smart Battery Tech",
      desc: "Our proprietary smart batteries feature IoT sensors, real-time health monitoring, GPS tracking, and over-the-air updates for peak performance.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="4" width="12" height="18" rx="2"/>
          <rect x="9" y="2" width="6" height="2" rx="1" fill="currentColor"/>
          <path d="M12 9l-2 4h4l-2 4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-green-600 to-green-800",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powering <span className="gradient-text">Every Journey</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From individual riders to large fleets, we have the right energy solution for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="hover-lift group bg-white rounded-3xl overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold mt-6 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
