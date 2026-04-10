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
      <div className="container mx-auto px-6 relative z-10">

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: Lab Analysis (Data Focus) */}
          <div className={`group relative h-[500px] rounded-[2.5rem] bg-black border border-white/10 overflow-hidden transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#f48c21]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#f48c21]/25 transition-colors duration-500" />

            <div className="relative h-full p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#f48c21] flex items-center justify-center mb-8 shadow-lg shadow-[#f48c21]/20">
                <Beaker className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-3xl font-black text-white mb-2">Lab Analysis</h3>
              <p className="text-white/40 text-sm mb-8">Real-time quality monitoring parameters.</p>

              <div className="mt-auto space-y-4">
                {/* Fake Data Bars */}
                {[
                  { label: "Sulfur", val: "< 10ppm", width: "10%" },
                  { label: "Purity", val: "99.9%", width: "99%" },
                  { label: "Octane", val: "95+", width: "85%" }
                ].map((item, i) => (
                  <div key={i} className="group/bar">
                    <div className="flex justify-between text-xs font-bold text-white/40 mb-2 uppercase tracking-wider">
                      <span>{item.label}</span>
                      <span className="text-white">{item.val}</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#f48c21] rounded-full transition-all duration-1000 ease-out group-hover/bar:bg-white"
                        style={{ width: isVisible ? item.width : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Certifications (Badge Focus) */}
          <div className={`group relative h-[500px] rounded-[2.5rem] bg-black border border-white/10 overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#f48c21]/10 rounded-full blur-[60px] group-hover:bg-[#f48c21]/20 transition-colors duration-500" />

            <div className="relative h-full p-8 flex flex-col items-center text-center">
              <div className="mt-8 mb-8 relative">
                {/* Animated Rings */}
                <div className="absolute inset-0 border border-[#f48c21]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-10px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                <div className="w-24 h-24 rounded-full bg-[#f48c21] flex items-center justify-center shadow-[0_0_40px_rgba(244,140,33,0.4)]">
                  <Award className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-black text-white mb-2">ISO 9001</h3>
              <p className="text-[#f48c21] font-bold text-sm tracking-widest uppercase mb-8">Certified Excellence</p>

              <div className="mt-auto grid grid-cols-2 gap-3 w-full">
                {['ISO 14001', 'ISO 45001'].map((iso) => (
                  <div key={iso} className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-bold text-sm hover:border-[#f48c21]/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                    {iso}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: HSE (Icon Focus) */}
          <div className={`group relative h-[500px] rounded-[2.5rem] bg-black border border-white/10 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#f48c21]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#f48c21]/25 transition-colors duration-500" />

            <div className="relative h-full p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#f48c21] flex items-center justify-center mb-8 shadow-lg shadow-[#f48c21]/20">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-3xl font-black text-white mb-2">Safety First</h3>
              <p className="text-white/40 text-sm mb-8">Comprehensive HSE management systems.</p>

              <div className="mt-auto space-y-4">
                {[
                  { icon: Activity, text: "24/7 Monitoring" },
                  { icon: Leaf, text: "Zero Emissions Goal" },
                  { icon: CheckCircle, text: "Full Compliance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#f48c21]/50 hover:bg-white/10 transition-all duration-300 cursor-default">
                    <item.icon className="w-5 h-5 text-[#f48c21]" />
                    <span className="text-white/80 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
