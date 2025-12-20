'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Seguros() {
  const [activeInsurance, setActiveInsurance] = useState('medicos')

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

  const benefits = [
    'Consultas gratuitas o costo preferencial con especialistas.',
    'Cobertura de deducible de hasta $10,000 pesos',
    'Cobertura de 10% de coaseguro',
    'En grupo Angeles y Star Médica',
  ]

  return (
    <section id="seguros" className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Seguros
            </h2>
          </div>

          {/* Insurance Type Buttons - No Icons */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.button
              onClick={() => setActiveInsurance('medicos')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeInsurance === 'medicos'
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
              }`}
            >
              <h3 className="text-xl font-bold">Seguro de Gastos Médicos</h3>
            </motion.button>

            <motion.button
              onClick={() => setActiveInsurance('mascotas')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeInsurance === 'mascotas'
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
              }`}
            >
              <h3 className="text-xl font-bold">Seguro de Mascotas</h3>
            </motion.button>

            <motion.button
              onClick={() => setActiveInsurance('autos')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeInsurance === 'autos'
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
              }`}
            >
              <h3 className="text-xl font-bold">Seguro de Autos</h3>
            </motion.button>
          </div>

          {/* Insurance Company Logos */}
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

          {/* Insurance Content - Image on Left, Text on Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <motion.div
              key={activeInsurance}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {activeInsurance === 'medicos' && (
                <Image
                  src="/images/seguro-gastosmedicos.png"
                  alt="Seguro de Gastos Médicos"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-3xl"
                />
              )}
              {activeInsurance === 'mascotas' && (
                <div className="w-full aspect-square bg-gradient-to-br from-primary-light to-primary rounded-3xl flex items-center justify-center">
                  <span className="text-white text-6xl">🐾</span>
                </div>
              )}
              {activeInsurance === 'autos' && (
                <div className="w-full aspect-square bg-gradient-to-br from-primary-light to-primary rounded-3xl flex items-center justify-center">
                  <span className="text-white text-6xl">🚗</span>
                </div>
              )}
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              key={`text-${activeInsurance}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {activeInsurance === 'medicos' && (
                <>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Con <span className="font-bold">ERIKA ECHAVARRI</span>, siempre tendrás el respaldo 
                      y la solidez de una empresa dedicada a la asesoría y manejo de tus seguros. Ofreciendo 
                      las mejores opciones pensando en cualquier plan que contrates será garantía de que 
                      recibas el mejor servicio y atención que mereces.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Proteger tu es lo más importante para ti y tus seres queridos.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Un seguro de <span className="font-bold">GASTOS MÉDICOS MAYORES</span> te da tranquilidad en caso 
                      de emergencia médica, cubriendo gastos hospitalarios, ambulancia, cirugías y tratamientos.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Entendemos la importancia de la salud y la seguridad financiera. Por eso, ofrecemos una 
                      amplia gama de seguros de Gastos Medico Mayores para satisfacer tus necesidades y las de 
                      tus seres queridos.
                    </p>
                  </div>

                  <div className="bg-primary-light/20 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Disfruta de beneficios exclusivos con nuestros seguros de GMM
                    </h4>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeInsurance === 'mascotas' && (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-dark">
                    Protege a tus amigos peludos con nuestro seguro de mascotas. Cobertura completa para 
                    consultas veterinarias, emergencias, cirugías y tratamientos.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-dark">
                    Porque tu mascota es parte de tu familia, ofrecemos planes diseñados especialmente 
                    para su cuidado y bienestar.
                  </p>
                </div>
              )}

              {activeInsurance === 'autos' && (
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-dark">
                    Protege tu vehículo con nuestros seguros de autos. Cobertura amplia, responsabilidad 
                    civil, robo total, daños materiales y asistencia vial 24/7.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-dark">
                    Con las mejores aseguradoras del mercado, te ofrecemos tranquilidad en cada viaje.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
