import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Honestidad",
      description:
        "Transparencia total en nuestros productos y servicios, construyendo relaciones de confianza duraderas.",
    },
    {
      icon: Users,
      title: "Responsabilidad",
      description: "Compromiso con la calidad y el cumplimiento de nuestras promesas hacia nuestros clientes.",
    },
    {
      icon: Zap,
      title: "Integridad",
      description: "Actuamos con principios sólidos y ética profesional en cada proyecto que desarrollamos.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/40 via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Nuestros Valores Fundamentales</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Los principios que guían cada decisión y proyecto en Vecttor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border hover:border-primary/30 group cursor-pointer"
            >
              <CardContent className="p-8 transition-all duration-300 group-hover:bg-primary/5">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <value.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-balance">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
