"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "motion/react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Divisions", href: "/divisions" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Full-screen menu overlay — portaled to document.body */}
      {mounted && createPortal(
        <div
          className={`fixed inset-0 bg-[#020202] transition-all duration-700 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
          style={{ zIndex: 9998 }}
        >
          {/* Ambient background glow */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Nav Container */}
          <div className="w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center h-full max-h-[800px]">
              
              {/* Left Side: Branding / Info (Hidden on mobile) */}
              <div className="hidden md:flex flex-col justify-between h-full py-10 border-r border-white/10">
                <div>
                   <h2 className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase mb-8">Navigation</h2>
                   <p className="text-white/60 text-2xl leading-relaxed max-w-sm">
                     Explore our integrated operations, premium fuel variants, and uncompromising commitment to safety.
                   </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[#f48c21] text-sm font-bold tracking-[0.2em] uppercase">Reach Out</p>
                  <p className="text-white/80 text-xl font-medium hover:text-white transition-colors cursor-pointer">info@blackuniquediamond.com</p>
                </div>
              </div>

              {/* Right Side: Links */}
              <nav className="flex flex-col justify-center gap-6 md:gap-8 md:pl-16">
                {navItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-6 w-fit"
                    style={{
                      transform: isOpen ? "translateX(0)" : "translateX(60px)",
                      opacity: isOpen ? 1 : 0,
                      transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease`,
                      transitionDelay: `${i * 80 + 100}ms`,
                    }}
                  >
                    <span className="text-white/20 text-xl md:text-2xl font-bold font-mono transition-colors group-hover:text-[#f48c21]">
                      0{i + 1}
                    </span>
                    <span className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white uppercase tracking-tighter transition-all duration-400 group-hover:text-[#f48c21] group-hover:translate-x-6">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

            </div>
          </div>
        </div>,
        document.body
      )}

      <header
        className={`fixed top-0 left-0 right-0 py-4 ${scrolled && !isOpen ? "bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-500" : "bg-transparent transition-[background-color,backdrop-filter] duration-500 border-b border-transparent"}`}
        style={{ zIndex: 9999 }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`group flex items-center gap-3 transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none -translate-x-4" : "opacity-100"}`}
          >
            <div className="relative h-20 w-64 transition-transform duration-300">
              <Image
                src="/Logo1.svg"
                alt="Black Diamond"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Button
              size="icon"
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#f48c21] to-[#fdce07] text-black hover:shadow-[0_0_20px_rgba(244,140,33,0.4)] transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-5 h-[1.5px] bg-black rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-5 h-[1.5px] bg-black rounded-full"
                />
              </div>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
