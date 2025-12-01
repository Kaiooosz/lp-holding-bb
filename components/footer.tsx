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
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-3xl font-serif font-bold">
              BBLAW
            </Link>
            <p className="mt-4 text-background/60 text-sm leading-relaxed">
              Especialistas em estruturação patrimonial e empresarial há mais de 10 anos.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/60 hover:text-background text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/60 hover:text-background text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-semibold mb-4">Mantenha-se Informado</h4>
            <p className="text-background/60 text-sm mb-4">
              Receba nossos artigos e atualizações sobre planejamento patrimonial.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-sm placeholder:text-background/40 focus:outline-none focus:border-background/40"
              />
              <button className="px-4 py-2 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-background/90 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} BBLAW - Borges Bezerra Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-background/40 hover:text-background text-sm transition-colors"
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
