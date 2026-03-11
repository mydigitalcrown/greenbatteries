export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-green" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Powering the EV Revolution</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Swap. Ride.
              <br />
              <span className="text-lime-400">Go Green.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Instant battery swapping for electric vehicles. No waiting, no charging — 
              just swap and ride. Join the clean energy movement with Green Batteries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 hover:text-green-900 transition-all hover:shadow-xl hover:shadow-green-900/20"
              >
                Explore Services
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right - Battery Visual */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              {/* Main Battery */}
              <div className="w-64 h-96 bg-white/10 backdrop-blur-md rounded-3xl border-2 border-white/20 flex flex-col items-center justify-center p-8 relative">
                {/* Battery terminal */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/20 rounded-t-xl border-2 border-white/20 border-b-0" />
                
                {/* Charge level */}
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white/5 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-gradient-to-t from-green-400 to-lime-400 rounded-2xl opacity-80" />
                  {/* Lightning bolt */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="white" opacity={0.9}>
                      <path d="M13 2L4.5 12.5H11L10 22L18.5 11.5H12L13 2Z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-white font-bold text-2xl mt-4">75%</p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-12 bg-lime-400 text-green-900 rounded-2xl px-4 py-2 font-bold text-sm shadow-xl" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                ⚡ 30 sec swap
              </div>
              <div className="absolute -bottom-4 -left-16 bg-white text-green-700 rounded-2xl px-4 py-2 font-bold text-sm shadow-xl" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
                🌱 Zero Emission
              </div>
              <div className="absolute top-1/2 -right-20 bg-emerald-500 text-white rounded-2xl px-4 py-2 font-bold text-sm shadow-xl" style={{ animation: 'float 4.5s ease-in-out infinite 2s' }}>
                🔋 100+ Stations
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity={0.6}>
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
