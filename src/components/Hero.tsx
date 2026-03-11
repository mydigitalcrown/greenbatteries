import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-900" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/8 rounded-full blur-[150px]" />
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 backdrop-blur-sm border border-lime-400/20 rounded-full px-5 py-2.5 mb-8">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-lime-300 text-sm font-semibold tracking-wide">Now Launching in Varanasi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
              Swap. Ride.
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Go Green.</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-100/70 mb-3 max-w-lg leading-relaxed">
              Varanasi&apos;s first battery swapping network for electric 2-wheelers &amp; 3-wheelers. 
              No waiting, no charging — just swap and ride.
            </p>
            <p className="text-base text-lime-400/70 mb-10 max-w-md font-medium">
              ✦ Buy EV, not Battery — save up to 40% on vehicle costs
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-lime-400 text-green-950 px-8 py-4 rounded-full font-bold text-base hover:bg-lime-300 transition-all hover:shadow-xl hover:shadow-lime-400/25 active:scale-95"
              >
                Explore Services
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 hover:border-white/30 transition-all active:scale-95"
              >
                How It Works
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 text-green-300/50 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["🟢", "🟢", "🟢"].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-green-800 border-2 border-green-950 flex items-center justify-center text-xs">
                      {["⚡", "🔋", "🛵"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-green-200/60 font-medium">Trusted by riders</span>
              </div>
              <span className="hidden sm:inline text-green-700">|</span>
              <span className="hidden sm:inline text-green-200/60 font-medium">⭐ 4.8 rated</span>
            </div>
          </div>

          {/* Right - Battery Visual */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              {/* Main Battery */}
              <div className="w-60 h-[360px] bg-white/[0.07] backdrop-blur-md rounded-[28px] border border-white/[0.12] flex flex-col items-center justify-center p-7 relative shadow-2xl shadow-black/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/[0.1] rounded-t-xl border border-white/[0.12] border-b-0" />
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white/[0.03] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-lime-400 via-green-400 to-emerald-400 rounded-2xl opacity-80 animate-charge" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="white" opacity={0.95}>
                      <path d="M13 2L4.5 12.5H11L10 22L18.5 11.5H12L13 2Z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white font-black text-2xl mt-3 tracking-tight">100%</p>
              </div>

              {/* Floating pills */}
              <div className="absolute -top-5 -right-14 bg-lime-400 text-green-950 rounded-2xl px-4 py-2.5 font-bold text-sm shadow-xl shadow-lime-400/20" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                ⚡ 2 min swap
              </div>
              <div className="absolute -bottom-3 -left-16 bg-white text-green-700 rounded-2xl px-4 py-2.5 font-bold text-sm shadow-xl" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>
                🌱 Zero Emissions
              </div>
              <div className="absolute top-1/3 -right-28 bg-emerald-500 text-white rounded-2xl px-4 py-2.5 font-bold text-sm shadow-xl shadow-emerald-500/20" style={{ animation: 'float 4.5s ease-in-out infinite 2s' }}>
                📍 Varanasi
              </div>
              <div className="absolute top-2/3 -left-24 bg-green-800 text-lime-300 rounded-2xl px-4 py-2.5 font-bold text-sm shadow-xl border border-green-700" style={{ animation: 'float 5.5s ease-in-out infinite 0.8s' }}>
                🛵 2W & 3W
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle types bar */}
        <div className="mt-14 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
          {[
            { label: "2-Wheelers", icon: "🛵" },
            { label: "3-Wheelers", icon: "🛺" },
            { label: "Loaders", icon: "🚛" },
          ].map((v) => (
            <div key={v.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-2xl px-4 py-3.5 text-center hover:bg-white/[0.1] transition-colors">
              <div className="text-2xl mb-1">{v.icon}</div>
              <p className="text-green-100/80 text-xs sm:text-sm font-semibold">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
