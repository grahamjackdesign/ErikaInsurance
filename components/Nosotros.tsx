'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Nosotros() {
  const [expanded, setExpanded] = useState(false)

  const services = [
    'Gastos médicos mayores para proteger tu salud y la de tus seres queridos.',
    'Planes personalizados para el retiro, para que puedas disfrutar de una vida plena y segura.',
    'Planes de ahorro para la universidad de tus hijos, para que puedan alcanzar sus sueños.',
    'Inversiones para proteger y hacer crecer tu patrimonio.',
    'Seguro de autos para proteger tu vehículo y a ti.',
    'Seguro de mascotas para cuidar y proteger a tus amigos peludos.',
  ]

  return (
    <section id="nosotros" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary py-16 lg:py-24">
      {/* Decorative Circles */}
      <div className="decorative-circle w-48 h-48 bg-white/5 -top-24 -left-24" />
      <div className="decorative-circle w-32 h-32 bg-white/10 bottom-32 right-20" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Circle with Icon */}
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🛡️</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="decorative-circle w-20 h-20 bg-white/30 -top-10 -right-10" />
              <div className="decorative-circle w-16 h-16 bg-white/20 -bottom-8 -left-8" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black mb-6">
              Nosotros
            </h2>

            <p className="text-lg leading-relaxed">
              Somos un equipo de profesionales apasionados por la protección de la salud y el patrimonio. 
              Nos ocupamos por el bienestar de las familias y empresas, y nos especializamos en ofrecer 
              soluciones personalizadas para proteger lo que más importa.
            </p>

            <div className="space-y-3">
              <p className="font-bold text-xl">Servicios:</p>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-light mr-2 mt-1">-</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-primary-light hover:text-white transition-all duration-300 shadow-lg"
            >
              {expanded ? 'Leer menos' : 'Leer más'}
            </motion.button>
          </motion.div>
        </div>

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Descubre como podemos ayudarte a{' '}
            <span className="inline-block bg-white text-primary px-4 py-1 rounded-full">
              proteger
            </span>
          </h3>
          <p className="text-white text-xl">lo más importante</p>
        </motion.div>
      </div>
    </section>
  )
}
