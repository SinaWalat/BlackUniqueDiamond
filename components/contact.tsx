"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react"

export function Contact() {
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
        <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <span className="text-gray-900 text-sm font-bold tracking-[0.25em] uppercase pl-1">Get in Touch</span>
                        <h2 className="mt-6 text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-8">
                            Let's <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Connect</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md">
                            Ready to discuss your refining needs? Our team of experts is here to provide tailored solutions for your business.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, title: "Email Us", content: "info@blackuniquediamond.com" },
                                { icon: Phone, title: "Call Us", content: "+964 750 459 2199" },
                                { icon: MapPin, title: "Visit Us", content: "No 48, Vital Village, Erbil, Iraq" }
                            ].map((item) => (
                                <div key={item.title} className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-lg group-hover:bg-[#f48c21] transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold text-lg">{item.title}</h3>
                                        <p className="text-gray-500 group-hover:text-[#f48c21] transition-colors duration-300">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className="absolute inset-0 bg-[#f48c21]/5 rounded-[2.5rem] transform rotate-3" />
                        <div className="relative bg-black p-10 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">

                            {/* Background Elements */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#f48c21]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                            <form className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors" placeholder="Product Inquiry" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors" placeholder="How can we help you?" />
                                </div>

                                <button type="submit" className="w-full bg-[#f48c21] hover:bg-[#e07a15] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                                    Send Message
                                    <Send className="w-5 h-5 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
