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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable right-click
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });

              // Disable keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                // Ctrl+U (view source)
                if (e.ctrlKey && e.key === 'u') { e.preventDefault(); }
                // Ctrl+Shift+I (dev tools)
                if (e.ctrlKey && e.shiftKey && e.key === 'I') { e.preventDefault(); }
                // Ctrl+Shift+J (console)
                if (e.ctrlKey && e.shiftKey && e.key === 'J') { e.preventDefault(); }
                // Ctrl+Shift+C (inspect)
                if (e.ctrlKey && e.shiftKey && e.key === 'C') { e.preventDefault(); }
                // F12
                if (e.key === 'F12') { e.preventDefault(); }
                // Ctrl+S (save)
                if (e.ctrlKey && e.key === 's') { e.preventDefault(); }
                // Ctrl+C (copy) — optional, can be annoying
                // if (e.ctrlKey && e.key === 'c') { e.preventDefault(); }
              });

              // Disable text selection
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });

              // Disable drag
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });

              // Detect DevTools open (basic)
              (function() {
                var threshold = 160;
                setInterval(function() {
                  if (window.outerWidth - window.innerWidth > threshold ||
                      window.outerHeight - window.innerHeight > threshold) {
                    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h1>⚠️ DevTools detectado</h1></div>';
                  }
                }, 1000);
              })();
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
