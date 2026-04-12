"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronDown, Droplets, Flame, Factory } from "lucide-react"

const stats = [
  { value: "500K+", label: "Barrels/Month", icon: Droplets },
  { value: "15+", label: "Years Experience", icon: Factory },
  { value: "100%", label: "Quality Assured", icon: Flame },
]

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Cover.jpeg"
          alt="Petroleum facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>



      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f48c21]/30 bg-black/50 backdrop-blur-sm mb-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <span className="w-2 h-2 bg-gradient-to-r from-[#f48c21] to-[#fdce07] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Kurdistan Region of Iraq</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6">
            <span
              className={`block text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              BLACK UNIQUE
            </span>
            <span
              className={`block text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent tracking-tight transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              DIAMOND
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-lg md:text-xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Integrated petroleum products producer and service provider, delivering excellence across the energy value chain.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <a
              href="#products"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f48c21] to-[#fdce07] text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(244,140,33,0.5)] transition-all duration-300"
            >
              Explore Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#f48c21]/50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 max-w-2xl transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group text-center md:text-left"
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-[#f48c21] group-hover:scale-110 transition-transform" />
                  <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-[#f48c21] animate-bounce" />
      </div>


    </section>
  )
}
