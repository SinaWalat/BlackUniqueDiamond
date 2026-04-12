"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Droplet, BarChart3, Globe, Users, ChevronRight, CheckCircle2 } from "lucide-react"

export default function ProductsPage() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-48 pb-8 md:pt-64 md:pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/products.jpeg"
                        alt="Products background"
                        fill
                        className="object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
                </div>

                <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#f48c21]" />
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">Portfolio</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                            Product <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48c21] to-[#fdce07]">Portfolio</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Statement Component */}
            <section className="pb-32">
                <div className="w-full max-w-[1400px] mx-auto px-6">
                    <div className="mb-24 max-w-4xl">
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                            Black Unique Diamond produces and supplies a broad range of petroleum products and derivatives, ensuring suitability for international trade, regional distribution, and marine transportation.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {[
                            "Gasoline (various types)",
                            "Diesel (various types)",
                            "Kerosene",
                            "Jet Fuel",
                            "Base Oil",
                            "Light Naphtha",
                            "Heavy Naphtha"
                        ].map((product, i) => (
                            <div key={i} className="group p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-[#f48c21]/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f48c21]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#f48c21]/15 transition-all duration-500" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f48c21]/20 to-transparent flex items-center justify-center mb-6 border border-[#f48c21]/10">
                                        <Droplet className="w-6 h-6 text-[#f48c21]" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white/90 group-hover:text-white transition-colors">{product}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-white/40 max-w-3xl mx-auto mb-32 text-lg">
                        All products are manufactured in compliance with Global standards, ensuring suitability for international trade, regional distribution, and marine transportation.
                    </p>

                    {/* Capacity Section */}
                    <div className="mb-32">
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-4xl md:text-5xl font-black">Production Capacity</h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21] to-[#fdce07]" />
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                { title: "Total Capacity", value: "500,000", unit: "barrels per month", icon: BarChart3 },
                                { title: "Allocation", desc: "Flexible allocation between refining output and blended products", icon: CheckCircle2 },
                                { title: "Scalability", desc: "Scalable operations aligned with market demand", icon: Users }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-[#f48c21]/20 shadow-[0_0_50px_-10px_rgba(244,140,33,0.05)]">
                                    <item.icon className="w-10 h-10 text-[#f48c21] mb-8" />
                                    <h4 className="text-white/60 uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                                    {item.value ? (
                                        <div>
                                            <span className="text-5xl md:text-6xl font-black text-white">{item.value}</span>
                                            <p className="text-[#f48c21] mt-2 font-medium">{item.unit}</p>
                                        </div>
                                    ) : (
                                        <p className="text-xl text-white/80 leading-relaxed font-light">{item.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Markets Section */}
                    <div>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-4xl md:text-5xl font-black">Market & Commercial Positioning</h2>
                            <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21] to-[#fdce07]" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
                                <Globe className="w-10 h-10 text-[#f48c21] mb-8" />
                                <h3 className="text-2xl font-bold mb-6">Target Markets</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Middle East", "CIS", "Ports & Marine Destinations", "International trading hubs"].map((market, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f48c21]" />
                                            <span className="text-white/70">{market}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <p className="text-white/50 leading-relaxed">
                                        Regional markets in the Middle East, Marine and seaborne destinations through established logistics and export channels.
                                    </p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 flex flex-col justify-between">
                                <div>
                                    <Users className="w-10 h-10 text-[#f48c21] mb-8" />
                                    <h3 className="text-2xl font-bold mb-6">Commercial Positioning</h3>
                                    <p className="text-white/70 leading-relaxed mb-6">
                                        Black Unique Diamond aims to establish long-term partnerships with:
                                    </p>
                                    <ul className="space-y-3">
                                        {[
                                            "International oil companies (IOCs)",
                                            "National oil companies (NOCs)",
                                            "Global fuel traders and distributors",
                                            "Aviation and marine fuel suppliers"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/60">
                                                <ChevronRight className="w-4 h-4 text-[#f48c21] mt-1 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <p className="text-[#f48c21]/80 font-medium">
                                        Our commercial model supports bulk supply, term contracts, and spot deliveries, enabling efficient access to both land-based and maritime markets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-12 text-center text-white/40 italic">
                            Our value proposition is based on reliability, specification compliance, and operational transparency.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
