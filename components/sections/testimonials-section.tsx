"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "A Bezerra Borges transformou completamente a gestão do nosso patrimônio familiar. A holding que estruturaram nos deu paz de espírito e economia tributária significativa.",
    author: "Roberto M.",
    role: "Empresário do setor industrial",
    image: "/testimonial_roberto.png",
  },
  {
    quote:
      "Profissionalismo e expertise de alto nível. O planejamento sucessório que fizeram garantiu a continuidade dos nossos negócios sem conflitos familiares.",
    author: "Márcia L.",
    role: "Herdeira e investidora",
    image: "/testimonial_patricia.png",
  },
  {
    quote:
      "A estrutura offshore que implementaram nos permitiu expandir internacionalmente com total segurança jurídica. Recomendo fortemente.",
    author: "Carlos A.",
    role: "CEO de grupo empresarial",
    image: "/testimonial_carlos.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mb-20">
          <span className="label-minimal text-white">Depoimentos</span>
          <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] text-white mt-6 leading-tight">
            O QUE NOSSOS
          </h2>
          <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] text-white/50 leading-none -mt-1">
            clientes dizem
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-px bg-white/6">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} delay={index * 0.12}>
              <div className="bg-[#050505] hover:bg-[#0a0a0a] transition-all duration-300 p-8 h-full flex flex-col">
                <Quote className="w-6 h-6 text-white/15 mb-6 shrink-0" />
                <p className="body-premium text-white/70 text-sm leading-relaxed flex-grow mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/8 pt-6 flex items-center gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm tracking-tight">{testimonial.author}</div>
                    <div className="label-minimal text-white/50 mt-0.5">{testimonial.role}</div>
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
