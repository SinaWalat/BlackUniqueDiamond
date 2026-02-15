"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Divisions", href: "/divisions" },
  { label: "Quality", href: "/quality" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative h-20 w-64 transition-transform duration-300">
            <Image
              src={scrolled ? "/Logo2.svg" : "/Logo1.svg"}
              alt="Black Diamond"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-1">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 group ${scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/70 hover:text-white'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#f48c21] to-[#fdce07] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f48c21] to-[#fdce07] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(244,140,33,0.4)] transition-all duration-300 group"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <Button
            variant="ghost"
            size="icon"
            className={`hidden hover:bg-white/10 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-xl transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-[#f48c21] hover:to-[#fdce07] hover:bg-clip-text transition-all duration-300"
              style={{
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
