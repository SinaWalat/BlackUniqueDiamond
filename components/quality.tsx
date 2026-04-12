"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, ShieldCheck, Leaf, Award, Beaker, Zap, BarChart3, Fingerprint, Activity } from "lucide-react"

export function Quality() {
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
    <section ref={sectionRef} id="quality" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header - Consistent with other sections */}
        <div className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-white/60 text-sm font-bold tracking-[0.25em] uppercase">Our Standards</span>
          <h2 className="mt-6 text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
            Quality & <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Compliance</span>
          </h2>
          <p className="mt-6 text-white/40 text-lg leading-relaxed">
            Rigorous testing, international certifications, and zero-compromise safety protocols define our operations.
          </p>
        </div>

        {/* Symmetrical Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">

          {/* Card 1: Lab Analysis */}
          <div className={`relative h-[500px] rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-x-0 top-6 bottom-[30%] flex items-center justify-center pointer-events-none px-6 z-0">
              <img src="/Lab.png" alt="Lab Analysis" className="w-full h-[85%] max-w-[280px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col z-20">
              <h3 className="text-4xl font-black text-white tracking-tight mb-3">Lab Analysis</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-6 bg-[#f48c21]" />
                <p className="text-[#f48c21] font-bold text-[10px] tracking-widest uppercase">Real-Time Data</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[95%]">
                Cutting-edge laboratory monitoring for perfect purity and performance validation parameters.
              </p>
            </div>
          </div>

          {/* Card 2: Certifications */}
          <div className={`relative h-[500px] rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-x-0 top-6 bottom-[30%] flex items-center justify-center pointer-events-none px-6 z-0">
              <img src="/ISO.png" alt="ISO Certification" className="w-full h-[85%] max-w-[280px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col z-20">
              <h3 className="text-4xl font-black text-white tracking-tight mb-3">ISO 9001</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-6 bg-[#f48c21]" />
                <p className="text-[#f48c21] font-bold text-[10px] tracking-widest uppercase">Certified Excellence</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[95%]">
                Operating with globally recognized systems, fully integrated with <span className="text-white font-bold">ISO 14001</span> (Environment) and <span className="text-white font-bold">ISO 45001</span> (Safety) to ensure premium delivery.
              </p>
            </div>
          </div>

          {/* Card 3: Safety First */}
          <div className={`relative h-[500px] rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-x-0 top-6 bottom-[30%] flex items-center justify-center pointer-events-none px-6 z-0">
              <img src="/Safety.png" alt="Safety First" className="w-full h-[85%] max-w-[280px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col z-20">
              <h3 className="text-4xl font-black text-white tracking-tight mb-3">Safety First</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-6 bg-[#f48c21]" />
                <p className="text-[#f48c21] font-bold text-[10px] tracking-widest uppercase">HSE Management</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[95%]">
                Comprehensive safety tracking and full compliance protocols implemented globally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
