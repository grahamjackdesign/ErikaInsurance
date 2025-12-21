'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Ahorros() {
  const [activeTab, setActiveTab] = useState('retiro')

  // Retirement Plan Form State
  const [retiroFormData, setRetiroFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    fumador: '',
    metaAhorro: '',
    ahorroMensual: '',
    rendimiento: '',
    inversion: '',
    mensaje: '',
  })

  const [isRetiroSubmitting, setIsRetiroSubmitting] = useState(false)
  const [retiroSubmitMessage, setRetiroSubmitMessage] = useState('')

  // University Plan Form State
  const [universidadFormData, setUniversidadFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    fumador: '',
    metaAhorro: '',
    ahorroMensual: '',
    rendimiento: '',
    inversion: '',
    mensaje: '',
  })

  const [isUniversidadSubmitting, setIsUniversidadSubmitting] = useState(false)
  const [universidadSubmitMessage, setUniversidadSubmitMessage] = useState('')

  const handleRetiroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setRetiroFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUniversidadChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUniversidadFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRetiroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsRetiroSubmitting(true)
    setRetiroSubmitMessage('')

    // TODO: Connect to email service later
    console.log('Retirement Plan Form submitted:', retiroFormData)

    // Simulate API call
    setTimeout(() => {
      setIsRetiroSubmitting(false)
      setRetiroSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setRetiroFormData({
          nombre: '',
          email: '',
          telefono: '',
          edad: '',
          fumador: '',
          metaAhorro: '',
          ahorroMensual: '',
          rendimiento: '',
          inversion: '',
          mensaje: '',
        })
        setRetiroSubmitMessage('')
      }, 3000)
    }, 1000)
  }

  const handleUniversidadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUniversidadSubmitting(true)
    setUniversidadSubmitMessage('')

    // TODO: Connect to email service later
    console.log('University Plan Form submitted:', universidadFormData)

    // Simulate API call
    setTimeout(() => {
      setIsUniversidadSubmitting(false)
      setUniversidadSubmitMessage('¡Gracias! Nos pondremos en contacto contigo pronto.')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setUniversidadFormData({
          nombre: '',
          email: '',
          telefono: '',
          edad: '',
          fumador: '',
          metaAhorro: '',
          ahorroMensual: '',
          rendimiento: '',
          inversion: '',
          mensaje: '',
        })
        setUniversidadSubmitMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <section id="ahorros" className="relative bg-white py-20">
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
              Planes de Ahorro
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.button
              onClick={() => setActiveTab('retiro')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeTab === 'retiro'
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
              }`}
            >
              <h3 className="text-xl font-bold">Planes de Retiro</h3>
            </motion.button>

            <motion.button
              onClick={() => setActiveTab('universidad')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeTab === 'universidad'
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-primary-light/20 text-gray-dark hover:bg-primary-light/40'
              }`}
            >
              <h3 className="text-xl font-bold">Planes de Universidad</h3>
            </motion.button>
          </div>

          {/* Content - Image on Left, Text on Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {activeTab === 'retiro' && (
                <Image
                  src="/images/planes-ahorro.png"
                  alt="Planes de Retiro"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-3xl"
                />
              )}
              {activeTab === 'universidad' && (
                <Image
                  src="/images/universitario.png"
                  alt="Planes de Universidad"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-3xl"
                />
              )}
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              key={`text-${activeTab}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {activeTab === 'retiro' && (
                <>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Nuestro seguro de Retiro es una solución integral que te brinda protección y ahorro para tu futuro. 
                      Con este seguro, obtienes un respaldo en un seguro de vida y al mismo tiempo, puedes ahorrar de 
                      acuerdo con tus posibilidades y obtener rendimientos.
                    </p>
                  </div>

                  <div className="bg-primary-light/20 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      BENEFICIOS CLAVE:
                    </h4>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-dark">
                        Protege el bienestar económico de tus seres queridos en caso de fallecimiento, invalidez o 
                        incapacidad total o permanente.
                      </p>
                      <p className="text-lg text-gray-dark">
                        Recibe la suma asegurada en caso de fallecimiento, para que tus beneficiarios estén protegidos.
                      </p>
                      <p className="text-lg font-medium text-gray-dark">
                        Aprovecha los beneficios fiscales:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Deducción de impuestos.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Tu dinero irá creciendo año con año.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Protegemos tu dinero para que no pierda valor en el tiempo.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Plan flexible que te permite hacer aportaciones adicionales.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary-light/10 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      VENTAJAS DE NUESTRO SEGURO DE RETIRO:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-dark">
                        <span className="text-primary text-xl mt-1">•</span>
                        <span className="text-lg">Tranquilidad y seguridad para ti y tus seres queridos.</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-dark">
                        <span className="text-primary text-xl mt-1">•</span>
                        <span className="text-lg">Ahorro y protección para un futuro sin preocupaciones.</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-dark">
                        <span className="text-primary text-xl mt-1">•</span>
                        <span className="text-lg">Flexibilidad para adaptar el plan a tus metas y necesidades y posibilidades.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed text-primary font-medium">
                    Invierte en tu retiro con nuestros Plan Personalizados para el Retiro. Ahorra hoy y disfruta de un 
                    retiro tranquilo y seguro, ¡protege tu estilo de vida!
                  </p>
                </>
              )}

              {activeTab === 'universidad' && (
                <>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-dark">
                      Ayuda a asegurar el futuro educativo de tu hijo con nuestro Seguro de Educación Universitaria. 
                      Este plan te permite ahorrar y administrar un capital económico para que tu hijo pueda alcanzar 
                      sus metas académicas.
                    </p>

                    <div className="bg-primary-light/20 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">
                        Beneficios clave:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Ahorro garantizado para la universidad de tu hijo</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Opción de administrar el ahorro para que tu hijo reciba un ingreso constante a partir de los 18 años</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Rendimientos generados por el ahorro, sin costo adicional</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Tranquilidad de saber que tu hijo tendrá un futuro educativo asegurado</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary-light/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">
                        Ventajas de nuestro Seguro de Educación Universitaria:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Ayuda a tu hijo a alcanzar sus metas académicas</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Ahorro seguro y rentable</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-dark">
                          <span className="text-primary text-xl mt-1">•</span>
                          <span className="text-lg">Flexibilidad para adaptar el plan a tus necesidades y posibilidades</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-lg leading-relaxed text-primary font-medium">
                      Prepara a tus hijos para un futuro brillante con nuestro seguro universitario. Ahorra y protege 
                      su educación. ¡Dales la mejor oportunidad!
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {/* Retirement Plan Form */}
          {activeTab === 'retiro' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Solicita una Cotización:
                  </h3>
                </div>

                <form onSubmit={handleRetiroSubmit} className="space-y-6 max-w-4xl mx-auto">
                  {/* Nombre, Email, Teléfono */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="retiro-nombre" className="block text-gray-700 font-medium mb-2">
                        NOMBRE *
                      </label>
                      <input
                        type="text"
                        id="retiro-nombre"
                        name="nombre"
                        value={retiroFormData.nombre}
                        onChange={handleRetiroChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="retiro-email" className="block text-gray-700 font-medium mb-2">
                        E MAIL *
                      </label>
                      <input
                        type="email"
                        id="retiro-email"
                        name="email"
                        value={retiroFormData.email}
                        onChange={handleRetiroChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu email"
                      />
                    </div>

                    <div>
                      <label htmlFor="retiro-telefono" className="block text-gray-700 font-medium mb-2">
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        id="retiro-telefono"
                        name="telefono"
                        value={retiroFormData.telefono}
                        onChange={handleRetiroChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>

                  {/* Edad, Fumador, Meta de Ahorro */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="retiro-edad" className="block text-gray-700 font-medium mb-2">
                        EDAD
                      </label>
                      <input
                        type="text"
                        id="retiro-edad"
                        name="edad"
                        value={retiroFormData.edad}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu edad"
                      />
                    </div>

                    <div>
                      <label htmlFor="retiro-fumador" className="block text-gray-700 font-medium mb-2">
                        FUMADOR
                      </label>
                      <select
                        id="retiro-fumador"
                        name="fumador"
                        value={retiroFormData.fumador}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Selecciona</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="retiro-metaAhorro" className="block text-gray-700 font-medium mb-2">
                        META DE AHORRO
                      </label>
                      <input
                        type="text"
                        id="retiro-metaAhorro"
                        name="metaAhorro"
                        value={retiroFormData.metaAhorro}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Meta de ahorro"
                      />
                    </div>
                  </div>

                  {/* Ahorro Mensual, Rendimiento, Inversión */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="retiro-ahorroMensual" className="block text-gray-700 font-medium mb-2">
                        AHORRO MENSUAL
                      </label>
                      <input
                        type="text"
                        id="retiro-ahorroMensual"
                        name="ahorroMensual"
                        value={retiroFormData.ahorroMensual}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Ahorro mensual"
                      />
                    </div>

                    <div>
                      <label htmlFor="retiro-rendimiento" className="block text-gray-700 font-medium mb-2">
                        RENDIMIENTO
                      </label>
                      <input
                        type="text"
                        id="retiro-rendimiento"
                        name="rendimiento"
                        value={retiroFormData.rendimiento}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Rendimiento"
                      />
                    </div>

                    <div>
                      <label htmlFor="retiro-inversion" className="block text-gray-700 font-medium mb-2">
                        INVERSIÓN
                      </label>
                      <input
                        type="text"
                        id="retiro-inversion"
                        name="inversion"
                        value={retiroFormData.inversion}
                        onChange={handleRetiroChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Inversión"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="retiro-mensaje" className="block text-gray-700 font-medium mb-2">
                      MENSAJE
                    </label>
                    <textarea
                      id="retiro-mensaje"
                      name="mensaje"
                      value={retiroFormData.mensaje}
                      onChange={handleRetiroChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Mensaje adicional"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isRetiroSubmitting}
                      whileHover={{ scale: isRetiroSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isRetiroSubmitting ? 1 : 0.98 }}
                      className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        isRetiroSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isRetiroSubmitting ? 'Enviando...' : 'Enviar'}
                    </motion.button>
                  </div>

                  {retiroSubmitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {retiroSubmitMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          )}

          {/* University Plan Form */}
          {activeTab === 'universidad' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12"
            >
              <div className="bg-primary-light/10 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    Solicita una Cotización:
                  </h3>
                </div>

                <form onSubmit={handleUniversidadSubmit} className="space-y-6 max-w-4xl mx-auto">
                  {/* Nombre, Email, Teléfono */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="universidad-nombre" className="block text-gray-700 font-medium mb-2">
                        NOMBRE *
                      </label>
                      <input
                        type="text"
                        id="universidad-nombre"
                        name="nombre"
                        value={universidadFormData.nombre}
                        onChange={handleUniversidadChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="universidad-email" className="block text-gray-700 font-medium mb-2">
                        E MAIL *
                      </label>
                      <input
                        type="email"
                        id="universidad-email"
                        name="email"
                        value={universidadFormData.email}
                        onChange={handleUniversidadChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu email"
                      />
                    </div>

                    <div>
                      <label htmlFor="universidad-telefono" className="block text-gray-700 font-medium mb-2">
                        TELÉFONO *
                      </label>
                      <input
                        type="tel"
                        id="universidad-telefono"
                        name="telefono"
                        value={universidadFormData.telefono}
                        onChange={handleUniversidadChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>

                  {/* Edad, Fumador, Meta de Ahorro */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="universidad-edad" className="block text-gray-700 font-medium mb-2">
                        EDAD
                      </label>
                      <input
                        type="text"
                        id="universidad-edad"
                        name="edad"
                        value={universidadFormData.edad}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu edad"
                      />
                    </div>

                    <div>
                      <label htmlFor="universidad-fumador" className="block text-gray-700 font-medium mb-2">
                        FUMADOR
                      </label>
                      <select
                        id="universidad-fumador"
                        name="fumador"
                        value={universidadFormData.fumador}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Selecciona</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="universidad-metaAhorro" className="block text-gray-700 font-medium mb-2">
                        META DE AHORRO
                      </label>
                      <input
                        type="text"
                        id="universidad-metaAhorro"
                        name="metaAhorro"
                        value={universidadFormData.metaAhorro}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Meta de ahorro"
                      />
                    </div>
                  </div>

                  {/* Ahorro Mensual, Rendimiento, Inversión */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="universidad-ahorroMensual" className="block text-gray-700 font-medium mb-2">
                        AHORRO MENSUAL
                      </label>
                      <input
                        type="text"
                        id="universidad-ahorroMensual"
                        name="ahorroMensual"
                        value={universidadFormData.ahorroMensual}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Ahorro mensual"
                      />
                    </div>

                    <div>
                      <label htmlFor="universidad-rendimiento" className="block text-gray-700 font-medium mb-2">
                        RENDIMIENTO
                      </label>
                      <input
                        type="text"
                        id="universidad-rendimiento"
                        name="rendimiento"
                        value={universidadFormData.rendimiento}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Rendimiento"
                      />
                    </div>

                    <div>
                      <label htmlFor="universidad-inversion" className="block text-gray-700 font-medium mb-2">
                        INVERSIÓN
                      </label>
                      <input
                        type="text"
                        id="universidad-inversion"
                        name="inversion"
                        value={universidadFormData.inversion}
                        onChange={handleUniversidadChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Inversión"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="universidad-mensaje" className="block text-gray-700 font-medium mb-2">
                      MENSAJE
                    </label>
                    <textarea
                      id="universidad-mensaje"
                      name="mensaje"
                      value={universidadFormData.mensaje}
                      onChange={handleUniversidadChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Mensaje adicional"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={isUniversidadSubmitting}
                      whileHover={{ scale: isUniversidadSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isUniversidadSubmitting ? 1 : 0.98 }}
                      className={`w-full md:w-auto px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        isUniversidadSubmitting
                          ? 'bg-gray-400 cursor-not-allowed text-white'
                          : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isUniversidadSubmitting ? 'Enviando...' : 'Enviar'}
                    </motion.button>
                  </div>

                  {universidadSubmitMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-primary/10 rounded-lg text-primary text-center font-medium"
                    >
                      {universidadSubmitMessage}
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
