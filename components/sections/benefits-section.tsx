"use client"

import { Shield, TrendingUp, Users, Building2, Lock, FileText } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Image from "next/image"

const benefits = [
  {
    icon: Shield,
    title: "Proteção Patrimonial",
    description: "Proteção patrimonial lícita e preventiva contra riscos jurídicos e econômicos.",
  },
  {
    icon: TrendingUp,
    title: "Planejamento Tributário",
    description: "Planejamento fiscal estratégico que pode reduzir significativamente a carga tributária.",
  },
  {
    icon: Users,
    title: "Sucessão Planejada",
    description: "Transferência patrimonial estruturada que evita conflitos e custos com inventário.",
  },
  {
    icon: Building2,
    title: "Governança Corporativa",
    description: "Estrutura profissional com separação clara entre patrimônio pessoal e empresarial.",
  },
  {
    icon: Lock,
    title: "Privacidade Total",
    description: "Maior discrição sobre o patrimônio através de estruturas legalmente constituídas.",
  },
  {
    icon: FileText,
    title: "Flexibilidade Operacional",
    description: "Facilita operações internacionais, aquisições e reorganizações societárias.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
      {/* Background image decoration */}
      <div className="absolute top-0 right-0 w-[60%] h-full pointer-events-none opacity-[0.07]">
        <Image 
          src="/premium-bg.png" 
          alt="Premium Background" 
          fill 
          className="object-cover scale-x-[-1]" 
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <AnimateOnScroll className="mb-20">
          <span className="label-minimal text-white">Vantagens</span>
          <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] text-white mt-6 leading-tight">
            POR QUE CRIAR
          </h2>
          <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] text-white/50 leading-none -mt-1">
            uma Holding?
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} delay={index * 0.08}>
              <div className="group p-8 bg-[#050505] hover:bg-[#0d0d0d] transition-all duration-300">
                <div className="w-9 h-9 flex items-center justify-center mb-7">
                  <benefit.icon className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
                </div>
                <h3 className="text-white font-medium text-base mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="body-premium text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
