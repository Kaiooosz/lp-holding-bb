"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-minimalist-office-interior-with-large-windo.jpg"
          alt="Bezerra Borges Office"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/30" />
        {/* Escurecimento lateral extra */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50" />
      </div>

      {/* Watermark logo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Logo Branco.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 38%",
          backgroundSize: "55%",
          opacity: 0.02,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 pt-40">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-10"
        >
          <span className="pill-minimal">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            Especialistas em Holdings há mais de 10 anos
          </span>
        </motion.div>

        {/* Main Headline — efeito Kast com escurecimento nas pontas */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mb-8"
        >
          <h1 className="title-kast text-[clamp(2.2rem,6.5vw,5.8rem)] leading-[0.9]">
            HOLDINGS
          </h1>
          <h1 className="title-kast-thin text-[clamp(2.2rem,6.5vw,5.8rem)] leading-[1.0] -mt-1">
            Patrimoniais
          </h1>
          <h1 className="title-kast text-[clamp(2.2rem,6.2vw,5.8rem)] leading-[0.9] -mt-1">
            &amp; OFFSHORE
          </h1>
        </motion.div>

        {/* Subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <p className="body-premium text-white/65 max-w-md text-base">
            Estruture seu patrimônio e empresas com segurança jurídica, eficiência tributária e planejamento
            sucessório inteligente. A Bezerra Borges transforma complexidade em estratégia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 md:ml-auto">
            <Link href="https://wa.me/5521979901686" target="_blank" rel="noopener noreferrer">
              <span className="btn-kast-wrapper">
                <button className="btn-kast btn-kast-lg btn-kast-outline">
                  Agendar Consultoria
                </button>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-20 pt-8 border-t border-white/8 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { value: "10+", label: "Anos de experiência" },
            { value: "500+", label: "Holdings estruturadas" },
            { value: "R$2B+", label: "Patrimônio protegido" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="stat-number text-white text-3xl md:text-4xl">{stat.value}</div>
              <div className="label-minimal text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 right-10 flex items-center gap-3"
      >
        <span className="label-minimal text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/35 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}