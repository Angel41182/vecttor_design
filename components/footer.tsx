import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="text-2xl font-bold text-primary font-neuropol">VECTTOR</span>
              <span className="text-xs text-muted-foreground">®</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Líderes en soluciones de iluminación inteligente con 15 años de experiencia en el desarrollo de tecnología
              innovadora para el control de luces por computadora.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Controladores DMX
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Interfaces SPI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Software Vecttor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
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
