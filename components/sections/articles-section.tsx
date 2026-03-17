"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "Holding Familiar: Guia Completo para Proteção Patrimonial",
    excerpt: "Entenda como uma holding familiar pode proteger seus bens e facilitar a sucessão.",
    date: "15 Nov 2024",
    category: "Planejamento",
    image: "/modern-office-documents-legal-papers.jpg",
  },
  {
    title: "Offshore em 2024: Mitos e Verdades sobre Estruturas Internacionais",
    excerpt: "Desmistificando as holdings internacionais e suas vantagens legais.",
    date: "08 Nov 2024",
    category: "Internacional",
    image: "/world-map-global-business.jpg",
  },
  {
    title: "Planejamento Sucessório: Evite Conflitos e Preserve seu Legado",
    excerpt: "Como estruturar a transferência de patrimônio de forma eficiente.",
    date: "01 Nov 2024",
    category: "Sucessão",
    image: "/family-business-meeting.png",
  },
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <span className="label-minimal text-white">Curadoria</span>
            <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] text-white mt-6 leading-tight">
              ARTIGOS &amp;
            </h2>
            <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] text-white/50 leading-none -mt-1">
              Insights
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 mt-6 md:mt-0 transition-colors text-sm group"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-white/6">
          {articles.map((article, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <article className="group cursor-pointer bg-[#080808] hover:bg-[#0e0e0e] transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="label-minimal text-white px-3 py-1.5 bg-white/8 border border-white/10 rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-3 h-3 text-white/40" />
                    <span className="label-minimal text-white/50">{article.date}</span>
                  </div>
                  <h3 className="text-white font-medium text-base mb-2 tracking-tight leading-snug group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  <p className="body-premium text-white/65 text-sm">{article.excerpt}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
