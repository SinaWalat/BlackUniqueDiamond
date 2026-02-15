"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { MapPin, Mail, Phone, Globe, Handshake, ShieldCheck, Truck, FlaskConical, ChevronRight } from "lucide-react"

export default function ContactPage() {
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
                        src="/images/dscf4096.jpeg"
                        alt="Corporate atmosphere"
                        fill
                        className="object-cover opacity-10 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#f48c21]" />
                            <span className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">Partnership</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                            Get in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Touch</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact & Commitment */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 mb-12">
                        <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-[#f48c21]/30 pl-8">
                            Black Unique Diamond is committed to building long-term partnerships based on reliability, technical competence, commercial integrity, and mutual growth.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 mb-32">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-4xl font-black italic">Contact Information</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f48c21]/30 to-transparent" />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: MapPin, label: "Location", value: "Kurdistan Region, Iraq" },
                                    { icon: Mail, label: "Email", value: "info@blackuniquediamond.com" },
                                    { icon: Phone, label: "Phone", value: "+964 750 150 7703" },
                                    { icon: Globe, label: "Website", value: "www.blackuniquediamond.com" }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-[#f48c21]/20 transition-all group">
                                        <item.icon className="w-8 h-8 text-[#f48c21] mb-6 group-hover:scale-110 transition-transform" />
                                        <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-medium text-white/90">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-[#f48c21]/10 to-transparent border border-[#f48c21]/20">
                                <p className="text-xl text-white/70 leading-relaxed font-light">
                                    The company continuously invests in infrastructure, technology, and human capital to meet evolving market demands.
                                </p>
                            </div>
                        </div>

                        {/* Corporate Summary Card */}
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f48c21]/5 blur-[100px] pointer-events-none" />

                            <div>
                                <h3 className="text-3xl font-black mb-8">Corporate Summary</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <ShieldCheck className="w-6 h-6 text-[#f48c21] flex-shrink-0" />
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            <span className="text-white font-bold block mb-1">Black Unique Diamond</span>
                                            Integrated petroleum products producer and service provider with refining and operational assets strategically located in the Kurdistan Region of Iraq.
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <Handshake className="w-6 h-6 text-[#f48c21] flex-shrink-0" />
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            <span className="text-white font-bold block mb-1">Commercial Division</span>
                                            Manages international trading activities, long-term offtake agreements, and spot market operations.
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <Truck className="w-6 h-6 text-[#f48c21] flex-shrink-0" />
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            <span className="text-white font-bold block mb-1">Logistics & Transportation</span>
                                            Operates border-based storage tanks and transshipment yards for rapid cargo transfer.
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <FlaskConical className="w-6 h-6 text-[#f48c21] flex-shrink-0" />
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            <span className="text-white font-bold block mb-1">Research & Development</span>
                                            Focuses on process optimization, product formulation, and quality enhancement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex items-center gap-2 text-[#f48c21]">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">International Industry Standards Alignment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Options (Internal/Meta-content as footer-placeholder or CTA) */}
                    <div className="text-center pb-20">
                        <p className="text-white/20 text-sm uppercase tracking-[0.3em]">Excellence across the energy value chain</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
