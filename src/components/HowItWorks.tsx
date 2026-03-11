export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Locate a Station",
      desc: "Find the nearest Green Batteries swapping station using our app or website. We have stations across all major routes.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Swap Your Battery",
      desc: "Pull out your depleted battery and insert a fully charged one from the station. The entire process takes under 30 seconds.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 6l-9.5 9.5-5-5L1 18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 6h6v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Pay & Ride",
      desc: "Automatic payment through the app. No cash needed. Just swap, scan, and ride away with full power!",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2"/>
          <path d="M1 10h22" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      step: "04",
      title: "Go Green!",
      desc: "Track your carbon savings and environmental impact on the dashboard. Every swap makes the planet cleaner.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22c4-4 8-7.5 8-12S16.42 2 12 2 4 5.5 4 10s4 8 8 12z"/>
          <path d="M12 8v4l2 2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-green-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-800/50 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-800/30 rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-800 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-lime-400">Works</span>
          </h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto">
            Getting started with Green Batteries is as simple as 1-2-3-4. No complicated setup needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-green-700">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full" />
                </div>
              )}
              
              <div className="glass-card rounded-2xl p-8 hover:bg-white/20 transition-all h-full">
                <div className="text-lime-400 font-bold text-5xl opacity-30 mb-4">{step.step}</div>
                <div className="w-14 h-14 rounded-xl bg-lime-400/20 text-lime-400 flex items-center justify-center mb-5 group-hover:bg-lime-400 group-hover:text-green-900 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-green-200 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
