'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-white pt-20" style={{ minHeight: 'calc(100vh - 70px)' }}>
      {/* Reduced bottom padding significantly and added larger negative margin to bring next section up */}
      <div className="pt-8 pb-0" style={{ marginBottom: '-120px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Purple decorative bar */}
              <div className="flex items-center gap-6">
                <div className="w-2 h-24 bg-primary rounded-full"></div>
                <div className="pt-10">
                  <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight font-heading" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
                    Asesor Patrimonial y<br />Financiero
                  </h1>
                </div>
              </div>

              {/* Subtitle with purple pill background */}
              <div className="space-y-4">
                <p className="text-xl text-gray-700 font-heading font-semibold">
                  Especialista en
                </p>
                <div className="inline-block">
                  <div className="bg-primary text-white px-6 py-3 rounded-full font-heading font-bold text-lg">
                    Planificación Patrimonial
                  </div>
                </div>
                <p className="text-xl text-primary font-heading font-semibold">
                  y Financiero
                </p>
              </div>

              {/* Tagline */}
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
                Tu tranquilidad, mi prioridad
              </h2>
            </motion.div>

            {/* Right side - Header image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/erika-header.png"
                  alt="Erika Echevarri"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Solid purple bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-primary"></div>
    </section>
  )
}
