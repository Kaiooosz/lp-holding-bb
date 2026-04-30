"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react"

type FormState = "idle" | "loading" | "success" | "error"

export function LeadFormSection() {
  const WHATSAPP_NUMBER = "5521979901686"

  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" })
  const [state, setState] = useState<FormState>("idle")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState("loading")

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setState("success")
      setForm({ nome: "", email: "", telefone: "", mensagem: "" })
    } catch {
      setState("error")
    }
  }

  return (
    <section id="formulario" className="py-28 md:py-36 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Info */}
          <div>
            <AnimateOnScroll>
              <span className="label-minimal text-white/50">Fale Conosco</span>
              <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] mt-6 leading-tight">
                INICIE SUA
              </h2>
              <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none -mt-1">
                jornada de
              </h2>
              <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none -mt-1">
                PROTEÇÃO
              </h2>
              <p className="body-premium text-white/60 text-base mt-8 max-w-md">
                Preencha o formulário e um dos nossos especialistas entrará em contato para apresentar
                as melhores estratégias de estruturação patrimonial para o seu caso.
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

          {/* Right: Form */}
          <AnimateOnScroll direction="right" className="flex">
            <div className="flex flex-col border border-white/10 rounded-sm p-10 lg:p-12 bg-[#0c0c0c] w-full relative">
              <div className="relative z-10">
                <span className="pill-minimal mb-8 text-[0.6rem]">Resposta em até 24h</span>
                <h3 className="text-white font-light text-xl lg:text-2xl mb-2 tracking-tight leading-tight">
                  Solicite uma Avaliação
                </h3>
                <p className="body-premium text-white/50 text-sm mb-8">
                  Sem compromisso. Nossa equipe analisará seu perfil e retornará com as melhores opções.
                </p>

                {state === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <CheckCircle2 className="w-12 h-12 text-white/60" />
                    <p className="text-white text-lg font-light">Mensagem enviada com sucesso!</p>
                    <p className="text-white/50 text-sm">Em breve nossa equipe entrará em contato.</p>
                    <button
                      onClick={() => setState("idle")}
                      className="mt-4 text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-4"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="label-minimal text-white/30 block mb-1.5">Nome completo *</label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="label-minimal text-white/30 block mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="label-minimal text-white/30 block mb-1.5">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="telefone"
                        required
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="+55 11 99999-9999"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="label-minimal text-white/30 block mb-1.5">Mensagem</label>
                      <textarea
                        name="mensagem"
                        rows={3}
                        value={form.mensagem}
                        onChange={handleChange}
                        placeholder="Conte brevemente sobre seu patrimônio ou dúvida..."
                        className="w-full bg-white/[0.04] border border-white/10 rounded-sm px-4 py-3 text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      />
                    </div>

                    {state === "error" && (
                      <p className="text-red-400/80 text-xs">
                        Ocorreu um erro ao enviar. Tente novamente ou entre em contato via WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="w-full py-4 bg-white text-black text-[10px] md:text-sm font-medium uppercase tracking-[0.15em] rounded-sm hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Mensagem"
                      )}
                    </button>

                    <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.15em]">
                      Seus dados estão protegidos e não serão compartilhados
                    </p>
                  </form>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
