"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const images = ["/hero-bg.jpg"]
  const tags = ["Apartamento", "Casa", "Cobertura"]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {/* === HERO IMAGE SECTION === */}
      <section className="relative h-[780px] max-h-[85vh] min-h-[600px]">
        {/* Background */}
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt="Imóvel de alto padrão em Recife"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Gradient — subtle, bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

        {/* Hero Content — pinned to bottom-left */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1200px] px-8 pb-36 lg:px-10">
            {/* Pills */}
            <div className="mb-4 flex gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/50 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title + Description side by side */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-20">
              {/* Title */}
              <h1 className="max-w-[680px] text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.12] text-white">
                Seu próximo imóvel em Recife começa aqui.
              </h1>

              {/* Description — right side, vertically centered with title */}
              <p className="max-w-[280px] text-[13px] leading-[1.7] text-white/75">
                Apartamentos, casas e coberturas nas melhores localizações de Boa Viagem, Setúbal, Pina e região. Atendimento direto com quem conhece cada metro quadrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SEARCH CARD — overlapping hero bottom === */}
      <div className="relative z-20 mx-auto -mt-24 max-w-[1100px] px-6 lg:px-8">
        <div className="rounded-[20px] border border-gray-200/80 bg-white px-8 pb-8 pt-9 shadow-sm sm:px-10">
          {/* Title */}
          <h2 className="mb-7 text-[1.35rem] font-bold text-[#1c2340]">
            Encontre o lugar ideal
          </h2>

          {/* Filters — 4 columns, underline style */}
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1c2340]">
                Tipo de imóvel
              </label>
              <select className="mt-2 w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 text-[13px] text-gray-500 outline-none focus:border-[#1c2340] focus:ring-0">
                <option value="">Selecione o tipo</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Flat</option>
                <option>Sala Comercial</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1c2340]">
                Faixa de preço
              </label>
              <select className="mt-2 w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 text-[13px] text-gray-500 outline-none focus:border-[#1c2340] focus:ring-0">
                <option value="">Preço</option>
                <option>Até R$ 500 mil</option>
                <option>R$ 500 mil – R$ 1 milhão</option>
                <option>R$ 1 milhão – R$ 2 milhões</option>
                <option>Acima de R$ 2 milhões</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1c2340]">
                Localização
              </label>
              <select className="mt-2 w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 text-[13px] text-gray-500 outline-none focus:border-[#1c2340] focus:ring-0">
                <option value="">Bairro</option>
                <option>Boa Viagem</option>
                <option>Setúbal</option>
                <option>Pina</option>
                <option>Casa Forte</option>
                <option>Graças</option>
                <option>Espinheiro</option>
                <option>Parnamirim</option>
                <option>Madalena</option>
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1c2340]">
                Quartos
              </label>
              <select className="mt-2 w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 text-[13px] text-gray-500 outline-none focus:border-[#1c2340] focus:ring-0">
                <option value="">Nº de quartos</option>
                <option>1 Quarto</option>
                <option>2 Quartos</option>
                <option>3 Quartos</option>
                <option>4+ Quartos</option>
              </select>
            </div>
          </div>

          {/* Filter tags + Button */}
          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[13px] font-medium text-gray-500">Filtro:</span>
              {["Comprar", "Alugar", "Alto Padrão", "Com Lazer"].map((f) => (
                <button
                  key={f}
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-[12px] font-medium text-gray-600 transition-colors hover:border-[#1c2340] hover:text-[#1c2340]"
                >
                  {f}
                </button>
              ))}
            </div>

            <button className="w-full rounded-full bg-[#1c2340] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a3558] sm:w-auto">
              Buscar Imóveis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
