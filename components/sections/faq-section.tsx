"use client"

import { useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "O que é uma Holding Patrimonial e para quem é indicada?",
    answer:
      "Uma Holding Patrimonial é uma empresa criada para deter e administrar bens e direitos (imóveis, participações societárias, aplicações financeiras) de forma organizada. É indicada para pessoas físicas com patrimônio relevante que desejam proteção, otimização tributária e planejamento sucessório eficiente.",
  },
  {
    question: "Quais são as principais vantagens tributárias de uma Holding?",
    answer:
      "As holdings podem reduzir significativamente a carga tributária sobre aluguéis (de até 27,5% no IR pessoa física para ~11% via pessoa jurídica), ganhos de capital, dividendos e herança. A estrutura correta depende do perfil patrimonial e é definida em diagnóstico inicial.",
  },
  {
    question: "Quanto tempo leva para constituir uma Holding?",
    answer:
      "O processo completo geralmente varia entre 30 e 90 dias, dependendo da complexidade do patrimônio, da quantidade de bens a transferir e das etapas de registro. O planejamento e a documentação iniciam na primeira semana após a consultoria.",
  },
  {
    question: "O que é uma estrutura Offshore e quando faz sentido?",
    answer:
      "Estruturas offshore são entidades constituídas no exterior em jurisdições com sistemas jurídicos sólidos. Fazem sentido para quem possui ou planeja investimentos internacionais, busca proteção patrimonial adicional ou deseja acesso a mercados globais — sempre em conformidade com a legislação brasileira.",
  },
  {
    question: "Como funciona a consultoria inicial?",
    answer:
      "A consultoria é uma sessão exclusiva de 60 minutos com um especialista Bezerra Borges. Realizamos o diagnóstico patrimonial completo, identificamos as melhores estratégias de estruturação e apresentamos um plano de ação preliminar. Ao final, você terá clareza total sobre os próximos passos.",
  },
  {
    question: "Qual o custo para estruturar uma Holding?",
    answer:
      "O investimento varia de acordo com a complexidade do patrimônio, número de ativos e estrutura escolhida. Após a consultoria inicial de diagnóstico, apresentamos uma proposta personalizada com escopo e valor definidos com transparência total.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mb-20">
          <span className="label-minimal text-white/50">Dúvidas Frequentes</span>
          <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] mt-6 leading-tight">
            PERGUNTAS
          </h2>
          <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none -mt-1">
            frequentes
          </h2>
        </AnimateOnScroll>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} delay={index * 0.06}>
              <div className="faq-item">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                >
                  <span className="faq-question pr-4">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-white/15 rounded-sm group-hover:border-white/35 transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-3 h-3 text-white/70" />
                    ) : (
                      <Plus className="w-3 h-3 text-white/40 group-hover:text-white/70 transition-colors" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="faq-answer pb-7 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
