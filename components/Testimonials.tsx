"use client"

import { FadeUp, StaggerContainer, StaggerItem, WaveBackground } from "@/components/Animations"

export function Testimonials() {
  const testimonials = [
    {
      name: "Marina C.",
      role: "Comprou apt em Boa Viagem",
      quote:
        "Procurei durante meses por conta própria e não achava nada que fizesse sentido. Em duas semanas com o VH, fechei meu apartamento em Boa Viagem. Atendimento impecável do início ao fim. Me senti segura em cada etapa do processo.",
    },
    {
      name: "Ricardo F.",
      role: "Comprou apt em Setúbal",
      quote:
        "O que mais me impressionou foi a honestidade. Ele me avisou de problemas em imóveis que outras imobiliárias escondiam. Isso pra mim vale mais que qualquer propaganda.",
    },
    {
      name: "Thais M.",
      role: "Alugou apt em Casa Forte",
      quote:
        "Super ágil nas respostas, sempre disponível. Me apresentou opções dentro do que eu pedi, sem ficar empurrando coisa que não fazia sentido. Recomendo de olhos fechados.",
    },
    {
      name: "André P.",
      role: "Comprou apt em Pina",
      quote:
        "Fechei a compra do meu primeiro imóvel com total segurança. Ele me explicou cada etapa, cada documento. Nunca me senti perdido no processo.",
    },
    {
      name: "Camila R.",
      role: "Comprou cobertura em Boa Viagem",
      quote:
        "Profissional de verdade. Conhece cada canto de Recife. Me levou para visitar 4 imóveis e no segundo eu já sabia qual era o meu. Negociação rápida e transparente.",
    },
  ]

  return (
    <section id="depoimentos" className="relative bg-white py-20 lg:py-28">
      <WaveBackground />
      <div className="relative mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
              O que dizem meus clientes
            </h2>
            <p className="mt-3 text-[15px] text-gray-500">
              Mais de 150 negociações concluídas com satisfação.
            </p>
          </div>
        </FadeUp>

        {/* Grid — asymmetric like Tailark */}
        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Featured card — spans 2 rows */}
          <StaggerItem className="sm:col-span-2 lg:row-span-2">
            <div className="h-full rounded-2xl bg-gray-50 p-6 sm:p-8">
              <blockquote className="flex h-full flex-col justify-between gap-8">
                <p className="text-lg font-medium leading-relaxed text-[#1c2340] sm:text-xl">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1c2340] text-sm font-bold text-white">
                    {testimonials[0].name.charAt(0)}
                  </div>
                  <div>
                    <cite className="text-sm font-semibold not-italic text-[#1c2340]">
                      {testimonials[0].name}
                    </cite>
                    <span className="block text-[13px] text-gray-500">
                      {testimonials[0].role}
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </StaggerItem>

          {/* Smaller cards */}
          {testimonials.slice(1).map((t, i) => (
            <StaggerItem key={i} className="lg:col-span-2">
              <div className="h-full rounded-2xl bg-gray-50 p-6">
                <blockquote className="flex h-full flex-col justify-between gap-6">
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c2340]/10 text-xs font-bold text-[#1c2340]">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <cite className="text-[13px] font-semibold not-italic text-[#1c2340]">
                        {t.name}
                      </cite>
                      <span className="block text-[12px] text-gray-500">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
