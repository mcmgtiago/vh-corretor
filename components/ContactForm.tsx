export function ContactForm() {
  return (
    <section id="contato" className="bg-gray-50/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Me conta o que você procura. Respondo em até 10 minutos no horário
              comercial.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                    placeholder="(81) 99999-9999"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Interesse */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  >
                    <option value="">Selecione</option>
                    <option>Comprar</option>
                    <option>Alugar</option>
                  </select>
                </div>

                {/* Bairro */}
                <div>
                  <label
                    htmlFor="neighborhood"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bairro de preferência
                  </label>
                  <select
                    id="neighborhood"
                    name="neighborhood"
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  >
                    <option value="">Selecione</option>
                    <option>Boa Viagem</option>
                    <option>Setúbal</option>
                    <option>Pina</option>
                    <option>Casa Forte</option>
                    <option>Graças</option>
                    <option>Espinheiro</option>
                    <option>Parnamirim</option>
                    <option>Madalena</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem{" "}
                  <span className="font-normal text-gray-400">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none"
                  placeholder="Conte um pouco sobre o que procura..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-primary-800 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98] sm:w-auto"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                Prefere falar direto?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                A maioria dos meus clientes me procura pelo WhatsApp. Resposta
                rápida e sem formulários.
              </p>

              <a
                href="https://wa.me/5581996779692?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20im%C3%B3veis"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-green-700"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Chamar no WhatsApp
              </a>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <p className="text-sm font-medium text-gray-700">
                  Me encontre também:
                </p>
                <a
                  href="https://www.instagram.com/_vh.corretor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @_vh.corretor
                </a>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Resposta rápida
                    </p>
                    <p className="text-xs text-gray-500">
                      Em até 10 min no horário comercial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
