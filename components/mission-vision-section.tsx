import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-24 bg-gradient-to-bl from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/8 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/3 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border hover:border-primary/30 group cursor-pointer">
            <CardContent className="p-8 transition-all duration-300 group-hover:bg-primary/5">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Target className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos a nuestros clientes una solución para el control de luces por computadora, acorde a sus
                conocimientos y habilidades actuales, con dispositivos distribuidos, fabricados e innovados por
                nosotros, construidos con programas básicos, herramientas y accesorios, con nuestros clientes como
                socios estratégicos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border hover:border-primary/30 group cursor-pointer">
            <CardContent className="p-8 transition-all duration-300 group-hover:bg-primary/5">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Eye className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser en 5 años la empresa más prestigiada y popular, con más descargas del Software Vecttor® de control
                de luces a Nivel Nacional, consolidándonos como líderes en innovación y tecnología de iluminación
                inteligente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
