"use client"

import { Shield, TrendingUp, Users, Building2, Lock, FileText } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

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
    <section id="benefits" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Vantagens</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            Por que criar uma Holding?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Vantagens estratégicas que transformam a gestão do seu patrimônio
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="group p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
