"use client"

import { useState, useEffect } from "react"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#", label: "Home", active: true },
    { href: "#imoveis", label: "Imóveis", active: false },
    { href: "#como-funciona", label: "Como Funciona", active: false },
    { href: "#sobre", label: "Sobre", active: false },
    { href: "#contato", label: "Contato", active: false },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1c2340]/95 backdrop-blur-md shadow-lg"
          : "bg-[#1c2340]/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-8 lg:px-10">
        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center">
          <img
            src="/logo-azul.png"
            alt="VH Corretor"
            className="h-7 brightness-0 invert"
          />
        </a>

        {/* Nav Links - Desktop (centered pill) */}
        <nav className="hidden items-center gap-0.5 rounded-full bg-white/10 px-1.5 py-1 backdrop-blur-sm md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                link.active
                  ? "bg-white text-[#1c2340] shadow-sm"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA WhatsApp */}
        <a
          href="https://wa.me/5581996779692?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20im%C3%B3veis"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded-full bg-[#a3e635] px-6 py-2.5 text-[13px] font-semibold text-[#1c2340] transition-all hover:bg-[#bef264] md:flex"
        >
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#1c2340]/98 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  link.active ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
