"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { StripeCheckoutButton } from "@/components/stripe-checkout-button"

export function ContactSection() {
  const WHATSAPP_NUMBER = "5521979901686"
  const STRIPE_PRODUCT_ID = "prod_U8W26zI0dRzFzG" // ID do produto fornecido pelo usuário

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Info */}
          <div>
            <AnimateOnScroll>
              <span className="label-minimal text-white/50">Contato</span>
              <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] mt-6 leading-tight">
                PRONTO PARA
              </h2>
              <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none -mt-1">
                estruturar sua
              </h2>
              <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none -mt-1">
                HOLDING?
              </h2>
              <p className="body-premium text-white/60 text-base mt-8 max-w-md">
                Agende uma consultoria estratégica e descubra como uma holding pode transformar a gestão do
                seu patrimônio.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1} className="mt-12">
              <div className="space-y-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
                <a
                  href="mailto:contato@borgesbezerra.com.br"
                  className="flex items-center gap-5 p-6 bg-[#050505] hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-white/30 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div>
                    <div className="label-minimal text-white/30 group-hover:text-white/60 transition-colors">Email</div>
                    <div className="text-white/80 text-sm font-medium mt-0.5">contato@borgesbezerra.com.br</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 bg-[#050505] hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-white/30 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div>
                    <div className="label-minimal text-white/30 group-hover:text-white/60 transition-colors">WhatsApp</div>
                    <div className="text-white/80 text-sm font-medium mt-0.5">+55 21 97990-1686</div>
                  </div>
                </a>

                <div className="flex items-center gap-5 p-6 bg-[#050505]">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-sm shrink-0">
                    <MapPin className="w-4 h-4 text-white/20" />
                  </div>
                  <div>
                    <div className="label-minimal text-white/25">Escritório</div>
                    <div className="text-white/50 text-sm font-medium mt-0.5">São Paulo, SP — Brasil</div>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 bg-[#050505]">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/5 rounded-sm shrink-0">
                    <Clock className="w-4 h-4 text-white/20" />
                  </div>
                  <div>
                    <div className="label-minimal text-white/25">Horário</div>
                    <div className="text-white/50 text-sm font-medium mt-0.5">Seg — Sex: 9h às 18h</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Stripe CTA Card */}
          <AnimateOnScroll direction="right" className="flex">
            <div className="flex flex-col justify-between border border-white/10 rounded-sm p-10 lg:p-12 bg-[#0c0c0c] w-full card-stripe-glow relative">
              <div className="relative z-10">
                <span className="pill-minimal mb-8 text-[0.6rem]">Agendamento Imediato</span>
                <h3 className="text-white font-light text-xl lg:text-2xl mb-6 tracking-tight leading-tight">
                  Consultoria Estratégica Holding
                </h3>
                <p className="body-premium text-white/60 text-base mb-10 leading-relaxed">
                  Agende uma sessão exclusiva de 60 minutos com um de nossos especialistas para análise inicial do seu patrimônio e identificação das melhores estratégias de estruturação.
                </p>

                <div className="space-y-5 mb-12">
                  {[
                    "Análise patrimonial personalizada",
                    "Identificação de oportunidades",
                    "Plano de ação preliminar",
                    "Acesso direto a sócios especialistas",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors shrink-0" />
                      <span className="body-premium text-white/70 text-sm group-hover:text-white/90 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-10">
                <div className="flex items-baseline gap-2 mb-8 juices-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/40 text-[10px] md:text-sm font-medium uppercase tracking-wider">Investimento:</span>
                    <span className="text-white text-3xl md:text-4xl stat-number">USD 125</span>
                    <span className="text-white/30 text-[10px] md:text-xs">/ Sessão</span>
                  </div>
                </div>
                
                <StripeCheckoutButton 
                  priceId={STRIPE_PRODUCT_ID} 
                  className="w-full py-4 text-[10px] md:text-sm font-medium"
                >
                  Agendar Sessão
                </StripeCheckoutButton>
                
                <p className="text-[10px] text-white/20 mt-4 text-center uppercase tracking-[0.15em]">
                  Pagamento 100% seguro via Stripe
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
