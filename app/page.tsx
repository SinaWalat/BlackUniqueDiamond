import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Divisions } from "@/components/divisions"
import { Quality } from "@/components/quality"
import { ImageGallery } from "@/components/image-gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Divisions />
      <Quality />
      <ImageGallery />
      <Contact />
      <Footer />
    </main>
  )
}
