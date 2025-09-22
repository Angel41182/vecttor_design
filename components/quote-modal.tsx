"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    description: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Quote request:", formData)
    alert("¡Gracias por tu solicitud! Te contactaremos pronto.")
    onClose()
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      description: "",
      budget: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Solicitar <span className="text-primary font-neuropol">Cotización</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                placeholder="+52 55 1234-5678"
              />
            </div>
            <div>
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Nombre de la empresa"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="projectType">Tipo de Proyecto *</Label>
            <Select value={formData.projectType} onValueChange={(value) => handleChange("projectType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el tipo de proyecto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residencial">Residencial</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="eventos">Eventos y Espectáculos</SelectItem>
                <SelectItem value="arquitectonico">Arquitectónico</SelectItem>
                <SelectItem value="hoteleria">Hotelería y Turismo</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget">Presupuesto Estimado</Label>
            <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tu rango de presupuesto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000-15000">$5,000 - $15,000 MXN</SelectItem>
                <SelectItem value="15000-50000">$15,000 - $50,000 MXN</SelectItem>
                <SelectItem value="50000-100000">$50,000 - $100,000 MXN</SelectItem>
                <SelectItem value="100000-250000">$100,000 - $250,000 MXN</SelectItem>
                <SelectItem value="250000+">$250,000+ MXN</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Descripción del Proyecto *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              placeholder="Describe tu proyecto, necesidades específicas, ubicación, etc."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
