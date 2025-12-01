"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Dr. Vinicius Borges",
    role: "Sócio Fundador",
    specialty: "Direito Societário e Tributário",
    image: "/vinicius 1.jpg",
  },

  {
    name: "Dr. Lucas",
    role: "Sócio",
    specialty: "Direito Societário e Tributário",
    image: "/Lucas.jpg",
  },

  {
    name: "Dra. Victória",
    role: "Sócia",
    specialty: "Direito Societário e Tributário",
    image: "/victoria.jpg",
  },

  {
    name: "Dra. Mariana Bezerra",
    role: "Sócia",
    specialty: "Planejamento Patrimonial",
    image: "/mariana.jpg",
  },  
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Nossa Equipe</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 mb-6 text-balance">
            Especialistas dedicados ao seu patrimônio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Uma equipe multidisciplinar com experiência comprovada em estruturação patrimonial
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
                <p className="text-muted-foreground text-xs mt-1">{member.specialty}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Company info */}
        <AnimateOnScroll className="mt-20">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Sobre a BBLAW</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Há mais de uma década, a BBLAW se dedica à estruturação patrimonial e empresarial com excelência. Nossa
                missão é proteger e multiplicar o patrimônio de famílias e empresários através de soluções jurídicas
                inovadoras e personalizadas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Com escritórios no Brasil e parcerias internacionais, oferecemos uma visão global para os desafios
                patrimoniais dos nossos clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-muted-foreground">Anos de atuação</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Advogados</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Escritórios</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
