import { GradientBlob } from "@/components/Animations"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-gray-50 py-20 lg:py-28">
      <GradientBlob className="inset-0" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-[12px] font-medium text-gray-600">
            <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Resposta em até 10 minutos
          </span>

          {/* Headline */}
          <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] text-[#1c2340]">
            Pronto para encontrar seu próximo imóvel?
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-500">
            Me conta o que procura. Uma boa conversa é o primeiro passo para o imóvel ideal.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/5581996779692?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20im%C3%B3veis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#a3e635] px-8 py-4 text-[14px] font-semibold text-[#1c2340] transition-colors hover:bg-[#bef264]"
            >
              <svg className="h-5 w-5 text-[#1c2340]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Conversar no WhatsApp
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-[14px] font-semibold text-[#1c2340] transition-colors hover:border-[#1c2340] hover:bg-gray-50"
            >
              Enviar mensagem
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
