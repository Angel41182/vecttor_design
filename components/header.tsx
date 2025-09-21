"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image src="/images/vecttor-logo.png" alt="Vecttor Logo" width={40} height={40} className="h-10 w-10" />
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-primary font-neuropol">VECTTOR</span>
                <span className="text-xs text-muted-foreground">®</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/distribuidores"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Distribuidores
            </Link>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
            <Button size="sm">Cotizar</Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <Link
                href="/productos"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
              >
                Productos
              </Link>
              <Link
                href="/distribuidores"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
              >
                Distribuidores
              </Link>
              <a href="#contacto" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Contacto
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  Cotizar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
