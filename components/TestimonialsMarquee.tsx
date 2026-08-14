"use client"

const testimonials = [
  { name: "Marina C.", text: "Fechei em duas semanas. Incrível.", location: "Boa Viagem" },
  { name: "Ricardo F.", text: "Honestidade acima de tudo. Recomendo.", location: "Setúbal" },
  { name: "Thais M.", text: "Ágil, disponível e sem enrolação.", location: "Casa Forte" },
  { name: "André P.", text: "Meu primeiro imóvel com total segurança.", location: "Pina" },
  { name: "Camila R.", text: "Conhece cada canto de Recife.", location: "Boa Viagem" },
  { name: "Lucas S.", text: "Processo rápido e transparente.", location: "Graças" },
  { name: "Fernanda M.", text: "Encontrou exatamente o que eu queria.", location: "Espinheiro" },
  { name: "Pedro H.", text: "Atendimento excepcional do início ao fim.", location: "Parnamirim" },
]

export function TestimonialsMarquee() {
  return (
    <section className="overflow-hidden bg-gray-50 py-14">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-10">
        <p className="text-center text-[13px] font-medium text-gray-400 uppercase tracking-wider">
          O que dizem nossos clientes
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative mt-8">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent" />

        {/* Scrolling row */}
        <div className="flex animate-[marquee_40s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[300px] shrink-0 rounded-2xl border border-gray-100 bg-white px-6 py-5"
            >
              <p className="text-[13px] leading-relaxed text-gray-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1c2340]/10 text-[10px] font-bold text-[#1c2340]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#1c2340]">{t.name}</p>
                  <p className="text-[11px] text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe via style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
