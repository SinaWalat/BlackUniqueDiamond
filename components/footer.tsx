"use client"

import { ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-black pt-16 pb-8 overflow-hidden text-white border-t border-white/5">
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#f48c21] to-transparent opacity-40" />

      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-10 border-b border-white/5">
          
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-1/4">
            <Link href="/" className="relative h-20 w-64 block cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <Image
                src="/Logo1.svg"
                alt="Black Unique Diamond"
                fill
                className="object-contain object-center lg:object-left"
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="flex justify-center w-full lg:w-2/4">
            <p className="text-white/40 text-[13px] leading-relaxed max-w-lg text-center font-medium tracking-wide">
              An integrated petroleum products producer and service provider, delivering excellence across the energy value chain with uncompromised quality and compliance.
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:border-[#f48c21]/50 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
                 <ArrowUp className="w-3 h-3 text-[#f48c21]" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-center md:text-left">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Black Unique Diamond. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/20 text-xs tracking-widest uppercase">
            <p>Kurdistan Region of Iraq</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
