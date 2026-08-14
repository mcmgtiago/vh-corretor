"use client"

import { FadeUp, StaggerContainer, StaggerItem, DotPattern } from "@/components/Animations"

export function GalleryKeys() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      alt: "Entrega de chaves - Cliente 1",
    },
    {
      src: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=600&q=80",
      alt: "Entrega de chaves - Cliente 2",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
      alt: "Entrega de chaves - Cliente 3",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      alt: "Entrega de chaves - Cliente 4",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      alt: "Entrega de chaves - Cliente 5",
    },
    {
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
      alt: "Entrega de chaves - Cliente 6",
    },
  ]

  return (
    <section className="relative bg-white py-20 lg:py-28">
      <DotPattern className="text-[#1c2340]" />
      <div className="relative mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
              Momentos que importam
            </h2>
            <p className="mt-3 text-[15px] text-gray-500">
              Cada chave entregue é uma história de conquista.
            </p>
          </div>
        </FadeUp>

        {/* Grid — masonry style */}
        <StaggerContainer className="mt-12 columns-2 gap-4 sm:columns-3">
          {photos.map((photo, i) => (
            <StaggerItem key={i} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 2 === 0 ? "1/1" : "4/3" }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}