"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black text-white leading-none">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Impact() {
  const stats = [
    { number: 50, suffix: "+", label: "Swap Stations", desc: "Planned across Varanasi", icon: "📍" },
    { number: 1000, suffix: "+", label: "Target Riders", desc: "In our first year", icon: "🛵" },
    { number: 2, suffix: " min", label: "Swap Time", desc: "Average battery swap", icon: "⚡" },
    { number: 40, suffix: "%", label: "Cost Savings", desc: "Vs traditional charging", icon: "💰" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-5 tracking-wide">
            OUR IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Numbers That <span className="gradient-text">Speak Green</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Building Varanasi&apos;s green mobility future — one swap at a time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/[0.08] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-3xl mb-4">{stat.icon}</div>
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <h3 className="text-base font-bold text-lime-400 mt-3 mb-1">{stat.label}</h3>
                <p className="text-green-300/60 text-sm">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-20 bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 rounded-[28px] p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Make the Switch?
            </h3>
            <p className="text-lg text-green-200/70 mb-10 max-w-xl mx-auto">
              Join the growing community of Varanasi riders choosing smarter, 
              greener mobility. Start swapping today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-lime-400 text-green-950 px-8 py-4 rounded-full font-bold text-base hover:bg-lime-300 transition-all hover:shadow-xl hover:shadow-lime-400/20 active:scale-95"
              >
                Join Green Batteries →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all active:scale-95"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}