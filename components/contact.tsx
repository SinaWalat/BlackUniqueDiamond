"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export function Contact() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)
        setIsSent(false)
        setErrorMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setIsSent(true)
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                setErrorMessage(data.message || "Something went wrong. Please try again.")
            }
        } catch (error) {
            setErrorMessage("Failed to send message. Please check your connection and try again.")
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <span className="text-white/60 text-sm font-bold tracking-[0.25em] uppercase pl-1">Get in Touch</span>
                        <h2 className="mt-6 text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8">
                            Let's <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Connect</span>
                        </h2>
                        <p className="text-white/40 text-lg leading-relaxed mb-12 max-w-md">
                            Ready to discuss your refining needs? Our team of experts is here to provide tailored solutions for your business.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, title: "Email Us", content: "info@blackuniquediamond.com", href: "mailto:info@blackuniquediamond.com" },
                                { icon: Phone, title: "Call Us", content: "+964 750 459 2199", href: "tel:+9647504592199" },
                                { icon: MapPin, title: "Visit Us", content: "No 48, Vital Village, Erbil, Iraq", href: undefined }
                            ].map((item) => (
                                <a key={item.title} href={item.href} className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:bg-[#f48c21] transition-colors duration-300">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                        <p className="text-white/40 group-hover:text-[#f48c21] transition-colors duration-300">{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>

                        <div className="relative bg-black border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Subject</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors"
                                        placeholder="Product Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm font-bold uppercase tracking-wider pl-1">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f48c21] transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {isSent && (
                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 animate-fade-in">
                                        <CheckCircle2 className="w-5 h-5" />
                                        <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                                    </div>
                                )}

                                {errorMessage && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 animate-fade-in">
                                        <AlertCircle className="w-5 h-5" />
                                        <p className="text-sm font-medium">{errorMessage}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full bg-[#f48c21] hover:bg-[#e07a15] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                                >
                                    {isSending ? (
                                        <>
                                            Sending...
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
