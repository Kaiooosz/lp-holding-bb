"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Benefícios", href: "#benefits" },
  { label: "Offshore", href: "#offshore" },
  { label: "Processo", href: "#process" },
  { label: "Equipe", href: "#team" },
  { label: "Artigos", href: "#articles" },
  { label: "Contato", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo SVG branca */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo Branco.svg"
              alt="Bezerra Borges"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-minimal text-white hover:opacity-100 transition-opacity duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://www.formsbblaw.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-kast-wrapper">
                <button className="btn-kast text-[9px] py-1.5 px-4 font-bold uppercase tracking-[0.15em]">
                  Preencher Formulário
                </button>
              </span>
            </Link>
            <Link
              href="https://wa.me/5511982712025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-kast-wrapper">
                <button className="btn-kast btn-kast-outline text-[9px] py-1.5 px-3.5">
                  Agendar Consulta
                  <ArrowRight className="h-3 w-3" />
                </button>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505] border-t border-white/8"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="label-minimal text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/8 flex flex-col gap-3">
                <Link
                  href="https://www.formsbblaw.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <span className="btn-kast-wrapper w-full">
                    <button className="btn-kast w-full text-[10px] py-2.5 font-bold uppercase tracking-[0.15em]">
                      Preencher Formulário
                    </button>
                  </span>
                </Link>
                <Link
                  href="https://wa.me/5511982712025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <span className="btn-kast-wrapper w-full">
                    <button className="btn-kast btn-kast-outline w-full text-[10px] py-2.5">
                      Agendar Consulta
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
