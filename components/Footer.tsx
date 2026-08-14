export function Footer() {
  const links = {
    navegacao: [
      { label: "Imóveis", href: "#imoveis" },
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Sobre", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    imoveis: [
      { label: "Apartamentos", href: "#" },
      { label: "Casas", href: "#" },
      { label: "Coberturas", href: "#" },
      { label: "Salas Comerciais", href: "#" },
    ],
    bairros: [
      { label: "Boa Viagem", href: "#" },
      { label: "Setúbal", href: "#" },
      { label: "Pina", href: "#" },
      { label: "Casa Forte", href: "#" },
      { label: "Graças", href: "#" },
    ],
  }

  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Top — Logo + Links */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block">
              <img
                src="/logo-azul.png"
                alt="VH Corretor"
                className="h-8"
              />
            </a>
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-gray-500">
              Vendas e locações de imóveis de médio e alto padrão em Recife e região metropolitana.
            </p>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/_vh.corretor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-[#1c2340] hover:text-[#1c2340]"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5581996779692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-[#1c2340] hover:text-[#1c2340]"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links — Navegação */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#1c2340]">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {links.navegacao.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-gray-500 transition-colors hover:text-[#1c2340]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links — Imóveis */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#1c2340]">Imóveis</h3>
            <ul className="mt-4 space-y-3">
              {links.imoveis.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-gray-500 transition-colors hover:text-[#1c2340]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links — Bairros */}
          <div>
            <h3 className="text-[13px] font-semibold text-[#1c2340]">Bairros</h3>
            <ul className="mt-4 space-y-3">
              {links.bairros.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-gray-500 transition-colors hover:text-[#1c2340]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-gray-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-[12px] text-gray-400">
              © 2026 VH Corretor. Todos os direitos reservados. CRECI-PE 22316 F
            </p>

            {/* Legal links */}
            <div className="flex gap-4">
              <a href="#" className="text-[12px] text-gray-400 transition-colors hover:text-gray-600">
                Política de Privacidade
              </a>
              <a href="#" className="text-[12px] text-gray-400 transition-colors hover:text-gray-600">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
