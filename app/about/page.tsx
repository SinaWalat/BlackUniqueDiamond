"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Target, Eye, Zap, Shield, ChevronRight } from "lucide-react"

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/refinery.jpeg"
                        alt="Refinery background"
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#f48c21]" />
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">About Us</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                            Corporate <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Overview</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Corporate Overview with Image */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className={`grid lg:grid-cols-2 gap-16 mb-32 items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                                Black Unique Diamond is an integrated petroleum products producer and service provider with refining and operational assets strategically located in the Kurdistan Region of Iraq. The company is engaged in the production, processing, commercialization, logistics, and technical development of refined petroleum products for regional and international markets.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                By combining production capabilities with advanced logistics infrastructure and in-house research and development expertise, Black Unique Diamond delivers reliable, scalable, and quality-driven solutions to multinational companies, refineries, traders, and governmental entities.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/dscf4091.jpeg"
                                alt="Operational assets"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#f48c21]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        {/* Mission */}
                        <div className="group p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-[#f48c21]/30 relative overflow-hidden transition-all duration-500 shadow-[0_0_50px_-10px_rgba(244,140,33,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/10 via-transparent to-transparent opacity-100" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#f48c21] flex items-center justify-center">
                                        <Target className="w-8 h-8 text-black" />
                                    </div>
                                    <span className="text-5xl font-black text-[#f48c21]/20 font-serif">01</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Mission</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    To produce and supply high-quality refined and blended fuel products that meet international standards while maintaining operational excellence and commercial integrity.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-[#f48c21]/30 relative overflow-hidden transition-all duration-500 shadow-[0_0_50px_-10px_rgba(244,140,33,0.1)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/10 via-transparent to-transparent opacity-100" />
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[#f48c21] flex items-center justify-center">
                                        <Eye className="w-8 h-8 text-black" />
                                    </div>
                                    <span className="text-5xl font-black text-[#f48c21]/20 font-serif">02</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Vision</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    To become a trusted regional producer and international partner in the refined petroleum products value chain.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Advantages & Strengths */}
                    <div className="space-y-20">
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <h2 className="text-4xl md:text-5xl font-black">Competitive Advantages</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21]/30 to-transparent" />
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "Strategic refining and logistics location in Northern Iraq",
                                    "Integrated commercial, logistics, and R&D capabilities",
                                    "Multimodal transportation and transshipment infrastructure",
                                    "Advanced technical and formulation expertise",
                                    "Strong partnerships with international service providers"
                                ].map((item, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#f48c21]/30 transition-all duration-300 flex items-start gap-4">
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
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21]/30 to-transparent" />
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "Strong operational focus on Diesel & Gasoline",
                                    "Integrated trading and logistics capabilities",
                                    "Technical expertise and quality-driven operations",
                                    "Reliable regional and cross-border supply execution"
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-[#f48c21]/20 transition-all duration-500">
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
