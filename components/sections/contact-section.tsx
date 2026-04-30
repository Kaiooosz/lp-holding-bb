"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Mail, Phone, MapPin, Clock, ArrowRight, Loader2, CheckCircle, MessageCircle } from "lucide-react"
import { StripeCheckoutButton } from "@/components/stripe-checkout-button"

const WHATSAPP_URL = "https://wa.me/5521979901686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20estrat%C3%A9gica%20de%20Holding%20com%20a%20Bezerra%20Borges%20Advogados"

export function ContactSection() {
  const STRIPE_PRODUCT_ID = "prod_UQt5dYJOG1ANiX"

  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ nome: "", email: "", telefone: "", mensagem: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Left: Info + Form */}
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
                Deixe seu contato e nossa equipe entrará em contato com a solução ideal para o seu patrimônio.
              </p>
            </AnimateOnScroll>

            {/* Lead Form */}
            <AnimateOnScroll delay={0.1} className="mt-10">
              {status === "success" ? (
                <div className="flex flex-col gap-4 py-10">
                  <CheckCircle className="w-8 h-8 text-white/40" />
                  <p className="text-lg font-light text-white">Recebemos seu contato!</p>
                  <p className="text-sm text-white/40 font-light">Nossa equipe retornará em breve.</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-[10px] font-light uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors mt-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ou fale agora no WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="label-minimal text-white/40">Nome Completo *</label>
                      <input
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label-minimal text-white/40">E-mail *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="label-minimal text-white/40">Telefone / WhatsApp *</label>
                    <input
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      required
                      placeholder="+55 (11) 99999-9999"
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="label-minimal text-white/40">Seu Caso</label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Conte brevemente sobre seu patrimônio e objetivos..."
                      className="bg-transparent border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none rounded-sm"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400/70 font-light">Erro ao enviar. Tente via WhatsApp.</p>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex items-center justify-center gap-2 bg-white text-black py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white/90 transition-colors disabled:opacity-50 rounded-sm"
                    >
                      {status === "loading" ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <>Enviar Mensagem <ArrowRight className="h-3 w-3" /></>
                      )}
                    </button>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 border border-white/20 text-white py-3.5 text-[10px] font-light uppercase tracking-[0.2em] hover:bg-white/5 transition-colors rounded-sm"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp Direto
                    </a>
                  </div>

                  <p className="text-[9px] font-light text-white/20 text-center">
                    Ao enviar, você concorda com nossa política de privacidade (LGPD).
                  </p>
                </form>
              )}
            </AnimateOnScroll>

            {/* Contact info compact */}
            <AnimateOnScroll delay={0.2} className="mt-10 pt-8 border-t border-white/5">
              <div className="grid grid-cols-2 gap-4 text-sm font-light text-white/50">
                <div>
                  <p className="label-minimal text-white/30 mb-1">E-mail</p>
                  <p>contato@bezerraborges.com.br</p>
                </div>
                <div>
                  <p className="label-minimal text-white/30 mb-1">WhatsApp</p>
                  <p>+55 21 97990-1686</p>
                </div>
                <div>
                  <p className="label-minimal text-white/30 mb-1">Escritório</p>
                  <p>São Paulo, SP — Brasil</p>
                </div>
                <div>
                  <p className="label-minimal text-white/30 mb-1">Horário</p>
                  <p>Seg — Sex: 9h às 18h</p>
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
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-white/40 text-[10px] md:text-sm font-medium uppercase tracking-wider">Investimento:</span>
                  <span className="text-white text-3xl md:text-4xl stat-number">USD 125</span>
                  <span className="text-white/30 text-[10px] md:text-xs">/ Sessão</span>
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
