'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ayudaItems = [
  'Protección patrimonial.',
  'Seguros de gastos médicos.',
  'Seguros de vida.',
  'Planes de retiro.',
  'Ahorro para la educación.',
  'Seguro de autos.',
  'Seguro de mascotas.',
  'Estrategias de inversión y patrimonio.',
]

export default function InsuranceLogos() {
  return (
    <>
      {/* Logos section */}
      <section className="relative pt-0 pb-12" style={{ backgroundColor: "#C5C5FF" }}>
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
              <div className="flex items-center justify-center mb-8">
                <Image
                  src="/images/ins_logos.png"
                  alt="Insurance Company Logos - Skandia, Bupa Global, Plan Seguro, Zurich, GNP, Mapfre"
                  width={1200}
                  height={200}
                  className="w-full max-w-5xl h-auto"
                />
              </div>
              <p className="text-gray-700 text-lg text-center leading-relaxed">
                Nos permiten ofrecerte los mejores productos y servicios para satisfacer tus necesidades.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿En qué puedo ayudarte? section */}
      <section className="bg-[#C5C5FF] pt-0 pb-[50px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">

          {/* Pill heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary bg-white rounded-full px-10 py-5 shadow-sm text-center">
              ¿En qué puedo ayudarte?
            </h3>
          </motion.div>

          {/* 2-column bullet grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ayudaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-white flex-shrink-0" />
                <span className="text-lg leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
