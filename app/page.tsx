import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { TrustBar } from "@/components/TrustBar"
import { Showcase } from "@/components/Showcase"
import { PropertiesGrid } from "@/components/PropertiesGrid"
import { HowItWorks } from "@/components/HowItWorks"
import { AboutBroker } from "@/components/AboutBroker"
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee"
import { Testimonials } from "@/components/Testimonials"
import { GalleryKeys } from "@/components/GalleryKeys"
import { MapCTA } from "@/components/MapCTA"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Showcase />
        <PropertiesGrid />
        <HowItWorks />
        <AboutBroker />
        <TestimonialsMarquee />
        <Testimonials />
        <GalleryKeys />
        <MapCTA />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
