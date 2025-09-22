import { Facebook, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/vecttor-logo.png" alt="Vecttor Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-2xl font-bold text-primary font-neuropol">VECTTOR</span>
              <span className="text-xs text-muted-foreground">®</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Líderes en soluciones de iluminación inteligente con 15 años de experiencia en el desarrollo de tecnología
              innovadora para el control de luces por computadora.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/vecttor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/vecttor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5255123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/productos" className="hover:text-primary transition-colors">
                  Controladores DMX
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-primary transition-colors">
                  Interfaces SPI
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-primary transition-colors">
                  Software Vecttor
                </Link>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Vecttor®. Todos los derechos reservados. | Iluminación profesional desde 2009</p>
        </div>
      </div>
    </footer>
  )
}
