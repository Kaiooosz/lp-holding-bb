"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <AnimateOnScroll>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contato</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
                Pronto para estruturar sua Holding?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty leading-relaxed">
                Agende uma consultoria estratégica e descubra como uma holding pode transformar a gestão do seu
                patrimônio.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="space-y-6 mb-10">
                <a
                  href="mailto:contato@borgesbezerra.com.br"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground text-sm">contato@borgesbezerra.com.br</div>
                  </div>
                </a>

                <a
                  href="tel:+5511943665367"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <div className="text-muted-foreground text-sm">+55 (11) 94366-5367</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Escritório</div>
                    <div className="text-muted-foreground text-sm">São Paulo, SP - Brasil</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horário</div>
                    <div className="text-muted-foreground text-sm">Seg - Sex: 9h às 18h</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* CTA Card */}
          <AnimateOnScroll direction="right">
            <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Consultoria Estratégica</h3>
              <p className="text-background/80 mb-8 leading-relaxed">
                Agende uma sessão exclusiva de 60 minutos com um de nossos especialistas para análise inicial do seu
                patrimônio e identificação das melhores estratégias de estruturação.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-background" />
                  <span>Análise patrimonial personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-background" />
                  <span>Identificação de oportunidades</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-background" />
                  <span>Plano de ação preliminar</span>
                </div>
              </div>

              <div className="border-t border-background/20 pt-8 mt-auto">
                <div className="text-3xl font-bold mb-2">$125</div>
                <div className="text-background/60 text-sm mb-6">Investimento na consultoria</div>
                <Button
                  size="lg"
                  className="w-full bg-background text-foreground hover:bg-background/90 rounded-full py-6 text-base font-semibold group"
                >
                  Agendar Consultoria
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
