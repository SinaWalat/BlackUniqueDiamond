"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Target, Eye, Zap, ArrowRight, Globe } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"


const strengths = [
  "Strong operational focus on Diesel & Gasoline",
  "Integrated trading and logistics capabilities",
  "Technical expertise and quality-driven operations",
  "Reliable regional and cross-border supply execution",
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative bg-black text-white overflow-hidden">
      {/* Background elements - Clean Black */}
      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[#f48c21]" />
                <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Corporate <br />
                <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Overview</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl border-l-3 border-[#f48c21]/30 pl-6">
              Black Unique Diamond is engaged in the production, processing, commercialization, logistics, and technical development of refined petroleum products.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 p-4 pr-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fdce07] to-[#f48c21] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-[#f48c21]/20">
                  15+
                </div>
                <div>
                  <p className="text-white font-bold">Years of</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Excellence</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 pr-6 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fdce07] to-[#f48c21] flex items-center justify-center text-white shadow-md shadow-[#f48c21]/20">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">Global</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Reach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative h-[550px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] group">
              <Image
                src="/images/17.jpeg"
                alt="Team discussion"
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out"
                priority
              />
              {/* Cinematic warm color grade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/10 via-transparent to-[#fdce07]/5 mix-blend-color" />

              {/* Single sleek bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-center gap-10 backdrop-blur-xl bg-black/40 rounded-2xl px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-white">500K+</span>
                    <span className="text-white/50 text-sm leading-tight">barrels<br />per month</span>
                  </div>
                  <div className="w-px h-8 bg-white/15" />
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-white">ISO</span>
                    <span className="text-white/50 text-sm leading-tight">certified<br />standards</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mission & Vision - Card Style (Reference Design) */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Vision Card */}
          <div className={`group relative rounded-[2.5rem] min-h-[380px] md:min-h-[440px] flex flex-col justify-between transition-all duration-1000 delay-300 cursor-pointer z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={150}
              inactiveZone={0.01}
              borderWidth={3}
              variant="orange"
            />
            <div className="relative h-full flex flex-col justify-between p-10 md:p-12 bg-black/90 border border-white/10 rounded-[inherit] overflow-hidden z-20">
              
              {/* Massive 3D Background Embedded */}
              <div className="absolute -right-16 md:-right-8 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[350px] md:h-[350px] opacity-10 md:opacity-20 group-hover:opacity-100 group-hover:scale-105 pointer-events-none transition-all duration-700 z-0">
                <img src="/Vision.png" alt="Vision" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(244,140,33,0.15)]" />
              </div>

              {/* Subtle warm glow - Animates in when visible */}
              <div className={`absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#f48c21]/8 to-transparent rounded-full blur-3xl transition-opacity duration-1000 delay-700 pointer-events-none z-0 ${isVisible ? "opacity-60" : "opacity-0"}`} />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-4xl md:text-5xl font-black leading-tight mb-5 transition-transform duration-1000 delay-500 ${isVisible ? "translate-y-0" : "translate-y-4"}`}>
                    <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Vision</span>
                  </h3>
                  <p className={`text-white/75 text-lg leading-relaxed max-w-sm transition-opacity duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    Become a trusted regional producer and international partner, setting the standard for quality and innovation.
                  </p>
                </div>

                <div className="flex items-end justify-between mt-10">
                  <span className={`text-white/60 text-sm transition-opacity duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>Black Unique — Product Philosophy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`group relative rounded-[2.5rem] min-h-[380px] md:min-h-[440px] flex flex-col justify-between transition-all duration-1000 delay-500 cursor-pointer z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={150}
              inactiveZone={0.01}
              borderWidth={3}
              variant="orange"
            />
            <div className="relative h-full flex flex-col justify-between p-10 md:p-12 bg-black/90 border border-white/10 rounded-[inherit] overflow-hidden z-20">
              
              {/* Massive 3D Background Embedded */}
              <div className="absolute -right-16 md:-right-8 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[350px] md:h-[350px] opacity-10 md:opacity-20 group-hover:opacity-100 group-hover:scale-105 pointer-events-none transition-all duration-700 z-0">
                <img src="/Mission.png" alt="Mission" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(244,140,33,0.15)]" />
              </div>

              {/* Subtle ambient glow - Animates in when visible */}
              <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#f48c21]/8 to-transparent rounded-full blur-3xl transition-opacity duration-1000 delay-1000 pointer-events-none z-0 ${isVisible ? "opacity-60" : "opacity-0"}`} />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-4xl md:text-5xl font-black leading-tight mb-5 transition-transform duration-1000 delay-700 ${isVisible ? "translate-y-0" : "translate-y-4"}`}>
                    <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Mission</span>
                  </h3>
                  <p className={`text-white/55 text-lg leading-relaxed max-w-sm transition-opacity duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    Produce high-quality refined fuel products meeting international standards while maintaining environmental responsibility.
                  </p>
                </div>

                <div className="flex items-end justify-between mt-10">
                  <span className={`text-white/40 text-sm font-semibold tracking-wide transition-opacity duration-1000 delay-[1200ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>Quality. Innovation. Integrity.</span>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Key Strengths - Scrolling Marquee */}
      <div className={`relative overflow-hidden py-16 md:py-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="space-y-4">
          {/* Row 1 - scrolls left */}
          <div className="flex animate-marquee-left">
            {[...strengths, ...strengths, ...strengths, ...strengths].map((strength, i) => (
              <div key={i} className="flex items-center gap-6 flex-shrink-0 px-3">
                <span className="text-2xl md:text-3xl font-black text-white whitespace-nowrap">{strength}</span>
                <span className="text-[#f48c21] text-xl">◆</span>
              </div>
            ))}
          </div>
          {/* Row 2 - scrolls right */}
          <div className="flex animate-marquee-right">
            {[...strengths, ...strengths, ...strengths, ...strengths].map((strength, i) => (
              <div key={i} className="flex items-center gap-6 flex-shrink-0 px-3">
                <span className="text-2xl md:text-3xl font-black text-gray-300 whitespace-nowrap">{strength}</span>
                <span className="text-[#f48c21]/40 text-xl">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#f48c21] to-transparent opacity-30" />
    </section>
  )
}
