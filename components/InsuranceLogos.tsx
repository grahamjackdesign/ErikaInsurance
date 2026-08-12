'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InsuranceLogos() {
  return (
    <section className="relative py-16" style={{ backgroundColor: '#C5C5FF' }}>
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
  )
}
