'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Seguros() {
  const [expandedMedicos, setExpandedMedicos] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const benefits = [
    'Consultas gratuitas o costo preferencial con especialistas.',
    'Cobertura de deducible de hasta $10,000 pesos',
    'Cobertura de 10% de coaseguro',
    'En grupo Angeles y Star Médica',
  ]

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
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'gastos-medicos', ...formData }),
      })

      if (response.ok) {
        setSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
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
      } else {
        setSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
      }
    } catch (error) {
      console.error('Error sending form:', error)
      setSubmitMessage('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="seguros" className="relative bg-gradient-to-b from-primary to-primary-dark pt-[60px] pb-20">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Seguros de Gastos Médicos
            </h2>
          </div>

          {/* Content - Image on Left, Text on Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/images/seguro-gastosmedicos.png"
                alt="Seguro de Gastos Médicos"
                width={500}
                height={400}
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-white">
                  Con <span className="font-bold">ERIKA ECHAVARRI</span>, siempre tendrás el respaldo
                  y la solidez de una empresa dedicada a la asesoría y manejo de tus seguros. Ofreciendo
                  las mejores opciones pensando en cualquier plan que contrates será garantía de que
                  recibas el mejor servicio y atención que mereces.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  Proteger tu es lo más importante para ti y tus seres queridos.
                </p>

                {expandedMedicos && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <p className="text-lg leading-relaxed text-white">
                      Un seguro de <span className="font-bold">GASTOS MÉDICOS MAYORES</span> te da tranquilidad en caso
                      de emergencia médica, cubriendo gastos hospitalarios, ambulancia, cirugías y tratamientos.
                    </p>
                    <p className="text-lg leading-relaxed text-white">
                      Entendemos la importancia de la salud y la seguridad financiera. Por eso, ofrecemos una
                      amplia gama de seguros de Gastos Medico Mayores para satisfacer tus necesidades y las de
                      tus seres queridos.
                    </p>
                  </motion.div>
                )}

                <button
                  onClick={() => setExpandedMedicos(!expandedMedicos)}
                  className="text-white/80 font-semibold hover:text-white transition-colors flex items-center gap-2"
                >
                  {expandedMedicos ? 'Leer menos' : 'Leer más'}
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedMedicos ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">
                  Disfruta de beneficios exclusivos con nuestros seguros de GMM
                </h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-white">
                      <span className="text-white text-xl mt-1">•</span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA Pill */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => setShowForm(!showForm)}
              className="text-2xl lg:text-3xl font-bold text-primary bg-white rounded-full px-10 py-5 shadow-md hover:bg-white/90 transition-colors duration-200"
            >
              Solicita tu Cotización
            </button>
            {!showForm && (
              <p className="text-white/80 text-sm">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            )}
          </div>

          {/* Collapsible Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <p className="text-white/80 text-lg">
                      Completa el formulario y nos pondremos en contacto contigo
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
                    {/* Teléfono y Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telefono" className="block text-white font-medium mb-2">TELÉFONO *</label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                          placeholder="Ingresa tu teléfono"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">E MAIL *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                          placeholder="Ingresa tu email"
                        />
                      </div>
                    </div>

                    {/* Plan y Cobertura */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="plan" className="block text-white font-medium mb-2">PLAN *</label>
                        <select
                          id="plan"
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                        >
                          <option value="" className="text-gray-800">Selecciona un plan</option>
                          <option value="Personal" className="text-gray-800">Personal</option>
                          <option value="Familiar" className="text-gray-800">Familiar</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="cobertura" className="block text-white font-medium mb-2">COBERTURA *</label>
                        <select
                          id="cobertura"
                          name="cobertura"
                          value={formData.cobertura}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                        >
                          <option value="" className="text-gray-800">Selecciona cobertura</option>
                          <option value="Nacional" className="text-gray-800">Nacional</option>
                          <option value="Internacional" className="text-gray-800">Internacional</option>
                        </select>
                      </div>
                    </div>

                    {/* Nombre y Fecha de Nacimiento */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-white font-medium mb-2">NOMBRE *</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                          placeholder="Ingresa tu nombre completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="fechaNacimiento" className="block text-white font-medium mb-2">FECHA DE NACIMIENTO *</label>
                        <input
                          type="date"
                          id="fechaNacimiento"
                          name="fechaNacimiento"
                          value={formData.fechaNacimiento}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Código Postal */}
                    <div>
                      <label htmlFor="codigoPostal" className="block text-white font-medium mb-2">CÓDIGO POSTAL *</label>
                      <input
                        type="text"
                        id="codigoPostal"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                        placeholder="Ingresa tu código postal"
                      />
                    </div>

                    {/* Enfermedad */}
                    <div>
                      <label htmlFor="enfermedad" className="block text-white font-medium mb-2">¿PADECE ALGUNA ENFERMEDAD? *</label>
                      <select
                        id="enfermedad"
                        name="enfermedad"
                        value={formData.enfermedad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                      >
                        <option value="" className="text-gray-800">Selecciona una opción</option>
                        <option value="No" className="text-gray-800">No</option>
                        <option value="Diabetes" className="text-gray-800">Diabetes</option>
                        <option value="Hipertension" className="text-gray-800">Hipertensión</option>
                        <option value="Cancer" className="text-gray-800">Cáncer</option>
                        <option value="Otra" className="text-gray-800">Otra</option>
                      </select>
                    </div>

                    {/* Contacto Preferente */}
                    <div>
                      <h4 className="text-white font-bold text-lg mb-4">CONTACTO PREFERENTE</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="horario" className="block text-white font-medium mb-2">HORARIO *</label>
                          <select
                            id="horario"
                            name="horario"
                            value={formData.horario}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                          >
                            <option value="" className="text-gray-800">Selecciona un horario</option>
                            <option value="9:00 a 12:00" className="text-gray-800">9:00 a 12:00</option>
                            <option value="12:00 a 14:00" className="text-gray-800">12:00 a 14:00</option>
                            <option value="14:00 a 16:00" className="text-gray-800">14:00 a 16:00</option>
                            <option value="16:00 a 18:00" className="text-gray-800">16:00 a 18:00</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="medio" className="block text-white font-medium mb-2">MEDIO *</label>
                          <select
                            id="medio"
                            name="medio"
                            value={formData.medio}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                          >
                            <option value="" className="text-gray-800">Selecciona un medio</option>
                            <option value="Mail" className="text-gray-800">Mail</option>
                            <option value="Llamada" className="text-gray-800">Llamada</option>
                            <option value="WhatsApp" className="text-gray-800">WhatsApp</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-6">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                          isSubmitting
                            ? 'bg-white/40 cursor-not-allowed text-white'
                            : 'bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
                      </motion.button>
                    </div>

                    {submitMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-white/20 rounded-lg text-white text-center font-medium"
                      >
                        {submitMessage}
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  )
}
