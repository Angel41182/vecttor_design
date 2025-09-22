"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Zap, Settings, Wifi, Cable, Monitor } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { QuoteModal } from "./quote-modal"

export function ProductsSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Vecttor DMX Pro",
      category: "DMX Controller",
      description:
        "Controlador DMX profesional de 512 canales con conectividad USB y Ethernet. Ideal para instalaciones permanentes y espectáculos en vivo.",
      features: ["512 Canales DMX", "USB & Ethernet", "Software Incluido", "Backup Automático"],
      protocols: ["DMX512", "Art-Net", "sACN"],
      icon: Cpu,
      price: "Desde $2,499 MXN",
      image: "/professional-blue-dmx-lighting-controller-device.jpg",
    },
    {
      id: 2,
      name: "Vecttor SPI Master",
      category: "SPI Interface",
      description:
        "Interface SPI de alta velocidad para control de tiras LED digitales. Soporta múltiples protocolos y hasta 16 universos.",
      features: ["16 Universos SPI", "Alta Velocidad", "Múltiples Protocolos", "Control Pixel"],
      protocols: ["WS2812B", "APA102", "SK6812", "LPD8806"],
      icon: Zap,
      price: "Desde $1,899 MXN",
      image: "/blue-spi-led-controller-interface-device.jpg",
    },
    {
      id: 3,
      name: "Vecttor Hybrid Pro",
      category: "DMX + SPI",
      description:
        "Solución híbrida que combina control DMX tradicional con interfaces SPI para máxima versatilidad en proyectos complejos.",
      features: ["DMX + SPI", "Control Unificado", "Sincronización", "Escalabilidad"],
      protocols: ["DMX512", "WS2812B", "Art-Net", "APA102"],
      icon: Settings,
      price: "Desde $3,299 MXN",
      image: "/professional-hybrid-lighting-controller-blue-devic.jpg",
    },
    {
      id: 4,
      name: "Vecttor Wireless DMX",
      category: "Wireless DMX",
      description:
        "Sistema inalámbrico DMX con alcance de hasta 500m. Perfecto para instalaciones donde el cableado es complicado.",
      features: ["500m Alcance", "Inalámbrico", "Baja Latencia", "Múltiples Canales"],
      protocols: ["DMX512", "2.4GHz", "Frequency Hopping"],
      icon: Wifi,
      price: "Desde $1,699 MXN",
      image: "/wireless-dmx-transmitter-receiver-blue-devices.jpg",
    },
    {
      id: 5,
      name: "Vecttor Ethernet Node",
      category: "Network Interface",
      description:
        "Nodo Ethernet para distribución de señal DMX a través de red. Compatible con Art-Net y sACN para instalaciones profesionales.",
      features: ["Art-Net & sACN", "4 Puertos DMX", "PoE Compatible", "Web Interface"],
      protocols: ["Art-Net", "sACN", "DMX512", "TCP/IP"],
      icon: Cable,
      price: "Desde $2,199 MXN",
      image: "/ethernet-dmx-node-network-device-blue.jpg",
    },
    {
      id: 6,
      name: "Software Vecttor Studio",
      category: "Software",
      description:
        "Software profesional de control de iluminación con interfaz intuitiva, efectos avanzados y compatibilidad total con hardware Vecttor.",
      features: ["Interfaz Intuitiva", "Efectos Avanzados", "Timeline", "MIDI Control"],
      protocols: ["DMX512", "Art-Net", "sACN", "MIDI"],
      icon: Monitor,
      price: "Gratis con Hardware",
      image: "/lighting-control-software-interface-screenshot.jpg",
    },
  ]

  return (
    <>
      <section id="productos" className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Catálogo de Productos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre nuestra línea completa de interfaces de iluminación con protocolos DMX y SPI, diseñadas para
              profesionales que buscan calidad y confiabilidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={product.id}
                  className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Protocolos:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.protocols.map((protocol, index) => (
                          <Badge key={index} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                            {protocol}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="font-bold text-primary">{product.price}</span>
                      <Button
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground"
                        onClick={() => setIsQuoteModalOpen(true)}
                      >
                        Cotizar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo de ingenieros puede desarrollar interfaces de iluminación específicas para tu proyecto.
                Contáctanos para discutir tus requerimientos técnicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                  Solicitar Cotización
                </Button>
                <a href="#contacto">
                  <Button variant="outline" size="lg">
                    Soporte Técnico
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
