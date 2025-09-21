import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="absolute inset-0 bg-[url('/images/vecttor-equipment.png')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Lightbulb className="h-12 w-12 text-primary mr-3" />
            <span className="text-sm font-medium text-white bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/30">
              15 años iluminando México
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white drop-shadow-2xl">
            Soluciones de <span className="text-primary drop-shadow-2xl">iluminación</span> para el futuro
          </h1>

          <p className="text-xl text-gray-100 text-balance mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Vecttor es líder en el desarrollo de soluciones innovadoras para el control de luces por computadora,
            ofreciendo tecnología de vanguardia con 15 años de experiencia en el mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8">
              Ver Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Contactar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
