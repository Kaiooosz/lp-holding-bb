import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "BBLAW | Holdings Patrimoniais e Empresariais",
  description:
    "Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório inteligente.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
