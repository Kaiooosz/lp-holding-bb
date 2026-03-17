"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Check, Globe, Shield, Banknote, Scale } from "lucide-react"
import Image from "next/image"

const offshoreReasons = [
  {
    icon: Globe,
    title: "Jurisdições Seguras",
    description:
      "Acesso a centros financeiros estáveis com sistemas jurídicos sólidos e tradição em proteção patrimonial.",
  },
  {
    icon: Shield,
    title: "Blindagem Internacional",
    description: "Estruturas que oferecem camadas adicionais de proteção reconhecidas internacionalmente.",
  },
  {
    icon: Banknote,
    title: "Eficiência Fiscal Global",
    description: "Planejamento tributário em conformidade com tratados internacionais e legislação vigente.",
  },
  {
    icon: Scale,
    title: "Conformidade Legal",
    description: "Todas as estruturas em total conformidade com a legislação brasileira e internacional.",
  },
]

const features = [
  "Proteção contra instabilidades locais",
  "Diversificação geográfica de ativos",
  "Facilidade em operações internacionais",
  "Planejamento sucessório simplificado",
  "Privacidade ampliada legalmente",
  "Acesso a mercados globais",
]

export function WhyOffshoreSection() {
  return (
    <section id="offshore" className="py-28 md:py-36 bg-[#080808] relative overflow-hidden">
      {/* Background image decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <Image 
          src="/premium-bg.png" 
          alt="Premium Background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Content */}
          <div>
            <AnimateOnScroll>
              <span className="label-minimal text-white">Internacionalização</span>
              <h2 className="title-kast text-[clamp(1.8rem,4vw,3.2rem)] text-white mt-6 leading-tight">
                POR QUE
              </h2>
              <h2 className="title-kast-thin text-[clamp(1.8rem,4vw,3.2rem)] text-white/50 leading-none -mt-1">
                considerar uma
              </h2>
              <h2 className="title-kast text-[clamp(1.8rem,4vw,3.2rem)] text-white leading-none -mt-1">
                OFFSHORE?
              </h2>
              <p className="body-premium text-white/65 text-base mt-8 max-w-md">
                Uma holding internacional oferece vantagens únicas para quem busca proteção patrimonial
                robusta e planejamento sucessório eficiente em um cenário globalizado.
              </p>
            </AnimateOnScroll>

            <div className="mt-12 space-y-8">
              {offshoreReasons.map((reason, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1} direction="left">
                  <div className="flex gap-5 group">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-white/10 rounded-sm group-hover:border-white/25 transition-colors duration-300">
                      <reason.icon className="h-4 w-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1.5 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="body-premium text-white/65 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Features Panel */}
          <AnimateOnScroll direction="right">
            <div className="border border-white/8 rounded-sm p-10 lg:p-12 bg-[#0c0c0c]">
              <span className="label-minimal text-white/50 block mb-8">Principais Benefícios</span>
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-4 h-4 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white/35 group-hover:text-white/70 transition-colors" />
                    </div>
                    <span className="body-premium text-white/80 text-sm group-hover:text-white/95 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/8">
                <p className="body-premium text-white/40 text-xs">
                  Todas as estruturas são implementadas em total conformidade com a legislação brasileira e
                  internacional.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
