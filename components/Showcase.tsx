export function Showcase() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Title — left */}
          <h2 className="max-w-[480px] text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
            Seu imóvel ideal pode estar mais perto do que imagina.
          </h2>

          {/* Video badge — right */}
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&q=80"
                alt="Imóvel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="max-w-[200px] text-[13px] leading-snug text-gray-600">
              Cada imóvel é verificado pessoalmente com qualidade e localização premium
            </p>
          </div>
        </div>

        {/* Grid — 3 columns */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.8fr_1fr]">
          {/* Card 1 — Large image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Casa de alto padrão"
              className="h-[380px] w-full object-cover lg:h-full"
            />
            {/* Thumbnails */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {[
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=80&q=60",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=80&q=60",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=80&q=60",
                "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=80&q=60",
              ].map((img, i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Text card */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 px-8 py-10 text-center">
            <h3 className="text-xl font-bold leading-tight text-[#1c2340] sm:text-2xl">
              Grandes conquistas começam com boas escolhas.
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-500">
              Com planejamento inteligente e o imóvel certo, você transforma qualquer espaço no lar dos seus sonhos.
            </p>
            <a
              href="#contato"
              className="mt-6 inline-flex items-center rounded-full border border-gray-300 px-6 py-2.5 text-[13px] font-medium text-[#1c2340] transition-colors hover:border-[#1c2340] hover:bg-gray-50"
            >
              Saiba mais
            </a>
          </div>

          {/* Card 3 — Image + price */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Apartamento moderno"
                className="h-[250px] w-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-[#1c2340]">
                A partir de R$ 439 mil
              </p>
              <a
                href="#imoveis"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#1c2340] px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a3558]"
              >
                Explorar imóveis
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom text + arrows */}
        <div className="mt-6 flex items-center justify-between">
          <p className="max-w-[500px] text-[13px] text-gray-500">
            Seja para morar, investir ou alugar — encontramos o imóvel certo para o seu momento de vida.
          </p>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#1c2340] hover:text-[#1c2340]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#1c2340] hover:text-[#1c2340]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
