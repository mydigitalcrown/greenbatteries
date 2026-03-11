"use client";
import { useEffect, useState, useRef } from "react";

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
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Impact() {
  const stats = [
    { number: 500, suffix: "+", label: "Swapping Stations", desc: "Across the country" },
    { number: 50000, suffix: "+", label: "Happy Riders", desc: "And growing daily" },
    { number: 2, suffix: "M+", label: "Swaps Completed", desc: "Total battery swaps" },
    { number: 1200, suffix: "T", label: "CO₂ Saved", desc: "Tonnes of emissions prevented" },
  ];

  return (
    <section id="impact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Numbers That <span className="gradient-text">Speak Green</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every battery swap contributes to a cleaner, greener planet. Here&apos;s what we&apos;ve achieved together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden group hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                <h3 className="text-xl font-bold text-lime-400 mt-3 mb-1">{stat.label}</h3>
                <p className="text-green-200 text-sm">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action banner */}
        <div className="mt-16 gradient-green rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Make the Switch?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Join thousands of riders who have already made the green transition. 
              Start swapping today!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-400 hover:text-green-900 transition-all hover:shadow-xl"
            >
              Join Green Batteries
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.96-4.158a.75.75 0 111.08-1.04l5.25 5.5a.75.75 0 010 1.04l-5.25 5.5a.75.75 0 11-1.08-1.04l3.96-4.158H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
