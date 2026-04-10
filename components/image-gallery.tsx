"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const row1Images = [
    "/images/5.jpeg",
    "/images/12.jpeg",
    "/images/2.jpeg",
    "/images/8.jpeg",
    "/images/15.jpeg",
    "/images/1.jpg",
    "/images/9.jpeg",
    "/images/14.jpeg",
    "/images/3.jpeg",
    "/images/11.jpeg",
    "/images/6.jpeg",
    "/images/13.jpeg",
    "/images/7.jpeg",
    "/images/10.jpeg",
]

const row2Images = [
    "/images/22.jpeg",
    "/images/18.jpeg",
    "/images/25.jpeg",
    "/images/16.jpeg",
    "/images/28.jpeg",
    "/images/20.jpeg",
    "/images/24.jpeg",
    "/images/17.jpeg",
    "/images/26.jpeg",
    "/images/19.jpeg",
    "/images/27.jpeg",
    "/images/21.jpeg",
    "/images/23.jpeg",
]

export function ImageGallery() {
    return (
        <section className="relative py-16 bg-black overflow-hidden">
            {/* Row 1 - Moves Left Automatically */}
            <div className="flex gap-4 mb-4 animate-marquee-left hover:[animation-play-state:paused]">
                {[...row1Images, ...row1Images, ...row1Images].map((src, i) => (
                    <div
                        key={`row1-${i}`}
                        className="flex-shrink-0 relative w-[350px] h-[240px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={src}
                            alt={`Facility image ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500"
                        />
                        {/* Orange tint overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/20 to-[#fdce07]/10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />
                    </div>
                ))}
            </div>

            {/* Row 2 - Moves Right Automatically */}
            <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused]">
                {[...row2Images, ...row2Images, ...row2Images].map((src, i) => (
                    <div
                        key={`row2-${i}`}
                        className="flex-shrink-0 relative w-[350px] h-[240px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={src}
                            alt={`Facility image ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500"
                        />
                        {/* Orange tint overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/20 to-[#fdce07]/10 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors duration-300" />
                    </div>
                ))}
            </div>
        </section>
    )
}
