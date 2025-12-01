"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "A BBLAW transformou completamente a gestão do nosso patrimônio familiar. A holding que estruturaram nos deu paz de espírito e economia tributária significativa.",
    author: "Roberto M.",
    role: "Empresário do setor industrial",
    image: "/professional-businessman-portrait.png",
  },
  {
    quote:
      "Profissionalismo e expertise de alto nível. O planejamento sucessório que fizeram garantiu a continuidade dos nossos negócios sem conflitos familiares.",
    author: "Márcia L.",
    role: "Herdeira e investidora",
    image: "/professional-businesswoman-portrait.png",
  },
  {
    quote:
      "A estrutura offshore que implementaram nos permitiu expandir internacionalmente com total segurança jurídica. Recomendo fortemente.",
    author: "Carlos A.",
    role: "CEO de grupo empresarial",
    image: "/executive-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-sm font-medium text-background/60 uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            O que nossos clientes dizem
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.15}>
              <div className="bg-background/5 border border-background/10 rounded-xl p-8 h-full flex flex-col">
                <Quote className="w-10 h-10 text-background/20 mb-6" />
                <p className="text-background/90 leading-relaxed flex-grow mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-background/10">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-background/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
