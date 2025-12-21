'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InsuranceLogos() {
  const insuranceLogos = [
    { name: 'GNP', src: '/images/logos/gnp.png' },
    { name: 'SKANDIA', src: '/images/logos/skandia.png' },
    { name: 'SEGUROS MONTERREY', src: '/images/logos/monterrey.png' },
    { name: 'BUPA', src: '/images/logos/bupa.png' },
    { name: 'MAPFRE', src: '/images/logos/mapfre.png' },
    { name: 'AXA', src: '/images/logos/axa.png' },
    { name: 'ZURICH', src: '/images/logos/zurich.png' },
    { name: 'PLAN SEGURO', src: '/images/logos/planseguro.png' },
  ]

  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
              Nuestras alianzas con empresas como:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-8">
              {insuranceLogos.map((logo, index) => (
                <div key={index} className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-lg text-center leading-relaxed">
              Nos permiten ofrecerte los mejores productos y servicios para satisfacer tus necesidades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
