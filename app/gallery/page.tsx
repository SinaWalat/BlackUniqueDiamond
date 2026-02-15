"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Grid3X3 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-8.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-10.jpg",
    "/images/gallery-11.jpg",
    "/images/gallery-12.jpg",
    "/images/gallery-13.jpg",
    "/images/gallery-14.jpg",
    "/images/gallery-15.jpg",
    "/images/gallery-16.jpg",
    "/images/gallery-17.jpg",
    "/images/gallery-18.jpg",
    "/images/gallery-19.jpg",
    "/images/gallery-20.jpg",
    "/images/gallery-21.jpg",
    "/images/gallery-22.jpg",
    "/images/gallery-23.jpg",
    "/images/gallery-24.jpg",
    "/images/gallery-25.jpg",
]

export default function GalleryPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [viewMode, setViewMode] = useState<"carousel" | "grid">("grid")
    const [lightboxOpen, setLightboxOpen] = useState(false)

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length)
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
    }

    const openLightbox = (index: number) => {
        setCurrentIndex(index)
        setLightboxOpen(true)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return
            if (e.key === "ArrowRight") goToNext()
            if (e.key === "ArrowLeft") goToPrev()
            if (e.key === "Escape") setLightboxOpen(false)
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [lightboxOpen])

    return (
        <main className="min-h-screen bg-black">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-black overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f48c21]/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-[#f48c21] text-sm font-medium tracking-[0.25em] uppercase">Photo Gallery</span>
                        <h1 className="mt-4 text-5xl md:text-7xl font-black text-white">
                            Our <span className="bg-gradient-to-r from-[#f48c21] to-[#fdce07] bg-clip-text text-transparent">Facility</span>
                        </h1>
                        <p className="mt-6 text-white/50 text-lg leading-relaxed">
                            Take a visual tour of our petroleum processing facility. Explore our storage tanks,
                            refinery equipment, and dedicated team working to deliver quality petroleum products.
                        </p>

                        {/* View Toggle */}
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${viewMode === "grid"
                                    ? "bg-gradient-to-r from-[#f48c21] to-[#fdce07] text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                <span className="flex items-center gap-2">
                                    <Grid3X3 className="w-4 h-4" />
                                    Grid View
                                </span>
                            </button>
                            <button
                                onClick={() => setViewMode("carousel")}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${viewMode === "carousel"
                                    ? "bg-gradient-to-r from-[#f48c21] to-[#fdce07] text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                Carousel View
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {viewMode === "grid" ? (
                /* Grid View */
                <section className="pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {allImages.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => openLightbox(i)}
                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    />
                                    {/* Orange tint overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/30 to-[#fdce07]/20 mix-blend-overlay pointer-events-none" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300" />

                                    {/* Number badge */}
                                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                        <span className="text-xs font-bold text-[#f48c21]">{i + 1}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                /* Carousel View */
                <section className="pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="relative max-w-5xl mx-auto">
                            <div
                                className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden"
                                style={{ boxShadow: "0 0 80px rgba(244, 140, 33, 0.15)" }}
                            >
                                <Image
                                    src={allImages[currentIndex]}
                                    alt={`Gallery image ${currentIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/20 to-[#fdce07]/10 mix-blend-overlay pointer-events-none" />

                                {/* Image counter */}
                                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                                    <span className="text-white font-medium">
                                        <span className="text-[#f48c21]">{currentIndex + 1}</span>
                                        <span className="text-white/40"> / {allImages.length}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all hover:scale-110 group"
                            >
                                <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#f48c21] transition-colors" />
                            </button>

                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all hover:scale-110 group"
                            >
                                <ChevronRight className="w-6 h-6 text-white group-hover:text-[#f48c21] transition-colors" />
                            </button>
                        </div>

                        {/* Thumbnail Strip */}
                        <div
                            className="mt-8 overflow-x-auto pb-4 scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="flex gap-2 justify-start min-w-max px-4">
                                {allImages.map((src, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${i === currentIndex
                                            ? "ring-2 ring-[#f48c21] scale-110 z-10"
                                            : "opacity-50 hover:opacity-100"
                                            }`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Thumbnail ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/20 to-transparent mix-blend-overlay pointer-events-none" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={() => setLightboxOpen(false)}
                >
                    <div
                        className="relative w-[90vw] h-[80vh] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={allImages[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="90vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f48c21]/10 to-transparent mix-blend-overlay pointer-events-none" />

                        {/* Close button */}
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white hover:text-[#f48c21] transition-colors"
                        >
                            ✕
                        </button>

                        {/* Navigation */}
                        <button
                            onClick={goToPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all group"
                        >
                            <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#f48c21]" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all group"
                        >
                            <ChevronRight className="w-6 h-6 text-white group-hover:text-[#f48c21]" />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
                            <span className="text-[#f48c21] font-bold">{currentIndex + 1}</span>
                            <span className="text-white/50"> / {allImages.length}</span>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    )
}
