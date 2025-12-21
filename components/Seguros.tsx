'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Seguros() {
  const [activeInsurance, setActiveInsurance] = useState('medicos')

  const benefits = [
    'Consultas gratuitas o costo preferencial con especialistas.',
    'Cobertura de deducible de hasta $10,000 pesos',
    'Cobertura de 10% de coaseguro',
    'En grupo Angeles y Star Médica',
  ]

  // Medical Insurance Form State
  const [formData, setFormData] = useState({
    telefono: '',
    email: '',
    plan: '',
    cobertura: '',
    nombre: '',
    fechaNacimiento: '',
    codigoPostal: '',
    enfermedad: '',
    horario: '',
    medio: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // TODO: Connect to email service later
    console.log('Medical Insurance Form submitted:', formData)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          telefono: '',
          email: '',
          plan: '',
          cobertura: '',
          nombre: '',
          fechaNacimiento: '',
          codigoPostal: '',
          enfermedad: '',
          horario: '',
          medio: '',
        })
        setSubmitMessage('')
      }, 3000)
    }, 1000)
  }

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

          {/* Medical Insurance Contact Form */}
          {activeInsurance === 'medicos' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Solicita tu Cotización
                  </h3>
                  <p className="text-gray-600">
                    Completa el formulario y nos pondremos en contacto contigo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                  {/* Teléfono y Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu teléfono"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E MAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu email"
                      />
                    </div>
                  </div>

                  {/* Plan y Cobertura */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="plan" className="block text-gray-700 font-medium mb-2">
                        PLAN
                      </label>
                      <input
                        type="text"
                        id="plan"
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Especifica el plan"
                      />
                    </div>

                    <div>
                      <label htmlFor="cobertura" className="block text-gray-700 font-medium mb-2">
                        COBERTURA
                      </label>
                      <input
                        type="text"
                        id="cobertura"
                        name="cobertura"
                        value={formData.cobertura}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Especifica la cobertura"
                      />
                    </div>
                  </div>

                  {/* Nombre y Fecha de Nacimiento */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                        NOMBRE *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="fechaNacimiento" className="block text-gray-700 font-medium mb-2">
                        FECHA DE NACIMIENTO *
                      </label>
                      <input
                        type="date"
                        id="fechaNacimiento"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Código Postal */}
                  <div>
                    <label htmlFor="codigoPostal" className="block text-gray-700 font-medium mb-2">
                      CÓDIGO POSTAL *
                    </label>
                    <input
                      type="text"
                      id="codigoPostal"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Ingresa tu código postal"
                    />
                  </div>

                  {/* ¿Padece alguna enfermedad? */}
                  <div>
                    <label htmlFor="enfermedad" className="block text-gray-700 font-medium mb-2">
                      ¿PADECE ALGUNA ENFERMEDAD?
                    </label>
                    <textarea
                      id="enfermedad"
                      name="enfermedad"
                      value={formData.enfermedad}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Describe si padeces alguna enfermedad (opcional)"
                    />
                  </div>

                  {/* Contacto Preferente */}
                  <div>
                    <h4 className="text-gray-700 font-bold text-lg mb-4">CONTACTO PREFERENTE</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="horario" className="block text-gray-700 font-medium mb-2">
                          HORARIO
                        </label>
                        <select
                          id="horario"
                          name="horario"
                          value={formData.horario}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        >
                          <option value="">Selecciona un horario</option>
                          <option value="manana">Mañana (9:00 - 12:00)</option>
                          <option value="tarde">Tarde (12:00 - 18:00)</option>
                          <option value="noche">Noche (18:00 - 21:00)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="medio" className="block text-gray-700 font-medium mb-2">
                          MEDIO
                        </label>
                        <select
                          id="medio"
                          name="medio"
                          value={formData.medio}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        >
                          <option value="">Selecciona un medio</option>
                          <option value="telefono">Teléfono</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="email">Email</option>
                          <option value="videollamada">Videollamada</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                    </motion.button>
                  </div>

                  {/* Success Message */}
                  {submitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
