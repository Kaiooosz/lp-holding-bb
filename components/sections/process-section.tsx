"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

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
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-20">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Metodologia</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            Como funciona nosso processo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Do planejamento à execução, cuidamos de cada detalhe com excelência
          </p>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={index} delay={index * 0.15}>
                <div className="relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 bg-foreground text-background text-sm font-bold px-4 py-1 rounded-full">
                    {step.number}
                  </div>

                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow connector - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center -translate-y-1/2 z-10">
                      <svg
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Pronto para começar? Agende uma consultoria e conheça nosso processo em detalhes.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:underline underline-offset-4"
          >
            Fale com um especialista
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
