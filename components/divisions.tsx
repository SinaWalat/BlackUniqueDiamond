"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Truck, FlaskConical, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const divisions = [
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial & Trading",
    shortTitle: "Trading",
    description: "International trading activities, long-term offtake agreements, and spot market operations with transparent commercial practices.",
    stats: "50+ Partners",
    gradient: "from-black via-black to-black",
    image: "/images/8.jpeg"
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Transportation",
    shortTitle: "Logistics",
    description: "Border-based storage tanks and transshipment yards. Multimodal transport via road, rail, and port access.",
    stats: "24/7 Operations",
    gradient: "from-black via-black to-black",
    image: "/images/31.jpeg"
  },
  {
    id: "rnd",
    icon: FlaskConical,
    title: "Research & Development",
    shortTitle: "R&D",
    description: "Refinery process optimization, product formulation, quality enhancement, and contract-based technical services.",
    stats: "ISO Certified",
    gradient: "from-black via-black to-black",
    image: "/images/5.jpeg"
  },
]

export function Divisions() {
  const [activeId, setActiveId] = useState<string | null>("logistics")
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
    <section ref={sectionRef} id="divisions" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <span className="text-white/60 text-sm font-bold tracking-[0.25em] uppercase pl-1">Our Capabilities</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Business<br />
                <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Divisions</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg max-w-md leading-relaxed">
              Integrated capabilities across commercial, logistics, and R&D delivering excellence at every step.
            </p>
          </div>
        </div>

        {/* Accordion Layout */}
        <div className={`flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {divisions.map((division) => {
            const isActive = activeId === division.id
            return (
              <div
                key={division.id}
                onMouseEnter={() => setActiveId(division.id)}
                className={`relative rounded-[2rem] overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer group ${isActive ? "lg:flex-[2.5]" : "lg:flex-[1]"
                  }`}
              >
                {/* Background Gradient */}
                {/* Background Gradient or Image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient}`}>
                  {/* Optional Background Image */}
                  {(division as any).image && (
                    <>
                        <Image
                          src={(division as any).image}
                          alt={division.title}
                          fill
                          className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </>
                  )}
                  {/* Grain/Texture Overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Ambient Glow - Orange (Only active) */}
                <div className={`absolute -right-20 -top-20 w-80 h-80 bg-[#f48c21] rounded-full blur-[100px] opacity-0 transition-opacity duration-700 mix-blend-screen pointer-events-none ${isActive ? "opacity-20" : "group-hover:opacity-10"
                  }`} />

                {/* Content Container */}
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">

                  {/* Top: Icon & Arrow */}
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive
                      ? "bg-[#f48c21] text-white shadow-[0_10px_30px_rgba(244,140,33,0.3)]"
                      : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white"
                      }`}>
                      <division.icon className="w-6 h-6" />
                    </div>

                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isActive ? "rotate-45 bg-white text-black" : "text-white/40 -rotate-12"
                      }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Middle/Bottom Information */}
                  <div className="mt-8 lg:mt-0">
                    {/* Horizontal Title for Active State */}
                    <div className={`transition-all duration-500 transform origin-left ${isActive
                      ? "opacity-100 translate-y-0 delay-100"
                      : "lg:opacity-0 lg:translate-y-4 lg:absolute"
                      }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold text-[#f48c21] uppercase tracking-wider backdrop-blur-md">
                          {division.stats}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                        {division.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        {division.description}
                      </p>
                    </div>

                    {/* Vertical Title for Inactive State (Desktop only) */}
                    <div className={`hidden lg:block transition-all duration-500 absolute bottom-10 left-10 origin-bottom-left -rotate-90 translate-x-12 ${!isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
                      }`}>
                      <span className="text-4xl font-black text-white/10 whitespace-nowrap tracking-wide group-hover:text-white transition-colors duration-500">
                        {division.shortTitle}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Border effect */}
                <div className={`absolute inset-0 rounded-[2rem] border transition-colors duration-500 pointer-events-none ${isActive ? "border-[#f48c21]/30" : "border-white/5 group-hover:border-white/10"
                  }`} />

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
