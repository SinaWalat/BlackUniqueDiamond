"use client"

import { ArrowUp } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Divisions", href: "#divisions" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#f5f5f5] pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f48c21] to-transparent" />

      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-12 border-b border-gray-200">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-64 h-64">
              <Image
                src="/Logo2.svg"
                alt="Black Diamond"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {false && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f48c21] to-[#fdce07] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-400 hover:border-[#f48c21] hover:text-[#f48c21] transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Black Unique Diamond. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Kurdistan Region of Iraq
          </p>
        </div>


      </div>
    </footer>
  )
}
