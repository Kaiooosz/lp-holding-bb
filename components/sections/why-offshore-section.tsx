"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Check, Globe, Shield, Banknote, Scale } from "lucide-react"

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
    <section id="offshore" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimateOnScroll>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Internacionalização
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
                Por que considerar uma estrutura Offshore?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty leading-relaxed">
                Uma holding internacional oferece vantagens únicas para quem busca proteção patrimonial robusta e
                planejamento sucessório eficiente em um cenário globalizado.
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {offshoreReasons.map((reason, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1} direction="left">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Features Card */}
          <AnimateOnScroll direction="right">
            <div className="relative">
              <div className="bg-foreground text-background rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold mb-8">Principais Benefícios</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-background/10 flex items-center justify-center">
                        <Check className="h-4 w-4" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-background/20">
                  <p className="text-sm text-background/70">
                    Todas as estruturas são implementadas em total conformidade com a legislação brasileira e
                    internacional.
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-muted rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
