"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />
            
            {/* Standardized top spacing to account for fixed header */}
            <div className="pt-20 lg:pt-32">
                <Contact />
            </div>

            <Footer />
        </main>
    )
}
