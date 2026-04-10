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
          className={`fixed inset-0 bg-black transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
          style={{ zIndex: 9998 }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-10">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-white/80 hover:text-[#f48c21] transition-colors duration-300 cursor-pointer"
                style={{
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `transform 0.4s ease, opacity 0.4s ease, color 0.3s ease`,
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>,
        document.body
      )}

      <header
        className={`fixed top-0 left-0 right-0 py-4 ${scrolled && !isOpen ? "bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-500" : "bg-transparent transition-[background-color,backdrop-filter] duration-500 border-b border-transparent"}`}
        style={{ zIndex: 9999 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
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
