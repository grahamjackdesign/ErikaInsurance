'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/30 via-white to-primary/10 py-16 lg:py-24">
      {/* Decorative Circles */}
      <div className="decorative-circle w-32 h-32 bg-primary/10 -top-16 -left-16" />
      <div className="decorative-circle w-24 h-24 bg-primary-light/20 top-32 right-20" />
      <div className="decorative-circle w-40 h-40 bg-primary/5 bottom-20 left-1/4" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Tu tranquilidad, mi prioridad
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-dark leading-tight">
              Asesor Patrimonial y{' '}
              <span className="text-gradient">Financiero</span>
            </h1>

            <div className="space-y-2">
              <p className="text-lg text-gray-dark font-medium">
                Especialista en
              </p>
              <div className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-lg">
                Planificación Patrimonial
              </div>
              <p className="text-lg text-gray-dark font-medium">
                y Financiero
              </p>
            </div>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary mt-8"
            >
              ¡Agenda hoy!
            </motion.a>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-dark font-bold text-xl">Erika Echevarri</span>
                </div>
              </div>

              {/* Decorative Elements Around Image */}
              <div className="decorative-circle w-16 h-16 bg-primary-light/40 -top-8 -right-8" />
              <div className="decorative-circle w-12 h-12 bg-primary/30 -bottom-6 -left-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
