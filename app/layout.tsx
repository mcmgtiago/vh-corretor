import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VH Corretor | Imóveis de Médio e Alto Padrão em Recife",
  description:
    "Apartamentos, casas e coberturas nas melhores localizações de Recife e região metropolitana. Atendimento direto e personalizado.",
  keywords: [
    "imóveis recife",
    "corretor recife",
    "apartamento boa viagem",
    "imóveis alto padrão recife",
    "comprar apartamento recife",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
