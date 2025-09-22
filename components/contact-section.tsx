"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import { QuoteModal } from "./quote-modal"

export function ContactSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <section id="contacto" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para iluminar tu proyecto?</h2>
              <p className="text-xl text-primary-foreground/80">Contáctanos y descubre cómo podemos ayudarte</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary-foreground text-primary border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Horario de Atención</p>
                        <p className="text-sm text-muted-foreground">Lunes a Viernes: 10 a 18hrs</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:contacto@vecttor.mx"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          contacto@vecttor.mx
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Disponible 24/7</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-sm text-muted-foreground">México</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground text-primary border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Solicita una Cotización</h3>
                  <p className="text-muted-foreground mb-6">
                    Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución de iluminación.
                  </p>

                  <div className="space-y-4">
                    <Button className="w-full" size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      size="lg"
                      onClick={() => setIsQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Solicitar Llamada
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Respuesta garantizada en menos de 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
