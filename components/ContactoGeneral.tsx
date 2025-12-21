'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactoGeneral() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    console.log('General Contact Form submitted:', formData)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        })
        setSubmitMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contacto" className="relative bg-gradient-to-b from-primary to-primary-dark pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-white/90">
              ¿Tienes alguna pregunta? Escríbenos y te responderemos pronto
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 space-y-6">
            {/* Nombre y Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contacto-nombre" className="block text-white font-medium mb-2">
                  NOMBRE *
                </label>
                <input
                  type="text"
                  id="contacto-nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="contacto-email" className="block text-white font-medium mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="contacto-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Tu email"
                />
              </div>
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="contacto-telefono" className="block text-white font-medium mb-2">
                TELÉFONO *
              </label>
              <input
                type="tel"
                id="contacto-telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="Tu teléfono"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="contacto-mensaje" className="block text-white font-medium mb-2">
                MENSAJE *
              </label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="Escríbenos tu mensaje"
              />
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
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </div>

            {/* Success Message */}
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
        </motion.div>
      </div>
    </section>
  )
}
