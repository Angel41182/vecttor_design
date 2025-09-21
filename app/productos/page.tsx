import { Header } from "@/components/header"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"

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
