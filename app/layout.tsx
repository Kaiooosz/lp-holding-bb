import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Holding Patrimonial, Sucessória e Governança | BBLAW",
  description:
    "Estruturação patrimonial e sucessória para empresários e famílias: holdings, governança, sucessão e contratos familiares com análise jurídica, tributária e societária integrada.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
