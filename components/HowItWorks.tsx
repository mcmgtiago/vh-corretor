"use client"

import { useState } from "react"

const steps = [
  {
    number: "01",
    title: "Você me conta o que procura",
    description:
      "Me diz o bairro, o tamanho, o orçamento. Pode ser por WhatsApp, em 2 minutos. Sem formulários longos, sem burocracia.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Eu seleciono as melhores opções",
    description:
      "Filtro o mercado e te apresento só o que realmente faz sentido. Sem spam de 50 links aleatórios. Só imóveis que batem com o que você pediu.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Visitamos juntos",
    description:
      "Agendo as visitas no seu horário. Te acompanho pessoalmente em cada imóvel, explico os detalhes e tiro todas as dúvidas no local.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Negociação e documentação",
    description:
      "Cuido de toda a papelada, prazos e negociação. Você foca na decisão, eu cuido do resto — contratos, certidões, cartório.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Chaves na mão",
    description:
      "Negócio fechado. Te entrego as chaves e sigo disponível para o que precisar. Minha assessoria não termina na assinatura.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="como-funciona" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.15] text-[#1c2340]">
              Do primeiro contato às chaves na sua mão.
            </h2>
            <p className="mt-3 max-w-[500px] text-[15px] leading-relaxed text-gray-500">
              Um processo simples, transparente e sem burocracia desnecessária.
            </p>
          </div>
          <a
            href="https://wa.me/5581996779692?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20a%20buscar%20um%20im%C3%B3vel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1c2340] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#2a3558]"
          >
            Começar agora
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          {steps.map((step, index) => {
            const isOpen = openIndex === index
            const isCompleted = index < openIndex

            return (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-[19px] top-[48px] h-[calc(100%-48px)] w-[2px] transition-colors duration-300 ${
                      isCompleted ? "bg-[#1c2340]" : "bg-gray-200"
                    }`}
                  />
                )}

                {/* Step */}
                <button
                  onClick={() => setOpenIndex(index)}
                  className="group flex w-full items-start gap-5 py-5 text-left transition-all"
                >
                  {/* Icon circle */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isOpen
                        ? "border-[#1c2340] bg-[#1c2340] text-white"
                        : isCompleted
                        ? "border-[#1c2340] bg-[#1c2340] text-white"
                        : "border-gray-200 bg-white text-gray-400 group-hover:border-gray-300"
                    }`}
                  >
                    {isCompleted && !isOpen ? (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      step.icon
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                        Etapa {step.number}
                      </span>
                    </div>
                    <h3
                      className={`mt-1 text-[15px] font-semibold transition-colors ${
                        isOpen ? "text-[#1c2340]" : "text-gray-700 group-hover:text-[#1c2340]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Expandable content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[480px] text-[13px] leading-relaxed text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="shrink-0 pt-2">
                    <svg
                      className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
