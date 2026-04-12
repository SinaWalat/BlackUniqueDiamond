"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Target, Eye, Zap, Shield, ChevronRight } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-48 pb-8 md:pt-64 md:pb-16 overflow-hidden">


                <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#f48c21]" />
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight text-white">
                            Corporate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48c21] to-[#fdce07]">Overview</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Corporate Overview with Image */}
            <section className="pb-32">
                <div className="w-full max-w-[1400px] mx-auto px-6">
                    <div className={`grid lg:grid-cols-2 gap-16 mb-32 items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                                Black Unique Diamond is an integrated petroleum products producer and service provider with refining and operational assets strategically located in the Kurdistan Region of Iraq. The company is engaged in the production, processing, commercialization, logistics, and technical development of refined petroleum products for regional and international markets.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                By combining production capabilities with advanced logistics infrastructure and in-house research and development expertise, Black Unique Diamond delivers reliable, scalable, and quality-driven solutions to multinational companies, refineries, traders, and governmental entities.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10">
                            <Image
                                src="/images/Cover.jpeg"
                                alt="Operational assets"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#f48c21]/20 to-transparent opacity-100" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">

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
                                <div className="absolute -right-16 md:-right-8 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[350px] md:h-[350px] opacity-10 md:opacity-20 group-hover:opacity-100 pointer-events-none transition-all duration-700 z-0">
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
                                <div className="absolute -right-16 md:-right-8 top-1/2 -translate-y-1/2 w-64 h-64 md:w-[350px] md:h-[350px] opacity-10 md:opacity-20 group-hover:opacity-100 pointer-events-none transition-all duration-700 z-0">
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

                    {/* Advantages & Strengths */}
                    <div className="space-y-20">
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <h2 className="text-4xl md:text-5xl font-black">Competitive Advantages</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21] to-[#fdce07]" />
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "Strategic refining and logistics location in Northern Iraq",
                                    "Integrated commercial, logistics, and R&D capabilities",
                                    "Multimodal transportation and transshipment infrastructure",
                                    "Advanced technical and formulation expertise",
                                    "Strong partnerships with international service providers"
                                ].map((item, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#f48c21]/30 transition-all duration-300 flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#f48c21]/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <Zap className="w-4 h-4 text-[#f48c21]" />
                                        </div>
                                        <p className="text-gray-400">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <h3 className="text-4xl md:text-5xl font-black">Key Strengths</h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21] to-[#fdce07]" />
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "Strong operational focus on Diesel & Gasoline",
                                    "Integrated trading and logistics capabilities",
                                    "Technical expertise and quality-driven operations",
                                    "Reliable regional and cross-border supply execution"
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-[#f48c21]/20 transition-all duration-500">
                                        <Shield className="w-10 h-10 text-[#f48c21] mb-6" />
                                        <p className="text-lg font-medium text-white/80">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
