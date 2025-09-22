import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Globe, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Distribuidores - VECTTOR | Red Nacional de Socios",
  description:
    "Encuentra distribuidores autorizados VECTTOR en toda la República Mexicana. Soporte técnico especializado y productos de iluminación profesional.",
  keywords: "distribuidores, VECTTOR, México, iluminación, DMX, SPI, socios comerciales",
}

const distribuidores = [
  {
    name: "Veninvel Electric SA de CV",
    city: "Ciudad de México",
    state: "CDMX",
    phone: "+52 55 1234-5678",
    email: "ventas@veninvel.com.mx",
    website: "www.veninvel.com.mx",
    specialties: ["Residencial", "Comercial", "Industrial"],
    rating: 4.8,
    description: "Distribuidor líder en materiales eléctricos y soluciones de iluminación profesional.",
  },
  {
    name: "Grupo MLI",
    city: "Guadalajara",
    state: "Jalisco",
    phone: "+52 33 2345-6789",
    email: "contacto@grupomli.com.mx",
    website: "www.grupomli.com.mx",
    specialties: ["Oficinas", "Industrial", "Exterior"],
    rating: 4.7,
    description: "Especialistas en iluminación interior, oficinas e industrial con amplia experiencia.",
  },
  {
    name: "Iluminación Profesional del Norte",
    city: "Monterrey",
    state: "Nuevo León",
    phone: "+52 81 3456-7890",
    email: "info@ipnorte.mx",
    website: "www.ipnorte.mx",
    specialties: ["DMX", "SPI", "Arquitectónica"],
    rating: 4.9,
    description: "Expertos en sistemas de control DMX y SPI para proyectos arquitectónicos.",
  },
  {
    name: "Electro Luz Bajío",
    city: "León",
    state: "Guanajuato",
    phone: "+52 477 456-7891",
    email: "ventas@electroluz.mx",
    website: "www.electroluz.mx",
    specialties: ["Comercial", "Eventos", "Espectáculos"],
    rating: 4.6,
    description: "Soluciones integrales para eventos, espectáculos y espacios comerciales.",
  },
  {
    name: "Tecnología en Iluminación Sureste",
    city: "Mérida",
    state: "Yucatán",
    phone: "+52 999 567-8902",
    email: "contacto@tilsureste.mx",
    website: "www.tilsureste.mx",
    specialties: ["Hotelería", "Turismo", "Residencial"],
    rating: 4.5,
    description: "Especialistas en iluminación para sector hotelero y turístico de la región.",
  },
  {
    name: "Control de Luces Pacífico",
    city: "Tijuana",
    state: "Baja California",
    phone: "+52 664 678-9013",
    email: "info@clpacifico.mx",
    website: "www.clpacifico.mx",
    specialties: ["Discotecas", "Bares", "Entretenimiento"],
    rating: 4.8,
    description: "Líderes en sistemas de iluminación para entretenimiento nocturno y eventos.",
  },
  {
    name: "Sistemas Inteligentes del Centro",
    city: "Puebla",
    state: "Puebla",
    phone: "+52 222 789-0124",
    email: "ventas@sicentro.mx",
    website: "www.sicentro.mx",
    specialties: ["Domótica", "Smart Home", "Automatización"],
    rating: 4.7,
    description: "Integración de sistemas inteligentes y automatización residencial.",
  },
  {
    name: "Iluminación Escénica del Golfo",
    city: "Veracruz",
    state: "Veracruz",
    phone: "+52 229 890-1235",
    email: "contacto@iegolfo.mx",
    website: "www.iegolfo.mx",
    specialties: ["Teatro", "Conciertos", "Eventos"],
    rating: 4.6,
    description: "Especialistas en iluminación escénica para teatros y eventos culturales.",
  },
  {
    name: "Distribuidora Eléctrica del Oeste",
    city: "Culiacán",
    state: "Sinaloa",
    phone: "+52 667 901-2346",
    email: "info@deoeste.mx",
    website: "www.deoeste.mx",
    specialties: ["Agrícola", "Industrial", "Comercial"],
    rating: 4.4,
    description: "Soluciones de iluminación para sector agrícola e industrial del noroeste.",
  },
  {
    name: "Tecnoluz Chihuahua",
    city: "Chihuahua",
    state: "Chihuahua",
    phone: "+52 614 012-3457",
    email: "ventas@tecnoluz.mx",
    website: "www.tecnoluz.mx",
    specialties: ["Minería", "Industrial", "Seguridad"],
    rating: 4.5,
    description: "Especialistas en iluminación industrial y de seguridad para sector minero.",
  },
  {
    name: "Iluminación Integral del Sur",
    city: "Oaxaca",
    state: "Oaxaca",
    phone: "+52 951 123-4568",
    email: "contacto@iisur.mx",
    website: "www.iisur.mx",
    specialties: ["Patrimonial", "Cultural", "Turismo"],
    rating: 4.7,
    description: "Expertos en iluminación de sitios patrimoniales y espacios culturales.",
  },
  {
    name: "Control Lumínico Peninsular",
    city: "Cancún",
    state: "Quintana Roo",
    phone: "+52 998 234-5679",
    email: "info@clpeninsular.mx",
    website: "www.clpeninsular.mx",
    specialties: ["Resorts", "Hoteles", "Playas"],
    rating: 4.8,
    description: "Soluciones especializadas para resorts y complejos hoteleros de playa.",
  },
]

export default function DistribuidoresPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Red de Distribuidores <span className="text-primary font-neuropol">VECTTOR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encuentra el distribuidor autorizado más cercano a tu ubicación. Nuestros socios comerciales están
            capacitados para brindarte el mejor servicio y soporte técnico especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distribuidores.map((distribuidor, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card border-2 border-border hover:border-primary/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-card-foreground">{distribuidor.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-card-foreground">{distribuidor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">
                    {distribuidor.city}, {distribuidor.state}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{distribuidor.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href={`tel:${distribuidor.phone}`} className="hover:text-primary transition-colors">
                      {distribuidor.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${distribuidor.email}`} className="hover:text-primary transition-colors">
                      {distribuidor.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Globe className="h-4 w-4 mr-2" />
                    <a
                      href={`https://${distribuidor.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {distribuidor.website}
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-card-foreground mb-2">Especialidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {distribuidor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  Contactar Distribuidor
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-8 shadow-sm border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">¿Interesado en ser Distribuidor?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Únete a nuestra red de distribuidores autorizados y accede a productos exclusivos, capacitación técnica
              especializada y soporte comercial completo.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Información
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
