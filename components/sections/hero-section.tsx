"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/modern-minimalist-office-interior-with-large-windo.jpg" alt="BBLAW Office" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center space-y-8">
          {/* Logo placeholder - substitua pela sua logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="h-24 w-48 flex items-center justify-center">
              <span className="text-5xl font-serif font-bold tracking-tight">BBLAW</span>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-foreground mr-2" />
              Especialistas em Holdings há mais de 10 anos
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-balance"
          >
            Holdings Patrimoniais
            <br />
            <span className="italic text-muted-foreground">Proteja e Multiplique</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento sucessório
            inteligente. A BBLAW transforma complexidade em estratégia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="https://wa.me/5511982712025" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-semibold group"
              >
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://www.bezerraborges.com.br/artigos" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar Guia Completo
              </Button>
            </Link>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="pt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "10+", label: "Anos de experiência" },
              { value: "500+", label: "Holdings estruturadas" },
              { value: "R$ 2B+", label: "Patrimônio protegido" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}