"use client"

import { StaggerContainer, StaggerItem, TiltCard, DotPattern } from "@/components/Animations"

const properties = [
  {
    id: 1,
    title: "Apartamento 3 Quartos em Boa Viagem",
    location: "Boa Viagem, Recife",
    price: "R$ 750.000",
    type: "Venda",
    bedrooms: 3,
    bathrooms: 3,
    area: "113m²",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    id: 2,
    title: "Apartamento com Suíte e Lazer Completo",
    location: "Boa Viagem, Recife",
    price: "R$ 439.000",
    type: "Venda",
    bedrooms: 3,
    bathrooms: 3,
    area: "60m²",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    id: 3,
    title: "Apartamento na Av. Boa Viagem com Vista Mar",
    location: "Pina, Recife",
    price: "R$ 1.700.000",
    type: "Venda",
    bedrooms: 3,
    bathrooms: 4,
    area: "150m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    id: 4,
    title: "Apartamento Amplo com 2 Vagas",
    location: "Boa Viagem, Recife",
    price: "R$ 700.000",
    type: "Venda",
    bedrooms: 3,
    bathrooms: 3,
    area: "135m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 5,
    title: "Plaza Miró | 4 Quartos | 3 Suítes",
    location: "Setúbal, Recife",
    price: "R$ 1.500.000",
    type: "Venda",
    bedrooms: 4,
    bathrooms: 5,
    area: "151m²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
  {
    id: 6,
    title: "Apartamento Alto Padrão com Lazer",
    location: "Boa Viagem, Recife",
    price: "R$ 1.600.000",
    type: "Venda",
    bedrooms: 4,
    bathrooms: 4,
    area: "136m²",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
]

export function PropertiesGrid() {
  return (
    <section id="imoveis" className="relative bg-white py-20 lg:py-28">
      <DotPattern className="text-[#1c2340]" />
      <div className="relative mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
              Conheça nossos imóveis premium
            </h2>
            <p className="mt-3 max-w-[500px] text-[15px] leading-relaxed text-gray-500">
              Cada imóvel é pessoalmente verificado. Qualidade excepcional e localizações privilegiadas em Recife.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1c2340] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a3558]"
          >
            Ver todos os imóveis
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid — 3 columns */}
        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <TiltCard className="group h-full cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/50 bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold text-[#1c2340] backdrop-blur-sm">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Info — below image */}
                <div className="mt-4">
                  {/* Amenities row */}
                  <div className="flex items-center gap-3 text-[12px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 3v18m16.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                      </svg>
                      {property.bedrooms} Quartos
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {property.bathrooms} Banheiros
                    </span>
                    <span className="text-gray-300">·</span>
                    <span>{property.area}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-[15px] font-semibold text-[#1c2340] group-hover:underline">
                    {property.title}
                  </h3>

                  {/* Price + location */}
                  <div className="mt-1.5 flex items-center gap-2 text-[13px]">
                    <span className="font-bold text-[#1c2340]">{property.price}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-gray-500">{property.location}</span>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
