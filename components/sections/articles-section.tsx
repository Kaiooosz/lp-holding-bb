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
    <section id="articles" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Curadoria</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 text-balance">Artigos e Insights</h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mt-4 md:mt-0 transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background text-foreground text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:underline underline-offset-4">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
