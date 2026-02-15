"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ShieldCheck, ClipboardCheck, Microscope, HeartPulse, Leaf, Thermometer, Droplet, FileText, ChevronRight, Zap, Settings } from "lucide-react"

export default function QualityPage() {
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
                        src="/images/dscf4104.jpeg"
                        alt="Facility background"
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#f48c21]" />
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">Standards</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                            Quality, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48c21] to-[#fdce07]">Compliance & HSE</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                            All operations across commercial, logistics, and R&D divisions are conducted in accordance with international industry standards and best practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Standards Section */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-[#f48c21]/20 relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Image
                                    src="/images/lab.jpeg"
                                    alt="Technical laboratory"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <ShieldCheck className="w-16 h-16 text-[#f48c21] mb-8" />
                                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Technical Commitment</h2>
                                <p className="text-xl text-white/60 leading-relaxed font-light">
                                    Technical operations focus on production optimization, quality control, and compliance with international fuel standards. This ensures consistent product quality, operational reliability, and long-term supply stability.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { icon: Microscope, text: "Production Optimization" },
                                { icon: ClipboardCheck, text: "Rigorous Quality Control" },
                                { icon: Thermometer, text: "International Standards Compliance" },
                                { icon: HeartPulse, text: "Operational Reliability" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:border-[#f48c21]/20 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-[#f48c21]/10 flex items-center justify-center group-hover:bg-[#f48c21] group-hover:text-black transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-medium text-white/80">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testing Specifications */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-4xl md:text-5xl font-black">Quality Assurance & Compliance</h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21]/30 to-transparent" />
                        </div>

                        <p className="text-xl text-white/70 max-w-4xl mb-12 leading-relaxed">
                            Quality assurance is embedded throughout all operational stages. Each production and blending batch is subject to rigorous testing to verify compliance with applicable international specifications, including:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { label: "Sulfur Content", icon: Microscope },
                                { label: "Density and Viscosity", icon: Droplet },
                                { label: "Flash Point", icon: Thermometer },
                                { label: "Octane/Cetane Numbers", icon: Zap },
                                { label: "Distillation Characteristics", icon: Settings }
                            ].map((spec, i) => (
                                <div key={i} className="p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 flex items-center justify-between group hover:bg-gradient-to-br hover:from-[#f48c21]/5 transition-all">
                                    <div className="flex items-center gap-4">
                                        <spec.icon className="w-5 h-5 text-[#f48c21]" />
                                        <span className="text-lg text-white/80">{spec.label}</span>
                                    </div>
                                    <CheckCircle className="w-5 h-5 text-[#f48c21] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#f48c21]/10 to-transparent border border-[#f48c21]/20 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-2">
                                    <FileText className="w-6 h-6 text-[#f48c21]" />
                                    <h4 className="font-bold text-white">Product Certification</h4>
                                </div>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    Available upon request through in-house and independent laboratories.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* HSE Section */}
                    <div className="relative p-12 md:p-20 rounded-[4rem] bg-[#0a0a0a] border border-white/5 overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Leaf className="w-64 h-64 text-[#f48c21]" />
                        </div>

                        <div className="relative z-10 max-w-4xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-[#f48c21]/10 flex items-center justify-center">
                                    <Leaf className="w-8 h-8 text-[#f48c21]" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black">Health, Safety & Environment (HSE)</h2>
                            </div>

                            <p className="text-xl text-white/60 leading-relaxed font-light mb-12">
                                Black Unique Diamond maintains strict Health, Safety, and Environment (HSE) standards across all operations. The company is committed to:
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    "Safe and controlled refinery and blending operations",
                                    "Environmental protection and emission management",
                                    "Compliance with applicable local and international regulations"
                                ].map((item, i) => (
                                    <div key={i} className="space-y-4">
                                        <div className="text-[#f48c21] font-black text-4xl opacity-20">{(i + 1).toString().padStart(2, '0')}</div>
                                        <p className="text-white/80 leading-relaxed">{item}</p>
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

function CheckCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
