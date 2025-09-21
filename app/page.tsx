import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValuesSection />
      <MissionVisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
