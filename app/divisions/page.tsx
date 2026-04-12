"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Handshake, Truck, FlaskConical, Beaker, Zap, Settings, Globe, ChevronRight } from "lucide-react"

export default function DivisionsPage() {
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
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">Core Operations</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight text-white">
                            Operational <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48c21] to-[#fdce07]">Divisions</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                            Our integrated structure spans international trading, advanced logistics, and technical innovation, ensuring excellence at every stage of the petroleum value chain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divisions Main Content */}
            <section className="pb-32">
                <div className="w-full max-w-[1400px] mx-auto px-6">
                    <div className="space-y-32">

                        {/* Commercial Division */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">

                                <div className="relative p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/10 overflow-hidden">
                                    <Handshake className="w-16 h-16 text-[#f48c21] mb-8" />
                                    <h2 className="text-4xl font-black mb-6">Commercial & Trading Division</h2>
                                    <p className="text-xl text-white/60 leading-relaxed font-light">
                                        The Commercial Division manages international trading activities, long-term offtake agreements, and spot market operations, ensuring reliable supply execution and transparent commercial practices.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    "International Trading Management",
                                    "Long-term Offtake Agreements",
                                    "Spot Market Operations",
                                    "Supply Execution Reliability"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#f48c21]/20 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-[#f48c21]" />
                                        <span className="text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logistics Division */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="lg:order-2 relative">

                                <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/10">
                                    <Image
                                        src="/images/28.jpeg"
                                        alt="Logistics operations"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-8 left-8">
                                        <Truck className="w-12 h-12 text-[#f48c21] mb-2" />
                                        <h3 className="text-2xl font-bold">Logistics & Transportation</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:order-1 space-y-8">
                                <p className="text-xl text-white/60 leading-relaxed font-light">
                                    The Logistics & Transportation Division operates border-based storage tanks and transshipment yards, enabling rapid cargo transfer to regional land destinations and marine ports.
                                </p>
                                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
                                    <p className="text-white/70 leading-relaxed text-lg mb-8">
                                        Multimodal transport solutions include road, rail, and port access, supported by international freight and customs partners.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Storage Tank Operations", "Transshipment Yards", "Multimodal Solutions", "Customs Partnerships"].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <ChevronRight className="w-4 h-4 text-[#f48c21] mt-1" />
                                                <span className="text-sm text-white/50 uppercase tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* R&D Division */}
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-16">
                                <h2 className="text-4xl md:text-5xl font-black">Research & Development (R&D)</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21] to-[#fdce07]" />
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8 mb-16">
                                <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/10 lg:col-span-2 relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-10 blur-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src="/images/lab.jpeg"
                                            alt="Lab equipment"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative z-10">
                                        <FlaskConical className="w-12 h-12 text-[#f48c21] mb-8" />
                                        <p className="text-2xl text-white/80 leading-relaxed font-light mb-8">
                                            The R&D Division focuses on refinery process optimization, product formulation, quality enhancement, and contract-based technical services.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-[#f48c21] font-bold uppercase tracking-widest text-sm">Scope of Expertise</h4>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Development and optimization of refinery and production processes",
                                                        "Product formulation for fuels and petroleum derivatives",
                                                        "Process modification, revamping, and debottlenecking"
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#f48c21] mt-1.5 flex-shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-[#f48c21] font-bold uppercase tracking-widest text-sm">&nbsp;</h4>
                                                <ul className="space-y-3">
                                                    {[
                                                        "Quality enhancement and product diversification",
                                                        "Contract-based R&D and technical services for external clients"
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#f48c21] mt-1.5 flex-shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/10 flex flex-col justify-between">
                                    <div>
                                        <Beaker className="w-12 h-12 text-[#f48c21] mb-8" />
                                        <h3 className="text-2xl font-bold mb-6">Laboratory & Collaboration</h3>
                                        <p className="text-white/60 leading-relaxed">
                                            The division operates specialized laboratories in compliance with international standards and collaborates with accredited research institutions, refineries, and testing laboratories to ensure continuous innovation and technology alignment.
                                        </p>
                                    </div>
                                    <div className="mt-8 flex gap-2">
                                        <Settings className="w-5 h-5 text-[#f48c21] animate-spin-slow" />
                                        <span className="text-xs text-white/40 uppercase tracking-[0.2em]">Continuous Innovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
