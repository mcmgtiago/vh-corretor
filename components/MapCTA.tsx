export function MapCTA() {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Map — left */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31629.47875288!2d-34.89!3d-8.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fa3e0e888ef%3A0x4b1e3b3d3b3d3b3d!2sBoa%20Viagem%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="h-[320px] w-full border-0 lg:h-[380px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Recife — Boa Viagem"
            />
            {/* Pin overlay */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#a3e635] bg-white shadow-lg">
                  <svg className="h-6 w-6 text-[#1c2340]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5M3.75 3v18m16.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div className="mt-2 rounded-full bg-[#a3e635]/90 px-4 py-1.5 text-xs font-semibold text-[#1c2340] shadow-sm">
                  Seu imóvel 🏠
                </div>
              </div>
            </div>
          </div>

          {/* Content — right */}
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
              Descubra imóveis com o melhor custo-benefício
            </h2>
            <p className="mt-5 max-w-[460px] text-[15px] leading-relaxed text-gray-500">
              De Boa Viagem a Setúbal, de Casa Forte ao Pina — conheço cada bairro de Recife e encontro o imóvel ideal para o seu perfil e orçamento.
            </p>
            <a
              href="https://wa.me/5581996779692?text=Ol%C3%A1%2C%20quero%20conhecer%20im%C3%B3veis%20na%20regi%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1c2340] px-7 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a3558]"
            >
              Encontrar imóveis próximos
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
