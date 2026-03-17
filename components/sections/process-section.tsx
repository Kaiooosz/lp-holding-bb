"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Diagnóstico Patrimonial",
    description: "Análise completa do patrimônio familiar, estrutura atual e objetivos de proteção e crescimento.",
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description: "Desenvolvimento da estrutura ideal considerando aspectos fiscais, sucessórios e de proteção.",
  },
  {
    number: "03",
    title: "Implementação",
    description: "Constituição da holding, transferência de ativos e formalização de toda documentação.",
  },
  {
    number: "04",
    title: "Gestão Contínua",
    description: "Suporte permanente para governança, compliance fiscal e ajustes estratégicos.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-28 md:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mb-20">
          <span className="label-minimal text-white">Metodologia</span>
          <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] text-white mt-6 leading-tight">
            COMO FUNCIONA
          </h2>
          <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] text-white/50 leading-none -mt-1">
            nosso processo
          </h2>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} delay={index * 0.12}>
              <div className="relative p-8 bg-[#050505] hover:bg-[#0a0a0a] transition-all duration-300 group h-full flex flex-col">
                {/* Number */}
                <span
                  className="stat-number text-[5rem] leading-none text-white/5 group-hover:text-white/8 transition-colors duration-300 absolute top-4 right-6"
                >
                  {step.number}
                </span>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="label-minimal text-white/30 mb-8">{step.number}</span>
                  <h3 className="text-white font-medium text-base mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="body-premium text-white/70 text-sm flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll className="mt-16 pt-10 border-t border-white/8 flex items-center justify-between flex-wrap gap-4">
          <p className="body-premium text-white/65 text-sm max-w-md">
            Pronto para começar? Agende uma consultoria e conheça nosso processo em detalhes.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium group"
          >
            Fale com um especialista
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
