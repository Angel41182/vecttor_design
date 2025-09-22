import { Header } from "@/components/header"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos - VECTTOR | Interfaces DMX y SPI",
  description:
    "Catálogo completo de interfaces de iluminación DMX y SPI. Controladores profesionales, software y soluciones híbridas para proyectos de iluminación.",
  keywords: "DMX, SPI, controladores, interfaces, iluminación LED, Art-Net, sACN",
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProductsSection />
      </div>
      <Footer />
    </main>
  )
}
