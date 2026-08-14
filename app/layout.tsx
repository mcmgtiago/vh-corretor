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
    "Corretor de imóveis em Recife especializado em médio e alto padrão. Apartamentos, casas e coberturas em Boa Viagem, Setúbal, Pina e região. CRECI-PE 22316 F. Atendimento direto e personalizado via WhatsApp.",
  keywords: [
    "imóveis recife",
    "corretor recife",
    "apartamento boa viagem",
    "imóveis alto padrão recife",
    "comprar apartamento recife",
    "alugar apartamento recife",
    "corretor de imóveis recife",
    "VH Corretor",
    "imóveis setúbal",
    "imóveis pina",
    "apartamento alto padrão boa viagem",
    "casas recife",
    "cobertura recife",
    "CRECI-PE 22316",
    "imóveis médio padrão recife",
    "corretor boa viagem",
  ],
  authors: [{ name: "VH Corretor", url: "https://vhcorretor.com.br" }],
  creator: "VH Corretor",
  publisher: "VH Corretor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vhcorretor.com.br",
    siteName: "VH Corretor",
    title: "VH Corretor | Imóveis de Médio e Alto Padrão em Recife",
    description:
      "Encontre seu imóvel ideal em Recife. Apartamentos, casas e coberturas nas melhores localizações. Atendimento direto com quem conhece cada metro quadrado.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "VH Corretor - Imóveis em Recife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VH Corretor | Imóveis de Médio e Alto Padrão em Recife",
    description:
      "Encontre seu imóvel ideal em Recife. Apartamentos, casas e coberturas nas melhores localizações.",
    images: ["/hero-bg.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://vhcorretor.com.br",
  },
  category: "Real Estate",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "VH Corretor",
  description:
    "Corretor de imóveis em Recife especializado em médio e alto padrão. Apartamentos, casas e coberturas em Boa Viagem, Setúbal, Pina e região.",
  url: "https://vhcorretor.com.br",
  telephone: "+5581996779692",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Recife",
  },
  priceRange: "$$$ - $$$$",
  sameAs: ["https://www.instagram.com/_vh.corretor"],
  image: "/hero-bg.jpg",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#1c2340" />
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && e.key === 'u') { e.preventDefault(); }
                if (e.ctrlKey && e.shiftKey && e.key === 'I') { e.preventDefault(); }
                if (e.ctrlKey && e.shiftKey && e.key === 'J') { e.preventDefault(); }
                if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); }
                if (e.key === 'F12') { e.preventDefault(); }
                if (e.ctrlKey && e.key === 's') { e.preventDefault(); }
              });
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased font-sans select-none">
        {children}
      </body>
    </html>
  )
}
