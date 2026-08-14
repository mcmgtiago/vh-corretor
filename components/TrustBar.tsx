"use client"

import { useEffect, useRef, useState } from "react"
import { animate } from "motion"

function CountingNumber({
  value,
  suffix = "",
}: {
  value: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animate(0, value, {
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94],
              onUpdate: (latest) => {
                if (ref.current) {
                  ref.current.textContent =
                    Math.round(latest).toLocaleString("pt-BR") + suffix
                }
              },
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value, suffix, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  )
}

import { DotPattern } from "@/components/Animations"

export function TrustBar() {
  const metrics = [
    { value: 230, suffix: "+", label: "Imóveis no portfólio" },
    { value: 25, suffix: "", label: "Bairros atendidos" },
    { value: 5, suffix: "+", label: "Anos de experiência" },
    { value: 150, suffix: "+", label: "Negociações concluídas" },
  ]

  return (
    <section className="relative border-b border-gray-100 bg-white pt-16">
      <DotPattern />
      <div className="mx-auto max-w-[1200px] px-8 pb-16 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#1c2340] sm:text-4xl lg:text-5xl">
                <CountingNumber value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-2 text-sm text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
