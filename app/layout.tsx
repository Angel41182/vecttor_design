import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const neuropol = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-neuropol",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VECTTOR - Soluciones de Iluminación Profesional",
  description:
    "Interfaces de iluminación con protocolos DMX y SPI. Soluciones profesionales para iluminación arquitectónica, comercial e industrial.",
  keywords: "iluminación, DMX, SPI, LED, controladores, interfaces, lighting, México",
  authors: [{ name: "VECTTOR" }],
  creator: "VECTTOR",
  publisher: "VECTTOR",
  robots: "index, follow",
  openGraph: {
    title: "VECTTOR - Soluciones de Iluminación Profesional",
    description: "Interfaces de iluminación con protocolos DMX y SPI",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "VECTTOR - Soluciones de Iluminación Profesional",
    description: "Interfaces de iluminación con protocolos DMX y SPI",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${neuropol.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
