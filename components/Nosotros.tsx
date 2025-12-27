'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Nosotros() {
  const [expandedNosotros, setExpandedNosotros] = useState(false)
  
  const services = [
    'Gastos médicos mayores para proteger tu salud y la de tus seres queridos.',
    'Planes personalizados para el retiro, para que puedas disfrutar de una vida plena y segura.',
    'Planes de ahorro para la universidad de tus hijos, para que puedan alcanzar sus sueños.',
    'Inversiones para proteger y hacer crecer tu patrimonio.',
    'Seguro de autos para proteger tu vehículo y a ti.',
    'Seguro de mascotas para cuidar y proteger a tus amigos peludos.',
  ]

  const valores = [
    'CONFIANZA',
    'CALIDEZ',
    'DEDICACIÓN',
    'RESPONSABILIDAD',
    'HONESTIDAD',
  ]

  return (
    <section id="nosotros" className="relative bg-gradient-to-b from-primary to-primary-dark pt-[80px] pb-12 mt-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header - removed top padding to reduce space */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nosotros
            </h2>
          </div>

          {/* Introduction with Image on Left */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/erika-foto2.png"
                alt="Protección y Seguridad"
                width={500}
                height={300}
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>

            {/* Right - Text Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  Somos un equipo de profesionales apasionados por la protección de la salud y el patrimonio. 
                  Nos ocupamos por el bienestar de las familias y empresas, y nos especializamos en ofrecer 
                  soluciones personalizadas para proteger lo que más importa.
                </p>

                {/* Services List */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Nuestros servicios incluyen:</h3>
                  <ul className="space-y-4">
                    {/* Always show first 3 items (up to "sus sueños") */}
                    {services.slice(0, 3).map((service, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="text-2xl mt-1">•</span>
                        <span className="text-lg">{service}</span>
                      </motion.li>
                    ))}
                    
                    {/* Show remaining items when expanded */}
                    {expandedNosotros && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {services.slice(3).map((service, index) => (
                          <motion.li
                            key={index + 3}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start gap-3 text-white"
                          >
                            <span className="text-2xl mt-1">•</span>
                            <span className="text-lg">{service}</span>
                          </motion.li>
                        ))}
                      </motion.div>
                    )}
                  </ul>
                  
                  <button
                    onClick={() => setExpandedNosotros(!expandedNosotros)}
                    className="mt-6 text-white font-semibold hover:text-white/80 transition-colors flex items-center gap-2"
                  >
                    {expandedNosotros ? 'Leer menos' : 'Leer más'}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedNosotros ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Philosophy - now inside expandable content */}
                {expandedNosotros && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-12 space-y-6"
                  >
                    <p className="text-white text-lg leading-relaxed">
                      Creemos que la protección de la salud y el bienestar es fundamental para vivir una vida 
                      plena y feliz. Es por eso que trabajamos con las mejores empresas de seguros del mercado 
                      para ofrecerte soluciones personalizadas y efectivas.
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                      Nuestro objetivo es ser tu socio de confianza en la protección de tu futuro y el de 
                      tus seres queridos.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Descubre cómo podemos ayudarte a proteger lo más importante
            </h3>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#DCDCF9] rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">MISIÓN</h4>
              <p className="text-gray-700 leading-relaxed">
                Nuestras soluciones de seguros están diseñadas para proteger tu futuro y el de tus 
                seres queridos, con un enfoque en la personalización y la atención al cliente.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#DCDCF9] rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">VISIÓN</h4>
              <p className="text-gray-700 leading-relaxed">
                Crear un mundo más seguro y protegido, donde todos puedan vivir sin preocupaciones 
                y alcanzar sus objetivos.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#DCDCF9] rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">VALORES</h4>
              <ul className="space-y-2">
                {valores.map((valor, index) => (
                  <li key={index} className="text-gray-700 font-medium">
                    {valor}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
