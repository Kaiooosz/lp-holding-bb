"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Image from "next/image"

const team = [
  {
    name: "Vinicius Borges",
    role: "Sócio Fundador",
    specialty: "Direito Societário e Tributário",
    image: "/vinicius.jpg",
  },
  {
    name: "Roberto",
    role: "Sócio",
    specialty: "Estratégias Offshore",
    image: "/roberto.jpg",
  },
  {
    name: "Alice",
    role: "Sócia",
    specialty: "Planejamento Sucessório",
    image: "/alice.jpg",
  },
  {
    name: "Kaio",
    role: "CTO",
    specialty: "Tecnologia e Operações",
    image: "/kaio.jpg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-28 md:py-36 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll className="mb-20">
          <span className="label-minimal text-white">Nossa Equipe</span>
          <h2 className="title-kast text-[clamp(1.8rem,4.5vw,3.5rem)] text-white mt-6 leading-tight">
            ESPECIALISTAS
          </h2>
          <h2 className="title-kast-thin text-[clamp(1.8rem,4.5vw,3.5rem)] text-white/50 leading-none -mt-1">
            dedicados ao seu patrimônio
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
          {team.map((member, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden bg-[#080808] hover:bg-[#0e0e0e] transition-all duration-300">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale opacity-70 group-hover:opacity-85 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-base tracking-tight">{member.name}</h3>
                  <p className="label-minimal text-white/70 mt-1">{member.role}</p>
                  <p className="body-premium text-white/50 text-xs mt-1">{member.specialty}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Company info */}
        <AnimateOnScroll className="mt-16 grid md:grid-cols-2 gap-12 pt-16 border-t border-white/8">
          <div>
            <h3 className="text-white font-medium text-xl mb-5 tracking-tight">Sobre a Bezerra Borges</h3>
            <p className="body-premium text-white/70 text-sm mb-4">
              Há mais de uma década, a Bezerra Borges se dedica à estruturação patrimonial e empresarial com excelência.
              Nossa missão é proteger e multiplicar o patrimônio de famílias e empresários através de soluções
              jurídicas inovadoras e personalizadas.
            </p>
            <p className="body-premium text-white/70 text-sm">
              Com escritórios no Brasil e parcerias internacionais, oferecemos uma visão global para os desafios
              patrimoniais dos nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/6">
            {[
              { value: "10+", label: "Anos de atuação" },
              { value: "500+", label: "Clientes atendidos" },
              { value: "15+", label: "Advogados" },
              { value: "3", label: "Escritórios" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#080808] p-6">
                <div className="stat-number text-white text-3xl">{stat.value}</div>
                <div className="label-minimal text-white/40 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
