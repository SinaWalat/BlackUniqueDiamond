"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Droplet, Flame, FlaskConical, Fuel, Beaker, Atom, Cylinder, ArrowRight } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

// Unified brand color palette - no rainbow
const products = [
    {
        name: "Gasoline",
        types: "Various types",
        icon: Fuel,
        description: "High-octane fuel engineered for optimal engine performance and efficiency across all vehicle types."
    },
    {
        name: "Diesel",
        types: "Various types",
        icon: Droplet,
        description: "Ultra-low sulfur diesel fuel formulated for heavy-duty power, improved economy, and reduced emissions."
    },
    {
        name: "Kerosene",
        types: "Standard",
        icon: Flame,
        description: "Clean-burning fuel suitable for heating, lighting, and specialized combustion engines."
    },
    {
        name: "Jet Fuel",
        types: "Aviation grade",
        icon: Atom,
        description: "Premium aviation turbine fuel meeting strict international safety and performance specifications."
    },
    {
        name: "Base Oil",
        types: "Industrial",
        icon: Beaker,
        description: "High-purity lubricant base stocks for automotive and industrial oil blending applications."
    },
    {
        name: "Light Naphtha",
        types: "Refined",
        icon: FlaskConical,
        description: "Versatile feedstock for petrochemical production and high-grade gasoline blending components."
    },
    {
        name: "Heavy Naphtha",
        types: "Refined",
        icon: Cylinder,
        description: "Catalytic reformer feedstock used to produce high-octane gasoline and aromatics."
    },
]

export function Products() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    setActiveIndex(0) // Start from first option always
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % products.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} id="products" className="relative bg-black text-white overflow-hidden py-24 md:py-32">

            {/* Background elements - Clean Black */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#f48c21]/2 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className={`mb-20 md:mb-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <div>
                            <span className="text-white/60 text-sm font-bold tracking-[0.25em] uppercase pl-1">What We Refine</span>
                            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                                <span className="text-white">Premium</span><br />
                                <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Products</span>
                            </h2>
                        </div>

                        {/* Stats - Tech style */}
                        <div className="flex gap-12">
                            <div className="relative pl-6 border-l-2 border-white/10">
                                <p className="text-5xl font-black text-white">7</p>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-2">Core Products</p>
                            </div>
                            <div className="relative pl-6 border-l-2 border-white/10">
                                <p className="text-5xl font-black text-white">500K</p>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-2">Barrels/Month</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Layout (Desktop) */}
                <div className="hidden lg:flex gap-20">
                    {/* Left: Interactive List */}
                    <div className={`w-5/12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex flex-col">
                            {products.map((product, i) => (
                                <div
                                    key={product.name}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    className="group relative cursor-pointer py-6 border-b border-white/10 last:border-0"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-4xl font-bold transition-all duration-500 ${activeIndex === i
                                            ? "text-white translate-x-4"
                                            : "text-white/20 group-hover:text-white/40"
                                            }`}>
                                            {product.name}
                                        </h3>
                                        <ArrowRight className={`w-6 h-6 text-[#f48c21] transition-all duration-500 ${activeIndex === i
                                            ? "opacity-100 -translate-x-0"
                                            : "opacity-0 translate-x-4"
                                            }`} />
                                    </div>
                                    {/* Active Line Indicator */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#f48c21] transition-all duration-300 ${activeIndex === i ? "opacity-100 h-full" : "opacity-0 h-0 top-1/2"
                                        }`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sticky Preview Card */}
                    <div className={`w-7/12 relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className="sticky top-32 h-[600px] group rounded-[2.5rem]">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={150}
                                inactiveZone={0.01}
                                borderWidth={3}
                                variant="orange"
                                autoplay={true}
                            />
                            <div className="relative w-full h-full rounded-[inherit] overflow-hidden bg-black border border-white/10 z-10">

                                {/* Grain/Texture Overlay - Consistent with Divisions */}
                                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                                {/* Ambient Glow - More Subtle */}
                                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#f48c21]/8 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
                                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#f48c21]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

                                {/* Dynamic Content */}
                                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="w-20 h-20 rounded-2xl bg-[#f48c21] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(244,140,33,0.3)] border border-white/10">
                                            {(() => {
                                                const Icon = products[activeIndex].icon
                                                return <Icon className="w-10 h-10 text-white" />
                                            })()}
                                        </div>
                                        <span className="text-8xl font-black text-white/10 select-none">
                                            {String(activeIndex + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div key={activeIndex} className="animate-fade-up">
                                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                            {products[activeIndex].types}
                                        </span>
                                        <h3 className="text-5xl font-black text-white mt-8 mb-4">
                                            {products[activeIndex].name}
                                        </h3>
                                        <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                                            {products[activeIndex].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout (Cards) */}
                <div className="lg:hidden grid gap-6 mt-10">
                    {products.map((product, i) => {
                        const Icon = product.icon
                        return (
                            <div key={product.name} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
                                        <Icon className="w-6 h-6 text-[#f48c21]" />
                                    </div>
                                    <span className="text-4xl font-black text-white/10">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-white/60 mb-4">{product.description}</p>
                                <span className="text-xs font-bold text-[#f48c21] uppercase tracking-wider">
                                    {product.types}
                                </span>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
