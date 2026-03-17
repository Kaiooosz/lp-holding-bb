"use client"

import Link from "next/link"
import { Instagram, Linkedin, Youtube, Globe } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Globe, href: "https://borgesbezerra.com.br", label: "Website" },
]

const footerLinks = {
  services: [
    { label: "Holding Patrimonial", href: "#" },
    { label: "Holding Empresarial", href: "#" },
    { label: "Estruturas Offshore", href: "#" },
    { label: "Planejamento Sucessório", href: "#" },
  ],
  company: [
    { label: "Sobre Nós", href: "#team" },
    { label: "Equipe", href: "#team" },
    { label: "Artigos", href: "#articles" },
    { label: "Contato", href: "#contact" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#030303] py-16 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src="/Logo Branco.svg"
                alt="Bezerra Borges"
                className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="body-premium text-white/30 text-sm mt-5 leading-relaxed">
              Especialistas em estruturação patrimonial e empresarial há mais de 10 anos.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center rounded-sm hover:border-white/30 hover:text-white text-white/35 transition-all duration-200"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-minimal text-white/40 mb-5">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="body-premium text-white/35 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="label-minimal text-white/40 mb-5">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="body-premium text-white/45 hover:text-white/80 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5511982712025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-premium text-white/45 hover:text-white/80 text-sm transition-colors duration-200"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="label-minimal text-white/40 mb-5">Newsletter</h4>
            <p className="body-premium text-white/40 text-sm mb-5">
              Receba nossos artigos e atualizações sobre planejamento patrimonial.
            </p>
            <div className="flex gap-0 group">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/10 border-r-0 rounded-l-sm text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all"
              />
              <button className="px-5 py-3 bg-white text-black rounded-sm -ml-px text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all active:scale-95">
                Ok
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label-minimal text-white/20">
            © {new Date().getFullYear()} Bezerra Borges Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="label-minimal text-white/20 hover:text-white/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
